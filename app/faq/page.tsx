import React from "react";
import { FAQSection } from "@/components/home/FAQSection";
import { createMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export const metadata = createMetadata({
  title: "Frequently Asked Questions (FAQ) | Medsky HMS Software",
  description:
    "Common questions and answers regarding Medsky Hospital Management Software, Clinic CMS, Laboratory LMS/LIS, Pharmacy POS, pricing, onboarding, and compliance.",
  path: "/faq",
  keywords: [
    "Medsky HMS FAQ",
    "Hospital Software Questions",
    "Clinic Software FAQs",
    "Diagnostic Lab Software Support",
    "Hospital ERP Implementation Questions",
  ],
});

export default function FAQPage() {
  return (
    <div className="pt-8 pb-12">
      <FAQSection />
    </div>
  );
}
