import type { Metadata } from "next";
import ServicesListingPage from "@/components/ServicesListingPage";

export const metadata: Metadata = {
  title: "Services | Complete Turnkey Services | Spacelyt",
  description:
    "Planning, architecture, construction, interiors, exteriors, and full turnkey delivery coordinated under one Spacelyt system.",
  openGraph: {
    title: "Services | Complete Turnkey Services | Spacelyt",
    description:
      "Planning, architecture, construction, interiors, exteriors, and full turnkey delivery coordinated under one Spacelyt system.",
    url: "/services"
  }
};

export default function ServicesPage() {
  return <ServicesListingPage />;
}
