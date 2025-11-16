import { notFound } from "next/navigation";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchBlogPageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type BlogPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const page = await fetchBlogPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />
      <ArticlesSection content={page.articles} locale={locale} />
      <FAQSection content={page.faqs} />
      <FinalCTASection content={page.finalCta} locale={locale} />
      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
