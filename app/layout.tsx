import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PJD Custom Tailoring & Alterations | New York",
    template: "%s | PJD Custom Tailoring",
  },
  description:
    "Premium custom tailoring and alterations in New York City. Expert craftsmanship for suits, dresses, wedding outfits, and more. Located at 260 W 36th St, NYC.",
  keywords: [
    "custom tailoring NYC",
    "alterations New York",
    "suit tailoring Manhattan",
    "wedding dress alterations",
    "PJD tailoring",
  ],
  openGraph: {
    title: "PJD Custom Tailoring & Alterations | New York",
    description:
      "Premium custom tailoring and alterations in New York City. Expert craftsmanship, immaculate quality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
