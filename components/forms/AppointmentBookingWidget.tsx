"use client";

import React, { useState } from "react";
import { Phone, CheckCircle2, ChevronDown, User, MapPin, Stethoscope } from "lucide-react";
import { submitAppointmentBooking, AppointmentBookingData } from "@/lib/api";
import { Button } from "@/ui/Button";
import { ScrollReveal } from "@/ui/ScrollReveal";

const SPECIALTIES = [
  "Select Specialty",
  "Outpatient (OPD) Consultation",
  "Inpatient (IPD) Care",
  "Cardiology & Echo Screening",
  "Orthopedics & Joint Care",
  "Pediatrics & Child Health",
  "Neurology & Diagnostics",
  "Laboratory & Blood Tests",
  "Radiology (CT / MRI / X-Ray)",
  "Dental & Maxillofacial Care",
  "General Health Checkup",
];

export function AppointmentBookingWidget({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState<AppointmentBookingData>({
    treatment: "",
    name: "",
    phone: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    const res = await submitAppointmentBooking(formData);
    setLoading(false);

    if (res.success) {
      setSuccessMessage(res.message || "Enquiry booked successfully! Our specialist team will reach out shortly.");
      setFormData({
        treatment: "",
        name: "",
        phone: "",
        state: "",
      });
      setTimeout(() => setSuccessMessage(null), 8000);
    } else {
      setErrorMessage(res.message || "Failed to book appointment. Please try again.");
    }
  };

  return (
    <section id="appointment" className={`w-full py-16 sm:py-24 bg-slate-50 dark:bg-[#0c1527] ${className}`}>
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white dark:bg-slate-900 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Header Info with Smooth Left Transition */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="left" duration={750}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/80 dark:border-cyan-800 text-accent-foreground dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Enquiry Booking
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mt-2">
                  Make an Enquiry Now!
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
                  Connect with our certified medical specialists or book an operational walkthrough for your clinic workflow.
                </p>

                {/* Call Center Block */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-primary dark:text-cyan-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Enquiry Hotline
                    </span>
                    <a
                      href="tel:+919159595353"
                      className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-cyan-400 transition-colors tracking-wide"
                    >
                      +91-91 59 59 53 53
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Form: Single Column Vertical Stack Layout */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={750}>
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                  {/* 1. Your Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name *"
                      required
                      className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm"
                    />
                  </div>

                  {/* 2. Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number *"
                      required
                      className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm"
                    />
                  </div>

                  {/* 3. City / State */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      City / State
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="City / State"
                      className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm"
                    />
                  </div>

                  {/* 4. Select Specialty */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Select Specialty
                    </label>
                    <div className="relative">
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full appearance-none bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 transition-all pr-10 cursor-pointer shadow-sm"
                      >
                        {SPECIALTIES.map((s, idx) => (
                          <option key={s} value={idx === 0 ? "" : s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Feedback Messages */}
                  {successMessage && (
                    <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-accent-foreground dark:text-cyan-200 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{successMessage}</span>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto px-8 shadow-lg shadow-primary/20"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Submit Enquiry"}
                    </Button>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
