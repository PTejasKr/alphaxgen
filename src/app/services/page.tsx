"use client";

import styles from "./services.module.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Services() {
  const sections = [
    {
      id: "01",
      title: "BULK",
      description: "Scalable apparel manufacturing for large orders. We provide high-quality garments in bulk quantities with efficient turnaround times, perfect for wholesalers and large-scale retail distribution.",
      image: "/images/materials.jpg"
    },
    {
      id: "02",
      title: "PRIVATE LABEL",
      description: "End-to-end custom apparel production. We manufacture garments with your branding, tags, and packaging, allowing you to build and scale your own unique clothing brand effortlessly.",
      image: "/images/private-label.png"
    },
    {
      id: "03",
      title: "RETAIL",
      description: "Ready-to-wear collections for your retail store. Access our catalog of premium blanks and finished garments, curated to meet modern consumer demands and high retail standards.",
      image: "/images/retail.jpg"
    },
    {
      id: "04",
      title: "CUSTOMIZATION",
      description: "Tailor every aspect of your garment. From fabric selection and custom dyeing to embroidery, screen printing, and specialized finishes, we bring your specific design vision to life.",
      image: "/images/craft-factory-new.jpg"
    },
    {
      id: "05",
      title: "PRINT ON DEMAND",
      description: "Zero-inventory dropshipping and printing. Launch your designs without the risk of holding stock. We print, pack, and fulfill orders directly to your customers with premium quality control.",
      image: "/images/print-on-demand.jpg"
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
        <div className={styles.label}>Services</div>
        <h1 className={styles.title}>
          <span>Our</span>
          <span>Core</span>
          <span>Services</span>
        </h1>
      </header>

      <section className={styles.introSection}>
        <div className={styles.introText}>
          <p>We provide a comprehensive suite of apparel manufacturing and fulfillment services. Whether you are launching a new brand, stocking a retail chain, or scaling a print-on-demand business, our infrastructure is built to support your growth.</p>
        </div>
      </section>

      <section className={styles.stickyScrollSection}>
        <div className={styles.scrollTextColumn}>
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`${styles.scrollStep} ${index === activeIndex ? styles.activeStep : ''}`}
              data-index={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
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
