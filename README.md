# Earthful.me — Next.js Clone

A first-party clone of [earthful.me](https://earthful.me/) built with:

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Inter, Literata, Aboreto — the exact stack used on the live site)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (fully static, 41 prerendered routes)
npm start
```

## Project Structure

```
app/
  layout.tsx                      # root layout + font loaders
  page.tsx                        # homepage (composed of sections)
  globals.css                     # CSS variables, buttons, marquee keyframes
  collections/[handle]/page.tsx   # collection listing (SSG)
  products/[handle]/page.tsx      # product detail (SSG, 28 products)
components/
  AnnouncementBar / Header / Footer
  SpotlightGrid / HeroBanner / TrendingSearches
  PitchVideo / BestSellersRail / LearnMoreSlider
  ScrollingWord / Advisors / FoodFirst
  FeaturedIn / InstaCommunity / Newsletter
  ProductCard / ProductDetail
lib/
  products.ts        # typed access to /data/products.json
  collections.ts     # curated category → product handles
data/
  products.json      # 28 products reverse-engineered from /products.json
_scraped/            # raw scrape artifacts (HTML, JSON, markdown)
```

## Data

Product catalog was pulled directly from the live Shopify `/products.json`
endpoint and normalized into `data/products.json`. All 28 products with their
variants, pricing, images and descriptions are available at build time.

Collections are derived from site navigation and mapped to product handles in
`lib/collections.ts`.

## Styling

Color tokens (copied exactly from the live site's CSS variables):

| Token             | Value      |
| ----------------- | ---------- |
| Background (cream)| `#FFFAF3`  |
| Foreground (ink)  | `#121212`  |
| Accent (orange)   | `#FFC573`  |
| Olive             | `#69744C`  |

Type scale uses Literata for headings, Inter for body, Aboreto for display
caps. Fonts are loaded via `next/font/google` and exposed as CSS variables.

## Routes

- `/` — homepage (12 sections)
- `/collections/all`, `/collections/plant-protein`, `/collections/multivitamin`,
  `/collections/menopause-support`, `/collections/pcos-support`,
  `/collections/sleep-stress-support`, `/collections/hair-skin-support`,
  `/collections/for-kids`, `/collections/combos`
- `/products/<handle>` — for every product in `data/products.json`

## Assets

Images are served from the original Shopify CDN (`earthful.me/cdn/shop/...`)
via `next.config.mjs` remote patterns. No assets were modified.

## Notes

This is a visual/structural clone — the shopping flow is UI-only (no cart
persistence, no checkout). Swap `lib/products.ts` and the add-to-cart buttons
with a real backend to go live.
