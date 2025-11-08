"use client";

import { motion } from "framer-motion";

import type { DifferentiatorsSection as DifferentiatorsSectionContent } from "@/lib/mockWordpressClient";

type DifferentiatorsSectionProps = {
  content: DifferentiatorsSectionContent;
};

export function DifferentiatorsSection({ content }: DifferentiatorsSectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-28 pt-24 sm:px-10">
      <div className="mb-12 flex flex-col gap-4">
        <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          {content.title}
        </span>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900/40 sm:grid-cols-2">
        {content.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4 bg-[#080808] p-8"
          >
            <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold text-neutral-100">{item.title}</h3>
            <p className="text-sm text-neutral-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
