"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { ScrollReveal } from "@/ui/ScrollReveal";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#07192c] via-[#04101e] to-[#020710] text-slate-300 border-t border-cyan-500/20 relative overflow-hidden">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none" />

      {/* Rich Glowing Atmospheric Gradient Flares */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 15% 10%, rgba(23, 162, 184, 0.32) 0%, transparent 70%),
            radial-gradient(ellipse 65% 60% at 85% 35%, rgba(2, 132, 199, 0.28) 0%, transparent 70%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(23, 162, 184, 0.16) 0%, transparent 80%)
          `,
        }}
      />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 relative z-10">
        {/* ========================================================================= */}
        {/* Top Grid: Brand & Follow Us, Products, Useful Links                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-6 sm:pb-8 border-b border-slate-800/80">
          {/* Brand & Follow Us (5 cols) with Smooth Left Slide */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="left" duration={750}>
              <Link href="/" className="flex items-center gap-2.5 group inline-flex">
                <Image
                  src="/medsky_logo.png"
                  alt="MedSky Logo"
                  width={40}
                  height={40}
                  className="w-9 h-9 object-contain transition-transform group-hover:scale-105 duration-200"
                />
                <span className="text-2xl sm:text-[26px] font-black tracking-tight text-white flex items-center">
                  MedSky<span className="text-primary">.</span>
                </span>
              </Link>

              <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed max-w-md mt-2.5">
                Next-generation hospital management software designed to automate clinical queues, streamline multi-specialty workflows, and ensure seamless patient care across healthcare networks.
              </p>

              {/* Follow Us Icons */}
              <div className="pt-1">
                <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">
                  Follow us
                </span>
                <div className="flex items-center gap-2.5">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d2138] hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on Facebook"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d2138] hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on Twitter / X"
                    aria-label="Twitter"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917575757575"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d2138] hover:bg-[#25D366] text-primary hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Chat with us on WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.42-5.84 2.42-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.25-4.42c0-4.54 3.7-8.24 8.24-8.24m4.51 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d2138] hover:bg-[#0077B5] text-primary hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Products / Modules (3 cols) with Smooth Top Slide */}
          <div className="lg:col-span-3 space-y-3">
            <ScrollReveal direction="top" delay={100} duration={750}>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Products & Software
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] mt-2.5">
                {[
                  { name: "HMS Hospital Software", href: "/modules/ipd" },
                  { name: "CMS Clinic Software", href: "/modules/opd" },
                  { name: "LMS Lab Diagnostics", href: "/modules/laboratory" },
                  { name: "PMS Pharmacy POS", href: "/modules/pharmacy" },
                  { name: "Appointments Booking", href: "/#appointment" },
                  { name: "EMR / EHR Clinical Suite", href: "/modules/doctor" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Useful Links (4 cols) with Smooth Top Slide */}
          <div className="lg:col-span-4 space-y-3">
            <ScrollReveal direction="top" delay={200} duration={750}>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Useful Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] mt-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "Book Appointment", href: "/#appointment" },
                  { label: "Pricing Plans", href: "/pricing" },
                  { label: "Frequently Asked Questions", href: "/faq" },
                  { label: "Contact & Support", href: "/contact" },
                  { label: "Schedule Live Demo", href: "/demo" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Secondary Info Row: Opening Hours, Inquiry Numbers & Email, Location     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 py-6 sm:py-7 border-b border-slate-800/80 text-xs sm:text-sm">
          {/* 1. Opening Hours (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base mb-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <h5>Opening Hours</h5>
            </div>
            <div className="grid grid-cols-[68px_12px_1fr] items-center text-xs sm:text-[13px] gap-y-1 text-slate-300">
              <span className="font-semibold text-slate-200">Mon - Fri</span>
              <span className="text-slate-400 font-bold">:</span>
              <span>09:00 AM to 07:00 PM</span>

              <span className="font-semibold text-slate-200">Sat</span>
              <span className="text-slate-400 font-bold">:</span>
              <span>09:00 AM to 06:00 PM</span>

              <span className="font-semibold text-slate-200">Sunday</span>
              <span className="text-slate-400 font-bold">:</span>
              <span className="text-primary font-bold">Holiday</span>
            </div>
          </div>

          {/* 2. Inquiry Numbers & Email (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base mb-1.5">
              <Phone className="w-4 h-4 text-primary" />
              <h5>Inquiry & Support</h5>
            </div>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-300">
              <div className="grid grid-cols-[68px_12px_1fr] items-start gap-y-1">
                <span className="font-semibold text-slate-200">Inquiry</span>
                <span className="text-slate-400 font-bold">:</span>
                <div className="space-y-0.5">
                  <a href="tel:+917418884418" className="hover:text-primary transition-colors font-medium block">
                    +91-741 888 44 18
                  </a>
                  <a href="tel:+917418884419" className="hover:text-primary transition-colors font-medium block">
                    +91-741 888 44 19
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[68px_12px_1fr] items-center pt-0.5">
                <span className="font-semibold text-slate-200">Email</span>
                <span className="text-slate-400 font-bold">:</span>
                <a href="mailto:support@medsky.in" className="text-primary hover:underline transition-colors font-medium">
                  support@medsky.in
                </a>
              </div>
            </div>
          </div>

          {/* 3. Location (5 cols): Left Side Corporate Branch Chennai | Right Side Branch Office Salem */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base mb-1">
              <MapPin className="w-4 h-4 text-primary" />
              <h5>Location</h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-xs sm:text-[12.5px] leading-relaxed">
              {/* Left Side: Corporate Branch (Chennai) */}
              <div>
                <span className="font-bold text-primary text-[11px] uppercase tracking-wider block mb-1">
                  Corporate Branch
                </span>
                <p>
                  NO.6-B/69, Kakkan Nagar,<br />
                  2nd Cross Street, Adambakkam,<br />
                  Chennai - 600 088.
                </p>
              </div>

              {/* Right Side: Branch Office (Salem) */}
              <div>
                <span className="font-bold text-primary text-[11px] uppercase tracking-wider block mb-1">
                  Branch Office
                </span>
                <p>
                  No.90/13, Harur Main Road,<br />
                  Ayothiyapatinam,<br />
                  Salem, Tamil Nadu - 636103.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Row: Copyright & Design and Development Credit                     */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="text-slate-400">© Copyright 2026 MedSky. All Rights Reserved.</p>

          <p className="text-slate-300">
            Develop and design by{" "}
            <span className="text-primary font-bold hover:underline">
              Brain Sharp Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
