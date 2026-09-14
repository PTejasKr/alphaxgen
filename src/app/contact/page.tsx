"use client";

import styles from "./contact.module.css";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.grid}>
        <div className={styles.section}>
          <h2>Inquiries</h2>
          <p>For order questions, press, or wholesale inquiries, please reach out.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: 'var(--space-md)' }}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@alphaxgen.store" target="_blank" rel="noopener noreferrer" className={styles.link}>info@alphaxgen.store</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alphaxgenofficial@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>alphaxgenofficial@gmail.com</a>
            <a href="https://wa.me/919471023202" target="_blank" rel="noopener noreferrer" className={styles.link}>+91 9471023202 (WhatsApp)</a>
            <a href="tel:+917050422589" className={styles.link}>+91 7050422589</a>
          </div>

          <h2>Business Hours</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: 'var(--space-md)' }}>
            <p style={{ margin: 0 }}><strong>Mon - Fri:</strong> 10am - 6pm</p>
            <p style={{ margin: 0 }}><strong>Sat:</strong> 10am - 5pm</p>
            <p style={{ margin: 0 }}><strong>Sun:</strong> Appointment Only</p>
          </div>
          
          <h2>Follow</h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem", marginBottom: 'var(--space-md)' }}>
            <a href="https://www.instagram.com/rhstextiles?stkn=MWlmOXBkb2tramNhaw==" target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              RHS TEXTILES
            </a>
            <a href="https://www.instagram.com/alphaxgenwomen?stkn=MWUwM3A2M2Rla3l2cQ==" target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              ALPHAXGEN WOMEN
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Send a Message</h2>
          <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Name" className={styles.input} required />
            <input type="email" placeholder="Email" className={styles.input} required />
            <select className={styles.input} required>
              <option value="">Subject</option>
              <option value="order">Order Inquiry</option>
              <option value="press">Press / Media</option>
              <option value="wholesale">Wholesale</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Message" className={styles.textarea} required></textarea>
            <button type="submit" className="brutal-button" style={{ marginTop: "var(--space-sm)" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
