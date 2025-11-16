# Landing Page Content Audit

## Summary
Audit of all content on the homepage to determine what is editable via WordPress admin vs hardcoded.

---

## Content Sources on Landing Page

### 1. **MainNav (Navigation Bar)** ❌ NOT EDITABLE
**Location**: `src/components/layout/MainNav.tsx`
**What's displayed**:
- Logo
- Navigation links (Services, Gallery, Cases, Studio, Blog)
- Language switcher
- Contact email (from footer)
- Instagram handle (from footer)
- CTA button text

**Current Status**:
- ❌ Navigation labels are hardcoded in `navDictionary` object (lines 346-376)
- ✅ Contact email and Instagram pulled from footer (which IS editable)
- ❌ Services dropdown menu items pulled from `settings.servicesNav` but this is NOT in admin.php

**Hardcoded Content**:
```typescript
const navDictionary = {
  en: {
    contact: "Contact",
    instagram: "Instagram",
    services: "Services",
    gallery: "Gallery",
    cases: "Cases",
    studio: "Studio",
    blog: "Blog",
    cta: "Start a project",
  },
  fr: {
    contact: "Contact",
    instagram: "Instagram",
    services: "Services",
    gallery: "Galerie",
    cases: "Réalisations",
    studio: "Studio",
    blog: "Journal",
    cta: "Lancer un projet",
  },
};
```

---

### 2. **Hero Section** ✅ EDITABLE
**Location**: `src/components/hero/HeroSection.tsx`
**WordPress Admin**: Yes - "Hero" tab exists
**Fields Available**:
- Title ✅
- Subtitle ✅
- Quote ✅
- Gallery images ✅

---

### 3. **Quote Section** ✅ EDITABLE
**Location**: `src/components/sections/Quote.tsx`
**WordPress Admin**: Yes - "Quote Section" tab exists (just added)
**Fields Available**:
- Scroll prompt text ✅
- Quote texts (repeater) ✅
  - Text content
  - Alignment (left/center/right)
  - Animation direction
  - Letter animation
  - Line animation
- Mouse trail images (gallery) ✅

---

### 4. **Featured Projects Section** ✅ EDITABLE
**Location**: `src/components/sections/SelectedProjectsSection.tsx`
**WordPress Admin**: Yes - "Featured projects" tab exists
**Fields Available**:
- Section title ✅
- Introduction ✅
- CTA label ✅
- CTA link ✅
- Projects (repeater) ✅
  - ID/slug
  - Name
  - Type
  - Location
  - Year
  - Image

---

### 5. **Services Section** ✅ EDITABLE
**Location**: `src/components/sections/ServicesSection.tsx`
**WordPress Admin**: Yes - "Services" tab exists
**Fields Available**:
- Section title ✅
- Introduction ✅
- CTA label ✅
- CTA link ✅
- Service blocks (repeater) ✅
  - ID
  - Title
  - Bullets (one per line)

---

### 6. **Process Section** ✅ EDITABLE
**Location**: `src/components/sections/ProcessSection.tsx`
**WordPress Admin**: Yes - "Process" tab exists
**Fields Available**:
- Section title ✅
- Introduction ✅
- Steps (repeater) ✅
  - Step number
  - Title
  - Description
  - Icon
  - Details (bullets)

---

### 7. **About Section** ✅ EDITABLE
**Location**: `src/components/sections/AboutSection.tsx`
**WordPress Admin**: Yes - "About" tab exists
**Fields Available**:
- Section title ✅
- Content paragraphs ✅
- CTA label ✅
- CTA link ✅

---

### 8. **Differentiators Section** ✅ EDITABLE
**Location**: `src/components/sections/DifferentiatorsSection.tsx`
**WordPress Admin**: Yes - "Differentiators" tab exists
**Fields Available**:
- Section title ✅
- Introduction ✅
- Advantages (repeater) ✅
  - ID
  - Title
  - Description
  - Icon

---

### 9. **Clients Section** ✅ EDITABLE
**Location**: `src/components/sections/ClientsSection.tsx`
**WordPress Admin**: Yes - "Clients" tab exists
**Fields Available**:
- Section title ✅
- Introduction ✅
- CTA label ✅
- CTA link ✅
- Client types (repeater) ✅
  - ID
  - Title
  - Description
  - Icon

---

### 10. **FAQ Section** ✅ EDITABLE
**Location**: `src/components/sections/FAQSection.tsx`
**WordPress Admin**: Yes - "FAQ" tab exists
**Fields Available**:
- Section title ✅
- Questions (repeater) ✅
  - ID
  - Question
  - Answer

---

### 11. **Final CTA Section** ✅ EDITABLE
**Location**: `src/components/sections/FinalCTASection.tsx`
**WordPress Admin**: Yes - "Final call-to-action" tab exists
**Fields Available**:
- Title ✅
- Subtitle ✅
- Primary CTA label ✅
- Primary CTA link ✅
- Secondary CTA label ✅
- Secondary CTA link ✅

---

### 12. **Footer** ✅ EDITABLE
**Location**: `src/components/layout/SiteFooter.tsx`
**WordPress Admin**: Yes - "Footer" tab exists
**Fields Available**:
- Tagline ✅
- Contact items (repeater) ✅
  - Label
  - Value
  - Href
- Link groups (repeater) ✅
  - Group heading
  - Links (nested repeater)
    - Label
    - URL
- Social links (repeater) ✅
  - Label
  - Href
- Copyright ✅

---

## Missing from WordPress Admin

### 🔴 CRITICAL: Navigation Labels
**What's Missing**: Main navigation menu labels
**Current Location**: Hardcoded in `MainNav.tsx` (lines 346-376)
**Impact**: Cannot change "Services", "Gallery", "Cases", "Studio", "Blog", "Contact", "Instagram", CTA button text

**Needs**: Add to WordPress admin as "Navigation" or "Site Settings" section

---

### 🔴 CRITICAL: Services Navigation Menu
**What's Missing**: Services dropdown menu items
**Current Location**:
- Data comes from `settings.servicesNav` (GraphQL query)
- GraphQL schema exists: `ParallaxServiceNav` type
- But admin.php has NO "settings" section

**Needs**: Add "Settings" section to admin.php with servicesNav repeater

---

## Recommendations

### Priority 1: Add Navigation Settings
Create a new "Navigation" or "Site Settings" section in admin.php with:
1. **Navigation labels** for each menu item
2. **Services navigation** items (repeater)

### Priority 2: Verify All Sections Work
Test that all existing sections properly save and load from WordPress admin

---

## Files to Modify

### 1. `/docker/wordpress/plugins/parallax-headless/src/admin.php`
Add new sections:
- `settings` section with `servicesNav` repeater
- `navigation` section with navigation labels

### 2. `/docker/wordpress/plugins/parallax-headless/src/graphql-register.php`
Verify `ParallaxSettings` type is properly registered (it already exists)

### 3. `/src/components/layout/MainNav.tsx`
Replace hardcoded `navDictionary` with data from WordPress

---

## Current Status Summary

| Section | Editable | Admin Tab | Notes |
|---------|----------|-----------|-------|
| MainNav Labels | ✅ | Yes | Now editable via "Navigation Labels" |
| Services Nav Menu | ✅ | Yes | Now editable via "Site Settings" |
| Hero | ✅ | Yes | Fully editable |
| Quote Section | ✅ | Yes | Fully editable |
| Featured Projects | ✅ | Yes | Fully editable |
| Services | ✅ | Yes | Fully editable |
| Process | ✅ | Yes | Fully editable |
| About | ✅ | Yes | Fully editable |
| Differentiators | ✅ | Yes | Fully editable |
| Clients | ✅ | Yes | Fully editable |
| FAQ | ✅ | Yes | Fully editable |
| Final CTA | ✅ | Yes | Fully editable |
| Footer | ✅ | Yes | Fully editable |

**Total**: 13/13 sections editable (100%) ✅
**All content is now editable from WordPress admin!**

---

## Next Steps

1. ✅ Audit complete
2. ✅ Add Settings section to admin.php
3. ✅ Add Navigation section to admin.php
4. ✅ Update MainNav.tsx to use WordPress data
5. ✅ All changes complete - ready for testing

---

## Implementation Complete ✅

All landing page content is now fully editable via WordPress admin. The navigation labels and services menu are no longer hardcoded.
