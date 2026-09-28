import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import type { Product } from "@/data/products";
import { OutOfStockOverlay } from "./OutOfStockOverlay";

export function ProductCard({ product }: { product: Product }) {
  const isOutOfStock = 
    product.availability === 'out-of-stock' || 
    !product.images || 
    product.images.length === 0 || 
    product.images.every(img => !img || img.trim() === '');

  const displayImage = 
    (product.images && product.images.find(img => img && img.trim() !== '')) || 
    '/images/regular-collection.png';

  return (
    <Link href={`/product/${product.slug}`} className={`${styles.productCard} ${isOutOfStock ? styles.cardOutOfStock : ''}`}>
      <div className={styles.productImageContainer}>
        {product.availability === 'pre-order' && (
          <div className={styles.availabilityBadge}>
            Pre-Order
          </div>
        )}
        
        <div className={`${styles.imagePlaceholder} ${isOutOfStock ? styles.blurredImage : ''}`}>
          <Image 
            src={displayImage} 
            alt={product.name} 
            fill 
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {isOutOfStock && <OutOfStockOverlay size="card" />}
      </div>
      <div className={styles.productMeta}>
        <span className={styles.productName}>{product.name}</span>
        <span className={styles.productPrice}>
          {product.currency === 'INR' ? 'INR ' : '$'}{product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}
