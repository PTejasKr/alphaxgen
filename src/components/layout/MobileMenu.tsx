"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import styles from "./MobileMenu.module.css";
import { usePathname } from "next/navigation";

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo} onClick={onClose}>
          <img src="/images/logo.png" alt="Logo" style={{ height: '24px', display: 'block' }} />
        </Link>
      </div>

      <nav className={styles.nav}>
        {siteConfig.nav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`${styles.link} ${isActive ? styles.active : ""}`} 
              onClick={onClose}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div>&copy; {new Date().getFullYear()} {siteConfig.shortName}</div>
        <Link href="/privacy" onClick={onClose}>Privacy</Link>
      </div>
    </div>
  );
}
