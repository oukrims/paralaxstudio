# Client Logos Infinite Scroll - Usage Guide

## Overview

The Client Logos feature allows you to display an infinite scrolling banner of client logos on your website. Logos are managed through WordPress and automatically synced to your Next.js frontend via GraphQL.

## WordPress Backend

### Adding Client Logos

1. Go to **WordPress Admin → Clients → Add New**
2. Fill in the client details:
   - **Title**: Client name (e.g., "Azur Development")
   - **Featured Image**: Upload the client's logo
   - **Website URL**: Optional link to client's website
   - **Display Order**: Lower numbers appear first (default: 0)
3. Click **Publish**

### Tips for Best Results

- **Logo Format**: Use PNG files with transparent backgrounds
- **Logo Size**: Recommended 400x200px or similar aspect ratio
- **File Optimization**: Compress images before uploading (use TinyPNG.com)
- **Logo Style**: Monochrome or simple logos work best
- **Alt Text**: Add descriptive alt text for SEO and accessibility

## Frontend Implementation

### 1. Fetch Client Logos

In your page or component, fetch clients from WordPress:

```tsx
import { fetchClients } from '@/lib/wordpressClient';

export default async function HomePage() {
  const clients = await fetchClients();

  return (
    <div>
      <ClientLogosSection clients={clients} />
    </div>
  );
}
```

### 2. Use the ClientLogosSection Component

The simplest way to display client logos:

```tsx
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';

export function MyPage({ clients }) {
  return (
    <ClientLogosSection
      clients={clients}
      title="Trusted by Leading Firms"
      subtitle="We've worked with amazing clients across Morocco and beyond"
    />
  );
}
```

### 3. Use the InfiniteScrollLogos Component Directly

For more control, use the core component directly:

```tsx
import { InfiniteScrollLogos } from '@/components/ui/infinite-scroll-logos';

export function MyCustomSection({ clients }) {
  return (
    <section className="py-20">
      <h2>Our Clients</h2>
      <InfiniteScrollLogos logos={clients} className="my-8" />
    </section>
  );
}
```

## Component Props

### ClientLogosSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `clients` | `ClientLogo[]` | required | Array of client logos from WordPress |
| `title` | `string` | `"Trusted by Leading Firms"` | Section heading |
| `subtitle` | `string` | `undefined` | Optional subtitle text |

### InfiniteScrollLogos

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logos` | `ClientLogo[]` | required | Array of client logos |
| `className` | `string` | `""` | Additional CSS classes |

## Customization

### Animation Speed

Adjust scroll speed in `tailwind.config.mjs`:

```js
animation: {
  'infinite-scroll': 'infinite-scroll 40s linear infinite', // Change 40s to your preferred duration
},
```

### Logo Styling

The logos have these default styles:
- Grayscale filter (hover to show color)
- 70% opacity (hover to 100%)
- Responsive sizing: 112px-144px wide

Customize in `infinite-scroll-logos.tsx`:

```tsx
<Image
  src={logo.logo.src}
  alt={logo.logo.alt || logo.name}
  fill
  className='object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
  // Modify these classes as needed
/>
```

## Demo Data

Install demo client logos via:

1. Go to **WordPress Admin → Parallax Headless**
2. Click **"Install Demo Data"**
3. This adds 8 sample client logos

Remove demo data anytime with the **"Remove Demo Data"** button.

## GraphQL Query

The component uses this GraphQL query:

```graphql
query ParallaxClients {
  clients {
    id
    name
    logo {
      id
      src
      alt
    }
    websiteUrl
    order
  }
}
```

## Type Definitions

```typescript
export type ClientLogo = {
  id: string;
  name: string;
  logo: {
    id: string;
    src: string;
    alt: string;
  } | null;
  websiteUrl?: string | null;
  order: number;
};
```

## Troubleshooting

**Logos not showing?**
- Verify clients are Published (not Draft)
- Check that clients have Featured Images set
- Clear Next.js cache: `npm run build`

**Scroll animation not working?**
- Ensure Tailwind animation classes are compiled
- Check browser console for errors
- Verify at least 3-4 logos are added for smooth loop

**Logos too large/small?**
- Adjust responsive width/height in `LogoItem` component
- Modify `sizes` prop on Image component

## Example: Homepage Integration

```tsx
// src/app/[locale]/page.tsx
import { fetchClients } from '@/lib/wordpressClient';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';

export default async function HomePage() {
  const clients = await fetchClients();

  return (
    <main>
      <HeroSection />
      <ServicesSection />

      {/* Client Logos */}
      <ClientLogosSection
        clients={clients}
        title="Trusted by Industry Leaders"
        subtitle="We've delivered stunning visualizations for 50+ clients across 15 countries"
      />

      <ProjectsSection />
    </main>
  );
}
```

## Notes

- Logos are cached based on `WORDPRESS_CONTENT_REVALIDATE` env variable
- Component automatically handles empty state (returns null if no logos)
- Links only render if `websiteUrl` is provided for a client
- The component duplicates logos internally for seamless infinite scroll
