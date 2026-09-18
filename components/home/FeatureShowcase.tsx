import React from "react";
import Link from "next/link";
import {
  UserCheck,
  Bed,
  Pill,
  FlaskConical,
  Receipt,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";

export function FeatureShowcase() {
  const deepDives = [
    {
      id: "opd",
      badge: "Outpatient Care",
      title: "Deliver Faster Outpatient Care",
      tagline: "Automate token queues, doctor consults, and digital prescriptions.",
      description:
        "Transform crowded outpatient clinics with dynamic queue screens, priority triage, standard clinical templates, and automated SMS reminders.",
      features: [
        "Instant patient check-in with UHID barcode scanning",
        "Multi-screen TV token caller for waiting areas",
        "Physician consultation suite with ICD-10 medical coding",
        "Automated route to pharmacy, diagnostics, and cashier",
      ],
      link: "/modules/opd",
      stats: { value: "45%", label: "Wait Time Reduction" },
      icon: UserCheck,
      previewBadge: "Active Queue: Room 102",
      previewItems: ["Token #041 • Calling", "Token #042 • Vitals Recorded", "Token #043 • In Waiting Area"],
    },
    {
      id: "ipd",
      badge: "Inpatient & Wards",
      title: "Manage Inpatient Workflows with Confidence",
      tagline: "Total visibility into admissions, bed occupancy, eMAR, and discharges.",
      description:
        "Provide nursing staff and ward physicians with real-time bed census maps, digital medication administration records (eMAR), and multi-department clearance checklists.",
      features: [
        "Color-coded bed census map (ICU, Private, Isolation)",
        "Scheduled medication administration record (eMAR) with barcode verification",
        "Doctor ward rounds, clinical progression notes & fluid balance",
        "Digital discharge checklist with 1-click multi-department sign-off",
      ],
      link: "/modules/ipd",
      stats: { value: "60 Min", label: "Average Discharge Process" },
      icon: Bed,
      previewBadge: "Ward Census: 88.4% Occupied",
      previewItems: ["Bed 301 • Dr. Mitchell (Active)", "Bed 302 • Discharge Cleared", "Bed 303 • ICU Step-down"],
    },
    {
      id: "pharmacy",
      badge: "Pharmacy & Inventory",
      title: "Make Hospital Pharmacy Simpler & Safer",
      tagline: "Barcode dispensing, FEFO batch expiry alerts, and integrated POS billing.",
      description:
        "Prevent medication dispensing errors with 2-step barcode verification. Automatically dispense first-expiring batches (FEFO) and maintain optimal stock levels across all sub-stores.",
      features: [
        "Direct e-prescription intake from physician consoles",
        "First-Expired, First-Out (FEFO) dispensing optimization",
        "Near-expiry 30/60/90 day alerts to minimize inventory write-offs",
        "Point-of-Sale billing with cash, card, and IPD credit charging",
      ],
      link: "/modules/pharmacy",
      stats: { value: "0.00%", label: "Dispensing Error Rate" },
      icon: Pill,
      previewBadge: "FEFO Stock Alert",
      previewItems: ["Atorvastatin 20mg • 1,420 Units", "Amoxicillin 625mg • Near Expiry Priority", "Insulin Glargine • Cold Storage Verified"],
    },
    {
      id: "laboratory",
      badge: "Diagnostics LIS",
      title: "Connect Diagnostics to Direct Patient Care",
      tagline: "Sample barcoding, bi-directional analyzer interfacing, and signed reports.",
      description:
        "Streamline high-volume pathology and diagnostic testing. Directly interface with laboratory machines over ASTM/HL7 and distribute digital reports with abnormal value flags.",
      features: [
        "Sample tube barcode labeling linked to patient UHID",
        "Bi-directional analyzer interfacing without manual transcription",
        "Instant critical value alerts sent to consulting doctors",
        "Patient report delivery via WhatsApp, SMS link, and portal",
      ],
      link: "/modules/laboratory",
      stats: { value: "70%", label: "Faster Report Turnaround" },
      icon: FlaskConical,
      previewBadge: "LIS Machine Sync: Active",
      previewItems: ["Complete Blood Count (CBC) • Transmitted", "Lipid Profile • Verified by Pathologist", "Troponin I Stat • Critical Alert Broadcast"],
    },
    {
      id: "billing",
      badge: "Revenue & Insurance",
      title: "Streamline Hospital Billing & Cashless Claims",
      tagline: "Consolidated patient invoices, TPA pre-authorization, and audit-ready reports.",
      description:
        "Capture every billable service rendered across wards, surgeries, labs, and pharmacies. Automate cashless insurance co-pays and eliminate revenue leakage.",
      features: [
        "Continuous IPD running bill compilation with deposit tracking",
        "Cashless insurance TPA pre-auth, claim submission, and copay split",
        "Doctor surgery commission and procedure revenue sharing matrix",
        "Shift-closing cash registers with multi-level refund approvals",
      ],
      link: "/modules/billing",
      stats: { value: "100%", label: "Audit-Ready Financials" },
      icon: Receipt,
      previewBadge: "Revenue Reconciliation",
      previewItems: ["OPD Collections • $14,200", "TPA Approved Claims • $28,650", "Discounts & Refunds • Manager Authorized"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-900/40">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-24">
        <SectionHeader
          badge="Core Departmental Deep Dive"
          title="Engineered for the Demands of"
          titleHighlight="Modern Healthcare."
          description="Explore how Medsky HMS connects every key hospital department into an integrated, frictionless patient care workflow."
        />

        {deepDives.map((item, index) => {
          const isReversed = index % 2 === 1;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side (6 cols) */}
              <div className={`lg:col-span-6 space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="inline-flex items-center gap-2">
                  <Badge variant="teal" size="sm">
                    {item.badge}
                  </Badge>
                  <span className="text-xs font-semibold text-slate-400">
                    {item.stats.value} {item.stats.label}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {item.title}
                </h3>

                <p className="text-base text-teal-600 dark:text-teal-400 font-medium">
                  {item.tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="md"
                    href={item.link}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="border-teal-500/30 hover:bg-teal-50 dark:hover:bg-teal-950/40"
                  >
                    Learn More About {item.badge}
                  </Button>
                </div>
              </div>

              {/* Visual Card Side (6 cols) */}
              <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden group hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h4>
                        <span className="text-[11px] text-slate-500">{item.previewBadge}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800">
                      {item.stats.value}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {item.previewItems.map((pi, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-500" />
                          <span>{pi}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">Live</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Clinical standard: HL7 / FHIR / ICD-10 ready</span>
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">Verified Workflow</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
