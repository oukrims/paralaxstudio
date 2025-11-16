import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { MainNav } from "@/components/layout/MainNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProcessSection } from "@/components/sections/ProcessSection";
import {
  fetchServiceContent,
  fetchServicesPageContent,
  fetchSiteSettings,
  fetchHomepageContent,
} from "@/lib/wordpressClient";
import { isLocale, type Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";
import {
  IconCamera,
  IconStack2,
  IconSun,
  IconMap,
  IconHome,
  IconEye,
  IconBulb,
  IconPalette,
  IconMovie,
  IconVideo,
  IconClock,
  IconTrendingUp,
  IconCompass,
  IconWorld,
  IconClick,
  IconDeviceDesktop,
} from "@tabler/icons-react";

type ServiceDetailPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

const iconMap: Record<string, React.ReactNode> = {
  camera: <IconCamera className="h-6 w-6" />,
  layers: <IconStack2 className="h-6 w-6" />,
  sun: <IconSun className="h-6 w-6" />,
  map: <IconMap className="h-6 w-6" />,
  home: <IconHome className="h-6 w-6" />,
  eye: <IconEye className="h-6 w-6" />,
  lightbulb: <IconBulb className="h-6 w-6" />,
  palette: <IconPalette className="h-6 w-6" />,
  film: <IconMovie className="h-6 w-6" />,
  video: <IconVideo className="h-6 w-6" />,
  clock: <IconClock className="h-6 w-6" />,
  "trending-up": <IconTrendingUp className="h-6 w-6" />,
  compass: <IconCompass className="h-6 w-6" />,
  globe: <IconWorld className="h-6 w-6" />,
  "cursor-click": <IconClick className="h-6 w-6" />,
  "device-vr": <IconDeviceDesktop className="h-6 w-6" />,
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const service = await fetchServiceContent(locale, params.slug);
  const servicesPage = await fetchServicesPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  if (!service || !servicesPage) {
    notFound();
  }

  // Get footer from homepage if services page footer is null
  const footer = servicesPage.footer || (await fetchHomepageContent(locale)).footer;

  return (
    <div className="relative bg-[#040404] pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={footer} navigation={settings.navigation} />

      {/* Hero Section */}
      <section className="relative mx-auto w-full overflow-hidden pt-24">
        {service.heroImage && (
          <div className="relative h-[60vh] w-full">
            <Image
              src={service.heroImage.src}
              alt={service.heroImage.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/60 to-transparent" />
          </div>
        )}
        <div className="relative mx-auto w-[96%] max-w-4xl px-6 sm:px-10 -mt-32">
          <div className="flex flex-col gap-6">
            {service.category && (
              <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
                {service.category}
              </span>
            )}
            <h1 className="text-4xl font-semibold leading-[1.1] text-[#f5f5f4] sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            {service.tagline && (
              <p className="text-xl text-neutral-300">{service.tagline}</p>
            )}
            <p className="max-w-3xl text-lg text-neutral-400">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-24 sm:px-10">
          <h2 className="mb-12 text-3xl font-semibold text-neutral-100">
            {locale === "fr" ? "Avantages" : "Benefits"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex flex-col gap-4 rounded-2xl border border-neutral-900/80 bg-[#070707] p-6 transition hover:border-neutral-700"
              >
                {benefit.icon && (
                  <div className="text-neutral-400">
                    {iconMap[benefit.icon] || <IconStack2 className="h-6 w-6" />}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-neutral-100">{benefit.title}</h3>
                <p className="text-sm text-neutral-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <ProcessSection content={{ title: locale === "fr" ? "Notre processus" : "Our process", intro: "", steps: service.process }} />
      )}

      {/* Image Gallery */}
      {service.images && service.images.length > 0 && (
        <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-16 sm:px-10">
          <h2 className="mb-12 text-3xl font-semibold text-neutral-100">
            {locale === "fr" ? "Galerie" : "Gallery"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.images.map((image) => (
              <div
                key={image.id}
                className="group relative h-64 overflow-hidden rounded-2xl border border-neutral-900/80 bg-[#070707] transition hover:border-neutral-700"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Projects */}
      {service.relatedProjects && service.relatedProjects.length > 0 && (
        <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-16 sm:px-10">
          <h2 className="mb-12 text-3xl font-semibold text-neutral-100">
            {locale === "fr" ? "Projets associés" : "Related Projects"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.relatedProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-900/80 bg-[#070707] transition hover:border-neutral-700"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-70" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-semibold text-neutral-50">{project.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {service.ctaLabel && service.ctaHref && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-24 sm:px-10">
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-neutral-900/80 bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 p-12 text-center">
            <h2 className="text-3xl font-semibold text-neutral-100">
              {locale === "fr" ? "Prêt à commencer votre projet ?" : "Ready to start your project?"}
            </h2>
            <Link
              href={localizeHref(locale, service.ctaHref)}
              className="rounded-full bg-neutral-100 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-all hover:bg-white hover:shadow-lg"
            >
              {service.ctaLabel}
            </Link>
          </div>
        </section>
      )}

      <SiteFooter content={footer} locale={locale} />
    </div>
  );
}
