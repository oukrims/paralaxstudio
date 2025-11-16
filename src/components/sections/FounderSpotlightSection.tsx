import Image from "next/image";

import type { FounderSpotlight } from "@/lib/wordpressClient";

type FounderSpotlightSectionProps = {
  content: FounderSpotlight;
};

export function FounderSpotlightSection({ content }: FounderSpotlightSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-900/60 bg-[#040404] py-24 text-neutral-100">
      <div className="mx-auto flex w-[96%] max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">Founder</span>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {content.name}
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{content.title}</p>
          <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">{content.bio}</p>
          {content.quote && (
            <blockquote className="border-l-2 border-neutral-700 pl-6 text-lg italic text-neutral-200">
              “{content.quote}”
            </blockquote>
          )}
          <div className="grid gap-4 sm:grid-cols-3">
            {content.experienceHighlights.map((highlight) => (
              <div key={highlight.id} className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <span className="text-2xl font-semibold text-white">{highlight.value}</span>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] w-full max-w-[420px] flex-shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-[#030303]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(min-width: 1024px) 420px, 80vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
}
