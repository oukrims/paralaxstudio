import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export type HeroImage = {
  id: string;
  src: string;
  alt: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  quote: string;
  gallery: HeroImage[];
};

export type QuoteText = {
  text: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  alignment?: 'left' | 'center' | 'right';
  letterAnime?: boolean;
  lineAnime?: boolean;
};

export type QuoteSection = {
  scrollPrompt?: string;
  texts: QuoteText[];
  images: HeroImage[];
};

export type FeaturedProject = {
  id: string;
  name: string;
  type: string;
  location: string;
  year: string;
  image: HeroImage;
};

export type FeaturedProjectsSection = {
  title: string;
  intro: string;
  projects: FeaturedProject[];
  ctaLabel: string;
  ctaHref: string;
};

export type ServiceBucket = {
  id: string;
  title: string;
  bullets: string[];
};

export type ServicesSection = {
  title: string;
  intro: string;
  items: ServiceBucket[];
  ctaLabel: string;
  ctaHref: string;
  videoUrl?: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: "circle" | "square" | "triangle";
  details: string[];
};

export type ProcessSection = {
  title: string;
  intro: string;
  steps: ProcessStep[];
};

export type AboutSection = {
  title: string;
  body: string;
  dnaTitle: string;
  dnaBody: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Differentiator = {
  id: string;
  title: string;
  description: string;
};

export type DifferentiatorsSection = {
  title: string;
  items: Differentiator[];
};

export type ClientType = {
  id: string;
  title: string;
  description: string;
  logo?: HeroImage;
};

export type ClientsSection = {
  title: string;
  intro: string;
  items: ClientType[];
  ctaLabel: string;
  ctaHref: string;
};

export type ClientLogo = {
  id: string;
  name: string;
  logo: HeroImage | null;
  websiteUrl?: string | null;
  order: number;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};

export type FinalCTASection = {
  title: string;
  subtitle: string;
  quote: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export type FooterLinkGroup = {
  id: string;
  title: string;
  links: { label: string; href: string }[];
};

export type FooterContent = {
  tagline: string;
  description: string;
  contact: {
    label: string;
    value: string;
    href: string;
  }[];
  linkGroups: FooterLinkGroup[];
  copyright: string;
  socials: { id: string; label: string; href: string }[];
};

export type ServiceNavItem = {
  slug: string;
  title: string;
};

export type Navigation = {
  contact: string;
  instagram: string;
  services: string;
  gallery: string;
  cases: string;
  studio: string;
  blog: string;
  vousEtes: string;
  tarifs: string;
  cta: string;
};

export type SiteSettings = {
  servicesNav: ServiceNavItem[];
  navigation: Navigation;
};

export type HomepageContent = {
  hero: HeroContent;
  quoteSection: QuoteSection;
  featuredProjects: FeaturedProjectsSection;
  services: ServicesSection;
  process: ProcessSection;
  about: AboutSection;
  differentiators: DifferentiatorsSection;
  clients: ClientsSection;
  faqs: FAQSection;
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type SimpleHeroContent = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  published: string;
  readTime: string;
  excerpt: string;
  href: string;
  image: HeroImage;
};

export type ArticlesSection = {
  title: string;
  intro: string;
  articles: Article[];
  ctaLabel: string;
  ctaHref: string;
  articleCtaLabel: string;
};

export type ImageAlbum = {
  id: string;
  slug?: string;
  title: string;
  description?: string;
  category?: string;
  location?: string;
  year?: string;
  coverImage?: HeroImage;
  images: HeroImage[];
};

export type GalleryCategory = {
  id: string;
  slug: string;
  label: string;
  intro?: string;
};

export type GalleryShowcaseSection = {
  title: string;
  intro: string;
  categories?: GalleryCategory[];
  albums: ImageAlbum[];
  ctaLabel?: string;
  ctaHref?: string;
  virtualTourShowcaseUrl?: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  heroImage?: HeroImage;
  benefits: Benefit[];
  process: ProcessStep[];
  images: HeroImage[];
  relatedProjects: FeaturedProject[];
  icon?: string;
  category?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type ServicesListPageContent = {
  hero: SimpleHeroContent;
  services: Service[];
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type PullQuote = {
  text: string;
  attribution: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  heroImage?: HeroImage;
  client: string;
  location: string;
  year: string;
  duration: string;
  projectType: string;
  deliverables: string[];
  challenge: string;
  solution: string;
  results: string[];
  gallery: HeroImage[];
  testimonial: PullQuote;
  services: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type ProjectsListPageContent = {
  hero: SimpleHeroContent;
  projects: Project[];
  process: ProcessSection;
  clients: ClientsSection;
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type GalleryPageContent = {
  hero: SimpleHeroContent;
  showcase: GalleryShowcaseSection;
  services: ServicesSection;
  differentiators: DifferentiatorsSection;
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type FounderSpotlight = {
  name: string;
  title: string;
  bio: string;
  quote?: string;
  image: HeroImage;
  experienceHighlights: { id: string; label: string; value: string }[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  location: string;
  image: HeroImage;
};

export type TeamSection = {
  title: string;
  intro: string;
  members: TeamMember[];
};

export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href: string;
  description: string;
};

export type ContactOffice = {
  id: string;
  city: string;
  country: string;
  address: string[];
  timezone: string;
  mapHref: string;
  image: HeroImage;
};

export type ContactAvailability = {
  title: string;
  subtitle: string;
  slots: string[];
  note: string;
};

export type ContactPageContent = {
  hero: SimpleHeroContent;
  intro: {
    title: string;
    body: string;
    bullets: string[];
  };
  channelsHeading: {
    eyebrow: string;
    title: string;
  };
  channels: ContactChannel[];
  officesHeading: {
    eyebrow: string;
    title: string;
  };
  offices: ContactOffice[];
  availability: ContactAvailability;
  footer: FooterContent;
};

export type CasesPageContent = {
  hero: SimpleHeroContent;
  caseStudies: FeaturedProjectsSection;
  process: ProcessSection;
  clients: ClientsSection;
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type StudioPageContent = {
  hero: SimpleHeroContent;
  founder: FounderSpotlight;
  about: AboutSection;
  services: ServicesSection;
  team: TeamSection;
  differentiators: DifferentiatorsSection;
  clients: ClientsSection;
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type BlogPageContent = {
  hero: SimpleHeroContent;
  articles: ArticlesSection;
  faqs: FAQSection;
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type ClientCategory = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
};

export type VousEtesPageContent = {
  hero: SimpleHeroContent;
  categories: ClientCategory[];
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type PricingPackage = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type PricingFactor = {
  id: string;
  icon: string;
  title: string;
  description: string;
  pricing: {
    label: string;
    price: string;
  }[];
};

export type PricingTableRow = {
  service: string;
  price: string;
};

export type VideoPackage = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  priceUnit: string;
};

export type SpecialOffer = {
  id: string;
  title: string;
  features: string[];
  price: number;
  currency: string;
  priceLabel: string;
};

export type TarifsPageContent = {
  hero: SimpleHeroContent;
  introduction: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  packagesTitle: string;
  packages: PricingPackage[];
  pricingFactors: {
    title: string;
    subtitle: string;
    factors: PricingFactor[];
  };
  pricingTable: {
    title: string;
    warning: {
      title: string;
      message: string;
    };
    rows: {
      category: string;
      items: PricingTableRow[];
    }[];
  };
  videoPricing: {
    title: string;
    subtitle: string;
    factors: {
      icon: string;
      title: string;
      items: string[];
    }[];
    tiers: VideoPackage[];
    specialOffers: {
      title: string;
      offers: SpecialOffer[];
    };
  };
  process: {
    title: string;
    commitment: string;
    content: string[];
    tip: string;
  };
  faq: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  finalCta: FinalCTASection;
  footer: FooterContent;
};

export type BlogPostSectionContent = {
  id: string;
  heading?: string;
  body: string;
  type?: "text" | "quote" | "list";
  items?: string[];
};

export type BlogPostContent = {
  slug: string;
  title: string;
  intro: string;
  category: string;
  published: string;
  readTime: string;
  heroImage: HeroImage;
  sections: BlogPostSectionContent[];
  pullQuote?: {
    text: string;
    attribution?: string;
  };
  conclusionCta?: {
    label: string;
    href: string;
  };
};

type MockDatabase = Record<Locale, HomepageContent>;

const galleryImages: HeroImage[] = [
  {
    id: "city-twilight",
    src: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80",
    alt: "Perspective 3D d'un quartier urbain au crépuscule",
  },
  {
    id: "interior-warm",
    src: "https://images.unsplash.com/photo-1616593932491-71294843d7e1?auto=format&fit=crop&w=1600&q=80",
    alt: "Visualisation d'un salon contemporain chaleureux",
  },
  {
    id: "villa-sea",
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    alt: "Villa minimaliste face à la mer au lever du soleil",
  },
  {
    id: "office-night",
    src: "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1600&q=80",
    alt: "Bureau vitré éclairé de nuit avec vue urbaine",
  },
  {
    id: "hotel-lobby",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    alt: "Lobby d'hôtel haut de gamme avec ambiance chaude",
  },
  {
    id: "urban-masterplan",
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    alt: "Plan masse urbain avec typologie variée",
  },
  {
    id: "furniture-design",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    alt: "Prototype de mobilier moderne en rendu 3D",
  },
  {
    id: "architecture-dusk",
    src: "https://images.unsplash.com/photo-1465800872432-39a1eae0cf0c?auto=format&fit=crop&w=1600&q=80",
    alt: "Façade architecturale au soleil couchant",
  },
  {
    id: "atrium-daylight",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    alt: "Atrium baigné de lumière naturelle",
  },
  {
    id: "residential-evening",
    src: "https://images.unsplash.com/photo-1459535653751-d571815e906b?auto=format&fit=crop&w=1600&q=80",
    alt: "Résidence haut de gamme avec éclairages nocturnes",
  },
];

const mockDatabase: MockDatabase = {
  fr: {
    hero: {
      title:
        "Nous créons des visualisations architecturales 3D photo-réalistes qui donnent vie à vos projets",
      subtitle:
        "Parallax Stud.io est une agence franco-marocaine spécialisée dans la visualisation architecturale 3D de haute qualité. Nous transformons vos concepts architecturaux en images époustouflantes qui captivent et convainquent vos clients.",
      quote:
        "La clé pour créer une mise en scène 3D mémorable est de lui insuffler une âme.",
      gallery: galleryImages,
    },
    quoteSection: {
      scrollPrompt: "Faites défiler 👇",
      texts: [
        {
          text: "La clé pour créer une mise en scène 3D mémorable est de lui insuffler une âme",
          alignment: "center",
        },
        {
          text: "Où l'architecture rencontre l'art et l'imagination devient réalité",
          alignment: "left",
          letterAnime: true,
        },
        {
          text: "Transformer vos concepts en expériences visuelles captivantes",
          alignment: "right",
          direction: "right",
        },
        {
          text: "Des visuels qui parlent, qui émeuvent, qui vendent",
          alignment: "center",
          direction: "down",
          lineAnime: true,
        },
      ],
      images: galleryImages.slice(0, 13),
    },
    featuredProjects: {
      title: "Projets en vedette",
      intro:
        "Découvrez quelques-unes de nos réalisations les plus emblématiques. De l'échelle urbaine au design d'intérieur, nous sublimons chaque projet avec une attention méticuleuse aux détails.",
      projects: [
        {
          id: "azure-villa",
          name: "Villa Azur",
          type: "Résidentiel haut de gamme",
          location: "Essaouira, Maroc",
          year: "2024",
          image: galleryImages[2],
        },
        {
          id: "skyline-tower",
          name: "Skyline Tower",
          type: "Programme mixte",
          location: "Casablanca, Maroc",
          year: "2023",
          image: galleryImages[0],
        },
        {
          id: "eden-lobby",
          name: "Eden Lobby",
          type: "Hospitality",
          location: "Paris, France",
          year: "2022",
          image: galleryImages[4],
        },
        {
          id: "atlas-quarter",
          name: "Quartier Atlas",
          type: "Urbanisme",
          location: "Rabat, Maroc",
          year: "2024",
          image: galleryImages[5],
        },
      ],
      ctaLabel: "Découvrez notre portfolio complet",
      ctaHref: "/portfolio",
    },
    services: {
      title: "Une expertise complète en visualisation architecturale",
      intro:
        "Chez Parallax Stud.io, nous maîtrisons tous les outils de la visualisation 3D pour créer des visuels photoréalistes d'un réalisme captivant, stupéfiants de beauté et de vie.",
      items: [
        {
          id: "schematics",
          title: "Schémas 2D",
          bullets: [
            "Schémas isométriques et axonométries",
            "Traitement de coupes et façades",
            "Intégration contexte urbain et naturel",
          ],
        },
        {
          id: "renders",
          title: "Rendus 3D fixes",
          bullets: [
            "Rendus intérieurs (2K à 16K)",
            "Rendus extérieurs (2K à 16K)",
            "Post-production professionnelle",
            "Insertion de personnages et végétation",
          ],
        },
        {
          id: "animations",
          title: "Animations vidéo",
          bullets: [
            "Vidéos 2K à 4K (30-60fps)",
            "Montage audio et vidéo",
            "Incrustation de logos et textes",
            "Effets cinématiques et transitions",
          ],
        },
        {
          id: "panoramas",
          title: "Rendus panoramiques 360°",
          bullets: [
            "Visites virtuelles immersives",
            "Compatible smartphone et tablette",
            "Intégration multi-espaces",
            "Plateforme Klapty ou similaire",
          ],
        },
        {
          id: "ai",
          title: "Génération artificielle",
          bullets: [
            "Création rapide de variations",
            "Images photoréalistes par IA",
            "Réaménagement d'espaces existants",
            "Explorations conceptuelles",
          ],
        },
        {
          id: "experiences",
          title: "Expériences virtuelles",
          bullets: [
            "Réalité virtuelle (VR)",
            "Réalité augmentée (AR)",
            "Virtual tours interactifs",
            "Maquettes 3D visitables",
          ],
        },
      ],
      ctaLabel: "Découvrez nos services en détail",
      ctaHref: "/services",
    },
    process: {
      title: "Notre processus de création",
      intro:
        "De la première esquisse à la livraison finale, nous vous accompagnons à chaque étape avec professionnalisme et transparence.",
      steps: [
        {
          id: "brief",
          title: "Envoyez votre brief",
          description:
            "Envoyez-nous vos plans, mood boards et références. Nous analysons votre projet pour définir la meilleure approche et vous remettre un devis précis.",
          icon: "circle",
          details: [
            "Fichier 3D SketchUp",
            "Plans, coupes et élévations (AutoCAD/PDF)",
            "Références visuelles et mood boards",
            "Spécifications matériaux et couleurs",
            "Délais souhaités",
          ],
        },
        {
          id: "iterations",
          title: "Échanges et révisions",
          description:
            "Votre chef de projet dédié coordonne les échanges. Jusqu'à trois cycles de révision sont inclus pour atteindre exactement votre vision.",
          icon: "square",
          details: [
            "Versions préliminaires en basse résolution",
            "Feedback structuré",
            "Ajustements successifs",
            "Validation progressive",
          ],
        },
        {
          id: "delivery",
          title: "Livraison finale",
          description:
            "Nous livrons votre visualisation dans les formats souhaités, en haute résolution et dans les délais convenus.",
          icon: "triangle",
          details: [
            "Images haute résolution (JPEG, PNG, TIFF)",
            "Animations (MP4, MOV, AVI)",
            "Panoramiques 360°",
            "Fichiers sources 3D sur demande",
          ],
        },
      ],
    },
    about: {
      title: "Parallax Stud.io : Là où l'architecture rencontre l'art",
      body:
        "La 3D hyper-réaliste révolutionne la vente de biens immobiliers. Plus rentable que la photographie, elle offre une liberté totale pour traduire vos intentions et séduire vos clients.",
      dnaTitle: "Notre ADN",
      dnaBody:
        "Agence franco-marocaine réunissant des profils d'architectes et de designers. Nous parlons le même langage que vous pour délivrer des visuels capables de valoriser vos projets comme jamais auparavant.",
      ctaLabel: "En savoir plus sur notre studio",
      ctaHref: "/studio",
    },
    differentiators: {
      title: "Ce qui nous distingue",
      items: [
        {
          id: "dual-culture",
          title: "Le meilleur des deux mondes",
          description:
            "Savoir-faire français, implantation marocaine : prestations haut de gamme à tarifs maîtrisés.",
        },
        {
          id: "pro-tools",
          title: "Outils professionnels",
          description:
            "Logiciels sous licence, stations RTX, refroidissement liquide et flux calibrés pour la performance.",
        },
        {
          id: "architecture-expertise",
          title: "Expertise architecturale",
          description:
            "Plus de 10 ans dans des cabinets d'architecture et de design. Une sensibilité projet à chaque livraison.",
        },
        {
          id: "flexibility",
          title: "Flexibilité totale",
          description:
            "Interlocuteur unique francophone, communication trilingue, adaptation à vos contraintes temporelles.",
        },
        {
          id: "bespoke",
          title: "Designs sur mesure",
          description:
            "Ambiances calibrées sur les tendances actuelles ou entièrement personnalisées selon votre marque.",
        },
        {
          id: "trust",
          title: "Relation de confiance",
          description:
            "Secret professionnel garanti, collaboration transparente et compréhension fine de vos défis métier.",
        },
      ],
    },
    clients: {
      title: "Nos clients",
      intro:
        "La visualisation 3D s'adresse à tous les professionnels du bâtiment et du design. Offrez à vos interlocuteurs une immersion totale dans votre projet.",
      items: [
        {
          id: "architects",
          title: "Architectes & architectes d'intérieur",
          description:
            "Projetez vos clients dans leur futur espace pour accélérer les décisions et limiter les aller-retours.",
        },
        {
          id: "urbanists",
          title: "Urbanistes & paysagistes",
          description:
            "Contextualisez vos projets dans leur environnement et visualisez l'impact à grande échelle.",
        },
        {
          id: "developers",
          title: "Promoteurs immobiliers",
          description:
            "Vendez sur plan grâce à des visuels réalistes, présentant variantes, options et personnalisation.",
        },
        {
          id: "designers",
          title: "Designers & scénographes",
          description:
            "Sublimez vos créations avec des ambiances adaptées et des mises en scène sur-mesure.",
        },
        {
          id: "individuals",
          title: "Particuliers & porteurs de projets",
          description:
            "Visualisez votre futur intérieur avant travaux et prenez des décisions éclairées sur les matériaux.",
        },
      ],
      ctaLabel: "Découvrez ce que nous pouvons faire pour vous",
      ctaHref: "/contact",
    },
    faqs: {
      title: "Questions fréquentes",
      items: [
        {
          id: "definition",
          question: "Qu'est-ce que la visualisation architecturale 3D ?",
          answer:
            "C'est la représentation photoréaliste d'un projet architectural au stade conceptuel. Elle permet de se projeter précisément dans l'espace futur.",
        },
        {
          id: "timeline",
          question: "Combien de temps prend un projet de rendu 3D ?",
          answer:
            "Rendus fixes standards : 5-7 jours. Animations : 2-4 semaines. Virtual tours 360° : 1-2 semaines. Projets complexes : sur devis.",
        },
        {
          id: "documents",
          question: "Quels documents dois-je fournir ?",
          answer:
            "Fichier 3D SketchUp, plans cotés (DWG/PDF), élévations, mood board, références visuelles et spécifications techniques.",
        },
        {
          id: "pricing",
          question: "Combien coûte un rendu 3D ?",
          answer:
            "Nos tarifs dépendent de la complexité, du nombre de vues, de la résolution et des services additionnels. Rendu intérieur dès 3 000 DH, extérieur dès 4 000 DH, animation dès 15 000 DH/minute.",
        },
        {
          id: "revisions",
          question: "Puis-je demander des modifications ?",
          answer:
            "Oui, jusqu'à trois tours de révision sont inclus dans notre processus pour garantir votre satisfaction.",
        },
        {
          id: "sources",
          question: "Livrez-vous les fichiers sources 3D ?",
          answer:
            "Oui, sur demande et avec supplément. Vous pouvez ainsi réutiliser la modélisation pour d'autres besoins.",
        },
        {
          id: "international",
          question: "Travaillez-vous à l'international ?",
          answer:
            "Oui, nous accompagnons des clients en Europe et au-delà, en français, anglais, espagnol ou arabe, sans TVA pour nos clients étrangers.",
        },
        {
          id: "formats",
          question: "Quels formats de livraison proposez-vous ?",
          answer:
            "Images haute résolution (JPEG, PNG, TIFF), vidéos (MP4, MOV, AVI) en 2K-4K, panoramiques 360° intégrables sur le web et fichiers prêts pour l'impression jusqu'à 16K.",
        },
      ],
    },
    finalCta: {
      title: "Un projet en perspective ?",
      subtitle: "Donnons vie à votre vision",
      quote:
        "Avec notre expérience et notre maîtrise de tous les outils 3D, nous vous garantissons de créer des visuels photoréalistes d'un réalisme captivant, stupéfiants de beauté et de vie.",
      primaryCta: {
        label: "Contactez-nous",
        href: "/contact",
      },
      secondaryCta: {
        label: "Voir notre portfolio",
        href: "/portfolio",
      },
    },
    footer: {
      tagline: "Parallax Stud.io",
      description:
        "Agence franco-marocaine de visualisation architecturale 3D. Nous créons des visuels photoréalistes qui donnent vie à vos projets et vous aident à mieux vendre.",
      contact: [
        {
          label: "Email",
          value: "parallax.studio@gmail.com",
          href: "mailto:parallax.studio@gmail.com",
        },
        {
          label: "Téléphone",
          value: "+212 701098564",
          href: "tel:+212701098564",
        },
        {
          label: "Adresse",
          value: "5 Rue Tajmouati, Quartier les Orangers, Rabat, Maroc",
          href: "https://maps.google.com/?q=5+Rue+Tajmouati+Quartier+les+Orangers+Rabat+Morocco",
        },
      ],
      linkGroups: [
        {
          id: "navigation",
          title: "Navigation rapide",
          links: [
            { label: "Accueil", href: "/" },
            { label: "Galerie", href: "/gallery" },
            { label: "Le Studio", href: "/studio" },
            { label: "Services", href: "/services" },
            { label: "Tarifs", href: "/tarifs" },
            { label: "Actualités", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          id: "services",
          title: "Nos expertises",
          links: [
            { label: "Schémas 2D", href: "/services#schemas-2d" },
            { label: "Rendus 3D Fixes", href: "/services#rendus-3d" },
            { label: "Animations Vidéo", href: "/services#animations" },
            { label: "Rendus 360°", href: "/services#rendus-360" },
            { label: "Génération IA", href: "/services#ia" },
            { label: "Réalité Virtuelle", href: "/services#vr" },
            { label: "Virtual Tours", href: "/services#virtual-tours" },
          ],
        },
        {
          id: "legal",
          title: "Légal",
          links: [
            { label: "Mentions légales", href: "/legal" },
            { label: "Politique de confidentialité", href: "/privacy" },
            { label: "CGV", href: "/terms" },
          ],
        },
      ],
      socials: [
        { id: "instagram", label: "Instagram", href: "https://instagram.com/parallax.studio" },
        { id: "facebook", label: "Facebook", href: "https://facebook.com/parallax.studio" },
        { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/parallax-studio" },
        { id: "youtube", label: "YouTube", href: "https://youtube.com/@parallax.studio" },
        { id: "behance", label: "Behance", href: "https://behance.net/parallax-studio" },
      ],
      copyright: "© 2025 Parallax Stud.io - Tous droits réservés | Visualisation Architecturale 3D",
    },
  },
  en: {
    hero: {
      title:
        "We craft photorealistic 3D architectural visualizations that bring your projects to life",
      subtitle:
        "Parallax Stud.io is a French-Moroccan agency specialized in premium 3D architectural imagery. We transform your concepts into breathtaking visuals that captivate and convince your clients.",
      quote: "The key to a memorable 3D scene is the soul you breathe into it.",
      gallery: galleryImages,
    },
    quoteSection: {
      scrollPrompt: "Scroll Down 👇",
      texts: [
        {
          text: "The key to a memorable 3D scene is the soul you breathe into it",
          alignment: "center",
        },
        {
          text: "Where architecture meets art and imagination becomes reality",
          alignment: "left",
          letterAnime: true,
        },
        {
          text: "Transform your concepts into captivating visual experiences",
          alignment: "right",
          direction: "right",
        },
        {
          text: "Visuals that speak, move hearts, and sell",
          alignment: "center",
          direction: "down",
          lineAnime: true,
        },
      ],
      images: galleryImages.slice(0, 13),
    },
    featuredProjects: {
      title: "Highlighted projects",
      intro:
        "Explore some of our signature visuals. From urban scale to intimate interiors, every project receives meticulous attention to detail.",
      projects: [
        {
          id: "azure-villa",
          name: "Azure Villa",
          type: "Luxury residence",
          location: "Essaouira, Morocco",
          year: "2024",
          image: galleryImages[2],
        },
        {
          id: "skyline-tower",
          name: "Skyline Tower",
          type: "Mixed-use development",
          location: "Casablanca, Morocco",
          year: "2023",
          image: galleryImages[0],
        },
        {
          id: "eden-lobby",
          name: "Eden Lobby",
          type: "Hospitality",
          location: "Paris, France",
          year: "2022",
          image: galleryImages[4],
        },
        {
          id: "atlas-quarter",
          name: "Atlas Quarter",
          type: "Urban planning",
          location: "Rabat, Morocco",
          year: "2024",
          image: galleryImages[5],
        },
      ],
      ctaLabel: "Browse our full portfolio",
      ctaHref: "/portfolio",
    },
    services: {
      title: "A full-spectrum architectural visualization studio",
      intro:
        "Parallax Stud.io masters the entire visualization pipeline to deliver imagery that feels alive, precise, and deeply immersive.",
      items: [
        {
          id: "schematics",
          title: "2D schematics",
          bullets: [
            "Isometric and axonometric diagrams",
            "Sections and elevations treatment",
            "Urban and natural context integration",
          ],
        },
        {
          id: "renders",
          title: "Still 3D renders",
          bullets: [
            "Interior renders (2K to 16K)",
            "Exterior renders (2K to 16K)",
            "Advanced post-production",
            "Character and greenery insertion",
          ],
        },
        {
          id: "animations",
          title: "Video animations",
          bullets: [
            "2K to 4K sequences (30-60fps)",
            "Professional audio/video editing",
            "Logo and text overlays",
            "Cinematic effects and transitions",
          ],
        },
        {
          id: "panoramas",
          title: "360° panoramas",
          bullets: [
            "Immersive virtual tours",
            "Mobile & tablet ready",
            "Multi-space integration",
            "Klapty or similar platforms",
          ],
        },
        {
          id: "ai",
          title: "AI generation",
          bullets: [
            "Rapid creative variations",
            "Photoreal outputs powered by AI",
            "Space refurbishments",
            "Concept explorations",
          ],
        },
        {
          id: "experiences",
          title: "Immersive experiences",
          bullets: [
            "Virtual reality (VR)",
            "Augmented reality (AR)",
            "Interactive virtual tours",
            "Explorable 3D mock-ups",
          ],
        },
      ],
      ctaLabel: "View all services",
      ctaHref: "/services",
    },
    process: {
      title: "Our creation process",
      intro:
        "From the initial brief to the final delivery, we stay close to your team with crystal-clear communication.",
      steps: [
        {
          id: "brief",
          title: "Share your brief",
          description:
            "Send us plans, references, and desired atmosphere. We assess the scope and provide a detailed quote within hours.",
          icon: "circle",
          details: [
            "SketchUp 3D file",
            "Plans, elevations, sections",
            "Mood boards & references",
            "Material and color specs",
            "Deadline expectations",
          ],
        },
        {
          id: "iterations",
          title: "Exchange & refine",
          description:
            "Your dedicated project lead manages revisions. Up to three iteration rounds are included to match your expectations.",
          icon: "square",
          details: [
            "Low-res previews for feedback",
            "Structured review templates",
            "Adjustments based on comments",
            "Progressive approvals",
          ],
        },
        {
          id: "delivery",
          title: "Deliver & launch",
          description:
            "Receive your final imagery in the requested formats, on time, ready for presentations and sales.",
          icon: "triangle",
          details: [
            "High-res stills (JPEG, PNG, TIFF)",
            "Animations (MP4, MOV, AVI)",
            "360° panoramas",
            "Source files on request",
          ],
        },
      ],
    },
    about: {
      title: "Parallax Stud.io: where architecture meets art",
      body:
        "Hyper-realistic 3D visuals transform how real estate and design projects are sold. They offer creative freedom and tangible proof of your vision.",
      dnaTitle: "Our DNA",
      dnaBody:
        "A French-Moroccan collective of architects and visual artists. We speak your language and translate briefs into compelling narratives.",
      ctaLabel: "Meet the studio",
      ctaHref: "/studio",
    },
    differentiators: {
      title: "What sets us apart",
      items: [
        {
          id: "dual-culture",
          title: "Two cultures, one vision",
          description:
            "French craft meets Moroccan agility for refined visuals at competitive pricing.",
        },
        {
          id: "pro-tools",
          title: "State-of-the-art tools",
          description:
            "Licensed software, RTX workstations, liquid cooling, and calibrated pipelines for speed and fidelity.",
        },
        {
          id: "architecture-expertise",
          title: "Architectural expertise",
          description:
            "10+ years working with architects and designers. Your intent is understood from the first exchange.",
        },
        {
          id: "flexibility",
          title: "Total flexibility",
          description:
            "Single French-speaking contact, multilingual communication, and scheduling tailored to your milestones.",
        },
        {
          id: "bespoke",
          title: "Bespoke atmospheres",
          description:
            "Trend-driven or fully custom styling to align with your brand storytelling.",
        },
        {
          id: "trust",
          title: "Trust & discretion",
          description:
            "We share your professional ethics: confidentiality, transparency, and reliable delivery every time.",
        },
      ],
    },
    clients: {
      title: "Who we work with",
      intro:
        "3D visualization empowers every stakeholder in the built environment. Showcase ideas in an immersive, convincing way.",
      items: [
        {
          id: "architects",
          title: "Architects & interior designers",
          description:
            "Present post-renovation spaces before they exist to fast-track approvals and reduce back-and-forth.",
        },
        {
          id: "urbanists",
          title: "Urban planners & landscape designers",
          description:
            "Assess integration, scale, and environmental impact with realistic site-specific imagery.",
        },
        {
          id: "developers",
          title: "Real estate developers",
          description:
            "Sell off-plan with confidence through accurate visuals, customization options, and immersive tours.",
        },
        {
          id: "designers",
          title: "Product designers & scenographers",
          description:
            "Stage your creations in tailored atmospheres that highlight materials, light, and narrative.",
        },
        {
          id: "individuals",
          title: "Private clients & project owners",
          description:
            "Preview your future living space and make informed choices about finishes, colors, and layout.",
        },
      ],
      ctaLabel: "See what we can build together",
      ctaHref: "/contact",
    },
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          id: "definition",
          question: "What is 3D architectural visualization?",
          answer:
            "It is a photorealistic representation of an architectural concept, allowing stakeholders to project themselves into the final space.",
        },
        {
          id: "timeline",
          question: "How long does a 3D render take?",
          answer:
            "Standard stills: 5-7 days. Animations: 2-4 weeks. 360° tours: 1-2 weeks. Complex projects are quoted on demand.",
        },
        {
          id: "documents",
          question: "What documents should I send?",
          answer:
            "SketchUp file, dimensioned plans (DWG/PDF), elevations, mood boards, visual references, and material specifications.",
        },
        {
          id: "pricing",
          question: "How much does a 3D visualization cost?",
          answer:
            "Pricing varies with complexity, number of views, resolution, and extras. Interior renders from 3,000 MAD, exterior from 4,000 MAD, animation from 15,000 MAD/min.",
        },
        {
          id: "revisions",
          question: "Can I request changes?",
          answer:
            "Absolutely. Up to three revision rounds are included to ensure the result aligns perfectly with your expectations.",
        },
        {
          id: "sources",
          question: "Do you deliver source files?",
          answer:
            "Yes, available on demand with an additional fee so you can reuse the 3D assets for future needs.",
        },
        {
          id: "international",
          question: "Do you work internationally?",
          answer:
            "Yes, we collaborate with clients across Europe and beyond. Communication in French, English, Spanish, or Arabic. No VAT for international clients.",
        },
        {
          id: "formats",
          question: "Which formats do you deliver?",
          answer:
            "High-resolution stills (JPEG, PNG, TIFF), videos (MP4, MOV, AVI) in 2K-4K, interactive 360° panoramas, and print-ready assets up to 16K.",
        },
      ],
    },
    finalCta: {
      title: "Have a project in mind?",
      subtitle: "Let's bring your vision to life",
      quote:
        "With deep experience and mastery of the 3D toolset, we deliver photorealistic visuals that feel vibrant, beautiful, and alive.",
      primaryCta: {
        label: "Start a project",
        href: "/contact",
      },
      secondaryCta: {
        label: "View portfolio",
        href: "/portfolio",
      },
    },
    footer: {
      tagline: "Parallax Stud.io",
      description:
        "French-Moroccan 3D architectural visualization agency. We create photorealistic visuals that bring your projects to life and help you sell better.",
      contact: [
        {
          label: "Email",
          value: "parallax.studio@gmail.com",
          href: "mailto:parallax.studio@gmail.com",
        },
        {
          label: "Phone",
          value: "+212 701098564",
          href: "tel:+212701098564",
        },
        {
          label: "Address",
          value: "5 Rue Tajmouati, Quartier les Orangers, Rabat, Morocco",
          href: "https://maps.google.com/?q=5+Rue+Tajmouati+Quartier+les+Orangers+Rabat+Morocco",
        },
      ],
      linkGroups: [
        {
          id: "navigation",
          title: "Quick Links",
          links: [
            { label: "Home", href: "/" },
            { label: "Gallery", href: "/gallery" },
            { label: "Studio", href: "/studio" },
            { label: "Services", href: "/services" },
            { label: "Pricing", href: "/tarifs" },
            { label: "News", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          id: "services",
          title: "Our Expertise",
          links: [
            { label: "2D Diagrams", href: "/services#schemas-2d" },
            { label: "Fixed 3D Renders", href: "/services#rendus-3d" },
            { label: "Video Animations", href: "/services#animations" },
            { label: "360° Renders", href: "/services#rendus-360" },
            { label: "AI Generation", href: "/services#ia" },
            { label: "Virtual Reality", href: "/services#vr" },
            { label: "Virtual Tours", href: "/services#virtual-tours" },
          ],
        },
        {
          id: "legal",
          title: "Legal",
          links: [
            { label: "Legal Notice", href: "/legal" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
          ],
        },
      ],
      socials: [
        { id: "instagram", label: "Instagram", href: "https://instagram.com/parallax.studio" },
        { id: "facebook", label: "Facebook", href: "https://facebook.com/parallax.studio" },
        { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/parallax-studio" },
        { id: "youtube", label: "YouTube", href: "https://youtube.com/@parallax.studio" },
        { id: "behance", label: "Behance", href: "https://behance.net/parallax-studio" },
      ],
      copyright: "© 2025 Parallax Stud.io - All rights reserved | 3D Architectural Visualization",
    },
  },
};

const galleryPageDatabase: Record<Locale, GalleryPageContent> = {
  fr: {
    hero: {
      eyebrow: "Portfolio",
      title: "Galerie immersive des récits architecturaux",
      subtitle:
        "Plongez dans des rendus, animations et expériences interactives qui matérialisent la vision de nos partenaires avant même la construction.",
      cta: {
        label: "Discuter d'un projet",
        href: "/contact",
      },
      secondaryCta: {
        label: "Télécharger la brochure",
        href: "/portfolio",
      },
    },
    showcase: {
      title: "Sélection 2024/2025",
      intro:
        "Une collection de projets résidentiels, hospitality et programmes mixtes où la lumière, la matière et les atmosphères prennent vie.",
      albums: [
        {
          id: "mirage-desert-resort",
          slug: "mirage-desert-resort",
          title: "Mirage Desert Resort",
          description: "Resort de luxe dans le désert",
          category: "Hospitality premium",
          location: "Dakhla, Maroc",
          year: "2025",
          coverImage: galleryImages[4],
          images: [galleryImages[4], galleryImages[5], galleryImages[6]],
        },
        {
          id: "skylane-offices",
          slug: "skylane-offices",
          title: "Skylane Offices",
          description: "Bureaux modernes hybrides",
          category: "Bureaux",
          location: "Lyon, France",
          year: "2024",
          coverImage: galleryImages[3],
          images: [galleryImages[3], galleryImages[7], galleryImages[8]],
        },
        {
          id: "aurora-residence",
          slug: "aurora-residence",
          title: "Résidence Aurora",
          description: "Résidence signature de standing",
          category: "Résidentiel",
          location: "Lausanne, Suisse",
          year: "2025",
          coverImage: galleryImages[2],
          images: [galleryImages[2], galleryImages[0], galleryImages[1]],
        },
        {
          id: "atlas-masterplan",
          slug: "atlas-masterplan",
          title: "Atlas Masterplan",
          description: "Projet urbain d'envergure",
          category: "Urbanisme",
          location: "Casablanca, Maroc",
          year: "2024",
          coverImage: galleryImages[5],
          images: [galleryImages[5], galleryImages[4], galleryImages[9]],
        },
      ],
      ctaLabel: "Télécharger la galerie complète",
      ctaHref: "/portfolio",
    },
    services: {
      title: "Expériences visuelles sur mesure",
      intro:
        "Direction artistique, production 3D et post-production intégrées pour construire des galeries impactantes.",
      items: [
        {
          id: "lookdev",
          title: "Direction artistique & lookdev",
          bullets: [
            "Moodboards dynamiques et cadrages clefs",
            "Exploration colorimétrique et atmosphères",
            "Création de presets lumière dédiés",
          ],
        },
        {
          id: "multi-format",
          title: "Déclinaisons multi-format",
          bullets: [
            "Séries d'images cohérentes",
            "Animations teaser 15-45s",
            "Panoramas 360° interactifs",
          ],
        },
        {
          id: "publication",
          title: "Optimisation publication",
          bullets: [
            "Guidelines social media et presse",
            "Livrables web & print haute résolution",
            "Packaging sécurisé et tracké",
          ],
        },
      ],
      ctaLabel: "Planifier un repérage visuel",
      ctaHref: "/contact",
    },
    differentiators: {
      title: "Pourquoi notre galerie marque les esprits",
      items: [
        {
          id: "narration",
          title: "Narration maîtrisée",
          description:
            "Chaque série suit un storyboard précis pour raconter l'évolution du projet et capter l'attention.",
        },
        {
          id: "matieres",
          title: "Recherche matière poussée",
          description:
            "Shader library propriétaire pour restituer textures, reflets et patines avec réalisme.",
        },
        {
          id: "coherence",
          title: "Cohérence multi-supports",
          description:
            "Nos équipes veillent à l'alignement des visuels quelle que soit la plateforme de diffusion.",
        },
      ],
    },
    finalCta: {
      title: "Prêt à dévoiler votre prochain projet ?",
      subtitle: "Créons une galerie qui pose le décor",
      quote:
        "Nous orchestrons un parcours visuel qui sublime vos intentions et rassure vos publics.",
      primaryCta: {
        label: "Discuter d'un projet",
        href: "/contact",
      },
      secondaryCta: {
        label: "Découvrir nos études de cas",
        href: "/cases",
      },
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Portfolio",
      title: "Immersive Gallery of Built Narratives",
      subtitle:
        "Explore renderings, films, and interactive touchpoints that make our clients’ visions feel tangible long before construction.",
      cta: {
        label: "Start a conversation",
        href: "/contact",
      },
      secondaryCta: {
        label: "Download lookbook",
        href: "/portfolio",
      },
    },
    showcase: {
      title: "2024/2025 Showcase",
      intro:
        "A cross-section of residential, hospitality, and mixed-use work where light, materiality, and atmosphere take center stage.",
      albums: [
        {
          id: "tidal-sanctuary",
          slug: "tidal-sanctuary",
          title: "Tidal Sanctuary",
          description: "Luxury hospitality resort on the Oman Coast",
          category: "Luxury hospitality",
          location: "Oman Coast, UAE",
          year: "2025",
          coverImage: galleryImages[9],
          images: [galleryImages[9], galleryImages[0], galleryImages[1]],
        },
        {
          id: "north-loop",
          slug: "north-loop",
          title: "North Loop Offices",
          description: "Hybrid workplace in Amsterdam",
          category: "Hybrid workplace",
          location: "Amsterdam, NL",
          year: "2024",
          coverImage: galleryImages[3],
          images: [galleryImages[3], galleryImages[7], galleryImages[8]],
        },
        {
          id: "lumen-residences",
          slug: "lumen-residences",
          title: "Lumen Residences",
          description: "Signature residential project",
          category: "Signature residential",
          location: "Lisbon, Portugal",
          year: "2025",
          coverImage: galleryImages[2],
          images: [galleryImages[2], galleryImages[4], galleryImages[6]],
        },
        {
          id: "harbor-district",
          slug: "harbor-district",
          title: "Harbor District Vision",
          description: "Urban masterplan for Montreal",
          category: "Urban masterplan",
          location: "Montreal, Canada",
          year: "2024",
          coverImage: galleryImages[5],
          images: [galleryImages[5], galleryImages[9], galleryImages[3]],
        },
      ],
      ctaLabel: "Download full lookbook",
      ctaHref: "/portfolio",
    },
    services: {
      title: "Tailored visual experiences",
      intro:
        "Art direction, production, and finishing under one roof to craft galleries that convert browsers into believers.",
      items: [
        {
          id: "artdirection",
          title: "Art direction & lookdev",
          bullets: [
            "Live moodboarding sessions",
            "Atmosphere and palette exploration",
            "Lighting presets custom to your brand",
          ],
        },
        {
          id: "formats",
          title: "Multi-format storytelling",
          bullets: [
            "Cohesive image series",
            "Teaser films and motion loops",
            "Interactive 360° panoramas",
          ],
        },
        {
          id: "delivery",
          title: "Delivery & publishing",
          bullets: [
            "Social and press-ready guidelines",
            "High-res exports for web and print",
            "Secure delivery with version tracking",
          ],
        },
      ],
      ctaLabel: "Book a visual scouting session",
      ctaHref: "/contact",
    },
    differentiators: {
      title: "What makes the gallery resonate",
      items: [
        {
          id: "story",
          title: "Story-first sequencing",
          description:
            "Each gallery follows a storyboard arc that builds anticipation and clarity.",
        },
        {
          id: "materiality",
          title: "Material obsession",
          description:
            "Proprietary shader library and research workflows that capture nuance, sheen, and patina.",
        },
        {
          id: "platforms",
          title: "Platform consistency",
          description:
            "We ensure every asset feels on-brand whether it lives on pitch decks, social, or immersive screens.",
        },
      ],
    },
    finalCta: {
      title: "Ready to unveil your next vision?",
      subtitle: "Let’s shape a gallery that sets the tone",
      quote:
        "We orchestrate the visual journey that amplifies your intent and reassures stakeholders.",
      primaryCta: {
        label: "Start a conversation",
        href: "/contact",
      },
      secondaryCta: {
        label: "Review our case studies",
        href: "/cases",
      },
    },
    footer: mockDatabase.en.footer,
  },
};

const casesPageDatabase: Record<Locale, CasesPageContent> = {
  fr: {
    hero: {
      eyebrow: "Études de cas",
      title: "Études de cas & résultats clients",
      subtitle:
        "Analysez comment nous orchestrons chaque mandat, de la prise de brief jusqu'aux entregables stratégiques qui convainquent investisseurs et publics.",
      cta: {
        label: "Planifier un appel projet",
        href: "/contact",
      },
      secondaryCta: {
        label: "Voir la galerie",
        href: "/gallery",
      },
    },
    caseStudies: {
      title: "Histoires de collaborations",
      intro:
        "Des opérations urbaines aux projets hospitality, découvrez comment nos visuels ont accéléré les ventes, levées de fonds ou validations d'avant-projet.",
      projects: [
        {
          id: "riviera-hub",
          name: "Riviera Innovation Hub",
          type: "Campus tertiaire",
          location: "Nice, France",
          year: "2024",
          image: galleryImages[7],
        },
        {
          id: "aurora-condos",
          name: "Aurora Condominiums",
          type: "Commercialisation off-plan",
          location: "Madrid, Espagne",
          year: "2023",
          image: galleryImages[0],
        },
        {
          id: "harmonia-hotel",
          name: "Harmonia Hotel",
          type: "Hospitality concept",
          location: "Essaouira, Maroc",
          year: "2024",
          image: galleryImages[4],
        },
        {
          id: "quartier-meridian",
          name: "Quartier Meridian",
          type: "Renouveau urbain",
          location: "Montréal, Canada",
          year: "2025",
          image: galleryImages[5],
        },
      ],
      ctaLabel: "Télécharger les études complètes",
      ctaHref: "/cases",
    },
    process: {
      title: "Notre cadre d'intervention",
      intro:
        "Une méthodologie structurée pour sécuriser vos jalons internes et livrer des supports convaincants à chaque étape.",
      steps: [
        {
          id: "cadre",
          title: "Cadre stratégique",
          description:
            "Alignement des objectifs commerciaux, des audiences et des livrables attendus.",
          icon: "square",
          details: [
            "Audit du pitch, planning et contraintes",
            "Définition des messages clefs",
            "Roadmap visuelle et validation",
          ],
        },
        {
          id: "direction-artistique",
          title: "Direction artistique",
          description:
            "Moodboards vivants, repérages virtuels et choix des ambiances pour cadrer la narration.",
          icon: "triangle",
          details: [
            "Tests lumière et matériaux",
            "Storyboard des points de vue",
            "Itérations partagées en temps réel",
          ],
        },
        {
          id: "production",
          title: "Production & animation",
          description:
            "Modélisation, shading, lighting, animation et compositing dans une pipeline optimisée.",
          icon: "circle",
          details: [
            "Contrôle qualité intermédiaire",
            "Livraison prospects & pre-final",
            "Passage en color grading",
          ],
        },
        {
          id: "activation",
          title: "Activation",
          description:
            "Packaging des livrables et accompagnement des équipes sales ou marketing.",
          icon: "square",
          details: [
            "Formats adaptés (web, print, motion)",
            "Playbook d'utilisation",
            "Support live pour vos présentations",
          ],
        },
      ],
    },
    clients: {
      title: "Ils transforment leurs projets avec nous",
      intro:
        "Développeurs, foncières, agences de communication et designers d'expérience nous confient leurs récits visuels.",
      items: mockDatabase.fr.clients.items,
      ctaLabel: "Réserver une session découverte",
      ctaHref: "/contact",
    },
    finalCta: {
      title: "Prêt à bâtir votre prochaine étude de cas ?",
      subtitle: "Mettons en scène votre ambition",
      quote:
        "Nous articulons chaque livrable autour des indicateurs qui comptent pour vos investisseurs, acheteurs ou partenaires.",
      primaryCta: {
        label: "Planifier un appel projet",
        href: "/contact",
      },
      secondaryCta: {
        label: "Consulter notre galerie",
        href: "/gallery",
      },
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Case studies",
      title: "Case Studies & Measurable Outcomes",
      subtitle:
        "Understand how we guide every engagement—from kick-off through the strategic deliverables that win investors, buyers, and stakeholders.",
      cta: {
        label: "Book a project call",
        href: "/contact",
      },
      secondaryCta: {
        label: "Browse gallery",
        href: "/gallery",
      },
    },
    caseStudies: {
      title: "Stories from the field",
      intro:
        "From urban regeneration to hospitality flagships, see how our visuals accelerated sales, funding rounds, or design approvals.",
      projects: [
        {
          id: "seaward-campus",
          name: "Seaward Innovation Campus",
          type: "Innovation district",
          location: "Bristol, UK",
          year: "2024",
          image: galleryImages[7],
        },
        {
          id: "lumen-tower",
          name: "Lumen Tower Residences",
          type: "Pre-sales campaign",
          location: "Seattle, USA",
          year: "2023",
          image: galleryImages[0],
        },
        {
          id: "solstice-hotel",
          name: "Solstice Hotel & Spa",
          type: "Luxury hospitality",
          location: "Essaouira, Morocco",
          year: "2024",
          image: galleryImages[4],
        },
        {
          id: "harbor-quarter",
          name: "Harbor Quarter Renewal",
          type: "Urban revitalization",
          location: "Copenhagen, Denmark",
          year: "2025",
          image: galleryImages[5],
        },
      ],
      ctaLabel: "Download case study pack",
      ctaHref: "/cases",
    },
    process: {
      title: "How we deliver impact",
      intro:
        "A transparent framework that keeps stakeholders aligned and ensures every deliverable serves a measurable goal.",
      steps: [
        {
          id: "discovery",
          title: "Discovery framing",
          description:
            "Clarify commercial targets, audiences, and required deliverables.",
          icon: "square",
          details: [
            "Pitch, milestone, and constraint review",
            "Key message and KPI alignment",
            "Visual roadmap approval",
          ],
        },
        {
          id: "artdirection",
          title: "Art direction labs",
          description:
            "Moodboarding, virtual scouting, and atmosphere tests that set the tone of the story.",
          icon: "triangle",
          details: [
            "Lighting and material explorations",
            "Storyboard and camera blocking",
            "Collaborative iteration loops",
          ],
        },
        {
          id: "production",
          title: "Production sprint",
          description:
            "Modeling, shading, lighting, animation, and compositing handled by a dedicated pod.",
          icon: "circle",
          details: [
            "Interim quality gateways",
            "Preview deliveries for feedback",
            "Color pipeline and finishing",
          ],
        },
        {
          id: "launch",
          title: "Launch enablement",
          description:
            "Packaging, toolkits, and live support for your pitch teams or marketing squads.",
          icon: "square",
          details: [
            "Optimized formats (web, print, motion)",
            "Usage guidelines and storytelling notes",
            "Live rehearsal or presentation support",
          ],
        },
      ],
    },
    clients: {
      title: "Teams that trust us",
      intro:
        "Developers, architects, experiential agencies, and brands rely on our visuals to move decisions forward.",
      items: mockDatabase.en.clients.items,
      ctaLabel: "Book a discovery session",
      ctaHref: "/contact",
    },
    finalCta: {
      title: "Ready to craft your next flagship case study?",
      subtitle: "Let's frame the story together",
      quote:
        "We anchor every deliverable to the metrics that matter for your investors, buyers, and community.",
      primaryCta: {
        label: "Schedule a project call",
        href: "/contact",
      },
      secondaryCta: {
        label: "Browse the gallery",
        href: "/gallery",
      },
    },
    footer: mockDatabase.en.footer,
  },
};

const studioPageDatabase: Record<Locale, StudioPageContent> = {
  fr: {
    hero: {
      eyebrow: "Studio",
      title: "Dans les coulisses de Parallax Stud.io",
      subtitle:
        "Un collectif binational où artistes 3D, architectes, filmmakers et creative technologists imaginent des expériences spatiales mémorables.",
      cta: {
        label: "Organiser une rencontre",
        href: "/contact",
      },
      secondaryCta: {
        label: "Explorer nos services",
        href: "/services",
      },
    },
    founder: {
      name: "Nassim Aït Youssef",
      title: "Fondateur & directeur créatif",
      bio:
        "Architecte de formation et artiste 3D autodidacte, Nassim orchestre chaque projet en veillant à la précision architecturale, au rythme narratif et à la cohérence des livrables. Il pilote les directions artistiques et accompagne nos clients sur les sujets stratégiques.",
      quote:
        "Notre rôle est de traduire l'intention architecturale en émotions tangibles pour chaque public.",
      image: {
        id: "founder-nassim",
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        alt: "Portrait du fondateur de Parallax Stud.io",
      },
      experienceHighlights: [
        { id: "projects", label: "Projets menés", value: "210+" },
        { id: "years", label: "Années d'expérience 3D", value: "12" },
        { id: "offices", label: "Studios & partenaires", value: "Casablanca • Paris" },
      ],
    },
    about: {
      title: "Notre studio, deux villes, une vision",
      body:
        "Implanté à Casablanca et Paris, Parallax Stud.io fédère des talents capables de faire dialoguer architecture, design et technologie. Nous accompagnons les équipes projet dès les phases concours jusqu'à la mise sur le marché avec des images fortes, des films immersifs et des expériences interactives.",
      dnaTitle: "Notre ADN",
      dnaBody:
        "Transparence dans la collaboration, curiosité pour chaque typologie d'espace, et exigence sur la qualité de rendu.",
      ctaLabel: "Rencontrer l'équipe",
      ctaHref: "/contact",
    },
    services: {
      title: "Capabilities maison",
      intro:
        "Une organisation pensée par pôles qui fluidifie les échanges et assure un contrôle qualité constant.",
      items: [
        {
          id: "conception",
          title: "Pôle conception 3D",
          bullets: [
            "Modeling BIM & sculpt",
            "Layout et set dressing",
            "Recherche de cadrages signature",
          ],
        },
        {
          id: "image",
          title: "Image & lumière",
          bullets: [
            "Lookdev matériaux propriétaire",
            "Lighting physique et stylisé",
            "Compositing multi-pass",
          ],
        },
        {
          id: "motion",
          title: "Motion & interaction",
          bullets: [
            "Films cinématiques & walkthroughs",
            "Expériences WebGL et VR",
            "Intégration temps réel Unreal/Unity",
          ],
        },
        {
          id: "innovation",
          title: "Lab innovation",
          bullets: [
            "R&D pipeline & automatisation",
            "Intégration AI générative contrôlée",
            "Veille créative et technologique",
          ],
        },
      ],
      ctaLabel: "Co-concevoir un dispositif",
      ctaHref: "/contact",
    },
    team: {
      title: "La team Parallax",
      intro:
        "Une équipe pluridisciplinaire qui combine architecture, 3D, motion design et technologies immersives pour créer des expériences à fort impact.",
      members: [
        {
          id: "amelia",
          name: "Amélia Benyahia",
          role: "Directrice de production",
          location: "Casablanca",
          image: {
            id: "amelia-portrait",
            src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait d'Amélia Benyahia",
          },
        },
        {
          id: "maelle",
          name: "Maëlle Guerin",
          role: "Lead lighting artist",
          location: "Paris",
          image: {
            id: "maelle-portrait",
            src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait de Maëlle Guerin",
          },
        },
        {
          id: "ilyas",
          name: "Ilyas Rahmani",
          role: "Senior 3D generalist",
          location: "Casablanca",
          image: {
            id: "ilyas-portrait",
            src: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait d'Ilyas Rahmani",
          },
        },
        {
          id: "clara",
          name: "Clara Dupuis",
          role: "Experiential designer",
          location: "Lyon",
          image: {
            id: "clara-portrait",
            src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait de Clara Dupuis",
          },
        },
        {
          id: "wissal",
          name: "Wissal Oulkas",
          role: "Lookdev & materials",
          location: "Casablanca",
          image: {
            id: "wissal-portrait",
            src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait de Wissal Oulkas",
          },
        },
        {
          id: "thomas",
          name: "Thomas Le Bris",
          role: "Realtime engineer",
          location: "Montréal",
          image: {
            id: "thomas-portrait",
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait de Thomas Le Bris",
          },
        },
      ],
    },
    differentiators: {
      title: "Nos principes fondateurs",
      items: [
        {
          id: "hybridation",
          title: "Hybridation des talents",
          description:
            "Architectes, artistes 3D et motion designers co-créent chaque projet pour garantir un regard pluriel.",
        },
        {
          id: "rituels",
          title: "Rituels de pilotage",
          description:
            "Revues hebdomadaires, workflows documentés et outils partagés pour garder le cap et vous donner de la visibilité.",
        },
        {
          id: "learning",
          title: "Culture du learning",
          description:
            "Formations internes mensuelles, retours d'expérience et partage d'outils à l'ensemble de l'écosystème.",
        },
      ],
    },
    clients: {
      title: "Une base clients internationale",
      intro:
        "Immobilier, hospitality, retail expérientiel, institutions culturelles et agences créatives.",
      items: mockDatabase.fr.clients.items,
      ctaLabel: "Échanger avec nous",
      ctaHref: "/contact",
    },
    finalCta: {
      title: "Vous cherchez un partenaire créatif long terme ?",
      subtitle: "Travaillons main dans la main",
      quote:
        "Nous intégrons vos process de production comme une extension de vos équipes design, marketing ou ventes.",
      primaryCta: {
        label: "Organiser une rencontre",
        href: "/contact",
      },
      secondaryCta: {
        label: "Explorer nos services",
        href: "/services",
      },
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Studio",
      title: "Inside Parallax Stud.io",
      subtitle:
        "A bi-national collective where 3D artists, architects, filmmakers, and creative technologists craft spatial narratives that resonate.",
      cta: {
        label: "Schedule a conversation",
        href: "/contact",
      },
      secondaryCta: {
        label: "Explore services",
        href: "/services",
      },
    },
    founder: {
      name: "Nassim Aït Youssef",
      title: "Founder & creative director",
      bio:
        "Trained as an architect and self-taught 3D artist, Nassim directs every mandate—balancing architectural accuracy, narrative flow, and delivery rigor. He leads art direction sprints and coaches clients on strategic milestones.",
      quote:
        "Our craft is about turning architectural intent into memories stakeholders can already feel.",
      image: {
        id: "founder-nassim-en",
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        alt: "Portrait of the founder of Parallax Stud.io",
      },
      experienceHighlights: [
        { id: "projects", label: "Projects delivered", value: "210+" },
        { id: "years", label: "Years in visualization", value: "12" },
        { id: "offices", label: "Studios & partners", value: "Casablanca • Paris" },
      ],
    },
    about: {
      title: "Two cities, one shared vision",
      body:
        "Based between Casablanca and Paris, Parallax Stud.io blends disciplines to champion architecture, design, and technology. We partner from competition stages through go-to-market moments with powerful imagery, immersive films, and interactive touchpoints.",
      dnaTitle: "Our DNA",
      dnaBody:
        "Radical transparency, relentless curiosity, and uncompromising craft from kickoff to delivery.",
      ctaLabel: "Meet the team",
      ctaHref: "/contact",
    },
    services: {
      title: "In-house capabilities",
      intro:
        "A pod-based organization that keeps conversations fluid and quality consistently high.",
      items: [
        {
          id: "design",
          title: "3D design pod",
          bullets: [
            "Hybrid BIM & sculpt modeling",
            "Set dressing and spatial storytelling",
            "Signature camera explorations",
          ],
        },
        {
          id: "imagery",
          title: "Imagery & lighting pod",
          bullets: [
            "Proprietary material lookdev",
            "Physically based and stylized lighting",
            "Multi-pass compositing & grading",
          ],
        },
        {
          id: "motion",
          title: "Motion & interactive pod",
          bullets: [
            "Cinematic walkthroughs & films",
            "WebGL, AR and VR experiences",
            "Real-time integration with Unreal/Unity",
          ],
        },
        {
          id: "lab",
          title: "Innovation lab",
          bullets: [
            "Pipeline automation & tooling",
            "Responsible generative AI integration",
            "Creative and tech watch updates",
          ],
        },
      ],
      ctaLabel: "Co-design an engagement",
      ctaHref: "/contact",
    },
    team: {
      title: "Meet the Parallax team",
      intro:
        "A multidisciplinary crew spanning architecture, advanced 3D, motion, and immersive tech to deliver high-impact storytelling.",
      members: [
        {
          id: "amelia",
          name: "Amelia Benyahia",
          role: "Production director",
          location: "Casablanca",
          image: {
            id: "amelia-portrait",
            src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait of Amelia Benyahia",
          },
        },
        {
          id: "maelle",
          name: "Maëlle Guerin",
          role: "Lead lighting artist",
          location: "Paris",
          image: {
            id: "maelle-portrait",
            src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait of Maëlle Guerin",
          },
        },
        {
          id: "ilyas",
          name: "Ilyas Rahmani",
          role: "Senior 3D generalist",
          location: "Casablanca",
          image: {
            id: "ilyas-portrait",
            src: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait of Ilyas Rahmani",
          },
        },
        {
          id: "clara",
          name: "Clara Dupuis",
          role: "Experiential designer",
          location: "Lyon",
          image: {
            id: "clara-portrait",
            src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait of Clara Dupuis",
          },
        },
        {
          id: "wissal",
          name: "Wissal Oulkas",
          role: "Lookdev & materials",
          location: "Casablanca",
          image: {
            id: "wissal-portrait",
            src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait of Wissal Oulkas",
          },
        },
        {
          id: "thomas",
          name: "Thomas Le Bris",
          role: "Realtime engineer",
          location: "Montreal",
          image: {
            id: "thomas-portrait",
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
            alt: "Portrait of Thomas Le Bris",
          },
        },
      ],
    },
    differentiators: {
      title: "Operating principles",
      items: [
        {
          id: "team",
          title: "Hybrid teams",
          description:
            "Architects, 3D artists, and motion designers co-lead projects to ensure a multi-layered perspective.",
        },
        {
          id: "rhythm",
          title: "Predictable rhythm",
          description:
            "Weekly rituals, transparent tooling, and documented workflows keep you in the loop at every milestone.",
        },
        {
          id: "growth",
          title: "Learning culture",
          description:
            "Monthly internal labs, post-mortems, and community sharing keep the studio evolving.",
        },
      ],
    },
    clients: {
      title: "Who we team up with",
      intro:
        "Developers, hospitality brands, experiential retail, cultural institutions, and creative agencies.",
      items: mockDatabase.en.clients.items,
      ctaLabel: "Talk with us",
      ctaHref: "/contact",
    },
    finalCta: {
      title: "Looking for a long-term visual partner?",
      subtitle: "Let’s build it together",
      quote:
        "We embed within your design, marketing, or sales teams as an extension of your creative capacity.",
      primaryCta: {
        label: "Schedule a conversation",
        href: "/contact",
      },
      secondaryCta: {
        label: "Review our services",
        href: "/services",
      },
    },
    footer: mockDatabase.en.footer,
  },
};

const blogArticlesDatabase: Record<Locale, Article[]> = {
  fr: [
    {
      id: "ambiances-lumineuses",
      slug: "ambiances-lumineuses",
      title: "Composer des ambiances lumineuses qui racontent l'espace",
      category: "Processus",
      published: "Nov 2024",
      readTime: "6 min",
      excerpt:
        "Notre workflow lumière marie précision physique et codes cinématographiques pour guider l'émotion du spectateur.",
      href: "/blog/ambiances-lumineuses",
      image: galleryImages[0],
    },
    {
      id: "matiere-et-sensation",
      slug: "matiere-et-sensation",
      title: "Matière & sensation : donner du poids à vos matériaux",
      category: "Matériaux",
      published: "Sep 2024",
      readTime: "5 min",
      excerpt:
        "Études de matériaux, displacement maps et shading avancé : comment transmettre texture, poids et réalisme.",
      href: "/blog/matiere-et-sensation",
      image: galleryImages[1],
    },
    {
      id: "experiences-immersives",
      slug: "experiences-immersives",
      title: "Quand choisir VR, AR ou walkthrough cinématique ?",
      category: "Immersion",
      published: "Jul 2024",
      readTime: "7 min",
      excerpt:
        "Sélectionner le bon format immersif pour aligner les parties prenantes et accélérer la prise de décision.",
      href: "/blog/experiences-immersives",
      image: galleryImages[8],
    },
    {
      id: "automatisation-pipeline",
      slug: "automatisation-pipeline",
      title: "Automatiser sans sacrifier le craft",
      category: "Workflow",
      published: "Mai 2024",
      readTime: "6 min",
      excerpt:
        "Les scripts et outils que nous utilisons pour respecter les délais tout en préservant un haut niveau de finition.",
      href: "/blog/automatisation-pipeline",
      image: galleryImages[6],
    },
  ],
  en: [
    {
      id: "lighting-storytelling",
      slug: "lighting-storytelling",
      title: "Lighting moods that sell the story",
      category: "Process",
      published: "Nov 2024",
      readTime: "6 min",
      excerpt:
        "Our lighting workflow balances physically based accuracy with cinematic cues to guide emotion.",
      href: "/blog/lighting-storytelling",
      image: galleryImages[0],
    },
    {
      id: "material-alchemy",
      slug: "material-alchemy",
      title: "Material alchemy for believable surfaces",
      category: "Materials",
      published: "Sep 2024",
      readTime: "5 min",
      excerpt:
        "Material studies and digital craftsmanship that convey texture, weight, and realism in every render.",
      href: "/blog/material-alchemy",
      image: galleryImages[1],
    },
    {
      id: "immersive-choices",
      slug: "immersive-choices",
      title: "Choosing between VR, AR, and cinematic walkthroughs",
      category: "Immersion",
      published: "Jul 2024",
      readTime: "7 min",
      excerpt:
        "How we decide which immersive format aligns stakeholders around complex projects.",
      href: "/blog/immersive-choices",
      image: galleryImages[8],
    },
    {
      id: "pipeline-automation",
      slug: "pipeline-automation",
      title: "Pipeline automation without losing craft",
      category: "Workflow",
      published: "May 2024",
      readTime: "6 min",
      excerpt:
        "Automations we rely on to keep large visualization projects on schedule while preserving detail.",
      href: "/blog/pipeline-automation",
      image: galleryImages[6],
    },
  ],
};

const blogPostDatabase: Record<Locale, Record<string, BlogPostContent>> = {
  fr: {
    "ambiances-lumineuses": {
      slug: "ambiances-lumineuses",
      title: "Composer des ambiances lumineuses qui racontent l'espace",
      intro:
        "Tour d'horizon de notre approche pour sculpter la lumière, renforcer la narration architecturale et guider le regard du spectateur.",
      category: "Processus",
      published: "Nov 2024",
      readTime: "6 min",
      heroImage: galleryImages[0],
      sections: [
        {
          id: "intention",
          heading: "Clarifier l'intention narrative",
          body:
            "Chaque projet démarre par une conversation approfondie avec l'équipe design : quels moments clés voulons-nous révéler, quelles émotions doivent primer, quelle temporalité sert le mieux le récit ? Cette intention devient notre boussole pour calibrer intensités, contrastes et directions de lumière.",
        },
        {
          id: "workflow",
          heading: "Un workflow lumière itératif",
          body:
            "Nous croisons simulations physiques et tests stylistiques rapides. Les premiers passes sont produits en light rigs simplifiés, puis affinés via des itérations ciblées sur les matériaux critiques. Nous validons chaque jalon lors de revues cross-disciplinaires mêlant art direction et contraintes techniques.",
        },
        {
          id: "production",
          heading: "Production finale & post-production",
          body:
            "Une fois la mise en lumière verrouillée, nous passons à la phase de rendu haute résolution. Les passes dédiées (volumétrie, spéculaires, AOV créatifs) alimentent une post-production subtile pour préserver la cohérence colorimétrique et dynamiser les points focaux sans dénaturer le projet.",
        },
      ],
      pullQuote: {
        text: "Une lumière crédible se juge autant à la cohérence des ombres qu'à la façon dont elle révèle la matière.",
        attribution: "Salma, Lead Lighting Artist",
      },
      conclusionCta: {
        label: "Co-construire votre direction lumière",
        href: "/contact",
      },
    },
    "matiere-et-sensation": {
      slug: "matiere-et-sensation",
      title: "Matière & sensation : donner du poids à vos matériaux",
      intro:
        "Nos meilleures pratiques pour capter textures, imperfections et micro-reflets qui donnent du réalisme aux surfaces architecturales.",
      category: "Matériaux",
      published: "Sep 2024",
      readTime: "5 min",
      heroImage: galleryImages[1],
      sections: [
        {
          id: "reference",
          heading: "Constituer une bibliothèque de références",
          body:
            "Nous documentons systématiquement les matériaux via scans, macrophotographies et moodboards contextualisés. Cette base alimente nos shaders propriétaires et accélère la validation client en rendant tangible chaque choix de finition.",
        },
        {
          id: "shader",
          heading: "Construire des shaders sensibles",
          body:
            "Chaque matériau est pensé en couches : base color, roughness, micro-normal map, imperfections procédurales. Nous ajoutons des contrôles paramétriques pour ajuster rapidement la sensation de poids, d'usure ou de fraîcheur selon le storytelling.",
        },
        {
          id: "qa",
          heading: "Qualité & cohérence sur la série",
          body:
            "Une grille de contrôle valide la cohérence des matériaux sur la série d'images : cohésion des speculars, alignement chromatique, lisibilité des détails dans différentes conditions de lumière.",
        },
      ],
      pullQuote: {
        text: "Une matière réussie déclenche un réflexe : on devine immédiatement comment elle réagira au toucher.",
        attribution: "Youssef, Material Lead",
      },
      conclusionCta: {
        label: "Parler R&D matériaux",
        href: "/contact",
      },
    },
    "experiences-immersives": {
      slug: "experiences-immersives",
      title: "Quand choisir VR, AR ou walkthrough cinématique ?",
      intro:
        "Guide rapide pour sélectionner le bon format immersif en fonction des audiences, timelines et indicateurs de performance.",
      category: "Immersion",
      published: "Jul 2024",
      readTime: "7 min",
      heroImage: galleryImages[8],
      sections: [
        {
          id: "mapping",
          heading: "Cartographier les besoins des parties prenantes",
          body:
            "Nous analysons qui doit se projeter, à quel moment et via quel dispositif : investisseurs, équipes internes, public final. Cette lecture conditionne le niveau d'interactivité requis et le canal de diffusion privilégié.",
        },
        {
          id: "formats",
          heading: "Choisir le format adapté",
          body:
            "VR room-scale pour l'immersion totale, AR pour l'activation marketing in situ, walkthrough cinématique pour un déroulé contrôlé : nous comparons chaque option selon le budget, la logistique et les attentes émotionnelles.",
        },
        {
          id: "deploiement",
          heading: "Déployer sans friction",
          body:
            "Tests techniques, documentation utilisateur, accompagnement lors des présentations : un protocole précis garantit que l'expérience immersive reste fluide et performante le jour J.",
        },
      ],
      pullQuote: {
        text: "Le bon format immersif est celui qui sert le message avant de servir la technologie.",
        attribution: "Camille, Immersive Producer",
      },
      conclusionCta: {
        label: "Imaginer votre dispositif immersif",
        href: "/contact",
      },
    },
    "automatisation-pipeline": {
      slug: "automatisation-pipeline",
      title: "Automatiser sans sacrifier le craft",
      intro:
        "Comment nous gagnons du temps sur les tâches répétitives tout en maintenant un contrôle artistique serré.",
      category: "Workflow",
      published: "Mai 2024",
      readTime: "6 min",
      heroImage: galleryImages[6],
      sections: [
        {
          id: "diagnostic",
          heading: "Identifier les points de friction",
          body:
            "Le diagnostic pipeline cartographie chaque étape de production. Nous priorisons ensuite les automatisations qui libèrent du temps créatif sans complexifier les outils du quotidien.",
        },
        {
          id: "outillage",
          heading: "Scripts & outils maison",
          body:
            "Naming conventions automatiques, gestion des passes de rendu, synchronisation des asset libraries : nos scripts internes permettent d'éviter les erreurs humaines récurrentes.",
        },
        {
          id: "governance",
          heading: "Gouvernance et formation",
          body:
            "Chaque automatisation est documentée, testée et intégrée dans des sessions de formation rapide pour l'équipe. Objectif : garantir l'adoption sans transformer la courbe d'apprentissage.",
        },
      ],
      pullQuote: {
        text: "Automatiser n'a de sens que si l'on conserve le contrôle sur l'intention artistique.",
        attribution: "Nadia, Pipeline TD",
      },
      conclusionCta: {
        label: "Optimiser votre pipeline",
        href: "/contact",
      },
    },
  },
  en: {
    "lighting-storytelling": {
      slug: "lighting-storytelling",
      title: "Lighting moods that sell the story",
      intro:
        "A look at how we sculpt light to heighten narrative beats, guide the eye, and support the architectural intent.",
      category: "Process",
      published: "Nov 2024",
      readTime: "6 min",
      heroImage: galleryImages[0],
      sections: [
        {
          id: "intent",
          heading: "Start with story intent",
          body:
            "We begin by aligning with the design team on emotional targets, key sequences, and the pacing of the reveal. Those cues inform key light direction, value ranges, and where we want contrast to peak.",
        },
        {
          id: "iteration",
          heading: "Iterative lighting workflow",
          body:
            "Physical simulations provide a baseline; stylised explorations reveal opportunities. Early passes run on lightweight rigs and evolve through focused iterations on hero materials and focal zones.",
        },
        {
          id: "finishing",
          heading: "Final render & grading",
          body:
            "With approvals locked, we render at full resolution using dedicated AOVs for atmosphere, specular control, and creative masks. Subtle grading keeps colour integrity while boosting the dramatic rhythm.",
        },
      ],
      pullQuote: {
        text: "Convincing light is the bridge between believable space and emotional response.",
        attribution: "Salma, Lead Lighting Artist",
      },
      conclusionCta: {
        label: "Chat about lighting direction",
        href: "/contact",
      },
    },
    "material-alchemy": {
      slug: "material-alchemy",
      title: "Material alchemy for believable surfaces",
      intro:
        "How our material R&D team replicates tactile qualities and gives each surface its own story.",
      category: "Materials",
      published: "Sep 2024",
      readTime: "5 min",
      heroImage: galleryImages[1],
      sections: [
        {
          id: "reference",
          heading: "Obsess over references",
          body:
            "We collect scans, on-site photography, and context boards. That library feeds proprietary shader templates and helps stakeholders validate finish selections earlier.",
        },
        {
          id: "layering",
          heading: "Layered shader construction",
          body:
            "Base colour, micro-roughness, procedural detail, and curated imperfections combine to produce a sense of weight. Parametric controls let us dial variation per scene without rebuilding assets.",
        },
        {
          id: "quality",
          heading: "Quality control loops",
          body:
            "A review matrix checks consistency across the set: specular behaviour, chromatic harmony, and readability in multiple lighting conditions.",
        },
      ],
      pullQuote: {
        text: "If you can imagine touching it, the material work is doing its job.",
        attribution: "Youssef, Material Lead",
      },
      conclusionCta: {
        label: "Discuss material R&D",
        href: "/contact",
      },
    },
    "immersive-choices": {
      slug: "immersive-choices",
      title: "Choosing between VR, AR, and cinematic walkthroughs",
      intro:
        "A quick-decisions framework to match immersive formats with stakeholder needs, budgets, and rollout timing.",
      category: "Immersion",
      published: "Jul 2024",
      readTime: "7 min",
      heroImage: galleryImages[8],
      sections: [
        {
          id: "stakeholders",
          heading: "Map stakeholder goals",
          body:
            "We identify who needs to understand the project, in which context, and through which device. That map shapes the level of interactivity and tech requirements.",
        },
        {
          id: "selection",
          heading: "Match format to outcome",
          body:
            "Room-scale VR for full immersion, AR for on-site activation, cinematic walkthroughs for tightly controlled stories: pros and cons are weighed against KPIs and logistics.",
        },
        {
          id: "rollout",
          heading: "Deliver a frictionless rollout",
          body:
            "Technical rehearsals, user guides, and live support ensure the experience performs flawlessly during pitches or events.",
        },
      ],
      pullQuote: {
        text: "Technology should disappear behind the story you want people to remember.",
        attribution: "Camille, Immersive Producer",
      },
      conclusionCta: {
        label: "Design your immersive launch",
        href: "/contact",
      },
    },
    "pipeline-automation": {
      slug: "pipeline-automation",
      title: "Pipeline automation without losing craft",
      intro:
        "Our approach to scripting repetitive steps while preserving creative control and flexibility.",
      category: "Workflow",
      published: "May 2024",
      readTime: "6 min",
      heroImage: galleryImages[6],
      sections: [
        {
          id: "audit",
          heading: "Audit the production flow",
          body:
            "We map tasks across teams to spot bottlenecks and manual chores. Only the automations that free creative time and reduce risk make the cut.",
        },
        {
          id: "tooling",
          heading: "Build pragmatic tooling",
          body:
            "Naming conventions, asset syncing, render management, and reporting scripts remove the repetitive work that leads to errors under pressure.",
        },
        {
          id: "adoption",
          heading: "Ensure adoption",
          body:
            "Documentation, snackable training sessions, and feedback loops keep tools useful and trusted by the team.",
        },
      ],
      pullQuote: {
        text: "Automation should support the art, not replace the artist.",
        attribution: "Nadia, Pipeline TD",
      },
      conclusionCta: {
        label: "Talk pipeline with us",
        href: "/contact",
      },
    },
  },
};

const blogPageDatabase: Record<Locale, BlogPageContent> = {
  fr: {
    hero: {
      eyebrow: "Journal",
      title: "Journal & insights",
      subtitle:
        "Plongée dans nos méthodes, nos outils et nos inspirations pour créer des expériences visuelles percutantes.",
      cta: {
        label: "S'abonner",
        href: "/blog",
      },
      secondaryCta: {
        label: "Planifier un échange",
        href: "/contact",
      },
    },
    articles: {
      title: "Journal",
      intro:
        "Articles, études de cas et retours d'expérience sur la visualisation architecturale, la narration et les workflows 3D.",
      articles: blogArticlesDatabase.fr,
      ctaLabel: "Voir tous les articles",
      ctaHref: "/blog",
      articleCtaLabel: "Lire l'article",
    },
    faqs: {
      title: "Questions fréquentes",
      items: [
        {
          id: "rythme",
          question: "À quelle fréquence publiez-vous de nouveaux articles ?",
          answer:
            "Deux publications par mois en moyenne, souvent accompagnées de ressources téléchargeables ou d'outils internes.",
        },
        {
          id: "accès",
          question: "Puis-je consulter les livrables cités dans le journal ?",
          answer:
            "Chaque article pointe vers une étude de cas ou une galerie dédiée. Les versions complètes sont disponibles sur simple demande.",
        },
        {
          id: "newsletter",
          question: "Existe-t-il une newsletter Parallax Stud.io ?",
          answer:
            "Oui, nous envoyons un condensé trimestriel avec nos meilleures lectures, benchmarks technologiques et invitations aux sessions live.",
        },
        {
          id: "participation",
          question: "Puis-je proposer un sujet ou contribuer ?",
          answer:
            "Nous accueillons les contributions d'architectes, de designers et de partenaires. Écrivez-nous avec votre angle éditorial.",
        },
      ],
    },
    finalCta: {
      title: "Envie d'approfondir ces sujets avec nous ?",
      subtitle: "Continuons la discussion",
      quote:
        "Nous adorons échanger avec des créatifs, des architectes et des équipes marketing qui cherchent à repousser les limites.",
      primaryCta: {
        label: "Planifier un échange",
        href: "/contact",
      },
      secondaryCta: {
        label: "S'abonner au journal",
        href: "/blog",
      },
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Journal",
      title: "Journal & insights",
      subtitle:
        "Deep dives into our methods, tools, and inspirations for creating persuasive visual experiences.",
      cta: {
        label: "Subscribe",
        href: "/blog",
      },
      secondaryCta: {
        label: "Schedule a chat",
        href: "/contact",
      },
    },
    articles: {
      title: "Journal",
      intro:
        "Field notes, case studies, and behind-the-scenes looks at visualization, storytelling, and 3D workflows.",
      articles: blogArticlesDatabase.en,
      ctaLabel: "View all posts",
      ctaHref: "/blog",
      articleCtaLabel: "Read story",
    },
    faqs: {
      title: "FAQ",
      items: [
        {
          id: "cadence",
          question: "How often do you publish new stories?",
          answer:
            "Expect two posts per month, often bundled with downloadable assets or workflow templates.",
        },
        {
          id: "access",
          question: "Can I access the deliverables mentioned?",
          answer:
            "Each story links to a related case study or gallery. Full decks are available on request when NDAs allow.",
        },
        {
          id: "newsletter",
          question: "Is there a Parallax Stud.io newsletter?",
          answer:
            "We share a quarterly digest covering research highlights, pipeline updates, and invitations to private sessions.",
        },
        {
          id: "contributors",
          question: "Do you accept guest contributors?",
          answer:
            "We occasionally co-author with architects, designers, and partner studios. Reach out with your pitch to collaborate.",
        },
      ],
    },
    finalCta: {
      title: "Want to explore these ideas together?",
      subtitle: "Keep the conversation going",
      quote:
        "We love partnering with creatives, architects, and marketing teams who push boundaries.",
      primaryCta: {
        label: "Schedule a chat",
        href: "/contact",
      },
      secondaryCta: {
        label: "Subscribe to the journal",
        href: "/blog",
      },
    },
    footer: mockDatabase.en.footer,
  },
};

const vousEtesPageDatabase: Record<Locale, VousEtesPageContent> = {
  fr: {
    hero: {
      eyebrow: "Pour qui ?",
      title: "Vous êtes",
      subtitle:
        "Découvrez comment Parallax Stud.io peut transformer vos projets selon votre profil",
    },
    categories: [
      {
        id: "architectes",
        title: "Architectes généralistes et d'intérieur",
        description:
          "Vous concevez des projets architecturaux ou d'intérieur et avez besoin de visuels percutants pour convaincre vos clients, remporter des concours ou valoriser votre portfolio.",
        benefits: [
          "Rendus photoréalistes qui subliment vos conceptions",
          "Visualisation de vos espaces intérieurs avant réalisation",
          "Supports de présentation professionnels pour vos concours",
          "Perspectives 3D qui facilitent la validation client",
          "Flexibilité pour tester différentes options esthétiques",
        ],
      },
      {
        id: "urbanistes",
        title: "Urbanistes et paysagistes",
        description:
          "Vous planifiez des aménagements urbains, des espaces publics ou des projets paysagers nécessitant une vision d'ensemble claire et impactante.",
        benefits: [
          "Vues aériennes et perspectives à grande échelle",
          "Intégration contextuelle dans l'environnement existant",
          "Visualisation des flux et de l'animation urbaine",
          "Rendus jour/nuit pour évaluer l'impact lumineux",
          "Communication efficace auprès des collectivités et citoyens",
        ],
      },
      {
        id: "promoteurs",
        title: "Promoteurs immobiliers et sociétés de construction",
        description:
          "Vous développez des programmes immobiliers et cherchez à maximiser l'attractivité commerciale de vos projets pour accélérer les ventes.",
        benefits: [
          "Visuels marketing haute qualité pour brochures et sites web",
          "Visites virtuelles 360° pour vos espaces de vente",
          "Rendus d'appartements témoins avant construction",
          "Animations vidéo pour présenter l'évolution du projet",
          "Outils de pré-commercialisation pour lancer les ventes plus tôt",
        ],
      },
      {
        id: "designers",
        title: "Designers et scénographes",
        description:
          "Vous créez des objets, du mobilier, des stands ou des scénographies et devez présenter vos créations de manière spectaculaire.",
        benefits: [
          "Mise en scène 3D de vos créations dans des environnements réalistes",
          "Rendus produits pour catalogues et e-commerce",
          "Visualisation de stands et installations éphémères",
          "Flexibilité pour tester différentes ambiances et matériaux",
          "Supports visuels professionnels pour vos présentations clients",
        ],
      },
      {
        id: "particuliers",
        title: "Particuliers et porteurs de projets",
        description:
          "Vous avez un projet de construction, rénovation ou aménagement personnel et souhaitez visualiser le résultat avant de vous lancer.",
        benefits: [
          "Visualisation réaliste de votre future maison ou rénovation",
          "Aide à la décision pour les choix esthétiques et matériaux",
          "Communication facilitée avec vos artisans et architectes",
          "Validation de l'agencement et de la décoration",
          "Accompagnement personnalisé pour concrétiser votre vision",
        ],
      },
    ],
    finalCta: {
      title: "Prêt à valoriser votre projet ?",
      subtitle: "Quel que soit votre profil, Parallax Stud.io vous accompagne.",
      quote: "Chaque projet mérite une mise en scène exceptionnelle.",
      primaryCta: {
        label: "Démarrer un projet",
        href: "/contact",
      },
      secondaryCta: {
        label: "Voir nos réalisations",
        href: "/gallery",
      },
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Who are you?",
      title: "You are",
      subtitle:
        "Discover how Parallax Stud.io can transform your projects based on your profile",
    },
    categories: [
      {
        id: "architects",
        title: "General and Interior Architects",
        description:
          "You design architectural or interior projects and need impactful visuals to convince your clients, win competitions, or enhance your portfolio.",
        benefits: [
          "Photorealistic renderings that showcase your designs",
          "Visualization of your interior spaces before realization",
          "Professional presentation materials for your competitions",
          "3D perspectives that facilitate client validation",
          "Flexibility to test different aesthetic options",
        ],
      },
      {
        id: "urbanists",
        title: "Urban Planners and Landscape Designers",
        description:
          "You plan urban developments, public spaces, or landscape projects requiring a clear and impactful overall vision.",
        benefits: [
          "Aerial views and large-scale perspectives",
          "Contextual integration into the existing environment",
          "Visualization of flows and urban animation",
          "Day/night renderings to assess lighting impact",
          "Effective communication with local authorities and citizens",
        ],
      },
      {
        id: "developers",
        title: "Real Estate Developers and Construction Companies",
        description:
          "You develop real estate programs and seek to maximize the commercial attractiveness of your projects to accelerate sales.",
        benefits: [
          "High-quality marketing visuals for brochures and websites",
          "360° virtual tours for your sales spaces",
          "Show apartment renderings before construction",
          "Video animations to present project evolution",
          "Pre-marketing tools to launch sales earlier",
        ],
      },
      {
        id: "designers",
        title: "Designers and Set Designers",
        description:
          "You create objects, furniture, stands, or scenographies and need to present your creations spectacularly.",
        benefits: [
          "3D staging of your creations in realistic environments",
          "Product renderings for catalogs and e-commerce",
          "Visualization of stands and ephemeral installations",
          "Flexibility to test different atmospheres and materials",
          "Professional visual supports for your client presentations",
        ],
      },
      {
        id: "individuals",
        title: "Individuals and Project Holders",
        description:
          "You have a construction, renovation, or personal development project and want to visualize the result before starting.",
        benefits: [
          "Realistic visualization of your future home or renovation",
          "Decision support for aesthetic and material choices",
          "Facilitated communication with your craftsmen and architects",
          "Validation of layout and decoration",
          "Personalized support to bring your vision to life",
        ],
      },
    ],
    finalCta: {
      title: "Ready to enhance your project?",
      subtitle: "Whatever your profile, Parallax Stud.io supports you.",
      quote: "Every project deserves an exceptional staging.",
      primaryCta: {
        label: "Start a project",
        href: "/contact",
      },
      secondaryCta: {
        label: "View our achievements",
        href: "/gallery",
      },
    },
    footer: mockDatabase.en.footer,
  },
};

const tarifsPageDatabase: Record<Locale, TarifsPageContent> = {
  fr: {
    hero: {
      eyebrow: "Tarifs",
      title: "Nos Tarifs",
      subtitle: "Transparence et flexibilité : découvrez nos différentes options tarifaires adaptées à vos besoins et votre budget.",
    },
    introduction: {
      title: "Nos Tarifs",
      subtitle: "Transparence et flexibilité : découvrez nos différentes options tarifaires adaptées à vos besoins et votre budget.",
      disclaimer: "Important : Ces prix sont à titre indicatif et sont soumis à des changements qui varient en fonction des types de projets, des informations et documents fournis, des contraintes et besoins.",
    },
    packagesTitle: "Pour une plus grande flexibilité et parce que chacun de vos projets et demandes sont uniques, nous vous proposons trois forfaits types de base.",
    packages: [
      {
        id: "basic",
        name: "Forfait BASIC",
        description: "Idéal pour : Petits projets, tests, présentations simples",
        price: 15000,
        currency: "DH",
        features: [
          "Entre 1 et 5 Rendus Fixes Intérieur/Extérieur",
          "Résolution : 2K à 6K",
          "Post-production réalisée par nos soins",
          "Fichier Source 3D à la demande (supplément)",
          "Livraison : 5-7 jours ouvrés",
        ],
        ctaLabel: "Demander un devis →",
        ctaHref: "/contact",
      },
      {
        id: "silver",
        name: "Forfait SILVER",
        description: "Idéal pour : Projets moyens, promoteurs, architectes",
        price: 20000,
        currency: "DH",
        popular: true,
        features: [
          "Entre 1 et 10 Rendus Fixes Intérieur/Extérieur",
          "Résolution : 2K à 8K",
          "Post-production réalisée par nos soins pour les rendus fixes",
          "1 Minute de Vidéo 2K à 6K avec montage vidéo et audio",
          "Incrustation de logos et textes",
          "Fichier Source 3D à la demande (supplément)",
          "Livraison : 10-14 jours ouvrés",
        ],
        ctaLabel: "Demander un devis →",
        ctaHref: "/contact",
      },
      {
        id: "premium",
        name: "Forfait PREMIUM",
        description: "Idéal pour : Grands projets, campagnes marketing complètes",
        price: 25000,
        currency: "DH",
        features: [
          "Entre 1 et 20 Rendus Fixes Intérieur/Extérieur",
          "Résolution : 2K à 16K",
          "Post-production réalisée par nos soins pour les rendus fixes",
          "5 Rendus 360° panoramiques offerts",
          "2 Minutes de Vidéo 2K-4K avec montage professionnel",
          "Effets spéciaux et transitions",
          "Fichier Source 3D à la demande (supplément)",
          "Livraison : 3-4 semaines",
        ],
        ctaLabel: "Demander un devis →",
        ctaHref: "/contact",
      },
    ],
    pricingFactors: {
      title: "Comment est constitué le prix d'un rendu fixe 3D",
      subtitle: "Facteurs influençant le prix",
      factors: [
        {
          id: "modeling",
          icon: "building",
          title: "La modélisation",
          description: "La modélisation 3D du bâtiment permet de reproduire en 3D tous les détails et caractéristiques du bâtiment : formes, textures, matériaux et dimensions.",
          pricing: [
            { label: "Projet de petite taille (maison individuelle)", price: "5,000 - 8,000 DH" },
            { label: "Projet de taille moyenne", price: "8,000 - 12,000 DH" },
            { label: "Projet de grande taille (immeubles, complexes)", price: "12,000 - 18,000 DH" },
            { label: "Reprise d'une modélisation 3D existante", price: "2,000 - 6,000 DH" },
          ],
        },
        {
          id: "decoration",
          icon: "palette",
          title: "Le choix de la décoration",
          description: "",
          pricing: [
            { label: "Choix parmi notre bibliothèque", price: "Inclus dans le tarif de base" },
            { label: "Achat auprès de banques d'objets 3D", price: "Supplément selon les modèles" },
            { label: "Modélisation sur-mesure de mobilier spécifique", price: "Supplément sur devis" },
          ],
        },
        {
          id: "renders",
          icon: "camera",
          title: "Le nombre de rendus",
          description: "",
          pricing: [
            { label: "Premier rendu d'un espace", price: "Tarif plein" },
            { label: "Rendus supplémentaires du même espace", price: "Tarif dégressif à partir de 2 000 DH" },
          ],
        },
        {
          id: "resolution",
          icon: "frame",
          title: "La résolution",
          description: "",
          pricing: [
            { label: "2K - Format standard web et impression A4", price: "Inclus" },
            { label: "4K - Haute définition", price: "Inclus sur demande" },
            { label: "8K - Ultra haute définition", price: "Inclus sur demande" },
            { label: "16K - Impression grand format", price: "Inclus sur demande" },
          ],
        },
      ],
    },
    pricingTable: {
      title: "Tarifs indicatifs détaillés",
      warning: {
        title: "Note importante",
        message: "Ces prix peuvent varier en fonction de : Types et styles de visualisation, Nombre de vues/rendus nécessaires, Aménagement intérieur (plus de pièces = prix plus élevé), Complexité de conception, Informations et données fournies par le client, Délais souhaités, Résolution finale demandée.",
      },
      rows: [
        {
          category: "Modélisation 3D",
          items: [
            { service: "Création d'une modélisation 3D complète", price: "5,000 - 18,000 DH" },
            { service: "Reprise d'une modélisation 3D existante", price: "2,000 - 6,000 DH" },
          ],
        },
        {
          category: "Rendus 3D Fixes",
          items: [
            { service: "Une vue 3D fixe Intérieure Basique (2K)", price: "À partir de 2,000 DH" },
            { service: "Une vue 3D fixe Extérieure Basique (2K)", price: "À partir de 2,500 DH" },
            { service: "Vue supplémentaire (même espace)", price: "À partir de 1,500 DH" },
          ],
        },
        {
          category: "Animations Vidéo",
          items: [
            { service: "Une minute de vidéo 2K (montage audio/vidéo compris)", price: "À partir de 15,000 DH" },
            { service: "Une minute de vidéo 4K", price: "Sur devis" },
          ],
        },
        {
          category: "Rendus 360°",
          items: [
            { service: "Un rendu panoramique 360°", price: "À partir de 3,500 DH" },
            { service: "Virtual Tour complet (5-10 espaces)", price: "Sur devis" },
          ],
        },
        {
          category: "Expériences VR/AR",
          items: [
            { service: "Réalité virtuelle (projet complet)", price: "Sur devis" },
            { service: "Réalité augmentée", price: "Sur devis" },
          ],
        },
      ],
    },
    videoPricing: {
      title: "Comment est constitué le prix d'une vidéo d'animation 3D",
      subtitle: "Le coût d'une animation 3D est fonction de plusieurs critères",
      factors: [
        { icon: "building", title: "La modélisation", items: ["Nombre et taille des espaces", "Complexité du projet"] },
        { icon: "film", title: "Le type de vidéo", items: ["Intérieure, extérieure ou mixte", "Transitions et scènes"] },
        { icon: "palette", title: "La décoration", items: ["Bibliothèque standard", "Objets 3D supplémentaires"] },
        { icon: "timer", title: "La durée", items: ["Tarif dégressif au-delà de 1 minute", "Plus c'est long, moins c'est cher/min"] },
        { icon: "sparkles", title: "Éléments additionnels", items: ["Personnages animés", "Effets spéciaux", "Bande sonore"] },
      ],
      tiers: [
        { id: "simple", name: "Niveau Simple", description: "Espace intérieur, sans animation de personnages", price: 11000, currency: "DH", priceUnit: "par minute" },
        { id: "classic", name: "Niveau Classique", description: "Espaces de grande envergure", price: 14000, currency: "DH", priceUnit: "par minute" },
        { id: "advanced", name: "Niveau Avancé", description: "Avec personnages animés", price: 17000, currency: "DH", priceUnit: "par minute" },
      ],
      specialOffers: {
        title: "Offres spéciales Parallax Stud.io",
        offers: [
          { id: "interior", title: "Forfait Intérieur", features: ["4 espaces en intérieur", "1 minute d'animation"], price: 12000, currency: "DH", priceLabel: "À partir de" },
          { id: "complete", title: "Forfait Complet", features: ["1 façade extérieure", "4 espaces intérieurs", "1 minute d'animation"], price: 15000, currency: "DH", priceLabel: "À partir de" },
        ],
      },
    },
    process: {
      title: "Le processus de tarification",
      commitment: "Notre engagement",
      content: [
        "Tous ces paramètres entrent en ligne de compte dans le calcul du devis. La création de vidéo d'animation 3D ou de rendus fixes demande du temps de travail. Lorsque le client ne sait pas avec exactitude ce qu'il désire, il faut plusieurs corrections lors des différentes étapes de production, ce qui peut alourdir le prix.",
        "Mais lorsque l'on voit le résultat final, le client est bien souvent très satisfait et sait qu'il rentrera dans ses frais.",
      ],
      tip: "En fonction de vos besoins, nous pourrons ajuster nos prix afin de vous offrir des rendus exceptionnels et sur mesure.",
    },
    faq: {
      title: "Questions fréquentes sur les tarifs",
      questions: [
        { question: "Proposez-vous des réductions pour les commandes groupées ?", answer: "Oui ! Nous proposons des remises basées sur le volume pour les commandes groupées. Plus vous commandez de rendus d'un même projet, plus le tarif unitaire diminue." },
        { question: "Puis-je obtenir un devis gratuit ?", answer: "Absolument ! Nous proposons des devis gratuits et détaillés pour tous les projets. Remplissez simplement notre formulaire de contact avec les détails de votre projet." },
        { question: "Les révisions sont-elles incluses dans le prix ?", answer: "Oui, nous incluons jusqu'à 3 tours de révisions dans nos tarifs. Au-delà, des frais supplémentaires peuvent s'appliquer selon l'ampleur des modifications." },
        { question: "Proposez-vous des forfaits pour les partenariats à long terme ?", answer: "Oui, nous proposons des forfaits tarifaires personnalisés et des conditions préférentielles pour les partenariats à long terme. Contactez-nous pour en discuter." },
        { question: "Quels sont les délais de paiement ?", answer: "• Acompte initial : 50% à la signature du contrat\n• Paiement intermédiaire : 30% à la validation préliminaire\n• Solde final : 20% avant la livraison des fichiers finaux" },
        { question: "Acceptez-vous les paiements en plusieurs fois ?", answer: "Oui, pour les projets de grande envergure, nous pouvons mettre en place un échéancier de paiement adapté." },
      ],
    },
    finalCta: {
      title: "Prêt à obtenir un devis personnalisé ?",
      subtitle: "Partagez-nous les détails de votre projet et recevez une estimation détaillée sous 48h",
      quote: "La qualité a un prix, l'excellence n'a pas de limite.",
      primaryCta: { label: "Demander un devis", href: "/contact" },
      secondaryCta: { label: "Voir nos services", href: "/services" },
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Pricing",
      title: "Our Pricing",
      subtitle: "Transparency and flexibility: discover our various pricing options tailored to your needs and budget.",
    },
    introduction: {
      title: "Our Pricing",
      subtitle: "Transparency and flexibility: discover our various pricing options tailored to your needs and budget.",
      disclaimer: "Important: These prices are indicative and subject to change based on project types, information and documents provided, constraints and requirements.",
    },
    packagesTitle: "For greater flexibility and because each of your projects and requests are unique, we offer three basic package types.",
    packages: [
      {
        id: "basic",
        name: "BASIC Package",
        description: "Ideal for: Small projects, tests, simple presentations",
        price: 15000,
        currency: "DH",
        features: [
          "Between 1 and 5 Interior/Exterior Fixed Renders",
          "Resolution: 2K to 6K",
          "Post-production by our team",
          "3D Source File on demand (additional)",
          "Delivery: 5-7 business days",
        ],
        ctaLabel: "Request a quote →",
        ctaHref: "/contact",
      },
      {
        id: "silver",
        name: "SILVER Package",
        description: "Ideal for: Medium projects, developers, architects",
        price: 20000,
        currency: "DH",
        popular: true,
        features: [
          "Between 1 and 10 Interior/Exterior Fixed Renders",
          "Resolution: 2K to 8K",
          "Post-production by our team for fixed renders",
          "1 Minute of Video 2K to 6K with video and audio editing",
          "Logo and text overlays",
          "3D Source File on demand (additional)",
          "Delivery: 10-14 business days",
        ],
        ctaLabel: "Request a quote →",
        ctaHref: "/contact",
      },
      {
        id: "premium",
        name: "PREMIUM Package",
        description: "Ideal for: Large projects, complete marketing campaigns",
        price: 25000,
        currency: "DH",
        features: [
          "Between 1 and 20 Interior/Exterior Fixed Renders",
          "Resolution: 2K to 16K",
          "Post-production by our team for fixed renders",
          "5 Free 360° panoramic renders",
          "2 Minutes of Video 2K-4K with professional editing",
          "Special effects and transitions",
          "3D Source File on demand (additional)",
          "Delivery: 3-4 weeks",
        ],
        ctaLabel: "Request a quote →",
        ctaHref: "/contact",
      },
    ],
    pricingFactors: {
      title: "How 3D Fixed Render Pricing is Calculated",
      subtitle: "Pricing Factors",
      factors: [
        {
          id: "modeling",
          icon: "building",
          title: "3D Modeling",
          description: "3D building modeling reproduces all building details and characteristics in 3D: shapes, textures, materials, and dimensions.",
          pricing: [
            { label: "Small project (individual house)", price: "5,000 - 8,000 DH" },
            { label: "Medium-sized project", price: "8,000 - 12,000 DH" },
            { label: "Large project (buildings, complexes)", price: "12,000 - 18,000 DH" },
            { label: "Reusing existing 3D model", price: "2,000 - 6,000 DH" },
          ],
        },
        {
          id: "decoration",
          icon: "palette",
          title: "Interior Design Choice",
          description: "",
          pricing: [
            { label: "Choice from our library", price: "Included in base price" },
            { label: "Purchase from 3D object banks", price: "Additional cost depending on models" },
            { label: "Custom furniture modeling", price: "Additional cost upon quote" },
          ],
        },
        {
          id: "renders",
          icon: "camera",
          title: "Number of Renders",
          description: "",
          pricing: [
            { label: "First render of a space", price: "Full price" },
            { label: "Additional renders of the same space", price: "Discounted rate from 2,000 DH" },
          ],
        },
        {
          id: "resolution",
          icon: "frame",
          title: "Resolution",
          description: "",
          pricing: [
            { label: "2K - Standard web format and A4 printing", price: "Included" },
            { label: "4K - High definition", price: "Included upon request" },
            { label: "8K - Ultra high definition", price: "Included upon request" },
            { label: "16K - Large format printing", price: "Included upon request" },
          ],
        },
      ],
    },
    pricingTable: {
      title: "Detailed Indicative Pricing",
      warning: {
        title: "Important Note",
        message: "These prices may vary depending on: Visualization types and styles, Number of views/renders required, Interior layout (more rooms = higher price), Design complexity, Information and data provided by client, Desired deadlines, Final resolution requested.",
      },
      rows: [
        {
          category: "3D Modeling",
          items: [
            { service: "Complete 3D modeling creation", price: "5,000 - 18,000 DH" },
            { service: "Reusing existing 3D model", price: "2,000 - 6,000 DH" },
          ],
        },
        {
          category: "3D Fixed Renders",
          items: [
            { service: "One interior basic 3D fixed view (2K)", price: "From 2,000 DH" },
            { service: "One exterior basic 3D fixed view (2K)", price: "From 2,500 DH" },
            { service: "Additional view (same space)", price: "From 1,500 DH" },
          ],
        },
        {
          category: "Video Animations",
          items: [
            { service: "One minute of 2K video (audio/video editing included)", price: "From 15,000 DH" },
            { service: "One minute of 4K video", price: "Upon quote" },
          ],
        },
        {
          category: "360° Renders",
          items: [
            { service: "One 360° panoramic render", price: "From 3,500 DH" },
            { service: "Complete Virtual Tour (5-10 spaces)", price: "Upon quote" },
          ],
        },
        {
          category: "VR/AR Experiences",
          items: [
            { service: "Virtual Reality (complete project)", price: "Upon quote" },
            { service: "Augmented Reality", price: "Upon quote" },
          ],
        },
      ],
    },
    videoPricing: {
      title: "How 3D Animation Video Pricing is Calculated",
      subtitle: "The cost of a 3D animation depends on several criteria",
      factors: [
        { icon: "building", title: "Modeling", items: ["Number and size of spaces", "Project complexity"] },
        { icon: "film", title: "Video Type", items: ["Interior, exterior or mixed", "Transitions and scenes"] },
        { icon: "palette", title: "Interior Design", items: ["Standard library", "Additional 3D objects"] },
        { icon: "timer", title: "Duration", items: ["Discounted rate beyond 1 minute", "Longer = cheaper per minute"] },
        { icon: "sparkles", title: "Additional Elements", items: ["Animated characters", "Special effects", "Soundtrack"] },
      ],
      tiers: [
        { id: "simple", name: "Simple Level", description: "Interior space, no character animation", price: 11000, currency: "DH", priceUnit: "per minute" },
        { id: "classic", name: "Classic Level", description: "Large-scale spaces", price: 14000, currency: "DH", priceUnit: "per minute" },
        { id: "advanced", name: "Advanced Level", description: "With animated characters", price: 17000, currency: "DH", priceUnit: "per minute" },
      ],
      specialOffers: {
        title: "Special Parallax Stud.io Offers",
        offers: [
          { id: "interior", title: "Interior Package", features: ["4 interior spaces", "1 minute of animation"], price: 12000, currency: "DH", priceLabel: "From" },
          { id: "complete", title: "Complete Package", features: ["1 exterior facade", "4 interior spaces", "1 minute of animation"], price: 15000, currency: "DH", priceLabel: "From" },
        ],
      },
    },
    process: {
      title: "The Pricing Process",
      commitment: "Our Commitment",
      content: [
        "All these parameters are taken into account when calculating the quote. Creating 3D animation videos or fixed renders requires work time. When the client doesn't know exactly what they want, several corrections are needed during different production stages, which can increase the price.",
        "But when we see the final result, the client is often very satisfied and knows they will get their money's worth.",
      ],
      tip: "Based on your needs, we can adjust our prices to offer you exceptional and custom renders.",
    },
    faq: {
      title: "Pricing FAQ",
      questions: [
        { question: "Do you offer discounts for bulk orders?", answer: "Yes! We offer volume-based discounts for bulk orders. The more renders you order from the same project, the lower the unit price." },
        { question: "Can I get a free quote?", answer: "Absolutely! We offer free and detailed quotes for all projects. Simply fill out our contact form with your project details." },
        { question: "Are revisions included in the price?", answer: "Yes, we include up to 3 revision rounds in our pricing. Beyond that, additional fees may apply depending on the extent of changes." },
        { question: "Do you offer packages for long-term partnerships?", answer: "Yes, we offer customized pricing packages and preferential terms for long-term partnerships. Contact us to discuss." },
        { question: "What are the payment terms?", answer: "• Initial deposit: 50% upon contract signing\n• Intermediate payment: 30% upon preliminary validation\n• Final balance: 20% before delivery of final files" },
        { question: "Do you accept installment payments?", answer: "Yes, for large-scale projects, we can set up an adapted payment schedule." },
      ],
    },
    finalCta: {
      title: "Ready to get a custom quote?",
      subtitle: "Share your project details and receive a detailed estimate within 48 hours",
      quote: "Quality has a price, excellence has no limit.",
      primaryCta: { label: "Request a quote", href: "/contact" },
      secondaryCta: { label: "View our services", href: "/services" },
    },
    footer: mockDatabase.en.footer,
  },
};

const contactPageDatabase: Record<Locale, ContactPageContent> = {
  fr: {
    hero: {
      eyebrow: "Contact",
      title: "Contactez-nous",
      subtitle:
        "Vous avez un projet en perspective ? Parlons-en ! Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans la concrétisation de vos idées.",
    },
    intro: {
      title: "Ce dont nous avons besoin pour démarrer",
      body:
        "Partagez quelques éléments clés pour que nous puissions cadrer la production au plus juste. Si vous n'avez pas encore toutes les infos, nous construirons le brief ensemble.",
      bullets: [
        "Description du projet et des parties prenantes",
        "Livrables souhaités (images, films, expériences)",
        "Planning cible et jalons clés",
        "Ressources disponibles (plans, maquettes, moodboard)",
      ],
    },
    channelsHeading: {
      eyebrow: "Contact",
      title: "Choisissez votre canal préféré",
    },
    channels: [
      {
        id: "email",
        label: "Email studio",
        value: "hello@parallax-stud.io",
        href: "mailto:hello@parallax-stud.io",
        description: "Réponse sous 24h ouvrées avec une proposition de cadrage.",
      },
      {
        id: "phone",
        label: "Téléphone",
        value: "+212 6 12 34 56 78",
        href: "tel:+212612345678",
        description: "Casablanca & Paris — 9h à 18h CET.",
      },
      {
        id: "cal",
        label: "Call de découverte",
        value: "Réserver un créneau",
        href: "https://cal.com/parallaxstudio/30min",
        description: "30 minutes pour explorer votre brief et vos objectifs.",
      },
      {
        id: "rfp",
        label: "Partager un RFP",
        value: "uploader vos documents",
        href: "https://dropbox.com/request/parallax-rfp",
        description: "Nous étudions votre dossier et revenons avec une roadmap.",
      },
    ],
    officesHeading: {
      eyebrow: "Studios",
      title: "Nos hubs créatifs",
    },
    offices: [
      {
        id: "casa",
        city: "Casablanca",
        country: "Maroc",
        address: ["Quartier Gauthier", "37 Boulevard Moulay Youssef"],
        timezone: "UTC+1",
        mapHref: "https://maps.google.com/?q=Casablanca+Quartier+Gauthier",
        image: {
          id: "office-casa",
          src: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1400&q=80",
          alt: "Bureau Parallax Stud.io à Casablanca",
        },
      },
      {
        id: "paris",
        city: "Paris",
        country: "France",
        address: ["10 Rue du Faubourg Saint-Denis", "75010 Paris"],
        timezone: "UTC+1",
        mapHref: "https://maps.google.com/?q=10+Rue+du+Faubourg+Saint-Denis+Paris",
        image: {
          id: "office-paris",
          src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
          alt: "Bureau Parallax Stud.io à Paris",
        },
      },
    ],
    availability: {
      title: "Disponibilités & délais",
      subtitle: "Onboarding de nouveaux projets toutes les deux semaines.",
      slots: [
        "Slot de production ouvert dès le 3 février 2025",
        "Planning rush possible sous 5 jours ouvrés selon complexité",
        "Réponse à vos appels d'offres sous 3 jours ouvrés",
      ],
      note:
        "Pour un démarrage rapide, compilez les plans, moodboards et planning cible. Nous signons NDA sur demande.",
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Contact",
      title: "Contact Us",
      subtitle:
        "Have a project in mind? Let's talk about it! Our team is at your disposal to answer all your questions and support you in bringing your ideas to life.",
    },
    intro: {
      title: "What helps us get started",
      body:
        "The more context you provide, the faster we can frame production. Missing pieces? We’re happy to build the brief together.",
      bullets: [
        "Project overview and stakeholders",
        "Desired outputs (stills, films, immersive media)",
        "Target milestones and decision checkpoints",
        "Existing resources (plans, models, moodboards)",
      ],
    },
    channelsHeading: {
      eyebrow: "Contact",
      title: "Pick the channel that suits you",
    },
    channels: [
      {
        id: "email",
        label: "Studio email",
        value: "hello@parallax-stud.io",
        href: "mailto:hello@parallax-stud.io",
        description: "Replies within 24h with framing recommendations.",
      },
      {
        id: "phone",
        label: "Phone",
        value: "+33 7 12 34 56 78",
        href: "tel:+33712345678",
        description: "Paris & Casablanca — 9am to 6pm CET.",
      },
      {
        id: "cal",
        label: "Discovery call",
        value: "Pick a timeslot",
        href: "https://cal.com/parallaxstudio/30min",
        description: "30 minutes to align on objectives, scope, and timing.",
      },
      {
        id: "rfp",
        label: "Share an RFP",
        value: "Upload your files",
        href: "https://dropbox.com/request/parallax-rfp",
        description: "We review and get back with a structured roadmap.",
      },
    ],
    officesHeading: {
      eyebrow: "Studios",
      title: "Our creative hubs",
    },
    offices: [
      {
        id: "casa",
        city: "Casablanca",
        country: "Morocco",
        address: ["Quartier Gauthier", "37 Boulevard Moulay Youssef"],
        timezone: "UTC+1",
        mapHref: "https://maps.google.com/?q=Casablanca+Quartier+Gauthier",
        image: {
          id: "office-casa",
          src: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1400&q=80",
          alt: "Parallax Stud.io Casablanca office",
        },
      },
      {
        id: "paris",
        city: "Paris",
        country: "France",
        address: ["10 Rue du Faubourg Saint-Denis", "75010 Paris"],
        timezone: "UTC+1",
        mapHref: "https://maps.google.com/?q=10+Rue+du+Faubourg+Saint-Denis+Paris",
        image: {
          id: "office-paris",
          src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
          alt: "Parallax Stud.io Paris office",
        },
      },
    ],
    availability: {
      title: "Availability & lead times",
      subtitle: "New productions onboarding every other week.",
      slots: [
        "Next production slot opens February 3rd, 2025",
        "Rush timelines possible within 5 business days depending on scope",
        "RFP responses delivered within 3 business days",
      ],
      note:
        "For fast starts, gather plans, reference imagery, and your target schedule. NDAs are signed on request.",
    },
    footer: mockDatabase.en.footer,
  },
};

export async function fetchHomepageContent(locale: string): Promise<HomepageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;

  // Simulate async request to a headless WordPress endpoint
  await new Promise((resolve) => setTimeout(resolve, 50));

  return mockDatabase[safeLocale];
}

export async function fetchGalleryPageContent(locale: string): Promise<GalleryPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  return galleryPageDatabase[safeLocale];
}

export async function fetchCasesPageContent(locale: string): Promise<CasesPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  return casesPageDatabase[safeLocale];
}

export async function fetchStudioPageContent(locale: string): Promise<StudioPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  return studioPageDatabase[safeLocale];
}

export async function fetchBlogPageContent(locale: string): Promise<BlogPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  return blogPageDatabase[safeLocale];
}

export async function fetchVousEtesPageContent(locale: string): Promise<VousEtesPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  return vousEtesPageDatabase[safeLocale];
}

export async function fetchTarifsPageContent(locale: string): Promise<TarifsPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  return tarifsPageDatabase[safeLocale];
}

export async function fetchBlogPostContent(locale: string, slug: string): Promise<BlogPostContent | null> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  const post = blogPostDatabase[safeLocale][slug];
  return post ?? null;
}

export async function fetchContactPageContent(locale: string): Promise<ContactPageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  await new Promise((resolve) => setTimeout(resolve, 40));
  return contactPageDatabase[safeLocale];
}

export function getFallbackFooter(locale: string): FooterContent {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;
  return mockDatabase[safeLocale].footer;
}
