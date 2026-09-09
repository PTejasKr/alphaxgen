# COMPONENT MAP

## Core Shell
- `RootLayout`: Global container, handles fonts, CSS variables, and overall grid.
- `Header`: Minimal sticky/fixed navigation with logo and primary links. Mobile menu toggle.
- `Footer`: Comprehensive site index, large brand statement, contact info, and legal links.
- `MobileMenu`: Full-screen overlay for mobile navigation. Focus trapped, smooth entry/exit.
- `PageTransition`: Handles smooth fading between routes if needed.

## Neo-Brutalist UI Library (Design System)
- `BrutalButton`: Hard borders (1-3px solid), tactile 2-4px offset on hover, sharp corners.
- `BrutalLink`: Underline animations, subtle horizontal shifts.
- `EditorialHeading`: Expressive, broken-line, oversized text components for Clothing Network vibe.
- `SectionLabel`: Small mono/meta text indicating section numbers or context (e.g. "01 // THE HERITAGE").
- `IndexNumber`: Massive numbers for lists or sections.

## Editorial & Commerce Components
- `ImageReveal`: Handles lazy-loading and subtle scale-up/fade-in of images.
- `EditorialImage`: Image container supporting asymmetrical placement and hard borders.
- `ProductCard`: Displays product image, name, price. Hover swaps image and shifts metadata.
- `ProductGrid`: Responsive grid (12-col desktop, 4-col mobile) for products.
- `FilterBar`: Hard bordered square buttons for collection filtering.
- `CartDrawer`: Slide-out panel for cart contents (even if mock).
- `StorySection`: Text-heavy editorial section pairing `EditorialHeading` and `EditorialImage`.
- `ValueSection`: Oversized typography declaring a brand value.
- `SocialGrid`: Instagram/community style grid.
- `NewsletterForm`: Bordered input with clear success/error/loading states.
- `Marquee`: Continuously scrolling text banner.

## Feedback & State
- `LoadingScreen`: Branded loading experience.
- `NotFound`: 404 state with editorial spin.
- `ErrorState`: Hard-bordered error messaging.
