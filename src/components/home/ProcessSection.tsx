"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
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

export function ProcessSection({ compactBottom = false }: { compactBottom?: boolean }) {
  return (
    <section className={`${styles.processSection} ${compactBottom ? styles.compactBottom : ''}`}>
      <Reveal>
        <div className={styles.header}>
          <div className="text-small">The Process</div>
          <h2 className="heading-1">Our Sales Process</h2>
          <p className={styles.subtitle}>
            Experience our transparent and efficient 6-step process designed for bulk buyers and distributors.
          </p>
        </div>
      </Reveal>

      <div className={styles.timelineContainer}>
        {/* Start Line */}
        <div className={styles.timelineStart}></div>
        
        {steps.map((step, index) => {
          // Odd in 1-index is even in 0-index.
          const isOdd = (index + 1) % 2 !== 0; 
          
          return (
            <div key={step.id} className={`${styles.step} ${isOdd ? styles.stepOdd : styles.stepEven}`}>
              <div className={styles.curve}></div>
              
              <Reveal delay={index * 100} className={styles.revealWrapper}>
                <div className={styles.circle}>
                  {step.icon}
                  <span className={styles.stepNumber}>{step.id}</span>
                </div>
                
                <div className={styles.contentBox}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </Reveal>
            </div>
          );
        })}

        {/* End Line */}
        <div className={styles.timelineEnd}></div>
      </div>
    </section>
  );
}
