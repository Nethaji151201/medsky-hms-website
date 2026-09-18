import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileCheck,
  KeyRound,
  Database,
  Server,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Healthcare Data Security & Compliance Architecture",
  description:
    "Learn about Medsky HMS enterprise data protection, granular role-based access controls, encryption standards, immutable audit trails, and backup resilience.",
  path: "/security",
});

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "Granular Role-Based Access Controls (RBAC)",
      desc: "Restrict clinical history, medication logs, and financial vouchers based on strictly defined employee roles and department clearance.",
      icon: UserCheck,
      details: ["Specialty-level permissions", "Ward-level restriction", "Cashier session isolation"],
    },
    {
      title: "End-to-End Encryption Standards",
      desc: "All health telemetry, patient demographics, and financial transactions are encrypted using TLS 1.3 in transit and AES-256 at rest.",
      icon: Lock,
      details: ["Encrypted database storage", "Encrypted file attachments", "Secure API endpoints"],
    },
    {
      title: "Immutable Clinical & Financial Audit Trails",
      desc: "Every patient record view, prescription generation, lab value edit, and bill refund is irreversibly logged with user timestamp and IP trace.",
      icon: FileCheck,
      details: ["Non-repudiation audit logs", "Revision comparison viewer", "Manager escalation triggers"],
    },
    {
      title: "Multi-Factor Authentication (MFA) & SSO",
      desc: "Support for SAML 2.0 / OAuth2 single sign-on (SSO), biometric logins, and mandatory SMS/Email OTP verification for remote staff.",
      icon: KeyRound,
      details: ["Corporate SSO integration", "Biometric device support", "Session auto-timeout"],
    },
    {
      title: "Automated Encrypted Backups & Disaster Recovery",
      desc: "Hourly differential snapshots and daily full encrypted backups with 99.99% recovery point objective (RPO) and multi-region redundancy.",
      icon: Database,
      details: ["Zero data loss guarantee", "Multi-region replication", "Automated failover tests"],
    },
    {
      title: "High-Availability Cloud SLA (99.9% Uptime)",
      desc: "Deployed on tier-4 enterprise cloud infrastructure designed for zero-downtime hot patching and high-volume clinical concurrency.",
      icon: Server,
      details: ["Elastic auto-scaling", "DDoS mitigation", "24/7 infrastructure monitoring"],
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="teal" size="md">
          Enterprise Security Architecture
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Healthcare Data Deserves{" "}
          <span className="text-teal-600 dark:text-teal-400">Serious Protection.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Designed with healthcare data security, controlled access, and complete audit accountability at every layer of the system stack.
        </p>
      </section>

      {/* 2. Security Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((sec) => {
            const Icon = sec.icon;
            return (
              <Card key={sec.title} className="p-8 flex flex-col justify-between" hoverEffect>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {sec.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Security Philosophy Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 text-center">
          <ShieldCheck className="w-12 h-12 text-teal-400 mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-bold">
            Designed for Modern Healthcare Privacy Standards
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Medsky HMS is engineered following industry best practices in medical software engineering, patient confidentiality guidelines, and robust cryptographic protocols.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" href="/contact">
              Request Technical Security Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection />
    </div>
  );
}
