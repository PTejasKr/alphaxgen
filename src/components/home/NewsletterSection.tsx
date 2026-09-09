"use client";

import styles from "./NewsletterSection.module.css";
import { Reveal } from "@/components/ui/Reveal";

export function NewsletterSection() {
  return (
    <section className={styles.newsletter}>
      <Reveal>
        <h2 className="display-md">Join The Club</h2>
        <p>Subscribe for early access to drops and exclusive editorial content.</p>
      </Reveal>
      <Reveal delay={200}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={styles.input}
            required 
          />
          <button type="submit" className="brutal-button">Subscribe</button>
        </form>
      </Reveal>
    </section>
  );
}
