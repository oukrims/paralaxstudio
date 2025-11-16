import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { MainNav } from "@/components/layout/MainNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  fetchProjectContent,
  fetchProjectsPageContent,
  fetchSiteSettings,
  fetchHomepageContent,
} from "@/lib/wordpressClient";
import { isLocale, type Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";

type ProjectDetailPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const project = await fetchProjectContent(locale, params.slug);
  const projectsPage = await fetchProjectsPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  if (!project || !projectsPage) {
    notFound();
  }

  // Get footer from homepage if projects page footer is null
  const footer = projectsPage.footer || (await fetchHomepageContent(locale)).footer;

  return (
    <div className="relative bg-[#040404] pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={footer} navigation={settings.navigation} />

      {/* Hero Section */}
      <section className="relative mx-auto w-full overflow-hidden pt-24">
        {project.heroImage && (
          <div className="relative h-[60vh] w-full">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/60 to-transparent" />
          </div>
        )}
        <div className="relative mx-auto w-[96%] max-w-4xl px-6 sm:px-10 -mt-32">
          <div className="flex flex-col gap-6">
            {project.projectType && (
              <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
                {project.projectType}
              </span>
            )}
            <h1 className="text-4xl font-semibold leading-[1.1] text-[#f5f5f4] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            {project.tagline && (
              <p className="text-xl text-neutral-300">{project.tagline}</p>
            )}
            <p className="max-w-3xl text-lg text-neutral-400">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-16 pt-16 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              {locale === "fr" ? "Client" : "Client"}
            </span>
            <p className="text-lg text-neutral-100">{project.client}</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              {locale === "fr" ? "Lieu" : "Location"}
            </span>
            <p className="text-lg text-neutral-100">{project.location}</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              {locale === "fr" ? "Année" : "Year"}
            </span>
            <p className="text-lg text-neutral-100">{project.year}</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              {locale === "fr" ? "Durée" : "Duration"}
            </span>
            <p className="text-lg text-neutral-100">{project.duration}</p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      {project.deliverables && project.deliverables.length > 0 && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-16 sm:px-10">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-100">
            {locale === "fr" ? "Livrables" : "Deliverables"}
          </h2>
          <ul className="space-y-3">
            {project.deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-300">
                <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-neutral-600" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Challenge */}
      {project.challenge && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-16 sm:px-10">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-100">
            {locale === "fr" ? "Défi" : "Challenge"}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-300">{project.challenge}</p>
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-16 sm:px-10">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-100">
            {locale === "fr" ? "Solution" : "Solution"}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-300">{project.solution}</p>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-16 sm:px-10">
          <h2 className="mb-12 text-3xl font-semibold text-neutral-100">
            {locale === "fr" ? "Galerie" : "Gallery"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image) => (
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

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-16 sm:px-10">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-100">
            {locale === "fr" ? "Résultats" : "Results"}
          </h2>
          <ul className="space-y-4">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start gap-4 text-neutral-300">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xs text-neutral-400">
                  {index + 1}
                </span>
                <span className="text-lg">{result}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-16 sm:px-10">
          <div className="rounded-3xl border border-neutral-900/80 bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 p-12">
            <blockquote className="space-y-6">
              <p className="text-xl italic leading-relaxed text-neutral-200">
                &ldquo;{project.testimonial.text}&rdquo;
              </p>
              <footer className="text-sm text-neutral-400">
                — {project.testimonial.attribution}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* Services Used */}
      {project.services && project.services.length > 0 && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-16 sm:px-10">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-100">
            {locale === "fr" ? "Services utilisés" : "Services used"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300"
              >
                {service}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {project.ctaLabel && project.ctaHref && (
        <section className="relative mx-auto w-[96%] max-w-4xl px-6 pb-24 sm:px-10">
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-neutral-900/80 bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 p-12 text-center">
            <h2 className="text-3xl font-semibold text-neutral-100">
              {locale === "fr" ? "Prêt à lancer votre projet ?" : "Ready to start your project?"}
            </h2>
            <Link
              href={localizeHref(locale, project.ctaHref)}
              className="rounded-full bg-neutral-100 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-all hover:bg-white hover:shadow-lg"
            >
              {project.ctaLabel}
            </Link>
          </div>
        </section>
      )}

      <SiteFooter content={footer} locale={locale} />
    </div>
  );
}
