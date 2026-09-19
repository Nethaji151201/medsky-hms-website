import React from "react";
import Link from "next/link";
import {
  Layers,
  Zap,
  Network,
  BarChart3,
  ShieldCheck,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { CORE_FEATURES, ROLES_DATA } from "@/data/features";
import { CTASection } from "@/components/home/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Hospital, Clinic, Lab & Pharmacy Software Features",
  description:
    "Explore comprehensive healthcare features: OPD/IPD queue, digital EMR prescriptions, bi-directional lab analyzer interfacing, FEFO pharmacy inventory, and TPA billing.",
  path: "/features",
  keywords: [
    "Hospital Software Features",
    "Clinic Software Capabilities",
    "Lab LIS Analyzer Features",
    "Pharmacy Inventory Features",
    "Doctor EMR Capabilities",
  ],
});

const ICON_MAP: Record<string, any> = {
  Layers,
  Zap,
  Network,
  BarChart3,
  ShieldCheck,
  Cloud,
};

export default function FeaturesPage() {
  return (
    <div className="pt-12 sm:pt-20 space-y-24">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="teal" size="md">
          Platform Capabilities
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Everything Required to Run a{" "}
          <span className="text-teal-600 dark:text-teal-400">High-Performance Hospital.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          From front-desk queue reduction to complex inpatient multi-department clearances, Medsky HMS provides unmatched reliability, clinical ergonomics, and financial precision.
        </p>
      </section>

      {/* 2. Core Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_FEATURES.map((feat) => {
            const Icon = ICON_MAP[feat.icon] || Layers;
            return (
              <Card key={feat.id} className="p-8 flex flex-col justify-between" hoverEffect>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="neutral" size="sm" className="mb-2">
                    {feat.tag}
                  </Badge>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                  {feat.bulletPoints.map((bp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Role-Based Feature Matrix */}
      <section className="py-20 bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Staff Enablement"
            title="Tailored Interfaces for"
            titleHighlight="Every Clinical Role."
            description="Software that adapts to how doctors, nurses, pharmacists, and billing clerks actually work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROLES_DATA.map((item) => (
              <div
                key={item.role}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
              >
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.role}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                  ★ {item.perk}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection />
    </div>
  );
}
