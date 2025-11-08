"use client";
import { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Timeline } from "../ui/timeline";
import type { ProcessSection as ProcessSectionType } from "@/lib/mockWordpressClient";

export function ProcessSection({ content }: { content: ProcessSectionType }) {
  const timelineData = content.steps.map((step) => ({
    title: step.title,
    content: (
      <div>
        <p className="text-base text-neutral-600 dark:text-neutral-300 mb-4">{step.description}</p>
        <div className="text-sm text-neutral-700 dark:text-neutral-400">
          <ul className="list-disc pl-5 space-y-1">
            {step.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }));

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && latest < 0.9) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  });

  useEffect(() => {
    // Ensure dark mode is set initially if it's not already
    document.documentElement.classList.add("dark");
    return () => {
      // Clean up and set back to dark mode when component unmounts
      document.documentElement.classList.add("dark");
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-semibold text-black dark:text-white sm:text-5xl">
          {content.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          {content.intro}
        </p>
      </div>
      <Timeline data={timelineData} />
    </section>
  );
}