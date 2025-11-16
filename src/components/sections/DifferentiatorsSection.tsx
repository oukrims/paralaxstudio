"use client";

import type { DifferentiatorsSection as DifferentiatorsSectionContent } from "@/lib/wordpressClient";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type DifferentiatorsSectionProps = {
  content: DifferentiatorsSectionContent;
};

// Define grid areas for 6 items layout
const gridAreas = [
  "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",   // Item 1: spans 2 cols on md, left side on xl
  "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",  // Item 2: right side on md, left bottom on xl
  "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",   // Item 3: left side on md, center tall on xl
  "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]", // Item 4: right side on md, top right on xl
  "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]",  // Item 5: full width on md, bottom center on xl
  "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]", // Item 6: full width on md, bottom right on xl
];

export function DifferentiatorsSection({ content }: DifferentiatorsSectionProps) {
  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-28 pt-24 sm:px-10">
      <div className="mb-12 flex flex-col gap-4">
        <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          {content.title}
        </span>
        {content.intro && (
          <p className="max-w-3xl text-base text-neutral-400 leading-relaxed">
            {content.intro}
          </p>
        )}
      </div>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {content.items.map((item, index) => (
          <GridItem
            key={item.id}
            area={gridAreas[index] || gridAreas[0]}
            icon={
              <svg
                className="h-4 w-4 text-black dark:text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            }
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  index: number;
}

const GridItem = ({ area, icon, title, description, index }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="group relative h-full rounded-2xl border border-white/[0.08] p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={false}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-neutral-950/50 p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <div className="w-fit rounded-lg border border-neutral-700 p-2">
                {icon}
              </div>
              <span className="text-2xl font-bold text-neutral-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
