import { notFound } from "next/navigation";
import {
  Clock,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Zap,
  FileText,
  Globe,
  UserCheck,
  Shield,
  ThumbsUp,
  CheckCircle2,
  MessageSquare,
  FileCheck,
  PlayCircle,
  Headphones
} from "lucide-react";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactForm } from "@/components/forms/ContactForm";
import { fetchContactPageContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type ContactPageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: ContactPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const page = await fetchContactPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />

      {/* Contact Information Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Address */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {locale === "fr" ? "Adresse" : "Address"}
              </h3>
            </div>
            <p className="text-neutral-300">
              Parallax Stud.io<br />
              Rabat, Maroc
            </p>
          </div>

          {/* Contact Details */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-3">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Email</h3>
            </div>
            <a href="mailto:parallax.studio@gmail.com" className="text-neutral-300 hover:text-white">
              parallax.studio@gmail.com
            </a>
            <div className="mt-6 flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-white" />
              <div>
                <p className="font-semibold text-white">
                  {locale === "fr" ? "Téléphone" : "Phone"}
                </p>
                <a href="tel:+212701098564" className="text-neutral-300 hover:text-white">
                  +212 7 01 09 85 64
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {locale === "fr" ? "Horaires d'ouverture" : "Opening Hours"}
              </h3>
            </div>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>{locale === "fr" ? "Lundi - Vendredi" : "Monday - Friday"}: 9h00 - 18h00</p>
              <p>{locale === "fr" ? "Samedi" : "Saturday"}: 10h00 - 14h00</p>
              <p>{locale === "fr" ? "Dimanche" : "Sunday"}: {locale === "fr" ? "Fermé" : "Closed"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gradient-to-b from-white/[0.02] to-transparent py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">
              {locale === "fr" ? "Suivez-nous" : "Follow Us"}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: Instagram, label: "@parallaxstudio", href: "#" },
                { icon: Facebook, label: "Parallax Studio", href: "#" },
                { icon: Linkedin, label: "Parallax Stud.io", href: "#" },
                { icon: Youtube, label: "Chaîne Parallax Studio", href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <social.icon className="h-5 w-5 text-white" />
                  <span className="text-neutral-300">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <ContactForm locale={locale} />
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-transparent to-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">
              {locale === "fr" ? "Pourquoi travailler avec Parallax Stud.io ?" : "Why work with Parallax Stud.io?"}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: locale === "fr" ? "Réponse rapide" : "Fast Response",
                description: locale === "fr"
                  ? "Nous nous engageons à répondre à toutes les demandes sous 24-48 heures."
                  : "We commit to responding to all requests within 24-48 hours."
              },
              {
                icon: FileText,
                title: locale === "fr" ? "Devis gratuit et détaillé" : "Free Detailed Quote",
                description: locale === "fr"
                  ? "Recevez un devis complet et transparent, sans engagement."
                  : "Receive a complete and transparent quote, with no obligation."
              },
              {
                icon: Globe,
                title: locale === "fr" ? "Expertise franco-marocaine" : "Franco-Moroccan Expertise",
                description: locale === "fr"
                  ? "Le meilleur des deux mondes : qualité française, prix marocains."
                  : "The best of both worlds: French quality, Moroccan prices."
              },
              {
                icon: UserCheck,
                title: locale === "fr" ? "Accompagnement personnalisé" : "Personalized Support",
                description: locale === "fr"
                  ? "Un chef de projet dédié suit votre dossier de A à Z."
                  : "A dedicated project manager follows your project from A to Z."
              },
              {
                icon: Shield,
                title: locale === "fr" ? "Confidentialité garantie" : "Guaranteed Confidentiality",
                description: locale === "fr"
                  ? "Secret professionnel total sur vos projets, notamment en phase de concours."
                  : "Total professional confidentiality on your projects, especially during competitions."
              },
              {
                icon: ThumbsUp,
                title: locale === "fr" ? "Satisfaction client" : "Client Satisfaction",
                description: locale === "fr"
                  ? "Plus de 95% de nos clients sont satisfaits et nous recommandent."
                  : "Over 95% of our clients are satisfied and recommend us."
              },
            ].map((benefit, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <div className="mb-4 rounded-lg bg-white/10 p-3 w-fit">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{benefit.title}</h3>
                <p className="text-neutral-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process After Contact */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">
              {locale === "fr"
                ? "Que se passe-t-il après votre prise de contact ?"
                : "What happens after you contact us?"}
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                number: "1",
                icon: MessageSquare,
                title: locale === "fr" ? "Réception et analyse" : "Reception and Analysis",
                description: locale === "fr"
                  ? "Nous recevons votre demande et analysons vos besoins dans les 24-48h."
                  : "We receive your request and analyze your needs within 24-48 hours."
              },
              {
                number: "2",
                icon: Phone,
                title: locale === "fr" ? "Premier échange" : "First Exchange",
                description: locale === "fr"
                  ? "Nous vous contactons pour clarifier les détails de votre projet et répondre à vos questions."
                  : "We contact you to clarify your project details and answer your questions."
              },
              {
                number: "3",
                icon: FileCheck,
                title: locale === "fr" ? "Proposition et devis" : "Proposal and Quote",
                description: locale === "fr"
                  ? "Vous recevez une proposition détaillée avec devis, délais et méthodologie."
                  : "You receive a detailed proposal with quote, timeline, and methodology."
              },
              {
                number: "4",
                icon: CheckCircle2,
                title: locale === "fr" ? "Validation et démarrage" : "Validation and Start",
                description: locale === "fr"
                  ? "Après validation, nous démarrons immédiatement votre projet selon le planning convenu."
                  : "After validation, we immediately start your project according to the agreed schedule."
              },
              {
                number: "5",
                icon: PlayCircle,
                title: locale === "fr" ? "Suivi régulier" : "Regular Follow-up",
                description: locale === "fr"
                  ? "Vous êtes tenu informé à chaque étape avec des points de validation."
                  : "You are kept informed at each stage with validation points."
              },
              {
                number: "6",
                icon: Headphones,
                title: locale === "fr" ? "Livraison et support" : "Delivery and Support",
                description: locale === "fr"
                  ? "Livraison dans les délais avec support post-livraison si nécessaire."
                  : "On-time delivery with post-delivery support if needed."
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white text-xl font-bold text-black">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-white" />
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-neutral-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="bg-gradient-to-b from-white/[0.02] to-transparent py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">
              {locale === "fr" ? "Questions fréquentes" : "Frequently Asked Questions"}
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: locale === "fr"
                  ? "Travaillez-vous avec des clients internationaux ?"
                  : "Do you work with international clients?",
                a: locale === "fr"
                  ? "Oui ! Nous travaillons régulièrement avec des clients en France, Belgique, Suisse, et partout dans le monde. La distance n'est pas un obstacle grâce aux outils de communication modernes."
                  : "Yes! We regularly work with clients in France, Belgium, Switzerland, and around the world. Distance is not an obstacle thanks to modern communication tools."
              },
              {
                q: locale === "fr" ? "Puis-je visiter vos bureaux ?" : "Can I visit your offices?",
                a: locale === "fr"
                  ? "Oui, vous pouvez prendre rendez-vous pour visiter notre studio à Rabat. Contactez-nous pour planifier une visite."
                  : "Yes, you can make an appointment to visit our studio in Rabat. Contact us to schedule a visit."
              },
              {
                q: locale === "fr"
                  ? "Proposez-vous des consultations gratuites ?"
                  : "Do you offer free consultations?",
                a: locale === "fr"
                  ? "Oui, nous offrons une première consultation gratuite de 30 minutes pour discuter de votre projet et de vos besoins."
                  : "Yes, we offer a free 30-minute initial consultation to discuss your project and needs."
              },
              {
                q: locale === "fr"
                  ? "Combien de temps faut-il pour obtenir un devis ?"
                  : "How long does it take to get a quote?",
                a: locale === "fr"
                  ? "Généralement, nous envoyons un devis détaillé dans les 2-3 jours ouvrés suivant la réception de toutes les informations nécessaires."
                  : "Generally, we send a detailed quote within 2-3 business days after receiving all necessary information."
              },
            ].map((faq, idx) => (
              <details key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  <div className="flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-2xl transition group-open:rotate-45">+</span>
                  </div>
                </summary>
                <p className="mt-4 text-neutral-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            {locale === "fr" ? "Notre Localisation" : "Our Location"}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106449.61252091727!2d-6.936120199999999!3d33.9715904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent py-32">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
          <p className="mb-8 text-2xl font-light italic text-neutral-400">
            "{locale === "fr"
              ? "Avec notre expérience et notre maîtrise de tous les outils 3D, nous vous garantissons de créer des visuels photoréalistes d'un réalisme captivant, stupéfiants de beauté et de vie."
              : "With our experience and mastery of all 3D tools, we guarantee to create photorealistic visuals with captivating realism, stunning in beauty and life."}"
          </p>
          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            {locale === "fr" ? "Un projet en perspective ?" : "Have a project in mind?"}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-300">
            {locale === "fr" ? "Parlons-en !" : "Let's talk about it!"}
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-white/90"
          >
            {locale === "fr" ? "Contactez-nous" : "Contact us"} →
          </a>
        </div>
      </section>

      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
