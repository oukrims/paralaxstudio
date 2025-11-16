import { notFound } from "next/navigation";

import { MainNav } from "@/components/layout/MainNav";
import { HeroSection } from "@/components/hero/HeroSection";
import { GalleryMasonrySection } from "@/components/sections/GalleryMasonrySection";
import Quote from "@/components/sections/Quote";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchHomepageContent, fetchSiteSettings } from "@/lib/wordpressClient";
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
  const settings = await fetchSiteSettings(locale);

  return (
    <>
      <MainNav locale={locale} services={settings.servicesNav} footer={homepage.footer} navigation={settings.navigation} />
      <div className="relative pb-24">
        <HeroSection locale={locale} content={homepage.hero} settings={settings} footer={homepage.footer} />
        <Quote content={homepage.quoteSection} />
        <GalleryMasonrySection
          images={homepage.hero.gallery}
          title={locale === "fr" ? "Galerie de projets" : "Project Gallery"}
          subtitle={locale === "fr" ? "Découvrez nos créations architecturales en 3D photoréaliste" : "Discover our photorealistic 3D architectural creations"}
        />
        <ServicesSection content={homepage.services}  />
        <ProcessSection content={homepage.process} />
        <AboutSection content={homepage.about} locale={locale} />
        <DifferentiatorsSection content={homepage.differentiators} />
        <ClientsSection content={homepage.clients} locale={locale} />
        <FAQSection content={homepage.faqs} />
        <FinalCTASection content={homepage.finalCta} locale={locale} />
        <SiteFooter content={homepage.footer} locale={locale} />
      </div>
    </>
  );
}
