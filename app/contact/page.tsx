import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Medsky HMS — Hospital, Clinic, Lab & Pharmacy Software Sales & Support",
  description:
    "Contact Medsky HMS in Chennai and Salem, Tamil Nadu for Hospital, Clinic, Diagnostic Lab, and Pharmacy software onboarding, pricing quotes, and 24/7 technical support.",
  path: "/contact",
  keywords: [
    "Contact Hospital Software Provider",
    "HMS Software Support Chennai",
    "HMS Software Support Salem",
    "Clinic Management Software Sales",
    "Diagnostic Lab Software Contact",
    "Pharmacy Software Support Phone",
  ],
});

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-10 bg-slate-50/50 dark:bg-[#060b14] min-h-[calc(100vh-64px)] flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Expanded Page Header */}
        <div className="text-center max-w-5xl mx-auto mb-5 sm:mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-[11px] font-bold uppercase tracking-wider">
            Contact & Enquiry
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Let&apos;s Talk About Your{" "}
            <span className="text-primary">Hospital&apos;s Workflow Needs</span>.
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our clinical solution specialists and technical support engineers are available to assist you.
          </p>
        </div>

        {/* 2-Column Grid with natural item heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
          {/* Left Info Column (5 cols) - Only needed height */}
          <div className="lg:col-span-5">
            <div className="bg-[#0a1628] text-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-800/90 shadow-xl space-y-4">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary block mb-0.5">
                  Direct Healthcare Desk
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Contact Details</h2>
                <p className="text-[11.5px] text-slate-400 mt-0.5">
                  We answer enquiries within 2-3 hours.
                </p>
              </div>

              {/* Contact Methods List */}
              <div className="space-y-3.5 text-xs sm:text-[13px]">
                {/* 1. Enquiry & Hotline */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Enquiry & Support Hotline</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 pt-0.5">
                      <a
                        href="tel:+919159595353"
                        className="font-bold text-white hover:text-primary transition-colors text-xs sm:text-sm"
                      >
                        +91-91 59 59 53 53
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Email Enquiry</span>
                    <div className="flex items-center gap-2 pt-0.5">
                      <a
                        href="mailto:support@medsky.in"
                        className="font-bold text-white hover:text-primary transition-colors text-xs sm:text-sm"
                      >
                        support@medsky.in
                      </a>
                      {/* <span className="text-slate-600">&bull;</span>
                      <a
                        href="mailto:sales@medsky.in"
                        className="text-slate-300 hover:text-primary transition-colors text-xs"
                      >
                        sales@medsky.in
                      </a> */}
                    </div>
                  </div>
                </div>

                {/* 3. Two Locations from Footer */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                      Locations / Offices
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px] leading-relaxed text-slate-300 bg-slate-900/60 p-2.5 rounded-2xl border border-slate-800">
                      {/* Corporate Branch Chennai */}
                      <div>
                        <span className="font-bold text-primary text-[10.5px] uppercase tracking-wider block mb-0.5">
                          Corporate Office
                        </span>
                        <p className="text-slate-300">
                          NO.6-B/69, Kakkan Nagar<br />
                          2nd Cross St, Adambakkam<br />
                          Chennai - 600 088
                        </p>
                      </div>

                      {/* Branch Office Salem */}
                      <div>
                        <span className="font-bold text-primary text-[10.5px] uppercase tracking-wider block mb-0.5">
                          Branch Office
                        </span>
                        <p className="text-slate-300">
                          No.90/13, Harur Main Rd<br />
                          Ayothiyapatinam<br />
                          Salem - 636 103
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Opening Hours matching Footer */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-1">Opening Hours</span>
                    <div className="grid grid-cols-[60px_10px_1fr] items-center text-[11.5px] gap-y-0.5 text-slate-300 bg-slate-900/60 p-2.5 rounded-2xl border border-slate-800">
                      <span className="font-semibold text-slate-200">Mon - Fri</span>
                      <span className="text-slate-500 font-bold">:</span>
                      <span>09:00 AM to 07:00 PM</span>

                      <span className="font-semibold text-slate-200">Saturday</span>
                      <span className="text-slate-500 font-bold">:</span>
                      <span>09:00 AM to 06:00 PM</span>

                      <span className="font-semibold text-slate-200">Sunday</span>
                      <span className="text-slate-500 font-bold">:</span>
                      <span className="text-primary font-bold">Holiday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
