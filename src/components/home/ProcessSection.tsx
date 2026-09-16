"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    id: "01",
    title: "Brand Brief",
    desc: "Understanding your vision, target audience, and collection requirements.",
  },
  {
    id: "02",
    title: "Design & Research",
    desc: "Trend analysis, mood boards, and design development tailored to your brand.",
  },
  {
    id: "03",
    title: "Fabric Sourcing",
    desc: "Curating the perfect fabrics from our network of premium suppliers.",
  },
  {
    id: "04",
    title: "Sampling",
    desc: "Creating prototypes with multiple iterations until perfect fit and finish.",
  },
  {
    id: "05",
    title: "Production",
    desc: "Bulk manufacturing with strict quality control at every stage.",
  },
  {
    id: "06",
    title: "Quality Check",
    desc: "Rigorous multi-point inspection ensuring export-ready standards.",
  }
];

const ProcessStep = ({ step }: { step: { id: string; title: string; desc: string } }) => {
  return (
    <motion.div 
      className={styles.stepWrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10% 0px -40% 0px" }}
      variants={{
        hidden: { opacity: 0.5 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={styles.stepNumber}
        variants={{
          hidden: { 
            backgroundColor: "transparent", 
            color: "var(--ink)",
            borderColor: "var(--ink)"
          },
          visible: { 
            backgroundColor: "var(--ink)", 
            color: "var(--paper)",
            borderColor: "var(--ink)"
          }
        }}
        transition={{ duration: 0.3 }}
      >
        {step.id}
      </motion.div>
      <div className={styles.stepContent}>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </motion.div>
  );
};

export function ProcessSection({ compactBottom = false }: { compactBottom?: boolean }) {
  return (
    <section className={`${styles.processSection} ${compactBottom ? styles.compactBottom : ''}`}>
      <Reveal>
        <div className={styles.header}>
          <div className="text-small">How We Work</div>
          <h2 className="display-lg">Our Process</h2>
          <p className={styles.subtitle}>
            A streamlined journey from concept to collection.
          </p>
        </div>
      </Reveal>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        {steps.map((step) => (
          <ProcessStep key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
