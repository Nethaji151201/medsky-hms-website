import React from "react";
import {
  UserPlus,
  CalendarCheck,
  Stethoscope,
  FlaskConical,
  Pill,
  Receipt,
  DoorOpen,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { WORKFLOW_STAGES } from "@/data/features";

const WORKFLOW_ICONS = [
  UserPlus,
  CalendarCheck,
  Stethoscope,
  FlaskConical,
  Pill,
  Receipt,
  DoorOpen,
  BarChart3,
];

export function WorkflowSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Teal Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Integrated Care Continuum"
          title="The Connected"
          titleHighlight="Patient Journey."
          description="How data travels seamlessly across registration, clinical diagnosis, bedside nursing, and billing clearance."
          className="text-white"
          titleClassName="text-white"
          descriptionClassName="text-slate-300"
        />

        {/* Workflow Grid / Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const Icon = WORKFLOW_ICONS[idx] || Stethoscope;
            return (
              <div
                key={stage.step}
                className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-500/60 hover:bg-slate-800 transition-all group relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700">
                    Step {stage.step}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">
                  {stage.label}
                </h4>

                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {stage.desc}
                </p>

                {/* Connecting Arrow for desktop */}
                {idx < WORKFLOW_STAGES.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600 group-hover:text-teal-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
