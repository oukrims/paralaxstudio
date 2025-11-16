"use client";

import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";
import type { ArticlesSection as ArticlesSectionContent } from "@/lib/wordpressClient";

type ArticlesSectionProps = {
  content: ArticlesSectionContent;
  locale: Locale;
};

export function ArticlesSection({ content, locale }: ArticlesSectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-24 sm:px-10">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
            {content.title}
          </h2>
          <p className="max-w-3xl text-2xl leading-snug text-neutral-200">
            {content.intro}
          </p>
        </div>
        <Link
          href={localizeHref(locale, content.ctaHref)}
          className="text-sm uppercase tracking-[0.4em] text-neutral-500 transition-colors hover:text-neutral-300"
        >
          {content.ctaLabel}
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {content.articles.map((article) => (
          <article
            key={article.id}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-900 bg-[#0a0a0a] transition hover:border-neutral-700"
          >
            <div className="relative h-56 w-full overflow-hidden sm:h-64">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex flex-1 flex-col gap-6 p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {article.category} • {article.published} • {article.readTime}
                </p>
                <h3 className="text-2xl font-semibold text-neutral-50 transition group-hover:text-white">
                  {article.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                {article.excerpt}
              </p>
              <div className="mt-auto">
                <Link
                  href={localizeHref(locale, article.href)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  {content.articleCtaLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
