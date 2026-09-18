import React from "react";
import {
  Layers,
  Zap,
  Network,
  BarChart3,
  ShieldCheck,
  Cloud,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { CORE_FEATURES } from "@/data/features";

const ICON_MAP: Record<string, any> = {
  Layers,
  Zap,
  Network,
  BarChart3,
  ShieldCheck,
  Cloud,
};

export function ValueProps() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Medsky HMS"
          title="One Platform."
          titleHighlight="Every Hospital Workflow."
          description="Designed from the ground up to replace fragmented legacy hospital softwares with a modern, connected, and highly secure cloud ecosystem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feat) => {
            const Icon = ICON_MAP[feat.icon] || Layers;
            return (
              <Card key={feat.id} className="p-6 sm:p-8 flex flex-col justify-between" hoverEffect>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5 border border-teal-200/60 dark:border-teal-800">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider block mb-1">
                    {feat.tag}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  {feat.bulletPoints.map((bp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
