import React from "react";
import Link from "next/link";
import { Check, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
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
  const comparisonMatrix = [
    { feature: "OPD & Token Queue Management", starter: true, pro: true, enterprise: true },
    { feature: "Doctor Clinical EMR & E-Prescriptions", starter: true, pro: true, enterprise: true },
    { feature: "Pharmacy POS & FEFO Batch Expiry", starter: true, pro: true, enterprise: true },
    { feature: "Diagnostic Billing & Basic Reports", starter: true, pro: true, enterprise: true },
    { feature: "IPD Bed Census & Ward Management", starter: false, pro: true, enterprise: true },
    { feature: "Nursing Station eMAR & Vitals Flowsheet", starter: false, pro: true, enterprise: true },
    { feature: "Emergency & Trauma Triage Workflow", starter: false, pro: true, enterprise: true },
    { feature: "LIS Bi-Directional Analyzer Interfacing", starter: false, pro: true, enterprise: true },
    { feature: "Radiology & DICOM / PACS Worklist Sync", starter: false, pro: true, enterprise: true },
    { feature: "Insurance TPA Pre-Auth & Claims Engine", starter: false, pro: true, enterprise: true },
    { feature: "Doctor Revenue Share & Commission Matrix", starter: false, pro: true, enterprise: true },
    { feature: "Multi-Branch Centralized Hospital Master", starter: false, pro: false, enterprise: true },
    { feature: "Custom HL7 / FHIR Enterprise Integrations", starter: false, pro: false, enterprise: true },
    { feature: "Dedicated Cloud Instance & Custom SLA", starter: false, pro: false, enterprise: true },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Flexible Plans"
          title="Predictable Investment for"
          titleHighlight="Growing Hospitals."
          description="Choose the ideal plan for your hospital scale. Transparent capabilities, zero hidden charges, and continuous product updates."
        />

        <PricingSection showHeader={false} />
      </section>

      {/* 2. Detailed Capability Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Detailed Plan Capability Matrix
          </h3>
          <p className="text-sm text-slate-500 mt-2">
            Compare features across our Clinic, Hospital, and Enterprise configurations.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                  <th className="p-4 sm:p-5 font-bold">Feature / Module</th>
                  <th className="p-4 sm:p-5 text-center font-bold">Starter</th>
                  <th className="p-4 sm:p-5 text-center font-bold text-[#17a2b8] dark:text-cyan-400">
                    Advanced
                  </th>
                  <th className="p-4 sm:p-5 text-center font-bold">Gold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-700 dark:text-slate-300">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {row.starter ? (
                        <Check className="w-5 h-5 text-[#17a2b8] mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-cyan-50/40 dark:bg-cyan-950/20">
                      {row.pro ? (
                        <Check className="w-5 h-5 text-[#17a2b8] mx-auto font-bold" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {row.enterprise ? (
                        <Check className="w-5 h-5 text-[#17a2b8] mx-auto font-bold" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <FAQSection />

      {/* 4. CTA */}
      <CTASection />
    </div>
  );
}
