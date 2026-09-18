export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Medsky HMS and what makes it different from other healthcare platforms?",
    answer:
      "Medsky HMS is a unified cloud-native Hospital Management System that bridges the gap between clinical excellence, operational efficiency, and financial governance. Unlike fragmented legacy systems, Medsky provides a truly connected single-database architecture where OPD, IPD, Pharmacy, LIS, RIS, and Billing communicate with zero latency.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Can Medsky HMS scale as my clinic or hospital grows?",
    answer:
      "Yes, Medsky HMS is built on a modular, elastic cloud architecture. Whether you operate a 15-bed specialized day-care clinic or a 500-bed multi-specialty tertiary care hospital network across multiple locations, you can activate modules and add users seamlessly without hardware overhauls.",
    category: "Scalability",
  },
  {
    id: "faq-3",
    question: "How quickly can we start using Medsky HMS after onboarding?",
    answer:
      "Most outpatient clinics and small hospitals can go live within 7 to 14 days. For mid-to-large multi-specialty hospitals with complex LIS/PACS integrations and legacy EMR data migration, our dedicated implementation engineers complete full onboarding and staff training in 3 to 4 weeks.",
    category: "Implementation",
  },
  {
    id: "faq-4",
    question: "What does support look like after onboarding?",
    answer:
      "Every Medsky HMS deployment includes 24/7 technical assistance, continuous regulatory updates, dedicated account management, and interactive on-demand video training modules for doctors, nurses, and administrative staff.",
    category: "Support",
  },
  {
    id: "faq-5",
    question: "Can Medsky HMS manage both OPD and IPD workflows simultaneously?",
    answer:
      "Yes. Medsky HMS features dedicated suites for both Outpatient (token queues, doctor consultation rooms, rapid e-prescriptions) and Inpatient departments (bed census maps, eMAR nursing charts, doctor ward rounds, and multi-department discharge clearance).",
    category: "Clinical",
  },
  {
    id: "faq-6",
    question: "Does Medsky HMS include Pharmacy and Laboratory Information System (LIS)?",
    answer:
      "Yes, Pharmacy (with FEFO batch tracking, expiry monitoring, and POS invoicing) and Laboratory LIS (with barcode sample tracking, bi-directional analyzer interfacing, and digital pathologist sign-off) are fully integrated natively into the platform.",
    category: "Diagnostics",
  },
  {
    id: "faq-7",
    question: "How does Medsky HMS protect sensitive patient health data?",
    answer:
      "Data security is foundational. Medsky HMS incorporates strict Role-Based Access Controls (RBAC), multi-factor authentication, end-to-end TLS 1.3 encryption in transit, AES-256 encryption at rest, immutable audit trails for all clinical and financial transactions, and daily automated encrypted backups.",
    category: "Security",
  },
  {
    id: "faq-8",
    question: "How can I request a live demonstration for my hospital management team?",
    answer:
      "You can schedule a personalized 1-on-1 walkthrough by clicking 'Request a Demo' anywhere on our website or calling our dedicated healthcare solution desk at +91-91 59 59 53 53. Our clinical solutions specialist will tailor the demo to your hospital's specific department workflow.",
    category: "Demo",
  },
];
