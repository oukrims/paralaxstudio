export function localizeHref(locale: string, href: string) {
  if (!href) return href;

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return href;
  }

  if (href.startsWith("#")) {
    return href;
  }

  const normalized = href.startsWith("/") ? href : `/${href}`;

  return `/${locale}${normalized}`.replace(/\/+/, "/");
}
