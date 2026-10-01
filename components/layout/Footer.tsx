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
                  MedSky
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
                    href="https://www.facebook.com/medskysoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d2138] hover:bg-[#1877F2] text-primary hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on Facebook"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/medskyhms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d2138] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-primary hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on Instagram"
                    aria-label="Instagram"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@Medskyhms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d2138] hover:bg-[#FF0000] text-primary hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on YouTube"
                    aria-label="YouTube"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/medskyhms"
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
                  { name: "Hospital Management Software", href: "/modules/ipd" },
                  { name: "Clinic Management Software", href: "/modules/opd" },
                  { name: "Laboratory Management Software", href: "/modules/laboratory" },
                  { name: "Pharmacy Management Software", href: "/modules/pharmacy" },
                  { name: "Appointment Management Software", href: "/#appointment" },
                  { name: "Patient EMR / EHR", href: "/modules/doctor" },
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
                  { label: "Schedule Live Demo", href: "/contact" },
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
        {/* Secondary Info Row: Opening Hours, Enquiry Numbers & Email, Location     */}
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

              <span className="font-semibold text-slate-200">Saturday</span>
              <span className="text-slate-400 font-bold">:</span>
              <span>09:00 AM to 06:00 PM</span>

              <span className="font-semibold text-slate-200">Sunday</span>
              <span className="text-slate-400 font-bold">:</span>
              <span className="text-primary font-bold">Holiday</span>
            </div>
          </div>

          {/* 2. Enquiry Numbers & Email (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base mb-1.5">
              <Phone className="w-4 h-4 text-primary" />
              <h5>Enquiry & Support</h5>
            </div>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-300">
              <div className="grid grid-cols-[68px_12px_1fr] items-start gap-y-1">
                <span className="font-semibold text-slate-200">Enquiry</span>
                <span className="text-slate-400 font-bold">:</span>
                <div className="space-y-0.5">
                  <a href="tel:+919159595353" className="hover:text-primary transition-colors font-medium block">
                    +91-91 59 59 53 53
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[68px_12px_1fr] items-center pt-0.5">
                <span className="font-semibold text-slate-200">Email</span>
                <span className="text-slate-400 font-bold">:</span>
                <a href="mailto:support@medsky.in" className="hover:text-primary hover:underline transition-colors font-medium">
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
                  Corporate Office
                </span>
                <p>
                  No.6-B/69, Kakkan Nagar<br />
                  2nd Cross Street, Adambakkam<br />
                  Chennai - 600 088
                </p>
              </div>

              {/* Right Side: Branch Office (Salem) */}
              <div>
                <span className="font-bold text-primary text-[11px] uppercase tracking-wider block mb-1">
                  Branch Office
                </span>
                <p>
                  No.90/13, Harur Main Road<br />
                  Ayothiyapatinam<br />
                  Salem - 636 103
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Row: Copyright & Design and Development Credit                     */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="text-slate-400">© Copyright  {new Date().getFullYear()} MedSky Healthcare. All Rights Reserved.</p>

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
