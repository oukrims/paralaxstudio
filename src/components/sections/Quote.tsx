"use client";

import { MaskContainer } from "../ui/svg-mask-effect";

interface QuoteProps {
  quote: string;
}

export function Quote({ quote }: QuoteProps) {
  return (
    <section className="relative w-full border-0 overflow-hidden ">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            {quote}
          </p>
        }
        className="h-[40rem] rounded-md text-white dark:text-black"
      >
        {quote}
      </MaskContainer>
    </section>
  );
}
