import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const displayFont = localFont({
  src: "../../public/fonts/Francy.ttf",
  variable: "--font-display",
  display: "swap",
});

const headingFont = localFont({
  src: "../../public/fonts/Francy.ttf",
  variable: "--font-heading",
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

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <CartProvider>
          <CustomCursor />
          <Header />
          <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
