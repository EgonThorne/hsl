import { Icons } from "@/components/blog/icons";
import { buttonVariants } from "@/components/ui/button";
import { getPostData, getPostsData } from "@/lib/mdx";
import { cn, formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/blog/mdx-components";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostProps {
  params: {
    slug: string;
  };
}

//data = metadata

export default async function PostPage({ params }: BlogPostProps) {
  const { slug } = params;
  const { content, title, description, image, date, authors } =
    getPostData(slug);

  if (!content) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>

      <div>
        {date && (
          <time dateTime={date} className="block text-sm text-muted-foreground">
            Published on {formatDate(date)}
          </time>
        )}

        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {title}
        </h1>

        {/* {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />

                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null} */}
      </div>

      {image && (
        <Image
          src={image}
          alt={title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}

      {/* <Mdx code={post.body.code} /> */}
      {/* <MDXRemote source={content} /> */}

      <MDXRemote source={content} components={components} />

      <hr className="mt-12" />

      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
}
