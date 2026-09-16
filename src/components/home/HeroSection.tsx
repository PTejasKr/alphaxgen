"use client";

import styles from "./HeroSection.module.css";


export function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Animated Gradient Background */}
      <div className={styles.gradientBg}></div>
      <div className={styles.textureOverlay}></div>

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
        </div>
      </div>
    </section>
  );
}
