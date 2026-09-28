import Image from "next/image";
import styles from "./OutOfStockOverlay.module.css";

interface OutOfStockOverlayProps {
  size?: "card" | "detail" | "banner";
  className?: string;
}

export function OutOfStockOverlay({ size = "card", className = "" }: OutOfStockOverlayProps) {
  return (
    <div className={`${styles.overlay} ${styles[size]} ${className}`} aria-label="Out of Stock">
      <div className={styles.signWrapper}>
        <Image
          src="/images/oot.webp"
          alt="Out of Stock"
          width={400}
          height={223}
          priority
          className={styles.signImage}
        />
      </div>
    </div>
  );
}
