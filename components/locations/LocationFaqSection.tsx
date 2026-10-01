"use client";

import React from "react";
import { Accordion, AccordionItemData } from "@/ui/Accordion";
import { SectionHeader } from "@/ui/SectionHeader";
import { ScrollReveal } from "@/ui/ScrollReveal";

interface LocationFaqSectionProps {
  locationName: string;
  locationType: "state" | "city" | "area";
  parentName?: string;
}

export function LocationFaqSection({
  locationName,
  locationType,
  parentName,
}: LocationFaqSectionProps) {
  const placeText = parentName ? `${locationName}, ${parentName}` : locationName;

  const faqItems: AccordionItemData[] = [
    {
      id: "loc-faq-1",
      question: `What makes Medsky the best Hospital & Clinic Software in ${locationName}?`,
      answer: `Medsky HMS is specifically designed for modern healthcare practices in ${placeText}. It unifies Outpatient (OPD) queue tokens, Inpatient (IPD) bed allocation, Laboratory Information Systems (LIS) with analyzer interfacing, Pharmacy POS with FEFO expiry control, and ABDM M1/M2/M3 compliance on a ultra-fast cloud engine with local on-site support.`,
    },
    {
      id: "loc-faq-2",
      question: `How fast can Medsky HMS be deployed in our ${locationName} clinic or hospital?`,
      answer: `Standard clinic setups in ${locationName} can be deployed and fully operational within 24 to 48 hours. For larger multi-specialty hospitals with inpatient wards and diagnostic laboratories, our technical team completes end-to-end data migration, hardware interfacing, and staff training in 7 to 14 days.`,
    },
    {
      id: "loc-faq-3",
      question: `Is Medsky HMS compliant with Ayushman Bharat Digital Mission (ABDM) and NABH in ${locationName}?`,
      answer: `Yes, Medsky HMS is 100% ABDM Milestone 1, 2, and 3 compliant, allowing instant ABHA ID creation, health record linking, and gateway transactions. It also provides complete NABH-ready clinical documentation, nurse handover charts, and strict audit logs.`,
    },
    {
      id: "loc-faq-4",
      question: `Does Medsky provide on-site training and technical support in ${locationName}?`,
      answer: `Yes! We provide dedicated local support and on-site staff training for doctors, receptionists, nurses, lab technicians, and pharmacists in ${placeText}, backed by our 24/7 hotline at +91-91 59 59 53 53.`,
    },
    {
      id: "loc-faq-5",
      question: `Can diagnostic labs in ${locationName} connect their blood and biochemistry analyzers to Medsky?`,
      answer: `Yes, Medsky LMS / LIS features bi-directional RS232 and TCP/IP analyzer interfacing. Test orders flow straight from doctor prescriptions to analyzer machines, and calibrated results transfer automatically to the digital report with zero manual typing errors.`,
    },
    {
      id: "loc-faq-6",
      question: `How can I schedule a live demo or get pricing for our medical facility in ${locationName}?`,
      answer: `You can submit an enquiry through our booking form on this page, or call our direct solutions desk at +91-91 59 59 53 53. We will tailor a customized software walkthrough matching your department requirements in ${locationName}.`,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-[#0c1527] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="top">
          <SectionHeader
            badge="Frequently Asked Questions"
            title={`Common Questions in`}
            titleHighlight={locationName}
            description={`Everything you need to know about implementing Medsky HMS in ${placeText}.`}
          />
        </ScrollReveal>

        <ScrollReveal direction="bottom" delay={150}>
          <div className="mt-8">
            <Accordion items={faqItems} allowMultiple={false} defaultOpenId="loc-faq-1" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
