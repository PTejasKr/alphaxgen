import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const francyFont = localFont({
  src: "../../public/fonts/Francy.ttf",
  variable: "--font-francy",
  display: "swap",
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "alphaxgen",
  description: "Turning threads into brand stories.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${francyFont.variable} ${bodyFont.variable}`}>
      <body style={{ '--font-display': 'var(--font-francy)', '--font-heading': 'var(--font-francy)' } as React.CSSProperties}>
        <CartProvider>
          <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
            <CustomCursor />
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
