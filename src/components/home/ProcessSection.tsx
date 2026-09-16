"use client";

import React, { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    id: "01",
    title: "Inquiry",
    desc: "Tell us your needs",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Sample",
    desc: "Samples dispatched",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"></path>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Finalize",
    desc: "Specs confirmed",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Payment",
    desc: "Secure payment",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <line x1="2" y1="10" x2="22" y2="10"></line>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Dispatch",
    desc: "Production & shipping",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Support",
    desc: "Dedicated aftercare",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    ),
  }
];

const premiumWarmColors = [
  { bg: "#2C1E16", text: "#FFFFFF" }, // Espresso
  { bg: "#4A3324", text: "#FFFFFF" }, // Mocha
  { bg: "#7A5C43", text: "#FFFFFF" }, // Caramel
  { bg: "#B59A7F", text: "#1A1A1A" }, // Sand
  { bg: "#D9C8B6", text: "#1A1A1A" }, // Oatmeal
  { bg: "#F5EFEB", text: "#1A1A1A" }, // Cream
];

const AnimatedStackedCard = ({ step, index, totalSteps, scrollYProgress }: { step: any, index: number, totalSteps: number, scrollYProgress: any }) => {
  const color = premiumWarmColors[index % premiumWarmColors.length];

  // Map scroll progress to each card.
  // Card 0 is always at y=0. Card 1 animates 0.0->0.2. Card 2 animates 0.2->0.4, etc.
  const start = index === 0 ? 0 : (index - 1) * 0.2;
  const end = index === 0 ? 0 : start + 0.2;
  
  // Animate from 100vh (offscreen bottom) to 0vh (its natural position in the stack)
  const y = useTransform(scrollYProgress, [start, end], ["100vh", "0vh"]);
  const animatedY = index === 0 ? "0vh" : y;

  return (
    <motion.div 
      className={styles.mobileStepCard}
      style={{ 
        y: animatedY,
        zIndex: index + 1 
      }}
    >
      <div 
        className={styles.mobileCardContent}
        style={{ 
          backgroundColor: color.bg, 
          color: color.text,
          borderColor: color.bg 
        }}
      >
        <div className={styles.stepProgress} style={{ color: color.text, opacity: 0.8 }}>{step.id} / 0{totalSteps}</div>
        <div className={styles.stepIconWrap} style={{ backgroundColor: color.text, color: color.bg }}>
          <div style={{ color: color.bg, display: 'flex' }}>
            {React.cloneElement(step.icon, { stroke: "currentColor" })}
          </div>
        </div>
        <div className={styles.cardText}>
          <h3 className={styles.stepTitle} style={{ color: color.text }}>{step.title}</h3>
          <p className={styles.stepDesc} style={{ opacity: 0.9 }}>{step.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const StackedScroll = ({ steps }: { steps: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className={styles.scrollSection}>
      <div className={styles.stickyContainer}>
        <div className={styles.timelineContainer}>
          {steps.map((step, index) => (
            <AnimatedStackedCard 
              key={step.id} 
              step={step} 
              index={index} 
              totalSteps={steps.length} 
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export function ProcessSection({ compactBottom = false }: { compactBottom?: boolean }) {
  return (
    <section className={`${styles.processSection} ${compactBottom ? styles.compactBottom : ''}`}>
      <Reveal>
        <div className={styles.header}>
          <div className="text-small">The Process</div>
          <h2 className="display-lg">Our Sales Process</h2>
          <p className={styles.subtitle}>
            Experience our transparent and efficient 6-step process designed for bulk buyers and distributors.
          </p>
        </div>
      </Reveal>

      <StackedScroll steps={steps} />
    </section>
  );
}
