"use client";

import styles from "./MarqueeSection.module.css";

interface MarqueeSectionProps {
  text: string;
}

export function MarqueeSection({ text }: MarqueeSectionProps) {
  return (
    <section className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        {text} &bull; {text} &bull; {text} &bull; {text} &bull; 
      </div>
    </section>
  );
}
