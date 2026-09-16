"use client";

import styles from "./HeroSection.module.css";


export function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Giant Background Text */}
      <div className={styles.giantTextContainer}>
        <div className={styles.giantText}>XGEN</div>
      </div>

      {/* Center Image */}
      <div className={styles.centerImageContainer}>
        <img src="/images/hero-tshirt-transparent.png" alt="Hero T-Shirt" className={styles.centerImage} />
      </div>

      {/* Poster Elements */}
      <div className={styles.posterElements}>
        {/* Middle Text layout */}
        <div className={styles.middleTextLayout}>
          <div className={styles.leftCol}>
            <div className={styles.textLine1}>TAILORED</div>
            <div className={styles.textLine2}>SUPPLY</div>
          </div>
          
          {/* Horizontal Line passing through */}
          <div className={styles.centerLine}></div>
          
          <div className={styles.rightCol}>
            <div className={styles.textLine1}>SOURCING</div>
            <div className={styles.textLine2}>CHAIN</div>
          </div>
        </div>

        {/* Bottom Left Box */}
        <div className={styles.bottomLeftBox}>
          EXPLORE.
          <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"
            className={styles.exploreArrow}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
