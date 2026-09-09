# CONTENT MAP (Structured Data)

To avoid hardcoding, we will use mock data structures for products, collections, and editorial content.

## 1. Products (`src/data/products.ts`)
```typescript
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  colors: string[];
  sizes: string[];
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  featured: boolean;
  collection: string;
}
```

## 2. Collections (`src/data/collections.ts`)
```typescript
export interface Collection {
  id: string;
  slug: string;
  title: string;
  editorialDescription: string;
  heroImage: string;
}
```

## 3. Site Config (`src/data/site.ts`)
```typescript
export const siteConfig = {
  name: "ODD RITUAL / NEO",
  description: "Independent golf culture publication & experimental editorial studio.",
  navigation: [
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" }
  ],
  footerLinks: {
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Refunds", href: "/refunds" },
      { label: "Shipping", href: "/shipping" }
    ],
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" }
    ]
  }
}
```

## 4. Stories/Values (`src/data/stories.ts`)
```typescript
export const brandValues = [
  { id: '01', title: "HERITAGE", description: "Rooted in tradition, built for tomorrow." },
  { id: '02', title: "CRAFT", description: "Obsessive attention to every stitch and seam." },
  { id: '03', title: "CULTURE", description: "More than a game. A lifestyle." }
]
```
