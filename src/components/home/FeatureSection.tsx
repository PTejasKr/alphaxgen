"use client";

import Link from "next/link";
import styles from "./FeatureSection.module.css";
import { Reveal } from "@/components/ui/Reveal";

import Image from "next/image";

interface FeatureSectionProps {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  videoSrc?: string;
  imageSrc?: string;
  reversed?: boolean;
}

export function FeatureSection({
  index,
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  videoSrc,
  imageSrc,
  reversed = false,
}: FeatureSectionProps) {
  const contentNode = (
    <div className={styles.featureContent}>
      <div className="text-small">{index} // {subtitle}</div>
      <h2 className={title.length > 20 ? "heading-1" : "display-lg"}>{title}</h2>
      <p>{description}</p>
      <Link href={buttonHref} className="brutal-button">
        {buttonText}
      </Link>
    </div>
  );

  const mediaNode = (
    <div className={styles.featureImagePlaceholder} style={{ overflow: 'hidden', position: 'relative' }}>
      {videoSrc && (
        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />
      )}
      {imageSrc && (
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      )}
    </div>
  );

  return (
    <section className={styles.feature}>
      <div className={styles.featureGrid}>
        <Reveal direction={reversed ? "left" : "right"}>
          {reversed ? contentNode : mediaNode}
        </Reveal>
        <Reveal direction={reversed ? "right" : "left"} delay={200}>
          {reversed ? mediaNode : contentNode}
        </Reveal>
      </div>
    </section>
  );
}
