import { notFound } from "next/navigation";

import { HeroSection } from "@/components/hero/HeroSection";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchHomepageContent } from "@/lib/mockWordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type LocalePageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const homepage = await fetchHomepageContent(locale);

  return (
    <div className="relative pb-24">
      <HeroSection locale={locale} content={homepage.hero} />
      <QuoteSection content={homepage.quote} />
      <SelectedProjectsSection content={homepage.featuredProjects} locale={locale} />
      <ServicesSection content={homepage.services} locale={locale} />
      <ProcessSection content={homepage.process} />
      <AboutSection content={homepage.about} locale={locale} />
      <DifferentiatorsSection content={homepage.differentiators} />
      <ClientsSection content={homepage.clients} locale={locale} />
      <FAQSection content={homepage.faqs} />
      <FinalCTASection content={homepage.finalCta} locale={locale} />
      <SiteFooter content={homepage.footer} locale={locale} />
    </div>
  );
}
