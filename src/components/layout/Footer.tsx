import Link from "next/link";
import { siteConfig } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h3>Navigation</h3>
          <ul className={styles.linkList}>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>Legal</h3>
          <ul className={styles.linkList}>
            {siteConfig.footer.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Social</h3>
          <ul className={styles.linkList}>
            {siteConfig.footer.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <ul className={styles.linkList}>
            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@alphaxgen.store">info@alphaxgen.store</a></li>
            <li><a href="https://wa.me/919471023202" target="_blank" rel="noopener noreferrer">+91 9471023202</a></li>
          </ul>
          <h3 style={{ marginTop: 'var(--space-md)' }}>Business Hours</h3>
          <ul className={styles.linkList} style={{ gap: '0.25rem' }}>
            <li className={styles.textItem}>Mon - Fri: 10am - 6pm</li>
            <li className={styles.textItem}>Sat: 10am - 5pm</li>
            <li className={styles.textItem}>Sun: Appointment Only</li>
          </ul>
        </div>
      </div>

      <div className={styles.brandStatement}>
        {siteConfig.description.split("&").map((part, i) => (
          <div key={i}>{part.trim()}</div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div>&copy; {new Date().getFullYear()} {siteConfig.name}</div>
        <div>All Rights Reserved</div>
      </div>
    </footer>
  );
}
