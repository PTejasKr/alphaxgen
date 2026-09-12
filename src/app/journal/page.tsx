"use client";

import styles from "./journal.module.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Journal() {
  const sections = [
    {
      id: "01",
      title: "MATERIALS",
      description: "100% Cotton • French Terry • 80/20 • Polyester • Dri-Fit • Matty etc.",
      image: "/images/materials.jpg"
    },
    {
      id: "02",
      title: "CRAFT",
      description: "Fabric — Fit — Construction — Printing — Finishing",
      image: "/images/tailor-stitching.jpg"
    },
    {
      id: "03",
      title: "FOR BRANDS",
      description: "Bulk Manufacturing — Customization — Private Label — Print on Demand",
      image: "/images/brands-logo.jpg"
    },
    {
      id: "04",
      title: "INSIGHT",
      description: "Trends • Design • Apparel Culture • Building a Brand",
      image: "/images/environmental-impact.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", 
        threshold: 0
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

      <section className={styles.stickyScrollSection}>
        <div className={styles.scrollTextColumn}>
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`${styles.scrollStep} ${index === activeIndex ? styles.activeStep : ''}`}
              data-index={index}
              ref={el => { sectionRefs.current[index] = el; }}
            >
              <div className={styles.valueNumber}>{section.id}</div>
              <h2 className={styles.valueTitle}>{section.title}</h2>
              <p className={styles.valueDesc}>{section.description}</p>
              
              <div className={styles.mobileImageWrapper}>
                <Image 
                  src={section.image || "/images/hero-bg.jpg"} 
                  alt={section.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.scrollVisualColumn}>
          <div className={styles.stickyVisual}>
            {sections.map((section, index) => (
              <div 
                key={`img-${section.id}`} 
                className={`${styles.visualImage} ${index === activeIndex ? styles.activeImage : ''}`}
              >
                <Image 
                  src={section.image || "/images/hero-bg.jpg"} 
                  alt={section.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
