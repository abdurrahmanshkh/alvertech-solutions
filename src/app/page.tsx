import { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Home",
  description: "Alvertech Solutions is a premier B2B pharmaceutical consultancy specializing in Greenfield and Brownfield projects, sterile injectables, and comprehensive facility design.",
  openGraph: {
    title: "Home | Alvertech Solutions",
    description: "Alvertech Solutions is a premier B2B pharmaceutical consultancy specializing in Greenfield and Brownfield projects, sterile injectables, and comprehensive facility design.",
    url: "https://alvertechsolutions.com",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 634,
        alt: "Alvertech Solutions Home",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Alvertech Solutions",
    description: "Alvertech Solutions is a premier B2B pharmaceutical consultancy specializing in Greenfield and Brownfield projects, sterile injectables, and comprehensive facility design.",
    images: ["/banner.png"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alvertech Solutions",
    url: "https://alvertechsolutions.com",
    logo: "https://alvertechsolutions.com/logo.png",
    description: "Pharmaceutical Consultancy specializing in Greenfield/Brownfield projects and sterile manufacturing.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 03, Sector 35-I",
      addressLocality: "Kharghar, Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9833392190",
      contactType: "customer service",
      email: "alvertechsolutions@gmail.com"
    }
  };

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
