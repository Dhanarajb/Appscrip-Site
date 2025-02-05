import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover Our Products - Premium E-commerce Store",
  description:
    "Explore our curated collection of high-quality products. Find the perfect items that match your style and needs.",
  openGraph: {
    title: "Discover Our Products - Premium E-commerce Store",
    description: "Explore our curated collection of high-quality products",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
