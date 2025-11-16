"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { VirtualTourEmbed } from "@/components/ui/virtual-tour-embed";
import type { Locale } from "@/i18n/config";
import type { GalleryShowcaseSection as GalleryShowcaseContent } from "@/lib/wordpressClient";

type GalleryShowcaseSectionProps = {
  content?: GalleryShowcaseContent;
  locale: Locale;
};

export function GalleryShowcaseSection({ content, locale }: GalleryShowcaseSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Use categories from WordPress if available
  const categories = content?.categories || [];

  // Filter albums based on selected category
  const filteredAlbums = useMemo(() => {
    if (!content?.albums) return [];
    if (selectedCategory === "all") return content.albums;

    return content.albums.filter((album) => {
      const albumCategory = album.category?.toLowerCase().replace(/\s+/g, "-");
      return albumCategory === selectedCategory;
    });
  }, [content?.albums, selectedCategory]);

  // Get category intro text
  const currentCategoryIntro = useMemo(() => {
    const category = categories.find((c) => c.slug === selectedCategory);
    return category?.intro || content?.intro || "";
  }, [selectedCategory, categories, content?.intro]);

  if (!content) return null;

  return (
    <section className="relative mx-auto w-[96%] max-w-7xl px-6 pb-24 pt-16 sm:px-10">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6">
        <h2 className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          {content.title || (locale === "fr" ? "Notre Portfolio" : "Our Portfolio")}
        </h2>

        {/* Dynamic intro based on selected category */}
        <AnimatePresence mode="wait">
          <motion.p
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl text-xl leading-relaxed text-neutral-200 sm:text-2xl"
          >
            {currentCategoryIntro}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Instagram-style Category Filters */}
      <div className="mb-12 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`
                rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200
                ${
                  selectedCategory === category.slug
                    ? "bg-white text-black"
                    : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Instagram-style Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 gap-1 sm:gap-2 md:grid-cols-3"
        >
          {filteredAlbums.map((album) => {
            const slug = album.slug || album.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

            return (
              <Link
                key={album.id}
                href={`/${locale}/gallery/${slug}`}
                className="group relative aspect-square overflow-hidden bg-neutral-900"
              >
                {/* Image */}
                {album.coverImage && (
                  <Image
                    src={album.coverImage.src}
                    alt={album.coverImage.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg font-medium text-white sm:text-xl">
                      {album.title}
                    </h3>
                    {album.category && (
                      <p className="mt-1 text-sm text-neutral-300">{album.category}</p>
                    )}
                    {album.location && (
                      <p className="mt-1 text-xs text-neutral-400">
                        {album.location} {album.year && `• ${album.year}`}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredAlbums.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-neutral-400">
            {locale === "fr"
              ? "Aucun projet disponible dans cette catégorie."
              : "No projects available in this category."}
          </p>
        </div>
      )}

      {/* Virtual Tour Showcase */}
      {selectedCategory === "all" && filteredAlbums.length > 0 && content?.virtualTourShowcaseUrl && (
        <div className="mt-24 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 sm:p-12">
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-medium text-white sm:text-3xl">
              {locale === "fr" ? "Découvrez nos Visites Virtuelles 360°" : "Discover Our 360° Virtual Tours"}
            </h3>
            <p className="max-w-2xl text-lg text-neutral-300 leading-relaxed">
              {locale === "fr"
                ? "Explorez nos projets de manière immersive grâce à nos visites virtuelles interactives. Naviguez librement dans les espaces, découvrez chaque détail et vivez l'expérience comme si vous y étiez."
                : "Explore our projects immersively through our interactive virtual tours. Navigate freely through spaces, discover every detail, and experience it as if you were there."}
            </p>
          </div>
          <VirtualTourEmbed
            url={content.virtualTourShowcaseUrl}
            title={locale === "fr" ? "Visite Virtuelle Démonstrative" : "Demo Virtual Tour"}
          />
          <div className="mt-6 flex items-center justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200"
            >
              {locale === "fr" ? "Demander une visite virtuelle pour votre projet" : "Request a virtual tour for your project"}
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
