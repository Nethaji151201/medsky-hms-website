export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Medsky?",
    answer:
      "Medsky is an integrated healthcare software platform designed for hospitals, clinics, laboratories, pharmacies, and other healthcare providers.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "What does Medsky Healthcare Software do?",
    answer:
      "Medsky helps healthcare organizations streamline administrative, clinical, billing, reporting, and operational workflows through an integrated software platform.",
    category: "Overview",
  },
  {
    id: "faq-3",
    question: "Who can use Medsky Software?",
    answer:
      "Medsky can be used by hospitals, clinics, nursing homes, diagnostic centers, laboratories, pharmacies, and other healthcare organizations.",
    category: "General",
  },
  {
    id: "faq-4",
    question: "What modules are available in Medsky Software?",
    answer:
      "Medsky offers modules including Out Patient Management (OPD), In Patient Management (IPD), EMR/EHR, Appointment Management, Pharmacy Management, Laboratory Management, Emergency Management, MRD Management, Surgery Management, Billing, Accounts, and Reports.",
    category: "Modules",
  },
  {
    id: "faq-5",
    question: "Can multiple departments use the same Medsky Software?",
    answer:
      "Yes. Different departments can work through integrated modules, helping reduce duplicate data entry and improve coordination between departments.",
    category: "Operations",
  },
  {
    id: "faq-6",
    question: "Can Medsky be accessed from multiple locations?",
    answer:
      "Yes. Medsky Healthcare Software can be accessed from anywhere through a supported network or online deployment, allowing authorized users to manage healthcare operations from multiple locations.",
    category: "Accessibility",
  },
  {
    id: "faq-7",
    question: "Can Medsky generate healthcare reports?",
    answer:
      "Yes. Medsky provides reporting capabilities to help organizations monitor areas such as patient visits, billing, laboratory activities, pharmacy transactions, and other operational information.",
    category: "Reporting",
  },
  {
    id: "faq-8",
    question: "Can Medsky help reduce paperwork?",
    answer:
      "Yes. Digitizing registration, appointments, clinical records, prescriptions, billing, laboratory reports, pharmacy transactions, and other workflows can reduce dependence on manual paperwork.",
    category: "Operations",
  },
  {
    id: "faq-9",
    question: "Can existing patient data be migrated to Medsky?",
    answer:
      "Yes. Data migration can be evaluated based on the format, structure, and quality of the existing database. The migration process can be planned during implementation.",
    category: "Migration",
  },
  {
    id: "faq-10",
    question: "Can Medsky manage accounts and financial workflows?",
    answer:
      "Yes. Account-related functionality is available within the relevant Medsky modules to support healthcare organizations with their financial and billing workflows.",
    category: "Billing & Finance",
  },
  {
    id: "faq-11",
    question: "Does Medsky provide technical support?",
    answer:
      "Yes. Medsky provides technical support and assistance for software implementation, troubleshooting, software-related requirements, and updates according to the applicable support or AMC plan.",
    category: "Support",
  },
];
