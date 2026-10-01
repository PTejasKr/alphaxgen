"use client";

import styles from "./about.module.css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [values, setValues] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/stories', { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setValues(data);
        sectionRefs.current = sectionRefs.current.slice(0, data.length);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Fetch error:', err);
        }
      });
      
    return () => controller.abort();
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
        
        <h1 className={styles.title}>
          <span>Respect</span>
          <span>the heritage.</span>
          <span>Redefine</span>
          <span>the future.</span>
        </h1>
      </header>

      

      <section className={styles.stickyScrollSection}>
        <div className={styles.scrollTextColumn}>
          
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
              
              <div className={styles.mobileImageWrapper}>
                <Image 
                  src={value.image || "/images/hero-bg.jpg"} 
                  alt={value.title}
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
            {values.map((value, index) => (
              <div 
                key={`img-${value.id}`} 
                className={`${styles.visualImage} ${index === activeIndex ? styles.activeImage : ''}`}
              >
                <Image 
                  src={value.image || "/images/hero-bg.jpg"} 
                  alt={value.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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

