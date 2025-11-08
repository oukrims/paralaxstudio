import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return redirectToLocale(request, defaultLocale);
  }

  const [maybeLocale, ...rest] = segments;

  if (!isLocale(maybeLocale)) {
    const rewrittenPath = [defaultLocale, maybeLocale, ...rest]
      .filter(Boolean)
      .join("/");

    return redirectToLocale(request, rewrittenPath);
  }

  return NextResponse.next();
}

function redirectToLocale(request: NextRequest, path: string) {
  const url = request.nextUrl.clone();
  url.pathname = path.startsWith("/") ? path : `/${path}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
