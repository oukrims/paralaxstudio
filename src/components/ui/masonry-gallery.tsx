'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  columns?: {
    default: number;
    md: number;
    xl: number;
  };
  gap?: number;
}

export function MasonryGallery({
  images,
  columns = { default: 2, md: 3, xl: 4 },
  gap = 4,
}: MasonryGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className="columns-2 md:columns-3 xl:columns-4 gap-4"
        style={{
          columnGap: `${gap * 0.25}rem`,
        }}
      >
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            image={image}
            index={index}
            onSelect={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>

      <ImageModal
        image={selectedImageIndex !== null ? images[selectedImageIndex] : null}
        onClose={() => setSelectedImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedImageIndex}
        totalImages={images.length}
      />
    </>
  );
}

interface ImageItemProps {
  image: GalleryImage;
  index: number;
  onSelect: (image: GalleryImage) => void;
}

function ImageItem({ image, index, onSelect }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '100px' });

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(image)}
      className="break-inside-avoid mb-4 cursor-pointer group"
    >
      <div className="relative w-full overflow-hidden rounded-lg bg-neutral-900">
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title overlay */}
        {(image.title || image.alt) && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">
              {image.title || image.alt}
            </h3>
          </div>
        )}

        {/* Zoom indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </div>
      </div>
    </motion.figure>
  );
}

interface ImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number | null;
  totalImages: number;
}

function ImageModal({ image, onClose, onNext, onPrev, currentIndex, totalImages }: ImageModalProps) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose, onNext, onPrev]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [image]);

  if (!image) return null;

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/98 p-4 cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[10002] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          {totalImages > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[10002] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {totalImages > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[10002] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image counter */}
          {totalImages > 1 && currentIndex !== null && (
            <div className="absolute top-6 left-6 z-[10002] px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium shadow-lg">
              {currentIndex + 1} / {totalImages}
            </div>
          )}

          {/* Image */}
          <motion.div
            layoutId={`image-${image.id}`}
            className="relative max-w-7xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain cursor-default"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* Image caption */}
          {(image.title || image.alt) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-0 right-0 text-center px-4"
            >
              <p className="text-white text-lg font-medium max-w-3xl mx-auto drop-shadow-lg">
                {image.title || image.alt}
              </p>
            </motion.div>
          )}

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 text-neutral-400 text-sm hidden md:block"
          >
            Use arrow keys to navigate • ESC to close
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
