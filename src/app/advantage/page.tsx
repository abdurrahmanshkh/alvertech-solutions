import { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "The Advantage",
  description: "Leverage Alvertech Solutions' operational excellence, speed-to-market strategies, and lean manufacturing principles to build robust, FDA-compliant pharmaceutical facilities.",
  keywords: ["operational excellence", "speed-to-market", "lean manufacturing", "FDA compliant facilities", "turnkey projects"],
  openGraph: {
    title: "The Advantage | Alvertech Solutions",
    description: "Operational excellence and speed-to-market strategies for pharma manufacturing.",
    url: "https://www.alvertechsolutions.com/advantage",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 634,
        alt: "The Alvertech Advantage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Advantage | Alvertech Solutions",
    description: "Strategic growth and operational excellence in pharmaceutical consulting.",
    images: ["/banner.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
