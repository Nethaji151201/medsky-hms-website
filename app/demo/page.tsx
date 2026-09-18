import React from "react";
import { Badge } from "@/ui/Badge";
import { SectionHeader } from "@/ui/SectionHeader";
import { RequestDemoForm } from "@/components/forms/RequestDemoForm";
import { CheckCircle2, Phone, Sparkles, ShieldCheck } from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book Free Live Demo | Hospital, Clinic, Lab & Pharmacy Software",
  description:
    "Schedule a live, interactive walkthrough of Medsky Hospital Software (HMS), Clinic CMS, Diagnostic Lab LMS, and Pharmacy PMS customized for your healthcare facility.",
  path: "/demo",
  keywords: [
    "Hospital Software Demo",
    "Clinic Software Free Demo",
    "Lab LIS Software Demo",
    "Pharmacy Software Trial",
    "Book Healthcare ERP Walkthrough",
  ],
});

export default function DemoPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live 1-on-1 Demonstration"
          title="See Medsky HMS in Action for"
          titleHighlight="Your Hospital."
          description="Tell us about your facility size and specialty workflows, and our clinical solution engineers will prepare a personalized live walkthrough."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info / Value list (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  What to Expect in Your Demo
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Interactive walkthrough of OPD token queues & doctor consultation EMR</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Real-time IPD bed census, nursing eMAR, and ward round notes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Pharmacy FEFO barcode dispensing & LIS machine analyzer interfacing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Consolidated billing, TPA insurance pre-auth, and day-end closing</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Direct Sales Hotline</span>
                <a
                  href="tel:+919159595353"
                  className="text-lg font-bold text-white hover:text-[#17a2b8] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#17a2b8]" />
                  +91-91 59 59 53 53
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs text-teal-900 dark:text-teal-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
              <span>
                All discussions and clinical data requirements shared during demonstrations are protected under standard non-disclosure agreements.
              </span>
            </div>
          </div>

          {/* Right Demo Form (8 cols) */}
          <div className="lg:col-span-8">
            <RequestDemoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
