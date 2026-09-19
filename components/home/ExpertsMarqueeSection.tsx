"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ExpertsMarqueeSection() {
  const specialties = [
    { name: "PEDIATRICS", color: "text-[#0b1328] dark:text-white" },
    { name: "OPHTHALMOLOGY", color: "text-primary" },
    { name: "CARDIOLOGY", color: "text-[#0b1328] dark:text-white" },
    { name: "NEUROLOGY", color: "text-primary" },
    { name: "ORTHOPEDICS", color: "text-[#0b1328] dark:text-white" },
    { name: "PSYCHIATRY", color: "text-primary" },
    { name: "RADIOLOGY", color: "text-[#0b1328] dark:text-white" },
    { name: "LABORATORY", color: "text-primary" },
    { name: "PHARMACY", color: "text-[#0b1328] dark:text-white" },
  ];

  return (
    <section className="pt-16 sm:pt-24 pb-12 bg-white dark:bg-[#060b14] overflow-hidden">
      {/* 1. 25+ Section matching Screenshot 2 */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (6 cols): Medical Team Photography Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-tl-[48px] rounded-br-[48px] rounded-tr-[18px] rounded-bl-[18px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100">
              <Image
                src="/images/medical-team.jpg"
                alt="Medsky Trusted Medical Experts"
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column (6 cols): Big 25+ and Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Big 25+ Typography */}
            <div className="relative">
              <span className="text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-primary to-sky-600 dark:from-white dark:via-cyan-400 dark:to-sky-400 select-none">
                25+
              </span>
            </div>

            {/* Avatar Stack + Tagline */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full border-2 border-white dark:border-slate-900 bg-primary text-white font-bold text-xs flex items-center justify-center shadow-md">
                  DR
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white dark:border-slate-900 bg-sky-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                  AP
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                  XC
                </div>
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-900 dark:text-white leading-tight">
                TRUSTED EXPERTS IN MEDICAL<br />HEALTH AND WELLNESS
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              We&apos;re committed to offering compassionate and comprehensive healthcare tailored to your needs. At Medsky, your health is our priority every step of the way.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl pl-5 pr-2 py-2.5 shadow-md shadow-primary/25 transition-all group"
              >
                <span className="mr-3">Discover More</span>
                <div className="w-7 h-7 rounded-lg bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Big Running Specialty Marquee Banner matching Screenshot 2 */}
      <div className="mt-20 py-8 border-y border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/40 relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-black tracking-tighter text-4xl sm:text-7xl lg:text-8xl select-none">
          {specialties.concat(specialties).map((item, idx) => (
            <React.Fragment key={idx}>
              <span className={item.color}>{item.name}</span>
              {/* Starburst SVG Icon matching Screenshot 2 */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 sm:w-14 sm:h-14 text-slate-400 dark:text-slate-600 flex-shrink-0 animate-spin"
                style={{ animationDuration: "20s" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93M8.5 2.5l7 19M2.5 15.5l19-7M2.5 8.5l19 7M15.5 2.5l-7 19" />
              </svg>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
