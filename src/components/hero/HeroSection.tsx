"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import type { HeroContent, FooterContent, SiteSettings } from "@/lib/wordpressClient";
import type { Locale } from "@/i18n/config";

import { cn } from "@/lib/utils";
import { localizeHref } from "@/lib/localizeHref";
import { HeroParallax } from "../ui/hero-parallax";

type HeroSectionProps = {
  locale: Locale;
  content: HeroContent;
  settings: SiteSettings;
  footer: FooterContent;
};

export function HeroSection({ locale, content, settings, footer }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headlineTranslation = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const zIndex = useTransform(scrollYProgress, [0.99, 1], [10, 1000]);
  const [parallaxContainerClass, setParallaxContainerClass] = useState(
    "pointer-events-none",
  );

  useEffect(() => {
    return zIndex.onChange((latest) => {
      if (latest >= 1000) {
        setParallaxContainerClass("pointer-events-auto");
      } else {
        setParallaxContainerClass("pointer-events-none");
      }
    });
  }, [zIndex]);

  const heroCopy = heroDictionary[locale] ?? heroDictionary.fr;
  const parallaxProducts = useMemo(() => {
    if (!content.gallery.length) {
      return [];
    }

    const target = Math.max(15, content.gallery.length);
    const repeated = Array.from({
      length: Math.ceil(target / content.gallery.length),
    })
      .flatMap(() => content.gallery)
      .slice(0, target);

    return repeated.map((image, index) => ({
      title: image.alt || `Gallery item ${index + 1}`,
      link: localizeHref(locale, "/gallery"),
      thumbnail: image.src,
    }));
  }, [content.gallery, locale]);

  return (
    <section
      ref={containerRef}
      className="relative isolate h-[200vh] overflow-hidden bg-[#040404]"
    >
      <div className="absolute inset-x-0 top-0 z-20 flex h-screen flex-col pt-24">
        <div className="mx-auto flex w-[96%] max-w-6xl flex-1 flex-col justify-center gap-12 px-6 pb-24 sm:px-10">
          <motion.div
            style={{ y: headlineTranslation }}
            className="flex flex-col gap-8 text-left sm:max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-neutral-500">
              Parallax Stud.io
            </span>
            <h1 className="text-4xl font-semibold leading-[1.05] text-[#f5f5f4] sm:text-6xl lg:text-7xl">
              {content.title}
            </h1>
            <p className="text-lg text-neutral-400 sm:text-xl">
              {content.subtitle}
            </p>
            <figure className="max-w-2xl border-l border-neutral-800 pl-6 text-neutral-500">
              <blockquote className="text-base italic text-neutral-400 sm:text-lg">
                “{content.quote}”
              </blockquote>
            </figure>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={localizeHref(locale, "/contact")}
                className="cta-button inline-flex items-center gap-3 border border-white/70 px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-neutral-100 hover:text-[#040404]"
              >
                <span className="relative z-10">{heroCopy.primaryCta}</span>
                <span aria-hidden className="relative z-10">
                  →
                </span>
              </Link>
              <Link
                href={localizeHref(locale, "/gallery")}
                className="text-[11px] uppercase tracking-[0.4em] text-neutral-400 transition-colors hover:text-neutral-200"
              >
                {heroCopy.secondaryCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {parallaxProducts.length > 0 && (
        <motion.div
          style={{ zIndex }}
          className={cn(
            "absolute inset-x-0 top-20 bottom-0",
            parallaxContainerClass,
          )}
        >
          <HeroParallax products={parallaxProducts} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/60 to-transparent" />
        </motion.div>
      )}

    </section>
  );
}

const heroDictionary: Record<Locale, {
  primaryCta: string;
  secondaryCta: string;
}> = {
  en: {
    primaryCta: "Start a project",
    secondaryCta: "View portfolio",
  },
  fr: {
    primaryCta: "Lancer un projet",
    secondaryCta: "Voir le portfolio",
  },
};
