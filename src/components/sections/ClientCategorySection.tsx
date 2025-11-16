"use client";

import type { Locale } from "@/i18n/config";

type ClientCategory = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
};

type ClientCategorySectionProps = {
  content: ClientCategory;
  locale: Locale;
};

export function ClientCategorySection({
  content,
  locale,
}: ClientCategorySectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 py-16 sm:px-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Title and Description */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-balance text-black md:text-5xl dark:text-white">
            {content.title}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed dark:text-neutral-400">
            {content.description}
          </p>
        </div>

        {/* Right: Benefits List */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            {content.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                  <svg
                    className="h-4 w-4 text-neutral-600 dark:text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="flex-1 text-base text-neutral-700 leading-relaxed dark:text-neutral-300">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
