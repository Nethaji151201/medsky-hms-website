import React from "react";
import { Building2, Stethoscope, FlaskConical, Pill, ShieldCheck, HeartPulse } from "lucide-react";

export function TrustBar() {
  const departments = [
    { label: "Hospital Operations", icon: Building2, desc: "OPD, IPD & ER" },
    { label: "Clinical Management", icon: Stethoscope, desc: "Doctor EMR & Vitals" },
    { label: "Pharmacy & POS", icon: Pill, desc: "FEFO & Expiry Tracking" },
    { label: "Laboratory LIS", icon: FlaskConical, desc: "Analyzer Interfacing" },
    { label: "Revenue Cycle", icon: HeartPulse, desc: "Billing & Insurance TPA" },
    { label: "Data Governance", icon: ShieldCheck, desc: "RBAC & Audit Trails" },
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Everything your hospital needs • One intelligent platform
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.label}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:border-teal-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {dept.label}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{dept.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
