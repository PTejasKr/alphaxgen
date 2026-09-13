"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Product } from "@/data/products";
import styles from "./product.module.css";
import { useCart } from "@/context/CartContext";

const getColorStyle = (colorName: string) => {
  const map: Record<string, { bg: string, text: string }> = {
    'white': { bg: '#FFFFFF', text: '#000000' },
    'black': { bg: '#000000', text: '#FFFFFF' },
    'vintage black': { bg: '#1a1a1a', text: '#FFFFFF' },
    'grey': { bg: '#808080', text: '#FFFFFF' },
    'vintage grey': { bg: '#696969', text: '#FFFFFF' },
    'red': { bg: '#FF0000', text: '#FFFFFF' },
    'yellow': { bg: '#FFD700', text: '#000000' },
    'pink': { bg: '#FFC0CB', text: '#000000' },
    'beige': { bg: '#F5F5DC', text: '#000000' },
    'sky blue': { bg: '#87CEEB', text: '#000000' },
    'vintage blue': { bg: '#4682b4', text: '#FFFFFF' },
    'blue': { bg: '#0000FF', text: '#FFFFFF' },
    'maroon': { bg: '#800000', text: '#FFFFFF' },
    'navy blue': { bg: '#000080', text: '#FFFFFF' },
    'navy': { bg: '#000080', text: '#FFFFFF' },
    'orange': { bg: '#FFA500', text: '#000000' },
    'light green': { bg: '#90EE90', text: '#000000' },
    'green': { bg: '#008000', text: '#FFFFFF' },
    'dark green': { bg: '#006400', text: '#FFFFFF' },
    'sage green': { bg: '#9DC183', text: '#000000' },
    'royal blue': { bg: '#4169E1', text: '#FFFFFF' },
    'lavender': { bg: '#E6E6FA', text: '#000000' },
    'brown': { bg: '#A52A2A', text: '#FFFFFF' },
    'off-white': { bg: '#FAF9F6', text: '#000000' },
    'rose gold': { bg: '#B76E79', text: '#FFFFFF' }
  };
  
  const normalized = colorName.toLowerCase();
  return map[normalized] || { bg: 'var(--ink)', text: 'var(--paper)' };
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/products/${resolvedParams.slug}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        setProduct(data);
        if (data.colors.length > 0) setSelectedColor(data.colors[0]);
        if (data.sizes.length > 0) setSelectedSize(data.sizes[0]);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setLoading(false);
        }
      });
      
    return () => controller.abort();
  }, [resolvedParams.slug]);

  if (loading) return <div style={{ padding: 'var(--space-xl)' }}>Loading...</div>;
  if (!product) return <div style={{ padding: 'var(--space-xl)' }}>Product Not Found</div>;

  const isAvailable = product.availability !== 'out-of-stock';

  const handleAddToCart = () => {
    if (isAvailable) {
      addToCart(product, selectedSize, selectedColor);
    }
  };

  const SizeChart = product.collection === 'oversized' ? (
    <div style={{ marginTop: '1rem', border: 'var(--border-width) solid var(--ink)', fontFamily: 'var(--font-body)', backgroundColor: 'var(--paper)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ borderBottom: 'var(--border-width) solid var(--ink)' }}>
            <th style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)' }}>SIZE</th>
            <th style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)' }}>CHEST</th>
            <th style={{ padding: '0.5rem' }}>LENGTH</th>
          </tr>
        </thead>
        <tbody>
          {[['S', '40-42', '24'], ['M', '42-44', '25'], ['L', '44-46', '26'], ['XL', '46-48', '27'], ['2XL', '48-50', '28']].map((row, i) => (
            <tr key={i} style={{ borderBottom: i !== 4 ? 'var(--border-width) solid var(--ink)' : 'none' }}>
              <td style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)', fontWeight: 'bold' }}>{row[0]}</td>
              <td style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)' }}>{row[1]}</td>
              <td style={{ padding: '0.5rem' }}>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ padding: '0.5rem', borderTop: 'var(--border-width) solid var(--ink)', fontSize: '0.875rem', textAlign: 'center' }}>
        ALL DIMENSIONS ARE IN INCHES<br/>
        <small>+/-1 inches in measurement is considered normal</small>
      </div>
    </div>
  ) : (
    <div style={{ marginTop: '1rem', border: 'var(--border-width) solid var(--ink)', fontFamily: 'var(--font-body)', backgroundColor: 'var(--paper)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ borderBottom: 'var(--border-width) solid var(--ink)' }}>
            <th style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)' }}>SIZE</th>
            <th style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)' }}>CHEST</th>
            <th style={{ padding: '0.5rem' }}>LENGTH</th>
          </tr>
        </thead>
        <tbody>
          {[['S', '36', '25'], ['M', '38', '26'], ['L', '40', '27'], ['XL', '42', '28'], ['2XL', '44', '29']].map((row, i) => (
            <tr key={i} style={{ borderBottom: i !== 4 ? 'var(--border-width) solid var(--ink)' : 'none' }}>
              <td style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)', fontWeight: 'bold' }}>{row[0]}</td>
              <td style={{ padding: '0.5rem', borderRight: 'var(--border-width) solid var(--ink)' }}>{row[1]}</td>
              <td style={{ padding: '0.5rem' }}>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ padding: '0.5rem', borderTop: 'var(--border-width) solid var(--ink)', fontSize: '0.875rem', textAlign: 'center' }}>
        ALL DIMENSIONS ARE IN INCHES<br/>
        <small>+/-1 inches in measurement is considered normal</small>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {/* LEFT: GALLERY */}
      <div className={styles.gallery}>
        <div className={styles.placeholder}>
          [IMG: {product.name}]
        </div>
      </div>

      {/* RIGHT: INFO */}
      <div className={styles.info}>
        <div className={styles.breadcrumb}>
          <Link href="/shop">Shop</Link> &nbsp;/&nbsp; {product.category}
        </div>

        <h1 className={styles.title}>{product.name}</h1>
        <div className={styles.price}>
          {product.currency === 'INR' ? 'Rs ' : '$'}{product.price.toFixed(2)}
        </div>

        <p className={styles.description}>{product.description}</p>

        {product.colors.length > 0 && (
          <div className={styles.section}>
            <div className={styles.label}>Color: {selectedColor}</div>
            <div className={styles.options}>
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`${styles.optionBtn} ${selectedColor === color ? styles.optionBtnActive : ''}`}
                  style={selectedColor === color ? { 
                    backgroundColor: getColorStyle(color).bg, 
                    color: getColorStyle(color).text, 
                    borderColor: 'var(--ink)' 
                  } : {}}
                >
                  {color}
                </button>
              ))}
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8 }}>
              * Colors can vary if one wants and specific colors can be ordered.
            </p>
          </div>
        )}

        {product.sizes.length > 0 && (
          <div className={styles.section}>
            <div className={styles.label}>Size</div>
            <div className={styles.options}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`${styles.optionBtn} ${selectedSize === size ? styles.optionBtnActive : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={styles.addToCart}>
          <button 
            className={`${styles.cartBtn} ${!isAvailable ? styles.cartBtnDisabled : ''}`}
            disabled={!isAvailable}
            onClick={handleAddToCart}
          >
            {!isAvailable ? 'Out of Stock' : (product.availability === 'pre-order' ? 'Pre-Order' : 'Add to Cart')}
          </button>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionItem} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setShowSizeGuide(!showSizeGuide)}>
              <span>Size Guide</span>
              <span>{showSizeGuide ? '-' : '+'}</span>
            </div>
            {showSizeGuide && SizeChart}
          </div>
          <div className={styles.accordionItem} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setShowShipping(!showShipping)}>
              <span>Shipping & Returns</span>
              <span>{showShipping ? '-' : '+'}</span>
            </div>
            {showShipping && (
              <div style={{ marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--ink)' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Shipping:</strong> Orders are processed within 2-3 business days. Estimated delivery is 7-10 business days across India.</p>
                <p><strong>Returns:</strong> Refunds are accepted for damaged or incorrect items reported within 48 hours. Custom-printed or personalized products are strictly non-returnable.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
