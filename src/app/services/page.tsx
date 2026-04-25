import { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive pharmaceutical consulting services including HVAC layout, cleanroom design, USFDA/EMA compliance, tech transfer, and formulation development.",
  keywords: ["HVAC layout", "cleanroom design", "USFDA compliance", "EMA compliance", "technology transfer", "formulation development", "sterile manufacturing setup"],
};

export default function Page() {
  return <ClientPage />;
}
