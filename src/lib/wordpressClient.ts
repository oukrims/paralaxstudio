import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

import type {
  BlogPageContent,
  BlogPostContent,
  CasesPageContent,
  ClientLogo,
  ContactPageContent,
  GalleryPageContent,
  HomepageContent,
  StudioPageContent,
  TarifsPageContent,
  VousEtesPageContent,
} from "./defaultContent";
import {
  fetchBlogPageContent as fetchBlogPageContentFallback,
  fetchBlogPostContent as fetchBlogPostContentFallback,
  fetchCasesPageContent as fetchCasesPageContentFallback,
  fetchContactPageContent as fetchContactPageContentFallback,
  fetchGalleryPageContent as fetchGalleryPageContentFallback,
  fetchHomepageContent as fetchHomepageContentFallback,
  fetchStudioPageContent as fetchStudioPageContentFallback,
  fetchTarifsPageContent as fetchTarifsPageContentFallback,
  fetchVousEtesPageContent as fetchVousEtesPageContentFallback,
} from "./defaultContent";

type ParallaxContentPayload = {
  settings?: SiteSettings;
  homepage?: HomepageContent;
  gallery?: GalleryPageContent;
  cases?: CasesPageContent;
  studio?: StudioPageContent;
  blog?: BlogPageContent;
  contact?: ContactPageContent;
  vousEtes?: VousEtesPageContent;
  tarifs?: TarifsPageContent;
};

type ParallaxBlogPostPayload = {
  parallaxBlogPost?: BlogPostContent | null;
};

const SITE_CONTENT_QUERY = /* GraphQL */ `
  query ParallaxSiteContent($locale: String!) {
    parallaxContent(locale: $locale) {
      settings {
        servicesNav {
          slug
          title
        }
        navigation {
          contact
          instagram
          services
          gallery
          cases
          studio
          blog
          vousEtes
          tarifs
          cta
        }
      }
      homepage {
        hero {
          title
          subtitle
          quote
          gallery {
            id
            src
            alt
          }
        }
        quoteSection {
          scrollPrompt
          texts {
            text
            direction
            alignment
            letterAnime
            lineAnime
          }
          images {
            src
            alt
          }
        }
        featuredProjects {
          title
          intro
          ctaLabel
          ctaHref
          projects {
            id
            name
            type
            location
            year
            image {
              id
              src
              alt
            }
          }
        }
        services {
          title
          intro
          ctaLabel
          ctaHref
          videoUrl
          items {
            id
            title
            bullets
          }
        }
        process {
          title
          intro
          steps {
            id
            title
            description
            icon
            details
          }
        }
        about {
          title
          body
          dnaTitle
          dnaBody
          ctaLabel
          ctaHref
        }
        differentiators {
          title
          items {
            id
            title
            description
          }
        }
        clients {
          title
          intro
          ctaLabel
          ctaHref
          items {
            id
            title
            description
            logo {
              id
              src
              alt
            }
          }
        }
        faqs {
          title
          items {
            id
            question
            answer
          }
        }
        finalCta {
          title
          subtitle
          quote
          primaryCta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
      gallery {
        hero {
          title
          subtitle
          eyebrow
          cta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        showcase {
          title
          intro
          ctaLabel
          ctaHref
          categories {
            id
            slug
            label
            intro
          }
          albums {
            id
            slug
            title
            description
            category
            location
            year
            coverImage {
              id
              src
              alt
            }
            images {
              id
              src
              alt
            }
          }
        }
        services {
          title
          intro
          ctaLabel
          ctaHref
          videoUrl
          items {
            id
            title
            bullets
          }
        }
        differentiators {
          title
          items {
            id
            title
            description
          }
        }
        finalCta {
          title
          subtitle
          quote
          primaryCta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
      cases {
        hero {
          title
          subtitle
          eyebrow
          cta {
            label
            href
          }
        }
        caseStudies {
          title
          intro
          ctaLabel
          ctaHref
          projects {
            id
            name
            type
            location
            year
            image {
              id
              src
              alt
            }
          }
        }
        process {
          title
          intro
          steps {
            id
            title
            description
            icon
            details
          }
        }
        clients {
          title
          intro
          ctaLabel
          ctaHref
          items {
            id
            title
            description
            logo {
              id
              src
              alt
            }
          }
        }
        finalCta {
          title
          subtitle
          quote
          primaryCta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
      studio {
        hero {
          title
          subtitle
          eyebrow
        }
        founder {
          name
          title
          bio
          quote
          image {
            id
            src
            alt
          }
          experienceHighlights {
            id
            label
            value
          }
        }
        about {
          title
          body
          dnaTitle
          dnaBody
          ctaLabel
          ctaHref
        }
        services {
          title
          intro
          ctaLabel
          ctaHref
          videoUrl
          items {
            id
            title
            bullets
          }
        }
        team {
          title
          intro
          members {
            id
            name
            role
            location
            image {
              id
              src
              alt
            }
          }
        }
        differentiators {
          title
          items {
            id
            title
            description
          }
        }
        clients {
          title
          intro
          ctaLabel
          ctaHref
          items {
            id
            title
            description
            logo {
              id
              src
              alt
            }
          }
        }
        finalCta {
          title
          subtitle
          quote
          primaryCta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
      blog {
        hero {
          title
          subtitle
          eyebrow
        }
        articles {
          title
          intro
          ctaLabel
          ctaHref
          articleCtaLabel
          articles {
            id
            slug
            title
            category
            published
            readTime
            excerpt
            href
            image {
              id
              src
              alt
            }
          }
        }
        faqs {
          title
          items {
            id
            question
            answer
          }
        }
        finalCta {
          title
          subtitle
          quote
          primaryCta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
      contact {
        hero {
          title
          subtitle
          eyebrow
        }
        intro {
          title
          body
          bullets
        }
        channelsHeading {
          eyebrow
          title
        }
        channels {
          id
          label
          value
          href
          description
        }
        officesHeading {
          eyebrow
          title
        }
        offices {
          id
          city
          country
          address
          timezone
          mapHref
          image {
            id
            src
            alt
          }
        }
        availability {
          title
          subtitle
          slots
          note
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
      vousEtes {
        hero {
          title
          subtitle
          eyebrow
        }
        categories {
          id
          title
          description
          benefits
        }
        finalCta {
          title
          subtitle
          quote
          primaryCta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
      tarifs {
        hero {
          title
          subtitle
          eyebrow
        }
        introduction {
          title
          subtitle
          disclaimer
        }
        packagesTitle
        packages {
          id
          name
          description
          price
          currency
          popular
          features
          ctaLabel
          ctaHref
        }
        pricingFactors {
          title
          subtitle
          factors {
            id
            icon
            title
            description
            pricing {
              label
              price
            }
          }
        }
        pricingTable {
          title
          warning {
            title
            message
          }
          rows {
            category
            items {
              service
              price
            }
          }
        }
        videoPricing {
          title
          subtitle
          factors {
            icon
            title
            items
          }
          tiers {
            id
            name
            description
            price
            currency
            popular
          }
          specialOffers {
            title
            offers {
              id
              name
              features
              price
            }
          }
        }
        process {
          title
          commitment
          content
          tip
        }
        faq {
          title
          questions {
            question
            answer
          }
        }
        finalCta {
          title
          subtitle
          quote
          primaryCta {
            label
            href
          }
          secondaryCta {
            label
            href
          }
        }
        footer {
          tagline
          description
          contact {
            label
            value
            href
          }
          linkGroups {
            id
            title
            links {
              label
              href
            }
          }
          socials {
            id
            label
            href
          }
          copyright
        }
      }
    }
  }
`;

const BLOG_POST_QUERY = /* GraphQL */ `
  query ParallaxBlogPost($locale: String!, $slug: String!) {
    parallaxBlogPost(locale: $locale, slug: $slug) {
      slug
      title
      intro
      category
      published
      readTime
      heroImage {
        id
        src
        alt
      }
      sections {
        id
        heading
        body
        type
        items
      }
      pullQuote {
        text
        attribution
      }
      conclusionCta {
        label
        href
      }
    }
  }
`;

const SERVICES_PAGE_QUERY = /* GraphQL */ `
  query ParallaxServicesPage($locale: String!) {
    parallaxServicesPage(locale: $locale) {
      hero {
        title
        subtitle
        eyebrow
      }
      services {
        slug
        title
        tagline
        description
        heroImage {
          id
          src
          alt
        }
        benefits {
          id
          title
          description
          icon
        }
        process {
          id
          title
          description
          icon
          details
        }
        images {
          id
          src
          alt
        }
        relatedProjects {
          id
          name
          type
          location
          year
          image {
            id
            src
            alt
          }
        }
        icon
        category
        ctaLabel
        ctaHref
      }
      finalCta {
        title
        subtitle
        quote
        primaryCta {
          label
          href
        }
        secondaryCta {
          label
          href
        }
      }
      footer {
        tagline
        description
        contact {
          label
          value
          href
        }
        linkGroups {
          id
          title
          links {
            label
            href
          }
        }
        socials {
          id
          label
          href
        }
        copyright
      }
    }
  }
`;

const SERVICE_DETAIL_QUERY = /* GraphQL */ `
  query ParallaxService($locale: String!, $slug: String!) {
    parallaxService(locale: $locale, slug: $slug) {
      slug
      title
      tagline
      description
      heroImage {
        id
        src
        alt
      }
      benefits {
        id
        title
        description
        icon
      }
      process {
        id
        title
        description
        icon
        details
      }
      images {
        id
        src
        alt
      }
      relatedProjects {
        id
        name
        type
        location
        year
        image {
          id
          src
          alt
        }
      }
      icon
      category
      ctaLabel
      ctaHref
    }
  }
`;

const PROJECTS_PAGE_QUERY = /* GraphQL */ `
  query ParallaxProjectsPage($locale: String!) {
    parallaxProjectsPage(locale: $locale) {
      hero {
        title
        subtitle
        eyebrow
      }
      projects {
        slug
        title
        tagline
        description
        heroImage {
          id
          src
          alt
        }
        client
        location
        year
        duration
        projectType
        deliverables
        challenge
        solution
        results
        gallery {
          id
          src
          alt
        }
        testimonial {
          text
          attribution
        }
        services
        ctaLabel
        ctaHref
      }
      process {
        title
        intro
        steps {
          id
          title
          description
          icon
          details
        }
      }
      clients {
        title
        intro
        items {
          id
          title
          description
          logo {
            id
            src
            alt
          }
        }
        ctaLabel
        ctaHref
      }
      finalCta {
        title
        subtitle
        quote
        primaryCta {
          label
          href
        }
        secondaryCta {
          label
          href
        }
      }
      footer {
        tagline
        description
        contact {
          label
          value
          href
        }
        linkGroups {
          id
          title
          links {
            label
            href
          }
        }
        socials {
          id
          label
          href
        }
        copyright
      }
    }
  }
`;

const CLIENTS_QUERY = /* GraphQL */ `
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
`;

const ALBUMS_QUERY = /* GraphQL */ `
  query ParallaxAlbums {
    albums {
      nodes {
        databaseId
        slug
        title
        content
        albumMeta {
          category
          location
          year
          client
          architect
          renderType
          services
          virtualTourUrl
          videoUrl
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        albumGallery {
          gallery {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

const PROJECT_DETAIL_QUERY = /* GraphQL */ `
  query ParallaxProject($locale: String!, $slug: String!) {
    parallaxProject(locale: $locale, slug: $slug) {
      slug
      title
      tagline
      description
      heroImage {
        id
        src
        alt
      }
      client
      location
      year
      duration
      projectType
      deliverables
      challenge
      solution
      results
      gallery {
        id
        src
        alt
      }
      testimonial {
        text
        attribution
      }
      services
      ctaLabel
      ctaHref
    }
  }
`;

function getGraphQLEndpoint(): string | null {
  const endpoint =
    process.env.WORDPRESS_GRAPHQL_ENDPOINT ??
    process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

  if (!endpoint) {
    return null;
  }

  return endpoint;
}

const revalidateSecondsEnv = process.env.WORDPRESS_CONTENT_REVALIDATE;
const revalidateSeconds =
  revalidateSecondsEnv !== undefined && !Number.isNaN(Number(revalidateSecondsEnv))
    ? Math.max(0, Number(revalidateSecondsEnv))
    : 0;

async function executeGraphQL<TData>(
  query: string,
  variables: Record<string, unknown>,
): Promise<TData | null> {
  const endpoint = getGraphQLEndpoint();
  if (!endpoint) {
    return null;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.WORDPRESS_AUTH_HEADER) {
    headers.Authorization = process.env.WORDPRESS_AUTH_HEADER;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: revalidateSeconds === 0 ? "no-store" : "default",
      next: revalidateSeconds > 0 ? { revalidate: revalidateSeconds } : undefined,
    });

    if (!response.ok) {
      throw new Error(`GraphQL response not OK: ${response.status}`);
    }

    const payload = (await response.json()) as {
      data?: TData;
      errors?: Array<{ message: string }>;
    };

    if (payload.errors?.length) {
      const first = payload.errors[0];
      throw new Error(first?.message ?? "Unknown GraphQL error");
    }

    return payload.data ?? null;
  } catch (error) {
    console.warn("[wordpressClient] GraphQL request failed:", error);
    return null;
  }
}

async function fetchSiteContentFromWordPress(
  locale: Locale,
): Promise<ParallaxContentPayload | null> {
  const response = await executeGraphQL<{ parallaxContent?: ParallaxContentPayload }>(
    SITE_CONTENT_QUERY,
    { locale },
  );

  if (!response?.parallaxContent) {
    return null;
  }

  return response.parallaxContent;
}

async function fetchBlogPostFromWordPress(
  locale: Locale,
  slug: string,
): Promise<BlogPostContent | null> {
  const response = await executeGraphQL<ParallaxBlogPostPayload>(BLOG_POST_QUERY, {
    locale,
    slug,
  });

  if (response?.parallaxBlogPost) {
    return response.parallaxBlogPost;
  }

  return null;
}

export async function fetchSiteSettings(locale: string): Promise<SiteSettings> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.settings) {
    return siteContent.settings;
  }

  // Return default services nav and navigation from fallback
  const fallbackSettings = {
    servicesNav: [
      { slug: "3d-exterior-rendering", title: "3D Exterior Rendering Services" },
      { slug: "3d-residential-rendering", title: "3D Home and Residential Rendering Services" },
      { slug: "3d-aerial-rendering", title: "3D Aerial View Rendering Services" },
      { slug: "3d-real-estate-rendering", title: "3D Rendering Services for Real Estate" },
      { slug: "high-rise-rendering", title: "High-rise Building Rendering Services" },
      { slug: "hospitality-rendering", title: "Hospitality 3D Rendering Services" },
      { slug: "commercial-rendering", title: "Commercial Architectural 3D Rendering Services" },
      { slug: "site-plan-rendering", title: "Architectural Site Plan 3D Rendering Services" },
    ],
    navigation: {
      contact: locale === "fr" ? "Contact" : "Contact",
      instagram: "Instagram",
      services: locale === "fr" ? "Services" : "Services",
      gallery: locale === "fr" ? "Galerie" : "Gallery",
      cases: locale === "fr" ? "Réalisations" : "Cases",
      studio: "Studio",
      blog: locale === "fr" ? "Journal" : "Blog",
      vousEtes: locale === "fr" ? "Vous êtes" : "Who you are",
      tarifs: locale === "fr" ? "Tarifs" : "Pricing",
      cta: locale === "fr" ? "Lancer un projet" : "Start a project",
    },
  };

  return fallbackSettings;
}

export async function fetchHomepageContent(locale: string): Promise<HomepageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.homepage) {
    return siteContent.homepage;
  }

  return await fetchHomepageContentFallback(safeLocale);
}

async function fetchAlbumsFromWordPress() {
  type AlbumsResponse = {
    albums?: {
      nodes?: Array<{
        databaseId: number;
        slug: string;
        title: string;
        content: string;
        albumMeta?: {
          category?: string;
          location?: string;
          year?: string;
          client?: string;
          architect?: string;
          renderType?: string;
          services?: string;
          virtualTourUrl?: string;
          videoUrl?: string;
        };
        featuredImage?: {
          node?: {
            sourceUrl: string;
            altText: string;
          };
        };
        albumGallery?: {
          gallery?: Array<{
            sourceUrl: string;
            altText: string;
          }>;
        };
      }>;
    };
  };

  const response = await executeGraphQL<AlbumsResponse>(ALBUMS_QUERY, {});

  if (!response?.albums?.nodes) {
    return [];
  }

  // Transform WordPress internal URLs to localhost for browser/Next.js access
  const transformUrl = (url: string) => url.replace('http://wordpress', 'http://localhost:8080');

  return response.albums.nodes.map((album) => ({
    id: `album-${album.databaseId}`,
    slug: album.slug,
    title: album.title,
    description: album.content?.replace(/<[^>]*>/g, "").trim() || "",
    category: album.albumMeta?.category || "",
    location: album.albumMeta?.location || "",
    year: album.albumMeta?.year || "",
    client: album.albumMeta?.client || "",
    architect: album.albumMeta?.architect || "",
    renderType: album.albumMeta?.renderType || "",
    services: album.albumMeta?.services || "",
    virtualTourUrl: album.albumMeta?.virtualTourUrl || "",
    videoUrl: album.albumMeta?.videoUrl || "",
    coverImage: album.featuredImage?.node
      ? {
          id: `cover-${album.databaseId}`,
          src: transformUrl(album.featuredImage.node.sourceUrl),
          alt: album.featuredImage.node.altText || album.title,
        }
      : undefined,
    images: album.albumGallery?.gallery?.map((img, idx) => ({
      id: `${album.slug}-${idx}`,
      src: transformUrl(img.sourceUrl),
      alt: img.altText || `${album.title} - Image ${idx + 1}`,
    })) || [],
  }));
}

export async function fetchGalleryPageContent(locale: string): Promise<GalleryPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;

  // Fetch base content from WordPress
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  // Fetch albums from WordPress database
  const wpAlbums = await fetchAlbumsFromWordPress();

  // If we have WordPress content, use it as base
  if (siteContent?.gallery) {
    // Replace albums with WordPress albums if available
    if (wpAlbums.length > 0) {
      return {
        ...siteContent.gallery,
        showcase: {
          ...siteContent.gallery.showcase,
          albums: wpAlbums,
        },
      };
    }
    return siteContent.gallery;
  }

  // Fallback to default content but with WordPress albums if available
  const fallbackContent = await fetchGalleryPageContentFallback(safeLocale);
  if (wpAlbums.length > 0) {
    return {
      ...fallbackContent,
      showcase: {
        ...fallbackContent.showcase,
        albums: wpAlbums,
      },
    };
  }

  return fallbackContent;
}

export async function fetchCasesPageContent(locale: string): Promise<CasesPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.cases) {
    return siteContent.cases;
  }

  return await fetchCasesPageContentFallback(safeLocale);
}

export async function fetchStudioPageContent(locale: string): Promise<StudioPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.studio) {
    return siteContent.studio;
  }

  return await fetchStudioPageContentFallback(safeLocale);
}

export async function fetchBlogPageContent(locale: string): Promise<BlogPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.blog) {
    return siteContent.blog;
  }

  return await fetchBlogPageContentFallback(safeLocale);
}

export async function fetchVousEtesPageContent(locale: string): Promise<VousEtesPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.vousEtes) {
    return siteContent.vousEtes;
  }

  return await fetchVousEtesPageContentFallback(safeLocale);
}

export async function fetchTarifsPageContent(locale: string): Promise<TarifsPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.tarifs) {
    return siteContent.tarifs;
  }

  return await fetchTarifsPageContentFallback(safeLocale);
}

export async function fetchBlogPostContent(
  locale: string,
  slug: string,
): Promise<BlogPostContent | null> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const post = await fetchBlogPostFromWordPress(safeLocale, slug);

  if (post) {
    return post;
  }

  return fetchBlogPostContentFallback(safeLocale, slug);
}

export async function fetchContactPageContent(locale: string): Promise<ContactPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const siteContent = await fetchSiteContentFromWordPress(safeLocale);

  if (siteContent?.contact) {
    return siteContent.contact;
  }

  return await fetchContactPageContentFallback(safeLocale);
}

async function fetchServicesPageFromWordPress(
  locale: Locale,
): Promise<ServicesListPageContent | null> {
  const response = await executeGraphQL<{ parallaxServicesPage?: ServicesListPageContent }>(
    SERVICES_PAGE_QUERY,
    { locale },
  );

  if (!response?.parallaxServicesPage) {
    return null;
  }

  return response.parallaxServicesPage;
}

async function fetchServiceFromWordPress(
  locale: Locale,
  slug: string,
): Promise<Service | null> {
  const response = await executeGraphQL<{ parallaxService?: Service | null }>(
    SERVICE_DETAIL_QUERY,
    { locale, slug },
  );

  if (response?.parallaxService) {
    return response.parallaxService;
  }

  return null;
}

export async function fetchServicesPageContent(
  locale: string,
): Promise<ServicesListPageContent | null> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const page = await fetchServicesPageFromWordPress(safeLocale);

  if (page) {
    return page;
  }

  // TODO: Add fallback content
  return null;
}

export async function fetchServiceContent(
  locale: string,
  slug: string,
): Promise<Service | null> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const service = await fetchServiceFromWordPress(safeLocale, slug);

  if (service) {
    return service;
  }

  // Fallback to try finding in services page
  const servicesPage = await fetchServicesPageContent(locale);
  if (servicesPage?.services) {
    return servicesPage.services.find((s) => s.slug === slug) || null;
  }

  return null;
}

async function fetchProjectsPageFromWordPress(
  locale: Locale,
): Promise<ProjectsListPageContent | null> {
  const response = await executeGraphQL<{ parallaxProjectsPage?: ProjectsListPageContent }>(
    PROJECTS_PAGE_QUERY,
    { locale },
  );

  if (!response?.parallaxProjectsPage) {
    return null;
  }

  return response.parallaxProjectsPage;
}

async function fetchProjectFromWordPress(
  locale: Locale,
  slug: string,
): Promise<Project | null> {
  const response = await executeGraphQL<{ parallaxProject?: Project | null }>(
    PROJECT_DETAIL_QUERY,
    { locale, slug },
  );

  if (response?.parallaxProject) {
    return response.parallaxProject;
  }

  return null;
}

export async function fetchProjectsPageContent(
  locale: string,
): Promise<ProjectsListPageContent | null> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const page = await fetchProjectsPageFromWordPress(safeLocale);

  if (page) {
    return page;
  }

  // TODO: Add fallback content
  return null;
}

export async function fetchProjectContent(
  locale: string,
  slug: string,
): Promise<Project | null> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  const project = await fetchProjectFromWordPress(safeLocale, slug);

  if (project) {
    return project;
  }

  // Fallback to try finding in projects page
  const projectsPage = await fetchProjectsPageContent(locale);
  if (projectsPage?.projects) {
    return projectsPage.projects.find((p) => p.slug === slug) || null;
  }

  return null;
}

async function fetchClientsFromWordPress(): Promise<ClientLogo[]> {
  const response = await executeGraphQL<{ clients?: ClientLogo[] }>(
    CLIENTS_QUERY,
  );

  if (!response?.clients) {
    return [];
  }

  return response.clients;
}

export async function fetchClients(): Promise<ClientLogo[]> {
  try {
    const clients = await fetchClientsFromWordPress();
    return clients;
  } catch (error) {
    console.warn("[wordpressClient] Failed to fetch clients:", error);
    return [];
  }
}

export type * from "./defaultContent";
