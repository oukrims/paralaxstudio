'use client';

import { useState } from 'react';

interface VirtualTourEmbedProps {
  url: string;
  title?: string;
}

/**
 * Component for embedding 360° virtual tours from multiple platforms
 * Supports:
 * - Lapentor (app.lapentor.com) - Primary platform
 * - Kuula (kuula.co)
 * - Matterport
 * - Other iframe-based virtual tour platforms
 */
export function VirtualTourEmbed({ url, title = '360° Virtual Tour' }: VirtualTourEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract embed URL based on platform
  const getEmbedUrl = (inputUrl: string): string | null => {
    try {
      const urlObj = new URL(inputUrl);

      // Kuula.co support
      if (urlObj.hostname.includes('kuula.co')) {
        // If it's already an embed URL, use it
        if (inputUrl.includes('/share/')) {
          return inputUrl;
        }
        // Convert kuula.co/post/ to share URL
        const postMatch = inputUrl.match(/kuula\.co\/post\/([^\/\?]+)/);
        if (postMatch) {
          return `https://kuula.co/share/${postMatch[1]}?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1`;
        }
      }

      // Lapentor support
      if (urlObj.hostname.includes('lapentor.com')) {
        // Already an embed URL from app.lapentor.com
        if (inputUrl.includes('app.lapentor.com/sphere/')) {
          return inputUrl;
        }
        // Convert lapentor viewer URL to embed URL if needed
        const sphereMatch = inputUrl.match(/lapentor\.com\/sphere\/([^\/\?]+)/);
        if (sphereMatch) {
          return `https://app.lapentor.com/sphere/${sphereMatch[1]}`;
        }
      }

      // Matterport support
      if (urlObj.hostname.includes('matterport.com')) {
        if (inputUrl.includes('/show/')) {
          return inputUrl;
        }
      }

      // Generic iframe URL - return as is
      return inputUrl;
    } catch (e) {
      console.error('Invalid virtual tour URL:', e);
      return null;
    }
  };

  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="relative w-full aspect-video bg-neutral-900 rounded-lg flex items-center justify-center">
        <p className="text-neutral-400">Invalid virtual tour URL</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden group">
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-neutral-700 border-t-white rounded-full animate-spin"></div>
          <p className="text-neutral-400 text-sm">Loading virtual tour...</p>
        </div>
      )}

      {/* Virtual tour icon overlay */}
      <div className="absolute top-4 left-4 z-10 px-3 py-2 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-2">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-white text-xs font-medium">360° Tour</span>
      </div>

      {/* Iframe */}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen; vr"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        title={title}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
