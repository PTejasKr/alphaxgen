"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./OfferingsSection.module.css";
import { Reveal } from "@/components/ui/Reveal";
import { getCategoryBannerInfo } from "@/data/products";
import { OutOfStockOverlay } from "@/components/ui/OutOfStockOverlay";

const offeringsData = [
  {
    id: "regular",
    title: "Regular Collection",
    subtitle: "UN[Everyday Essentials]HYPE",
    badge: "Premium Basics",
    description: "Versatile, breathable, and built for daily wear. Timeless essentials.",
    link: "/shop?category=Regular Collection",
    defaultImage: "/images/regular-collection.png"
  },
  {
    id: "oversized",
    title: "Oversized Collection",
    subtitle: "UN[Streetwear Comfort]HYPE",
    badge: "Street Ready",
    description: "Relaxed fit, heavyweight fabric, maximum comfort and style.",
    link: "/shop?category=Oversized Collection",
    defaultImage: "/images/oversized-collection.png"
  },
  {
    id: "polo",
    title: "Polo Collection",
    subtitle: "UN[Smart Casual]HYPE",
    badge: "Classic Elegance",
    description: "Refined collars and structured fits for any occasion or meeting.",
    link: "/shop?category=Polo Collection",
    defaultImage: "/images/polo-collection.png"
  },
  {
    id: "women",
    title: "Women's Collection",
    subtitle: "UN[Feminine Fit]HYPE",
    badge: "Tailored Comfort",
    description: "Crop tops and tees designed specifically for the modern woman.",
    link: "/shop?category=Women's Collection",
    defaultImage: "/images/womens-collection.png"
  }
];

export function OfferingsSection() {
  return (
    <section className={styles.offerings}>
      <Reveal>
        <div className={styles.sectionHeader}>
          <div>
            <div className="text-small">03 // FEATURED</div>
            <h2 className="display-lg">OUR OFFERINGS</h2>
          </div>
          <Link href="/shop" className={styles.viewAllButton}>View All</Link>
        </div>
      </Reveal>

      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {offeringsData.map((offering) => {
            const bannerInfo = getCategoryBannerInfo(offering.id, offering.defaultImage);
            return (
              <Link href={offering.link} key={offering.id} className={styles.card}>
                <div className={`${styles.imageWrapper} ${bannerInfo.isOutOfStock ? styles.blurredImage : ''}`}>
                  <Image 
                    src={bannerInfo.image} 
                    alt={offering.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {bannerInfo.isOutOfStock && <OutOfStockOverlay size="banner" />}
                <div className={styles.overlayText}>
                  <div className={styles.textLeft}>
                    <h3 className={styles.title}>{offering.title}</h3>
                    <div className={styles.subtitle}>
                      {bannerInfo.isOutOfStock ? "Out of Stock" : offering.badge}
                    </div>
                  </div>
                  <div className={styles.textRight}>
                    <span className={styles.seeRoutine}>Explore &rarr;</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

