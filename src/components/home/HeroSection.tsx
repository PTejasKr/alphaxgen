"use client";

import styles from "./HeroSection.module.css";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <img src="/images/hero-bg.jpg" alt="Hero Background" className={styles.heroImage} />
      </div>

      <div className={styles.heroTop}>
        <Reveal delay={100}><div className={styles.heroIndex}>01 // Introduction</div></Reveal>
        <Reveal delay={200}><div className={styles.heroIndex}>Scroll to explore</div></Reveal>
      </div>
      
      <h1 className={styles.heroTitle}>
        <Reveal delay={300}><span>Sourcing,</span></Reveal>
        <Reveal delay={400}><span>Tailored to your needs</span></Reveal>
      </h1>
      
      <div className={styles.heroBottom}>
        <Reveal delay={500}>
          <div className={styles.heroDesc}>
            The right products, the required suppliers, tailored to your needs.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
