import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/ui/Button";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#040c18] text-white">
      {/* Rich Glowing Atmospheric Gradient Flares matching attached image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 70% at 0% 50%, rgba(23, 162, 184, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse 60% 70% at 100% 50%, rgba(2, 132, 199, 0.28) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(23, 162, 184, 0.08) 0%, transparent 80%)
          `,
        }}
      />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          Ready to Modernize Your Hospital?
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Experience the Future of Hospital Management with Medsky HMS.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Schedule a personalized demonstration tailored specifically to your clinical specialties, ward capacity, and operational workflows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            variant="primary"
            size="xl"
            href="/demo"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-xl shadow-primary/30 text-base"
          >
            Request a Live Demo
          </Button>

          <Button
            variant="outline"
            size="xl"
            href="tel:+919159595353"
            leftIcon={<Phone className="w-5 h-5 text-primary" />}
            className="w-full sm:w-auto border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800"
          >
            Call +91-91 59 59 53 53
          </Button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            No credit card or commitment required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Live data walkthrough with clinical expert
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Same-day onboarding support
          </span>
        </div>
      </div>
    </section>
  );
}
