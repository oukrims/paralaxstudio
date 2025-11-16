import { notFound } from "next/navigation";
import { MainNav } from "@/components/layout/MainNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { fetchHomepageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LegalPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const settings = await fetchSiteSettings(locale);
  const homepage = await fetchHomepageContent(locale);

  const content = {
    fr: {
      title: "Mentions Légales",
      sections: [
        {
          title: "Éditeur du site",
          content: [
            "Parallax Stud.io",
            "Siège social : 5 Rue Tajmouati, Quartier les Orangers, Rabat, Maroc",
            "Email : parallax.studio@gmail.com",
            "Téléphone : +212 701098564",
          ],
        },
        {
          title: "Directeur de publication",
          content: ["Paul Grosjean"],
        },
        {
          title: "Hébergement",
          content: [
            "[Nom de l'hébergeur]",
            "[Adresse]",
            "[Contact]",
          ],
        },
        {
          title: "Propriété intellectuelle",
          content: [
            "Le contenu du site (textes, images, vidéos, rendus 3D) est la propriété exclusive de Parallax Stud.io. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
          ],
        },
        {
          title: "Crédits",
          content: [
            "Tous les projets présentés ont été réalisés par Parallax Stud.io.",
          ],
        },
      ],
    },
    en: {
      title: "Legal Notice",
      sections: [
        {
          title: "Site Publisher",
          content: [
            "Parallax Stud.io",
            "Head Office: 5 Rue Tajmouati, Quartier les Orangers, Rabat, Morocco",
            "Email: parallax.studio@gmail.com",
            "Phone: +212 701098564",
          ],
        },
        {
          title: "Publication Director",
          content: ["Paul Grosjean"],
        },
        {
          title: "Hosting",
          content: [
            "[Hosting Provider Name]",
            "[Address]",
            "[Contact]",
          ],
        },
        {
          title: "Intellectual Property",
          content: [
            "The content of the site (texts, images, videos, 3D renders) is the exclusive property of Parallax Stud.io. Any reproduction, even partial, is prohibited without prior authorization.",
          ],
        },
        {
          title: "Credits",
          content: [
            "All projects presented were created by Parallax Stud.io.",
          ],
        },
      ],
    },
  };

  const pageContent = content[locale];

  return (
    <>
      <MainNav locale={locale} services={settings.servicesNav} footer={homepage.footer} navigation={settings.navigation} />
      <div className="relative min-h-screen bg-[#050505] pb-24 pt-32">
        <div className="mx-auto w-[95%] max-w-7xl px-6 sm:px-10">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {pageContent.title}
            </h1>
            <div className="mx-auto mt-4 h-1 w-24 bg-white" />
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {pageContent.sections.map((section, idx) => (
              <section key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <div className="space-y-2 text-neutral-400">
                  {section.content.map((line, lineIdx) => (
                    <p key={lineIdx} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <FinalCTASection
        content={{
          title: locale === "fr" ? "Une question juridique ?" : "Legal question?",
          subtitle: locale === "fr" ? "Contactez-nous" : "Contact us",
          quote: locale === "fr"
            ? "Notre équipe est à votre disposition pour répondre à toutes vos questions."
            : "Our team is available to answer all your questions.",
          primaryCta: {
            label: locale === "fr" ? "Nous contacter" : "Contact us",
            href: "/contact",
          },
          secondaryCta: {
            label: locale === "fr" ? "Retour à l'accueil" : "Back to home",
            href: "/",
          },
        }}
        locale={locale}
      />
      <SiteFooter content={homepage.footer} locale={locale} />
    </>
  );
}
