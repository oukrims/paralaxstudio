import { notFound } from "next/navigation";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { ClientCategorySection } from "@/components/sections/ClientCategorySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchVousEtesPageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type VousEtesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function VousEtesPage({ params }: VousEtesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const page = await fetchVousEtesPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />

      {page.categories.map((category) => (
        <ClientCategorySection key={category.id} content={category} locale={locale} />
      ))}

      <FinalCTASection content={page.finalCta} locale={locale} />
      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
