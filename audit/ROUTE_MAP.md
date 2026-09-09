# ROUTE MAP

## Public Routes

### `/` (Home)
The editorial homepage. Combines brand storytelling, featured products, and community.
- **Components:** Hero, Feature Collection, Brand Story, Featured Products, Values, Community, Newsletter.

### `/shop` (Catalog)
The main collection page.
- **Components:** FilterBar, ProductGrid, ProductCard.

### `/collections/[slug]`
Specific collection views (e.g., "Summer 2026", "The Heritage Line").

### `/product/[slug]`
Product detail page (PDP).
- **Components:** ProductGallery, SizeSelector, AddToCart, ProductMetadata.

### `/about`
Deep-dive editorial page on the brand's heritage, creativity, and craft.

### `/contact`
Newsletter signup, customer support links, and general inquiries.

## Legal Routes
Text-heavy pages styled with the Neo-brutalist typography system for consistency.
- `/privacy`
- `/terms`
- `/refunds`
- `/shipping`

## Global UI (Present on all routes)
- `Header`
- `Footer`
- `MobileMenu` (conditionally rendered)
- `CartDrawer` (conditionally rendered)
