"use client";

import { MasonryGallery, type GalleryImage } from "@/components/ui/masonry-gallery";

type GalleryMasonrySectionProps = {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
};

export function GalleryMasonrySection({ images, title, subtitle }: GalleryMasonrySectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">
      <div className="mx-auto w-[100%] max-w-[1800px] px-6 sm:px-1">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-3xl text-lg text-neutral-400">
                {subtitle}
              </p>
            )}
            <div className="mx-auto mt-6 h-1 w-24 bg-white" />
          </div>
        )}

        {/* Masonry Gallery */}
        <MasonryGallery images={images} columns={{ default: 2, md: 3, xl: 4 }} gap={4} />
      </div>
    </section>
  );
}
