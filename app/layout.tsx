import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webuildyourbrands.com"),
  title: {
    default: "We Build Your Brands | High-Converting Websites",
    template: "%s | We Build Your Brands"
  },
  description:
    "Strategy, design, and performance-driven development for modern brands that want websites built to convert.",
  openGraph: {
    title: "We Build Your Brands",
    description:
      "High-converting websites for modern brands, built with strategy, design, and performance.",
    url: "https://webuildyourbrands.com",
    siteName: "We Build Your Brands",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={cn("min-h-screen font-sans antialiased")}>
        <Navbar />
        <main>{children}</main>
        <FooterCTA />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
