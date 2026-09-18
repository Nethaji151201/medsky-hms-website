import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { MODULES_DATA, ModuleData } from "@/data/modules";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { Card } from "@/ui/Card";
import { SectionHeader } from "@/ui/SectionHeader";
import { CTASection } from "@/components/home/CTASection";

interface ModuleDetailViewProps {
  slug: string;
}

export function ModuleDetailView({ slug }: ModuleDetailViewProps) {
  const module = MODULES_DATA.find((m) => m.slug === slug);

  if (!module) {
    notFound();
  }

  const related = MODULES_DATA.filter((m) => module.relatedModules.includes(m.slug));

  return (
    <div className="py-10 sm:py-16 space-y-20">
      {/* 1. Module Breadcrumb & Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/modules" className="hover:text-teal-600 transition-colors">Modules</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-teal-600 font-semibold">{module.shortName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="teal" size="md">
                {module.badge}
              </Badge>
              <span className="text-xs font-semibold text-slate-400">
                {module.category} Module
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {module.name}
            </h1>

            <p className="text-lg text-teal-600 dark:text-teal-400 font-medium">
              {module.tagline}
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {module.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2.5 pt-2">
              {module.heroHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Button
                variant="primary"
                size="lg"
                href="/demo"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-lg shadow-teal-500/20"
              >
                Schedule {module.shortName} Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
              >
                Ask Questions
              </Button>
            </div>
          </div>

          {/* Metrics & KPI Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Impact & ROI Metrics
                </span>
                <Sparkles className="w-4 h-4 text-teal-400" />
              </div>

              <div className="space-y-4">
                {module.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                    <div className="text-2xl sm:text-3xl font-black text-white">{m.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-800 text-xs text-teal-200">
                ⚡ Fully integrated with Medsky Hospital Core, LIS, RIS & Billing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Capabilities Grid */}
      <section className="py-16 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Features Matrix"
            title="Core Capabilities of"
            titleHighlight={module.shortName}
            description="Engineered to meet real clinical realities, regulatory compliances, and departmental speed."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {module.keyFeatures.map((feat, idx) => (
              <Card key={idx} className="p-6 sm:p-7 flex flex-col justify-between" hoverEffect>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Step-by-Step Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Flow"
          title="How It Works:"
          titleHighlight="Step-by-Step Execution"
          description={`The standardized operational journey for ${module.shortName}.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {module.workflowSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2 hover:border-teal-500/40 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-md inline-block">
                Step {step.stepNumber}
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white pt-1">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Related Modules */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Connected Hospital Modules
              </h3>
              <p className="text-xs text-slate-500">
                Seamlessly integrated with {module.shortName}
              </p>
            </div>
            <Link
              href="/modules"
              className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              View All Modules →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/modules/${rel.slug}`}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/50 hover:shadow-md transition-all group"
              >
                <Badge variant="neutral" size="sm" className="mb-2">
                  {rel.category}
                </Badge>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {rel.shortName}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {rel.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 5. Direct CTA Banner */}
      <CTASection />
    </div>
  );
}
