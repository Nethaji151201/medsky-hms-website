"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen min-h-[100dvh] bg-[#0b1328] text-white overflow-hidden flex items-center">
      {/* 1. Background Image with Gradients matching Screenshot 1 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Medsky Trusted Healthcare Specialist"
          fill
          priority
          className="object-cover object-right md:object-center opacity-90"
        />
        {/* Dark Left Gradient Overlay to keep left text razor-sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1328] via-[#0b1328]/85 to-transparent w-full md:w-3/5 z-10" />
        {/* Subtle Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1328] to-transparent z-10" />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-3xl space-y-6 animate-slide-left">
          {/* Huge Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Your Trusted Partner for Simplifying Healthcare
            <span className="sr-only">
              {" "}
              — India&apos;s Best Hospital Software, Clinic Management (CMS),
              Diagnostic Lab (LMS), and Pharmacy (PMS) System
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            MEDSKY is an integrated healthcare management software designed to
            simplify and streamline day-to-day operations for hospitals, clinics,
            laboratories, and pharmacies.
          </p>

          {/* Schedule Demo CTA on the left */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl pl-6 pr-2.5 py-3 shadow-lg shadow-primary/30 transition-all duration-200 group hover:scale-105 active:scale-95"
            >
              <span className="mr-3">Schedule Live Demo</span>
              <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>

            <Link
              href="/#appointment"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/15 transition-all"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
