"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconMessageCircle, IconX } from "@tabler/icons-react";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";

type FloatingContactButtonProps = {
  locale: Locale;
};

export function FloatingContactButton({ locale }: FloatingContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-[9998]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href={localizeHref(locale, "/contact")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-white px-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:scale-105"
      >
        {/* Gradient hover effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Icon with animation */}
        <motion.div
          animate={{
            rotate: isHovered ? 0 : [0, -10, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? 0 : Infinity,
            repeatDelay: 3,
          }}
        >
          <IconMessageCircle className="h-6 w-6 text-black" strokeWidth={1.5} />
        </motion.div>

        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.15em] text-black"
          >
            {locale === "fr" ? "Contact" : "Contact"}
          </motion.span>
        </AnimatePresence>

        {/* Pulse effect */}
        <span className="absolute inset-0 -z-20 rounded-full bg-white animate-ping opacity-20" style={{ animationDuration: "3s" }} />
      </Link>
    </motion.div>
  );
}
