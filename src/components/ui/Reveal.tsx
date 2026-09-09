"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({ children, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "up": return styles.hiddenUp;
      case "down": return styles.hiddenDown;
      case "left": return styles.hiddenLeft;
      case "right": return styles.hiddenRight;
      default: return styles.hiddenNone;
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.base} ${!isVisible ? getDirectionClass() : styles.visible}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
