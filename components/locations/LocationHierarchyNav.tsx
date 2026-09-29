"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { CityData, StateData } from "@/data/locations";
import { SectionHeader } from "@/ui/SectionHeader";
import { ScrollReveal } from "@/ui/ScrollReveal";

interface LocationHierarchyNavProps {
  currentType: "state" | "city";
  state: StateData;
  city?: CityData;
}

export function LocationHierarchyNav({
  currentType,
  state,
  city,
}: LocationHierarchyNavProps) {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0c1527] border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* ========================================================================= */}
        {/* CASE 1: STATE PAGE -> Show all Cities in this State                      */}
        {/* ========================================================================= */}
        {currentType === "state" && (
          <div>
            <ScrollReveal direction="top">
              <SectionHeader
                badge={`${state.name} Healthcare Network`}
                title={`Explore Medsky HMS Across Cities in`}
                titleHighlight={state.name}
                description={`Find localized hospital management software, clinic automation, and diagnostic lab systems across key healthcare districts in ${state.name}.`}
              />
            </ScrollReveal>

            {state.cities && state.cities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
                {state.cities.map((c, idx) => (
                  <ScrollReveal
                    key={c.slug}
                    direction="bottom"
                    delay={idx * 80}
                    className="h-full"
                  >
                    <Link
                      href={`/locations/${state.slug}/${c.slug}`}
                      className="h-full bg-white dark:bg-[#0f172a] rounded-[24px] p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
                    >
                      {/* Top Accent Gradient Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-primary dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Building2 className="w-6 h-6" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                          <p className="text-xs text-accent-foreground dark:text-cyan-400 font-semibold mt-0.5">
                            {c.hospitalCount || "50+"} Hospitals & Clinics
                          </p>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {c.description || `Leading cloud HMS software for hospitals, polyclinics, and diagnostic labs in ${c.name}.`}
                        </p>
                      </div>

                      <div className="pt-5 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-primary dark:text-cyan-400">
                        <span>Explore {c.name} Hub</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                <p className="text-slate-600 dark:text-slate-300">
                  Direct healthcare deployments available across all districts of {state.name}.
                </p>
                <Link
                  href="#appointment"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs"
                >
                  Request Deployment in Your City
                </Link>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* CASE 2: CITY PAGE -> Show Sibling Cities in this State                   */}
        {/* ========================================================================= */}
        {currentType === "city" && city && (
          <div>
            <ScrollReveal direction="top">
              <SectionHeader
                badge={`${state.name} Healthcare Hubs`}
                title={`Other Key Medical Cities in`}
                titleHighlight={state.name}
                description={`Explore Medsky HMS deployments, regional technical hubs, and on-site support across other districts in ${state.name}.`}
              />
            </ScrollReveal>

            {/* Sibling Cities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-2">
              {state.cities
                .filter((c) => c.slug !== city.slug)
                .map((otherCity, idx) => (
                  <ScrollReveal
                    key={otherCity.slug}
                    direction="bottom"
                    delay={idx * 70}
                    className="h-full"
                  >
                    <Link
                      href={`/locations/${state.slug}/${otherCity.slug}`}
                      className="h-full bg-white dark:bg-[#0f172a] rounded-[24px] p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-primary dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <MapPin className="w-5 h-5" />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {otherCity.name}
                          </h3>
                          <p className="text-[11px] text-accent-foreground dark:text-cyan-400 font-semibold mt-0.5">
                            {otherCity.hospitalCount || "45+"} Healthcare Centers
                          </p>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {otherCity.description || `OPD/IPD software, pharmacy billing, and diagnostic LIS in ${otherCity.name}.`}
                        </p>
                      </div>

                      <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-primary dark:text-cyan-400">
                        <span>View {otherCity.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
            </div>

            {/* Back to All State Hubs banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#091a2e] to-[#0d2847] text-white border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                  State Network Overview
                </span>
                <h4 className="text-xl sm:text-2xl font-bold">
                  Explore all healthcare networks across {state.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Discover centralized multi-hospital chains, state-wide diagnostics connectivity, and regional onboarding support.
                </p>
              </div>

              <Link
                href={`/locations/${state.slug}`}
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
              >
                <span>View {state.name} Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
