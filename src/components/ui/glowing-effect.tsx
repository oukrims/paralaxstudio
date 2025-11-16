"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface GlowingEffectProps {
  blur?: number;
  borderWidth?: number;
  spread?: number;
  proximity?: number;
  inactiveZone?: number;
  variant?: "default" | "white";
  glow?: boolean;
  disabled?: boolean;
  movementDuration?: number;
  className?: string;
}

export function GlowingEffect({
  blur = 0,
  borderWidth = 1,
  spread = 20,
  proximity = 0,
  inactiveZone = 0.7,
  variant = "default",
  glow = false,
  disabled = true,
  movementDuration = 2,
  className = "",
}: GlowingEffectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const parent = cardRef.current.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const element = cardRef.current?.parentElement;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [disabled, mouseX, mouseY]);

  const gradientColor =
    variant === "white"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(255, 255, 255, 0.4)";

  const background = useMotionTemplate`
    radial-gradient(
      ${spread * 10}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor},
      transparent 70%
    )
  `;

  const insetValue = `-${borderWidth}px`;

  return (
    <motion.div
      ref={cardRef}
      className={`pointer-events-none absolute rounded-[inherit] transition-opacity duration-300 ${className}`}
      style={{
        inset: insetValue,
        background: !disabled || glow ? background : "transparent",
        filter: blur > 0 ? `blur(${blur}px)` : "none",
        opacity: isHovered || glow ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
}
