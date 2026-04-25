import { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "The Advantage",
  description: "Leverage Alvertech Solutions' operational excellence, speed-to-market strategies, and lean manufacturing principles to build robust, FDA-compliant pharmaceutical facilities.",
  keywords: ["operational excellence", "speed-to-market", "lean manufacturing", "FDA compliant facilities", "turnkey projects"],
};

export default function Page() {
  return <ClientPage />;
}
