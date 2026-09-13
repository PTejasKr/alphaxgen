"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
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
      
    return () => controller.abort();
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="text-small">Catalog // SS26</div>
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

      <main className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
