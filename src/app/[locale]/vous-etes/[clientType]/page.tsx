import { notFound } from "next/navigation";
import { MainNav } from "@/components/layout/MainNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { fetchHomepageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import type { SimpleHeroContent } from "@/lib/defaultContent";
import { isLocale, type Locale } from "@/i18n/config";
import { Check } from "lucide-react";

type ClientTypePageProps = {
  params: Promise<{
    locale: string;
    clientType: string;
  }>;
};

const validClientTypes = ["architectes", "urbanistes", "promoteurs", "designers", "particuliers"];

export function generateStaticParams() {
  const locales = ["fr", "en"];
  const params = [];

  for (const locale of locales) {
    for (const clientType of validClientTypes) {
      params.push({ locale, clientType });
    }
  }

  return params;
}

export default async function ClientTypePage({ params }: ClientTypePageProps) {
  const { locale: localeParam, clientType } = await params;

  if (!isLocale(localeParam) || !validClientTypes.includes(clientType)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const settings = await fetchSiteSettings(locale);
  const homepage = await fetchHomepageContent(locale);

  const content = {
    fr: {
      architectes: {
        eyebrow: "Pour les architectes",
        title: "Donnez vie à vos concepts architecturaux",
        subtitle: "Des visualisations 3D qui permettent à vos clients de voir et ressentir vos projets avant même leur réalisation.",
        benefits: [
          {
            title: "Présentation de projets",
            description: "Impressionnez vos clients avec des rendus photoréalistes qui facilitent la prise de décision.",
          },
          {
            title: "Concours d'architecture",
            description: "Démarquez-vous avec des visuels exceptionnels qui capturent l'essence de votre vision.",
          },
          {
            title: "Communication claire",
            description: "Éliminez les malentendus grâce à des visualisations précises et détaillées.",
          },
          {
            title: "Validation rapide",
            description: "Obtenez l'approbation de vos clients plus rapidement avec des présentations convaincantes.",
          },
        ],
        services: [
          "Rendus extérieurs et intérieurs photoréalistes",
          "Animations de parcours architectural",
          "Vues aériennes et contextuelles",
          "Études d'ensoleillement et d'ombre",
          "Rendus 360° immersifs",
          "Planches de présentation professionnelles",
        ],
      },
      urbanistes: {
        eyebrow: "Pour les urbanistes et paysagistes",
        title: "Visualisez vos projets d'aménagement urbain",
        subtitle: "Des représentations 3D qui communiquent efficacement vos visions d'espaces publics et de paysages.",
        benefits: [
          {
            title: "Plans d'aménagement",
            description: "Présentez vos projets urbains avec des visualisations à grande échelle faciles à comprendre.",
          },
          {
            title: "Consultations publiques",
            description: "Facilitez l'adhésion des citoyens avec des rendus accessibles et engageants.",
          },
          {
            title: "Études d'impact visuel",
            description: "Démontrez l'intégration harmonieuse de vos projets dans leur environnement.",
          },
          {
            title: "Évolution temporelle",
            description: "Montrez la transformation des espaces au fil des saisons et des années.",
          },
        ],
        services: [
          "Vues aériennes de plans masse",
          "Rendus de places publiques et parcs",
          "Visualisations d'espaces verts",
          "Simulations d'intégration paysagère",
          "Animations de parcours urbains",
          "Études de végétalisation",
        ],
      },
      promoteurs: {
        eyebrow: "Pour les promoteurs immobiliers",
        title: "Vendez vos projets avant même leur construction",
        subtitle: "Des visuels marketing puissants qui accélèrent vos ventes et maximisent votre retour sur investissement.",
        benefits: [
          {
            title: "Pré-commercialisation",
            description: "Lancez vos ventes sur plan avec des supports marketing attractifs et convaincants.",
          },
          {
            title: "Showrooms virtuels",
            description: "Permettez à vos clients de visiter et de personnaliser leur futur logement en 3D.",
          },
          {
            title: "ROI optimisé",
            description: "Réduisez vos coûts de marketing tout en augmentant votre taux de conversion.",
          },
          {
            title: "Différenciation marché",
            description: "Démarquez-vous de la concurrence avec des supports visuels premium.",
          },
        ],
        services: [
          "Perspectives commerciales attractives",
          "Vidéos promotionnelles immersives",
          "Tours virtuels 360° interactifs",
          "Plans d'étages en 3D",
          "Brochures et plaquettes commerciales",
          "Configurateurs d'appartements personnalisables",
        ],
      },
      designers: {
        eyebrow: "Pour les designers",
        title: "Matérialisez vos créations en 3D",
        subtitle: "Des rendus qui subliment vos designs d'intérieur et de mobilier avec un réalisme saisissant.",
        benefits: [
          {
            title: "Présentation client",
            description: "Montrez vos concepts de design avec des rendus qui capturent chaque détail et texture.",
          },
          {
            title: "Portfolio professionnel",
            description: "Créez un book impressionnant qui met en valeur votre talent et votre style.",
          },
          {
            title: "Validation de concepts",
            description: "Testez vos idées avant production grâce à des visualisations réalistes.",
          },
          {
            title: "Communication fournisseurs",
            description: "Partagez des spécifications visuelles précises avec vos partenaires.",
          },
        ],
        services: [
          "Rendus d'ambiances intérieures",
          "Visualisation de mobilier sur mesure",
          "Planches tendances et mood boards 3D",
          "Études de matériaux et textures",
          "Rendus de produits design",
          "Scènes lifestyle photoréalistes",
        ],
      },
      particuliers: {
        eyebrow: "Pour les particuliers",
        title: "Concrétisez votre projet de construction ou rénovation",
        subtitle: "Visualisez votre futur chez-vous avant de vous engager dans les travaux.",
        benefits: [
          {
            title: "Aide à la décision",
            description: "Prenez les bonnes décisions en voyant votre projet finalisé avant de commencer.",
          },
          {
            title: "Économies garanties",
            description: "Évitez les erreurs coûteuses et les modifications en cours de chantier.",
          },
          {
            title: "Communication artisans",
            description: "Transmettez vos attentes clairement à vos entrepreneurs et artisans.",
          },
          {
            title: "Tranquillité d'esprit",
            description: "Lancez vos travaux en toute confiance avec une vision claire du résultat.",
          },
        ],
        services: [
          "Rendus de rénovation intérieure",
          "Visualisation d'extensions de maison",
          "Aménagement de jardins et terrasses",
          "Conception de cuisines et salles de bain",
          "Études d'aménagement de combles",
          "Simulations avant/après",
        ],
      },
    },
    en: {
      architectes: {
        eyebrow: "For architects",
        title: "Bring your architectural concepts to life",
        subtitle: "3D visualizations that allow your clients to see and feel your projects before they're built.",
        benefits: [
          {
            title: "Project presentations",
            description: "Impress your clients with photorealistic renders that facilitate decision-making.",
          },
          {
            title: "Architecture competitions",
            description: "Stand out with exceptional visuals that capture the essence of your vision.",
          },
          {
            title: "Clear communication",
            description: "Eliminate misunderstandings with precise and detailed visualizations.",
          },
          {
            title: "Rapid validation",
            description: "Get client approval faster with compelling presentations.",
          },
        ],
        services: [
          "Photorealistic exterior and interior renders",
          "Architectural walkthrough animations",
          "Aerial and contextual views",
          "Sun and shadow studies",
          "Immersive 360° renders",
          "Professional presentation boards",
        ],
      },
      urbanistes: {
        eyebrow: "For urban planners and landscape architects",
        title: "Visualize your urban development projects",
        subtitle: "3D representations that effectively communicate your visions for public spaces and landscapes.",
        benefits: [
          {
            title: "Development plans",
            description: "Present your urban projects with easy-to-understand large-scale visualizations.",
          },
          {
            title: "Public consultations",
            description: "Facilitate citizen engagement with accessible and engaging renders.",
          },
          {
            title: "Visual impact studies",
            description: "Demonstrate the harmonious integration of your projects into their environment.",
          },
          {
            title: "Temporal evolution",
            description: "Show the transformation of spaces across seasons and years.",
          },
        ],
        services: [
          "Aerial views of master plans",
          "Renders of public squares and parks",
          "Green space visualizations",
          "Landscape integration simulations",
          "Urban walkthrough animations",
          "Vegetation studies",
        ],
      },
      promoteurs: {
        eyebrow: "For real estate developers",
        title: "Sell your projects before construction begins",
        subtitle: "Powerful marketing visuals that accelerate your sales and maximize your ROI.",
        benefits: [
          {
            title: "Pre-marketing",
            description: "Launch off-plan sales with attractive and convincing marketing materials.",
          },
          {
            title: "Virtual showrooms",
            description: "Let your clients visit and customize their future home in 3D.",
          },
          {
            title: "Optimized ROI",
            description: "Reduce your marketing costs while increasing your conversion rate.",
          },
          {
            title: "Market differentiation",
            description: "Stand out from the competition with premium visual materials.",
          },
        ],
        services: [
          "Attractive commercial perspectives",
          "Immersive promotional videos",
          "Interactive 360° virtual tours",
          "3D floor plans",
          "Commercial brochures and booklets",
          "Customizable apartment configurators",
        ],
      },
      designers: {
        eyebrow: "For designers",
        title: "Materialize your creations in 3D",
        subtitle: "Renders that enhance your interior and furniture designs with striking realism.",
        benefits: [
          {
            title: "Client presentations",
            description: "Show your design concepts with renders that capture every detail and texture.",
          },
          {
            title: "Professional portfolio",
            description: "Create an impressive portfolio that showcases your talent and style.",
          },
          {
            title: "Concept validation",
            description: "Test your ideas before production with realistic visualizations.",
          },
          {
            title: "Supplier communication",
            description: "Share precise visual specifications with your partners.",
          },
        ],
        services: [
          "Interior ambience renders",
          "Custom furniture visualization",
          "3D mood boards and trend boards",
          "Material and texture studies",
          "Design product renders",
          "Photorealistic lifestyle scenes",
        ],
      },
      particuliers: {
        eyebrow: "For individuals",
        title: "Make your construction or renovation project a reality",
        subtitle: "Visualize your future home before committing to the work.",
        benefits: [
          {
            title: "Decision support",
            description: "Make the right decisions by seeing your completed project before starting.",
          },
          {
            title: "Guaranteed savings",
            description: "Avoid costly mistakes and mid-construction changes.",
          },
          {
            title: "Contractor communication",
            description: "Clearly convey your expectations to your contractors and craftsmen.",
          },
          {
            title: "Peace of mind",
            description: "Start your work with confidence with a clear vision of the result.",
          },
        ],
        services: [
          "Interior renovation renders",
          "House extension visualization",
          "Garden and terrace design",
          "Kitchen and bathroom design",
          "Attic conversion studies",
          "Before/after simulations",
        ],
      },
    },
  };

  const pageContent = content[locale][clientType as keyof typeof content.fr];
  const heroContent: SimpleHeroContent = {
    eyebrow: pageContent.eyebrow,
    title: pageContent.title,
    subtitle: pageContent.subtitle,
  };

  return (
    <>
      <MainNav locale={locale} services={settings.servicesNav} footer={homepage.footer} navigation={settings.navigation} />
      <div className="relative min-h-screen bg-[#050505] pb-24">
        <SimpleHero content={heroContent} locale={locale} />

        {/* Benefits Section */}
        <section className="relative overflow-hidden py-24">
          <div className="mx-auto w-[95%] max-w-7xl px-6 sm:px-10">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                {locale === "fr" ? "Pourquoi choisir Parallax Stud.io ?" : "Why choose Parallax Stud.io?"}
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-white" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {pageContent.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed text-neutral-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative overflow-hidden py-24">
          <div className="mx-auto w-[95%] max-w-7xl px-6 sm:px-10">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                {locale === "fr" ? "Nos services adaptés" : "Our tailored services"}
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-white" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pageContent.services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-neutral-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTASection
          content={{
            title: locale === "fr" ? "Prêt à démarrer votre projet ?" : "Ready to start your project?",
            subtitle: locale === "fr" ? "Discutons de vos besoins" : "Let's discuss your needs",
            quote: locale === "fr"
              ? "Nous sommes là pour transformer votre vision en réalité avec des visuels 3D exceptionnels."
              : "We're here to transform your vision into reality with exceptional 3D visuals.",
            primaryCta: {
              label: locale === "fr" ? "Demander un devis" : "Get a quote",
              href: "/contact",
            },
            secondaryCta: {
              label: locale === "fr" ? "Voir notre portfolio" : "View our portfolio",
              href: "/gallery",
            },
          }}
          locale={locale}
        />
      </div>
      <SiteFooter content={homepage.footer} locale={locale} />
    </>
  );
}
