'use client';

import React from 'react';
import Image from 'next/image';

interface Logo {
  id: string;
  name: string;
  logo: {
    id: string;
    src: string;
    alt: string;
  } | null;
  websiteUrl?: string | null;
}

interface InfiniteScrollLogosProps {
  logos: Logo[];
  className?: string;
}

export function InfiniteScrollLogos({ logos, className = '' }: InfiniteScrollLogosProps) {
  if (!logos || logos.length === 0) {
    return null;
  }

  // Duplicate logos to ensure seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={`w-full py-8 inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)] ${className}`}>
      <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'>
        {duplicatedLogos.map((logo, index) => (
          <LogoItem key={`${logo.id}-${index}`} logo={logo} />
        ))}
      </ul>
      <ul
        className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'
        aria-hidden='true'
      >
        {duplicatedLogos.map((logo, index) => (
          <LogoItem key={`duplicate-${logo.id}-${index}`} logo={logo} />
        ))}
      </ul>
    </div>
  );
}

function LogoItem({ logo }: { logo: Logo }) {
  if (!logo.logo || !logo.logo.src) {
    return null;
  }

  const logoContent = (
    <div className='relative w-28 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24 flex items-center justify-center'>
      <Image
        src={logo.logo.src}
        alt={logo.logo.alt || logo.name}
        fill
        className='object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
        sizes='(max-width: 640px) 112px, (max-width: 768px) 128px, 144px'
      />
    </div>
  );

  if (logo.websiteUrl) {
    return (
      <li>
        <a
          href={logo.websiteUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='block'
          title={logo.name}
        >
          {logoContent}
        </a>
      </li>
    );
  }

  return <li>{logoContent}</li>;
}
