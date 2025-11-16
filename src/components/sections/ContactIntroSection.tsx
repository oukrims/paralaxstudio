import type { ContactPageContent } from "@/lib/wordpressClient";

type ContactIntroSectionProps = {
  content: ContactPageContent["intro"];
};

export function ContactIntroSection({ content }: ContactIntroSectionProps) {
  return (
    <section className="bg-[#050505] py-20 text-neutral-100">
      <div className="mx-auto w-[96%] max-w-5xl space-y-8">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">Brief</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.title}</h2>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            {content.body}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {content.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-neutral-200"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
