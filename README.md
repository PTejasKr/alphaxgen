# alphaxgen
**Neo-Brutalist Golf Editorial & Commerce Platform**

## 1. Architecture Summary
This project is built on **Next.js 15 (App Router)** utilizing strict Server/Client Component boundaries. The aesthetic logic completely eschews utility frameworks like Tailwind in favor of a bespoke **CSS Variables & Modules Architecture** to strictly enforce the Neo-Brutalist constraints (hard borders, large offset shadows, lack of border-radius, pure `#111` ink on `#F4F1E8` paper).

- **Backend & Node Mapping:** The application features a dedicated backend API utilizing Next.js Route Handlers (`/api/products`, `/api/stories`). Frontend nodes (UI Components like `Shop`, `ProductPage`, `About`, `Home`) map strictly to this backend layer, fetching their structured JSON data decoupled from static imports. This establishes a proper scalable backend structure.
- **Data Layer:** Centralized mock database in `src/data/` (products, stories, site config).
- **Routing:** App Router utilizing nested layouts and dynamic `[slug]` parameters for products.
- **Motion:** Native CSS transitions, keyframes (Marquee), and a lightweight `IntersectionObserver`-based `Reveal` component replacing heavy external libraries like GSAP for better performance.

## 2. Changed Files
- `src/app/globals.css`: Global Neo-Brutalist design tokens.
- `src/app/layout.tsx`: Root shell, Font initialization, global components.
- `src/app/page.tsx`: Complete editorial homepage.
- `src/app/about/page.tsx`: Manifesto & values page.
- `src/app/shop/page.tsx`: Catalog with filtering.
- `src/app/product/[slug]/page.tsx`: Product Detail Page (PDP).
- `src/app/contact/page.tsx`, `privacy`, `terms`, `refunds`, `shipping`: Standardized utility pages.
- `src/components/layout/`: `Header.tsx`, `Footer.tsx`, `MobileMenu.tsx`, `CartDrawer.tsx`.
- `src/components/ui/`: `ProductCard.tsx`, `Reveal.tsx`, `CustomCursor.tsx`.
- `src/data/`: `products.ts`, `stories.ts`, `site.ts`.

## 3. Dependencies Added
- Zero external JS UI libraries added.
- Fonts served via `next/font/google` (`Archivo Black`, `Space Grotesk`, `Inter`).

## 4. Performance Optimizations
- **No GSAP/Framer Motion:** Replaced complex scroll choreography with native CSS transitions and a 1KB IntersectionObserver wrapper (`Reveal.tsx`).
- **Font Optimization:** Next.js font optimization prevents layout shift and preloads critical assets.
- **Client/Server Split:** Interactive components (`MobileMenu`, `CartDrawer`, `CustomCursor`) are explicitly marked as `"use client"`, allowing the bulk of the page (and text-heavy legal/about pages) to remain as statically rendered HTML.

## 5. Reference Deviations
- **Typography Swap:** Since the exact Clothing Network font is proprietary, `Archivo Black` combined with `Space Grotesk` was chosen to replicate the same aggressive, horizontal-stretching impact without licensing issues.
- **Custom Cursor:** Added a custom tactile pointer (`CustomCursor.tsx`) that scales up over clickable elements, adapting a common high-end fashion portfolio trope to the Neo-Brutalist setting.

## 6. Known Limitations
- Checkout is purely visual (button disabled) as no ecommerce provider (e.g., Shopify Storefront API) was connected.
- Images rely on a visual `[IMG: NAME]` placeholder rather than optimized `next/image` tags, pending actual asset delivery.

## 7. Test Results
- **Functional:** Routing, Mobile Menu overlay, Cart Drawer overlay, and Shop Filtering successfully execute without runtime errors.
- **Responsive:** Fluid typography via `clamp()` and CSS Grid scales cleanly from 320px to 1920px.
- **Build:** `npm run build` completed successfully, confirming zero hydration or prerender errors.
