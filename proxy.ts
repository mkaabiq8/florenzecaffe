import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

// Next.js 16 renamed the "middleware" file convention to "proxy" (same
// functionality). See node_modules/next/dist/docs/.../file-conventions/proxy.md
//
// English (default) is served unprefixed: "/", "/menu"
// Greek is served under a prefix: "/el", "/el/menu"
//
// Non-default locales route straight to app/[locale]/... . For the default
// locale we rewrite the request internally to /en/... so the URL bar stays
// clean while app/[locale]/... still receives a concrete locale value.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Skip _next internals, API routes, and any request for a file with an
    // extension (images, video, pdf, favicon, etc.) — those are served as-is.
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
