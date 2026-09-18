import React from "react";
import { Badge } from "@/ui/Badge";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms and Conditions | Medsky HMS",
  description: "Terms of service and subscription governance for Medsky HMS software.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <Badge variant="teal" size="md">
        Terms of Service
      </Badge>
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
        Terms and Conditions
      </h1>
      <p className="text-xs text-slate-400">Effective Date: January 2026</p>

      <div className="space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing, subscribing to, or utilizing Medsky HMS and its associated mobile, web, and clinical API endpoints, your healthcare facility agrees to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Permitted Healthcare Use</h2>
          <p>
            Medsky HMS is provided for operational, administrative, and clinical documentation support by licensed medical and hospital personnel. Treating medical practitioners retain full independent clinical responsibility for patient diagnostic and treatment decisions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. System Availability & Service Level Agreements</h2>
          <p>
            Medsky maintains a targeted 99.9% application uptime commitment. Scheduled maintenance windows are communicated in advance and conducted during off-peak clinical hours.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Governing Law & Support</h2>
          <p>
            For legal inquiries or master service contract agreements, contact <a href="mailto:legal@medskyhms.com" className="text-teal-600 dark:text-teal-400 font-semibold underline">legal@medskyhms.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
