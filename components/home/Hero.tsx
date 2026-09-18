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
          src="/images/hero-doctor.jpg"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols): Headline with Smooth Left Slide */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl animate-slide-left">
            {/* Huge Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Your Trusted Partner Health and Wellness
              <span className="sr-only"> — India&apos;s Best Hospital Software, Clinic Management (CMS), Diagnostic Lab (LMS), and Pharmacy (PMS) System</span>
            </h1>
          </div>

          {/* Right Column (5 cols): Floating White Card with Smooth Right Slide */}
          <div className="lg:col-span-5 flex justify-end animate-slide-right">
            <div className="bg-white text-slate-900 rounded-[28px] rounded-br-[4px] p-7 sm:p-8 max-w-md shadow-2xl border border-slate-100 space-y-5 transition-all duration-300 hover:shadow-cyan-950/40 hover:-translate-y-1">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our experienced medical team combines the latest technology with personalized attention to provide you with exceptional healthcare tailored to your unique needs.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center bg-[#17a2b8] hover:bg-[#13899c] text-white text-xs font-bold uppercase tracking-wider rounded-xl pl-5 pr-2 py-2.5 shadow-md shadow-[#17a2b8]/25 transition-all group"
              >
                <span className="mr-3">Meet Our Team</span>
                <div className="w-7 h-7 rounded-lg bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
