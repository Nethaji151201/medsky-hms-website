import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileCheck,
  KeyRound,
  Database,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Button } from "@/ui/Button";

export function SecuritySection() {
  const securityPillars = [
    {
      title: "Granular Role-Based Access (RBAC)",
      desc: "Assign strict permissions so doctors, nurses, billing clerks, and pharmacists access only their authorized clinical modules.",
      icon: UserCheck,
    },
    {
      title: "End-to-End Encryption",
      desc: "All healthcare records are protected with TLS 1.3 in transit and AES-256 military-grade encryption at rest.",
      icon: Lock,
    },
    {
      title: "Immutable Audit Trails",
      desc: "Every record creation, edit, deletion, prescription modification, and invoice reprint is permanently stamped with timestamp and user ID.",
      icon: FileCheck,
    },
    {
      title: "Automated Encrypted Backups",
      desc: "Continuous cloud snapshots with multi-region redundancy to ensure zero clinical data loss and instant disaster recovery.",
      icon: Database,
    },
    {
      title: "Multi-Factor Authentication (MFA)",
      desc: "Enforce OTP and hardware security key verifications for clinical staff accessing remote patient histories.",
      icon: KeyRound,
    },
    {
      title: "Healthcare Compliance Ready",
      desc: "Designed with international healthcare data protection and digital health guidelines in mind.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Enterprise Data Protection"
          title="Healthcare Data Deserves"
          titleHighlight="Serious Security."
          description="Designed with healthcare data security, controlled role access, and compliance in mind from the core infrastructure."
          className="text-white"
          titleClassName="text-white"
          descriptionClassName="text-slate-300"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {securityPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-8 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-teal-500/50 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            href="/security"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
          >
            Review Security & Data Architecture
          </Button>
        </div>
      </div>
    </section>
  );
}
