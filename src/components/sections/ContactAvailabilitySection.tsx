import type { ContactAvailability } from "@/lib/wordpressClient";

type ContactAvailabilitySectionProps = {
  content: ContactAvailability;
};

export function ContactAvailabilitySection({ content }: ContactAvailabilitySectionProps) {
  return (
    <section className="bg-[#050505] py-24 text-neutral-100">
      <div className="mx-auto w-[96%] max-w-5xl space-y-10">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">Planning</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.title}</h2>
          <p className="max-w-3xl text-neutral-300">{content.subtitle}</p>
        </div>

        <ul className="space-y-3">
          {content.slots.map((slot) => (
            <li
              key={slot}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-neutral-200"
            >
              {slot}
            </li>
          ))}
        </ul>

        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">{content.note}</p>
      </div>
    </section>
  );
}
