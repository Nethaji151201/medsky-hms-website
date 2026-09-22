"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { submitContactForm, ContactFormData } from "@/lib/api";
import { Button } from "@/ui/Button";

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

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "Chennai",
    product: "HMS - Hospital Management Software",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await submitContactForm(formData);
    setLoading(false);

    if (res.success) {
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "Chennai",
        product: "HMS - Hospital Management Software",
        message: "",
      });
      setTimeout(() => setSuccess(false), 8000);
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xl">
      <div>
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Send Us a Message
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-[13px] mt-0.5 leading-snug">
            Whether you have questions about custom modules, enterprise pricing, or onboarding support, our team is here to assist.
          </p>
        </div>

        {success ? (
          <div className="p-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-accent-foreground dark:text-cyan-200 text-center space-y-3 animate-in fade-in my-auto">
            <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
            <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
            <p className="text-xs sm:text-sm">
              Thank you for reaching out. A Medsky representative will get back to you within 2 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Dr. Jane Smith"
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Row 2: Phone Number & City Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  City *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
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
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
              >
                {PRODUCT_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                Remarks *
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help your medical facility?"
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 text-xs border border-rose-200 dark:border-rose-800">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={loading}
              rightIcon={<Send className="w-4 h-4" />}
              className="w-full justify-center shadow-md shadow-primary/20 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider"
            >
              Send Inquiry
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
