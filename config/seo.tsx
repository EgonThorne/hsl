import type { Metadata } from "next";
import config from "@/config/site";

// 这些都是您可以添加到页面的 SEO 标签。
// 它使用默认标题/说明/OG 等预填充数据，您可以为每个页面自定义它。
// 它已添加到根 layout.js 中，因此您不必将其添加到每个页面
// 但我建议为每个页面设置规范 URL（export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// 请参阅 https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
} = {}) => {
  return {
    // 最多 50 个字符（你的应用能为用户做什么？） > 你的主要内容应该在这里
    title: title || config.appName,
    // 最多 160 个字符（您的应用如何帮助用户？）
    description: description || config.appDescription,
    // 一些关键字用逗号分隔。默认情况下它将是你的应用程序名称
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    // 为需要完全限定 URL 的其他字段设置基本 URL 前缀（例如 og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png'）
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${config.domainName}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: "summary_large_image",
      creator: "@marc_louvion",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// 结构化数据，用于 Google 上的丰富结果。了解更多信息：https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// 在这里找到您的类型（SoftwareApp、Book...）：https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// 使用此工具检查数据是否结构良好：https://search.google.com/test/rich-results
// 您不必使用此组件，但它会增加您在 Google 上获得丰富摘要的机会。
// 我建议将下面的这个用于您的 /page.js 软件应用：它告诉 Google 您的 AppName 是一个软件，并且它在 12 条评论中的评分为 4.8/5。
// 用您自己的数据填写字段
// 请参阅 https://shipfa.st/docs/features/seo
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication",
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,
          author: {
            "@type": "Person",
            name: "Marc Lou",
          },
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "12",
          },
          offers: [
            {
              "@type": "Offer",
              price: "9.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  );
};
