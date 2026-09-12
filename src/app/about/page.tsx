"use client";

import styles from "./about.module.css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [values, setValues] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => {
        setValues(data);
        sectionRefs.current = sectionRefs.current.slice(0, data.length);
      });
  }, []);

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
  }, [values]);

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.label}>Manifesto</div>
        <h1 className={styles.title}>
          <span>Respect</span>
          <span>the heritage.</span>
          <span>Redefine</span>
          <span>the future.</span>
        </h1>
      </header>

      <section className={styles.introSection}>
        <div className={styles.introText}>
          <p>AlphaXGen is built on a deep respect for craftsmanship and a belief that great apparel begins with quality, intention, and attention to detail. In a world driven by mass production, we take a more thoughtful approach—creating garments that balance contemporary design with lasting quality.</p>
          <p>At AlphaXGen, every piece is developed with purpose. From carefully selected fabrics and considered silhouettes to precise construction and finishing, we focus on the details that define how a garment looks, feels, and wears.</p>
          <p>We believe clothing should be more than a trend. It should reflect individuality, feel effortless, and stand the test of time. With a focus on premium materials, refined design, and consistent craftsmanship, AlphaXGen creates modern apparel made to be worn, valued, and remembered.</p>
        </div>
        <div className={styles.introImage}>
          <div className={styles.imagePlaceholder}>
             <Image src="/images/hero-tshirt.jpg" alt="AlphaXGen Apparel" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className={styles.stickyScrollSection}>
        <div className={styles.scrollTextColumn}>
          <div className={styles.label}>Core Values</div>
          {values.map((value, index) => (
            <div 
              key={value.id} 
              className={`${styles.scrollStep} ${index === activeIndex ? styles.activeStep : ''}`}
              data-index={index}
              ref={el => {
                 sectionRefs.current[index] = el;
              }}
            >
              <div className={styles.valueNumber}>{value.id}</div>
              <h2 className={styles.valueTitle}>{value.title}</h2>
              <p className={styles.valueDesc}>{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.scrollVisualColumn}>
          <div className={styles.stickyVisual}>
            {values.map((value, index) => (
              <div 
                key={`img-${value.id}`} 
                className={`${styles.visualImage} ${index === activeIndex ? styles.activeImage : ''}`}
              >
                <Image 
                  src={value.image || "/images/hero-bg.jpg"} 
                  alt={value.title}
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
