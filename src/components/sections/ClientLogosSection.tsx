'use client';

import { InfiniteScrollLogos } from '@/components/ui/infinite-scroll-logos';
import type { ClientLogo } from '@/lib/wordpressClient';

interface ClientLogosSectionProps {
  clients: ClientLogo[];
  title?: string;
  subtitle?: string;
}

export function ClientLogosSection({
  clients,
  title = 'Trusted by Leading Firms',
  subtitle
}: ClientLogosSectionProps) {
  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <section className='relative mx-auto w-full max-w-7xl px-6 py-16'>
      <div className='mb-8 text-center'>
        {title && (
          <h2 className='text-sm uppercase tracking-[0.4em] text-neutral-500 mb-4'>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className='text-neutral-400 max-w-2xl mx-auto'>{subtitle}</p>
        )}
      </div>

      <InfiniteScrollLogos logos={clients} />
    </section>
  );
}
