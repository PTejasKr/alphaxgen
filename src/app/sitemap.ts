import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alphaxgen.store';

  // Base routes from site config
  const routes = [
    '',
    ...siteConfig.nav.map(nav => nav.href),
    ...siteConfig.footer.legal.map(legal => legal.href)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...productRoutes];
}
