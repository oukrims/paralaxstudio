"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    const element = ref.current;
    if (element && isHovered) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isHovered, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index || 0) * 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200",
        "relative overflow-hidden",
        "bg-black border border-white/[0.1]",
        "flex flex-col justify-between p-6 space-y-4",
        className
      )}
    >
      {/* Glowing effect */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/bento:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${springX.get()}px ${springY.get()}px, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover/bento:opacity-100">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
      </div>

      {header}

      <div className="relative z-10 transition duration-200 group-hover/bento:translate-x-1">
        {icon && (
          <div className="mb-4 text-neutral-500 transition-colors duration-200 group-hover/bento:text-neutral-300">
            {icon}
          </div>
        )}

        <div className="font-bold text-neutral-200 mb-2">
          {title}
        </div>

        <div className="font-normal text-neutral-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
