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
  authors: [{ name: "Alvertech Solutions" }],
  creator: "Alvertech Solutions",
  publisher: "Alvertech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.alvertechsolutions.com",
    siteName: "Alvertech Solutions",
    title: "Alvertech Solutions | Pharmaceutical Consultancy & Facility Design",
    description: "Transforming Pharmaceutical Visions into Operational Realities. Expert B2B pharmaceutical consultancy.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 634,
        alt: "Alvertech Solutions - Engineering Excellence",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvertech Solutions | Pharmaceutical Consultancy & Facility Design",
    description: "Transforming Pharmaceutical Visions into Operational Realities. Expert B2B pharmaceutical consultancy.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
