import { notFound } from "next/navigation";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchCasesPageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type CasesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CasesPage({ params }: CasesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const page = await fetchCasesPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />
      <SelectedProjectsSection content={page.caseStudies} locale={locale} />
      <ProcessSection content={page.process} />
      <ClientsSection content={page.clients} locale={locale} />
      <FinalCTASection content={page.finalCta} locale={locale} />
      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
