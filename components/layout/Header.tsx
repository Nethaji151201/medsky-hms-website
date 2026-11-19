"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Pill,
  FlaskConical,
  Stethoscope,
  Layers,
  Sparkles,
  Building2,
  Home,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCT_SUBMENU = [
  {
    label: "Hospital Management Software",
    href: "/hospital-management-software",
    desc: "Inpatient admissions, bed census, OT & ward nursing care",
    icon: Building2,
    badge: "HMS",
  },
  {
    label: "Clinic Management Software",
    href: "/clinic-management-software",
    desc: "Queue tokens, OPD consultations & digital e-prescriptions",
    icon: Stethoscope,
    badge: "CMS",
  },
  {
    label: "Laboratory Management Software",
    href: "/laboratory-management-software",
    desc: "Sample barcode scan & bi-directional analyzer sync (LIS)",
    icon: FlaskConical,
    badge: "LMS",
  },
  {
    label: "Pharmacy Management Software",
    href: "/pharmacy-management-software",
    desc: "High-speed POS, FEFO batch expiry & drug inventory alerts",
    icon: Pill,
    badge: "PMS",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile side menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fantasy Side Menu Drawer rendered in a Portal on document.body
  const drawerContent = (
    <div
      className={cn(
        "fixed inset-0 z-[9999] xl:hidden transition-all duration-300",
        mobileMenuOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      )}
    >
      {/* Fantasy Glass Backdrop with Smooth Fade */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 bg-[#020813]/85 backdrop-blur-md transition-opacity duration-300 cursor-pointer"
      />

      {/* Drawer Panel: Silky Hardware-Accelerated Slide from LEFT */}
      <aside
        aria-label="Navigation Menu"
        className={cn(
          "fixed inset-y-0 left-0 w-[85%] max-w-[360px] h-screen h-[100dvh] bg-gradient-to-b from-[#061426] via-[#08182c] to-[#040913] border-r border-cyan-500/25 shadow-[20px_0_60px_rgba(23,162,184,0.3)] flex flex-col justify-between overflow-hidden transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-[10000]",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Top Decorative Ambient Glow Blob */}
        <div className="absolute top-0 left-0 w-64 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

        {/* Drawer Top Header (Sticky inside drawer) */}
        <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-[#061426]/90 backdrop-blur-sm flex-shrink-0">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex-shrink-0">
              <Image
                src="/medsky_logo.png"
                alt="MedSky Logo"
                width={36}
                height={36}
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-105"
              />
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-white flex items-center">
              Med<span className="text-primary">Sky</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all duration-300 hover:rotate-90 group cursor-pointer"
          >
            <X className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        {/* Drawer Scrollable Navigation Body */}
        <div className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Menu Label */}
          <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-widest uppercase text-cyan-400/90 px-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>NAVIGATION MENU</span>
          </div>

          {/* Navigation Links: Exact match to desktop header */}
          <nav className="space-y-2">
            {/* 1. HOME */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 group border",
                pathname === "/"
                  ? "bg-gradient-to-r from-primary/25 to-primary/5 text-white border-primary/50 shadow-md shadow-cyan-950/40"
                  : "text-slate-200 hover:text-white hover:bg-white/5 border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Home className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span>HOME</span>
              </div>
            </Link>

            {/* 2. PRODUCT (Expandable Accordion) */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Layers className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>PRODUCT</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-cyan-400 transition-transform duration-300",
                    mobileProductsOpen ? "rotate-180" : ""
                  )}
                />
              </button>

              {mobileProductsOpen && (
                <div className="px-2 pb-2 pt-1 space-y-1.5 border-t border-white/5 bg-black/20 animate-in fade-in slide-in-from-top-1 duration-200">
                  {PRODUCT_SUBMENU.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between p-2.5 rounded-lg text-xs transition-all duration-200 group border",
                          isActive
                            ? "bg-primary/25 text-white border-primary/50 shadow-sm"
                            : "text-slate-300 hover:text-white hover:bg-white/5 border-transparent"
                        )}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-md bg-white/5 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div className="truncate">
                            <div className="font-bold text-white text-[12px] group-hover:text-cyan-300 transition-colors truncate">
                              {item.label}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                        <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-primary/20 text-cyan-300 border border-primary/30 flex-shrink-0">
                          {item.badge}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. PRICING */}
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 group border",
                pathname === "/pricing"
                  ? "bg-gradient-to-r from-primary/25 to-primary/5 text-white border-primary/50 shadow-md shadow-cyan-950/40"
                  : "text-slate-200 hover:text-white hover:bg-white/5 border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span>PRICING</span>
              </div>
            </Link>

            {/* 4. CONTACT */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 group border",
                pathname === "/contact"
                  ? "bg-gradient-to-r from-primary/25 to-primary/5 text-white border-primary/50 shadow-md shadow-cyan-950/40"
                  : "text-slate-200 hover:text-white hover:bg-white/5 border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span>CONTACT</span>
              </div>
            </Link>
          </nav>
        </div>

        {/* Drawer Bottom Action Area (Fixed at bottom of drawer) */}
        <div className="relative z-10 p-4 sm:p-5 border-t border-white/10 bg-[#040c17]/98 space-y-3 flex-shrink-0">
          {/* Phone Card */}
          <a
            href="tel:+919159595353"
            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/15 to-white/5 border border-primary/30 hover:border-primary/60 transition-all group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 fill-white text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Helpline Support
              </div>
              <div className="text-sm font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                +91-91 59 59 53 53
              </div>
            </div>
          </a>

          {/* Enquiry Button */}
          <Link
            href="/#appointment"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-between bg-primary hover:bg-primary-hover text-white text-xs font-extrabold pl-4 pr-1.5 py-1.5 rounded-xl shadow-lg shadow-cyan-950/40 transition-all active:scale-95 group cursor-pointer"
          >
            <span className="tracking-wide">Enquiry</span>
            <div className="w-8 h-8 rounded-lg bg-white text-primary flex items-center justify-center font-black group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4 text-primary stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-[#071324]/95 dark:bg-[#040a14]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-2.5 sm:py-3"
            : "bg-[#091829]/85 backdrop-blur-sm border-b border-white/5 py-3 sm:py-4"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* ========================================================================= */}
            {/* 1. LEFT GROUP: Menu Button (< xl) + MedSky Brand Logo                     */}
            {/* ========================================================================= */}
            <div className="flex items-center gap-2 sm:gap-3.5">
              {/* Menu Button: Visible on Mobile & Tablet (< xl), Hidden on Desktop (>= xl) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="xl:hidden relative p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white border border-white/10 hover:border-primary/50 transition-all duration-200 flex items-center justify-center group shadow-sm flex-shrink-0 cursor-pointer"
              >
                <Menu className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                <span className="sr-only">Open Menu</span>
              </button>

              {/* MedSky Primary Brand Logo & Name */}
              <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
                <Image
                  src="/medsky_logo.png"
                  alt="MedSky Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain transition-transform group-hover:scale-105 duration-200"
                  priority
                />
                <span className="text-xl sm:text-2xl md:text-[26px] font-black tracking-tight text-white flex items-center">
                  Med<span className="text-primary">Sky</span>
                </span>
              </Link>
            </div>

            {/* ========================================================================= */}
            {/* 2. CENTER NAVIGATION PILL: HOME, PRODUCT, PRICING, CONTACT                */}
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
                    "text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 px-3.5 py-2 rounded-lg transition-colors inline-flex items-center gap-1 cursor-pointer",
                    pathname.startsWith("/modules") ||
                      pathname === "/hospital-management-software" ||
                      pathname === "/clinic-management-software" ||
                      pathname === "/laboratory-management-software" ||
                      pathname === "/pharmacy-management-software"
                      ? "text-primary"
                      : ""
                  )}
                >
                  <span>PRODUCT</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      productDropdownOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {/* Mega Dropdown Menu */}
                {productDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-[#091a2e]/98 backdrop-blur-xl border border-white/15 rounded-2xl p-2.5 shadow-2xl">
                      <div className="px-3 py-2 border-b border-white/10 mb-1.5">
                        <div className="text-[11px] font-black uppercase tracking-wider text-primary">
                          Medsky Core Suites
                        </div>
                      </div>
                      <div className="space-y-1">
                        {PRODUCT_SUBMENU.map((item) => {
                          const Icon = item.icon;
                          const isCurrent = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                "flex items-start gap-3 p-2.5 rounded-xl transition-all group",
                                isCurrent
                                  ? "bg-white/15 text-white"
                                  : "hover:bg-white/10 text-slate-200"
                              )}
                            >
                              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                                  <span>{item.label}</span>
                                  <span className="text-[9px] font-black uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-1.5 py-0.5 rounded">
                                    {item.badge}
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
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
                    ? "text-primary font-black"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                PRICING
              </Link>

              {/* CONTACT */}
              <Link
                href="/contact"
                className={cn(
                  "text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors",
                  pathname === "/contact"
                    ? "text-primary font-black"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                CONTACT
              </Link>
            </nav>

            {/* ========================================================================= */}
            {/* 3. RIGHT CONTROLS:                                                        */}
            {/*    - Mobile (< md): Phone Number ONLY (replaces Enquiry button)          */}
            {/*    - Tablet (md to xl): BOTH Phone number AND Enquiry button              */}
            {/*    - Desktop (>= xl): BOTH Phone number AND Enquiry button                */}
            {/* ========================================================================= */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-shrink-0">
              {/* A. Mobile View (< md): Phone number pill replacing Enquiry button */}
              <a
                href="tel:+919159595353"
                className="flex md:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-primary/15 hover:bg-primary/25 active:scale-95 border border-primary/30 text-white transition-all text-xs font-bold shadow-sm"
                title="Call MedSky: +91-91 59 59 53 53"
              >
                <div className="w-6 h-6 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Phone className="w-3 h-3 fill-white text-white" />
                </div>
                <span className="text-[11.5px] sm:text-[13px] font-black tracking-tight text-white whitespace-nowrap">
                  +91-91 59 59 53 53
                </span>
              </a>

              {/* B. Tablet & Desktop View (>= md): Phone number with icon */}
              <a
                href="tel:+919159595353"
                className="hidden md:flex items-center gap-2 sm:gap-2.5 text-left group hover:opacity-95 transition-opacity"
                title="Call MedSky Appointment & Emergency"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-primary text-white flex items-center justify-center border border-white/10 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 fill-white text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                    +91-91 59 59 53 53
                  </div>
                </div>
              </a>

              {/* C. Enquiry Button: Hidden on Mobile (< md), Shown on Tablet & Desktop (>= md) */}
              <Link
                href="/#appointment"
                className="hidden md:inline-flex items-center gap-2.5 sm:gap-3 bg-primary hover:bg-primary-hover text-white text-xs font-extrabold pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-xl shadow-lg shadow-cyan-950/40 transition-all hover:scale-105 active:scale-95 group flex-shrink-0"
              >
                <span className="tracking-wide">Enquiry</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white text-primary flex items-center justify-center font-black group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 text-primary stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Render the drawer via createPortal to document.body, escaping <header>'s backdrop-filter containing block */}
      {mounted ? createPortal(drawerContent, document.body) : null}
    </>
  );
}
