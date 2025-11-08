"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { FAQSection as FAQSectionContent } from "@/lib/mockWordpressClient";

type FAQSectionProps = {
  content: FAQSectionContent;
};

export function FAQSection({ content }: FAQSectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-28 pt-24 sm:px-10">
      <div className="mb-10 flex flex-col gap-4 text-center">
        <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          {content.title}
        </span>
      </div>
      <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
        {content.items.map((item) => (
          <AccordionItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

type AccordionItemProps = {
  question: string;
  answer: string;
};

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg text-neutral-200">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-neutral-400"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
