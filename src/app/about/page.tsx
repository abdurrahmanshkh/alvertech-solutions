import { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "About Us & Leadership",
  description: "With nearly a century of combined experience, founders Manoj Patel, Gurudev Suryavanshi, and Inamdar Bhaisaheb lead Alvertech Solutions in delivering world-class pharmaceutical engineering and consulting.",
  keywords: ["Manoj Patel", "Gurudev Suryavanshi", "Inamdar Bhaisaheb", "pharmaceutical experts", "pharmaceutical engineering"],
  openGraph: {
    title: "About Us & Leadership | Alvertech Solutions",
    description: "With nearly a century of combined experience, our leadership delivers world-class pharmaceutical engineering.",
    url: "https://alvertechsolutions.com/about",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 634,
        alt: "Alvertech Solutions Leadership Team",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Leadership | Alvertech Solutions",
    description: "Expert leadership in pharmaceutical engineering and consultancy.",
    images: ["/banner.png"],
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Manoj Patel",
      jobTitle: "Founder & Technical Director",
      worksFor: {
        "@type": "Organization",
        name: "Alvertech Solutions"
      },
      sameAs: "https://www.linkedin.com/in/manoj-patel-885a3b61/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gurudev Suryavanshi",
      jobTitle: "Founder & Operations Director",
      worksFor: {
        "@type": "Organization",
        name: "Alvertech Solutions"
      },
      sameAs: "https://www.linkedin.com/in/gurudev-suryavanshi-94149321/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Inamdar Bhaisaheb",
      jobTitle: "Founder & Strategy Director",
      worksFor: {
        "@type": "Organization",
        name: "Alvertech Solutions"
      },
      sameAs: "https://www.linkedin.com/in/bhaisaheb-inamdar-711b25402/"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientPage />
    </>
  );
}
