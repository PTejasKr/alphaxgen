import { products, type Product } from '@/data/products';

export class ProductService {
  /**
   * Fetch all products, optionally filtered by category
   */
  static async getProducts(category?: string, limit?: number): Promise<Product[]> {
    let filtered = [...products];

    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category === category);
    }

    if (limit && limit > 0) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }

  /**
   * Fetch featured products
   */
  static async getFeaturedProducts(limit?: number): Promise<Product[]> {
    let featured = products.filter(p => p.featured);

    if (limit && limit > 0) {
      featured = featured.slice(0, limit);
    }

    return featured;
  }

  /**
   * Get a single product by slug
   */
  static async getProductBySlug(slug: string): Promise<Product | undefined> {
    return products.find(p => p.slug === slug);
  }
}
