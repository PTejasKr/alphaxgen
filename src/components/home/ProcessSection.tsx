"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    id: "01",
    title: "Enquire",
    desc: "Connect with our team to start your journey.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Select Products",
    desc: "Choose your premium apparel blend.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"></path>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Confirm Order",
    desc: "Confirm precise quantity & sizing details.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Production",
    desc: "Manufacturing & comprehensive QC.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Delivery",
    desc: "Fast & reliable shipping to your door.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
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
            Experience our transparent and efficient 5-step process designed for bulk buyers and distributors.
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
