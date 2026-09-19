import React from "react";
import { PricingSection } from "@/components/home/PricingSection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Hospital, Clinic (CMS), Lab (LMS) & Pharmacy (PMS) Software Pricing (INR ₹)",
  description:
    "Transparent yearly subscription packages for Medsky Hospital Management Software (HMS), Clinic Management System (CMS), Diagnostic Lab Software (LMS), and Pharmacy POS (PMS) with zero hidden fees.",
  path: "/pricing",
  keywords: [
    "Hospital Software Pricing",
    "HMS Software Price India",
    "Clinic Management Software Cost",
    "Diagnostic Lab Software Price",
    "Pharmacy Billing Software Price",
    "Best Healthcare Software Pricing INR",
  ],
});

export default function PricingPage() {
  return (
    <div className="pt-8 sm:pt-14 pb-12 sm:pb-16">
      <PricingSection showHeader={true} />
    </div>
  );
}
