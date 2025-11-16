import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/i18n/config";
import { FloatingContactButton } from "@/components/ui/floating-contact-button";
import { CookieBanner } from "@/components/ui/cookie-banner";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateMetadata(): Metadata {
  return {
    alternates: {
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;

  return (
    <>
      <main className="overflow-hidden">{children}</main>
      <FloatingContactButton locale={locale} />
      <CookieBanner locale={locale} />
    </>
  );
}
