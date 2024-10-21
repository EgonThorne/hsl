import Link from "next/link";
import React from "react";

export default function Example() {
  return (
    <div className="relative isolate px-6 pt-3 lg:px-5">
      <div className="mx-auto max-w-2xl py-28 sm:py-42 lg:py-44">
        <AnnouncementBanner />
        <MainContent />
      </div>
    </div>
  );
}

function AnnouncementBanner() {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-white ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20">
        Announcing our next steps.{" "}
        <Link
          href="/blog"
          className="font-semibold text-indigo-600 dark:text-indigo-400"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="text-center">
      <h1 className="text-7xl font-light tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        Hello basic Launcher
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
        Build a beautiful landing page.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          Get started
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
        >
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
