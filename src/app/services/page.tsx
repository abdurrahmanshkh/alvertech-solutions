import { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive pharmaceutical consulting services including HVAC layout, cleanroom design, USFDA/EMA compliance, tech transfer, and formulation development.",
  keywords: ["HVAC layout", "cleanroom design", "USFDA compliance", "EMA compliance", "technology transfer", "formulation development", "sterile manufacturing setup"],
  openGraph: {
    title: "Services | Alvertech Solutions",
    description: "Expert pharmaceutical consulting: HVAC, Cleanroom Design, and USFDA Compliance.",
    url: "https://www.alvertechsolutions.com/services",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 634,
        alt: "Alvertech Solutions Pharmaceutical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Alvertech Solutions",
    description: "End-to-end pharmaceutical consultancy and facility design.",
    images: ["/banner.png"],
  },
};

export default function Page() {
  return <ClientPage />;
}
