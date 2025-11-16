// @ts-nocheck
// This is the new tarifsPageDatabase content to replace in defaultContent.ts
import type { Locale } from "./src/i18n/config";
import type { TarifsPageContent } from "./src/lib/defaultContent";

const tarifsPageDatabase: Record<Locale, TarifsPageContent> = {
  fr: {
    hero: {
      eyebrow: "Tarifs",
      title: "Nos Tarifs",
      subtitle:
        "Transparence et flexibilité : découvrez nos différentes options tarifaires adaptées à vos besoins et votre budget.",
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
        {
          icon: "building",
          title: "La modélisation",
          items: ["Nombre et taille des espaces", "Complexité du projet"],
        },
        {
          icon: "film",
          title: "Le type de vidéo",
          items: ["Intérieure, extérieure ou mixte", "Transitions et scènes"],
        },
        {
          icon: "palette",
          title: "La décoration",
          items: ["Bibliothèque standard", "Objets 3D supplémentaires"],
        },
        {
          icon: "timer",
          title: "La durée",
          items: ["Tarif dégressif au-delà de 1 minute", "Plus c'est long, moins c'est cher/min"],
        },
        {
          icon: "sparkles",
          title: "Éléments additionnels",
          items: ["Personnages animés", "Effets spéciaux", "Bande sonore"],
        },
      ],
      tiers: [
        {
          id: "simple",
          name: "Niveau Simple",
          description: "Espace intérieur, sans animation de personnages",
          price: 11000,
          currency: "DH",
          priceUnit: "par minute",
        },
        {
          id: "classic",
          name: "Niveau Classique",
          description: "Espaces de grande envergure",
          price: 14000,
          currency: "DH",
          priceUnit: "par minute",
        },
        {
          id: "advanced",
          name: "Niveau Avancé",
          description: "Avec personnages animés",
          price: 17000,
          currency: "DH",
          priceUnit: "par minute",
        },
      ],
      specialOffers: {
        title: "Offres spéciales Parallax Stud.io",
        offers: [
          {
            id: "interior",
            title: "Forfait Intérieur",
            features: ["4 espaces en intérieur", "1 minute d'animation"],
            price: 12000,
            currency: "DH",
            priceLabel: "À partir de",
          },
          {
            id: "complete",
            title: "Forfait Complet",
            features: ["1 façade extérieure", "4 espaces intérieurs", "1 minute d'animation"],
            price: 15000,
            currency: "DH",
            priceLabel: "À partir de",
          },
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
        {
          question: "Proposez-vous des réductions pour les commandes groupées ?",
          answer: "Oui ! Nous proposons des remises basées sur le volume pour les commandes groupées. Plus vous commandez de rendus d'un même projet, plus le tarif unitaire diminue.",
        },
        {
          question: "Puis-je obtenir un devis gratuit ?",
          answer: "Absolument ! Nous proposons des devis gratuits et détaillés pour tous les projets. Remplissez simplement notre formulaire de contact avec les détails de votre projet.",
        },
        {
          question: "Les révisions sont-elles incluses dans le prix ?",
          answer: "Oui, nous incluons jusqu'à 3 tours de révisions dans nos tarifs. Au-delà, des frais supplémentaires peuvent s'appliquer selon l'ampleur des modifications.",
        },
        {
          question: "Proposez-vous des forfaits pour les partenariats à long terme ?",
          answer: "Oui, nous proposons des forfaits tarifaires personnalisés et des conditions préférentielles pour les partenariats à long terme. Contactez-nous pour en discuter.",
        },
        {
          question: "Quels sont les délais de paiement ?",
          answer: "• Acompte initial : 50% à la signature du contrat\n• Paiement intermédiaire : 30% à la validation préliminaire\n• Solde final : 20% avant la livraison des fichiers finaux",
        },
        {
          question: "Acceptez-vous les paiements en plusieurs fois ?",
          answer: "Oui, pour les projets de grande envergure, nous pouvons mettre en place un échéancier de paiement adapté.",
        },
      ],
    },
    finalCta: {
      title: "Prêt à obtenir un devis personnalisé ?",
      subtitle:
        "Partagez-nous les détails de votre projet et recevez une estimation détaillée sous 48h",
      quote: "La qualité a un prix, l'excellence n'a pas de limite.",
      primaryCta: {
        label: "Demander un devis",
        href: "/contact",
      },
      secondaryCta: {
        label: "Voir nos services",
        href: "/services",
      },
    },
    footer: mockDatabase.fr.footer,
  },
  en: {
    hero: {
      eyebrow: "Pricing",
      title: "Our Pricing",
      subtitle:
        "Transparency and flexibility: discover our various pricing options tailored to your needs and budget.",
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
        {
          icon: "building",
          title: "Modeling",
          items: ["Number and size of spaces", "Project complexity"],
        },
        {
          icon: "film",
          title: "Video Type",
          items: ["Interior, exterior or mixed", "Transitions and scenes"],
        },
        {
          icon: "palette",
          title: "Interior Design",
          items: ["Standard library", "Additional 3D objects"],
        },
        {
          icon: "timer",
          title: "Duration",
          items: ["Discounted rate beyond 1 minute", "Longer = cheaper per minute"],
        },
        {
          icon: "sparkles",
          title: "Additional Elements",
          items: ["Animated characters", "Special effects", "Soundtrack"],
        },
      ],
      tiers: [
        {
          id: "simple",
          name: "Simple Level",
          description: "Interior space, no character animation",
          price: 11000,
          currency: "DH",
          priceUnit: "per minute",
        },
        {
          id: "classic",
          name: "Classic Level",
          description: "Large-scale spaces",
          price: 14000,
          currency: "DH",
          priceUnit: "per minute",
        },
        {
          id: "advanced",
          name: "Advanced Level",
          description: "With animated characters",
          price: 17000,
          currency: "DH",
          priceUnit: "per minute",
        },
      ],
      specialOffers: {
        title: "Special Parallax Stud.io Offers",
        offers: [
          {
            id: "interior",
            title: "Interior Package",
            features: ["4 interior spaces", "1 minute of animation"],
            price: 12000,
            currency: "DH",
            priceLabel: "From",
          },
          {
            id: "complete",
            title: "Complete Package",
            features: ["1 exterior facade", "4 interior spaces", "1 minute of animation"],
            price: 15000,
            currency: "DH",
            priceLabel: "From",
          },
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
        {
          question: "Do you offer discounts for bulk orders?",
          answer: "Yes! We offer volume-based discounts for bulk orders. The more renders you order from the same project, the lower the unit price.",
        },
        {
          question: "Can I get a free quote?",
          answer: "Absolutely! We offer free and detailed quotes for all projects. Simply fill out our contact form with your project details.",
        },
        {
          question: "Are revisions included in the price?",
          answer: "Yes, we include up to 3 revision rounds in our pricing. Beyond that, additional fees may apply depending on the extent of changes.",
        },
        {
          question: "Do you offer packages for long-term partnerships?",
          answer: "Yes, we offer customized pricing packages and preferential terms for long-term partnerships. Contact us to discuss.",
        },
        {
          question: "What are the payment terms?",
          answer: "• Initial deposit: 50% upon contract signing\n• Intermediate payment: 30% upon preliminary validation\n• Final balance: 20% before delivery of final files",
        },
        {
          question: "Do you accept installment payments?",
          answer: "Yes, for large-scale projects, we can set up an adapted payment schedule.",
        },
      ],
    },
    finalCta: {
      title: "Ready to get a custom quote?",
      subtitle:
        "Share your project details and receive a detailed estimate within 48 hours",
      quote: "Quality has a price, excellence has no limit.",
      primaryCta: {
        label: "Request a quote",
        href: "/contact",
      },
      secondaryCta: {
        label: "View our services",
        href: "/services",
      },
    },
    footer: mockDatabase.en.footer,
  },
};
