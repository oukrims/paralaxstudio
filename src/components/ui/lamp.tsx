"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full min-h-[60vh] items-center justify-center overflow-hidden bg-[#040404] py-24",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.22),rgba(4,4,4,0.85)_65%,rgba(4,4,4,1)_92%)]" />
        <motion.div
          initial={{ opacity: 0.5, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute left-1/2 top-0 h-[130%] w-40 -translate-x-1/2 bg-[linear-gradient(180deg,rgba(12,138,192,0)_0%,rgba(12,138,192,0.42)_32%,rgba(12,138,192,0.55)_52%,rgba(12,138,192,0.08)_80%,rgba(12,138,192,0)_100%)] blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0.4, scale: 0.7 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="absolute left-1/2 bottom-[-18%] h-48 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(12,172,211,0.5),rgba(4,4,4,0)_70%)] blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0.3, scaleY: 0.6 }}
          whileInView={{ opacity: 0.65, scaleY: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="absolute left-1/2 top-[45%] h-64 w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.38),rgba(14,116,144,0.05)_70%,transparent_90%)] blur-[80px]"
        />
        <motion.div
          initial={{ opacity: 0.25, scaleX: 0.6 }}
          whileInView={{ opacity: 0.8, scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
          className="absolute left-1/2 top-[58%] h-[1px] w-[480px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
        />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
        {children}
      </div>
    </div>
  );
};
