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
};

export type ClientsSection = {
  title: string;
  intro: string;
  items: ClientType[];
  ctaLabel: string;
  ctaHref: string;
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

export type HomepageContent = {
  hero: HeroContent;
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
        "Agence franco-marocaine de visualisation architecturale 3D. Nous transformons vos idées en images qui marquent les esprits.",
      contact: [
        {
          label: "Email",
          value: "hello@parallax-stud.io",
          href: "mailto:hello@parallax-stud.io",
        },
        {
          label: "Téléphone",
          value: "+212 6 12 34 56 78",
          href: "tel:+212612345678",
        },
        {
          label: "Adresse",
          value: "Casablanca • Paris",
          href: "https://maps.google.com/?q=Casablanca+Paris",
        },
      ],
      linkGroups: [
        {
          id: "studio",
          title: "Studio",
          links: [
            { label: "À propos", href: "/studio" },
            { label: "Méthodologie", href: "/process" },
            { label: "Équipe", href: "/team" },
          ],
        },
        {
          id: "services",
          title: "Services",
          links: [
            { label: "Visualisation 3D", href: "/services#renders" },
            { label: "Animations", href: "/services#animations" },
            { label: "VR & AR", href: "/services#immersive" },
          ],
        },
        {
          id: "ressources",
          title: "Ressources",
          links: [
            { label: "FAQ", href: "/faq" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Blog", href: "/journal" },
          ],
        },
      ],
      socials: [
        { id: "behance", label: "Behance", href: "https://behance.net/parallax" },
        { id: "instagram", label: "Instagram", href: "https://instagram.com/parallax.stud.io" },
        { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/parallax-studio" },
      ],
      copyright: "© " + new Date().getFullYear() + " Parallax Stud.io. Tous droits réservés.",
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
        "French-Moroccan 3D visualization studio crafting persuasive imagery for architecture and design.",
      contact: [
        {
          label: "Email",
          value: "hello@parallax-stud.io",
          href: "mailto:hello@parallax-stud.io",
        },
        {
          label: "Phone",
          value: "+212 6 12 34 56 78",
          href: "tel:+212612345678",
        },
        {
          label: "Offices",
          value: "Casablanca • Paris",
          href: "https://maps.google.com/?q=Casablanca+Paris",
        },
      ],
      linkGroups: [
        {
          id: "studio",
          title: "Studio",
          links: [
            { label: "About", href: "/studio" },
            { label: "Process", href: "/process" },
            { label: "Team", href: "/team" },
          ],
        },
        {
          id: "services",
          title: "Services",
          links: [
            { label: "3D Visualization", href: "/services#renders" },
            { label: "Animations", href: "/services#animations" },
            { label: "VR & AR", href: "/services#immersive" },
          ],
        },
        {
          id: "resources",
          title: "Resources",
          links: [
            { label: "FAQ", href: "/faq" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Journal", href: "/journal" },
          ],
        },
      ],
      socials: [
        { id: "behance", label: "Behance", href: "https://behance.net/parallax" },
        { id: "instagram", label: "Instagram", href: "https://instagram.com/parallax.stud.io" },
        { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/parallax-studio" },
      ],
      copyright: "© " + new Date().getFullYear() + " Parallax Stud.io. All rights reserved.",
    },
  },
};

export async function fetchHomepageContent(locale: string): Promise<HomepageContent> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;

  // Simulate async request to a headless WordPress endpoint
  await new Promise((resolve) => setTimeout(resolve, 50));

  return mockDatabase[safeLocale];
}
