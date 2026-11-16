"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { submitContactForm, ContactFormData } from "@/lib/api";
import { Button } from "@/ui/Button";
import { isValidEmail, isValidPhone, sanitizePhoneNumber } from "@/lib/validation";

const PRODUCT_OPTIONS = [
  "Hospital Management Software",
  "Clinic Management Software",
  "Laboratory Management Software",
  "Pharmacy Management Software",
  "Appointment Management Software",
  "Patient EMR / EHR",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    product: PRODUCT_OPTIONS[0],
    message: "",
  });

  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid work email address (e.g. name@clinic.com).");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    const payload = { ...formData };
    const res = await submitContactForm(payload);
    setLoading(false);

    if (res.success) {
      setSubmittedData(payload);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        product: PRODUCT_OPTIONS[0],
        message: "",
      });
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

        {success && submittedData ? (
          <div className="p-6 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center space-y-4 animate-in fade-in my-auto">
            <CheckCircle2 className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto" />
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Your message has been delivered.
              </p>
            </div>

            {/* Submitted Enquiry Summary Card */}
            <div className="bg-white dark:bg-slate-900/90 rounded-xl p-4 text-left border border-teal-100 dark:border-slate-800 text-xs space-y-2 shadow-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                Enquiry Details
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300 pt-1">
                <div>
                  <span className="font-semibold text-slate-500 dark:text-slate-400">Customer Name: </span>
                  <span className="text-slate-900 dark:text-white font-medium">{submittedData.fullName}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 dark:text-slate-400">Contact Number: </span>
                  <span className="text-slate-900 dark:text-white font-medium">{submittedData.phone}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 dark:text-slate-400">Email Address: </span>
                  <span className="text-slate-900 dark:text-white font-medium">{submittedData.email}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 dark:text-slate-400">City: </span>
                  <span className="text-slate-900 dark:text-white font-medium">{submittedData.city || "Not specified"}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">Product: </span>
                  <span className="text-teal-700 dark:text-teal-300 font-semibold">{submittedData.product}</span>
                </div>
                <div className="sm:col-span-2 bg-slate-50 dark:bg-slate-850 p-2.5 rounded-lg border border-slate-150 dark:border-slate-800 mt-1">
                  <span className="block font-semibold text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Remarks / Message:</span>
                  <p className="text-slate-800 dark:text-slate-200 italic whitespace-pre-wrap">{submittedData.message}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setSuccess(false);
                  setSubmittedData(null);
                }}
                className="text-xs font-semibold"
              >
                Send Another Message
              </Button>
            </div>
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

            {/* Row 2: Phone Number & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  minLength={10}
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: sanitizePhoneNumber(e.target.value) })}
                  placeholder="9159595353 (10 digits)"
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                {formData.phone && formData.phone.length > 0 && formData.phone.length < 10 && (
                  <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-1">
                    Please enter 10 digits ({formData.phone.length}/10 entered)
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Chennai"
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
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
              Send Enquiry
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
