import { notFound } from "next/navigation";
import { MainNav } from "@/components/layout/MainNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, type Locale } from "@/i18n/config";

type TermsPageProps = {
  params: {
    locale: string;
  };
};

export default async function TermsPage({ params }: TermsPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const settings = await fetchSiteSettings(locale);

  const content = {
    fr: {
      title: "Conditions Générales de Vente",
      sections: [
        {
          title: "Article 1 : Champ d'application",
          content: [
            "Les présentes CGV s'appliquent à tous les services de visualisation 3D proposés par Parallax Stud.io.",
          ],
        },
        {
          title: "Article 2 : Devis et commande",
          content: [
            "Tout projet débute par l'établissement d'un devis détaillé. Le devis est valable 30 jours.",
          ],
        },
        {
          title: "Article 3 : Tarifs",
          content: [
            "Les tarifs sont indiqués en Dirhams marocains (DH) hors taxes. La TVA applicable est celle en vigueur au Maroc.",
          ],
        },
        {
          title: "Article 4 : Conditions de paiement",
          content: [
            "• Acompte : 50% à la commande",
            "• Paiement intermédiaire : 30% à la validation préliminaire",
            "• Solde : 20% avant livraison finale",
          ],
        },
        {
          title: "Article 5 : Délais",
          content: [
            "Les délais sont indicatifs et donnés à titre informatif. Nous nous efforçons de les respecter au mieux.",
          ],
        },
        {
          title: "Article 6 : Révisions",
          content: [
            "Trois tours de révisions sont inclus dans nos tarifs. Au-delà, des frais supplémentaires s'appliquent.",
          ],
        },
        {
          title: "Article 7 : Propriété intellectuelle",
          content: [
            "Les fichiers sources restent la propriété de Parallax Stud.io sauf accord contraire dans le devis.",
          ],
        },
        {
          title: "Article 8 : Confidentialité",
          content: [
            "Nous nous engageons à maintenir la confidentialité totale sur tous les projets, notamment en phase de concours.",
          ],
        },
        {
          title: "Article 9 : Annulation",
          content: [
            "En cas d'annulation par le client, l'acompte reste acquis à Parallax Stud.io.",
          ],
        },
        {
          title: "Article 10 : Litiges",
          content: [
            "En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux de Rabat sont compétents.",
          ],
        },
      ],
    },
    en: {
      title: "Terms and Conditions of Sale",
      sections: [
        {
          title: "Article 1: Scope",
          content: [
            "These Terms and Conditions apply to all 3D visualization services offered by Parallax Stud.io.",
          ],
        },
        {
          title: "Article 2: Quote and Order",
          content: [
            "Every project begins with a detailed quote. The quote is valid for 30 days.",
          ],
        },
        {
          title: "Article 3: Pricing",
          content: [
            "Prices are indicated in Moroccan Dirhams (DH) excluding taxes. The applicable VAT is that in force in Morocco.",
          ],
        },
        {
          title: "Article 4: Payment Terms",
          content: [
            "• Deposit: 50% upon order",
            "• Interim payment: 30% upon preliminary validation",
            "• Balance: 20% before final delivery",
          ],
        },
        {
          title: "Article 5: Deadlines",
          content: [
            "Deadlines are indicative and provided for information purposes. We strive to meet them to the best of our ability.",
          ],
        },
        {
          title: "Article 6: Revisions",
          content: [
            "Three rounds of revisions are included in our pricing. Beyond that, additional fees apply.",
          ],
        },
        {
          title: "Article 7: Intellectual Property",
          content: [
            "Source files remain the property of Parallax Stud.io unless otherwise agreed in the quote.",
          ],
        },
        {
          title: "Article 8: Confidentiality",
          content: [
            "We commit to maintaining total confidentiality on all projects, especially during competition phases.",
          ],
        },
        {
          title: "Article 9: Cancellation",
          content: [
            "In case of cancellation by the client, the deposit remains acquired by Parallax Stud.io.",
          ],
        },
        {
          title: "Article 10: Disputes",
          content: [
            "In case of dispute, the parties undertake to seek an amicable solution. Failing that, the courts of Rabat have jurisdiction.",
          ],
        },
      ],
    },
  };

  const pageContent = content[locale];

  return (
    <>
      <MainNav locale={locale} services={settings.servicesNav} footer={settings.footer} navigation={settings.navigation} />
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
          title: locale === "fr" ? "Prêt à démarrer votre projet ?" : "Ready to start your project?",
          subtitle: locale === "fr" ? "Discutons ensemble" : "Let's talk",
          quote: locale === "fr"
            ? "Nos conditions générales de vente garantissent transparence et confiance. Contactez-nous pour discuter de votre projet."
            : "Our terms and conditions guarantee transparency and trust. Contact us to discuss your project.",
          primaryCta: {
            label: locale === "fr" ? "Demander un devis" : "Get a quote",
            href: "/contact",
          },
          secondaryCta: {
            label: locale === "fr" ? "Voir nos réalisations" : "View our work",
            href: "/gallery",
          },
        }}
        locale={locale}
      />
      <SiteFooter content={settings.footer} locale={locale} />
    </>
  );
}
