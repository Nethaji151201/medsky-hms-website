"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Bed,
  FlaskConical,
  Activity,
  Pill,
  Calendar,
  Stethoscope,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Star,
  Quote,
  HelpCircle,
  CheckCircle2,
  LayoutGrid,
  DoorOpen,
  QrCode,
  Cpu,
  FileText,
  ListOrdered,
  ScanLine,
  Clock,
  CreditCard,
  Ambulance,
  Scan,
  Receipt,
  Package,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Zap,
  TrendingUp,
  HeartPulse,
  Lock,
  RefreshCw,
  Building2,
  Users,
  Award,
  Layers,
  Headphones,
  Database,
  Smartphone,
  Check,
  Radio,
  Monitor,
  Eye,
  Bell,
  BellRing,
  FileSpreadsheet,
  PenTool,
  AlertOctagon,
  ShieldAlert,
  Tags,
  PieChart,
  FilePlus,
  Wrench,
  LayoutDashboard,
  DollarSign,
} from "lucide-react";
import { MODULES_DATA, ModuleData } from "@/data/modules";
import { PricingCategoryKey } from "@/data/pricing";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { SectionHeader } from "@/ui/SectionHeader";
import { ScrollReveal } from "@/ui/ScrollReveal";
import { PricingSection } from "@/components/home/PricingSection";
import { CTASection } from "@/components/home/CTASection";

interface ModuleDetailViewProps {
  slug: string;
}

const ICON_MAP: Record<string, any> = {
  Bed,
  FlaskConical,
  Activity,
  Pill,
  Calendar,
  Stethoscope,
  LayoutGrid,
  DoorOpen,
  QrCode,
  Cpu,
  FileText,
  ListOrdered,
  ScanLine,
  Clock,
  CreditCard,
  Ambulance,
  Scan,
  Receipt,
  Package,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Zap,
  TrendingUp,
  HeartPulse,
  Lock,
  RefreshCw,
  Building2,
  Users,
  Award,
  Layers,
  Headphones,
  Database,
  Smartphone,
  Radio,
  Monitor,
  Eye,
  Bell,
  BellRing,
  FileSpreadsheet,
  PenTool,
  AlertOctagon,
  ShieldAlert,
  Tags,
  PieChart,
  FilePlus,
  Wrench,
  LayoutDashboard,
  DollarSign,
  CheckCircle2,
};

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
          <div className="max-w-3xl space-y-6 animate-slide-left">
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

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {module.description}
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

            {/* Schedule Demo CTA */}
            <div className="pt-4 animate-slide-bottom flex flex-wrap gap-4 items-center" style={{ animationDelay: "300ms" }}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl pl-6 pr-2.5 py-3 shadow-lg shadow-primary/30 transition-all duration-200 group hover:scale-105 active:scale-95"
              >
                <span className="mr-3">Schedule {module.shortName} Demo</span>
                <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/15 transition-all"
              >
                Speak with Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT SECTION (Each Product Different Content - After Hero)             */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#060b14] overflow-hidden border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column (6 cols): Product/Module Image with Smooth Left Slide */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={800}>
                <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={module.about?.image || module.image}
                    alt={module.about?.title || module.name}
                    className="w-full h-auto max-h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Bottom-Right #1 Top Rated Badge */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white font-black text-base flex items-center justify-center shadow-md shadow-primary/30">
                      #1
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        Top Rated
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {module.shortName} Healthcare Solution
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column (6 cols): Custom Product About Content */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="right" duration={800}>
                {/* Badge pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{module.about?.badge || `ABOUT ${module.shortName}`}</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  {module.about?.title || `Transforming Your Healthcare Facility With ${module.shortName}`}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {module.about?.description || module.description}
                </p>

                {/* 2-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {(module.about?.highlights || module.heroHighlights).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm group"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURES MATRIX / CORE CAPABILITIES (Icons Instead of Numbers)          */}
      {/* ========================================================================= */}
      <section className="bg-slate-50/70 dark:bg-[#070c17] py-20 sm:py-28 transition-colors duration-300 border-b border-slate-200/70 dark:border-slate-800">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <ScrollReveal direction="top">
            <SectionHeader
              badge="Features Matrix"
              title="Core Capabilities of"
              titleHighlight={module.shortName}
              description="Engineered to meet real clinical realities, regulatory compliances, and departmental speed."
            />
          </ScrollReveal>

          {/* Cards with Lucide Icons instead of Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
            {module.keyFeatures.map((feat, idx) => {
              const Icon = ICON_MAP[feat.icon] || Activity;
              return (
                <ScrollReveal
                  key={idx}
                  direction="bottom"
                  delay={idx * 80}
                  className="h-full"
                >
                  <Card
                    className="p-6 sm:p-8 flex flex-col justify-between border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 h-full bg-white dark:bg-slate-900"
                    hoverEffect
                  >
                    <div>
                      {/* Icon in Rounded Container (Replacing number) */}
                      <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 font-bold text-lg border border-cyan-200/60 dark:border-cyan-800/60 transition-transform duration-300 hover:scale-110">
                        <Icon className="w-6 h-6" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MODULES DIRECTORY (Show All Modules Grid - Matching 2nd Attachment)     */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#060b14] py-20 sm:py-28 transition-colors duration-300 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <ScrollReveal direction="top">
            <SectionHeader
              badge="Integrated Healthcare Suite"
              title="Medsky HMS"
              titleHighlight="Modules Directory."
              description="Every clinical, diagnostic, operational, and financial department connected seamlessly in a single cloud system."
            />
          </ScrollReveal>

          {/* Complete 3-Column Grid Showing All 12 Modules at the same time */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
            {MODULES_DATA.map((mod, idx) => {
              const ModIcon = ICON_MAP[mod.iconName] || Activity;
              const isCurrent = mod.slug === module.slug;

              return (
                <ScrollReveal
                  key={mod.slug}
                  direction="bottom"
                  delay={idx * 50}
                  className="h-full"
                >
                  <div
                    className={`p-6 sm:p-8 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 h-full bg-white dark:bg-slate-900 ${
                      isCurrent
                        ? "border-teal-500 ring-2 ring-teal-500/20 shadow-lg"
                        : "border-slate-200/80 dark:border-slate-800 hover:border-teal-500/50 shadow-sm hover:shadow-xl"
                    }`}
                  >
                    <div>
                      {/* Top Row: Icon Container + Category Tag */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                          <ModIcon className="w-6 h-6" />
                        </div>
                        <Badge variant="teal" size="sm">
                          {mod.category}
                        </Badge>
                      </div>

                      {/* Module Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        {mod.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                        {mod.description}
                      </p>

                      {/* Core Highlights */}
                      <div className="space-y-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          CORE HIGHLIGHTS:
                        </span>
                        {mod.heroHighlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                            <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Bar: Metric + Explore Link */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                        {mod.metrics[0]?.value} {mod.metrics[0]?.label}
                      </span>
                      <Link
                        href={`/modules/${mod.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
                      >
                        <span>Explore Module</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BENEFITS SECTION (UI Styled Like Features - Product-Specific Content)   */}
      {/* ========================================================================= */}
      {module.benefits && module.benefits.length > 0 && (
        <section className="bg-slate-50/70 dark:bg-[#070c17] py-20 sm:py-28 transition-colors duration-300 border-b border-slate-200/70 dark:border-slate-800">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <ScrollReveal direction="top">
              <SectionHeader
                badge="Key Advantages"
                title="Transformative Benefits of"
                titleHighlight={module.shortName}
                description={`Measurable clinical, operational, and financial improvements delivered to healthcare facilities running ${module.shortName}.`}
              />
            </ScrollReveal>

            {/* Feature-Style Cards Grid for Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {module.benefits.map((benefit, idx) => {
                const BenefitIcon = ICON_MAP[benefit.icon] || Award;
                return (
                  <ScrollReveal
                    key={idx}
                    direction="bottom"
                    delay={idx * 80}
                    className="h-full"
                  >
                    <Card
                      className="p-6 sm:p-8 flex flex-col justify-between border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 h-full bg-white dark:bg-slate-900"
                      hoverEffect
                    >
                      <div>
                        {/* Benefit Icon in Styled Teal/Cyan Badge */}
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5 font-bold border border-teal-200/60 dark:border-teal-800/60 transition-transform duration-300 hover:scale-110">
                          <BenefitIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. WHY MEDSKY SECTION (Each Product Different Content)                     */}
      {/* ========================================================================= */}
      {module.whyMedsky && module.whyMedsky.length > 0 && (
        <section className="bg-white dark:bg-[#060b14] py-20 sm:py-28 transition-colors duration-300 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <ScrollReveal direction="top">
              <SectionHeader
                badge="Why Healthcare Leaders Choose Us"
                title="Why Choose Medsky for"
                titleHighlight={`${module.shortName}?`}
                description="Built on clinical rigor, ultra-reliable infrastructure, and human-centric healthcare engineering."
              />
            </ScrollReveal>

            {/* 4 Distinct Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {module.whyMedsky.map((item, idx) => {
                const WhyIcon = ICON_MAP[item.icon] || ShieldCheck;
                return (
                  <ScrollReveal
                    key={idx}
                    direction="bottom"
                    delay={idx * 80}
                    className="h-full"
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 h-full flex flex-col justify-between group">
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                          <WhyIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. PRODUCT PRICING SECTION (Subscription Plans for that Product)          */}
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
      {/* 8. DIRECT CTA BANNER (Above Testimonials)                                 */}
      {/* ========================================================================= */}
      <CTASection />

      {/* ========================================================================= */}
      {/* 9. PRODUCT TESTIMONIALS (White Background)                                */}
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={test.avatar}
                          alt={test.name}
                          className="w-full h-full object-cover"
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
      {/* 10. PRODUCT FAQ (Light Grey Shade Background - Above Footer)              */}
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
