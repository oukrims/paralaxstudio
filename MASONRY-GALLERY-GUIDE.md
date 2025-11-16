# Masonry Gallery - Usage Guide

## Overview

The Masonry Gallery component provides a Pinterest-style responsive image grid with smooth animations, hover effects, and fullscreen modal viewing. It's fully integrated with WordPress Gallery Albums and features Framer Motion animations.

## Features

- ✅ **Masonry Layout** - Responsive CSS columns with natural image flow
- ✅ **Fullscreen Modal** - Click any image to view in fullscreen with smooth transitions
- ✅ **Smooth Animations** - Framer Motion fade-in on scroll, hover effects
- ✅ **Responsive Columns** - 2 columns on mobile, 3 on tablet, 4 on desktop
- ✅ **Lazy Loading** - Images load as you scroll (intersection observer)
- ✅ **Hover Effects** - Zoom on hover, gradient overlay, title reveal
- ✅ **Touch Friendly** - Tap animations on mobile devices
- ✅ **Keyboard Accessible** - ESC to close modal, proper focus management

## Components

### 1. MasonryGallery Component

The main reusable masonry grid component.

**Location:** `src/components/ui/masonry-gallery.tsx`

**Props:**

```typescript
interface MasonryGalleryProps {
  images: GalleryImage[];
  columns?: {
    default: number;  // Mobile columns (default: 2)
    md: number;       // Tablet columns (default: 3)
    xl: number;       // Desktop columns (default: 4)
  };
  gap?: number;       // Gap between images in Tailwind units (default: 4)
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;     // Optional title shown on hover and in modal
}
```

### 2. GalleryShowcaseSection

Section component that displays albums with masonry layout.

**Location:** `src/components/sections/GalleryShowcaseSection.tsx`

**Usage:** Automatically used on the `/gallery` page

## Basic Usage

### 1. Simple Masonry Gallery

```tsx
import { MasonryGallery } from '@/components/ui/masonry-gallery';

export function MyGallery() {
  const images = [
    {
      id: '1',
      src: '/images/photo1.jpg',
      alt: 'Beautiful landscape',
      title: 'Mountain Sunset'
    },
    {
      id: '2',
      src: '/images/photo2.jpg',
      alt: 'Architecture photo',
      title: 'Modern Building'
    },
    // ... more images
  ];

  return (
    <div className="container mx-auto p-4">
      <h1>My Photo Gallery</h1>
      <MasonryGallery images={images} />
    </div>
  );
}
```

### 2. Custom Column Configuration

```tsx
<MasonryGallery
  images={images}
  columns={{
    default: 1,  // 1 column on mobile
    md: 2,       // 2 columns on tablet
    xl: 3        // 3 columns on desktop
  }}
  gap={6}        // Larger gap between images
/>
```

### 3. With WordPress Gallery Albums

The component is already integrated with your WordPress gallery albums:

```tsx
// Automatically used in GalleryShowcaseSection
<GalleryShowcaseSection content={galleryContent} locale={locale} />
```

## WordPress Integration

### Adding Gallery Albums

1. Go to **WordPress Admin → Gallery → Add New**
2. Fill in album details:
   - **Title**: Album name (e.g., "Residential Projects 2024")
   - **Description**: Album description
   - **Category**: Album category
   - **Featured Image**: Cover image
3. **Add Album Images**:
   - Click "Add Album Images" button
   - Select multiple images from media library
   - Drag to reorder if needed
4. Click **Publish**

### Image Best Practices

- **Format**: JPG for photos, PNG for graphics
- **Size**: Minimum 1200px wide
- **Aspect Ratio**: Mixed aspect ratios work best for masonry
- **File Size**: Optimize to < 500KB each (use TinyPNG.com)
- **Alt Text**: Always add descriptive alt text for SEO

## Customization

### Animation Timing

Edit `masonry-gallery.tsx` to adjust animation speed:

```tsx
// In ImageItem component
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
transition={{
  duration: 0.5,    // Change animation duration
  delay: index * 0.05  // Change stagger delay
}}
```

### Hover Effects

```tsx
// In ImageItem - modify these classes
className="transition-all duration-500 group-hover:scale-105"  // Change scale amount
```

### Modal Styling

```tsx
// In ImageModal - change backdrop
className="fixed inset-0 z-50 bg-black/95"  // Adjust opacity (95 = 95% black)
```

### Column Breakpoints

Modify Tailwind column classes:

```tsx
// Change default responsive behavior
<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
```

## Advanced Examples

### 1. Infinite Scroll Gallery

```tsx
'use client';

import { useState, useEffect } from 'react';
import { MasonryGallery } from '@/components/ui/masonry-gallery';

export function InfiniteGallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch more images as user scrolls
    fetchImages(page).then(newImages => {
      setImages([...images, ...newImages]);
    });
  }, [page]);

  return (
    <div>
      <MasonryGallery images={images} />
      <button onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </div>
  );
}
```

### 2. Filtered Gallery

```tsx
'use client';

import { useState } from 'react';
import { MasonryGallery } from '@/components/ui/masonry-gallery';

export function FilteredGallery({ allImages }) {
  const [category, setCategory] = useState('all');

  const filteredImages = category === 'all'
    ? allImages
    : allImages.filter(img => img.category === category);

  return (
    <div>
      <div className="flex gap-2 mb-8">
        <button onClick={() => setCategory('all')}>All</button>
        <button onClick={() => setCategory('residential')}>Residential</button>
        <button onClick={() => setCategory('commercial')}>Commercial</button>
      </div>

      <MasonryGallery images={filteredImages} />
    </div>
  );
}
```

### 3. Multiple Galleries on One Page

```tsx
export function MultiGalleryPage({ albums }) {
  return (
    <div className="space-y-24">
      {albums.map(album => (
        <section key={album.id}>
          <h2>{album.title}</h2>
          <p>{album.description}</p>
          <MasonryGallery
            images={album.images}
            columns={{ default: 2, md: 3, xl: 4 }}
          />
        </section>
      ))}
    </div>
  );
}
```

## Modal Features

The fullscreen modal includes:

- **Click to zoom**: Click any image to open fullscreen
- **Close button**: Top-right corner
- **Click backdrop**: Click anywhere to close
- **ESC key**: Press ESC to close
- **Image caption**: Shows title/alt text at bottom
- **Smooth transitions**: Framer Motion layout animations
- **Responsive**: Works on all screen sizes

### Customizing Modal Behavior

```tsx
// In MasonryGallery component
const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

// Programmatically open modal
const openImage = (image: GalleryImage) => {
  setSelectedImage(image);
};

// Programmatically close modal
const closeModal = () => {
  setSelectedImage(null);
};
```

## Performance Tips

1. **Image Optimization**
   - Use Next.js Image component (already included)
   - Specify proper `sizes` prop for responsive loading
   - Compress images before upload

2. **Lazy Loading**
   - Component uses Intersection Observer
   - Images load as they enter viewport
   - Staggered animation reduces jank

3. **Column Count**
   - More columns = more browser reflow
   - Stick to 2-4 columns for best performance
   - Consider reducing on slower devices

## Troubleshooting

**Images not appearing in masonry layout?**
- Check that images array is not empty
- Verify image URLs are valid
- Check browser console for errors

**Modal not opening?**
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check that onClick handler is working
- Verify z-index isn't being overridden

**Layout breaking on small screens?**
- Test column configuration
- Verify gap size isn't too large
- Check container padding

**Animations stuttering?**
- Reduce number of images loaded initially
- Optimize image file sizes
- Check for other heavy JavaScript

**Images overlapping or gaps?**
- This is normal for masonry with mixed aspect ratios
- Use `break-inside-avoid` class (already included)
- Consider standardizing aspect ratios

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ iOS Safari (latest)
- ✅ Chrome Mobile (latest)

Requires:
- CSS Columns support
- CSS Grid support
- Framer Motion animations
- Next.js Image component

## Accessibility

The component includes:

- Proper alt text on all images
- Keyboard navigation (ESC to close modal)
- Focus management in modal
- ARIA labels on buttons
- Semantic HTML structure
- Screen reader friendly

## Examples in the Project

The masonry gallery is used in:

1. **Gallery Page** (`/gallery`)
   - Shows all gallery albums in masonry layout
   - Each album has its own masonry grid

2. **Homepage Gallery Showcase** (if using GalleryShowcaseSection)
   - Featured albums preview
   - Masonry layout with hover effects

## Migration from Grid Layout

If you have existing grid galleries, migrating is simple:

**Before (Grid):**
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {images.map(img => (
    <img key={img.id} src={img.src} alt={img.alt} />
  ))}
</div>
```

**After (Masonry):**
```tsx
<MasonryGallery images={images} />
```

That's it! The component handles everything else.
