"use client";

import { useEffect } from "react";
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
      <div className={styles.backdrop} onClick={() => setCartOpen(false)} />
      
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart</h2>
          <button className={styles.closeBtn} onClick={() => setCartOpen(false)}>Close</button>
        </div>
        
        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.emptyText}>Your cart is empty.</div>
          ) : (
            <div className={styles.cartItems}>
              {items.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{item.product.name}</div>
                    <div className={styles.itemMeta}>
                      {item.color && <span>Color: {item.color}</span>}
                      {item.size && <span>Size: {item.size}</span>}
                    </div>
                    <div className={styles.itemPrice}>
                      {item.product.currency === 'INR' ? '₹' : '$'}{item.product.price.toFixed(2)}
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
