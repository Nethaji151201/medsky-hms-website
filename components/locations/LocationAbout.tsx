"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Users, Award } from "lucide-react";
import { ScrollReveal } from "@/ui/ScrollReveal";

interface LocationAboutProps {
  locationName: string;
  locationType: "state" | "city" | "area";
  fullLocationString: string;
}

export function LocationAbout({
  locationName,
  locationType,
  fullLocationString,
}: LocationAboutProps) {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#060b14] overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Hospital Surgical Room with Smooth Left Slide */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={800}>
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 group">
                <Image
                  src="/images/Hospital Managment Software.png"
                  alt={`Modern Hospital and Clinic Automation in ${fullLocationString}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Bottom-Right #1 Top Rated Badge matching Image 2 */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white font-black text-base flex items-center justify-center shadow-md shadow-primary/30">
                    #1
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Top Rated HMS
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                      in {locationName}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (6 cols): Who We Are & Localized Content with Smooth Right Slide */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right" duration={800}>
              {/* WHO WE ARE pill badge matching Discover How It Works design */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>HEALTHCARE SOFTWARE IN {locationName.toUpperCase()}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Empowering Healthcare Providers in{" "}
                <span className="text-primary">{locationName}</span> with Digital Speed
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                MEDSKY HMS is engineered to connect every touchpoint of patient care and hospital administration across {fullLocationString}. By unifying OPD queue tokens, inpatient bed census, OT surgery rosters, pathology lab LIS, and pharmacy POS into a single cloud-native ecosystem, we help medical institutions operate with 100% precision.
              </p>

              {/* 2-Column Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "ABDM Milestone 1, 2 & 3 Integrated",
                  "NABH & NABL Clinical Audit Logs",
                  "Bi-Directional Lab Machine Sync",
                  "FEFO Batch Expiry Pharmacy POS",
                  "WhatsApp & SMS Patient Alerts",
                  "24/7 Regional Support & Fast Onboarding",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="#appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-primary/25 group"
                >
                  <span>Request Walkthrough in {locationName}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  <span>View Pricing</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
