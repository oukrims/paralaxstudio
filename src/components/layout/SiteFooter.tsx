"use client";

import { ParallaxLogo } from "../branding/ParallaxLogo";

import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getFallbackFooter } from "@/lib/defaultContent";
import { localizeHref } from "@/lib/localizeHref";
import type { FooterContent } from "@/lib/wordpressClient";

type SiteFooterProps = {
  content?: FooterContent | null;
  locale?: Locale;
};

function mergeFooterContent(
  fallback: FooterContent,
  override?: FooterContent | null,
): FooterContent {
  if (!override) {
    return fallback;
  }

  return {
    ...fallback,
    ...override,
    tagline: override.tagline ?? fallback.tagline,
    description: override.description ?? fallback.description,
    contact:
      Array.isArray(override.contact) && override.contact.length > 0
        ? override.contact
        : fallback.contact,
    linkGroups:
      Array.isArray(override.linkGroups) && override.linkGroups.length > 0
        ? override.linkGroups
        : fallback.linkGroups,
    socials:
      Array.isArray(override.socials) && override.socials.length > 0
        ? override.socials
        : fallback.socials,
    copyright: override.copyright ?? fallback.copyright,
  };
}

export function SiteFooter({ content, locale }: SiteFooterProps) {
  const safeLocale = locale && isLocale(locale) ? locale : defaultLocale;
  const fallbackFooter = getFallbackFooter(safeLocale);
  const footer = mergeFooterContent(fallbackFooter, content);
  const contactItems = Array.isArray(footer.contact) ? footer.contact : [];
  const linkGroups = Array.isArray(footer.linkGroups) ? footer.linkGroups : [];
  const socialLinks = Array.isArray(footer.socials) ? footer.socials : [];

  // Get specific link groups
  const navigationGroup = linkGroups.find((g) => g.id === "navigation");
  const servicesGroup = linkGroups.find((g) => g.id === "services");
  const legalGroup = linkGroups.find((g) => g.id === "legal");

  // Get contact info
  const emailContact = contactItems.find((c) => c.label.toLowerCase().includes("email"));
  const phoneContact = contactItems.find((c) => c.label.toLowerCase().includes("téléphone") || c.label.toLowerCase().includes("phone"));
  const addressContact = contactItems.find((c) => c.label.toLowerCase().includes("adresse") || c.label.toLowerCase().includes("address"));

  return (
    <footer className="border-t border-neutral-900/80 bg-[#050505] py-16">
      <div className="mx-auto w-[96%] max-w-7xl px-6 sm:px-10">
        {/* 5 Column Grid */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Column 1: About */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              {safeLocale === "fr" ? "À propos" : "About"}
            </h3>
            <ParallaxLogo variant="light" className="h-8 w-auto" />
            <p className="text-sm leading-relaxed text-neutral-500">
              {footer.description}
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              {safeLocale === "fr" ? "Navigation rapide" : "Quick Links"}
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              {navigationGroup?.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={localizeHref(safeLocale, link.href)}
                    className="transition-colors hover:text-neutral-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {legalGroup?.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={localizeHref(safeLocale, link.href)}
                    className="transition-colors hover:text-neutral-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              {safeLocale === "fr" ? "Nos expertises" : "Our Expertise"}
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              {servicesGroup?.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={localizeHref(safeLocale, link.href)}
                    className="transition-colors hover:text-neutral-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              {safeLocale === "fr" ? "Contactez-nous" : "Contact Us"}
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              {emailContact && (
                <li>
                  <div className="text-neutral-500">{emailContact.label}</div>
                  <a
                    href={emailContact.href}
                    className="text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    {emailContact.value}
                  </a>
                </li>
              )}
              {phoneContact && (
                <li>
                  <div className="text-neutral-500">{phoneContact.label}</div>
                  <a
                    href={phoneContact.href}
                    className="text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    {phoneContact.value}
                  </a>
                </li>
              )}
              {addressContact && (
                <li>
                  <div className="text-neutral-500">{addressContact.label}</div>
                  <div className="text-neutral-300">{addressContact.value}</div>
                </li>
              )}
            </ul>

            {/* Business Hours */}
            <div>
              <div className="mb-2 text-sm font-semibold text-neutral-400">
                {safeLocale === "fr" ? "Horaires" : "Hours"}
              </div>
              <div className="space-y-1 text-sm text-neutral-500">
                <div>{safeLocale === "fr" ? "Lun-Ven : 9h-18h" : "Mon-Fri: 9am-6pm"}</div>
                <div>{safeLocale === "fr" ? "Sam : 10h-14h" : "Sat: 10am-2pm"}</div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="mb-3 text-sm font-semibold text-neutral-400">
                {safeLocale === "fr" ? "Suivez-nous" : "Follow Us"}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-neutral-200"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              {safeLocale === "fr" ? "Restez informé" : "Stay Informed"}
            </h3>
            <p className="text-sm text-neutral-500">
              {safeLocale === "fr"
                ? "Inscrivez-vous à notre newsletter pour recevoir nos dernières réalisations et actualités."
                : "Subscribe to our newsletter to receive our latest projects and news."}
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={safeLocale === "fr" ? "Votre email" : "Your email"}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-600 focus:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
              >
                {safeLocale === "fr" ? "S'inscrire →" : "Subscribe →"}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 border-t border-neutral-900/80 pt-8 text-center text-sm text-neutral-600">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
