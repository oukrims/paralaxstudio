import { notFound } from "next/navigation";
import Link from "next/link";

import { MainNav } from "@/components/layout/MainNav";
import { MasonryGallery } from "@/components/ui/masonry-gallery";
import { VirtualTourEmbed } from "@/components/ui/virtual-tour-embed";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { fetchGalleryPageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";

type AlbumPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  // TODO: Generate paths from WordPress albums
  return locales.map((locale) => ({ locale, slug: '' }));
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const page = await fetchGalleryPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  // Find the album by slug (with fallback to generated slug from title)
  const album = page.showcase?.albums?.find(a => {
    const albumSlug = a.slug || a.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return albumSlug === params.slug;
  });

  if (!album) {
    notFound();
  }

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />

      {/* Album Header */}
      <section className="relative mx-auto w-[96%] max-w-7xl px-6 pt-32 pb-16 sm:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li>
              <Link
                href={localizeHref(locale, '/gallery')}
                className="hover:text-neutral-300 transition-colors"
              >
                {locale === 'fr' ? 'Galerie' : 'Gallery'}
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-neutral-300">{album.title}</li>
          </ol>
        </nav>

        {/* Album Info */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-neutral-400">
            {album.category && (
              <span className="uppercase tracking-wider">{album.category}</span>
            )}
            {album.location && (
              <>
                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                <span>{album.location}</span>
              </>
            )}
            {album.year && (
              <>
                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                <span>{album.year}</span>
              </>
            )}
            {album.images?.length && (
              <>
                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                <span>{album.images.length} {album.images.length === 1 ? (locale === 'fr' ? 'image' : 'image') : (locale === 'fr' ? 'images' : 'images')}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {album.title}
          </h1>

          {album.description && (
            <p className="max-w-3xl text-lg text-neutral-300 leading-relaxed mb-8">
              {album.description}
            </p>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {album.renderType && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider text-neutral-500">
                  {locale === 'fr' ? 'Type de rendu' : 'Render Type'}
                </dt>
                <dd className="text-base text-neutral-200">{album.renderType}</dd>
              </div>
            )}

            {album.services && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider text-neutral-500">
                  {locale === 'fr' ? 'Services fournis' : 'Services Provided'}
                </dt>
                <dd className="text-base text-neutral-200">{album.services}</dd>
              </div>
            )}

            {album.client && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider text-neutral-500">
                  {locale === 'fr' ? 'Client' : 'Client'}
                </dt>
                <dd className="text-base text-neutral-200">{album.client}</dd>
              </div>
            )}

            {album.architect && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider text-neutral-500">
                  {locale === 'fr' ? 'Architecte/Designer' : 'Architect/Designer'}
                </dt>
                <dd className="text-base text-neutral-200">{album.architect}</dd>
              </div>
            )}
          </div>
        </div>

        {/* Virtual Tour Section */}
        {album.virtualTourUrl && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              {locale === 'fr' ? 'Visite Virtuelle 360°' : '360° Virtual Tour'}
            </h2>
            <VirtualTourEmbed url={album.virtualTourUrl} title={album.title} />
          </div>
        )}

        {/* Video Section */}
        {album.videoUrl && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              {locale === 'fr' ? 'Vidéo' : 'Video'}
            </h2>
            <div className="relative w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden">
              <iframe
                src={album.videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${album.title} - Video`}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Masonry Gallery */}
        {album.images && album.images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              {locale === 'fr' ? 'Galerie Haute Résolution' : 'High Resolution Gallery'}
            </h2>
            <MasonryGallery
              images={album.images.map(img => ({
                ...img,
                title: album.title,
              }))}
              columns={{ default: 2, md: 3, xl: 4 }}
            />
          </div>
        )}

        {(!album.images || album.images.length === 0) && (
          <div className="text-center py-20">
            <p className="text-neutral-400 text-lg">
              {locale === 'fr' ? 'Aucune image dans cet album pour le moment.' : 'No images in this album yet.'}
            </p>
          </div>
        )}

        {/* Back to Gallery Link */}
        <div className="mt-16 text-center">
          <Link
            href={localizeHref(locale, '/gallery')}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Gallery</span>
          </Link>
        </div>
      </section>

      <FinalCTASection content={page.finalCta} locale={locale} />
      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
