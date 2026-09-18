"use client";

import React, { useState } from "react";
import { CheckCircle2, Building2, Users, Bed, Calendar, Clock, ArrowRight } from "lucide-react";
import { submitDemoRequest, DemoRequestData } from "@/lib/api";
import { Button } from "@/ui/Button";

const MODULE_OPTIONS = [
  "OPD & Token Queue",
  "IPD & Bed Management",
  "Doctor Clinical EMR",
  "Pharmacy & FEFO POS",
  "Laboratory LIS",
  "Radiology & PACS",
  "Hospital Billing & TPA",
  "Nursing Station eMAR",
  "Executive MIS Reports",
  "Inventory & Procurement",
];

export function RequestDemoForm({ initialPlan = "professional" }: { initialPlan?: string }) {
  const [formData, setFormData] = useState<DemoRequestData>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    role: "Medical Superintendent",
    facilityType: "Hospital (50-150 beds)",
    bedCount: "100",
    selectedModules: ["OPD & Token Queue", "IPD & Bed Management", "Doctor Clinical EMR", "Hospital Billing & TPA"],
    preferredDate: "",
    preferredTime: "11:00 AM",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleModule = (mod: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedModules: prev.selectedModules.includes(mod)
        ? prev.selectedModules.filter((m) => m !== mod)
        : [...prev.selectedModules, mod],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await submitDemoRequest(formData);
    setLoading(false);

    if (res.success) {
      setSuccess(true);
    } else {
      setError(res.message);
    }
  };

  if (success) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-teal-500/40 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 bg-teal-50 dark:bg-teal-950/60 rounded-full flex items-center justify-center mx-auto text-teal-600 dark:text-teal-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Demo Request Confirmed!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.fullName}</span>. We have scheduled your personalized Medsky HMS demonstration for <span className="font-semibold text-teal-600 dark:text-teal-400">{formData.organization || "your healthcare facility"}</span>.
        </p>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 max-w-md mx-auto text-left text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
          <p><strong className="text-slate-800 dark:text-slate-200">Selected Modules:</strong> {formData.selectedModules.join(", ")}</p>
          <p><strong className="text-slate-800 dark:text-slate-200">Preferred Slot:</strong> {formData.preferredDate || "Earliest available"} at {formData.preferredTime}</p>
        </div>
        <Button variant="primary" href="/" size="md" className="mt-4">
          Back to Homepage
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
      {/* Contact Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-teal-600" />
          1. Contact & Organization Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Dr. Robert Chen"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Hospital / Clinic Name *
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. St. Jude Memorial Hospital"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Work Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="robert.chen@hospital.com"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Phone / Mobile Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 019-2834"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Facility Sizing */}
      <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-teal-600" />
          2. Healthcare Facility Scale
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Your Role
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>Medical Superintendent</option>
              <option>Hospital CEO / Director</option>
              <option>Chief Medical Officer</option>
              <option>IT / Bio-Medical Head</option>
              <option>Operations Manager</option>
              <option>Consulting Physician</option>
              <option>Finance / Billing Head</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Facility Type
            </label>
            <select
              value={formData.facilityType}
              onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>Polyclinic / Day Care</option>
              <option>Hospital (25-50 beds)</option>
              <option>Hospital (50-150 beds)</option>
              <option>Tertiary Hospital (150-500 beds)</option>
              <option>Multi-Hospital Group / Chain</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Number of Beds
            </label>
            <input
              type="number"
              value={formData.bedCount}
              onChange={(e) => setFormData({ ...formData, bedCount: e.target.value })}
              placeholder="e.g. 80"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Modules Selector */}
      <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
          3. Modules to Highlight in Walkthrough
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {MODULE_OPTIONS.map((mod) => {
            const isChecked = formData.selectedModules.includes(mod);
            return (
              <button
                type="button"
                key={mod}
                onClick={() => toggleModule(mod)}
                className={`text-xs p-2.5 rounded-xl border text-left font-medium transition-all ${
                  isChecked
                    ? "bg-teal-50 border-teal-500 text-teal-800 dark:bg-teal-950/60 dark:border-teal-500 dark:text-teal-200"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <div className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                    isChecked ? "bg-teal-600 text-white" : "border border-slate-400"
                  }`}>
                    {isChecked && "✓"}
                  </div>
                  <span className="truncate">{mod}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Schedule Slot */}
      <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-teal-600" />
          4. Preferred Demonstration Slot
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Preferred Date
            </label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Preferred Time
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>09:30 AM - 10:30 AM</option>
              <option>11:00 AM - 12:00 PM</option>
              <option>02:00 PM - 03:00 PM</option>
              <option>04:30 PM - 05:30 PM</option>
              <option>06:30 PM - 07:30 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
            Additional Requirements / Current Software Pain Points
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your existing setup (e.g. replacing legacy desktop software, adding PACS integration, multi-branch requirement)..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="xl"
          isLoading={loading}
          rightIcon={<ArrowRight className="w-5 h-5" />}
          className="w-full justify-center shadow-lg shadow-teal-500/20"
        >
          Confirm Demo Booking
        </Button>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
          Instant booking confirmation • No credit card required • NDA protected
        </p>
      </div>
    </form>
  );
}
