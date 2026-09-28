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
      image: "/images/bulk-mannequins.jpg",
      options: [
        {
          tag: "MOQ",
          title: "Tiered Volume Pricing",
          detail: "Optimized unit economics from 100 to 50,000+ pieces with flexible batch scheduling."
        },
        {
          tag: "Quality",
          title: "Multi-Stage QC",
          detail: "Rigorous 3-tier fabric, stitching, and measurement inspection before final dispatch."
        }
      ]
    },
    {
      id: "02",
      title: "PRIVATE LABEL",
      description: "End-to-end custom apparel production. We manufacture garments with your branding, tags, and packaging, allowing you to build and scale your own unique clothing brand effortlessly.",
      image: "/images/private-label.png",
      options: [
        {
          tag: "Branding",
          title: "Custom Neck Labels",
          detail: "High-definition woven labels, printed satin, or tagless heat-seal transfers."
        },
        {
          tag: "Retail",
          title: "Branded Hang Tags",
          detail: "Custom cardstock weights, debossed/embossed logos, metallic foil, and custom cords."
        },
        {
          tag: "Unboxing",
          title: "Custom Packaging",
          detail: "Branded biodegradable polybags, frosted zipper pouches, and custom apparel boxes."
        },
        {
          tag: "Details",
          title: "Hem & Sleeve Badges",
          detail: "Folded woven hem tags, molded silicone badges, and genuine or faux leather patches."
        },
        {
          tag: "Compliance",
          title: "Care & Wash Tags",
          detail: "Multi-language legal care labels, fiber composition, and wash instruction ribbons."
        },
        {
          tag: "Trims",
          title: "Custom Hardware",
          detail: "Custom-engraved metal aglets, branded zipper pullers, press studs, and buttons."
        }
      ]
    },
    {
      id: "03",
      title: "RETAIL",
      description: "Ready-to-wear collections for your retail store. Access our catalog of premium blanks and finished garments, curated to meet modern consumer demands and high retail standards.",
      image: "/images/retail.jpg",
      options: [
        {
          tag: "Blanks",
          title: "Premium Heavyweight Cuts",
          detail: "Pre-shrunk 240+ GSM french terry, heavyweight cotton tees, and luxury fleece hoodies."
        },
        {
          tag: "Speed",
          title: "Rapid Replenishment",
          detail: "High-priority reorder workflows to keep bestsellers consistently in stock."
        }
      ]
    },
    {
      id: "04",
      title: "CUSTOMIZATION",
      description: "Tailor every aspect of your garment. From fabric selection and custom dyeing to embroidery, screen printing, and specialized finishes, we bring your specific design vision to life.",
      image: "/images/craft-factory-new.jpg",
      options: [
        {
          tag: "Printing",
          title: "Screen & High-Density Puff",
          detail: "Plastisol, soft-hand water-based, silicone puff, and discharge printing techniques."
        },
        {
          tag: "Artistry",
          title: "3D Embroidery & Appliqué",
          detail: "High-density stitch counts, 3D puff embroidery, chain stitching, and raw-edge patches."
        }
      ]
    },
    {
      id: "05",
      title: "PRINT ON DEMAND",
      description: "Zero-inventory dropshipping and printing. Launch your designs without the risk of holding stock. We print, pack, and fulfill orders directly to your customers with premium quality control.",
      image: "/images/print-on-demand.jpg",
      options: [
        {
          tag: "Fulfillment",
          title: "Zero Inventory Risk",
          detail: "Single-piece print and automated white-label blind dropshipping worldwide."
        },
        {
          tag: "Integration",
          title: "Automated Store Sync",
          detail: "Direct API & store connector for hands-off order processing and tracking updates."
        }
      ]
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
              
              {section.options && section.options.length > 0 && (
                <div className={styles.optionsWrapper}>
                  <div className={styles.optionsHeader}>
                    <span className={styles.optionsBadge}>Specifications & Options</span>
                    <span className={styles.optionsCount}>{section.options.length} Features</span>
                  </div>
                  <div className={styles.optionsGrid}>
                    {section.options.map((opt, optIdx) => (
                      <div 
                        key={optIdx} 
                        className={styles.optionCard}
                        style={{ '--opt-delay': `${optIdx * 70}ms` } as React.CSSProperties}
                      >
                        <div className={styles.optionTag}>{opt.tag}</div>
                        <div className={styles.optionTitle}>{opt.title}</div>
                        <div className={styles.optionDetail}>{opt.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
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
