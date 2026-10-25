/** @type {import("next").NextConfig} */
const nextConfig = {
  // Don't advertise the framework/version to scanners.
  poweredByHeader: false,

  images: {
    // Every next/image src lives under public/images. Lock the optimizer to
    // that path (no query strings) so /_next/image can't be pointed at
    // arbitrary URLs or files.
    localPatterns: [{ pathname: "/images/**", search: "" }],
    remotePatterns: [],
    // SVGs can carry script; never run them through the optimizer.
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75],
    // Source images are a few hundred KB; cap fetches to protect memory.
    maximumResponseBody: 10_000_000,
  },

  experimental: {
    // "motion" ships hundreds of modules; only bundle what each
    // component actually imports instead of pulling in the whole package.
    optimizePackageImports: ["motion"],
    // Root layout is keyed by the [locale] dynamic segment, so there's no
    // single layout Next.js can compose a 404 from — this renders
    // app/global-not-found.tsx for every unmatched URL instead.
    globalNotFound: true,
  },

  async redirects() {
    return [
      {
        // Consolidate to the apex domain (canonical URL everywhere in
        // metadata/sitemap is https://florenzecaffe.com) so www and non-www
        // aren't served as duplicate content.
        source: "/:path*",
        has: [{ type: "host", value: "www.florenzecaffe.com" }],
        destination: "https://florenzecaffe.com/:path*",
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // Force HTTPS on every response, including subdomains.
            // Submit to hstspreload.org once this has run in production
            // for a while without issues.
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Block clickjacking (legacy header + CSP frame-ancestors below).
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          {
            // Directives that don't depend on Next's inline scripts, so they
            // can't break hydration. The Google Maps iframe in Visit.tsx is
            // unaffected (no frame-src restriction).
            key: "Content-Security-Policy",
            value: "base-uri 'self'; object-src 'none'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
