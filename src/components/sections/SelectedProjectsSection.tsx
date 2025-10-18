"use client";

import Link from "next/link";

import { Carousel, Card, type CarouselCard } from "@/components/ui/apple-cards-carousel";
import type { FeaturedProjectsSection } from "@/lib/mockWordpressClient";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";

type SelectedProjectsSectionProps = {
  content: FeaturedProjectsSection;
  locale: Locale;
};

export function SelectedProjectsSection({ content, locale }: SelectedProjectsSectionProps) {
  const cards: CarouselCard[] = content.projects.map((project) => ({
    src: project.image.src,
    title: project.name,
    category: project.type,
    content: (
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            {project.type}
          </p>
          <h3 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
            {project.name}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 text-sm text-neutral-600 sm:grid-cols-2 dark:text-neutral-200">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-400">
              Location
            </p>
            <p>{project.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-400">
              Year
            </p>
            <p>{project.year}</p>
          </div>
        </div>
        <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          We crafted bespoke lighting, materiality, and staging for this {project.type.toLowerCase()} to match the unique atmosphere of {project.location}.
        </p>
        <Link
          href={localizeHref(locale, content.ctaHref)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-900 transition-colors hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-400"
        >
          {content.ctaLabel}
        </Link>
      </div>
    ),
  }));

  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-28 pt-24 sm:px-10">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:text-sm">
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
      <Carousel
        items={cards.map((card, index) => (
          <Card key={content.projects[index].id} card={card} index={index} layout />
        ))}
      />
    </section>
  );
}
