"use client";

import React, { useState } from "react";
import {
  Activity,
  Users,
  Bed,
  CreditCard,
  Pill,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<"opd" | "ipd" | "pharmacy" | "billing">("opd");

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-700/80 bg-slate-950 text-slate-100 shadow-2xl overflow-hidden text-xs sm:text-sm">
      {/* Browser Window Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
            medsky-hms.app/console/hospital-dashboard
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-medium border border-teal-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Live Hospital Telemetry
          </span>
        </div>
      </div>

      {/* Dashboard Sub-Header & Navigation Tabs */}
      <div className="px-4 sm:px-6 py-3 bg-slate-900/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { id: "opd", label: "OPD Live Queue", icon: Users },
            { id: "ipd", label: "IPD Bed Census", icon: Bed },
            { id: "pharmacy", label: "Pharmacy & FEFO", icon: Pill },
            { id: "billing", label: "Revenue & TPA", icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5 transition-all text-xs ${
                  isActive
                    ? "bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="text-[11px] text-slate-400 hidden md:flex items-center gap-2">
          <span>Facility: <strong>City General Hospital (Branch #1)</strong></span>
        </div>
      </div>

      {/* Main Preview Content */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* KPI Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-medium">Today&apos;s OPD Footfall</span>
              <Users className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">248 <span className="text-xs text-teal-400 font-normal">+18%</span></div>
            <p className="text-[10px] text-slate-500 mt-1">Avg turnaround: 14 mins</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-medium">Bed Occupancy Rate</span>
              <Bed className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">88.4%</div>
            <p className="text-[10px] text-slate-500 mt-1">115 / 130 Beds Occupied</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-medium">Pending Diagnostic Reports</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">12 <span className="text-xs text-slate-400 font-normal">LIS / RIS</span></div>
            <p className="text-[10px] text-slate-500 mt-1">0 Critical values overdue</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] font-medium">Today&apos;s Revenue Flow</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">$42,850</div>
            <p className="text-[10px] text-emerald-400 mt-1">94% Cashless settled</p>
          </div>
        </div>

        {/* Tab 1: OPD Live Queue */}
        {activeTab === "opd" && (
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden">
            <div className="px-4 py-3 bg-slate-900/80 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-400" />
                <span className="font-semibold text-xs text-white">Active OPD Waiting & Consultation Queue</span>
              </div>
              <span className="text-[11px] text-slate-400">Dr. Sarah Mitchell (Cardiology - Room 104)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-medium bg-slate-900/30">
                    <th className="p-3">Token #</th>
                    <th className="p-3">UHID / Patient</th>
                    <th className="p-3">Vitals (BP / SpO2 / Temp)</th>
                    <th className="p-3">Chief Complaint</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="bg-teal-950/30">
                    <td className="p-3 font-bold text-teal-300">T-041 (Calling)</td>
                    <td className="p-3 font-medium text-white">MED-9024 • James Wilson (48/M)</td>
                    <td className="p-3 text-slate-300">130/85 mmHg • 98% • 98.4°F</td>
                    <td className="p-3 text-slate-400">Chest tightness on exertion</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-semibold">
                        In Consultation
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <span className="text-teal-400 font-semibold cursor-pointer hover:underline">
                        Open EMR →
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-300">T-042 (Next)</td>
                    <td className="p-3 font-medium text-white">MED-9025 • Rebecca Torres (34/F)</td>
                    <td className="p-3 text-slate-300">118/75 mmHg • 99% • 98.6°F</td>
                    <td className="p-3 text-slate-400">Palpitations post medication</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-semibold">
                        Vitals Done
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <span className="text-slate-400 hover:text-white cursor-pointer">Call Patient</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">T-043</td>
                    <td className="p-3 font-medium text-white">MED-9028 • David K. (62/M)</td>
                    <td className="p-3 text-slate-400">In Triage Screening</td>
                    <td className="p-3 text-slate-400">Routine Cardiac Follow-Up</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold">
                        Waiting in Lounge
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <span className="text-slate-400">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: IPD Bed Census */}
        {activeTab === "ipd" && (
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs text-white">Ward 3A • General Surgical & ICU Care</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1 text-teal-400"><span className="w-2 h-2 rounded-full bg-teal-400" /> Occupied (18)</span>
                <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Vacant (4)</span>
                <span className="flex items-center gap-1 text-amber-400"><span className="w-2 h-2 rounded-full bg-amber-400" /> Discharging (2)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
              {Array.from({ length: 12 }).map((_, i) => {
                const bedNum = `30${i + 1}`;
                const isVacant = i === 3 || i === 7;
                const isDischarge = i === 1;
                return (
                  <div
                    key={bedNum}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      isVacant
                        ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-300"
                        : isDischarge
                        ? "border-amber-500/30 bg-amber-950/20 text-amber-300"
                        : "border-slate-700 bg-slate-900/90 text-slate-200"
                    }`}
                  >
                    <Bed className="w-4 h-4 mx-auto mb-1 opacity-80" />
                    <div className="font-bold text-xs">Bed {bedNum}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {isVacant ? "Available" : isDischarge ? "Discharge" : "Occupied"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Pharmacy & FEFO */}
        {activeTab === "pharmacy" && (
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs text-white">Prescription Dispensing Console & FEFO Batches</span>
              <span className="text-[11px] text-teal-400">Barcode Scanner: Online</span>
            </div>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Atorvastatin 20mg (Tab)</div>
                  <div className="text-[11px] text-slate-400">Batch: AT-2024 • Exp: Nov 2027 • Main Store Shelf B-04</div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold">
                    1,420 Units In Stock
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Amoxicillin + Clavulanic Acid 625mg</div>
                  <div className="text-[11px] text-amber-300">FEFO Priority: Batch AMX-89 expires in 42 days (Dispense first)</div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-semibold">
                    120 Units (Near Expiry)
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Revenue & TPA */}
        {activeTab === "billing" && (
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xs text-white">Real-Time Revenue Cycle & Cashless TPA Tracker</span>
              <span className="text-[11px] text-emerald-400">Day-End Status: Balanced</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[11px] text-slate-400">OPD Cash / Card Collections</div>
                <div className="text-lg font-bold text-white mt-1">$14,200.00</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[11px] text-slate-400">IPD Approved TPA Claims</div>
                <div className="text-lg font-bold text-white mt-1">$28,650.00</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[11px] text-slate-400">Pharmacy POS Settlements</div>
                <div className="text-lg font-bold text-white mt-1">$8,410.00</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
