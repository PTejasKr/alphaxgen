"use client";

import Link from "next/link";
import styles from "./ProductsSection.module.css";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";

interface ProductsSectionProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  index?: string;
  compactTop?: boolean;
}

export function ProductsSection({ 
  products, 
  title = "Latest Drops", 
  subtitle = "Featured", 
  index = "03",
  compactTop = false
}: ProductsSectionProps) {
  return (
    <section className={`${styles.products} ${compactTop ? styles.compactTop : ''}`}>
      <Reveal>
        <div className={styles.sectionHeader}>
          <div>
            <div className="text-small">{index} // {subtitle}</div>
            <h2 className="heading-1">{title}</h2>
          </div>
          <Link href="/shop" className="brutal-button">View All</Link>
        </div>
      </Reveal>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
