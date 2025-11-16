import React from "react";
import { notFound } from "next/navigation";
import { Check, Building2, Palette, Lightbulb, Frame, AlertTriangle, Timer, Camera, Film, Sparkles } from "lucide-react";

import { MainNav } from "@/components/layout/MainNav";
import { SimpleHero } from "@/components/sections/SimpleHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CustomQuoteForm } from "@/components/forms/CustomQuoteForm";
import { fetchSiteSettings, fetchTarifsPageContent } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

type TarifsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function TarifsPage({ params }: TarifsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const page = await fetchTarifsPageContent(locale);
  const settings = await fetchSiteSettings(locale);

  const primaryFooterContact = page.footer.contact?.[0];
  const contactHref = primaryFooterContact?.href
    || (primaryFooterContact?.value ? `mailto:${primaryFooterContact.value}` : "#");

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={page.footer} navigation={settings.navigation} />
      <SimpleHero content={page.hero} locale={locale} />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {page.introduction.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-400">
            {page.introduction.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-neutral-500">
            {page.introduction.disclaimer}
          </p>
        </div>

        {/* Package Title */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-white">
            {page.packagesTitle}
          </h3>
        </div>

        {/* Packages */}
        <div className="grid gap-8 lg:grid-cols-3">
          {page.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-white/30 bg-gradient-to-br from-white/[0.08] to-white/[0.03] hover:border-white/50 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
                  : "border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  {locale === "fr" ? "Populaire" : "Popular"}
                </div>
              )}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.popular ? "text-neutral-300" : "text-neutral-400"}`}>
                  {pkg.description}
                </p>
              </div>
              <div className="mb-6">
                <div className={`text-sm font-semibold uppercase tracking-wider ${pkg.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                  {locale === "fr" ? "À partir de" : "Starting at"}
                </div>
                <div className="mt-2 text-5xl font-bold text-white">
                  {pkg.price.toLocaleString()}
                </div>
                <p className={`mt-1 text-sm ${pkg.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                  {pkg.currency} {locale === "fr" ? "HT" : "excl. tax"}
                </p>
                <p className={`mt-2 text-xs ${pkg.popular ? "text-neutral-500" : "text-neutral-600"}`}>
                  {locale === "fr" ? "Sur devis" : "Upon quote"}
                </p>
              </div>
              <div className="mb-6">
                <p className={`mb-3 text-xs font-semibold uppercase tracking-wider ${pkg.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                  {locale === "fr" ? "Inclus" : "Included"}
                </p>
                <ul className={`space-y-2.5 text-sm ${pkg.popular ? "text-neutral-200" : "text-neutral-300"}`}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={pkg.ctaHref}
                className={`mt-4 block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${
                  pkg.popular
                    ? "bg-white font-bold text-black hover:bg-white/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {pkg.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Forfait à la carte */}
        <div className="mt-16">
          <CustomQuoteForm locale={locale} />
        </div>
      </section>

      {/* How 3D Render Pricing is Calculated */}
      <section className="bg-gradient-to-b from-white/[0.02] to-transparent py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">
              {page.pricingFactors.title}
            </h2>
            <p className="text-lg text-neutral-400">
              {page.pricingFactors.subtitle}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {page.pricingFactors.factors.map((factor) => {
              const IconComponent =
                factor.icon === "building" ? Building2 :
                factor.icon === "palette" ? Palette :
                factor.icon === "camera" ? Camera :
                Frame;

              return (
                <div key={factor.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <IconComponent className="h-8 w-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">
                      {factor.title}
                    </h3>
                  </div>
                  <p className="mb-6 text-sm text-neutral-400">
                    {factor.description}
                  </p>
                  <div className="space-y-3 text-sm">
                    {factor.pricing.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex justify-between ${idx < factor.pricing.length - 1 ? "border-b border-white/5" : ""} pb-2`}
                      >
                        <span className="text-neutral-400">{item.label}</span>
                        <span className="font-semibold text-white">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            {page.pricingTable.title}
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="px-6 py-4 font-semibold text-white">
                  {locale === "fr" ? "Service" : "Service"}
                </th>
                <th className="px-6 py-4 text-right font-semibold text-white">
                  {locale === "fr" ? "Prix indicatif" : "Indicative Price"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {page.pricingTable.rows.map((category, categoryIdx) => (
                <React.Fragment key={`category-${categoryIdx}`}>
                  <tr className="bg-white/[0.01]">
                    <td colSpan={2} className="px-6 py-3 font-semibold text-white">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIdx) => (
                    <tr key={`${categoryIdx}-${itemIdx}`} className="hover:bg-white/[0.02]">
                      <td className="px-6 py-4 text-neutral-400">
                        {item.service}
                      </td>
                      <td className="px-6 py-4 text-right text-white">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-200" />
            <p className="text-sm font-semibold text-yellow-200">
              {page.pricingTable.warning.title}
            </p>
          </div>
          <p className="mt-2 text-sm text-neutral-400">
            {page.pricingTable.warning.message}
          </p>
        </div>
      </section>

      {/* Video Animation Pricing - Section 7.5 */}
      <section className="bg-gradient-to-b from-white/[0.02] to-transparent py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">
              {page.videoPricing.title}
            </h2>
            <p className="text-lg text-neutral-400">
              {page.videoPricing.subtitle}
            </p>
          </div>

          {/* Video Pricing Factors */}
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.videoPricing.factors.map((factor, idx) => {
              const IconComponent =
                factor.icon === "building" ? Building2 :
                factor.icon === "film" ? Film :
                factor.icon === "palette" ? Palette :
                factor.icon === "timer" ? Timer :
                Sparkles;

              return (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <IconComponent className="mb-3 h-8 w-8 text-white" />
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {factor.title}
                  </h3>
                  <ul className="space-y-1 text-sm text-neutral-400">
                    {factor.items.map((item, itemIdx) => (
                      <li key={itemIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Video Pricing Tiers */}
          <div className="mb-12">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {locale === "fr" ? "Exemples de tarifs vidéo à la minute (2024)" : "Video Pricing Examples per Minute (2024)"}
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {page.videoPricing.tiers.map((tier, idx) => (
                <div
                  key={tier.id}
                  className={`rounded-xl p-6 ${
                    tier.popular
                      ? "border-2 border-white/20 bg-white/[0.05]"
                      : "border border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <h4 className="mb-2 text-xl font-bold text-white">
                    {tier.name}
                  </h4>
                  <p className={`mb-4 text-sm ${tier.popular ? "text-neutral-300" : "text-neutral-400"}`}>
                    {tier.description}
                  </p>
                  <div className="text-3xl font-bold text-white">{tier.price.toLocaleString()} DH</div>
                  <p className={`text-sm ${tier.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                    {locale === "fr" ? "par minute" : "per minute"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Offers */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {page.videoPricing.specialOffers.title}
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {page.videoPricing.specialOffers.offers.map((offer) => (
                <div key={offer.id} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8">
                  <h4 className="mb-4 text-2xl font-bold text-white">
                    {offer.title}
                  </h4>
                  <ul className="mb-6 space-y-2 text-neutral-300">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-3xl font-bold text-white">
                    {offer.priceLabel ? `${offer.priceLabel} ${offer.price} ${offer.currency}` : `${offer.price} ${offer.currency}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Process - Section 7.6 */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-12">
            <h2 className="mb-6 text-center text-3xl font-bold text-white">
              {page.process.title}
            </h2>
            <div className="mb-6 text-center">
              <p className="text-lg font-semibold text-neutral-300">
                {page.process.commitment}
              </p>
            </div>
            <div className="space-y-4 text-neutral-400">
              {page.process.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 1 ? "text-neutral-300" : ""}>
                  {paragraph}
                </p>
              ))}
              <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
                <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                <p className="text-center font-semibold text-white">
                  {page.process.tip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-transparent to-white/[0.02] py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">
              {page.faq.title}
            </h2>
          </div>

          <div className="space-y-6">
            {page.faq.questions.map((faqItem, idx) => (
              <details key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  <div className="flex items-center justify-between">
                    <span>{faqItem.question}</span>
                    <span className="text-2xl transition group-open:rotate-45">+</span>
                  </div>
                </summary>
                <div className="mt-4 text-neutral-400">
                  {faqItem.answer.split('\n').map((line, lineIdx) => (
                    line.trim().startsWith('•') ? (
                      <p key={lineIdx}>{line}</p>
                    ) : (
                      <p key={lineIdx}>{line}</p>
                    )
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA with Multiple Contact Options */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent py-32">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            {locale === "fr" ? "Prêt à obtenir un devis personnalisé ?" : "Ready to get a custom quote?"}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-300">
            {locale === "fr"
              ? "Partagez-nous les détails de votre projet et recevez une estimation détaillée sous 48h"
              : "Share your project details and receive a detailed estimate within 48 hours"}
          </p>

          {/* Multiple Contact Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={locale === "fr" ? "/fr/contact" : "/en/contact"}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-white/90 sm:w-auto"
            >
              <span>{locale === "fr" ? "Remplir le formulaire →" : "Fill the form →"}</span>
            </a>

            <a
              href={contactHref}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/5 sm:w-auto"
            >
              <span>{locale === "fr" ? "Envoyer un email →" : "Send an email →"}</span>
            </a>

            <a
              href={page.footer.socials?.find(s => s.label.toLowerCase().includes('instagram'))?.href || '#'}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/5 sm:w-auto"
            >
              <span>{locale === "fr" ? "Nous contacter →" : "Contact us →"}</span>
            </a>
          </div>

          {/* Quote */}
          <div className="mt-16">
            <p className="text-2xl font-light italic text-neutral-400">
              "{page.finalCta.quote}"
            </p>
          </div>
        </div>
      </section>

      <SiteFooter content={page.footer} locale={locale} />
    </div>
  );
}
