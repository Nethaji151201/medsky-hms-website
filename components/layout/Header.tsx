"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  ArrowRight,
  Calendar,
  Bed,
  Ambulance,
  Pill,
  FlaskConical,
  Scan,
  Receipt,
  Stethoscope,
  Activity,
  HeartPulse,
  Layers,
  Sparkles,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCT_SUBMENU = [
  {
    label: "HMS - Hospital Management System",
    href: "/modules/ipd",
    desc: "Inpatient admissions, bed census, OT & ward nursing care",
    icon: Building2,
    badge: "Hospital",
  },
  {
    label: "CMS - Clinic Management System",
    href: "/modules/opd",
    desc: "Queue tokens, OPD consultations & digital e-prescriptions",
    icon: Stethoscope,
    badge: "Clinic",
  },
  {
    label: "LMS - Laboratory Management System",
    href: "/modules/laboratory",
    desc: "Sample barcode scan & bi-directional analyzer sync (LIS)",
    icon: FlaskConical,
    badge: "Lab LIS",
  },
  {
    label: "PMS - Pharmacy Management System",
    href: "/modules/pharmacy",
    desc: "High-speed POS, FEFO batch expiry & drug inventory alerts",
    icon: Pill,
    badge: "Pharmacy",
  },
  {
    label: "Online Appointment Booking",
    href: "/#appointment",
    desc: "Doctor roster, real-time slots & instant SMS confirmation",
    icon: Calendar,
    badge: "Booking",
  },
  {
    label: "Doctor Clinical EMR",
    href: "/modules/doctor",
    desc: "Specialty SOAP clinical notes & digital vitals flowsheet",
    icon: HeartPulse,
    badge: "EMR / EHR",
  },
  {
    label: "Hospital Billing & Claims",
    href: "/billing",
    desc: "Split modes (Cash/UPI), cashless TPA & GST tax invoices",
    icon: Receipt,
    badge: "Billing",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-[#071324]/95 dark:bg-[#040a14]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3"
          : "bg-[#091829]/80 backdrop-blur-sm border-b border-white/5 py-4"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* ========================================================================= */}
          {/* 1. LOGO: MedSky Brand Cross with Inner Wave                               */}
          {/* ========================================================================= */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative flex items-center justify-center">
              <svg
                viewBox="0 0 38 38"
                className="w-9 h-9 transition-transform group-hover:scale-105 duration-200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="12" width="34" height="14" rx="4.5" fill="#17a2b8" />
                <rect x="12" y="2" width="14" height="34" rx="4.5" fill="#17a2b8" />
                <path
                  d="M19 8C19 8 19 18 19 24C19 28.5 15.5 28.5 15.5 28.5C15.5 28.5 13.5 24.5 14.5 20.5C15.5 16.5 18 12 19 8Z"
                  fill="white"
                />
                <path
                  d="M19 24C19 24 23.5 23 25.5 19.5C27.5 16 26.5 12 26.5 12C26.5 12 22.5 13 20.5 17C19 20.5 19 24 19 24Z"
                  fill="#c8f2f5"
                />
              </svg>
            </div>
            <span className="text-2xl sm:text-[26px] font-black tracking-tight text-white flex items-center">
              MedSky<span className="text-[#17a2b8]">.</span>
            </span>
          </Link>

          {/* ========================================================================= */}
          {/* 2. CENTER NAVIGATION PILL: Home, Product (with Submenu), Pricing, FAQ, Contact */}
          {/* ========================================================================= */}
          <nav className="hidden xl:flex items-center bg-[#0d2238]/80 dark:bg-[#071524]/90 backdrop-blur-md border border-white/10 rounded-xl p-1.5 shadow-inner">
            {/* HOME */}
            <Link
              href="/"
              className={cn(
                "text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg transition-all inline-flex items-center gap-1.5 shadow-sm",
                pathname === "/"
                  ? "bg-white text-[#0a1b2d] font-black"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              <span>HOME</span>
            </Link>

            {/* PRODUCT (with Submenu featuring HMS, CMS, LMS, PMS) */}
            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 px-3.5 py-2 rounded-lg transition-colors inline-flex items-center gap-1",
                  pathname.startsWith("/modules") || pathname === "/billing"
                    ? "text-[#17a2b8]"
                    : ""
                )}
              >
                <span>PRODUCT</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    productDropdownOpen ? "rotate-180 text-[#17a2b8]" : "opacity-70"
                  )}
                />
              </button>

              {/* Submenu Dropdown featuring HMS, CMS, LMS, PMS */}
              {productDropdownOpen && (
                <div className="absolute top-full -left-12 mt-2 w-[420px] bg-[#091a2e] text-white rounded-2xl shadow-2xl border border-white/10 p-3 z-50 animate-in fade-in-0 zoom-in-95 duration-150 max-h-[540px] overflow-y-auto">
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#17a2b8]">
                      Core Suites & Modules
                    </span>
                    <span className="text-[10px] text-slate-400">MedSky HMS · CMS · LMS · PMS</span>
                  </div>

                  <div className="space-y-1">
                    {PRODUCT_SUBMENU.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#17a2b8]/20 text-[#17a2b8] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#17a2b8] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-bold bg-[#17a2b8]/30 text-cyan-200 px-1.5 py-0.5 rounded flex-shrink-0">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-white/10 px-2 flex items-center justify-between text-xs">
                    <Link
                      href="/pricing"
                      className="text-[11px] font-bold text-[#17a2b8] hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>View HMS, CMS, LMS, PMS Pricing Plans</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* PRICING */}
            <Link
              href="/pricing"
              className={cn(
                "text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors",
                pathname === "/pricing"
                  ? "text-[#17a2b8] font-black"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              PRICING
            </Link>

            {/* FAQ */}
            <Link
              href="/#faq"
              className="text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 px-3.5 py-2 rounded-lg transition-colors"
            >
              FAQ
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={cn(
                "text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors",
                pathname === "/contact"
                  ? "text-[#17a2b8] font-black"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              CONTACT
            </Link>
          </nav>

          {/* ========================================================================= */}
          {/* 3. RIGHT CONTROLS: Phone Number (+91-91 59 59 53 53) & Appointment CTA   */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Header Phone Number: +91-91 59 59 53 53 */}
            <a
              href="tel:+919159595353"
              className="hidden lg:flex items-center gap-2.5 text-left group hover:opacity-95 transition-opacity"
              title="Call MedSky Appointment & Emergency"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#17a2b8] text-white flex items-center justify-center border border-white/10 transition-colors">
                <Phone className="w-4 h-4 fill-white text-white" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-slate-300 uppercase tracking-tight leading-none">
                  Emergency Call:
                </div>
                <div className="text-sm font-black text-white tracking-tight mt-0.5 leading-tight group-hover:text-cyan-300 transition-colors">
                  +91-91 59 59 53 53
                </div>
              </div>
            </a>

            {/* Appointment Button with White Arrow Box */}
            <Link
              href="/#appointment"
              className="inline-flex items-center gap-3 bg-[#17a2b8] hover:bg-[#13899c] text-white text-xs font-extrabold pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-xl shadow-lg shadow-cyan-950/40 transition-all hover:scale-105 active:scale-95 group"
            >
              <span className="tracking-wide">Appointment</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white text-[#17a2b8] flex items-center justify-center font-black group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4 text-[#17a2b8] stroke-[2.5]" />
              </div>
            </Link>

            {/* 4-Diamond Portal Grid Button */}
            <button
              type="button"
              onClick={() => setSideDrawerOpen(!sideDrawerOpen)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Open portal grid menu"
              title="Hospital Quick Access Portals"
            >
              <div className="grid grid-cols-2 gap-1 w-4 h-4">
                <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                <div className="w-1.5 h-1.5 bg-[#17a2b8] rounded-sm" />
                <div className="w-1.5 h-1.5 bg-[#17a2b8] rounded-sm" />
                <div className="w-1.5 h-1.5 bg-white rounded-sm" />
              </div>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-white hover:bg-white/10 rounded-xl"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Side Slide-out Portal Drawer */}
      {sideDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#071324] border-l border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white">MedSky Quick Access</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSideDrawerOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Core 4 Products Quick Access */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Core Management Systems
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/modules/ipd"
                    onClick={() => setSideDrawerOpen(false)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#17a2b8]/20 border border-white/10 text-left transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#17a2b8] mb-1.5" />
                    <div className="text-xs font-bold text-white">HMS Suite</div>
                    <div className="text-[10px] text-slate-400">Hospital Operations</div>
                  </Link>

                  <Link
                    href="/modules/opd"
                    onClick={() => setSideDrawerOpen(false)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#17a2b8]/20 border border-white/10 text-left transition-colors"
                  >
                    <Stethoscope className="w-4 h-4 text-[#17a2b8] mb-1.5" />
                    <div className="text-xs font-bold text-white">CMS Suite</div>
                    <div className="text-[10px] text-slate-400">Clinic & Doctor OPD</div>
                  </Link>

                  <Link
                    href="/modules/laboratory"
                    onClick={() => setSideDrawerOpen(false)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#17a2b8]/20 border border-white/10 text-left transition-colors"
                  >
                    <FlaskConical className="w-4 h-4 text-[#17a2b8] mb-1.5" />
                    <div className="text-xs font-bold text-white">LMS Suite</div>
                    <div className="text-[10px] text-slate-400">LIS Lab Diagnostics</div>
                  </Link>

                  <Link
                    href="/modules/pharmacy"
                    onClick={() => setSideDrawerOpen(false)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#17a2b8]/20 border border-white/10 text-left transition-colors"
                  >
                    <Pill className="w-4 h-4 text-[#17a2b8] mb-1.5" />
                    <div className="text-xs font-bold text-white">PMS Suite</div>
                    <div className="text-[10px] text-slate-400">Pharmacy & Drug POS</div>
                  </Link>
                </div>
              </div>

              {/* Direct Helpdesk Call */}
              <div className="p-4 rounded-2xl bg-[#17a2b8]/15 border border-[#17a2b8]/30 space-y-1">
                <div className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                  Appointment & Emergency Call
                </div>
                <a
                  href="tel:+919159595353"
                  className="text-lg font-black text-white hover:text-cyan-300 block"
                >
                  +91-91 59 59 53 53
                </a>
                <div className="text-xs text-slate-300">
                  Instant ambulance dispatch & doctor slot reservation.
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <Link
                href="/demo"
                onClick={() => setSideDrawerOpen(false)}
                className="w-full inline-flex items-center justify-center bg-[#17a2b8] hover:bg-[#13899c] text-white text-xs font-bold py-3 rounded-xl shadow-lg"
              >
                Schedule Live Product Demo
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md xl:hidden animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#081527] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-xl font-black text-white">
                  MedSky<span className="text-[#17a2b8]">.</span>
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/#appointment"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-cyan-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  APPOINTMENT BOOKING
                </Link>
                <Link
                  href="/modules/ipd"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HMS (HOSPITAL SUITE)
                </Link>
                <Link
                  href="/modules/opd"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CMS (CLINIC SUITE)
                </Link>
                <Link
                  href="/modules/laboratory"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LMS (LAB LIS SUITE)
                </Link>
                <Link
                  href="/modules/pharmacy"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PMS (PHARMACY SUITE)
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PRICING
                </Link>
                <Link
                  href="/#faq"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="tel:+919159595353"
                className="flex items-center gap-2 text-white text-xs bg-white/5 p-3 rounded-xl border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#17a2b8]" />
                <div>
                  <div className="text-[10px] text-slate-400">Emergency Call:</div>
                  <div className="font-bold text-sm">+91-91 59 59 53 53</div>
                </div>
              </a>
              <Link
                href="/#appointment"
                className="w-full inline-flex items-center justify-center bg-[#17a2b8] hover:bg-[#13899c] text-white text-xs font-bold rounded-xl py-3 shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
