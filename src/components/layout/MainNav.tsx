"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

import type { Locale } from "@/i18n/config";

import { ParallaxLogo } from "../branding/ParallaxLogo";
import { LanguageSwitcher } from "../locale/LanguageSwitcher";
import { localizeHref } from "@/lib/localizeHref";

type MainNavProps = {
  locale: Locale;
  services: string[];
};

export function MainNav({ locale, services }: MainNavProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const copy = navDictionary[locale] ?? navDictionary.fr;

  const navLinks = [
    { href: "#gallery", label: copy.gallery },
    { href: "#cases", label: copy.cases },
    { href: "#studio", label: copy.studio },
    { href: "#blog", label: copy.blog },
  ];

  const openServices = () => setIsServicesOpen(true);
  const closeServices = () => setIsServicesOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (typeof document === "undefined" || !isMobileMenuOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-[#040404]/40 backdrop-blur">
      <div className="relative mx-auto flex w-[95vw] max-w-none items-center justify-between gap-6 px-6 py-6 sm:px-10">
        <div className="flex items-center gap-4">
          <ParallaxLogo variant="light" className="h-8 w-auto" />
          <span className="hidden text-[11px] uppercase tracking-[0.4em] text-neutral-500 sm:inline">
            {locale === "fr" ? "Agence 3D" : "3D Studio"}
          </span>
        </div>

        <nav className="hidden flex-1 items-center justify-end gap-8 text-xs uppercase tracking-[0.35em] text-neutral-400 lg:flex">
          <div className="flex min-w-[170px] flex-col gap-1 text-neutral-500">
            <span className="text-[11px] tracking-[0.4em]">{copy.contact}</span>
            <a
              href="mailto:info@cylind.com"
              className="text-[16px] lowercase tracking-[0.08em] text-neutral-100 transition-colors hover:text-white"
            >
              info@cylind.com
            </a>
          </div>

          <div className="hidden min-w-[170px] flex-col gap-1 text-neutral-500 md:flex">
            <span className="text-[11px] tracking-[0.4em]">{copy.instagram}</span>
            <a
              href="https://www.instagram.com/cylind.work"
              className="text-[13px] lowercase tracking-[0.12em] text-neutral-200 transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              @parallaxstud.io
            </a>
          </div>

          <div className="hidden items-center gap-5 text-[11px] tracking-[0.3em] text-neutral-400 xl:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="relative hidden items-center lg:flex" onMouseEnter={openServices} onMouseLeave={closeServices}>
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="flex items-center gap-2 text-left text-[11px] uppercase tracking-[0.3em] text-neutral-500 transition-colors hover:text-neutral-200"
              aria-expanded={isServicesOpen}
            >
              <span className="text-neutral-400">{copy.services}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className={`h-3.5 w-3.5 fill-none stroke-current transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-neutral-200" : "text-neutral-500"
                }`}
              >
                <path d="M6 9l6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="hidden items-center gap-4 text-[11px] tracking-[0.3em] text-neutral-400 lg:flex">
            <LanguageSwitcher activeLocale={locale} />
            <Link
              href={localizeHref(locale, "/contact")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/60 px-6 py-2 text-[11px] uppercase tracking-[0.35em] text-neutral-100 transition hover:text-[#040404]"
            >
              <span className="absolute inset-0 -z-10 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">{copy.cta}</span>
              <span aria-hidden className="relative z-10">
                →
              </span>
            </Link>
          </div>
        </nav>

        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-neutral-100 transition hover:border-white/80 lg:hidden"
        >
          {isMobileMenuOpen ? <IconX className="h-4 w-4" /> : <IconMenu2 className="h-4 w-4" />}
          <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
        </button>

        <div
          onMouseEnter={openServices}
          onMouseLeave={closeServices}
          className={`absolute left-1/2 top-full mt-4 hidden w-screen max-w-[95vw] -translate-x-1/2 border border-white/10 bg-[#050505]/95 py-10 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)] backdrop-blur transition-all duration-300 lg:block ${
            isServicesOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="mx-auto grid w-[85%] gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <span
                key={service}
                className="text-[11px] uppercase tracking-[0.3em] text-neutral-300 transition-colors hover:text-white"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#030303]/90 backdrop-blur-lg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
          >
            <motion.div
              className="mx-auto mt-24 flex w-[90vw] max-w-md flex-col gap-8 rounded-3xl border border-white/10 bg-[#050505]/95 p-8 text-neutral-100 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-neutral-500">
                <span>Menu</span>
                <button type="button" onClick={closeMobileMenu} aria-label="Close menu">
                  <IconX className="h-5 w-5 text-neutral-300" />
                </button>
              </div>

              <div className="flex flex-col gap-4 text-lg uppercase tracking-[0.25em]">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} onClick={closeMobileMenu} className="text-neutral-200 transition hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-500">{copy.services}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.25em] text-neutral-300">
                  {services.map((service) => (
                    <span key={service} className="rounded-full border border-white/20 px-3 py-1">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
                <div>
                  <span className="block text-[11px] tracking-[0.35em] text-neutral-500">{copy.contact}</span>
                  <a href="mailto:info@cylind.com" className="text-lg lowercase tracking-[0.1em] text-white">
                    info@cylind.com
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] tracking-[0.35em] text-neutral-500">{copy.instagram}</span>
                  <a
                    href="https://www.instagram.com/cylind.work"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base lowercase tracking-[0.12em] text-neutral-200"
                  >
                    @parallaxstud.io
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <LanguageSwitcher activeLocale={locale} />
                <Link
                  href={localizeHref(locale, "/contact")}
                  onClick={closeMobileMenu}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/60 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-neutral-100 transition hover:text-[#040404]"
                >
                  <span className="absolute inset-0 -z-10 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative z-10">{copy.cta}</span>
                  <span aria-hidden className="relative z-10">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const navDictionary: Record<Locale, {
  contact: string;
  instagram: string;
  services: string;
  gallery: string;
  cases: string;
  studio: string;
  blog: string;
  cta: string;
}> = {
  en: {
    contact: "Contact",
    instagram: "Instagram",
    services: "Services",
    gallery: "Gallery",
    cases: "Cases",
    studio: "Studio",
    blog: "Blog",
    cta: "Start a project",
  },
  fr: {
    contact: "Contact",
    instagram: "Instagram",
    services: "Services",
    gallery: "Galerie",
    cases: "Réalisations",
    studio: "Studio",
    blog: "Journal",
    cta: "Lancer un projet",
  },
};
