"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Clock,
  Headphones,
  CheckCircle2,
  Server,
  HeartPulse,
  Receipt,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { ScrollReveal } from "@/ui/ScrollReveal";

interface LocationWhyChooseUsProps {
  locationName: string;
}

export function LocationWhyChooseUs({ locationName }: LocationWhyChooseUsProps) {
  const benefits = [
    {
      icon: Headphones,
      title: "Local On-Site Technical Assistance",
      desc: `Direct support engineers available across ${locationName} for instant on-premise hardware setup, analyzer cable interfacing, and staff training.`,
    },
    {
      icon: ShieldCheck,
      title: "100% ABDM M1, M2 & M3 Ready",
      desc: "Instant ABHA creation, Aadhaar OTP authentication, digital health record linking, and Ayushman Bharat claim gateway integration.",
    },
    {
      icon: HeartPulse,
      title: "Doctor EMR Tailored for Local Specialities",
      desc: "Speed up clinical consultations with specialty-specific SOAP notes, voice-to-text typing, and pre-configured medicine formulations.",
    },
    {
      icon: Zap,
      title: "Sub-Second High Concurrency Cloud",
      desc: "Zero lagging even during peak morning OPD queues. Hosted on high-speed Indian sovereign cloud servers with daily automated backups.",
    },
    {
      icon: Server,
      title: "Bi-Directional Lab Machine Sync",
      desc: "Automate Biochemistry, Hematology, and Immunoassay analyzers via RS232 and TCP/IP without manual double data entry.",
    },
    {
      icon: Receipt,
      title: "Smart Pharmacy FEFO & TPA Claims",
      desc: "First-Expiry-First-Out medicine dispensing to prevent expiry losses, alongside cashless TPA pre-authorization and GST invoicing.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#060b14] overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal direction="top">
          <SectionHeader
            badge="Enterprise Advantage"
            title={`Why Healthcare Leaders in`}
            titleHighlight={`${locationName} Choose Medsky`}
            description={`Purpose-built for Indian clinical workflows, compliance regulations, and demanding multi-specialty hospital operations.`}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal
                key={idx}
                direction="bottom"
                delay={idx * 80}
                className="h-full"
              >
                <div className="h-full p-7 rounded-[26px] bg-slate-50/70 dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-primary dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
