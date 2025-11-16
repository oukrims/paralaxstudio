import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchServicesPageContent, fetchSiteSettings, fetchHomepageContent } from "@/lib/wordpressClient";
import type { Service } from "@/lib/defaultContent";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";

type ServicesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const page = await fetchServicesPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  if (!page) {
    notFound();
  }

  // Get footer from homepage if services page footer is null
  const footer = page.footer || (await fetchHomepageContent(locale)).footer;

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />

      {/* Services Grid */}
      <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-16 sm:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {page.services.map((service: Service) => (
            <Link
              key={service.slug}
              href={localizeHref(locale, `/services/${service.slug}`)}
              className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-900/80 bg-[#070707] transition hover:border-neutral-700"
            >
              {service.heroImage && (
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.heroImage.src}
                    alt={service.heroImage.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-70" />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-4 p-8">
                {service.category && (
                  <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                    {service.category}
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-neutral-50">{service.title}</h3>
                {service.tagline && (
                  <p className="text-sm text-neutral-400">{service.tagline}</p>
                )}
                <p className="mt-2 line-clamp-3 text-neutral-400">{service.description}</p>
                <div className="mt-auto pt-4">
                  <span className="text-sm uppercase tracking-[0.3em] text-neutral-500 transition-colors group-hover:text-neutral-300">
                    {locale === "fr" ? "En savoir plus" : "Learn more"} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTASection content={page.finalCta} locale={locale} />
      <SiteFooter content={footer} locale={locale} />
    </div>
  );
}
