import Image from "next/image";
import Link from "next/link";

import type { ContactOffice, ContactPageContent } from "@/lib/wordpressClient";

type ContactOfficesSectionProps = {
  offices: ContactOffice[];
  heading: ContactPageContent["officesHeading"];
};

export function ContactOfficesSection({ offices, heading }: ContactOfficesSectionProps) {
  return (
    <section className="bg-[#060606] py-24 text-neutral-100">
      <div className="mx-auto w-[96%] max-w-6xl space-y-10">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">{heading.eyebrow}</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">{heading.title}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {offices.map((office) => (
            <article
              key={office.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] transition hover:border-white/20"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={office.image.src}
                  alt={office.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {office.city}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{office.country}</p>
                </div>
                <ul className="text-sm text-neutral-300">
                  {office.address.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Fuseau horaire : {office.timezone}
                </p>
                <Link
                  href={office.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.35em] text-neutral-300 transition hover:text-neutral-100"
                >
                  Voir sur la carte
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
