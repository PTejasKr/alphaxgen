import styles from "../legal.module.css";
import { siteConfig } from "@/data/site";

export default function Shipping() {
  return (
    <div className={styles.container} style={{ position: 'relative' }}>
      {/* Plane Doodle (Top Right) */}
      <div style={{ position: 'absolute', top: '20px', right: '0', pointerEvents: 'none', opacity: 0.15, transform: 'rotate(15deg)', zIndex: -1 }}>
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2 11 13"/>
          <path d="m22 2-7 20-4-9-9-4Z"/>
        </svg>
      </div>

      {/* Train Doodle (Bottom Left) */}
      <div style={{ position: 'absolute', bottom: '20px', left: '0', pointerEvents: 'none', opacity: 0.15, transform: 'rotate(-5deg)', zIndex: -1 }}>
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="16" rx="2"/>
          <path d="M4 11h16"/>
          <path d="M12 3v8"/>
          <path d="m8 19-2 3"/>
          <path d="m18 22-2-3"/>
          <path d="M8 15h.01"/>
          <path d="M16 15h.01"/>
        </svg>
      </div>

      <h1 className={styles.title}>Shipping / Delivery Policy</h1>
      <div className={styles.content}>
        <p>This Shipping & Delivery Policy applies to all orders placed on www.alphaxgen.store.</p>

        <h2>1. Order Processing</h2>
        <ul>
          <li>Orders are typically processed within 2-3 business days after payment confirmation.</li>
          <li>Orders are not processed on Sundays or public holidays.</li>
        </ul>

        <h2>2. Shipping & Delivery Timeline</h2>
        <ul>
          <li>Estimated delivery time: 7-10 business days, depending on location.</li>
          <li>Delivery timelines are indicative and may vary due to factors beyond our control.</li>
        </ul>

        <h2>3. Shipping Coverage</h2>
        <ul>
          <li>We currently ship within India.</li>
          <li>Delivery to remote areas may take longer.</li>
        </ul>

        <h2>4. Delivery Issues</h2>
        <p>The Company is not liable for delays caused by:</p>
        <ul>
          <li>Courier partners</li>
          <li>Natural events</li>
          <li>Incorrect or incomplete address provided by the customer</li>
        </ul>

        <h2>5. Contact for Shipping Queries</h2>
        <p>📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@alphaxgen.store">info@alphaxgen.store</a></p>
      </div>
    </div>
  );
}
