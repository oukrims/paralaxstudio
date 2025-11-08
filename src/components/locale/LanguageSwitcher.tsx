"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  activeLocale: Locale;
};

export function LanguageSwitcher({ activeLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4" aria-label="Language selector">
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        const href = buildHref(pathname, locale);

        return (
          <Link
            key={locale}
            href={href}
            hrefLang={locale}
            prefetch={false}
            className={`transition-colors ${
              isActive
                ? "text-neutral-100"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}

function buildHref(pathname: string | null, targetLocale: Locale) {
  if (!pathname) return `/${targetLocale}`;

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  segments[0] = targetLocale;

  return `/${segments.join("/")}`;
}
