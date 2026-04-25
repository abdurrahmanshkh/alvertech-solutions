import { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Alvertech Solutions in Kharghar, Navi Mumbai for world-class pharmaceutical consulting, facility design, and operational excellence.",
  keywords: ["contact Alvertech Solutions", "pharmaceutical consulting Mumbai", "Kharghar Navi Mumbai"],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alvertech Solutions",
    image: "https://www.alvertechsolutions.com/logo.png",
    url: "https://www.alvertechsolutions.com/contact",
    telephone: "+91-9833392190",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 03, Sector 35-I",
      addressLocality: "Kharghar, Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.0727309,
      longitude: 73.0724981
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "18:00"
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
