import { notFound } from "next/navigation";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { FounderSpotlightSection } from "@/components/sections/FounderSpotlightSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamGridSection } from "@/components/sections/TeamGridSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchStudioPageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type StudioPageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function StudioPage({ params }: StudioPageProps) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const locale = resolvedParams.locale as Locale;
  const page = await fetchStudioPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />
      <FounderSpotlightSection content={page.founder} />
      <AboutSection content={page.about} locale={locale} />
      <ServicesSection content={page.services} />
      <TeamGridSection content={page.team} />
      <DifferentiatorsSection content={page.differentiators} />
      <ClientsSection content={page.clients} locale={locale} />
      <FinalCTASection content={page.finalCta} locale={locale} />
      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
