import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MainNav } from "@/components/layout/MainNav";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { localizeHref } from "@/lib/localizeHref";
import { fetchBlogPageContent, fetchBlogPostContent, fetchSiteSettings } from "@/lib/wordpressClient";
import { isLocale, locales, type Locale } from "@/i18n/config";

export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const [post, blogPage, settings] = await Promise.all([
    fetchBlogPostContent(locale, params.slug),
    fetchBlogPageContent(locale),
    fetchSiteSettings(locale),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative pb-24">
      <MainNav locale={locale} services={settings.servicesNav} footer={blogPage.footer} navigation={settings.navigation} />
      <section className="border-b border-neutral-900/60 bg-[#050505] pb-16 pt-32 text-neutral-100">
        <div className="mx-auto flex w-[96%] max-w-4xl flex-col gap-6 px-6 sm:px-10">
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            {post.category} • {post.published} • {post.readTime}
          </span>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">{post.title}</h1>
          <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">{post.intro}</p>
        </div>
      </section>

      <div className="mx-auto mt-10 w-[96%] max-w-5xl overflow-hidden rounded-3xl border border-neutral-900/70 bg-[#050505]">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <article className="mx-auto mt-16 w-[96%] max-w-3xl space-y-12 px-6 text-neutral-200 sm:px-0">
        {post.sections.map((section) => (
          <section key={section.id} className="space-y-4">
            {section.heading && (
              <h2 className="text-2xl font-semibold text-neutral-50">{section.heading}</h2>
            )}
            <p className="text-base leading-relaxed text-neutral-300">{section.body}</p>
            {section.type === "list" && section.items && (
              <ul className="list-disc space-y-2 pl-6 text-neutral-400">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {post.pullQuote && (
          <aside className="border-l-2 border-neutral-700 pl-6">
            <blockquote className="text-xl italic text-neutral-100">
              “{post.pullQuote.text}”
            </blockquote>
            {post.pullQuote.attribution && (
              <cite className="mt-3 block text-sm uppercase tracking-[0.3em] text-neutral-500">
                {post.pullQuote.attribution}
              </cite>
            )}
          </aside>
        )}

        {post.conclusionCta && (
          <Link
            href={localizeHref(locale, post.conclusionCta.href)}
            className="inline-flex items-center gap-3 rounded-full border border-white/40 px-5 py-2 text-xs uppercase tracking-[0.35em] text-neutral-50 transition-colors hover:border-white hover:text-white"
          >
            <span>{post.conclusionCta.label}</span>
            <span aria-hidden>→</span>
          </Link>
        )}
      </article>

      <div className="mt-24">
        <FinalCTASection content={blogPage.finalCta} locale={locale} />
        <SiteFooter content={blogPage.footer} locale={locale} />
      </div>
    </div>
  );
}
