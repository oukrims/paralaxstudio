import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { SimpleHeroContent } from "@/lib/wordpressClient";
import { localizeHref } from "@/lib/localizeHref";
import { cn } from "@/lib/utils";
import Waves from "@/components/ui/waves";
type SimpleHeroProps = {
  content: SimpleHeroContent;
  locale: Locale;
  className?: string;
};

export function SimpleHero({ content, locale, className }: SimpleHeroProps) {
  const primaryHref = content.cta?.href ? localizeHref(locale, content.cta.href) : undefined;
  const secondaryHref = content.secondaryCta?.href ? localizeHref(locale, content.secondaryCta.href) : undefined;

  return (
    <section className={cn(
      "relative border-b border-neutral-900/60 bg-transparent pb-20 pt-32 text-neutral-100",
      className,
    )}
    >
        
      <div className="mx-auto flex w-[96%] z-50 max-w-5xl flex-col gap-10 px-6 sm:px-10">
        <div className="space-y-6">
          {content.eyebrow && (
            <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              {content.eyebrow}
            </span>
          )}
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            {content.title}
          </h1>
          {content.subtitle && (
            <p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              {content.subtitle}
            </p>
          )}
        </div>

        {(primaryHref || secondaryHref) && (
          <div className="flex z-50 flex-wrap gap-4">
            {primaryHref && content.cta && (
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-3 rounded-full border border-black/50 px-6 py-3 text-xs bg-white uppercase tracking-[0.35em] text-neutral-500 transition-colors hover:bg-transparent hover:border-white hover:text-white"
              >
                <span>{content.cta.label}</span>
                <span aria-hidden>→</span>
              </Link>
            )}
            {secondaryHref && content.secondaryCta && (
              <Link
                href={secondaryHref}
                className="inline-flex z-50 items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-400 transition-colors hover:text-neutral-200"
              >
                <span>{content.secondaryCta.label}</span>
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="z-0">
 <Waves
          lineColor="#FFFFFF"
          backgroundColor="rgba(255, 255, 255, 0.1)"
          waveSpeedX={0.02}
          waveSpeedY={0.001}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={21}
          yGap={16}
          style={
            {
              zIndex: 1
            }
          }
        />
              </div>
    </section>
  );
}
