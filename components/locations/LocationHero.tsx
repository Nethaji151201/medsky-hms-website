"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, CheckCircle2, Phone, Sparkles } from "lucide-react";

interface LocationHeroProps {
  locationType: "state" | "city";
  title: string;
  subtitle?: string;
  locationName: string;
  parentLocationName?: string;
  stateName?: string;
  cityName?: string;
  description: string;
  keyStats?: { label: string; value: string }[];
  hospitalCount?: string;
  doctorCount?: string;
}

export function LocationHero({
  locationType,
  title,
  subtitle,
  locationName,
  parentLocationName,
  stateName,
  cityName,
  description,
  keyStats = [],
  hospitalCount,
  doctorCount,
}: LocationHeroProps) {
  const fullLocationString = cityName
    ? `${cityName}, ${stateName}`
    : stateName || locationName;

  return (
    <section className="relative min-h-[92vh] bg-[#0b1328] text-white overflow-hidden flex items-center pt-24 sm:pt-28 pb-16">
      {/* 1. Background Image with Rich Deep Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt={`Medsky HMS Hospital Management Software in ${fullLocationString}`}
          fill
          priority
          className="object-cover object-right md:object-center opacity-85"
        />
        {/* Dark Left Gradient Overlay to keep left text razor-sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1328] via-[#0b1328]/90 to-transparent w-full md:w-3/5 z-10" />
        {/* Subtle Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1328] to-transparent z-10" />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-10 sm:pt-14 pb-12">
        {/* Breadcrumb Pill */}
        <div className="mb-5 animate-slide-top">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-semibold backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-slate-300">Medsky Healthcare IT</span>
            <span className="text-cyan-400">/</span>
            {stateName && (
              <span className="text-white font-medium">{stateName}</span>
            )}
            {cityName && (
              <>
                <span className="text-cyan-400">/</span>
                <span className="text-cyan-200 font-medium">{cityName}</span>
              </>
            )}
          </div>
        </div>

        <div className="max-w-3xl space-y-6 animate-slide-left">
          {/* Tagline / Subtitle */}
          {subtitle && (
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{subtitle}</span>
            </div>
          )}

          {/* Huge Dynamic Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {title}
          </h1>

          {/* Localized Lead Paragraph */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {description}
          </p>

          {/* Badges / Highlights */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              ABDM M1/M2/M3 Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              NABH Ready Workflows
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              Local Field Support
            </span>
          </div>

          {/* CTAs on the left */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#appointment"
              className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl pl-6 pr-2.5 py-3 shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 group"
            >
              <span className="mr-3">Schedule Demo in {locationName}</span>
              <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>

            <a
              href="tel:+919159595353"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91-91 59 59 53 53</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
