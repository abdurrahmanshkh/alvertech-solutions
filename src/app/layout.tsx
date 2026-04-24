import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alvertech Solutions | Pharmaceutical Consultancy",
    template: "%s | Alvertech Solutions",
  },
  description:
    "Transforming Pharmaceutical Visions into Operational Realities. End-to-end pharmaceutical consultancy for facility design, manufacturing operations, and product development.",
  keywords: [
    "pharmaceutical consultancy",
    "facility design",
    "sterile manufacturing",
    "FDA compliance",
    "cGMP",
    "pharmaceutical operations",
    "drug formulation",
    "technology transfer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
