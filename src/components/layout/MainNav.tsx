"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

import type { Locale } from "@/i18n/config";
import type { FooterContent } from "@/lib/wordpressClient";
import type { ServiceNavItem, Navigation } from "@/lib/defaultContent";

import { ParallaxLogo } from "../branding/ParallaxLogo";
import { LanguageSwitcher } from "../locale/LanguageSwitcher";
import { localizeHref } from "@/lib/localizeHref";

type MainNavProps = {
  locale: Locale;
  services: ServiceNavItem[];
  footer: FooterContent;
  navigation: Navigation;
};

export function MainNav({ locale, services, footer, navigation }: MainNavProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVousEtesOpen, setIsVousEtesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const emailContact = footer && Array.isArray(footer.contact)
    ? footer.contact.find((c) => c.label.toLowerCase().includes("email"))
    : null;
  const contactEmail =
    emailContact?.value ||
    (Array.isArray(footer?.contact) ? footer.contact[0]?.value : undefined) ||
    'parallax.studio@gmail.com';
  const contactEmailHref =
    emailContact?.href ||
    (Array.isArray(footer?.contact) ? footer.contact[0]?.href : undefined) ||
    'mailto:parallax.studio@gmail.com';
  const instagramHandle = footer?.socials?.find(s => s.label.toLowerCase().includes('instagram'))?.label || '@parallaxstud.io';
  const instagramHref = footer?.socials?.find(s => s.label.toLowerCase().includes('instagram'))?.href || 'https://www.instagram.com/parallax.stud.io';

  // Scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: localizeHref(locale, "/"), label: locale === "fr" ? "Accueil" : "Home" },
    { href: localizeHref(locale, "/gallery"), label: navigation.gallery },
    { href: localizeHref(locale, "/studio"), label: navigation.studio },
    { href: localizeHref(locale, "/tarifs"), label: navigation.tarifs },
    { href: localizeHref(locale, "/blog"), label: locale === "fr" ? "Actualités" : "News" },
  ];

  // Specific service types as per user specification
  const specificServices = [
    { label: locale === "fr" ? "Schémas 2D" : "2D Diagrams", href: localizeHref(locale, "/services#schemas-2d") },
    { label: locale === "fr" ? "Rendus 3D Fixes" : "Static 3D Renders", href: localizeHref(locale, "/services#rendus-3d") },
    { label: locale === "fr" ? "Animations Vidéo" : "Video Animations", href: localizeHref(locale, "/services#animations") },
    { label: locale === "fr" ? "Panoramiques 360°" : "360° Panoramas", href: localizeHref(locale, "/services#rendus-360") },
    { label: locale === "fr" ? "Génération Artificielle" : "AI Generation", href: localizeHref(locale, "/services#ia") },
    { label: locale === "fr" ? "Expériences Virtuelles" : "Virtual Experiences", href: localizeHref(locale, "/services#vr") },
  ];

  // Vous êtes options
  const vousEtesOptions = [
    { label: locale === "fr" ? "Architectes" : "Architects", href: localizeHref(locale, "/vous-etes/architectes") },
    { label: locale === "fr" ? "Urbanistes et Paysagistes" : "Urban & Landscape Planners", href: localizeHref(locale, "/vous-etes/urbanistes") },
    { label: locale === "fr" ? "Promoteurs Immobiliers" : "Real Estate Developers", href: localizeHref(locale, "/vous-etes/promoteurs") },
    { label: locale === "fr" ? "Designers" : "Designers", href: localizeHref(locale, "/vous-etes/designers") },
    { label: locale === "fr" ? "Particuliers" : "Individuals", href: localizeHref(locale, "/vous-etes/particuliers") },
  ];

  const openServices = () => setIsServicesOpen(true);
  const closeServices = () => setIsServicesOpen(false);
  const openVousEtes = () => setIsVousEtesOpen(true);
  const closeVousEtes = () => setIsVousEtesOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-black/40 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15),0_0_80px_rgba(0,0,0,0.5)] backdrop-blur-[40px] backdrop-saturate-[1.8]'
          : 'py-6'
      }`}
    >
      <div className="relative mx-auto flex w-[95vw] max-w-none items-center justify-between gap-6 px-6 sm:px-10">
        <div className="flex items-center gap-4">
          <Link href={localizeHref(locale, "/")} className="relative z-10">
            <ParallaxLogo variant="light" className="h-8 w-auto" />
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-end gap-4 text-xs uppercase tracking-[0.25em] text-neutral-400 lg:flex">
          <div className="flex min-w-[140px] flex-col gap-0.5 text-neutral-500">
            <span className="text-[10px] tracking-[0.35em]">{navigation.contact}</span>
            <a
              href={contactEmailHref}
              className="text-[14px] lowercase tracking-[0.06em] text-neutral-100 transition-colors hover:text-white"
            >
              {contactEmail}
            </a>
          </div>

          <div className="hidden min-w-[140px] flex-col gap-0.5 text-neutral-500 md:flex">
            <span className="text-[10px] tracking-[0.35em]">{navigation.instagram}</span>
            <a
              href={instagramHref}
              className="text-[12px] lowercase tracking-[0.1em] text-neutral-200 transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {instagramHandle}
            </a>
          </div>

          <div className="hidden items-center gap-3 text-[10px] tracking-[0.25em] text-neutral-400 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative hidden items-center lg:flex" onMouseEnter={openServices} onMouseLeave={closeServices}>
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-left text-[10px] uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-200"
              aria-expanded={isServicesOpen}
            >
              <span className="text-neutral-400">{navigation.services}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className={`h-3 w-3 fill-none stroke-current transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-neutral-200" : "text-neutral-500"
                }`}
              >
                <path d="M6 9l6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="relative hidden items-center lg:flex" onMouseEnter={openVousEtes} onMouseLeave={closeVousEtes}>
            <button
              type="button"
              onClick={() => setIsVousEtesOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-left text-[10px] uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-200"
              aria-expanded={isVousEtesOpen}
            >
              <span className="text-neutral-400">{navigation.vousEtes}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className={`h-3 w-3 fill-none stroke-current transition-transform duration-200 ${
                  isVousEtesOpen ? "rotate-180 text-neutral-200" : "text-neutral-500"
                }`}
              >
                <path d="M6 9l6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="hidden items-center gap-2.5 text-[10px] tracking-[0.25em] text-neutral-400 lg:flex">
            <LanguageSwitcher activeLocale={locale} />
            <Link
              href={localizeHref(locale, "/contact")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/60 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-neutral-100 transition hover:text-[#040404]"
            >
              <span className="absolute inset-0 -z-10 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">{locale === "fr" ? "Demander un devis" : "Get a quote"}</span>
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

        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
              className="fixed left-0 top-0 mt-0 hidden h-screen w-screen bg-[rgba(0,0,0,0.85)] pt-32 px-0 pb-16 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[40px] backdrop-saturate-[1.8] lg:block"
            >
              {/* Header */}
              <div className="mx-auto w-[90%] max-w-7xl mb-12">
                <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                  {navigation.services}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {locale === 'fr'
                    ? 'Découvrez nos solutions de visualisation 3D'
                    : 'Explore our 3D visualization solutions'}
                </p>
              </div>

              {/* Services Grid */}
              <div className="mx-auto grid w-[90%] max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {specificServices.map((service, index) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      closeServices();
                    }}
                    className="block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/[0.1] hover:to-white/[0.05] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] cursor-pointer h-full"
                    >
                    {/* Icon/Number */}
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-xs font-mono text-neutral-500 transition-colors group-hover:bg-white/10 group-hover:text-neutral-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Service Name */}
                    <h4 className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-200 transition-colors group-hover:text-white">
                      {service.label}
                    </h4>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                      <svg
                        className="h-4 w-4 text-neutral-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Gradient Hover Effect */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mx-auto w-[90%] max-w-7xl mt-12 pt-8 border-t border-white/5">
                <Link
                  href={localizeHref(locale, '/services')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-400 transition-colors hover:text-white"
                >
                  <span>{locale === 'fr' ? 'Voir tous les services' : 'View all services'}</span>
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVousEtesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onMouseEnter={openVousEtes}
              onMouseLeave={closeVousEtes}
              className="fixed left-0 top-0 mt-0 hidden h-screen w-screen bg-[rgba(0,0,0,0.85)] pt-32 px-0 pb-16 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[40px] backdrop-saturate-[1.8] lg:block"
            >
              {/* Header */}
              <div className="mx-auto w-[90%] max-w-7xl mb-12">
                <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                  {navigation.vousEtes}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {locale === 'fr'
                    ? 'Solutions adaptées à votre métier'
                    : 'Solutions tailored to your profession'}
                </p>
              </div>

              {/* Client Types Grid */}
              <div className="mx-auto grid w-[90%] max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {vousEtesOptions.map((option, index) => (
                  <Link
                    key={option.label}
                    href={option.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      closeVousEtes();
                    }}
                    className="block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/[0.1] hover:to-white/[0.05] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] cursor-pointer h-full"
                    >
                    {/* Icon/Number */}
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-xs font-mono text-neutral-500 transition-colors group-hover:bg-white/10 group-hover:text-neutral-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Client Type Name */}
                    <h4 className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-200 transition-colors group-hover:text-white">
                      {option.label}
                    </h4>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                      <svg
                        className="h-4 w-4 text-neutral-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Gradient Hover Effect */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mx-auto w-[90%] max-w-7xl mt-12 pt-8 border-t border-white/5">
                <Link
                  href={localizeHref(locale, '/vous-etes')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-400 transition-colors hover:text-white"
                >
                  <span>{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-[#030303]/90 backdrop-blur-lg lg:hidden"
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
                  <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="text-neutral-200 transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-500">{navigation.services}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.25em] text-neutral-300">
                  {specificServices.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      onClick={closeMobileMenu}
                      className="rounded-full border border-white/20 px-3 py-1 hover:border-white/40 transition"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-500">{navigation.vousEtes}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.25em] text-neutral-300">
                  {vousEtesOptions.map((option) => (
                    <Link
                      key={option.label}
                      href={option.href}
                      onClick={closeMobileMenu}
                      className="rounded-full border border-white/20 px-3 py-1 hover:border-white/40 transition"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
                <div>
                  <span className="block text-[11px] tracking-[0.35em] text-neutral-500">{navigation.contact}</span>
                <a href={contactEmailHref} className="text-lg lowercase tracking-[0.1em] text-white">
                  {contactEmail}
                </a>
                </div>
                <div>
                  <span className="block text-[11px] tracking-[0.35em] text-neutral-500">{navigation.instagram}</span>
                  <a
                  href={instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base lowercase tracking-[0.12em] text-neutral-200"
                  >
                    {instagramHandle}
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
                  <span className="relative z-10">{locale === "fr" ? "Demander un devis" : "Get a quote"}</span>
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
