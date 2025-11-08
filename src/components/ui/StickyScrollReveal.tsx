"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type StickyScrollItem = {
  title: string;
  description: ReactNode;
  eyebrow?: string;
};

type StickyScrollRevealProps = {
  content: StickyScrollItem[];
  className?: string;
  innerClassName?: string;
};

export function StickyScrollReveal({
  content,
  className,
  innerClassName,
}: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative h-[180vh] md:h-[150vh]", className)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0),rgba(5,5,5,0.85))]" />

      <div
        className={cn(
          "sticky top-24 mx-auto flex h-[calc(100vh-6rem)] w-full max-w-3xl items-center justify-center overflow-hidden rounded-[2.5rem] border border-neutral-900 bg-[#080808]/90 px-10 py-14 shadow-[0_60px_120px_-60px_rgba(0,0,0,0.75)] backdrop-blur",
          innerClassName,
        )}
      >
        {content.map((item, index) => (
          <StickyItem
            key={`${item.title}-${index}`}
            item={item}
            index={index}
            total={content.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

type StickyItemProps = {
  item: StickyScrollItem;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
};

function StickyItem({ item, index, total, scrollYProgress }: StickyItemProps) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [index === 0 ? 1 : 0, 1],
  );
  const translateY = useTransform(scrollYProgress, [start, end], [80, 0]);

  return (
    <motion.div
      style={{ opacity, y: translateY, zIndex: total - index }}
      className="absolute inset-0 flex flex-col justify-center gap-6 px-2 text-left"
    >
      {item.eyebrow ? (
        <span className="text-xs uppercase tracking-[0.45em] text-neutral-600">
          {item.eyebrow}
        </span>
      ) : null}
      <h3 className="text-3xl font-semibold text-neutral-50">{item.title}</h3>
      <div className="text-sm leading-relaxed text-neutral-400">
        {item.description}
      </div>
    </motion.div>
  );
}
