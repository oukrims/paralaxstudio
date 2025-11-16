'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import type { Locale } from '@/i18n/config';
import { localizeHref } from '@/lib/localizeHref';

export interface AlbumCardData {
  id: string;
  slug: string;
  title: string;
  description?: string;
  category?: string;
  location?: string;
  year?: string;
  coverImage?: {
    id: string;
    src: string;
    alt: string;
  };
  images?: {
    id: string;
    src: string;
    alt: string;
  }[];
  imageCount?: number;
}

interface AlbumCardProps {
  album: AlbumCardData;
  locale: Locale;
  index: number;
}

export function AlbumCard({ album, locale, index }: AlbumCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '50px' });

  // Use coverImage if available, otherwise fallback to first image
  const coverImage = album.coverImage || (album.images && album.images[0]);

  if (!coverImage) {
    return null; // No images to display
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group"
    >
      <Link
        href={localizeHref(locale, `/gallery/${album.slug}`)}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-500">
          {/* Cover Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Image Count Badge */}
            {album.imageCount && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                {album.imageCount} {album.imageCount === 1 ? 'image' : 'images'}
              </div>
            )}

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              {/* Category & Meta */}
              <div className="flex items-center gap-3 mb-3 text-xs text-neutral-400">
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
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-neutral-100 transition-colors">
                {album.title}
              </h3>

              {/* Description */}
              {album.description && (
                <p className="text-neutral-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {album.description}
                </p>
              )}

              {/* View Album Link */}
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400 group-hover:text-white transition-colors">
                <span>View Album</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
