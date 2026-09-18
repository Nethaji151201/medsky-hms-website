"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Check, X, Sparkles, Building2, Stethoscope, FlaskConical, Pill, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRICING_CATEGORIES, PricingCategoryKey, PricingTier } from "@/data/pricing";
import { SectionHeader } from "@/ui/SectionHeader";

const CATEGORY_ICONS: Record<PricingCategoryKey, any> = {
  hms: Building2,
  cms: Stethoscope,
  lms: FlaskConical,
  pms: Pill,
};

function PricingCard({ tier, categoryKey }: { tier: PricingTier; categoryKey: PricingCategoryKey }) {
  const isTealButton = tier.ctaButtonType === "teal" || tier.isPopular;
  const CategoryIcon = CATEGORY_ICONS[categoryKey] || Building2;

  return (
    <div
      className={`w-full flex flex-col justify-between bg-white dark:bg-[#0f172a] rounded-[22px] p-6 sm:p-7 border transition-all duration-300 select-none relative ${
        tier.isPopular
          ? "border-[#17a2b8] shadow-[0_8px_32px_rgba(23,162,184,0.18)] ring-2 ring-[#17a2b8]/20"
          : "border-slate-200/80 dark:border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-slate-300 dark:hover:border-slate-700"
      }`}
    >
      {/* Top Badge for Recommended / Most Popular */}
      {tier.badge && (
        <div className="absolute -top-3 right-6">
          <span className="px-3.5 py-0.5 rounded-full bg-[#17a2b8] text-white text-[10.5px] font-extrabold uppercase tracking-wider shadow-md shadow-[#17a2b8]/30">
            {tier.badge}
          </span>
        </div>
      )}

      <div className="space-y-4">
        {/* Top Header matching Testimonial Card Profile Row */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-cyan-50 dark:bg-slate-800 border border-cyan-100 dark:border-slate-700 flex-shrink-0 flex items-center justify-center text-[#17a2b8]">
            <CategoryIcon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-[16.5px] text-[#1e293b] dark:text-white leading-tight truncate">
              {tier.name}
            </h4>
            <p className="text-[11.5px] text-[#0e7490] dark:text-cyan-400 font-semibold mt-0.5 uppercase tracking-wide">
              {categoryKey.toUpperCase()} Suite
            </p>
          </div>
        </div>

        {/* Plan Description formatted like Testimonial Quote */}
        <p className="text-[13px] sm:text-[13.5px] text-slate-500 dark:text-slate-300 leading-relaxed font-normal min-h-[42px]">
          &ldquo;{tier.tagline}&rdquo;
        </p>

        {/* Pricing Display */}
        <div className="pt-3 pb-2 border-y border-slate-100 dark:border-slate-800/80">
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-slate-900 dark:text-white mr-1">₹</span>
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {tier.priceYearlyINR.toLocaleString("en-IN")}
            </span>
            <span className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm font-semibold ml-1.5">
              /year
            </span>
          </div>
          <div className="text-[11.5px] text-slate-400 dark:text-slate-400 mt-1.5 flex items-center justify-between">
            <span className="font-semibold text-[#0e7490] dark:text-cyan-400">✓ {tier.billingPeriodNote}</span>
            {tier.equivalentMonthlyINR && (
              <span className="font-medium">(~₹{tier.equivalentMonthlyINR.toLocaleString("en-IN")}/mo)</span>
            )}
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-2.5 pt-2">
          {tier.features.slice(0, 6).map((feat, fidx) => (
            <div key={fidx} className="flex items-start gap-2.5">
              {feat.included ? (
                <div className="w-4 h-4 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-[#17a2b8] flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-200 dark:border-cyan-800">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-800/60 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
                  <X className="w-2 h-2 stroke-[2.5]" />
                </div>
              )}
              <span
                className={`text-xs sm:text-[12.5px] leading-snug line-clamp-1 ${
                  feat.included
                    ? "text-slate-600 dark:text-slate-300 font-medium"
                    : "text-slate-400 dark:text-slate-500 line-through opacity-60"
                }`}
              >
                {feat.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-6 mt-3">
        <Link
          href={tier.ctaHref}
          className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${
            isTealButton
              ? "bg-[#17a2b8] hover:bg-[#13899c] text-white shadow-md shadow-[#17a2b8]/25 active:scale-[0.98]"
              : "bg-[#0b1328] hover:bg-[#131d33] dark:bg-[#1e293b] dark:hover:bg-[#334155] text-white active:scale-[0.98]"
          }`}
        >
          <span>{tier.ctaLabel}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export function PricingSection({ showHeader = true }: { showHeader?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch to next tab every 5 seconds with smooth sliding
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRICING_CATEGORIES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeCategory = PRICING_CATEGORIES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRICING_CATEGORIES.length) % PRICING_CATEGORIES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRICING_CATEGORIES.length);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-20 sm:py-28 relative overflow-hidden bg-slate-100/80 dark:bg-[#0c1527] gpu-layer"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {showHeader && (
          <div className="mb-10 sm:mb-12">
            <SectionHeader
              badge="Transparent Yearly Subscriptions"
              title="Predictable Healthcare"
              titleHighlight="Pricing Plans (INR ₹)."
              description="Dedicated yearly packages tailored specifically for Hospitals (HMS), Clinics (CMS), Diagnostic Labs (LMS), and Pharmacies (PMS)."
            />
          </div>
        )}

        {/* 4 Pricing Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10">
          {PRICING_CATEGORIES.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id] || Building2;
            const isActive = activeIndex === idx;

            return (
              <button
                key={category.id}
                onClick={() => setActiveIndex(idx)}
                type="button"
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#17a2b8] text-white shadow-lg shadow-[#17a2b8]/25 scale-[1.02]"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-[#17a2b8]/40 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#17a2b8]"}`} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab description subtitle */}
        <div className="text-center max-w-2xl mx-auto -mt-2 mb-10 transition-opacity duration-300">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {activeCategory.description}
          </p>
          <div className="inline-flex items-center gap-1.5 mt-2.5 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-[11px] font-bold text-[#0e7490] dark:text-cyan-300">
            <Sparkles className="w-3 h-3 text-[#17a2b8]" />
            <span>Yearly Package — Includes Free Onboarding & Unlimited User Logins</span>
          </div>
        </div>
      </div>

      {/* Smooth Horizontal Sliding Carousel Container for 4 Tabs */}
      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden px-4 sm:px-6">
        {/* Sliding Track for All 4 Tab Panels */}
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {PRICING_CATEGORIES.map((category) => (
            <div key={category.id} className="w-full flex-shrink-0 px-2 sm:px-4">
              {/* 3 Pricing Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1280px] mx-auto">
                {category.tiers.map((tier) => (
                  <PricingCard
                    key={`${category.id}-${tier.id}`}
                    tier={tier}
                    categoryKey={category.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Left & Right Chevron Controls & Indicators */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={handlePrev}
            type="button"
            aria-label="Previous Pricing Tab"
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#17a2b8] hover:text-[#17a2b8] shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {PRICING_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveIndex(idx)}
                type="button"
                aria-label={`Go to ${cat.label}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 bg-[#17a2b8]"
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            type="button"
            aria-label="Next Pricing Tab"
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#17a2b8] hover:text-[#17a2b8] shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
