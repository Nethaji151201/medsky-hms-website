import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-[#060b14] overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Hospital Surgical Room with Smooth Left Slide */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={800}>
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 group">
                <Image
                  src="/images/operating-room.jpg"
                  alt="Transforming Clinics With Digital Power"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Bottom-Right #1 Top Rated Badge matching Image 2 */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-[#17a2b8] text-white font-black text-base flex items-center justify-center shadow-md shadow-[#17a2b8]/30">
                    #1
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Top Rated
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Healthcare SaaS
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (6 cols): Who We Are & Content with Smooth Right Slide */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right" duration={800}>
            {/* WHO WE ARE pill badge matching Discover How It Works design */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#17a2b8]" />
              <span>WHO WE ARE</span>
            </div>

            {/* Main Heading matching Image 2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Transforming Clinics With Digital Power
            </h2>

            {/* Description matching Image 2 */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              MedSky Healthcare brings a million-dollar SaaS experience to your clinic. We streamline patient management, billing, and pharmacy operations into one ultra-fast, intelligent system. Designed specifically for modern healthcare providers who value speed, accuracy, and patient satisfaction.
            </p>

            {/* 2-Column Checklist matching Image 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Paperless workflows",
                "Lightning-fast performance",
                "Enterprise-grade security",
                "Intuitive for all staff",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#17a2b8] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Discover How It Works Button matching Image 2 */}
            <div className="pt-4">
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider hover:border-[#17a2b8] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm group"
              >
                <span>Discover How It Works</span>
                <ArrowRight className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:translate-x-1 group-hover:text-[#17a2b8] transition-all" />
              </Link>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
