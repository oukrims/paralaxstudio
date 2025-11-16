import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { AboutSection as AboutSectionContent } from "@/lib/wordpressClient";
import { localizeHref } from "@/lib/localizeHref";

type AboutSectionProps = {
  content: AboutSectionContent;
  locale: Locale;
};

export function AboutSection({ content, locale }: AboutSectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-28 pt-24 sm:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            {content.title}
          </span>
          <p className="text-2xl leading-relaxed text-neutral-200">
            {content.body}
          </p>
        </div>

        <div className="space-y-6 border-t border-neutral-900 pt-6">
          <h3 className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            {content.dnaTitle}
          </h3>
          <p className="text-neutral-400">{content.dnaBody}</p>
          <Link
            href={localizeHref(locale, content.ctaHref)}
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-neutral-500 transition-colors hover:text-neutral-300"
          >
            {content.ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
