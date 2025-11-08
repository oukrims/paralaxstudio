"use client";

import type { ServicesSection as ServicesSectionType } from "@/lib/mockWordpressClient";
import { cn } from "@/lib/utils";
import {
  IconLayoutGrid,
  IconCamera,
  IconMovie,
  Icon360,
  IconBrain,
  IconDeviceGamepad,
} from "@tabler/icons-react";

type ServicesSectionProps = {
  content: ServicesSectionType;
};

const serviceIcons = [
  <IconLayoutGrid key="schematics" />,
  <IconCamera key="renders" />,
  <IconMovie key="animations" />,
  <Icon360 key="panoramas" />,
  <IconBrain key="ai" />,
  <IconDeviceGamepad key="experiences" />,
];

export function ServicesSection({ content }: ServicesSectionProps) {
  const features = content.items.map((item, index) => ({
    title: item.title,
    description: item.bullets.join(". "),
    icon: serviceIcons[index] || <IconLayoutGrid />,
  }));

  const videoUrl = "/video/main_page_video.webm";

  return (
    <section className="relative bg-neutral-950 py-24 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20">
        <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-400">{content.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              {...feature}
              index={index}
              totalItems={features.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  totalItems,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  totalItems: number;
}) => {
  const numCols = 3;
  const isFirstInRow = index % numCols === 0;
  const isLastRow = Math.floor(index / numCols) === Math.floor((totalItems - 1) / numCols);

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        isFirstInRow && "lg:border-l dark:border-neutral-800",
        !isLastRow && "lg:border-b dark:border-neutral-800"
      )}
    >
      {!isLastRow ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-900/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};