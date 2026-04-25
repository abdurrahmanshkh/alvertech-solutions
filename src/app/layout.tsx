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
  metadataBase: new URL('https://www.alvertechsolutions.com'),
  title: {
    default: "Alvertech Solutions | Pharmaceutical Consultancy & Facility Design",
    template: "%s | Alvertech Solutions",
  },
  description:
    "Transforming Pharmaceutical Visions into Operational Realities. End-to-end B2B pharmaceutical consultancy specializing in sterile manufacturing, FDA compliance, facility design, and lean manufacturing operations.",
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
  openGraph: {
    type: "website",
    siteName: "Alvertech Solutions",
    title: "Alvertech Solutions | Pharmaceutical Consultancy & Facility Design",
    description: "End-to-end B2B pharmaceutical consultancy specializing in sterile manufacturing, FDA compliance, facility design, and lean manufacturing operations.",
    url: "https://www.alvertechsolutions.com",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Alvertech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvertech Solutions | Pharmaceutical Consultancy & Facility Design",
    description: "End-to-end B2B pharmaceutical consultancy specializing in sterile manufacturing, FDA compliance, facility design, and lean manufacturing operations.",
    images: ["/banner.png"],
  },
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
