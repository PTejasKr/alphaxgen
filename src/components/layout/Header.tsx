"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import styles from "./Header.module.css";
import { useState, useEffect, useCallback } from "react";
import { MobileMenu } from "./MobileMenu";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, cartOpen, setCartOpen } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.left}>
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={styles.menuText}>Menu</span>
            <svg 
              className={`${styles.menuArrow} ${menuOpen ? styles.arrowOpen : ""}`} 
              width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="square"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </div>

        <div className={styles.center}>
          <Link href="/" className={styles.logo}>
            alphaxgen
          </Link>
        </div>

        <div className={styles.right}>
          <button className={styles.cartButton} onClick={() => setCartOpen(true)}>
            <span className={styles.cartIcon}><i className="fa-regular fa-cart-shopping"></i></span>
            <span className={styles.cartCount}>{cartCount}</span>
          </button>
        </div>
      </header>
      
      <MobileMenu isOpen={menuOpen} onClose={handleCloseMenu} />
      <CartDrawer />
    </>
  );
}
