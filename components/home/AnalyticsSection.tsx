import React from "react";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  ArrowUpRight,
  Download,
  Users,
  Bed,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { Button } from "@/ui/Button";

export function AnalyticsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Reporting & Business Intelligence"
          title="Turn Hospital Data Into"
          titleHighlight="Better Decisions."
          description="Real-time clinical, operational, and financial analytics designed for hospital leadership, finance teams, and medical superintendents."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Feature Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Instant Visibility Across Every Hospital Metric
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Eliminate end-of-month reporting lag. Medsky HMS aggregates clinical throughput, bed occupancy rates, revenue cycle metrics, and pharmacy inventory turnover in real-time.
            </p>

            <div className="space-y-3.5">
              {[
                { title: "Average Length of Stay (ALOS)", desc: "Track bed turnover efficiency and clinical milestones." },
                { title: "Average Revenue Per Occupied Bed (ARPOB)", desc: "Monitor multi-departmental yield and revenue cycle health." },
                { title: "Doctor Productivity & Caseloads", desc: "Analyze OPD consultations, surgery counts, and conversion rates." },
                { title: "Statutory & Compliance Exports", desc: "One-click export for regulatory audits, tax GST, and insurance MIS." },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button variant="primary" size="md" href="/modules/reports">
              Explore Analytics & MIS Module
            </Button>
          </div>

          {/* Right Visual Dashboard Mockup (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-slate-950 text-white border-slate-800" hoverEffect={false}>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Hospital Executive Briefing</h4>
                    <span className="text-[11px] text-slate-400">Past 30 Days Consolidated MIS</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-teal-400 bg-teal-950 px-2.5 py-1 rounded-full border border-teal-800">
                  Auto-Calculated
                </span>
              </div>

              {/* Graphical Metric Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">OPD vs IPD Revenue Conversion</span>
                    <span className="font-bold text-teal-400">74% Target Reached</span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-sky-400 rounded-full w-[74%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Insurance TPA Settlement Ratio</span>
                    <span className="font-bold text-emerald-400">92.6% Approved</span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Diagnostic Turnaround Time (TAT)</span>
                    <span className="font-bold text-sky-400">&lt; 45 Mins Average</span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full w-[85%]" />
                  </div>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block">Total Inpatients</span>
                  <span className="text-lg font-bold text-white">1,420</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block">Bed Occupancy</span>
                  <span className="text-lg font-bold text-teal-400">88.4%</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block">ALOS Duration</span>
                  <span className="text-lg font-bold text-sky-400">3.2 Days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
