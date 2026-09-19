"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bed,
  FlaskConical,
  Activity,
  Pill,
  Calendar,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { PRODUCTS_DATA, ProductItem } from "@/data/modules";
import { ScrollReveal } from "@/ui/ScrollReveal";

const ICON_MAP: Record<string, any> = {
  Bed,
  FlaskConical,
  Activity,
  Pill,
  Calendar,
  Stethoscope,
};

function ProductCard({ product }: { product: ProductItem }) {
  const [imgError, setImgError] = useState(false);
  const Icon = ICON_MAP[product.iconName] || Activity;

  return (
    <div className="h-full bg-white dark:bg-[#0f172a] rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative">
      {/* 1. Top Image Section */}
      <div className="relative w-full">
        {/* Inner container with overflow-hidden for the image zoom only */}
        <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
          {!imgError && product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-sky-500/20 flex items-center justify-center">
              <Icon className="w-12 h-12 text-primary dark:text-cyan-400 opacity-60" />
            </div>
          )}
        </div>

        {/* 2. Floating Cyan/Teal Icon Badge — Overlapping Image & Card Body (100% visible) */}
        <div className="absolute -bottom-6 left-6 z-20 w-[52px] h-[52px] rounded-[18px] bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/35 group-hover:scale-110 group-hover:bg-primary-hover transition-all duration-300 border-2 border-white dark:border-[#0f172a]">
          <Icon className="w-6 h-6 stroke-[2.2]" />
        </div>
      </div>

      {/* 3. Card Body Content */}
      <div className="p-6 sm:p-7 pt-10 flex flex-col justify-between flex-1">
        <div>
          {/* Title in Deep Navy */}
          <h3 className="text-xl font-bold text-[#162044] dark:text-white tracking-tight group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-foreground dark:text-cyan-400 mt-0.5">
            {product.tagline}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* 4. Link CTA: "Explore Service →" */}
        <div className="pt-4">
          <Link
            href={`/modules/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#162044] dark:text-cyan-400 hover:text-primary dark:hover:text-cyan-300 transition-colors"
          >
            <span>Explore Product</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ModulesGrid() {
  return (
    <section className="py-20 sm:py-28 relative bg-slate-50 dark:bg-[#0c1527]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal direction="top">
          <SectionHeader
            badge="Core Healthcare Products"
            title="Designed for Modern"
            titleHighlight="Healthcare Workflows"
            description="A connected healthcare software suite for hospitals, clinics, labs, pharmacies, appointments, and EMR—built for seamless healthcare management."
          />
        </ScrollReveal>

        {/* 3-Column Grid displaying exactly the 6 Core Products with Staggered Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {PRODUCTS_DATA.map((product, idx) => (
            <ScrollReveal
              key={product.id}
              direction="bottom"
              delay={idx * 100}
              duration={700}
              className="h-full"
            >
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
