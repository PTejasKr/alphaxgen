"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./CustomCursor.module.css";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches) return;
    
    // Fallback detection via touch events
    let isTouch = false;
    const handleTouchStart = () => {
      isTouch = true;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
        cursorRef.current.style.display = "none";
      }
    };

    const updatePosition = (e: MouseEvent) => {
      if (isTouch) return;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        if (cursorRef.current.style.opacity !== "1") {
          cursorRef.current.style.opacity = "1";
        }
      }
    };

    const updateHoverState = (e: MouseEvent) => {
      if (isTouch) return;
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button');
      
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true, once: true });
    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mouseover", updateHoverState, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`${styles.cursor} ${isHovering ? styles.cursorHover : ""}`}
      style={{ opacity: 0 }}
    >
      <div className={styles.dot} />
    </div>
  );
}
