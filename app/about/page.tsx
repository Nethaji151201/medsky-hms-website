import React from "react";
import Link from "next/link";
import {
  HeartPulse,
  ShieldCheck,
  Award,
  Users,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Medsky HMS — Transforming Healthcare Operations",
  description:
    "Learn about Medsky Healthcare Technologies, our clinical informatics mission, and how we empower healthcare providers to deliver connected, high-quality patient care.",
  path: "/about",
});

export default function AboutPage() {
  const coreValues = [
    {
      title: "Clinical-First Ergonomics",
      desc: "Every screen and form is engineered with practicing physicians and nurses to eliminate cognitive friction and redundant data entry.",
      icon: HeartPulse,
    },
    {
      title: "Frictionless Interoperability",
      desc: "We believe hospital software shouldn't operate in silos. Clinical, diagnostic, and financial records must communicate continuously.",
      icon: Building2,
    },
    {
      title: "Data Confidentiality & Trust",
      desc: "Patient privacy and hospital financial security are non-negotiable foundations embedded directly into our system architecture.",
      icon: ShieldCheck,
    },
    {
      title: "Continuous Innovation",
      desc: "We regularly deploy clinical intelligence, regulatory updates, and workflow automation so hospitals always stay ahead.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="pt-12 sm:pt-20 space-y-24">
      {/* 1. Mission Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="teal" size="md">
          About Medsky HMS
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          One Mission: Smarter Software for{" "}
          <span className="text-teal-600 dark:text-teal-400">Better Patient Outcomes.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Medsky HMS was created to solve the fragmentation, inefficiency, and clinical burnout caused by legacy desktop healthcare software. We bridge the gap between patient care, diagnostics, and financial administration.
        </p>
      </section>

      {/* 2. Core Pillars / Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="What Sets Medsky Apart in"
          titleHighlight="Healthcare IT."
          description="Built on engineering rigor, clinical feedback, and deep respect for hospital workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <Card key={val.title} className="p-8 space-y-4" hoverEffect>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Engineering & Clinical Standards */}
      <section className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="teal" size="sm">
              Healthcare Engineering
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Designed in Close Collaboration with Healthcare Practitioners
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Unlike generic enterprise software adapted for hospitals, Medsky HMS is built specifically around the clinical realities of emergency triage, nurse medication schedules, phlebotomy workflows, and pharmacy FEFO batch rules.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Instant search across millions of patient records with sub-100ms latency",
                "Clean dark & light modes designed for low-light clinical ICU environments",
                "Mobile and tablet responsive for bedside physician and nurse rounds",
                "Extensible API framework for third-party lab analyzers and radiology PACS",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
            <div className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
              Quality & Architecture
            </div>
            <h3 className="text-2xl font-bold">Cloud-Native Reliability for Critical Healthcare</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hospitals operate 24 hours a day, 365 days a year. Our cloud infrastructure is engineered with continuous automated backups, auto-scaling compute clusters, and redundant failovers to guarantee zero disruption to emergency care.
            </p>
            <div className="pt-2">
              <Button variant="primary" size="md" href="/demo">
                Schedule Architecture Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection />
    </div>
  );
}
