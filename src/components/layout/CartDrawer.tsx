"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./CartDrawer.module.css";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { cartOpen, setCartOpen, items, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (cartOpen) {
        setCartOpen(false);
      }
    };
    
    if (cartOpen) {
      window.history.pushState({ drawer: 'cart' }, '');
      window.addEventListener("popstate", handlePopState);
    }
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [cartOpen, setCartOpen]);

  const handleClose = () => {
    if (window.history.state && window.history.state.drawer === 'cart') {
      window.history.back();
    } else {
      setCartOpen(false);
    }
  };

  // Use a proper WhatsApp message including cart items
  const buildWhatsAppMessage = () => {
    if (items.length === 0) return "Hello, I would like to ask for a quotation.";
    
    let text = "Hello! I'd like to ask for a quotation for the following items:\n\n";
    items.forEach(item => {
      text += `- ${item.product.name} (Qty: ${item.quantity})`;
      if (item.color) text += ` [Color: ${item.color}]`;
      if (item.size) text += ` [Size: ${item.size}]`;
      text += "\n";
    });
    return encodeURIComponent(text);
  };

  return (
    <div className={`${styles.overlay} ${cartOpen ? styles.overlayOpen : ""}`}>
      {/* Backdrop for closing when clicked outside */}
      <div className={styles.backdrop} onClick={handleClose} />
      
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart</h2>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.emptyText}>Your cart is empty.</div>
          ) : (
            <div className={styles.cartItems}>
              {items.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <Link href={`/product/${item.product.slug}`} className={styles.itemLink} onClick={handleClose}>
                      <div className={styles.itemName}>{item.product.name}</div>
                    </Link>
                    <div className={styles.itemMeta}>
                      {item.color && <span>Color: {item.color}</span>}
                      {item.size && <span>Size: {item.size}</span>}
                    </div>
                    <div className={styles.itemPrice}>
                      {item.product.currency === 'INR' ? 'INR ' : '$'}{item.product.price.toFixed(2)}
                    </div>
                    <div className={styles.itemControls}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <input 
                        type="number"
                        min="1"
                        value={item.quantity === 0 ? "" : item.quantity}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val === "") {
                            updateQuantity(item.id, 0); // Allow clearing temporarily
                            return;
                          }
                          const parsed = parseInt(val);
                          if (!isNaN(parsed) && parsed > 0) {
                            updateQuantity(item.id, parsed);
                          }
                        }}
                        onBlur={(e) => {
                          if (item.quantity === 0 || e.target.value === "") {
                            updateQuantity(item.id, 1);
                          }
                        }}
                        className={styles.quantityInput}
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.footer}>
          {items.length > 0 && (
            <div className={styles.totalSection}>
              <div className={styles.totalRow}>
                <span>Final Price</span>
                <span>{items[0].product.currency === 'INR' ? 'INR ' : '$'}{items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}*</span>
              </div>
              <div className={styles.disclaimer}>*The final price is subject to change.</div>
            </div>
          )}
          <a 
            href={`https://wa.me/919471023202?text=${buildWhatsAppMessage()}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.checkoutBtn}
          >
            Ask for Quotation
          </a>
        </div>
      </div>
    </div>
  );
}
