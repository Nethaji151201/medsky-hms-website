export interface ModuleFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ModuleTestimonialItem {
  id: string;
  name: string;
  role: string;
  hospital: string;
  rating: number;
  quote: string;
  avatar: string;
  initials: string;
}

export interface ModuleAboutData {
  title: string;
  description: string;
  image?: string;
  badge?: string;
  highlights: string[];
}

export interface ModuleBenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface ModuleWhyMedskyItem {
  title: string;
  description: string;
  icon: string;
}

export interface ModuleData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  category: "Clinical" | "Operations" | "Diagnostics" | "Financial" | "Administrative";
  badge: string;
  heroHighlights: string[];
  about?: ModuleAboutData;
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits?: ModuleBenefitItem[];
  whyMedsky?: ModuleWhyMedskyItem[];
  workflowSteps: {
    stepNumber: string;
    title: string;
    detail: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  relatedModules: string[];
  testimonials?: ModuleTestimonialItem[];
  faqs?: ModuleFAQItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  badge: string;
}

export interface HMSModuleDirectoryItem {
  id: string;
  name: string;
  slug: string;
  category: "Clinical" | "Operations" | "Diagnostics" | "Financial" | "Administrative";
  iconName: string;
  description: string;
  heroHighlights: string[];
  metrics: { value: string; label: string }[];
}

export const HMS_MODULES_DIRECTORY: HMSModuleDirectoryItem[] = [
  {
    id: "opd",
    name: "OPD Management Software",
    slug: "opd",
    category: "Clinical",
    iconName: "Activity",
    description:
      "Streamline outpatient operations by managing patient registration, consultations, clinical records, billing, and follow-up visits through an organized workflow.",
    heroHighlights: [
      "Patient Registration, UHID Generation & Image Capture",
      "Vitals, Medical History & Token Management",
      "OPD Billing, Accounts & Follow-up Management",
    ],
    metrics: [{ value: "45%", label: "Wait Time Cut" }],
  },
  {
    id: "ipd",
    name: "IPD Management Software",
    slug: "ipd",
    category: "Clinical",
    iconName: "Bed",
    description:
      "Manage the complete inpatient journey, from patient admission and bed allocation to nursing care, billing, and discharge.",
    heroHighlights: [
      "Patient Admission, Bed & Ward Management",
      "Nursing, Doctor Visits, Medication & Clinical Documentation",
      "IPD Billing, Discharge Summary & Reports",
    ],
    metrics: [{ value: "98%", label: "Bed Utilization" }],
  },
  {
    id: "laboratory",
    name: "Laboratory Management Software",
    slug: "laboratory",
    category: "Diagnostics",
    iconName: "FlaskConical",
    description:
      "Simplify laboratory operations by managing test registration, sample processing, result entry, billing, and report generation.",
    heroHighlights: [
      "Lab Registration, Test & Sample Management",
      "Barcode Management, Result Entry & Report Generation",
      "Lab Billing, Patient History & Laboratory Reports",
    ],
    metrics: [{ value: "70%", label: "Faster Turnaround" }],
  },
  {
    id: "pharmacy",
    name: "Pharmacy Management Software",
    slug: "pharmacy",
    category: "Operations",
    iconName: "Pill",
    description:
      "Manage pharmacy operations efficiently, including medicine purchases, sales, inventory, expiry monitoring, and financial transactions.",
    heroHighlights: [
      "Purchase, Sales & Supplier Management",
      "Stock, Batch & Expiry Management",
      "Pharmacy Billing, Margin Analysis & Accounts",
    ],
    metrics: [{ value: "100%", label: "Stock Accuracy" }],
  },
  {
    id: "insurance",
    name: "Insurance Management Software",
    slug: "insurance",
    category: "Financial",
    iconName: "ShieldCheck",
    description:
      "Simplify hospital insurance operations by organizing patient insurance records, billing, claim processing, tracking, and payment settlements.",
    heroHighlights: [
      "Insurance Patient Registration & Billing",
      "Claim Preparation, Submission & Tracking",
      "Pending Claims, Payment Tracking & Reports",
    ],
    metrics: [{ value: "Fast", label: "Claim Processing" }],
  },
  {
    id: "surgery",
    name: "Surgery / OT Management Software",
    slug: "surgery",
    category: "Clinical",
    iconName: "Activity",
    description:
      "Coordinate surgical operations by managing OT schedules, procedure bookings, pre-operative assessments, and post-operative documentation.",
    heroHighlights: [
      "OT Scheduling, Calendar & Surgery Booking",
      "Pre-operative Assessment, Anesthesia & Surgical Records",
      "OT Consumables, Surgery Billing & Reports",
    ],
    metrics: [{ value: "Zero", label: "Scheduling Conflicts" }],
  },
  {
    id: "mrd",
    name: "MRD Management Software",
    slug: "mrd",
    category: "Administrative",
    iconName: "Database",
    description:
      "Organize hospital medical records through efficient document management, indexing, tracking, and quick retrieval of patient information.",
    heroHighlights: [
      "Patient Medical Records & Document Management",
      "Medical Record Indexing, Tracking & Retrieval",
      "Discharge Records, Patient History & MRD Reports",
    ],
    metrics: [{ value: "Instant", label: "Record Retrieval" }],
  },
  {
    id: "daycare",
    name: "Day Care Management Software",
    slug: "daycare",
    category: "Clinical",
    iconName: "Calendar",
    description:
      "Manage short-stay treatments and procedures with streamlined patient registration, scheduling, clinical workflows, billing, and discharge.",
    heroHighlights: [
      "Day Care Registration, Appointment & Scheduling",
      "Procedure, Doctor Consultation & Nursing Management",
      "Medication, Billing & Discharge Management",
    ],
    metrics: [{ value: "Fast", label: "Turnaround Time" }],
  },
  {
    id: "dialysis",
    name: "Dialysis Management Software",
    slug: "dialysis",
    category: "Clinical",
    iconName: "HeartPulse",
    description:
      "Manage dialysis services through organized patient records, treatment scheduling, session documentation, and billing workflows.",
    heroHighlights: [
      "Dialysis Patient Registration & Session Scheduling",
      "Pre/Post-Dialysis Records, Vital Signs & Treatment Documentation",
      "Dialysis Billing, Patient History & Reports",
    ],
    metrics: [{ value: "Complete", label: "Session Tracking" }],
  },
];

export interface CMSModuleDirectoryItem {
  id: string;
  name: string;
  slug: string;
  category: "Clinical" | "Operations" | "Diagnostics" | "Financial" | "Administrative";
  iconName: string;
  description: string;
  heroHighlights: string[];
  metrics: { value: string; label: string }[];
}

export const CMS_MODULES_DIRECTORY: CMSModuleDirectoryItem[] = [
  {
    id: "patient-registration",
    name: "Patient Registration Management",
    slug: "opd",
    category: "Administrative",
    iconName: "FileText",
    description:
      "Simplify patient onboarding with an organized registration system that maintains accurate patient information and visit details.",
    heroHighlights: [
      "Quick patient registration and UHID generation.",
      "Patient profile and demographic information management.",
      "Patient photo capture and contact details.",
      "Previous visit history and follow-up tracking.",
    ],
    metrics: [{ value: "Zero", label: "Wait Registration" }],
  },
  {
    id: "emr",
    name: "EMR – Electronic Medical Records",
    slug: "doctor",
    category: "Clinical",
    iconName: "PenTool",
    description:
      "Manage patient consultations and clinical information digitally with structured electronic medical records.",
    heroHighlights: [
      "Digital consultation notes and clinical documentation.",
      "Patient vitals, symptoms and diagnosis recording.",
      "Digital prescriptions and treatment plans.",
      "Previous consultation and medical history access.",
    ],
    metrics: [{ value: "100%", label: "Digital Prescriptions" }],
  },
  {
    id: "ehr",
    name: "EHR – Electronic Health Records",
    slug: "doctor",
    category: "Clinical",
    iconName: "Database",
    description:
      "Maintain comprehensive patient health information in an organized digital format for better continuity of care.",
    heroHighlights: [
      "Centralized patient health records.",
      "Medical history, allergies and diagnosis tracking.",
      "Laboratory reports and investigation records.",
      "Longitudinal patient health information management.",
    ],
    metrics: [{ value: "Unified", label: "Health Records" }],
  },
  {
    id: "appointments",
    name: "Appointment Management",
    slug: "appointments",
    category: "Operations",
    iconName: "Calendar",
    description:
      "Simplify doctor scheduling and patient appointments with an organized appointment management system.",
    heroHighlights: [
      "Doctor-wise appointment scheduling.",
      "Daily and weekly appointment calendars.",
      "Appointment confirmation and reminder notifications.",
      "Patient token and waiting queue management.",
    ],
    metrics: [{ value: "75%", label: "Fewer No-Shows" }],
  },
  {
    id: "billing",
    name: "Billing & Accounts Management",
    slug: "billing",
    category: "Financial",
    iconName: "Receipt",
    description:
      "Manage clinic billing and financial transactions efficiently with an integrated billing and accounts module.",
    heroHighlights: [
      "Consultation and procedure billing.",
      "Cash, card and digital payment tracking.",
      "Receipt generation and payment management.",
      "Daily collection and financial reports.",
    ],
    metrics: [{ value: "100%", label: "Billing Accuracy" }],
  },
];

export interface LMSModuleDirectoryItem {
  id: string;
  name: string;
  slug: string;
  category: "Clinical" | "Operations" | "Diagnostics" | "Financial" | "Administrative";
  iconName: string;
  description: string;
  heroHighlights: string[];
  metrics: { value: string; label: string }[];
}

export const LMS_MODULES_DIRECTORY: LMSModuleDirectoryItem[] = [
  {
    id: "patient-registration",
    name: "Patient Registration",
    slug: "laboratory",
    category: "Diagnostics",
    iconName: "FileText",
    description:
      "Manage patient information and diagnostic test requests through a streamlined registration process.",
    heroHighlights: [
      "Register patients and maintain demographic details.",
      "Manage test bookings, profiles, and packages.",
      "Generate patient IDs and sample identification details.",
      "Access previous test records and patient history.",
    ],
    metrics: [{ value: "Fast", label: "Patient Onboarding" }],
  },
  {
    id: "sample-processing",
    name: "Sample Processing",
    slug: "laboratory",
    category: "Diagnostics",
    iconName: "QrCode",
    description:
      "Manage laboratory samples systematically and track their progress throughout the diagnostic workflow.",
    heroHighlights: [
      "Manage sample collection and barcode identification.",
      "Allocate samples to relevant tests and departments.",
      "Track sample processing, testing status and report generation.",
    ],
    metrics: [{ value: "100%", label: "Sample Tracking" }],
  },
  {
    id: "lab-machine-interfacing",
    name: "Lab Machine Interfacing",
    slug: "laboratory",
    category: "Diagnostics",
    iconName: "Cpu",
    description:
      "Simplify diagnostic workflows through integration with compatible laboratory equipment and automated result transfer.",
    heroHighlights: [
      "Integrate compatible laboratory analyzers with the software.",
      "Automatically receive test results from connected machines.",
      "Reduce manual data entry and transcription errors.",
    ],
    metrics: [{ value: "Zero", label: "Transcription Errors" }],
  },
  {
    id: "outsource-management",
    name: "Outsource Management",
    slug: "laboratory",
    category: "Operations",
    iconName: "RefreshCw",
    description:
      "Simplify outsourced test coordination by managing external laboratory requests, reports, and vendor payments.",
    heroHighlights: [
      "Manage outsourced test requests and vendor details.",
      "Track sample dispatch and external test status.",
      "Record outsourced investigation charges, payments and reports.",
    ],
    metrics: [{ value: "Complete", label: "Vendor Management" }],
  },
  {
    id: "billing-accounts",
    name: "Billing & Accounts",
    slug: "billing",
    category: "Financial",
    iconName: "Receipt",
    description:
      "Manage laboratory revenue, payments, and financial transactions through an integrated billing and accounts module.",
    heroHighlights: [
      "Generate bills for individual tests and test packages.",
      "Manage cash, credit, and payment transactions.",
      "Track outstanding balances, patient dues and financial reports.",
    ],
    metrics: [{ value: "100%", label: "Billing Accuracy" }],
  },
];

export const PMS_MODULES_DIRECTORY: HMSModuleDirectoryItem[] = [
  {
    id: "pms-purchase",
    name: "Purchase Management",
    slug: "pharmacy",
    category: "Operations",
    iconName: "Package",
    description:
      "Manage medicine purchases, supplier details, purchase entries, and purchase transactions through an organized workflow.",
    heroHighlights: [
      "Manage supplier details and purchase records.",
      "Generate and maintain purchase entries.",
      "Track purchase costs and supplier transactions.",
      "Monitor purchase history and outstanding payments.",
    ],
    metrics: [{ value: "100%", label: "Purchase Control" }],
  },
  {
    id: "pms-sales",
    name: "Sales Management",
    slug: "pharmacy",
    category: "Clinical",
    iconName: "CreditCard",
    description:
      "Manage daily medicine sales with efficient billing workflows for cash and credit transactions.",
    heroHighlights: [
      "Generate quick and accurate medicine bills.",
      "Manage cash and credit sales.",
      "Track medicine-wise sales and transactions.",
      "Maintain customer details and sales history.",
    ],
    metrics: [{ value: "Fast", label: "Counter Billing" }],
  },
  {
    id: "pms-expiry",
    name: "Expiry Management",
    slug: "pharmacy",
    category: "Operations",
    iconName: "Clock",
    description:
      "Monitor medicine expiry dates and identify products that require attention to reduce inventory losses.",
    heroHighlights: [
      "Track batch-wise medicine expiry dates.",
      "Identify near-expiry and expired medicines.",
      "View expiry-related stock information.",
      "Minimize losses through timely expiry monitoring.",
    ],
    metrics: [{ value: "Zero", label: "Expiry Losses" }],
  },
  {
    id: "pms-stock",
    name: "Stock Management",
    slug: "pharmacy",
    category: "Operations",
    iconName: "Layers",
    description:
      "Monitor medicine availability, stock movement, and inventory levels to maintain better control over pharmacy operations.",
    heroHighlights: [
      "Track medicine-wise stock availability.",
      "Monitor minimum stock and reorder levels.",
      "Manage batch numbers and stock quantities.",
      "Maintain stock adjustments and movement records.",
    ],
    metrics: [{ value: "Real-Time", label: "Stock Visibility" }],
  },
  {
    id: "pms-gst-accounts",
    name: "GST Reports & Accounts",
    slug: "billing",
    category: "Financial",
    iconName: "Receipt",
    description:
      "Manage pharmacy financial transactions with organized GST-related reports and accounting information.",
    heroHighlights: [
      "Generate GST-related sales and purchase reports.",
      "Monitor daily sales and purchase summaries.",
      "Track cash, credit, and payment transactions.",
      "Maintain financial records and account statements.",
    ],
    metrics: [{ value: "100%", label: "GST Compliant" }],
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "hms",
    name: "Hospital Management Software",
    slug: "hospital-management-software",
    tagline: "HMS",
    description:
      "Streamline clinical workflows, automate billing, and elevate patient care with a secure, all-in-one Hospital Management System designed for modern medical institutions.",
    iconName: "Bed",
    image: "/images/hms-reseption.png",
    badge: "Enterprise",
  },
  {
    id: "lms",
    name: "Laboratory Management Software (LMS)",
    slug: "laboratory-management-software",
    tagline: "LMS",
    description:
      "Medsky Laboratory Information Management System (LIMS) is an integrated software solution designed to simplify laboratory operations, streamline sample processing, and improve diagnostic workflows.",
    iconName: "FlaskConical",
    image: "/images/lab-test.png",
    badge: "Diagnostics",
  },
  {
    id: "cms",
    name: "Clinic Management Software (CMS)",
    slug: "clinic-management-software",
    tagline: "CMS",
    description:
      "Medsky Clinic Management Software helps doctors and clinics manage everyday operations through one integrated platform. From patient registration and appointments to consultations, digital prescriptions, billing and medical records, Medsky streamlines clinic workflows and helps deliver better patient care.",
    iconName: "Activity",
    image: "/images/clinic.png",
    badge: "Polyclinic",
  },
  {
    id: "pharmacy",
    name: "Pharmacy Management Software (PMS)",
    slug: "pharmacy-management-software",
    tagline: "PMS",
    description:
      "Medsky Pharmacy Management Software (PIMS) is an integrated solution designed to streamline pharmacy operations, from medicine purchasing and sales to inventory, expiry tracking, GST billing, and accounts.",
    iconName: "Pill",
    image: "/images/pharmacy.png",
    badge: "Pharmacy POS",
  },
  {
    id: "appointments",
    name: "Appointments",
    slug: "appointments",
    tagline: "Appointments & Smart Queue",
    description:
      "It helps healthcare organizations deliver a more organized appointment process while giving patients a convenient way to connect with the right healthcare provider at the right time.",
    iconName: "Calendar",
    image: "/images/appoinment.png",
    badge: "Patient Experience",
  },
  {
    id: "emr-ehr",
    name: "EMR / EHR",
    slug: "doctor",
    tagline: "Electronic Medical & Health Records",
    description:
      "Digitize your clinical workflows with a centralized electronic medical record platform designed for modern healthcare organizations.",
    iconName: "Stethoscope",
    image: "/images/medsky_doctor_emr_hd.png",
    badge: "Clinical Suite",
  },
];

export const MODULES_DATA: ModuleData[] = [
  // 1. HOSPITAL MANAGEMENT SOFTWARE (HMS)
  {
    slug: "hospital-management-software",
    name: "Hospital Management Software (HMS)",
    shortName: "HMS",
    tagline: "Simplify Hospital Operations with Medsky HMS",
    description:
      "Manage your hospital's clinical, administrative, and operational workflows with Medsky Hospital Management Software. From OPD and IPD management to laboratory, pharmacy, billing, nursing, and electronic medical records, Medsky helps bring essential hospital activities together in one integrated software solution.",
    iconName: "Bed",
    image: "/images/hms-reseption.png",
    category: "Clinical",
    badge: "Enterprise",
    heroHighlights: [
      "Streamlined Operations – Simplify daily healthcare workflows and improve operational efficiency.",
      "Integrated Solutions – Connect OPD, IPD, laboratory, pharmacy and EMR operations seamlessly.",
      "Smart Automation – Reduce manual work, minimize errors and save valuable time.",
      "Dedicated Support – Get expert guidance, implementation assistance and reliable after-sales support.",
    ],
    about: {
      // badge: "Inpatient Operations",
      title: "Complete Hospital Management Software for Modern Healthcare",
      description:
        "One Integrated Platform for Your Hospital Operations — Medsky Hospital Management Software connects clinical, administrative, financial, and operational workflows across your hospital in one integrated system.",
      image: "/images/Hospital Managment Software.png",
      highlights: [
        "Unified Hospital Management – Manage all hospital departments through one integrated platform.",
        "Streamlined Patient Care – Simplify patient registration, consultations, admissions, and medical records.",
        "Efficient Daily Operations – Connect clinical, diagnostic, pharmacy, and billing workflows seamlessly.",
        "Flexible & Scalable Solution – Suitable for general hospitals, multispecialty hospitals, and nursing homes.",
      ],
    },
    keyFeatures: [
      {
        title: "Patient Registration & OPD Management",
        description: "Manage patient registration, UHID generation, appointments, token management, consultations, vitals, and follow-ups.",
        icon: "FileText",
      },
      {
        title: "IPD & Patient Care Management",
        description: "Streamline admissions, bed allocation, ward management, nursing stations, discharge summaries, and inpatient care.",
        icon: "Bed",
      },
      {
        title: "EMR & Clinical Documentation",
        description: "Maintain digital patient records, medical histories, clinical notes, e-prescriptions, diagnosis, and treatment records.",
        icon: "PenTool",
      },
      {
        title: "Laboratory Management (LIS)",
        description: "Manage lab registrations, test orders, sample tracking, machine interfacing, report generation, and billing.",
        icon: "FlaskConical",
      },
      {
        title: "Pharmacy & Inventory Management",
        description: "Handle medicine sales, purchase orders, stock monitoring, expiry alerts, minimum stock alerts, and billing.",
        icon: "Pill",
      },
      {
        title: "Billing & Financial Management",
        description: "Simplify OPD/IPD billing, payments, receipts, insurance processing, discounts, and financial reporting.",
        icon: "Receipt",
      },
      {
        title: "OT & Specialized Department Management",
        description: "Coordinate operation theatres, surgery scheduling, emergency services, dialysis, day care, and specialized clinical workflows.",
        icon: "Activity",
      },
      {
        title: "Reports & Hospital Administration",
        description: "Gain operational insights through dashboards, management reports, user access controls, and department-wise performance monitoring.",
        icon: "BarChart3",
      },
    ],
    benefits: [
      {
        title: "Streamlined Hospital Operations",
        description: "Manage hospital activities and departmental workflows through a centralized software solution.",
        icon: "LayoutGrid",
      },
      {
        title: "Centralized Patient Records",
        description: "Access patient histories, consultations, diagnoses and treatment information in one place.",
        icon: "FileText",
      },
      {
        title: "Efficient Appointment Management",
        description: "Simplify appointment scheduling, doctor availability, patient queues and follow-up management.",
        icon: "Calendar",
      },
      {
        title: "Integrated Laboratory Management",
        description: "Streamline laboratory registration, billing, test processing, reports and analyzer interfacing.",
        icon: "FlaskConical",
      },
      {
        title: "Smart Pharmacy Management",
        description: "Manage medicine sales, stock, expiry alerts, purchases, billing and inventory efficiently.",
        icon: "Pill",
      },
      {
        title: "Simplified Billing & Accounts",
        description: "Organize billing, payments and financial transactions with improved accuracy and visibility.",
        icon: "Receipt",
      },
      {
        title: "Real-Time Reports & Insights",
        description: "Generate meaningful reports to monitor performance and support better management decisions.",
        icon: "BarChart3",
      },
      {
        title: "Better Department Coordination",
        description: "Connect essential departments and improve communication across hospital workflows.",
        icon: "Layers",
      },
      {
        title: "Secure Patient Information",
        description: "Support controlled access to healthcare information with appropriate user permissions and security measures.",
        icon: "ShieldCheck",
      },
      {
        title: "Reduced Paperwork",
        description: "Digitize everyday processes, minimize manual documentation and improve information accessibility.",
        icon: "FileSpreadsheet",
      },
      {
        title: "Reliable Technical Support",
        description: "Get dedicated technical assistance, implementation guidance and after-sales support from our team.",
        icon: "Headphones",
      },
      {
        title: "Flexible & Scalable Solutions",
        description: "Choose individual modules or integrated solutions to suit your healthcare facility's requirements.",
        icon: "Building2",
      },
    ],
    whyMedsky: [
      {
        title: "Engineered for High-Acuity Clinical Flow",
        description: "Built alongside practicing hospital physicians and nursing heads to minimize clicks and eliminate screen clutter during emergencies.",
        icon: "HeartPulse",
      },
      {
        title: "NABH & ABDM M1/M2/M3 Compliance",
        description: "Native clinical audit trails, encrypted digital health records, and seamless integration with the Ayushman Bharat Digital Mission.",
        icon: "Award",
      },
      {
        title: "High-Availability 99.99% Cloud Infrastructure",
        description: "Continuous automated backups, disaster failovers, and sub-100ms response times guaranteed across multi-block hospital campuses.",
        icon: "Building2",
      },
      {
        title: "24/7 Dedicated Clinical Implementation Support",
        description: "On-ground transition specialists, customized nurse training programs, and round-the-clock technical emergency assistance.",
        icon: "Headphones",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Admission", detail: "Admitting doctor enters admission orders and allocates ward bed." },
      { stepNumber: "02", title: "Ward Care & eMAR", detail: "Physicians conduct rounds, nurses administer medications on schedule." },
      { stepNumber: "03", title: "Final Discharge", detail: "Departments clear pending dues, pharmacy dispenses discharge drugs." },
    ],
    metrics: [
      { value: "98%", label: "Bed Utilization" },
      { value: "60 Min", label: "Discharge Process Time" },
      { value: "0", label: "Unaccounted Consumables" },
    ],
    relatedModules: ["nursing", "doctor", "pharmacy", "billing"],
    testimonials: [
      {
        id: "hms-t1",
        name: "Dr. Arvind Ramesh",
        role: "Medical Superintendent",
        hospital: "City Multi-Specialty Hospital, Chennai",
        rating: 5,
        quote: "Medsky HMS transformed our IPD department. The real-time bed matrix and instant discharge clearance shortened our patient turnaround by more than 50%.",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "AR",
      },
      {
        id: "hms-t2",
        name: "Sister Mary Varghese",
        role: "Chief Nursing Officer",
        hospital: "St. Jude Hospital & Research Center",
        rating: 5,
        quote: "The eMAR barcode medication verification eliminated medication errors in our ICU and general wards completely. Shift handovers are smooth and accountable.",
        avatar: "https://images.unsplash.com/photo-1594824813576-9286d8b28cf9?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "MV",
      },
      {
        id: "hms-t3",
        name: "Karthik Subramanian",
        role: "Operations Director",
        hospital: "Apollo Apex Care Network",
        rating: 5,
        quote: "Discharge summaries that used to take 4 hours now finish in under 30 minutes with synchronized billing, pharmacy, and laboratory clearances.",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "KS",
      },
    ],
    faqs: [
      {
        id: "hms-f1",
        question: "What is Hospital Management Software?",
        answer:
          "Hospital Management Software is a digital system that helps manage hospital operations such as patient registration, OPD, IPD, billing, EMR, pharmacy, laboratory, appointments, accounts, and reports.",
      },
      {
        id: "hms-f2",
        question: "What does Medsky Hospital Management Software include?",
        answer:
          "Medsky Hospital Management Software can manage patient registration, OPD, IPD, billing, EMR, pharmacy, laboratory, appointments, accounts, reports, and other hospital workflows.",
      },
      {
        id: "hms-f3",
        question: "What modules are available in Medsky Hospital Management Software?",
        answer:
          "Medsky offers healthcare management modules such as OPD Management, IPD Management, Laboratory Management, Pharmacy Management, Clinic Management, EMR, Appointment Management, Billing, and Reports, depending on the implementation requirements of the healthcare organization.",
      },
      {
        id: "hms-f4",
        question: "Does Medsky support Electronic Medical Records (EMR)?",
        answer:
          "Yes. Medsky supports Electronic Medical Records (EMR) workflows that help healthcare professionals digitally maintain patient information, visit history, clinical records, prescriptions, and other relevant healthcare data.",
      },
      {
        id: "hms-f5",
        question: "Is Medsky suitable for multi-specialty hospitals?",
        answer:
          "Yes. Medsky is designed to support the workflows of multi-specialty hospitals by integrating different departments and healthcare operations into one platform.",
      },
      {
        id: "hms-f6",
        question: "Is Medsky Hospital Management Software easy to use?",
        answer:
          "Medsky is designed with healthcare workflows in mind, providing structured screens and department-specific functions to help hospital staff manage daily operations efficiently.",
      },
      {
        id: "hms-f7",
        question: "Does Medsky reduce paperwork in hospitals?",
        answer:
          "Yes. By digitizing patient registration, clinical records, prescriptions, billing, laboratory workflows, pharmacy operations, and other processes, Medsky can help hospitals reduce dependency on manual paperwork.",
      },
      {
        id: "hms-f8",
        question: "Can Medsky integrate multiple hospital departments?",
        answer:
          "Yes. Medsky is designed as an integrated healthcare software platform connecting departments such as OPD, IPD, appointments, laboratory, pharmacy, insurance, surgery, billing, and clinical records.",
      },
      {
        id: "hms-f9",
        question: "Can Medsky manage patient medical records?",
        answer:
          "Yes. Medsky enables hospitals to maintain digital patient records, medical history, clinical information, case sheets, prescriptions, investigations, and related healthcare data.",
      },
      {
        id: "hms-f10",
        question: "Why should hospitals use Medsky Hospital Management System?",
        answer:
          "Medsky helps hospitals reduce manual work, streamline workflows, improve data accessibility, manage patient information, and connect multiple hospital departments through an integrated software platform.",
      },
      {
        id: "hms-f11",
        question: "Which hospitals can use Medsky HMS?",
        answer:
          "Medsky Hospital Management Software can be used by multi-specialty hospitals, general hospitals, nursing homes, healthcare centres, and growing hospitals that need integrated hospital management.",
      },
    ],
  },

  // 2. LABORATORY MANAGEMENT SOFTWARE (LMS / LIS)
  {
    slug: "laboratory-management-software",
    name: "Laboratory Information & Management Software (LIMS)",
    shortName: "LIMS",
    tagline: "Complete Laboratory Management Software for Accurate & Efficient Lab Operations",
    description:
      "Medsky Laboratory Information Management System (LIMS) is an integrated software solution designed to simplify laboratory operations, streamline sample processing, and improve diagnostic workflows. From patient registration and sample collection to report generation, machine interfacing, billing, and outsourced test management, Medsky brings essential laboratory activities together in one platform. Manage your laboratory more efficiently with organized workflows, accurate records, and seamless coordination between laboratory departments.",
    iconName: "FlaskConical",
    image: "/images/lab-test.png",
    category: "Diagnostics",
    badge: "Diagnostics LIS",
    heroHighlights: [
      "Simplified Patient Registration & Sample Management",
      "Automated Lab Machine Interfacing",
      "Efficient Test Processing & Report Management",
      "Integrated Billing, Accounts & Outsource Management",
    ],
    about: {
      badge: "",
      title: "Simplifying Laboratory Operations with Medsky LIMS",
      description:
        "Medsky Lab Management Software is an integrated solution that simplifies daily laboratory operations, from patient registration and test processing to billing and report generation. It helps diagnostic labs, hospital labs, and diagnostic centres manage their workflows efficiently through one connected platform.",
      image: "/images/lab-test.png",
      highlights: [
        "Streamlined Operations: Manage patient registration, test bookings, lab profiles, packages, and billing.",
        "Efficient Test Management: Organize sample workflows, lab history, and test processing.",
        "Seamless Integration: Connect supported lab machines and manage outsourced investigations and vendor payments.",
        "Better Reporting & Control: Generate laboratory reports, track accounts, and monitor daily operations.",
      ],
    },
    keyFeatures: [
      {
        title: "Patient & Test Management",
        description: "Manage patient details, test bookings, test profiles, and diagnostic requests efficiently.",
        icon: "FileText",
      },
      {
        title: "Sample Tracking & Processing",
        description: "Organize sample collection, barcode identification, processing status, and test allocation.",
        icon: "QrCode",
      },
      {
        title: "Automated Machine Integration",
        description: "Connect compatible laboratory instruments to transfer test results and minimize manual data entry.",
        icon: "Cpu",
      },
      {
        title: "Digital Report Management",
        description: "Generate, review, and manage laboratory test reports with organized patient history.",
        icon: "CheckCircle2",
      },
      {
        title: "Outsource Test Management",
        description: "Coordinate outsourced investigations, vendor details, payments, and external test reports.",
        icon: "RefreshCw",
      },
      {
        title: "Billing & Financial Management",
        description: "Manage test billing, payments, outstanding balances, and laboratory accounts.",
        icon: "Receipt",
      },
    ],
    benefits: [
      {
        title: "Improved Operational Efficiency",
        description: "Simplify routine laboratory activities and reduce time spent on manual administrative tasks.",
        icon: "TrendingUp",
      },
      {
        title: "Accurate Data Management",
        description: "Maintain organized patient details, sample records, test results, and diagnostic reports.",
        icon: "ShieldCheck",
      },
      {
        title: "Faster Diagnostic Workflows",
        description: "Improve coordination between registration, sample processing, testing, and reporting.",
        icon: "Clock",
      },
      {
        title: "Reduced Manual Work",
        description: "Minimize repetitive data entry through compatible laboratory machine integration.",
        icon: "Cpu",
      },
      {
        title: "Better Financial Control",
        description: "Manage test billing, collections, outsourced expenses, and accounts systematically.",
        icon: "Receipt",
      },
      {
        title: "Centralized Laboratory Records",
        description: "Access patient history, test information, and laboratory reports from one platform.",
        icon: "Database",
      },
    ],
    whyMedsky: [
      {
        title: "Healthcare Software Expertise",
        description: "Developed by a team of qualified Biomedical Engineers with healthcare technology experience.",
        icon: "Award",
      },
      {
        title: "Complete Laboratory Management",
        description: "Manage registration, testing, sample processing, machine interfacing, outsourcing, and billing in one integrated system.",
        icon: "Layers",
      },
      {
        title: "Flexible Workflow Management",
        description: "Software modules designed to support different laboratory operational requirements.",
        icon: "Building2",
      },
      {
        title: "Machine Integration Support",
        description: "Simplify laboratory operations through integration with compatible diagnostic instruments.",
        icon: "Cpu",
      },
      {
        title: "Reliable After-Sales Support",
        description: "Get assistance from our support team for software-related requirements and operational guidance.",
        icon: "Headphones",
      },
      {
        title: "Continuous Improvement",
        description: "Benefit from ongoing software enhancements and improvements to support evolving laboratory needs.",
        icon: "RefreshCw",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Order & Barcode", detail: "Physician orders test; billing clears and sample barcode prints." },
      { stepNumber: "02", title: "Machine Processing", detail: "Analyzer processes sample and transmits numeric results via HL7." },
      { stepNumber: "03", title: "Report Broadcast", detail: "Patient receives download link; result attaches to clinical EMR." },
    ],
    metrics: [
      { value: "70%", label: "Faster Turnaround Time" },
      { value: "100%", label: "Machine Accuracy" },
      { value: "Instant", label: "Critical Value Notification" },
    ],
    relatedModules: ["radiology", "opd", "ipd", "billing"],
    testimonials: [
      {
        id: "lms-t1",
        name: "Dr. Sunita Deshmukh",
        role: "Chief Pathologist",
        hospital: "Metropolis Clinical Diagnostic Center",
        rating: 5,
        quote: "The bi-directional analyzer integration has eliminated transcription errors. Reports flow directly from our Roche and Sysmex analyzers into digital pathologist sign-off queues.",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "SD",
      },
      {
        id: "lms-t2",
        name: "Rajesh Kulkarni",
        role: "Lab Operations Head",
        hospital: "Zenith Reference Laboratories",
        rating: 5,
        quote: "Our TAT for emergency CBC and Cardiac Biomarkers dropped by 65%. Automated WhatsApp report dispatch reduced enquiry calls by 80%.",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "RK",
      },
    ],
    faqs: [
      {
        id: "lms-f1",
        question: "What is Medsky Lab Management Software?",
        answer:
          "Medsky Lab Management Software is an integrated Lab Management System designed to simplify laboratory operations, including patient registration, billing, lab master management, profiles, packages, test processing, report generation, lab history, machine interfacing, and outsourced test management. Medsky provides a modern LIS/LIMS solution for diagnostic laboratories, hospitals, and healthcare organizations.",
      },
      {
        id: "lms-f2",
        question: "What is the difference between LIS and LIMS?",
        answer:
          "LIS (Laboratory Information System) and LIMS (Laboratory Information Management System) are software solutions used to manage laboratory operations and information. Medsky combines essential LIS and LIMS capabilities with Lab Management Software features to help laboratories manage patient records, tests, billing, reports, laboratory workflows, and operational data efficiently.",
      },
      {
        id: "lms-f3",
        question: "Why choose Medsky as a Lab Management System?",
        answer:
          "Medsky is a Modern Lab Management System that helps laboratories streamline their daily workflows through centralized management of registration, billing, lab tests, packages, reports, patient history, machine interfacing, and outsourced investigations. It is designed to improve operational efficiency, reduce manual work, and provide faster access to laboratory information.",
      },
      {
        id: "lms-f4",
        question: "Is Medsky a Web Based LIS?",
        answer:
          "Yes. Medsky can be used as a Web Based LIMS, allowing authorized users to access laboratory information through a web-based environment. This helps laboratories manage operations, reports, and patient information from connected locations without depending on traditional paper-based workflows.",
      },
      {
        id: "lms-f5",
        question: "Is Medsky available as Cloud Based Lab Management Software?",
        answer:
          "Medsky supports modern healthcare software environments and can be deployed according to the laboratory's infrastructure and requirements. A Cloud Based Lab Management Software deployment can provide centralized access to laboratory data, workflows, and reports, while suitable security, access controls, backups, and infrastructure should be configured for the organization's requirements.",
      },
      {
        id: "lms-f6",
        question: "What features are included in Medsky Lab Management Software?",
        answer:
          "Medsky Lab Management System Software includes features such as: Patient & laboratory registration, Lab billing, Lab master management, Test and profile management, Package generation, Lab history, Laboratory report generation, Machine interfacing, Outsource management, Outsource vendor payment management, Accounts and reports, and Patient and test information management. These features make Medsky a comprehensive Lab Information Management System for modern laboratories.",
      },
      {
        id: "lms-f7",
        question: "Is Medsky one of the Best Lab Management Software solutions?",
        answer:
          "Medsky is designed as a Modern Lab Software solution for laboratories, hospitals, and healthcare organizations that need an integrated platform for managing laboratory workflows. Its combination of LIS, billing, reporting, machine interfacing, and outsourced laboratory management makes it suitable for organizations looking for comprehensive lab software.",
      },
      {
        id: "lms-f8",
        question: "Can I get a Free Lab Management Software Demo of Medsky?",
        answer:
          "Yes. Healthcare organizations can request a Free Lab Software Demo to understand how Medsky works and how its laboratory workflows can be configured for their requirements. A demo can cover registration, billing, test management, reports, lab history, machine interfacing, outsourcing, and other key LIS/LIMS functions.",
      },
      {
        id: "lms-f9",
        question: "Can Medsky Lab Software integrate with laboratory machines?",
        answer:
          "Yes. Medsky includes machine interfacing capabilities that can help laboratories connect supported laboratory equipment with their software workflow. This can reduce manual data entry and help improve the efficiency and accuracy of laboratory result processing, depending on the machine and integration requirements.",
      },
      {
        id: "lms-f10",
        question: "Who can use Medsky Lab Management System Software?",
        answer:
          "Medsky Lab Management System Software can be used by diagnostic laboratories, hospital laboratories, clinics, medical institutions, and healthcare organizations. It is suitable for organizations looking for Best Lab Software, Web Based Lab Management Software, or a modern LIS/LIMS platform to manage laboratory operations, patient information, billing, testing, reports, and outsourced investigations.",
      },
    ],
  },

  // 3. CLINIC MANAGEMENT SOFTWARE (CMS / OPD)
  {
    slug: "clinic-management-software",
    name: "Clinic Management Software (CMS)",
    shortName: "CMS",
    tagline: "Simplify Clinic Workflows, Consultations & Better Patient Care",
    description:
      "Medsky Clinic Management Software helps doctors and clinics manage everyday operations through one integrated platform. From patient registration and appointments to consultations, digital prescriptions, billing and medical records, Medsky streamlines clinic workflows and helps deliver better patient care.",
    iconName: "Activity",
    image: "/images/clinic.png",
    category: "Clinical",
    badge: "Polyclinic",
    heroHighlights: [
      "Easy Patient Registration & Management",
      "Smart Appointment & Token Management",
      "Digital EMR, EHR & Prescriptions",
      "Integrated Billing & Accounts",
    ],
    about: {
      badge: "",
      title: "Streamlining Clinic Operations & Doctor Consultations",
      description:
        "Medsky Clinic Management Software is an integrated solution designed to simplify the daily operations of individual clinics, medical practices and multi-specialty polyclinics. From the first patient visit to consultation, prescription and payment, Medsky helps doctors and clinic staff manage workflows efficiently, reduce paperwork and maintain organized patient information. Its flexible modules support the operational needs of different types of clinics while helping healthcare professionals focus more on patient care.",
      image: "/images/clinic.png",
      highlights: [
        "Smart Token Management: Live token queue display and patient flow management for reduced waiting times.",
        "Digital Consultations & Prescriptions: Specialty-based SOAP templates, structured clinical records, and pre-configured prescription sets.",
        "Automated Patient Communication: WhatsApp appointment confirmations, reminders, and medication notifications.",
        "Efficient Billing & Revenue Management: Multi-doctor revenue sharing, cash collection tracking, and daily billing reconciliation.",
      ],
    },
    keyFeatures: [
      {
        title: "Patient Registration",
        description:
          "Register new and existing patients with demographic information, contact details, identification information, medical history, and other relevant patient details.",
        icon: "FileText",
      },
      {
        title: "Appointment Management",
        description:
          "Schedule and manage appointments based on doctor availability, consultation timings, patient preferences, and appointment status.",
        icon: "Calendar",
      },
      {
        title: "Token & Queue Management",
        description:
          "Manage patient tokens and consultation queues to organize patient flow and reduce waiting-time confusion.",
        icon: "ListOrdered",
      },
      {
        title: "Vitals Management",
        description:
          "Record and track important patient vitals such as Blood Pressure, Pulse Rate, Temperature, Respiratory Rate, Height, Weight, BMI and SpO₂.",
        icon: "HeartPulse",
      },
      {
        title: "EMR Management",
        description:
          "Maintain digital medical records containing consultation details, clinical notes, diagnosis, prescriptions, investigations, and treatment information.",
        icon: "PenTool",
      },
      {
        title: "EHR Management",
        description:
          "Maintain a structured longitudinal patient health record to help healthcare professionals access relevant historical information during consultations.",
        icon: "Database",
      },
      {
        title: "Patient History",
        description:
          "Access previous visits, consultations, diagnoses, prescriptions, investigations, vitals, and other relevant clinical information.",
        icon: "Clock",
      },
      {
        title: "Investigation Management",
        description:
          "Record investigation requests and maintain patient investigation history and reports.",
        icon: "FlaskConical",
      },
      {
        title: "Billing Management",
        description:
          "Manage consultation charges, procedures, investigations, packages, discounts, payments, receipts, and outstanding amounts.",
        icon: "Receipt",
      },
      {
        title: "Reports & Analytics",
        description:
          "Generate useful clinical, patient, appointment, billing, and operational reports for clinic management.",
        icon: "BarChart3",
      },
      {
        title: "Follow-Up Management",
        description:
          "Track follow-up visits and help doctors maintain continuity of patient care.",
        icon: "CheckCircle2",
      },
    ],
    benefits: [
      {
        title: "Improved Operational Efficiency",
        description: "Simplify routine clinic activities and reduce manual administrative work.",
        icon: "TrendingUp",
      },
      {
        title: "Better Patient Experience",
        description: "Organize appointments, reduce waiting time and improve patient coordination.",
        icon: "HeartPulse",
      },
      {
        title: "Organized Medical Records",
        description: "Maintain easily accessible digital patient records and consultation history.",
        icon: "FileText",
      },
      {
        title: "Simplified Financial Management",
        description: "Streamline billing, payment tracking and daily collection reports.",
        icon: "Receipt",
      },
      {
        title: "Reduced Paperwork",
        description: "Replace manual documentation with structured digital workflows.",
        icon: "FileSpreadsheet",
      },
      {
        title: "Better Clinic Management",
        description: "Monitor appointments, consultations and daily operations through organized reports.",
        icon: "BarChart3",
      },
    ],
    whyMedsky: [
      {
        title: "Complete Clinic Workflow",
        description: "Manage registration, appointments, vitals, consultation, EMR, EHR, prescriptions, billing, reports, and follow-ups through one platform.",
        icon: "Layers",
      },
      {
        title: "Doctor-Centric Clinical Workflow",
        description: "Provide doctors with access to relevant patient history, vitals, previous visits, investigations, prescriptions, and clinical records.",
        icon: "Stethoscope",
      },
      {
        title: "Organized Patient Records",
        description: "Keep patient information and clinical history structured and easily accessible to authorized users.",
        icon: "Database",
      },
      {
        title: "Efficient Appointment Management",
        description: "Manage doctor schedules, appointments, tokens, queues, and follow-ups in an organized manner.",
        icon: "Calendar",
      },
      {
        title: "Digital EMR & EHR",
        description: "Move from paper-based records to structured digital patient records.",
        icon: "PenTool",
      },
      {
        title: "Easy E-Prescription",
        description: "Create and maintain digital prescriptions with complete medicine instructions.",
        icon: "FileText",
      },
      {
        title: "Better Patient Experience",
        description: "Help reduce unnecessary waiting and simplify registration, consultation, billing, and follow-up workflows.",
        icon: "HeartPulse",
      },
      {
        title: "Useful Reports",
        description: "Access reports that help clinics monitor patients, appointments, billing, and daily operations.",
        icon: "BarChart3",
      },
      {
        title: "Role-Based Access",
        description: "Provide appropriate access to doctors, receptionists, billing staff, and administrators according to their responsibilities.",
        icon: "ShieldCheck",
      },
      {
        title: "Flexible Clinic Management",
        description: "Suitable for individual doctors, specialty clinics, polyclinics, and growing healthcare practices.",
        icon: "Building2",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Digital Check-In", detail: "Patient scans QR code for appointment check-in and token issuance." },
      { stepNumber: "02", title: "Clinical Consult", detail: "Doctor reviews history and prescribes digital medication." },
      { stepNumber: "03", title: "Follow-Up & Billing", detail: "Automated recall scheduling and prescription routing." },
    ],
    metrics: [
      { value: "45%", label: "Reduction in Wait Time" },
      { value: "100%", label: "Digital Prescription Accuracy" },
      { value: "3x", label: "Faster Documentation" },
    ],
    relatedModules: ["doctor", "appointments", "radiology", "billing"],
    testimonials: [
      {
        id: "cms-t1",
        name: "Dr. Meenakshi Sundaram",
        role: "Chief Physician & Clinic Director",
        hospital: "Sundaram Polyclinic & Pediatric Centre",
        rating: 5,
        quote: "Medsky CMS is lightning fast. I finish clinical notes, prescribe digital medicines with zero spelling errors, and dispatch WhatsApp instructions in under 90 seconds.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "MS",
      },
      {
        id: "cms-t2",
        name: "Ananya Sharma",
        role: "Practice Manager",
        hospital: "Prime Care Clinics Group",
        rating: 5,
        quote: "Our waiting room chaos disappeared within 2 days of implementing the smart token queue system. Patients love the live status notifications.",
        avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "AS",
      },
    ],
    faqs: [
      {
        id: "cms-f1",
        question: "What is a Clinic Management System?",
        answer:
          "A Clinic Management System (CMS) is software used to manage the administrative and clinical activities of a clinic. Medsky CMS helps manage patients, appointments, outpatient consultations, electronic medical records, billing, payments, and other clinic workflows.",
      },
      {
        id: "cms-f2",
        question: "How does Medsky CIMS help clinics?",
        answer:
          "Medsky Clinic Information Management System connects important clinic workflows in one system, including patient registration, appointments, OPD management, EMR, EHR, token display, billing, and payment management.",
      },
      {
        id: "cms-f3",
        question: "What is the best Clinic Management Software for modern clinics?",
        answer:
          "The best Clinic Management Software should provide easy patient management, appointment scheduling, digital medical records, billing, reporting, and secure access. Medsky provides an integrated Modern Clinic Management Software platform for streamlining clinic operations.",
      },
      {
        id: "cms-f4",
        question: "Why choose Medsky as a Clinic Management System?",
        answer:
          "Medsky Clinic Management System brings clinical and administrative workflows together in one platform. It helps clinics reduce manual work, organize patient information, improve appointment management, and simplify billing and documentation.",
      },
      {
        id: "cms-f5",
        question: "Is Medsky suitable for small clinics?",
        answer:
          "Yes. Medsky Clinic Software can help small and growing clinics organize patient registration, appointments, consultation records, billing, and other day-to-day activities through a centralized system.",
      },
      {
        id: "cms-f6",
        question: "Is Medsky suitable for multi-specialty clinics?",
        answer:
          "Yes. Medsky can support clinics with multiple doctors and specialties by organizing appointments, patient records, consultation workflows, and billing information.",
      },
      {
        id: "cms-f7",
        question: "Does Medsky Clinic Software provide Patient appointment management?",
        answer:
          "Yes. Medsky includes Patient Appointment Management to help clinics organize patient appointments and doctor schedules, making appointment workflows more structured and efficient.",
      },
      {
        id: "cms-f8",
        question: "Does Medsky Clinic System Software provide EMR?",
        answer:
          "Yes. Medsky includes Electronic Medical Record (EMR) functionality for maintaining digital patient consultation and clinical records.",
      },
      {
        id: "cms-f9",
        question: "Is Medsky Clinic Management Software web based?",
        answer:
          "Yes. Medsky is designed as Web Based Clinic Management Software, allowing authorized users to access clinic workflows through a web-based interface.",
      },
      {
        id: "cms-f10",
        question: "Is Medsky a Web Based Healthcare Software?",
        answer:
          "Yes. Medsky provides Cloud Based Clinic Management System capabilities for managing clinic and healthcare workflows through a centralized digital platform.",
      },
      {
        id: "cms-f11",
        question: "Can Medsky Clinic Software be accessed from multiple locations?",
        answer:
          "Yes, in supported web/cloud deployments, authorized users can access Medsky from different locations using an internet connection, subject to the organization's access and security configuration.",
      },
      {
        id: "cms-f12",
        question: "How can I request a Medsky Clinic Management System Software Demo?",
        answer:
          "You can contact Medsky to request a Free Clinic Management Software Demo. During the demo, your clinic can explore the CMS/CIMS platform, modules, workflows, deployment options, and implementation requirements.",
      },
    ],
  },

  // 4. PHARMACY MANAGEMENT SOFTWARE (PMS)
  {
    slug: "pharmacy-management-software",
    name: "Pharmacy Management Software (PMS)",
    shortName: "PMS",
    tagline: "Simplify Pharmacy Operations with Smart Pharmacy Management Software",
    description:
      "Medsky Pharmacy Management Software (PIMS) is an integrated solution designed to streamline pharmacy operations, from medicine purchasing and sales to inventory, expiry tracking, GST billing, and accounts. Manage your pharmacy efficiently with real-time stock visibility, organized billing, and accurate business reports through one connected platform.",
    iconName: "Pill",
    image: "/images/pharmacy.png",
    category: "Operations",
    badge: "Pharmacy POS",
    heroHighlights: [
      "Efficient Purchase & Sales Management",
      "Real-Time Inventory & Stock Tracking",
      "Automated Medicine Expiry Alerts",
      "GST Billing & Financial Reports",
    ],
    about: {
      badge: "Pharmacy Operations",
      title: "Manage Your Pharmacy with Greater Efficiency",
      description:
        "Medsky Pharmacy Management Software simplifies daily pharmacy operations by bringing essential activities together in one centralized platform.",
      image: "/images/pharmacy.png",
      highlights: [
        "Easy Purchase & Sales Management: Manage medicine purchases, suppliers, and sales billing efficiently.",
        "Accurate Stock Management: Monitor medicine availability and maintain optimal inventory levels.",
        "Expiry Management: Track medicine expiry dates and reduce stock wastage.",
        "GST & Accounts Management: Manage GST reports, daily transactions, and financial records with ease.",
      ],
    },
    keyFeatures: [
      {
        title: "Purchase & Supplier Management",
        description:
          "Manage medicine purchases, supplier details, purchase orders, and purchase entries efficiently.",
        icon: "Package",
      },
      {
        title: "Fast Sales & Billing",
        description:
          "Process cash and credit sales with organized billing and accurate transaction records.",
        icon: "CreditCard",
      },
      {
        title: "Inventory Management",
        description:
          "Monitor medicine stock, batch details, quantities, and stock movements in real time.",
        icon: "Layers",
      },
      {
        title: "Expiry & Due Alerts",
        description:
          "Track medicine expiry dates and identify near-expiry products to minimize stock wastage.",
        icon: "Clock",
      },
      {
        title: "GST & Financial Management",
        description:
          "Maintain GST-related transactions, sales summaries, purchase reports, and accounts.",
        icon: "Receipt",
      },
      {
        title: "Business Reports & Insights",
        description:
          "Access essential reports to monitor pharmacy performance and support better business decisions.",
        icon: "BarChart3",
      },
    ],
    benefits: [
      {
        title: "Save Time & Reduce Manual Work",
        description:
          "Simplify purchasing, billing, inventory updates, and daily pharmacy activities.",
        icon: "Clock",
      },
      {
        title: "Reduce Medicine Wastage",
        description:
          "Monitor expiry dates and identify near-expiry medicines to minimize avoidable losses.",
        icon: "ShieldAlert",
      },
      {
        title: "Improve Stock Accuracy",
        description:
          "Maintain better visibility of medicine availability, batch details, and inventory movements.",
        icon: "CheckCircle2",
      },
      {
        title: "Gain Better Business Control",
        description:
          "Access organized sales, purchase, GST, and financial reports for informed decisions.",
        icon: "TrendingUp",
      },
    ],
    whyMedsky: [
      {
        title: "Healthcare Software Expertise",
        description:
          "Developed by a team with experience in healthcare software solutions.",
        icon: "Award",
      },
      {
        title: "Integrated Pharmacy Operations",
        description:
          "Manage purchasing, sales, inventory, expiry, billing, and accounts in one platform.",
        icon: "Layers",
      },
      {
        title: "User-Friendly Workflows",
        description:
          "Simple and organized screens help pharmacy staff handle daily operations efficiently.",
        icon: "LayoutGrid",
      },
      {
        title: "Reliable After-Sales Support",
        description:
          "Get assistance from our support team to keep your pharmacy operations running smoothly.",
        icon: "Headphones",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Prescription Sync", detail: "Doctor prescriptions appear on pharmacist console with patient allergies." },
      { stepNumber: "02", title: "Barcode Picking", detail: "Dispenser scans medicine barcode; Software confirms batch and expiry." },
      { stepNumber: "03", title: "Billing & Handover", detail: "Receipt generated or charged to patient's IPD running ledger." },
    ],
    metrics: [
      { value: "0.00%", label: "Dispensing Error Rate" },
      { value: "22%", label: "Reduction in Expiry Wastage" },
      { value: "30 Sec", label: "Average Counter Billing Time" },
    ],
    relatedModules: ["inventory", "billing", "doctor", "nursing"],
    testimonials: [
      {
        id: "pms-t1",
        name: "Prakash Nambiar",
        role: "Chief Pharmacist",
        hospital: "LifeCare Hospital Dispensary",
        rating: 5,
        quote: "The FEFO batch picking and automated LASA drug warnings saved our pharmacy team from expired stocks and dispensing confusion. It's fast and compliant.",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "PN",
      },
      {
        id: "pms-t2",
        name: "Geeta Radhakrishnan",
        role: "Retail Pharmacy Chain Owner",
        hospital: "MedPlus Allied Stores",
        rating: 5,
        quote: "Handling GST compliance, supplier purchase orders, and multi-branch stock transfers used to take days. With Medsky PMS, it runs on auto-pilot.",
        avatar: "https://images.unsplash.com/photo-1594824813576-9286d8b28cf9?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "GR",
      },
    ],
    faqs: [
      {
        id: "pms-f1",
        question: "What is Pharmacy Management Software?",
        answer:
          "Pharmacy Management System is software designed to manage the day-to-day operations of a pharmacy. Medsky helps pharmacies manage inventory, purchases, suppliers, sales, payments, stock levels, expiry dates, and business reports from a centralized system.",
      },
      {
        id: "pms-f2",
        question: "Is Medsky suitable for retail pharmacies?",
        answer:
          "Yes. Medsky Pharmacy Software can support retail pharmacy operations including medicine sales, cash and credit transactions, inventory management, purchase management, supplier payments, stock monitoring, and reporting.",
      },
      {
        id: "pms-f3",
        question: "Is Medsky suitable for hospital pharmacies?",
        answer:
          "Yes. Medsky can help hospital pharmacies manage medicine inventory, purchases, sales, suppliers, stock levels, expiry monitoring, and related pharmacy operations.",
      },
      {
        id: "pms-f4",
        question: "Does Medsky Pharmacy Software manage medicine inventory?",
        answer:
          "Yes. Pharmacy Inventory Management is a core part of Medsky. It helps pharmacies manage medicine stock, purchases, sales, minimum stock levels, and expiry-related information.",
      },
      {
        id: "pms-f5",
        question: "Does Medsky provide minimum-stock alerts?",
        answer:
          "Yes. Medsky Pharmacy Management System provides minimum-stock alerts to help pharmacy users identify medicines that have reached defined stock thresholds and require replenishment.",
      },
      {
        id: "pms-f6",
        question: "Does Medsky provide short-expiry alerts?",
        answer:
          "Yes. Medsky provides short-expiry alerts to help pharmacy staff identify medicines approaching their expiry dates and manage inventory more effectively.",
      },
      {
        id: "pms-f7",
        question: "What makes Medsky one of the Best Pharmacy Software solutions?",
        answer:
          "Medsky combines pharmacy inventory, purchasing, supplier management, sales, payment tracking, expiry alerts, stock alerts, margin analysis, GST reports, and accounts in one Pharmacy Management Software platform.",
      },
      {
        id: "pms-f8",
        question: "What is the Best Pharmacy Information Management System?",
        answer:
          "The Best Pharmacy Information Management System should make pharmacy information easy to organize, monitor, and retrieve. Medsky PIMS provides centralized pharmacy information management with inventory, purchasing, sales, supplier, payment, and reporting capabilities.",
      },
      {
        id: "pms-f9",
        question: "Is Medsky Web Based Pharmacy Management System Software?",
        answer:
          "Yes. Medsky supports Cloud Based Pharmacy Management System Software capabilities for managing pharmacy inventory, purchasing, sales, suppliers, payments, alerts, and reports.",
      },
      {
        id: "pms-f10",
        question: "What are the benefits of Cloud Based Pharmacy Management System?",
        answer:
          "A Cloud Based Pharmacy Management System can provide centralized data access, scalable infrastructure, easier maintenance, and convenient access for authorized users.",
      },
      {
        id: "pms-f11",
        question: "Can I get a Free Pharmacy Management Software Demo?",
        answer:
          "Yes. You can request a Free Pharmacy Management System Software Demo to see how Medsky manages pharmacy inventory, purchases, sales, suppliers, payments, alerts, and reporting.",
      },
    ],
  },

  // 5. APPOINTMENTS & QUEUE MANAGEMENT
  {
    slug: "appointments",
    name: "Appointments & Queue Management",
    shortName: "Appointments",
    tagline: "Omnichannel appointment booking, doctor roster scheduling, and smart queue displays.",
    description:
      "Omnichannel appointment scheduling via web, mobile, and WhatsApp with real-time doctor rosters, automated reminders, and live TV queue screens.",
    iconName: "Calendar",
    image: "/images/appoinment.png",
    category: "Operations",
    badge: "Patient Experience",
    heroHighlights: [
      "Family group health profiles linked under primary guardian UHID",
      "Multi-channel booking via WhatsApp, web portal, and call center",
      "Pediatric vaccination tracking and adult wellness check schedules",
      "Integrated electronic health record sharing between family clinicians",
    ],
    about: {
      badge: "Patient Engagement",
      title: "Omnichannel Appointments & Intelligent Waiting Room Queueing",
      description:
        "Say goodbye to crowded hospital waiting areas. Medsky Appointments coordinates online patient bookings, reception check-in kiosks, doctor consultation rosters, and live TV token screens in real time.",
      image: "/images/appoinment.png",
      highlights: [
        "AI-enabled 24/7 WhatsApp appointment booking bot",
        "Smart TV queue displays with audio chimes for consultation rooms",
        "Automated multi-lingual SMS and WhatsApp confirmation alerts",
        "Dynamic doctor leave management and instant emergency slot rescheduling",
      ],
    },
    keyFeatures: [
      {
        title: "Family Master Profile",
        description: "Link pediatric and geriatric dependents for seamless billing and record access.",
        icon: "Users",
      },
      {
        title: "Omnichannel Scheduling",
        description: "Book, reschedule, or cancel consultations with automatic SMS confirmation.",
        icon: "Smartphone",
      },
      {
        title: "Preventive Care Reminders",
        description: "Automated alerts for seasonal flu shots, mammograms, and annual checkups.",
        icon: "Calendar",
      },
    ],
    benefits: [
      {
        title: "75% Reduction in Patient No-Shows",
        description: "Automated WhatsApp and SMS confirmation nudges ensure booked slots remain utilized.",
        icon: "TrendingUp",
      },
      {
        title: "Zero Reception Crowding",
        description: "Self-check-in QR codes and live TV queue boards organize patient movement smoothly.",
        icon: "Users",
      },
      {
        title: "24/7 Self-Service Booking",
        description: "Patients can reserve doctor consultation slots anytime via WhatsApp or hospital website without calling.",
        icon: "Smartphone",
      },
      {
        title: "Optimized Doctor Utilization",
        description: "Intelligent slot pacing prevents burnout while maximizing daily clinical consultation capacity.",
        icon: "Clock",
      },
    ],
    whyMedsky: [
      {
        title: "Native WhatsApp Chatbot Booking",
        description: "Patients can book, reschedule, and pay for appointments within their favorite messaging application.",
        icon: "Smartphone",
      },
      {
        title: "HDMI Plug-and-Play TV Display",
        description: "Cast real-time token numbers to any waiting room Smart TV without specialized hardware.",
        icon: "LayoutGrid",
      },
      {
        title: "Teleconsultation Integration",
        description: "Conduct secure video consultations with integrated e-prescriptions for remote and follow-up patients.",
        icon: "HeartPulse",
      },
      {
        title: "Multi-Branch Clinic Centralization",
        description: "Call centers can schedule appointments across 50+ doctor schedules across multiple regional branches.",
        icon: "Building2",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Family Booking", detail: "Guardian reserves slots for multiple family members in one session." },
      { stepNumber: "02", title: "Reception Check-In", detail: "Digital token generated and routed to family physician desk." },
      { stepNumber: "03", title: "Summary Dispatch", detail: "Prescriptions and lifestyle advice sent directly to patient WhatsApp." },
    ],
    metrics: [
      { value: "40%", label: "Reduction in No-Shows" },
      { value: "15 Min", label: "Average Patient Wait Time" },
      { value: "100%", label: "Family Record Visibility" },
    ],
    relatedModules: ["doctor", "opd", "billing"],
    testimonials: [
      {
        id: "app-t1",
        name: "Dr. Sandeep Vardhan",
        role: "Head of OPD Services",
        hospital: "Greenfield Multi-Specialty Clinic",
        rating: 5,
        quote: "Automated WhatsApp booking and token TV displays cut our reception crowding by over 70%. Patients arrive just on time.",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "SV",
      },
      {
        id: "app-t2",
        name: "Deepa Menon",
        role: "Patient Relations Officer",
        hospital: "Fortis Health Network",
        rating: 5,
        quote: "Our appointment no-show rate fell from 28% to under 7% with the automated 24-hour and 2-hour SMS reminders.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "DM",
      },
    ],
    faqs: [
      {
        id: "app-f1",
        question: "What is Medsky Patient Appointment Management Software?",
        answer:
          "Medsky Patient Appointment Management Software is a digital Doctor Appointment Software designed to help hospitals, clinics, and healthcare providers manage patient appointments efficiently. It supports doctor-specific calendars, online appointment booking, appointment slots, reminders, and centralized appointment management.",
      },
      {
        id: "app-f2",
        question: "Does Medsky support Online Doctor Appointment Booking?",
        answer:
          "Yes. Medsky supports Online Doctor Appointment Booking, allowing patients to request or book appointments based on the availability of the selected doctor. This helps healthcare organizations simplify appointment scheduling and provide patients with a convenient online booking experience.",
      },
      {
        id: "app-f3",
        question: "What is Doctor Calendar Management in Medsky?",
        answer:
          "Doctor Calendar Management allows healthcare organizations to manage each doctor's working schedule, availability, appointment timings, and booked slots. Medsky provides a Doctor-Specific Calendar to help staff and doctors view and manage appointments efficiently.",
      },
      {
        id: "app-f4",
        question: "Does Medsky provide Doctor Slot Booking Software?",
        answer:
          "Yes. Medsky provides Doctor Slot Booking functionality that helps manage available appointment slots based on doctor schedules. Patients or authorized staff can select appropriate available slots, helping reduce scheduling conflicts and improve appointment management.",
      },
      {
        id: "app-f5",
        question: "Can patients book appointments online using Medsky?",
        answer:
          "Yes. Medsky provides an Online Appointment facility that enables patients to book or request appointments with doctors based on available schedules and appointment slots. This can help hospitals and clinics reduce manual appointment calls and improve the patient booking experience.",
      },
      {
        id: "app-f6",
        question: "Can Medsky manage appointments for multiple doctors?",
        answer:
          "Yes. Medsky Appointment Management Software supports doctor-specific appointment calendars, making it suitable for clinics, hospitals, and multi-specialty healthcare organizations. Each doctor's schedule and appointment availability can be managed according to their working hours and slot configuration.",
      },
      {
        id: "app-f7",
        question: "How does Medsky Doctor Appointment Software help hospitals and clinics?",
        answer:
          "Medsky Doctor Appointment Software helps healthcare organizations streamline appointment scheduling, doctor calendar management, patient booking, and slot management. It can reduce manual scheduling work, minimize appointment conflicts, and provide staff with a centralized view of upcoming appointments.",
      },
      {
        id: "app-f8",
        question: "Does Medsky support appointment reminders?",
        answer:
          "Yes. Medsky can support Appointment Reminders to help patients stay informed about scheduled appointments. Automated or configured reminders can help reduce missed appointments and improve communication between healthcare providers and patients.",
      },
      {
        id: "app-f9",
        question: "Is Medsky Online Appointment Software suitable for clinics and hospitals?",
        answer:
          "Yes. Medsky Online Appointment Software is suitable for clinics, hospitals, specialty centers, and individual doctors. It can help manage doctor calendars, patient appointments, online booking, available slots, and appointment schedules through an integrated healthcare software platform.",
      },
      {
        id: "app-f10",
        question: "Why choose Medsky for Doctor Appointment and Slot Booking?",
        answer:
          "Medsky combines Doctor Appointment Software, Online Appointment Booking, Doctor Calendar Management, and Slot Booking into an integrated solution. Its doctor-specific calendar and appointment management capabilities help healthcare organizations organize schedules efficiently while providing patients with a convenient way to book appointments.",
      },
    ],
  },

  // 6. DOCTOR CLINICAL EMR & EHR SUITE
  {
    slug: "doctor",
    name: "Doctor Clinical EMR & EHR Suite",
    shortName: "EMR / EHR",
    tagline: "Specialty clinical SOAP notes, longitudinal records, e-prescriptions, and decision support.",
    description:
      "Specialty-specific SOAP templates, rapid e-prescribing, longitudinal patient health timelines, and real-time drug allergy decision support.",
    iconName: "Stethoscope",
    image: "/images/medsky_doctor_emr_hd.png",
    category: "Clinical",
    badge: "Clinical Suite",
    heroHighlights: [
      "Specialty templates (Cardiology, Pediatrics, Orthopedics, Ophthalmology, etc.)",
      "One-click previous prescription reorder with dosage adjustments",
      "Integrated drug safety alerts (allergies, contraindications, pregnancy warnings)",
      "Instant access to past lab trends, radiology scans, and surgery history",
    ],
    about: {
      badge: "Clinical Informatics",
      title: "Fast, Intuitive Electronic Health Records Built for Practicing Doctors",
      description:
        "Medsky EMR was engineered by clinicians to eliminate documentation burnout. Complete structured clinical charts, view historical blood test curves, review radiology scans, and dispatch digital prescriptions in seconds.",
      image: "/images/medsky_doctor_emr_hd.png",
      highlights: [
        "1-Click previous prescription reorder with dosage titration",
        "Pre-built specialty SOAP templates for over 25+ medical disciplines",
        "Integrated drug allergy and adverse interaction safety alerts",
        "ABDM M1, M2 & M3 compliant ABHA generation & health record linking",
      ],
    },
    keyFeatures: [
      {
        title: "Specialty SOAP Templates",
        description: "Tailored clinical examination forms for internal medicine, pediatrics, and surgery.",
        icon: "FileText",
      },
      {
        title: "Rapid e-Prescribing",
        description: "Search by generic name, choose pre-configured dosage frequency (1-0-1), and add instructions.",
        icon: "Pill",
      },
      {
        title: "Clinical Decision Support",
        description: "Real-time warnings for duplicate medication orders and documented allergies.",
        icon: "ShieldCheck",
      },
    ],
    benefits: [
      {
        title: "Sub-90-Second Charting Speed",
        description: "Smart clinical macros and customized prescription favorites reduce charting time by 60%.",
        icon: "Zap",
      },
      {
        title: "Longitudinal Health History",
        description: "Track chronic disease biomarkers over time with automated trend graphs for HbA1c, BP, and lipids.",
        icon: "TrendingUp",
      },
      {
        title: "Zero Medication Harm Incidents",
        description: "Automatic cross-checking against known patient allergies and drug-drug interactions.",
        icon: "ShieldCheck",
      },
      {
        title: "Interoperable Clinical Portability",
        description: "Standards-compliant SNOMED-CT and ICD-10 coding ready for Ayushman Bharat Digital Mission (ABDM).",
        icon: "Award",
      },
    ],
    whyMedsky: [
      {
        title: "Practicing Doctor Designed",
        description: "Engineered without cluttered multi-layered menus; everything a physician needs is accessible on one view.",
        icon: "HeartPulse",
      },
      {
        title: "Touch & Pen Stylus Support",
        description: "Draw directly on anatomical body charts (ENT, Dermatology, Orthopedic joints) on iPad or stylus tablets.",
        icon: "Activity",
      },
      {
        title: "Voice-to-Text Clinical Dictation",
        description: "Dictate complex surgical notes and patient discharge summaries with high medical accuracy.",
        icon: "Headphones",
      },
      {
        title: "Complete Inpatient-Outpatient Continuity",
        description: "Seamlessly access notes whether the patient was seen in OPD, emergency triage, or IPD wards.",
        icon: "RefreshCw",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Queue Review", detail: "Doctor views today's scheduled consultations with patient vitals." },
      { stepNumber: "02", title: "History & Exam", detail: "Record subjective complaints and physical examination." },
      { stepNumber: "03", title: "e-Prescription", detail: "Select medications with automated safety checks." },
    ],
    metrics: [
      { value: "< 90 Sec", label: "Standard Consultation Time" },
      { value: "100%", label: "Legible & Traceable Records" },
      { value: "0", label: "Adverse Drug Incidents" },
    ],
    relatedModules: ["opd", "ipd", "pharmacy", "laboratory"],
    testimonials: [
      {
        id: "emr-t1",
        name: "Dr. Vikram Sethi",
        role: "Senior Consultant Cardiologist",
        hospital: "National Heart & Lung Institute",
        rating: 5,
        quote: "The graphical trending of ECGs, lipid panels, and blood pressure across multi-year visits gives me complete diagnostic clarity in seconds.",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "VS",
      },
      {
        id: "emr-t2",
        name: "Dr. Kavita Singhal",
        role: "Pediatric Specialist",
        hospital: "Blossom Mother & Child Hospital",
        rating: 5,
        quote: "Pediatric growth charts with WHO percentiles and automated vaccine schedules have made my clinical documentation effortless and comprehensive.",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "KS",
      },
    ],
    faqs: [
      {
        id: "emr-f1",
        question: "What is Medsky Electronic Medical Record (EMR) Software?",
        answer:
          "Medsky Electronic Medical Record (EMR) Software is a digital healthcare solution that helps doctors and healthcare organizations manage patient clinical information electronically. It enables healthcare professionals to maintain digital case sheets, patient history, clinical records, e-prescriptions, and medical information in a centralized system.",
      },
      {
        id: "emr-f2",
        question: "What is the difference between EMR and EHR?",
        answer:
          "EMR (Electronic Medical Record) primarily focuses on maintaining a patient's medical records within a healthcare facility, while EHR (Electronic Health Record) provides a broader view of a patient's health information across different healthcare workflows and providers. Medsky supports both EMR and EHR capabilities to help healthcare organizations manage comprehensive digital patient records.",
      },
      {
        id: "emr-f3",
        question: "Does Medsky provide Electronic Health Record (EHR) Software?",
        answer:
          "Yes. Medsky Electronic Health Record Software helps healthcare organizations maintain comprehensive digital patient information, including medical history, clinical records, case sheets, prescriptions, and other patient-related information. It provides healthcare professionals with quick access to relevant patient information during clinical workflows.",
      },
      {
        id: "emr-f4",
        question: "Does Medsky offer E-Prescription Software?",
        answer:
          "Yes. Medsky provides E-Prescription Software that enables doctors to create and manage digital prescriptions. Doctors can record medicines and prescription instructions electronically, helping reduce handwritten prescriptions and making prescription information easier to access and manage.",
      },
      {
        id: "emr-f5",
        question: "What is Computerized Prescription Software?",
        answer:
          "Computerized Prescription Software allows doctors to create prescriptions digitally instead of writing them manually. Medsky's computerized prescription functionality helps doctors prepare digital prescriptions as part of the patient's clinical workflow while maintaining prescription information within the patient's medical record.",
      },
      {
        id: "emr-f6",
        question: "How does Medsky EMR Software help doctors?",
        answer:
          "Medsky EMR Software helps doctors access patient information quickly and manage clinical documentation digitally. Key capabilities include digital case sheets, patient history, e-prescriptions, patient dashboards, and clinical records, helping doctors streamline documentation and improve the efficiency of everyday consultations.",
      },
      {
        id: "emr-f7",
        question: "Is Medsky a complete EMR and EHR Software solution?",
        answer:
          "Medsky combines Electronic Medical Record (EMR) and Electronic Health Record (EHR) capabilities with other healthcare workflows. Doctors and healthcare organizations can manage digital patient records, case sheets, medical history, e-prescriptions, and related clinical information through an integrated healthcare software platform.",
      },
      {
        id: "emr-f8",
        question: "Can Medsky E-Prescription Software maintain patient prescription history?",
        answer:
          "Yes. Medsky can maintain digital prescription information as part of the patient's clinical record. This allows authorized healthcare professionals to review previous prescription and patient information during subsequent consultations, supporting better continuity of care.",
      },
      {
        id: "emr-f9",
        question: "Is Medsky EMR Software suitable for hospitals and clinics?",
        answer:
          "Yes. Medsky EMR and EHR Software is designed for use by hospitals, clinics, doctors, and healthcare organizations. It can support digital patient documentation, electronic medical records, computerized prescriptions, case sheets, patient history, and other clinical workflows.",
      },
      {
        id: "emr-f10",
        question: "Why choose Medsky for Electronic Medical Record and E-Prescription Software?",
        answer:
          "Medsky provides an integrated Electronic Medical Record, Electronic Health Record, and E-Prescription Software solution designed to simplify clinical documentation. With features such as digital case sheets, patient history, patient dashboard, E-Prescription, and computerized prescription management, Medsky helps healthcare organizations move toward efficient and paperless clinical workflows.",
      },
    ],
  },

  // 7. EMERGENCY & CRITICAL TRAUMA
  {
    slug: "emergency",
    name: "Emergency & Critical Trauma",
    shortName: "Emergency Care",
    tagline: "High-speed triage, crash cart tracking, and urgent clinical interventions.",
    description:
      "Engineered for high-pressure emergency departments with color-coded triage, rapid registration, bedside diagnostics, and instant code notifications.",
    iconName: "Ambulance",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    category: "Clinical",
    badge: "Critical Response",
    heroHighlights: [
      "10-second rapid emergency check-in & barcode wristband generation",
      "Standardized triage scale (ESI / Manchester algorithms)",
      "Crash cart & high-alert emergency drug tracking",
      "Direct link to OT, Cath Lab, ICU and Emergency Blood Bank",
    ],
    about: {
      badge: "Trauma & Acute Triage",
      title: "Saving Critical Seconds When Every Heartbeat Matters",
      description:
        "The Medsky Emergency Module equips trauma teams with instant patient check-in, validated triage acuity categorization, one-touch Code Blue activations, and rapid priority routing to OT and ICU bays.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "10-second instant emergency intake with barcode wristband generation",
        "Automated Manchester & ESI color-coded triage acuity algorithms",
        "STAT lab and radiology order prioritization across departments",
        "One-touch hospital-wide emergency code broadcasts (Blue, Red, Yellow)",
      ],
    },
    keyFeatures: [
      {
        title: "Triage Acuity Scoring",
        description: "Fast triage assessment categorizing urgency from resuscitation to non-urgent minor injuries.",
        icon: "Activity",
      },
      {
        title: "Bedside Point-of-Care Orders",
        description: "Immediate stat orders for ABG, ECG, troponin, and blood cross-match.",
        icon: "Zap",
      },
      {
        title: "Trauma Team Activation",
        description: "One-touch alert broadcasting to trauma surgeons and on-call anesthesiologists.",
        icon: "ShieldCheck",
      },
    ],
    benefits: [
      {
        title: "Under 3-Minute Door-to-Triage",
        description: "Fast-track emergency registration gets critical patients into treatment bays without administrative holdups.",
        icon: "Clock",
      },
      {
        title: "Priority STAT Diagnostics",
        description: "All ER orders carry automated STAT flags bypassing routine hospital queues in the lab and imaging suites.",
        icon: "Zap",
      },
      {
        title: "Zero Communication Lag",
        description: "Instant mobile alerts notify on-call specialists, cardiologists, and OT staff the moment trauma arrives.",
        icon: "Smartphone",
      },
      {
        title: "Complete Medico-Legal Audit Trails",
        description: "Time-stamped resuscitation logs and digital clinical sign-offs protect healthcare institutions.",
        icon: "FileText",
      },
    ],
    whyMedsky: [
      {
        title: "High-Stress Ergonomics",
        description: "High-contrast visual cards with oversized buttons designed for fast touchscreen entry in ICU environments.",
        icon: "HeartPulse",
      },
      {
        title: "Temporary Emergency UHID",
        description: "Initiate life-saving blood transfusions and scans for unidentified patients before formal registration.",
        icon: "ShieldCheck",
      },
      {
        title: "Crash Cart Medication Tracking",
        description: "Real-time logging of high-alert emergency narcotics and automated daily replenishment triggers.",
        icon: "Pill",
      },
      {
        title: "Direct OT & Cath Lab Handshake",
        description: "One-click transfer of patient vitals and surgical notes when escalating to operating theaters.",
        icon: "DoorOpen",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Arrival & Triage", detail: "Triage nurse assigns acuity color code and allocates emergency bay." },
      { stepNumber: "02", title: "Stat Stabilization", detail: "Physicians initiate ABC protocols with real-time vitals sync." },
      { stepNumber: "03", title: "Fast-Track Transfer", detail: "Patient transferred to OT/ICU or discharged following observation." },
    ],
    metrics: [
      { value: "< 3 Min", label: "Door-to-Triage Duration" },
      { value: "100%", label: "Stat Investigation Compliance" },
      { value: "Zero Delay", label: "Code Blue / Red Broadcast" },
    ],
    relatedModules: ["ipd", "laboratory", "radiology", "pharmacy"],
    testimonials: [
      {
        id: "emg-t1",
        name: "Dr. Jordan Hayes",
        role: "Head of Emergency Medicine",
        hospital: "Trauma & Acute Care Centre",
        rating: 5,
        quote: "In trauma care, every second counts. Medsky's rapid 10-second intake and instant Code Blue broadcasts have streamlined our resuscitation workflows.",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "JH",
      },
    ],
    faqs: [
      {
        id: "emg-f1",
        question: "How does Medsky handle unconscious or unidentified trauma patients?",
        answer: "The ER module provides temporary 'Emergency UHID' generation allowing immediate blood matching, imaging, and medication administration before formal identification.",
      },
      {
        id: "emg-f2",
        question: "Can stat lab and radiology orders be prioritized automatically?",
        answer: "Yes, all emergency orders carry a STAT flag that automatically bypasses standard queues in the LIS and PACS worklists.",
      },
    ],
  },

  // 8. RADIOLOGY & PACS IMAGING (RIS)
  {
    slug: "radiology",
    name: "Radiology & PACS Imaging (RIS)",
    shortName: "Radiology & PACS",
    tagline: "Seamless imaging order management, DICOM viewer integration, and radiological reporting.",
    description:
      "Radiology Information Software (RIS) integrated with DICOM/PACS viewers for CT, MRI, X-Ray, and USG workflows.",
    iconName: "Scan",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
    category: "Diagnostics",
    badge: "Imaging & PACS",
    heroHighlights: [
      "Zero-footprint web DICOM viewer for brain CT, MRI, and angiography",
      "Speech-to-text structured radiology report generation",
      "Immediate critical finding alerts for stroke and acute intracranial events",
      "Direct integration with hospital neuro ICU and Cath Lab worklists",
    ],
    about: {
      badge: "Medical Imaging & RIS",
      title: "Connecting Modalities, PACS & Diagnostic Reporting Seamlessly",
      description:
        "Medsky RIS bridges imaging modalities (CT, MRI, X-Ray, Ultrasound) with high-performance web-based DICOM viewers and structured radiologist reporting templates.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Zero-footprint HTML5 DICOM viewer accessible on any web browser",
        "Speech-to-text integration with structured specialty reporting templates",
        "Automated DICOM modality worklist (MWL) pushing patient IDs to scanners",
        "Instant critical finding notifications to attending physicians and surgeons",
      ],
    },
    keyFeatures: [
      {
        title: "PACS Modality Worklist",
        description: "Direct synchronization with MRI, CT, and EEG modalities.",
        icon: "Cpu",
      },
      {
        title: "Web DICOM Viewer",
        description: "3D reconstructions, angle measurements, and multi-planar slice viewing.",
        icon: "Scan",
      },
      {
        title: "Critical Alerts",
        description: "Urgent notifications broadcasted to on-call clinicians.",
        icon: "Zap",
      },
    ],
    benefits: [
      {
        title: "4x Faster Diagnostic Reporting",
        description: "Structured templates and voice dictation enable radiologists to sign off complex CT/MRI reports rapidly.",
        icon: "Clock",
      },
      {
        title: "Zero Installation Overhead",
        description: "View full-resolution DICOM slices with 3D MPR tools directly in Chrome, Safari, or Edge without plugins.",
        icon: "Layers",
      },
      {
        title: "Lossless Encrypted Cloud Archival",
        description: "Long-term DICOM storage with instant retrieval for comparison against historical imaging studies.",
        icon: "ShieldCheck",
      },
      {
        title: "Elimination of Transcription Delay",
        description: "Reports instantly sync with the patient's centralized electronic medical record upon sign-off.",
        icon: "FileText",
      },
    ],
    whyMedsky: [
      {
        title: "Universal DICOM 3.0 Compliance",
        description: "Connects with GE, Siemens, Philips, Toshiba, and all major radiology hardware vendors.",
        icon: "Cpu",
      },
      {
        title: "Teleradiology Enabled",
        description: "Enable remote radiologist reporting securely with high-speed compression algorithms.",
        icon: "Smartphone",
      },
      {
        title: "Contrast Media Safety Checks",
        description: "Automated serum creatinine and eGFR validation alerts before contrast administration.",
        icon: "ShieldCheck",
      },
      {
        title: "Integrated Inpatient & OPD Billing",
        description: "Imaging orders automatically post to the patient account upon radiologist verification.",
        icon: "Receipt",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Scan Order", detail: "Doctor orders imaging; prep notes transmit to imaging suite." },
      { stepNumber: "02", title: "DICOM Transfer", detail: "Scanner transfers high-resolution slices to PACS." },
      { stepNumber: "03", title: "Radiologist Sign-Off", detail: "Report dictated and attached to patient EMR in real time." },
    ],
    metrics: [
      { value: "4x", label: "Faster Reporting" },
      { value: "Zero Loss", label: "Encrypted Cloud Archival" },
      { value: "100%", label: "DICOM 3.0 Compliance" },
    ],
    relatedModules: ["laboratory", "doctor", "emergency", "ipd"],
    testimonials: [
      {
        id: "rad-t1",
        name: "Dr. Priya Patel",
        role: "Chief Radiologist",
        hospital: "Apex Diagnostic Imaging Institute",
        rating: 5,
        quote: "The integrated zero-footprint web DICOM viewer allows me to view 3D MRI reconstructions and dictate structured reports from any workstation without lagging.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "PP",
      },
    ],
    faqs: [
      {
        id: "rad-f1",
        question: "Does the DICOM viewer require software installation on client PCs?",
        answer: "No, Medsky uses a zero-footprint HTML5 DICOM viewer that runs directly in any modern web browser with full MPR, 3D, and measurement capabilities.",
      },
      {
        id: "rad-f2",
        question: "Can radiologists report remotely using teleradiology workflows?",
        answer: "Yes, cloud-enabled teleradiology access with secure VPN and voice dictation allows reporting from anywhere 24/7.",
      },
    ],
  },

  // 9. HOSPITAL BILLING & TPA CLAIMS
  {
    slug: "billing",
    name: "Hospital Billing & TPA Claims",
    shortName: "Billing & Claims",
    tagline: "Streamline patient billing, multi-tariff pricing, and insurance TPA claims.",
    description:
      "Automated financial engine for hospitals: manage OPD receipts, IPD invoices, insurance pre-authorizations, corporate contracts, and doctor revenue shares.",
    iconName: "Receipt",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    category: "Financial",
    badge: "Revenue Cycle",
    heroHighlights: [
      "Unified bill calculation aggregating bed, doctor, surgery, lab, and pharmacy charges",
      "Insurance TPA pre-auth, claim submission, and co-pay splitting",
      "Flexible payment gateways (Credit Card, Debit, Net Banking, UPI, Cash)",
      "Comprehensive daily revenue reconciliation and doctor payout calculation",
    ],
    about: {
      badge: "Revenue Cycle Management",
      title: "Eliminating Revenue Leakage Across Clinical & Insurance Workflows",
      description:
        "Medsky Billing integrates all revenue streams into a unified financial ledger. Handle complex corporate packages, multi-tariff price lists, cashless TPA insurance pre-authorizations, and doctor revenue shares effortlessly.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Automated consolidation of pharmacy, lab, OT, and bed charges",
        "End-to-end TPA insurance pre-authorization and cashless claim processing",
        "Configurable multi-tariff price matrix (General, Private, Corporate, TPA)",
        "Automated doctor consultation, procedure, and surgery fee splits",
      ],
    },
    keyFeatures: [
      {
        title: "Multi-Tariff Master",
        description: "Custom tariff rates for cash patients, corporate panels, and insurance TPAs.",
        icon: "Receipt",
      },
      {
        title: "TPA & Insurance Pre-Auth",
        description: "Track claim requests, approval letters, copayment ratios, and settlement cycles.",
        icon: "ShieldCheck",
      },
      {
        title: "Doctor Revenue Sharing",
        description: "Automate doctor consultation, surgery, and procedure commissions.",
        icon: "TrendingUp",
      },
    ],
    benefits: [
      {
        title: "0% Revenue Leakage",
        description: "Every diagnostic order, consumable, and OT service automatically charges to the running inpatient ledger.",
        icon: "ShieldCheck",
      },
      {
        title: "85% Faster Cashless Processing",
        description: "Streamlined insurance pre-authorization and copay calculations reduce discharge billing delays.",
        icon: "Clock",
      },
      {
        title: "100% Audit-Ready Financials",
        description: "Complete daily shift collections, tender reconciliations, and GST reports ready for statutory audits.",
        icon: "FileText",
      },
      {
        title: "Automated Doctor Payouts",
        description: "Transparent real-time computation of doctor commissions based on consultation and procedure matrices.",
        icon: "TrendingUp",
      },
    ],
    whyMedsky: [
      {
        title: "Split Billing Engine",
        description: "Effortlessly split bills between patient copays, primary insurers, and corporate employer panels.",
        icon: "Layers",
      },
      {
        title: "Multi-Tender Payments",
        description: "Accept split payments across Cash, Card, Net Banking, and instant UPI QR dynamic codes.",
        icon: "CreditCard",
      },
      {
        title: "Strict Discount Approvals",
        description: "Role-based hierarchical authorization for billing discounts preventing unauthorized price cuts.",
        icon: "Lock",
      },
      {
        title: "ERP & Accounting Integration",
        description: "Seamless synchronization with Tally, SAP, and custom enterprise accounting software.",
        icon: "Building2",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Charge Capture", detail: "Services rendered across pharmacy, OT, lab, and wards post to bill." },
      { stepNumber: "02", title: "Insurance Pre-Auth", detail: "TPA desk logs cashless eligibility and pre-auth approvals." },
      { stepNumber: "03", title: "Final Bill Clearance", detail: "Discharge bill reconciled with insurance approval and settlement." },
    ],
    metrics: [
      { value: "0%", label: "Billing Revenue Leakage" },
      { value: "85%", label: "Faster Cashless Processing" },
      { value: "100%", label: "Audit-Ready Financials" },
    ],
    relatedModules: ["opd", "ipd", "pharmacy", "reports"],
    testimonials: [
      {
        id: "bil-t1",
        name: "Rameshwar Sen",
        role: "Chief Financial Officer",
        hospital: "Medicare Super Specialty Hospitals",
        rating: 5,
        quote: "Revenue leakages in our bed and OT consumable billing vanished immediately. TPA pre-authorizations and claim settlements are 85% faster.",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "RS",
      },
    ],
    faqs: [
      {
        id: "bil-f1",
        question: "Can Medsky handle split billing between patients and multiple insurance TPAs?",
        answer: "Yes, our billing engine handles co-pay limits, non-payable consumable deductibles, and corporate cashless approvals with automated split invoice receipts.",
      },
      {
        id: "bil-f2",
        question: "How does doctor fee commission calculation work?",
        answer: "You can define customizable commission slabs for OPD consultations, IPD visits, surgical procedures, and diagnostic referrals calculated in real time.",
      },
    ],
  },

  // 10. NURSING STATION & CARE MANAGEMENT
  {
    slug: "nursing",
    name: "Nursing Station & Care Management",
    shortName: "Nursing Care",
    tagline: "Empower nursing staff with automated vitals capture, eMAR charts, and shift handovers.",
    description:
      "Manage shift handovers, patient vitals charting, doctor order execution, IV fluid monitoring, intake/output balances, and consumable billing.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    category: "Clinical",
    badge: "Ward Nursing",
    heroHighlights: [
      "Digital vitals flowsheets with automatic NEWS2 clinical deterioration alerts",
      "eMAR electronic medication administration with barcode scanning",
      "Structured shift handover sheets eliminating patient communication gaps",
      "Direct ward consumable indenting linked with patient billing ledger",
    ],
    about: {
      badge: "Inpatient Nursing Care",
      title: "Empowering Nurses With Modern Bedside Digital Informatics",
      description:
        "Designed to reduce nurse charting burdens so healthcare teams can focus on bedside care. Medsky Nursing Station streamlines scheduled drug administrations (eMAR), vital sign tracking, and structured shift handovers.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Bedside eMAR medication verification using mobile barcode scanners",
        "Automated NEWS2 early warning score calculation for clinical risk",
        "Electronic shift changeover checklists ensuring continuous patient safety",
        "Instant ward consumable indenting connected to the central store",
      ],
    },
    keyFeatures: [
      {
        title: "Digital Flowsheet & Vitals",
        description: "Record temperature, pulse, BP, SpO2, blood glucose, and IV intake/output effortlessly.",
        icon: "Activity",
      },
      {
        title: "eMAR Verification",
        description: "Scan barcodes to confirm the 5 rights of medication administration before dispensing.",
        icon: "ShieldCheck",
      },
      {
        title: "Shift Handover Log",
        description: "Electronic shift change checklists ensuring unbroken continuum of patient care.",
        icon: "Users",
      },
    ],
    benefits: [
      {
        title: "45 Minutes Saved per Shift",
        description: "Eliminating paper flowsheets and manual recalculations allows nurses to spend more time with patients.",
        icon: "Clock",
      },
      {
        title: "Early Clinical Deterioration Alerts",
        description: "Automated National Early Warning Scores (NEWS2) alert duty doctors before patient conditions worsen.",
        icon: "HeartPulse",
      },
      {
        title: "100% eMAR Medication Compliance",
        description: "Prevents missed doses, duplicate administrations, and incorrect timings with audible reminders.",
        icon: "ShieldCheck",
      },
      {
        title: "Seamless Shift Transition",
        description: "Incoming staff receive complete visibility of pending orders, active IV drips, and recent vitals.",
        icon: "RefreshCw",
      },
    ],
    whyMedsky: [
      {
        title: "Designed for Bedside Tablets",
        description: "High-contrast, large touch-friendly buttons optimized for mobile carts and tablets during ward rounds.",
        icon: "Smartphone",
      },
      {
        title: "Doctor Order Push Notifications",
        description: "New stat doctor orders flash immediately on nursing station screens without requiring phone follow-ups.",
        icon: "Zap",
      },
      {
        title: "Intake & Output Balance Tracking",
        description: "Real-time computation of 24-hour fluid balances for post-operative and ICU patients.",
        icon: "Activity",
      },
      {
        title: "Zero Lost Ward Consumables",
        description: "Bandages, syringes, and IV sets scanned at bedside immediately post to patient accounts.",
        icon: "Receipt",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Shift Takeover", detail: "Incoming nurse reviews active ward roster and critical patient alerts." },
      { stepNumber: "02", title: "Vitals & eMAR", detail: "Administer scheduled IV/oral drugs and record periodic vital signs." },
      { stepNumber: "03", title: "Handover Notes", detail: "Generate summary of new doctor orders and pending investigation results." },
    ],
    metrics: [
      { value: "45 Min", label: "Saved per Nurse Shift" },
      { value: "100%", label: "eMAR Chart Compliance" },
      { value: "Zero Gap", label: "Shift Handover Accuracy" },
    ],
    relatedModules: ["ipd", "doctor", "pharmacy", "billing"],
    testimonials: [
      {
        id: "nur-t1",
        name: "Matron Teresa George",
        role: "Head of Inpatient Nursing",
        hospital: "Covenant Memorial Hospital",
        rating: 5,
        quote: "Nurses spend far less time on tedious paper charts and more time at the patient's bedside. The automated NEWS2 early warning alerts have saved lives.",
        avatar: "https://images.unsplash.com/photo-1594824813576-9286d8b28cf9?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "TG",
      },
    ],
    faqs: [
      {
        id: "nur-f1",
        question: "Does the nursing module support Early Warning Scores (EWS / NEWS2)?",
        answer: "Yes, entering patient vital signs triggers automated NEWS2 calculations with color-coded risk alerts notifying duty doctors immediately.",
      },
    ],
  },

  // 11. HOSPITAL INVENTORY & SUPPLY CHAIN
  {
    slug: "inventory",
    name: "Hospital Inventory & Supply Chain",
    shortName: "Inventory & Assets",
    tagline: "Optimize medical supplies, hospital assets, biomedical equipment, and procurement.",
    description:
      "Centralized supply chain solution for hospitals. Track general stores, biomedical assets, medical consumables, surgical kits, and supplier contracts.",
    iconName: "Package",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    category: "Operations",
    badge: "Supply Chain",
    heroHighlights: [
      "Multi-location inventory tracking across central store, OT, wards, and labs",
      "Automated low-stock alerts and purchase order generation",
      "Biomedical asset maintenance schedules and AMC warranty tracking",
      "Batch tracking with serial numbers, warranty, and expiry management",
    ],
    about: {
      badge: "Supply Chain & Asset Management",
      title: "Total Control Over Hospital Supplies, Equipment & Procurement",
      description:
        "Medsky Inventory eliminates costly medical supply stockouts and overstock holding costs. Maintain real-time stock visibility across central warehouses, OT sterile stores, and biomedical equipment maintenance schedules.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Multi-tier warehouse tracking (Central Store, Sub-stores, OTs, Labs)",
        "Automated purchase order generation based on min/max buffer thresholds",
        "Biomedical equipment preventive maintenance (PPM) & AMC warranty alerts",
        "Strict consumption tracking linked with department cost centers",
      ],
    },
    keyFeatures: [
      {
        title: "Central Store Hierarchy",
        description: "Multi-tier warehouse hierarchy with stock transfer requests and consumption tracking.",
        icon: "Layers",
      },
      {
        title: "Automated Reorders",
        description: "Trigger Purchase Orders when stock dips below safe buffer levels.",
        icon: "RefreshCw",
      },
      {
        title: "Biomedical Equipment & AMC",
        description: "Maintain service history, calibration cycles, and breakdown tickets.",
        icon: "ShieldCheck",
      },
    ],
    benefits: [
      {
        title: "30% Reduction in Overstock Costs",
        description: "Predictive inventory forecasting prevents excess capital lockup in slow-moving surgical supplies.",
        icon: "TrendingUp",
      },
      {
        title: "Zero Emergency Stockouts",
        description: "Automated alerts trigger purchase requisitions before critical consumables hit minimum safety buffers.",
        icon: "ShieldCheck",
      },
      {
        title: "100% Biomedical Asset Uptime",
        description: "Automated PPM calibration reminders ensure ventilators, monitors, and anesthesia workstations stay certified.",
        icon: "Cpu",
      },
      {
        title: "Departmental Cost Accountability",
        description: "Track exact material consumption per ward, surgical team, and procedure to identify wastage.",
        icon: "FileText",
      },
    ],
    whyMedsky: [
      {
        title: "Vendor Rate Contract Management",
        description: "Lock negotiated prices across suppliers to prevent procurement overspending.",
        icon: "Receipt",
      },
      {
        title: "QR & Barcode Asset Tagging",
        description: "Scan asset tags to view historical maintenance logs, breakdown tickets, and depreciation values.",
        icon: "QrCode",
      },
      {
        title: "Sterile OT Surgical Kit Indents",
        description: "Pre-bundle surgical consumables into specialty packs for Orthopedics, Neurosurgery, and General Surgery.",
        icon: "Layers",
      },
      {
        title: "Automated Goods Receipt (GRN)",
        description: "Three-way matching between Purchase Order, Goods Receipt Note, and Supplier Invoice.",
        icon: "CheckCircle2",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Indent Request", detail: "Department heads submit supply requests based on requirements." },
      { stepNumber: "02", title: "PO Approval", detail: "Procurement manager approves purchase orders against rate contracts." },
      { stepNumber: "03", title: "Department Issue", detail: "Supplies issued to wards and OTs with real-time stock updates." },
    ],
    metrics: [
      { value: "30%", label: "Reduction in Overstock" },
      { value: "100%", label: "Asset Maintenance Compliance" },
      { value: "Zero Out", label: "Stockout Prevention" },
    ],
    relatedModules: ["pharmacy", "billing", "reports"],
    testimonials: [
      {
        id: "inv-t1",
        name: "Sudhir Bhandari",
        role: "Procurement Director",
        hospital: "Heritage Health System",
        rating: 5,
        quote: "We eliminated emergency medical stockouts and reduced our warehouse holding costs by 30% through automated reorder thresholds.",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "SB",
      },
    ],
    faqs: [
      {
        id: "inv-f1",
        question: "Can we track biomedical equipment service warranties and maintenance schedules?",
        answer: "Yes, every hospital asset is tagged with its serial number, AMC/CMC contract expiry, preventive maintenance schedule, and service history.",
      },
    ],
  },

  // 12. EXECUTIVE REPORTS & MIS ANALYTICS
  {
    slug: "reports",
    name: "Executive Reports & MIS Analytics",
    shortName: "Reports & Analytics",
    tagline: "Turn hospital clinical and operational data into actionable management intelligence.",
    description:
      "Executive reporting suite for hospital administrators: real-time KPI dashboards, departmental throughput, revenue cycle analysis, and automated MIS reports.",
    iconName: "BarChart3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    category: "Administrative",
    badge: "Executive MIS",
    heroHighlights: [
      "Real-time CEO dashboard tracking daily admissions, revenue, and bed occupancy",
      "Detailed financial MIS (Departmental revenue, TPA aging, doctor commissions)",
      "Clinical quality indicators (ALOS, readmission rates, infection control)",
      "Automated scheduled email and PDF report distribution to management",
    ],
    about: {
      badge: "Hospital Intelligence & MIS",
      title: "Transforming Raw Hospital Data Into Strategic Clinical & Financial Insights",
      description:
        "Medsky Analytics equips medical superintendents, CFOs, and hospital CEOs with real-time operational intelligence. Track Average Length of Stay (ALOS), bed turnover, ARPOB, and departmental revenue margins with sub-second dashboard refresh.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Executive mobile dashboard tracking live census, collections & admissions",
        "Automated NABH and clinical quality indicator calculations",
        "Financial revenue cycle aging reports & doctor profitability matrices",
        "Scheduled morning executive digest reports sent directly via email",
      ],
    },
    keyFeatures: [
      {
        title: "Executive Hospital Dashboard",
        description: "Summary of patient footfall, bed occupancy rate, and day-to-day revenue.",
        icon: "LayoutGrid",
      },
      {
        title: "Financial Analytics",
        description: "Aging analysis of insurance claims, cash-to-credit ratios, and ARPOB.",
        icon: "BarChart3",
      },
      {
        title: "NABH / JCI Quality KPIs",
        description: "Average Length of Stay, bed turnover rate, and surgical safety audits.",
        icon: "Award",
      },
    ],
    benefits: [
      {
        title: "Real-Time Executive Visibility",
        description: "Monitor multi-branch revenue, bed occupancy, and patient volumes from your smartphone anytime.",
        icon: "TrendingUp",
      },
      {
        title: "100+ Pre-Built Healthcare MIS Reports",
        description: "Comprehensive financial, clinical, and inventory analytics ready for board presentations.",
        icon: "FileText",
      },
      {
        title: "NABH Clinical Quality Compliance",
        description: "Auto-computed Average Length of Stay (ALOS), hospital-acquired infection rates, and readmission metrics.",
        icon: "Award",
      },
      {
        title: "Faster Strategic Decisions",
        description: "Identify high-margin specialty departments and underperforming clinical service lines instantly.",
        icon: "Zap",
      },
    ],
    whyMedsky: [
      {
        title: "Zero Impact on Production Speed",
        description: "Analytics queries run on optimized read-replicas ensuring clinical users never experience lag.",
        icon: "Cpu",
      },
      {
        title: "Automated Daily Email Digest",
        description: "Key performance indicators delivered to management inboxes every morning at 7:00 AM.",
        icon: "Smartphone",
      },
      {
        title: "Custom Report Builder",
        description: "Create customized SQL and pivot data tables with one-click Excel and PDF export.",
        icon: "Layers",
      },
      {
        title: "Granular Role-Based Security",
        description: "Restrict sensitive financial figures to authorized directors and finance controllers only.",
        icon: "Lock",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Live Data Aggregation", detail: "Events across clinical, diagnostic, and billing modules stream in real time." },
      { stepNumber: "02", title: "KPI Calculation", detail: "System computes operational metrics, bed occupancy, and ARPOB automatically." },
      { stepNumber: "03", title: "Automated Scheduling", detail: "Daily morning briefing emails sent to department heads." },
    ],
    metrics: [
      { value: "100+", label: "Pre-Built Healthcare MIS Reports" },
      { value: "Real-Time", label: "Dashboard Refresh" },
      { value: "100%", label: "Statutory Compliance" },
    ],
    relatedModules: ["billing", "opd", "ipd", "pharmacy", "laboratory"],
    testimonials: [
      {
        id: "rep-t1",
        name: "Dr. Alok Verma",
        role: "Managing Director & CEO",
        hospital: "CarePoint Healthcare Group",
        rating: 5,
        quote: "The executive dashboard gives me complete visibility over bed occupancy, daily cash collections, and departmental productivity from my phone.",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "AV",
      },
    ],
    faqs: [
      {
        id: "rep-f1",
        question: "Can hospital management receive automated daily MIS reports via email?",
        answer: "Yes, automated scheduled digests can be configured to email morning revenue summaries, bed occupancy, and critical clinical indicators directly to executives.",
      },
    ],
  },

  // INSURANCE MANAGEMENT SOFTWARE
  {
    slug: "insurance",
    name: "Insurance Management Software",
    shortName: "IMS",
    tagline: "Simplify hospital insurance operations with organized billing and claim management.",
    description:
      "Simplify hospital insurance operations by organizing patient insurance records, billing, claim processing, tracking, and payment settlements.",
    iconName: "ShieldCheck",
    image: "/images/hms-reseption.png",
    category: "Financial",
    badge: "Insurance",
    heroHighlights: [
      "Insurance Patient Registration & Billing",
      "Claim Preparation, Submission & Tracking",
      "Pending Claims, Payment Tracking & Reports",
      "Cashless & reimbursement claim management",
    ],
    about: {
      badge: "Insurance Operations",
      title: "Streamlined Hospital Insurance & Claim Management",
      description:
        "Medsky Insurance Management Software helps hospitals organize patient insurance records, process claims efficiently, and track payment settlements to reduce delays and revenue leakage.",
      highlights: [
        "Insurance Patient Registration & Billing",
        "Claim Preparation, Submission & Tracking",
        "Pending Claims & Payment Tracking",
        "Comprehensive Insurance Reports",
      ],
    },
    keyFeatures: [
      {
        title: "Insurance Patient Registration & Billing",
        description: "Register insurance patients, capture policy details, and generate accurate insurance bills.",
        icon: "FileText",
      },
      {
        title: "Claim Preparation, Submission & Tracking",
        description: "Prepare, submit, and track insurance claims through an organized workflow.",
        icon: "ShieldCheck",
      },
      {
        title: "Pending Claims & Payment Tracking",
        description: "Monitor pending claims, track payment settlements, and generate detailed insurance reports.",
        icon: "Receipt",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Patient Registration", detail: "Register insurance patient and capture policy and coverage details." },
      { stepNumber: "02", title: "Claim Submission", detail: "Prepare and submit claims to insurance providers with supporting documents." },
      { stepNumber: "03", title: "Payment Settlement", detail: "Track pending claims and record payment settlements accurately." },
    ],
    metrics: [
      { value: "Fast", label: "Claim Processing" },
      { value: "100%", label: "Claim Accuracy" },
      { value: "Zero", label: "Revenue Leakage" },
    ],
    relatedModules: ["ipd", "billing", "opd"],
    faqs: [
      {
        id: "ims-f1",
        question: "What is Medsky Insurance Management Software?",
        answer:
          "Medsky Insurance Management Software helps hospitals manage patient insurance records, billing, claim preparation, submission, tracking, and payment settlement in an organized digital workflow.",
      },
    ],
  },

  // SURGERY / OT MANAGEMENT SOFTWARE
  {
    slug: "surgery",
    name: "Surgery / OT Management Software",
    shortName: "OTM",
    tagline: "Coordinate surgical operations and OT scheduling with organized pre and post-operative workflows.",
    description:
      "Coordinate surgical operations by managing OT schedules, procedure bookings, pre-operative assessments, and post-operative documentation.",
    iconName: "Activity",
    image: "/images/hms-reseption.png",
    category: "Clinical",
    badge: "Surgery & OT",
    heroHighlights: [
      "OT Scheduling, Calendar & Surgery Booking",
      "Pre-operative Assessment, Anesthesia & Surgical Records",
      "OT Consumables, Surgery Billing & Reports",
      "Post-operative documentation and discharge coordination",
    ],
    about: {
      badge: "Surgical Operations",
      title: "Organized Surgical & OT Management for Modern Hospitals",
      description:
        "Medsky Surgery / OT Management Software helps hospitals coordinate operation theatres, manage surgery scheduling, record pre and post-operative assessments, and track OT consumables and billing.",
      highlights: [
        "OT Scheduling, Calendar & Surgery Booking",
        "Pre-operative Assessment & Anesthesia Records",
        "OT Consumables Management",
        "Surgery Billing & Comprehensive Reports",
      ],
    },
    keyFeatures: [
      {
        title: "OT Scheduling, Calendar & Surgery Booking",
        description: "Manage operation theatre schedules, surgery bookings, and OT calendar with real-time availability.",
        icon: "Calendar",
      },
      {
        title: "Pre-operative Assessment & Surgical Records",
        description: "Document pre-operative assessments, anesthesia details, and complete surgical records.",
        icon: "FileText",
      },
      {
        title: "OT Consumables, Surgery Billing & Reports",
        description: "Track OT consumables, generate surgery billing, and access detailed surgical reports.",
        icon: "Receipt",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Surgery Booking", detail: "Book OT slot, assign surgeon, and schedule pre-operative assessment." },
      { stepNumber: "02", title: "Surgical Procedure", detail: "Record anesthesia, intraoperative notes, and consumables used." },
      { stepNumber: "03", title: "Post-Operative Care", detail: "Document post-op care, generate surgery bill, and discharge coordination." },
    ],
    metrics: [
      { value: "Efficient", label: "OT Utilization" },
      { value: "Zero", label: "Scheduling Conflicts" },
      { value: "100%", label: "Record Accuracy" },
    ],
    relatedModules: ["ipd", "billing", "nursing"],
    faqs: [
      {
        id: "otm-f1",
        question: "What is Medsky Surgery / OT Management Software?",
        answer:
          "Medsky Surgery / OT Management Software helps hospitals coordinate operation theatres, manage surgery scheduling, record pre and post-operative assessments, and handle OT consumables and billing in an organized workflow.",
      },
    ],
  },

  // MRD MANAGEMENT SOFTWARE
  {
    slug: "mrd",
    name: "MRD Management Software",
    shortName: "MRD",
    tagline: "Organize hospital medical records through efficient document management and quick retrieval.",
    description:
      "Organize hospital medical records through efficient document management, indexing, tracking, and quick retrieval of patient information.",
    iconName: "Database",
    image: "/images/hms-reseption.png",
    category: "Administrative",
    badge: "Medical Records",
    heroHighlights: [
      "Patient Medical Records & Document Management",
      "Medical Record Indexing, Tracking & Retrieval",
      "Discharge Records, Patient History & MRD Reports",
      "Secure digital storage with quick access to patient records",
    ],
    about: {
      badge: "Medical Records Department",
      title: "Efficient Medical Record Management for Hospitals",
      description:
        "Medsky MRD Management Software helps hospitals organize patient medical records, manage document indexing, enable quick retrieval, and maintain discharge records and patient history in a structured digital system.",
      highlights: [
        "Patient Medical Records & Document Management",
        "Medical Record Indexing & Tracking",
        "Quick Record Retrieval",
        "Discharge Records & MRD Reports",
      ],
    },
    keyFeatures: [
      {
        title: "Patient Medical Records & Document Management",
        description: "Digitally manage patient medical records and clinical documents in an organized repository.",
        icon: "FileText",
      },
      {
        title: "Medical Record Indexing, Tracking & Retrieval",
        description: "Index, track, and quickly retrieve patient medical records when needed.",
        icon: "Database",
      },
      {
        title: "Discharge Records, Patient History & MRD Reports",
        description: "Maintain discharge records, patient history, and generate comprehensive MRD reports.",
        icon: "BarChart3",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Record Creation", detail: "Capture and index patient medical records and documents digitally." },
      { stepNumber: "02", title: "Record Management", detail: "Organize, track, and update medical records throughout the patient journey." },
      { stepNumber: "03", title: "Record Retrieval", detail: "Retrieve patient records quickly using indexed search and patient history." },
    ],
    metrics: [
      { value: "Fast", label: "Record Retrieval" },
      { value: "100%", label: "Digital Records" },
      { value: "Secure", label: "Document Storage" },
    ],
    relatedModules: ["ipd", "opd", "doctor"],
    faqs: [
      {
        id: "mrd-f1",
        question: "What is Medsky MRD Management Software?",
        answer:
          "Medsky MRD Management Software helps hospitals organize patient medical records, manage document indexing, enable quick retrieval of records, and maintain discharge summaries and patient history in a structured digital workflow.",
      },
    ],
  },

  // DAY CARE MANAGEMENT SOFTWARE
  {
    slug: "daycare",
    name: "Day Care Management Software",
    shortName: "DCM",
    tagline: "Manage short-stay treatments and procedures with streamlined patient registration and billing.",
    description:
      "Manage short-stay treatments and procedures with streamlined patient registration, scheduling, clinical workflows, billing, and discharge.",
    iconName: "Calendar",
    image: "/images/hms-reseption.png",
    category: "Clinical",
    badge: "Day Care",
    heroHighlights: [
      "Day Care Registration, Appointment & Scheduling",
      "Procedure, Doctor Consultation & Nursing Management",
      "Medication, Billing & Discharge Management",
      "Short-stay clinical workflow management",
    ],
    about: {
      badge: "Day Care Operations",
      title: "Streamlined Day Care Management for Short-Stay Procedures",
      description:
        "Medsky Day Care Management Software helps hospitals manage short-stay treatments and procedures efficiently, from patient registration and scheduling to clinical workflows, billing, and discharge.",
      highlights: [
        "Day Care Registration, Appointment & Scheduling",
        "Procedure & Doctor Consultation Management",
        "Nursing & Medication Management",
        "Billing & Discharge Management",
      ],
    },
    keyFeatures: [
      {
        title: "Day Care Registration, Appointment & Scheduling",
        description: "Register day care patients, manage appointments, and schedule procedures with ease.",
        icon: "Calendar",
      },
      {
        title: "Procedure, Doctor Consultation & Nursing Management",
        description: "Document procedures, doctor consultations, and nursing activities for day care patients.",
        icon: "Stethoscope",
      },
      {
        title: "Medication, Billing & Discharge Management",
        description: "Manage medications, generate day care billing, and coordinate patient discharge.",
        icon: "Receipt",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Day Care Registration", detail: "Register patient, book appointment, and schedule procedure." },
      { stepNumber: "02", title: "Clinical Care", detail: "Manage procedure, doctor consultation, nursing, and medication." },
      { stepNumber: "03", title: "Billing & Discharge", detail: "Generate bill and complete discharge documentation." },
    ],
    metrics: [
      { value: "Efficient", label: "Patient Throughput" },
      { value: "Fast", label: "Discharge Process" },
      { value: "100%", label: "Billing Accuracy" },
    ],
    relatedModules: ["ipd", "opd", "billing"],
    faqs: [
      {
        id: "dcm-f1",
        question: "What is Medsky Day Care Management Software?",
        answer:
          "Medsky Day Care Management Software helps hospitals manage short-stay treatments and procedures with organized patient registration, scheduling, clinical workflows, billing, and discharge management.",
      },
    ],
  },

  // DIALYSIS MANAGEMENT SOFTWARE
  {
    slug: "dialysis",
    name: "Dialysis Management Software",
    shortName: "DLM",
    tagline: "Manage dialysis services through organized patient records and treatment scheduling.",
    description:
      "Manage dialysis services through organized patient records, treatment scheduling, session documentation, and billing workflows.",
    iconName: "HeartPulse",
    image: "/images/hms-reseption.png",
    category: "Clinical",
    badge: "Dialysis",
    heroHighlights: [
      "Dialysis Patient Registration & Session Scheduling",
      "Pre/Post-Dialysis Records, Vital Signs & Treatment Documentation",
      "Dialysis Billing, Patient History & Reports",
      "Complete dialysis session monitoring and documentation",
    ],
    about: {
      badge: "Dialysis Operations",
      title: "Organized Dialysis Management for Healthcare Facilities",
      description:
        "Medsky Dialysis Management Software helps healthcare facilities manage dialysis patient records, schedule treatment sessions, document pre and post-dialysis vitals, and handle billing in an organized workflow.",
      highlights: [
        "Dialysis Patient Registration & Session Scheduling",
        "Pre/Post-Dialysis Vital Signs & Treatment Documentation",
        "Dialysis Billing & Patient History",
        "Comprehensive Dialysis Reports",
      ],
    },
    keyFeatures: [
      {
        title: "Dialysis Patient Registration & Session Scheduling",
        description: "Register dialysis patients, schedule treatment sessions, and manage dialysis calendars.",
        icon: "Calendar",
      },
      {
        title: "Pre/Post-Dialysis Records & Treatment Documentation",
        description: "Document pre and post-dialysis vital signs, treatment parameters, and session notes.",
        icon: "FileText",
      },
      {
        title: "Dialysis Billing, Patient History & Reports",
        description: "Generate dialysis billing, maintain patient treatment history, and access comprehensive reports.",
        icon: "BarChart3",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Patient Registration", detail: "Register dialysis patient and schedule treatment sessions." },
      { stepNumber: "02", title: "Session Documentation", detail: "Record pre-dialysis vitals, treatment parameters, and post-dialysis observations." },
      { stepNumber: "03", title: "Billing & Reports", detail: "Generate session billing and maintain comprehensive patient treatment history." },
    ],
    metrics: [
      { value: "Organized", label: "Session Management" },
      { value: "Complete", label: "Treatment Records" },
      { value: "Accurate", label: "Dialysis Billing" },
    ],
    relatedModules: ["ipd", "billing", "nursing"],
    faqs: [
      {
        id: "dlm-f1",
        question: "What is Medsky Dialysis Management Software?",
        answer:
          "Medsky Dialysis Management Software helps healthcare facilities manage dialysis patient records, schedule treatment sessions, document pre and post-dialysis vitals and treatment details, and handle billing and reports in an organized workflow.",
      },
    ],
  },
];

// Export slug aliases for legacy backward-compatibility
export const MODULE_SLUG_ALIASES: Record<string, string> = {
  ipd: "hospital-management-software",
  hms: "hospital-management-software",
  opd: "clinic-management-software",
  cms: "clinic-management-software",
  laboratory: "laboratory-management-software",
  lms: "laboratory-management-software",
  lims: "laboratory-management-software",
  pharmacy: "pharmacy-management-software",
  pms: "pharmacy-management-software",
  pims: "pharmacy-management-software",
};

// Also append legacy alias entries into MODULES_DATA so that any lookup by legacy slug succeeds
const _hmsBase = MODULES_DATA.find((m) => m.slug === "hospital-management-software");
if (_hmsBase) {
  MODULES_DATA.push({ ..._hmsBase, slug: "ipd" });
}
const _cmsBase = MODULES_DATA.find((m) => m.slug === "clinic-management-software");
if (_cmsBase) {
  MODULES_DATA.push({ ..._cmsBase, slug: "opd" });
}
const _lmsBase = MODULES_DATA.find((m) => m.slug === "laboratory-management-software");
if (_lmsBase) {
  MODULES_DATA.push({ ..._lmsBase, slug: "laboratory" });
}
const _pmsBase = MODULES_DATA.find((m) => m.slug === "pharmacy-management-software");
if (_pmsBase) {
  MODULES_DATA.push({ ..._pmsBase, slug: "pharmacy" });
}
