import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Badge } from "@/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Medsky HMS — Hospital, Clinic, Lab & Pharmacy Software Sales & Support",
  description:
    "Contact Medsky HMS in Chennai, Tamil Nadu for Hospital, Clinic, Diagnostic Lab, and Pharmacy software onboarding, pricing quotes, and 24/7 technical support.",
  path: "/contact",
  keywords: [
    "Contact Hospital Software Provider",
    "HMS Software Support Chennai",
    "Clinic Management System Sales",
    "Diagnostic Lab Software Contact",
    "Pharmacy Software Support Phone",
  ],
});

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact & Inquiries"
          title="Let's Talk About Your"
          titleHighlight="Hospital's Workflow Needs."
          description="Our clinical solution specialists and technical support engineers are available to assist you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Info Column (5 cols) matching Screenshot 1 contact details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#17a2b8] block mb-1">
                  Direct Healthcare Desk
                </span>
                <h3 className="text-2xl font-bold">Contact Details</h3>
                <p className="text-xs text-slate-400 mt-1">
                  We answer hospital leadership inquiries within 2 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#17a2b8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Emergency & Sales Hotline</span>
                    <a
                      href="tel:+919159595353"
                      className="text-base font-bold text-white hover:text-[#17a2b8] transition-colors"
                    >
                      +91-91 59 59 53 53
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#17a2b8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email Inquiries</span>
                    <a
                      href="mailto:support@medsky.in"
                      className="text-base font-bold text-white hover:text-[#17a2b8] transition-colors"
                    >
                      support@medsky.in
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">sales@medsky.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#17a2b8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Headquarters</span>
                    <p className="text-white font-medium text-xs leading-relaxed">
                      Nathigam Complex, 97/55, Arcot Rd,<br />
                      Director&apos;s Colony, Kodambakkam,<br />
                      Chennai, Tamil Nadu 600024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#17a2b8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs text-slate-400 block mb-1">Working Hours</span>
                    <div className="grid grid-cols-[68px_12px_1fr] items-center text-xs text-slate-300 gap-y-1">
                      <span className="font-semibold text-slate-200">Mon–Fri</span>
                      <span className="text-slate-400 font-bold">:</span>
                      <span className="text-white font-medium">09:00 - 19:00</span>

                      <span className="font-semibold text-slate-200">Sat</span>
                      <span className="text-slate-400 font-bold">:</span>
                      <span className="text-slate-300">09:00 - 18:00</span>

                      <span className="font-semibold text-slate-200">Sunday</span>
                      <span className="text-slate-400 font-bold">:</span>
                      <span className="text-rose-400 font-bold">Holiday</span>
                    </div>
                    <p className="text-[#17a2b8] text-xs font-semibold mt-1.5">Emergency 24/7 Technical Support</p>
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
