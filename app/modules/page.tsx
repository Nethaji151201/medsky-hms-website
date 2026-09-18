import React from "react";
import Link from "next/link";
import {
  UserCheck,
  Bed,
  Ambulance,
  Pill,
  FlaskConical,
  Scan,
  Receipt,
  Calendar,
  Stethoscope,
  Activity,
  Package,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { MODULES_DATA } from "@/data/modules";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Hospital, Clinic (CMS), Lab (LMS) & Pharmacy (PMS) Software Modules",
  description:
    "Complete suite of Medsky HMS clinical, diagnostic lab, pharmacy, OPD/IPD, and billing software modules for modern hospitals and healthcare centers.",
  path: "/modules",
  keywords: [
    "Hospital Software Modules",
    "OPD Management Module",
    "IPD Bed Census Module",
    "Pharmacy Software POS Module",
    "Lab Information System Module",
    "EMR EHR Clinical Module",
  ],
});

const ICON_MAP: Record<string, any> = {
  UserCheck,
  Bed,
  Ambulance,
  Pill,
  FlaskConical,
  Scan,
  Receipt,
  Calendar,
  Stethoscope,
  Activity,
  Package,
  BarChart3,
};

export default function ModulesPage() {
  const categories = ["All", "Clinical", "Operations", "Diagnostics", "Financial", "Administrative"] as const;

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Integrated Healthcare Suite"
          title="Medsky HMS"
          titleHighlight="Modules Directory."
          description="Every clinical, diagnostic, operational, and financial department connected seamlessly in a single cloud system."
        />

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {MODULES_DATA.map((module) => {
            const Icon = ICON_MAP[module.iconName] || Stethoscope;
            return (
              <Card
                key={module.slug}
                className="p-6 sm:p-8 flex flex-col justify-between group hover:border-teal-500/50"
                hoverEffect
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="teal" size="sm">
                      {module.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {module.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                    {module.description}
                  </p>

                  <div className="space-y-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Highlights:
                    </span>
                    {module.heroHighlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {module.metrics[0]?.value} {module.metrics[0]?.label}
                  </span>
                  <Link
                    href={`/modules/${module.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
                  >
                    <span>Explore Module</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Need a Custom Module Package for Your Hospital?
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Our medical systems architects can configure custom workflows, external HL7 interfaces, and specialty templates for your hospital network.
          </p>
          <Button variant="primary" size="lg" href="/demo">
            Request Custom Solution Architecture
          </Button>
        </div>
      </div>
    </div>
  );
}
