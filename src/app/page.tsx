"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products?featured=true&limit=4')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data));
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <HeroSection />

      <FeatureSection 
        index="02"
        title="About Our Business"
        subtitle="Who We Are"
        description="We are a premier B2B apparel sourcing platform connecting businesses with top-tier garment manufacturers. From raw material selection to finished products, our tailored supply chain solutions empower retail brands, wholesalers, and distributors to scale efficiently and reliably."
        buttonText="Learn More"
        buttonHref="/about"
        videoSrc="/videos/about-business.mp4"
        compactBottom={true}
      />

      <MarqueeSection text="Built to last &bull; Connecting markets &bull; Creating opportunities &bull; Crafted for you" />

      <ProductsSection products={featuredProducts} compactTop={true} />

      <ProcessSection />

      <FeatureSection 
        index="04"
        title="Environmental Impact"
        subtitle="Core Values"
        description="We are committed to responsible sourcing and sustainable manufacturing. By partnering with ethical suppliers and optimizing our supply chain, we deliver high-quality apparel while minimizing our collective carbon footprint. Better for your business, better for the planet."
        buttonText="Read Our Story"
        buttonHref="/about"
        imageSrc="/images/environmental-impact.jpg"
        reversed={true}
      />

      <NewsletterSection />
    </div>
  );
}
