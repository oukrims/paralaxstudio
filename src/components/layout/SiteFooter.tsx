import { ParallaxLogo } from "../branding/ParallaxLogo";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";
import type { FooterContent } from "@/lib/mockWordpressClient";

type SiteFooterProps = {
  content: FooterContent;
  locale?: Locale;
};

export function SiteFooter({ content, locale }: SiteFooterProps) {
  return (
    <footer className="border-t border-neutral-900/80 bg-[#050505] py-16">
      <div className="mx-auto flex w-[96%] max-w-7xl flex-col gap-12 px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <ParallaxLogo variant="light" className="h-8 w-auto" />
            <p className="max-w-sm text-sm text-neutral-500">
              {content.description}
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {content.contact.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="text-neutral-600">{item.label}</span>
                  <a
                    href={localizeHref(locale ?? "fr", item.href)}
                    className="text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {content.linkGroups.map((group) => (
              <div key={group.id} className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-600">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={localizeHref(locale ?? "fr", link.href)}
                        className="transition-colors hover:text-neutral-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-900/80 pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>{content.copyright}</span>
          <div className="flex flex-wrap items-center gap-4 text-neutral-500">
            {content.socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="transition-colors hover:text-neutral-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
