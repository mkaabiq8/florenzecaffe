import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // "motion" ships hundreds of modules; only bundle what each
    // component actually imports instead of pulling in the whole package.
    optimizePackageImports: ["motion"],
    // Root layout is keyed by the [locale] dynamic segment, so there's no
    // single layout Next.js can compose a 404 from — this renders
    // app/global-not-found.tsx for every unmatched URL instead.
    globalNotFound: true,
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
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
