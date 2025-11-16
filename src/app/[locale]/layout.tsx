import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/i18n/config";
import { FloatingContactButton } from "@/components/ui/floating-contact-button";
import { CookieBanner } from "@/components/ui/cookie-banner";

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
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

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;

  return (
    <>
      <main className="overflow-hidden">{children}</main>
      <FloatingContactButton locale={locale} />
      <CookieBanner locale={locale} />
    </>
  );
}
