"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react";
import { ScrollReveal } from "@/ui/ScrollReveal";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#040c18] text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Rich Glowing Atmospheric Gradient Flares */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 70% at 0% 50%, rgba(23, 162, 184, 0.25) 0%, transparent 70%),
            radial-gradient(ellipse 60% 70% at 100% 50%, rgba(2, 132, 199, 0.22) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 50% 100%, rgba(23, 162, 184, 0.12) 0%, transparent 80%)
          `,
        }}
      />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 relative z-10">
        {/* ========================================================================= */}
        {/* Top Grid: Brand & Follow Us, Products, Useful Links, Appointment / Newsletter */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          {/* Brand & Follow Us (5 cols) with Smooth Left Slide */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" duration={750}>
              <Link href="/" className="flex items-center gap-2.5 group inline-flex">
                <div className="w-11 h-11 rounded-xl bg-[#17a2b8] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#17a2b8]/25">
                  <svg viewBox="0 0 38 38" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="12" width="34" height="14" rx="4.5" fill="white" />
                    <rect x="12" y="2" width="14" height="34" rx="4.5" fill="white" />
                    <path d="M19 8C19 8 19 18 19 24C19 28.5 15.5 28.5 15.5 28.5C15.5 28.5 13.5 24.5 14.5 20.5C15.5 16.5 18 12 19 8Z" fill="#17a2b8" />
                  </svg>
                </div>
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  MedSky<span className="text-[#17a2b8]">.</span>
                </span>
              </Link>

              <p className="text-sm text-slate-300/90 leading-relaxed max-w-md mt-4">
                Next-generation hospital management software designed to automate clinical queues, streamline multi-specialty workflows, and ensure seamless patient care across healthcare networks.
              </p>

              {/* Follow Us Icons */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-400 block mb-3 uppercase tracking-wider">
                  Follow us
                </span>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0d1c33] hover:bg-[#17a2b8] text-[#17a2b8] hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on Facebook"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0d1c33] hover:bg-[#17a2b8] text-[#17a2b8] hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on Twitter / X"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917575757575"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0d1c33] hover:bg-[#25D366] text-[#17a2b8] hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Chat with us on WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.42-5.84 2.42-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.25-4.42c0-4.54 3.7-8.24 8.24-8.24m4.51 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0d1c33] hover:bg-[#0077B5] text-[#17a2b8] hover:text-white flex items-center justify-center transition-all duration-200 border border-cyan-500/25 shadow-sm group"
                    title="Follow us on LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Products / Modules (2.5 cols) with Smooth Top Slide */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal direction="top" delay={100} duration={750}>
              <h4 className="text-base font-bold text-white tracking-tight">
                Products
              </h4>
              <ul className="space-y-3 text-sm mt-3">
                {[
                  { name: "HMS Software", href: "/modules/ipd" },
                  { name: "CMS Software", href: "/modules/opd" },
                  { name: "LMS Software", href: "/modules/laboratory" },
                  { name: "PMS Pharmacy POS", href: "/modules/pharmacy" },
                  { name: "Appointments", href: "/#appointment" },
                  { name: "EMR / EHR Suite", href: "/modules/doctor" },
                  { name: "Hospital Billing", href: "/billing" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-[#17a2b8] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Useful Links (2 cols) with Smooth Top Slide */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal direction="top" delay={200} duration={750}>
              <h4 className="text-base font-bold text-white tracking-tight">
                Useful Links
              </h4>
              <ul className="space-y-3 text-sm mt-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Book Appointment", href: "/#appointment" },
                  { label: "Pricing Plans", href: "/pricing" },
                  { label: "Hospital FAQs", href: "/#faq" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Patient Billing UI", href: "/billing" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-[#17a2b8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Quick Appointment Call & Newsletter (3 cols) with Smooth Right Slide */}
          <div className="lg:col-span-3 space-y-5">
            <ScrollReveal direction="right" delay={300} duration={750}>
              {/* Appointment Banner */}
              <div className="p-4 rounded-2xl bg-[#17a2b8]/15 border border-[#17a2b8]/30 space-y-2">
                <div className="flex items-center gap-2 text-[#17a2b8]">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Appointment Number
                  </span>
                </div>
                <a
                  href="tel:+919159595353"
                  className="text-lg sm:text-xl font-black text-white hover:text-cyan-300 block tracking-tight"
                >
                  +91-91 59 59 53 53
                </a>
                <p className="text-[11px] text-slate-300">
                  Call or book doctor consultation slots instantly online.
                </p>
              </div>

              {/* Newsletter */}
              <div className="space-y-2 mt-4">
                <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Stay Updated
                </h5>
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                      required
                      className="w-full bg-[#0d1c33]/90 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8] pr-10 transition-all"
                    />
                    <button
                      type="submit"
                      aria-label="Send email subscription"
                      className="absolute right-1.5 p-1.5 text-[#17a2b8] hover:text-white transition-colors"
                    >
                      <Send className="w-3.5 h-3.5 -rotate-45" />
                    </button>
                  </div>
                  {subscribed && (
                    <p className="text-xs text-[#17a2b8] flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Subscribed successfully!
                    </p>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Secondary Info Row: Opening Hours, Inquiry Numbers & Email, Location     */}
        {/* ========================================================================= */}
        <ScrollReveal direction="bottom" delay={150} duration={750}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-slate-800/80 text-sm">
            {/* 1. Opening Hours */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <Clock className="w-4 h-4 text-[#17a2b8]" />
                <h5>Opening Hours</h5>
              </div>
              <div className="grid grid-cols-[68px_12px_1fr] items-center text-xs sm:text-sm gap-y-1.5 text-slate-300">
                <span className="font-semibold text-slate-200">Mon–Fri</span>
                <span className="text-slate-400 font-bold">:</span>
                <span>09:00 AM to 07:00 PM</span>

                <span className="font-semibold text-slate-200">Sat</span>
                <span className="text-slate-400 font-bold">:</span>
                <span>09:00 AM to 06:00 PM</span>

                <span className="font-semibold text-slate-200">Sunday</span>
                <span className="text-slate-400 font-bold">:</span>
                <span className="text-rose-400 font-bold">Holiday</span>
              </div>
            </div>

            {/* 2. Inquiry Numbers & Email */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <Phone className="w-4 h-4 text-[#17a2b8]" />
                <h5>Inquiry & Support</h5>
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-slate-300">
                <div className="grid grid-cols-[68px_12px_1fr] items-start gap-y-1">
                  <span className="font-semibold text-slate-200">Inquiry</span>
                  <span className="text-slate-400 font-bold">:</span>
                  <div className="space-y-0.5">
                    <a href="tel:+917418884418" className="hover:text-[#17a2b8] transition-colors font-medium block">
                      +91-741 888 44 18
                    </a>
                    <a href="tel:+917418884419" className="hover:text-[#17a2b8] transition-colors font-medium block">
                      +91-741 888 44 19
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-[68px_12px_1fr] items-center pt-1">
                  <span className="font-semibold text-slate-200">Email</span>
                  <span className="text-slate-400 font-bold">:</span>
                  <a href="mailto:support@medsky.in" className="text-[#17a2b8] hover:underline transition-colors font-medium">
                    support@medsky.in
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Location */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-1">
                <MapPin className="w-4 h-4 text-[#17a2b8]" />
                <h5>Location</h5>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                Nathigam Complex, 97/55, Arcot Rd,<br />
                Director&apos;s Colony, Kodambakkam,<br />
                Chennai, Tamil Nadu 600024
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* Bottom Row: Copyright & Design and Development Credit                     */}
        {/* ========================================================================= */}
        <ScrollReveal direction="bottom" delay={250} duration={750}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© Copyright 2026 MedSky. All Rights Reserved.</p>

            <p className="text-slate-300">
              Develop and design by{" "}
              <span className="text-[#17a2b8] font-bold hover:underline">
                Brain Sharp Solutions
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
