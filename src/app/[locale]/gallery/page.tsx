import { notFound } from "next/navigation";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { GalleryShowcaseSection } from "@/components/sections/GalleryShowcaseSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchGalleryPageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type GalleryPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const page = await fetchGalleryPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />
      <GalleryShowcaseSection content={page.showcase} locale={locale} />
      <FinalCTASection content={page.finalCta} locale={locale} />
      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
