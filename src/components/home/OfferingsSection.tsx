"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./OfferingsSection.module.css";
import { Reveal } from "@/components/ui/Reveal";

const offeringsData = [
  {
    id: "regular",
    title: "Regular Collection",
    subtitle: "UN[Everyday Essentials]HYPE",
    badge: "Premium Basics",
    description: "Versatile, breathable, and built for daily wear. Timeless essentials.",
    steps: [
      { label: "Step 1", value: "Select\nStyle" },
      { label: "Step 2", value: "Choose\nColor" },
      { label: "Step 3", value: "Perfect\nFit" }
    ],
    price: "From ?65",
    link: "/shop?category=Regular",
    image: "/images/hero-tshirt.jpg"
  },
  {
    id: "oversized",
    title: "Oversized Collection",
    subtitle: "UN[Streetwear Comfort]HYPE",
    badge: "Street Ready",
    description: "Relaxed fit, heavyweight fabric, maximum comfort and style.",
    steps: [
      { label: "Step 1", value: "Drop\nShoulder" },
      { label: "Step 2", value: "Heavy\nWeight" },
      { label: "Step 3", value: "Relaxed\nLook" }
    ],
    price: "From ?206",
    link: "/shop?category=Oversized",
    image: "/images/environmental-impact.jpg"
  },
  {
    id: "polo",
    title: "Polo Collection",
    subtitle: "UN[Smart Casual]HYPE",
    badge: "Classic Elegance",
    description: "Refined collars and structured fits for any occasion or meeting.",
    steps: [
      { label: "Step 1", value: "Matty\nFabric" },
      { label: "Step 2", value: "Tailored\nFit" },
      { label: "Step 3", value: "Smart\nCasual" }
    ],
    price: "From ?119",
    link: "/shop?category=Polo",
    image: "/images/brown-material.jpg"
  },
  {
    id: "women",
    title: "Women's Collection",
    subtitle: "UN[Feminine Fit]HYPE",
    badge: "Tailored Comfort",
    description: "Crop tops and tees designed specifically for the modern woman.",
    steps: [
      { label: "Step 1", value: "Crop\nLength" },
      { label: "Step 2", value: "Soft\nCotton" },
      { label: "Step 3", value: "Perfect\nDrape" }
    ],
    price: "From ?179",
    link: "/shop?category=Women",
    image: "/images/materials.jpg"
  }
];

export function OfferingsSection() {
  return (
    <section className={styles.offerings}>
      <Reveal>
        <div className={styles.sectionHeader}>
          <div>
            <div className="text-small">03 // FEATURED</div>
            <h2 className="heading-1">OUR OFFERINGS</h2>
          </div>
          <Link href="/shop" className={styles.viewAllButton}>View All</Link>
        </div>
      </Reveal>

      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {offeringsData.map((offering) => (
            <div key={offering.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={offering.image} 
                  alt={offering.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.subtitle}>{offering.subtitle}</div>
                <h3 className={styles.title}>{offering.title}</h3>
                <div className={styles.badge}>{offering.badge}</div>
                <p className={styles.description}>{offering.description}</p>
                
                <div className={styles.bottomSection}>
                  <Link href={offering.link} className={styles.arrowButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
