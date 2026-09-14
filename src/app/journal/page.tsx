"use client";

import styles from "./journal.module.css";
import Image from "next/image";

export default function Journal() {
  const sections = [
    {
      id: "01",
      title: "MATERIALS",
      description: "100% Cotton - French Terry - 80/20 - Polyester - Dri-Fit - Matty etc.",
      image: "/images/materials.jpg"
    },
    {
      id: "02",
      title: "CRAFT",
      description: "Fabric - Fit - Construction - Printing - Finishing",
      image: "/images/tailor-stitching.jpg"
    },
    {
      id: "03",
      title: "FOR BRANDS",
      description: "Bulk Manufacturing - Customization - Private Label - Print on Demand",
      image: "/images/brands-logo.jpg"
    },
    {
      id: "04",
      title: "INSIGHT",
      description: "Trends - Design - Apparel Culture - Building a Brand",
      image: "/images/insight-pattern-new.png"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.label}>Journal</div>
        <h1 className={styles.title}>
          <span>Knowledge</span>
          <span>And</span>
          <span>Craft</span>
        </h1>
      </header>

      <section className={styles.introSection}>
        <div className={styles.introText}>
          <p>Explore our insights into apparel culture, from the raw materials we source to the final construction. We document our process and findings, ensuring our partners are equipped with the latest knowledge to build robust and modern brands.</p>
        </div>
      </section>

      <section className={styles.stackingSection}>
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className={styles.stackCardWrapper}
          >
            <div className={styles.stackCard}>
              <div className={styles.cardText}>
                <div className={styles.valueNumber}>{section.id}</div>
                <h2 className={styles.valueTitle}>{section.title}</h2>
                <p className={styles.valueDesc}>{section.description}</p>
              </div>
              <div className={styles.cardVisual}>
                <Image 
                  src={section.image || "/images/hero-bg.jpg"} 
                  alt={section.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
