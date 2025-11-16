"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import type { Locale } from "@/i18n/config";
import type { ClientsSection as ClientsSectionContent } from "@/lib/wordpressClient";
import { localizeHref } from "@/lib/localizeHref";

type ClientsSectionProps = {
  content: ClientsSectionContent;
  locale: Locale;
};

export function ClientsSection({ content, locale }: ClientsSectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-28 pt-24 sm:px-10">
      <div className="mb-12 flex flex-col gap-4">
        <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          {content.title}
        </span>
        <p className="max-w-3xl text-2xl text-neutral-200">{content.intro}</p>
      </div>

      <div className="border-t border-b border-neutral-900">
        {content.items.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.4 }}
            className="grid gap-6 border-b border-neutral-900 py-10 last:border-b-0 md:grid-cols-[220px_minmax(0,1fr)]"
          >
            <div className="space-y-2">
              {client.logo ? (
                <div className="relative h-12 w-32 opacity-80">
                  <Image
                    src={client.logo.src}
                    alt={client.logo.alt}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              ) : (
                <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <h3 className="text-xl font-semibold text-neutral-100">{client.title}</h3>
            </div>
            <p className="text-neutral-400">{client.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href={localizeHref(locale, content.ctaHref)}
          className="text-sm uppercase tracking-[0.4em] text-neutral-500 transition-colors hover:text-neutral-300"
        >
          {content.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
