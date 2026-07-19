# Florenze Caffè — Website

Official website for **Florenze Caffè**, Andrea Avraamidi 47, Strovolos, Nicosia 2024, Cyprus.

Built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS v4 and [Motion](https://motion.dev) animations.

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build / run in production

```bash
npm run build
npm start         # serves on PORT (default 3000)
```

## Deploy on Hostinger (Node.js web app)

1. In hPanel choose **Websites → Add website → Node.js web app**.
2. Pick **Deploy from GitHub** and select this repository (`main` branch).
3. Hostinger auto-detects Next.js — build command `npm run build`, start command `npm start`.
4. Attach your domain to the app, then set the environment variable
   `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` (used for SEO metadata) and redeploy.

Every push to `main` redeploys automatically.

## Content

- Menu data: `lib/menu.ts` (prices/items — edit here, page updates automatically)
- Contact / hours / social links: `lib/site.ts`
- Photos & videos: `public/images`, `public/video`
- Printable menu: `public/florenze-menu.pdf`
