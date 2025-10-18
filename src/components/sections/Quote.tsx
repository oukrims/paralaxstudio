"use client";

import { motion } from "motion/react";

import { LampContainer } from "@/components/ui/lamp";

interface QuoteProps {
  quote: string;
  attribution?: string;
}

export function Quote({ quote, attribution }: QuoteProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-16 sm:px-10">
      <LampContainer className="min-h-[520px] rounded-[32px] border border-cyan-500/15 bg-gradient-to-b from-[#040404] via-[#050505] to-[#020202]">
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex max-w-3xl flex-col items-center text-center text-neutral-50"
        >
          <p className="text-2xl font-light leading-tight tracking-wide text-neutral-100 sm:text-3xl md:text-[2.8rem]">
            “{quote}”
          </p>
          {attribution ? (
            <cite className="mt-6 text-xs uppercase tracking-[0.45em] text-cyan-200/80">
              {attribution}
            </cite>
          ) : null}
        </motion.blockquote>
      </LampContainer>
    </section>
  );
}
