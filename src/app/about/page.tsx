"use client";

import styles from "./about.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [values, setValues] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => setValues(data));
  }, []);
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.label}>Manifesto</div>
        <h1 className={styles.title}>
          <span>Respect</span>
          <span>The</span>
          <span>Heritage</span>
        </h1>
      </header>

      <section className={styles.contentGrid}>
        <div className={styles.textBlock}>
          We are an independent golf culture publication and experimental editorial studio. 
          Our mission is to challenge traditional aesthetics while honoring the game's roots.
        </div>
        <div className={styles.imagePlaceholder}>
          <div style={{ padding: "1rem", color: "var(--paper)" }}>[IMG: BRAND EDITORIAL]</div>
        </div>
      </section>

      <section style={{ marginTop: "var(--space-xl)" }}>
        <div className={styles.label}>Core Values</div>
        {values.map((value, index) => (
          <div key={value.id} className={styles.valueSection}>
            <div className={styles.contentGrid}>
              <div>
                <div className={styles.valueNumber}>{value.id}</div>
                <h2 className={styles.valueTitle}>{value.title}</h2>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
              {index % 2 !== 0 && (
                <div className={styles.imagePlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
                  {value.image && (
                    <Image 
                      src={value.image} 
                      alt={value.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
