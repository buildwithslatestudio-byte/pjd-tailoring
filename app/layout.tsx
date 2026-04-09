import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
