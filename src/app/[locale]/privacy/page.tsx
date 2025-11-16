import { notFound } from "next/navigation";
import { MainNav } from "@/components/layout/MainNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { fetchHomepageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type PrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const settings = await fetchSiteSettings(locale);
  const homepage = await fetchHomepageContent(locale);

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      sections: [
        {
          title: "Collecte des données",
          content: [
            "Nous collectons uniquement les données nécessaires au traitement de votre demande : nom, prénom, email, téléphone, informations sur votre projet.",
          ],
        },
        {
          title: "Utilisation des données",
          content: [
            "Vos données sont utilisées uniquement pour :",
            "• Répondre à vos demandes",
            "• Établir des devis",
            "• Suivre vos projets",
            "• Envoyer notre newsletter (avec votre consentement)",
          ],
        },
        {
          title: "Protection des données",
          content: [
            "Nous nous engageons à protéger vos données conformément au RGPD et aux lois marocaines sur la protection des données.",
          ],
        },
        {
          title: "Vos droits",
          content: [
            "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
            "Contact : parallax.studio@gmail.com",
          ],
        },
        {
          title: "Cookies",
          content: [
            "Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez les refuser via les paramètres de votre navigateur.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "Data Collection",
          content: [
            "We only collect data necessary to process your request: first name, last name, email, phone, project information.",
          ],
        },
        {
          title: "Data Usage",
          content: [
            "Your data is used only for:",
            "• Responding to your requests",
            "• Preparing quotes",
            "• Project tracking",
            "• Sending our newsletter (with your consent)",
          ],
        },
        {
          title: "Data Protection",
          content: [
            "We are committed to protecting your data in accordance with GDPR and Moroccan data protection laws.",
          ],
        },
        {
          title: "Your Rights",
          content: [
            "You have the right to access, rectify, and delete your data.",
            "Contact: parallax.studio@gmail.com",
          ],
        },
        {
          title: "Cookies",
          content: [
            "Our site uses cookies to improve your experience. You can refuse them through your browser settings.",
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
          title: locale === "fr" ? "Vos données en sécurité" : "Your data is secure",
          subtitle: locale === "fr" ? "Protection garantie" : "Protection guaranteed",
          quote: locale === "fr"
            ? "Nous prenons la protection de vos données très au sérieux. Contactez-nous pour en savoir plus."
            : "We take the protection of your data very seriously. Contact us to learn more.",
          primaryCta: {
            label: locale === "fr" ? "Nous contacter" : "Contact us",
            href: "/contact",
          },
          secondaryCta: {
            label: locale === "fr" ? "Voir nos services" : "View our services",
            href: "/services",
          },
        }}
        locale={locale}
      />
      <SiteFooter content={homepage.footer} locale={locale} />
    </>
  );
}
