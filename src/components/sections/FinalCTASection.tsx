"use client";

import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";
import type { FinalCTASection as FinalCTASectionContent } from "@/lib/wordpressClient";
import {Sparkles  } from "@/components/ui/sparkles-simple";
// import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

type FinalCTASectionProps = {
  content: FinalCTASectionContent;
  locale: Locale;
};

export function FinalCTASection({ content, locale }: FinalCTASectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-24 sm:px-10">

      <div className="relative overflow-hidden rounded-3xl border border-neutral-900 bg-[#090909] sm:px-16">
        {/* Sparkles Background */}


        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] opacity-60" /> */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.6),rgba(9,9,9,0.9))]" />

        <div className="relative flex flex-col gap-10">

          <BackgroundBeamsWithCollision>
            <Sparkles/>
            <div className="space-y-5">
              <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
                {content.subtitle}
              </span>
              <h2 className="max-w-3xl text-4xl font-semibold text-neutral-50 sm:text-5xl">
                {content.title}
              </h2>
              <p className="max-w-3xl text-neutral-400">“{content.quote}”</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={localizeHref(locale, content.primaryCta.href)}
                className="cta-button rounded-3xl relative inline-flex items-center gap-3 overflow-hidden border border-white/70 px-6 py-3 text-sm uppercase tracking-[0.4em] text-neutral-50 hover:text-[#040404]"
              >
                <span className="relative z-10">{content.primaryCta.label}</span>
                <span aria-hidden className="relative z-10">
                  →
                </span>
              </Link>
              <Link
                href={localizeHref(locale, content.secondaryCta.href)}
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-neutral-500 transition-colors hover:text-neutral-200"
              >
                {content.secondaryCta.label}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </BackgroundBeamsWithCollision>
        </div>
      </div>
    </section>
  );
}
