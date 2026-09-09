import Link from "next/link";
import styles from "./ProductCard.module.css";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className={styles.productCard}>
      <div className={styles.productImageContainer}>
        {product.availability !== 'in-stock' && (
          <div className={styles.availabilityBadge}>
            {product.availability === 'pre-order' ? 'Pre-Order' : 'Sold Out'}
          </div>
        )}
        <div className={styles.imagePlaceholder}>
          [IMG: {product.name}]
        </div>
      </div>
      <div className={styles.productMeta}>
        <span className={styles.productName}>{product.name}</span>
        <span className={styles.productPrice}>
          {product.currency === 'INR' ? 'Rs ' : '$'}{product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}
