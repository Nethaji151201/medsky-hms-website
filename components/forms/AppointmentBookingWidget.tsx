"use client";

import React, { useState } from "react";
import { Phone, CheckCircle2, Send } from "lucide-react";
import { submitAppointmentBooking, AppointmentBookingData } from "@/lib/api";
import { Button } from "@/ui/Button";
import { ScrollReveal } from "@/ui/ScrollReveal";

const PRODUCT_OPTIONS = [
  "HMS - Hospital Management Software",
  "CMS - Clinic Management Software",
  "LMS - Laboratory Management Software",
  "PMS - Pharmacy Management Software",
  "Online Appointment Booking",
  "Doctor Clinical EMR",
  "Integrated Multi-Specialty Hospital Suite",
];

const CITY_OPTIONS = [
  "Chennai",
  "Salem",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Tiruppur",
  "Erode",
  "Vellore",
  "Bengaluru / Bangalore",
  "Hyderabad",
  "Mumbai",
  "Delhi / NCR",
  "Other City",
];

export function AppointmentBookingWidget({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState<AppointmentBookingData>({
    name: "",
    email: "",
    phone: "",
    city: "Chennai",
    product: "HMS - Hospital Management Software",
    remarks: "",
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
        name: "",
        email: "",
        phone: "",
        city: "Chennai",
        product: "HMS - Hospital Management Software",
        remarks: "",
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

            {/* Right Form: Clean Grid Layout matching Send Us a Message */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={750}>
                <div className="bg-slate-50/70 dark:bg-slate-800/40 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                  <div className="mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Send Us a Message
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-[13px] mt-0.5 leading-snug">
                      Whether you have questions about custom modules, enterprise pricing, or onboarding support, our team is here to assist.
                    </p>
                  </div>

                  {successMessage ? (
                    <div className="p-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-accent-foreground dark:text-cyan-200 text-center space-y-3 animate-in fade-in">
                      <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
                      <h4 className="text-lg font-bold">Enquiry Sent Successfully!</h4>
                      <p className="text-xs sm:text-sm">{successMessage}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Dr. Jane Smith"
                            className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jane.smith@clinic.com"
                            className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone Number & City */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91-91 59 59 53 53"
                            className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                            City *
                          </label>
                          <select
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
                          >
                            {CITY_OPTIONS.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Product Dropdown */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                          Product *
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
                        >
                          {PRODUCT_OPTIONS.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Row 4: Remarks */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                          Remarks *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={formData.remarks}
                          onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                          placeholder="How can we help your medical facility?"
                          className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                        />
                      </div>

                      {errorMessage && (
                        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs">
                          {errorMessage}
                        </div>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        isLoading={loading}
                        rightIcon={<Send className="w-4 h-4" />}
                        className="w-full justify-center shadow-md shadow-primary/25 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider"
                      >
                        Send Inquiry
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
