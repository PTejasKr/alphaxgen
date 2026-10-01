"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { OutOfStockOverlay } from "@/components/ui/OutOfStockOverlay";
import styles from "./shop.module.css";

const CATEGORIES = ["All", "Regular Collection", "Oversized Collection", "Polo Collection", "Women's Collection"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/products', { signal: controller.signal })
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Fetch error:', err);
        }
      });
      
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get('category');
      if (categoryParam && CATEGORIES.includes(categoryParam)) {
        setActiveCategory(categoryParam);
      }
    }
      
    return () => controller.abort();
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        
        <h1 className={styles.title}>All Products</h1>
        
        <div className={styles.filterBar}>
          <div className={styles.categories}>
            {CATEGORIES.map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.filterButton} ${activeCategory === category ? styles.filterButtonActive : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles.productCount}>
            {filteredProducts.length} Results
          </div>
        </div>
      </header>

      {filteredProducts.length === 0 ? (
        <div style={{ padding: 'var(--space-xl) var(--space-md)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ position: 'relative', width: '300px', height: '180px', overflow: 'hidden', border: 'var(--border-width) solid var(--ink)', background: 'var(--muted)' }}>
            <OutOfStockOverlay size="banner" />
          </div>
          <p className="text-small" style={{ color: 'var(--muted)', letterSpacing: '0.1em' }}>
            All items in this collection are currently out of stock.
          </p>
        </div>
      ) : (
        <main className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      )}
    </div>
  );
}

