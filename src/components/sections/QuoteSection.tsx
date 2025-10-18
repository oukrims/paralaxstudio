"use client";

import { motion } from "motion/react";

import { LampContainer } from "@/components/ui/lamp";
import type { QuoteSection as QuoteSectionContent } from "@/lib/mockWordpressClient";

type QuoteSectionProps = {
  content: QuoteSectionContent;
};

export function QuoteSection({ content }: QuoteSectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-28 pt-16 sm:px-10">
      <LampContainer className="min-h-[70vh] rounded-[36px] border border-cyan-500/10 bg-gradient-to-b from-[#040404] via-[#050505] to-black">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="translate-y-80 space-y-8 text-center text-neutral-100"
        >
          <p className="text-2xl font-light leading-tight tracking-wide text-neutral-200 sm:text-3xl md:text-4xl">
            “{content.text}”
          </p>
          {content.attribution ? (
            <cite className="block text-sm uppercase tracking-[0.35em] text-cyan-300/80">
              {content.attribution}
            </cite>
          ) : null}
        </motion.blockquote>
      </LampContainer>
    </section>
  );
}
