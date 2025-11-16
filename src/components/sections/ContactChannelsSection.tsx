import Link from "next/link";

import type { ContactChannel, ContactPageContent } from "@/lib/wordpressClient";

type ContactChannelsSectionProps = {
  channels: ContactChannel[];
  heading: ContactPageContent["channelsHeading"];
};

export function ContactChannelsSection({ channels, heading }: ContactChannelsSectionProps) {
  return (
    <section className="bg-[#040404] py-24 text-neutral-100">
      <div className="mx-auto w-[96%] max-w-6xl space-y-10">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">{heading.eyebrow}</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">{heading.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {channels.map((channel) => (
            <article
              key={channel.id}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 transition hover:border-white/30"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {channel.label}
                </span>
                <Link
                  href={channel.href}
                  className="inline-flex w-fit items-center gap-2 text-xl font-semibold text-white transition group-hover:text-neutral-200"
                >
                  {channel.value}
                  <span aria-hidden>↗</span>
                </Link>
              </div>
              <p className="text-sm text-neutral-400">{channel.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
