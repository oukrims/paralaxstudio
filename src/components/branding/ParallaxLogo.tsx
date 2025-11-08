import Image from "next/image";

import logoDark from "../../../Logos/parallax logo noir sans back.png";
import logoLight from "../../../Logos/parallax logo Blanc sans back.png";

type ParallaxLogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function ParallaxLogo({ variant = "dark", className }: ParallaxLogoProps) {
  const asset = variant === "light" ? logoLight : logoDark;

  return (
    <Image
      src={asset}
      priority
      alt="Parallax Stud.io logo"
      className={className}
      sizes="120px"
      placeholder="empty"
    />
  );
}
