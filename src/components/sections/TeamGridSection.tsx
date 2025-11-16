import Image from "next/image";

import type { TeamSection } from "@/lib/wordpressClient";

type TeamGridSectionProps = {
  content: TeamSection;
};

export function TeamGridSection({ content }: TeamGridSectionProps) {
  return (
    <section className="relative bg-[#060606] py-24 text-neutral-100">
      <div className="mx-auto w-[96%] max-w-6xl space-y-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">Team</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.title}</h2>
          <p className="max-w-3xl text-neutral-400">{content.intro}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.members.map((member) => (
            <article
              key={member.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] transition hover:border-white/25"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{member.role}</p>
                <p className="mt-auto text-sm text-neutral-400">{member.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
