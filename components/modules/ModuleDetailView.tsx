"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Star,
  Quote,
  HelpCircle,
} from "lucide-react";
import { MODULES_DATA } from "@/data/modules";
import { PricingCategoryKey } from "@/data/pricing";
import { Card } from "@/ui/Card";
import { SectionHeader } from "@/ui/SectionHeader";
import { ScrollReveal } from "@/ui/ScrollReveal";
import { PricingSection } from "@/components/home/PricingSection";
import { CTASection } from "@/components/home/CTASection";

interface ModuleDetailViewProps {
  slug: string;
}

const PRICING_SLUG_MAP: Record<string, PricingCategoryKey> = {
  ipd: "hms",
  opd: "cms",
  laboratory: "lms",
  pharmacy: "pms",
  doctor: "hms",
  appointments: "cms",
  emergency: "hms",
  radiology: "lms",
  billing: "hms",
  nursing: "hms",
  inventory: "pms",
  reports: "hms",
};

export function ModuleDetailView({ slug }: ModuleDetailViewProps) {
  const module = MODULES_DATA.find((m) => m.slug === slug);

  if (!module) {
    notFound();
  }

  const related = MODULES_DATA.filter((m) => module.relatedModules.includes(m.slug));
  const pricingCategory: PricingCategoryKey = PRICING_SLUG_MAP[slug] || "hms";
  const [openFaqId, setOpenFaqId] = useState<string | null>(
    module.faqs && module.faqs.length > 0 ? module.faqs[0].id : null
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Atmospheric Background Image + Smooth Transitions)  */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen min-h-[100dvh] bg-[#0b1328] text-white overflow-hidden flex items-center border-b border-slate-800/80">
        {/* Department Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={module.image}
            alt={module.name}
            fill
            priority
            className="object-cover object-right md:object-center opacity-90 transition-transform duration-1000 ease-out hover:scale-105"
            sizes="100vw"
          />
          {/* Dark Left Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1328] via-[#0b1328]/85 to-transparent w-full md:w-3/5 z-10" />
          {/* Subtle Bottom Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1328] to-transparent z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-28 sm:pt-36 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols): Smooth Left Slide Animation */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl animate-slide-left">
              {/* Breadcrumb Navigation - Smooth Top Slide */}
              <nav className="flex items-center gap-2 text-xs text-slate-300 font-medium animate-slide-top">
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <Link href="/modules" className="hover:text-teal-400 transition-colors">
                  Modules
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-teal-300 font-semibold">{module.shortName}</span>
              </nav>

              {/* Category & Badge - Smooth Top Slide */}
              <div className="flex flex-wrap items-center gap-2.5 animate-slide-top" style={{ animationDelay: "100ms" }}>
                <span className="px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-xs font-bold uppercase tracking-wider">
                  {module.badge}
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {module.category} Module
                </span>
              </div>

              {/* Huge Headline - Smooth Left Slide */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] transition-all duration-300">
                {module.name}
              </h1>

              {/* Tagline in Teal */}
              <p className="text-lg sm:text-xl text-primary-light font-medium leading-snug">
                {module.tagline}
              </p>

              {/* Key Bullet Highlights with Teal Checkmarks - Smooth Bottom Slide */}
              <div className="space-y-2.5 pt-2 animate-slide-bottom" style={{ animationDelay: "200ms" }}>
                {module.heroHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-200 transition-transform duration-200 hover:translate-x-1">
                    <CheckCircle2 className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (5 cols): Smooth Right Slide Animation */}
            <div className="lg:col-span-5 flex justify-end animate-slide-right">
              <div className="bg-white text-slate-900 rounded-[28px] rounded-br-[4px] p-7 sm:p-8 max-w-md shadow-2xl border border-slate-100 space-y-5 transition-all duration-500 hover:shadow-cyan-950/40 hover:-translate-y-2 hover:scale-[1.01]">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {module.description}
                </p>

                <Link
                  href="/demo"
                  className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl pl-5 pr-2 py-2.5 shadow-md shadow-primary/25 transition-all duration-200 group active:scale-95"
                >
                  <span className="mr-3">Schedule {module.shortName} Demo</span>
                  <div className="w-7 h-7 rounded-lg bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURES MATRIX / CORE CAPABILITIES (Pure White Background)             */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#060b14] py-20 sm:py-28 transition-colors duration-300">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <ScrollReveal direction="top">
            <SectionHeader
              badge="Features Matrix"
              title="Core Capabilities of"
              titleHighlight={module.shortName}
              description="Engineered to meet real clinical realities, regulatory compliances, and departmental speed."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
            {module.keyFeatures.map((feat, idx) => (
              <ScrollReveal
                key={idx}
                direction="bottom"
                delay={idx * 80}
                className="h-full"
              >
                <Card
                  className="p-6 sm:p-8 flex flex-col justify-between border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 h-full"
                  hoverEffect
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 font-bold text-lg border border-cyan-200/60 dark:border-cyan-800/60 transition-transform duration-300 hover:scale-110">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONNECTED MODULES (Light Grey Shade Background)                         */}
      {/* ========================================================================= */}
      {related.length > 0 && (
        <section className="bg-slate-50/90 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 py-20 sm:py-28 transition-colors duration-300">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <ScrollReveal direction="left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Connected Hospital Modules
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Seamlessly integrated with {module.shortName}
                  </p>
                </div>
                <Link
                  href="/modules"
                  className="text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 group"
                >
                  <span>View All Modules</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel, idx) => (
                <ScrollReveal
                  key={rel.slug}
                  direction="bottom"
                  delay={idx * 70}
                  className="h-full"
                >
                  <Link
                    href={`/modules/${rel.slug}`}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 group block h-full"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {rel.category}
                    </span>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {rel.shortName}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. PRODUCT PRICING SECTION (Regarding Router / Module - Above CTA)        */}
      {/* ========================================================================= */}
      <PricingSection
        initialCategory={pricingCategory}
        singleCategoryOnly={true}
        title="Subscription Plans for"
        titleHighlight={module.shortName}
        badge="Transparent Pricing"
        autoRotate={false}
      />

      {/* ========================================================================= */}
      {/* 5. DIRECT CTA BANNER (Above Testimonials)                                 */}
      {/* ========================================================================= */}
      <CTASection />

      {/* ========================================================================= */}
      {/* 6. PRODUCT TESTIMONIALS (White Background)                                */}
      {/* ========================================================================= */}
      {module.testimonials && module.testimonials.length > 0 && (
        <section className="bg-white dark:bg-[#060b14] py-20 sm:py-28 border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <ScrollReveal direction="top">
              <SectionHeader
                badge="Clinician Reviews"
                title="What Healthcare Leaders Say About"
                titleHighlight={module.shortName}
                description={`Trusted by physicians, department heads, and hospital administrators running ${module.shortName}.`}
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {module.testimonials.map((test, idx) => (
                <ScrollReveal
                  key={test.id}
                  direction="bottom"
                  delay={idx * 100}
                  className="h-full"
                >
                  <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: test.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <Quote className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                        &ldquo;{test.quote}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="w-11 h-11 rounded-full overflow-hidden relative flex-shrink-0 bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800">
                        <Image
                          src={test.avatar}
                          alt={test.name}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {test.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {test.role} &bull; <span className="text-cyan-600 dark:text-cyan-400">{test.hospital}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. PRODUCT FAQ (Light Grey Shade Background - Above Footer)                */}
      {/* ========================================================================= */}
      {module.faqs && module.faqs.length > 0 && (
        <section className="bg-slate-50/90 dark:bg-slate-900/40 py-20 sm:py-28 transition-colors duration-300">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <ScrollReveal direction="top">
              <SectionHeader
                badge="Frequently Asked Questions"
                title="Questions About"
                titleHighlight={module.shortName}
                description={`Everything you need to know about implementing and using ${module.shortName}.`}
              />
            </ScrollReveal>

            <div className="max-w-4xl mx-auto space-y-4 pt-6">
              {module.faqs.map((faq, idx) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <ScrollReveal
                    key={faq.id}
                    direction="bottom"
                    delay={idx * 70}
                  >
                    <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden transition-all duration-300 shadow-sm hover:border-cyan-400/40">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "transform rotate-180 text-cyan-600 dark:text-cyan-400" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-slide-top">
                          <p className="pt-2">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}

              <ScrollReveal direction="top" delay={200}>
                <div className="text-center pt-6">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Have a specific question about {module.shortName}?{" "}
                    <Link href="/contact" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">
                      Speak with our clinical specialist →
                    </Link>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
