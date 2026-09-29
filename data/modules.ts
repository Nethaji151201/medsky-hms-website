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
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
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

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "hms",
    name: "HMS",
    slug: "ipd",
    tagline: "Hospital Management Software",
    description:
      "Streamline clinical workflows, automate billing, and elevate patient care with a secure, all-in-one Hospital Management System designed for modern medical institutions.",
    iconName: "Bed",
    image: "/images/hms-reseption.png",
    badge: "Enterprise",
  },
  {
    id: "lms",
    name: "LMS",
    slug: "laboratory",
    tagline: "Laboratory Management Software",
    description:
      "The all-in-one Laboratory Information Management System (LIMS) engineered to automate sample accessioning, integrate clinical instruments, and deliver secure, verifiable test reports to doctors and patients without delays.",
    iconName: "FlaskConical",
    image: "/images/lab-test.png",
    badge: "Diagnostics",
  },
  {
    id: "cms",
    name: "CMS",
    slug: "opd",
    tagline: "Clinic Management Software",
    description:
      "The all-in-one clinic management software that automates patient scheduling, simplifies digital charting, and accelerates your billing—so you can focus entirely on patient care.",
    iconName: "Activity",
    image: "/images/clinic.png",
    badge: "Polyclinic",
  },
  {
    id: "pharmacy",
    name: "PMS",
    slug: "pharmacy",
    tagline: "Pharmacy Management Software",
    description:
      "Streamline your daily pharmacy operations with an all-in-one platform built for independent stores, hospital dispensaries, and retail chains. Automate inventory, eliminate dispensing errors, and deliver faster patient care.",
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
  {
    slug: "ipd",
    name: "Hospital Management Software (HMS)",
    shortName: "HMS",
    tagline: "Inpatient admissions, bed occupancy, ward rounds, and discharge summaries.",
    description:
      "Comprehensive hospital management covering inpatient admissions, real-time bed census, OT scheduling, nursing rounds, and discharge clearance.",
    iconName: "Bed",
    image: "/images/hms-reseption.png",
    category: "Clinical",
    badge: "Enterprise",
    heroHighlights: [
      "Real-time visual bed census matrix (ICU, General, Private, Isolation)",
      "Automated bed charges, nursing tariffs, and clinical service bundles",
      "Electronic Medication Administration Records (eMAR) with barcode verification",
      "Discharge summary generation with one-click multi-department clearance",
    ],
    keyFeatures: [
      {
        title: "Admission & Bed Allocation",
        description: "Color-coded visual bed map showing occupied, vacant, reserved, cleaning, and maintenance bed states.",
        icon: "LayoutGrid",
      },
      {
        title: "Ward & Nurse Station Dashboard",
        description: "Consolidated ward view displaying patient vitals, active IV lines, and pending doctor orders.",
        icon: "Activity",
      },
      {
        title: "Discharge Workflow",
        description: "Multi-department clearance checklist (Pharmacy, Lab, Accounts) and printable summaries.",
        icon: "DoorOpen",
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
        question: "How does the real-time visual bed census matrix work in Medsky HMS?",
        answer: "The bed census matrix displays color-coded floor maps of your hospital wards, ICUs, and private rooms. It updates in real time to show occupied, vacant, reserved, undergoing sanitation, and maintenance beds, allowing instant transfers and admissions.",
      },
      {
        id: "hms-f2",
        question: "Can Medsky HMS manage automated multi-department discharge clearance?",
        answer: "Yes. When a doctor issues a discharge order, automated clearance tasks are dispatched simultaneously to Inpatient Pharmacy, Pathology, Radiology, and Billing. The final bill cannot be settled until all departments clear pending medications and investigation records.",
      },
      {
        id: "hms-f3",
        question: "Does the system support eMAR with barcode verification for nurses?",
        answer: "Absolutely. Nurses scan the patient's UHID wristband and medication blister strip using any mobile or handheld barcode scanner. The system cross-checks doctor orders, dosage, timing, and allergy warnings before confirming administration.",
      },
      {
        id: "hms-f4",
        question: "Is Medsky HMS capable of handling multi-building hospital campuses?",
        answer: "Yes, Medsky HMS is built on a multi-tier architectural hierarchy supporting multiple blocks, wings, nursing stations, and emergency units under a single centralized hospital database.",
      },
    ],
  },
  {
    slug: "laboratory",
    name: "Laboratory Management Software (LMS)",
    shortName: "LMS",
    tagline: "Diagnostic test workflows, sample barcoding, analyzer interfacing, and verified reports.",
    description:
      "End-to-end diagnostic and pathology laboratory Software with bi-directional analyzer interfacing, sample tracking, and automated digital sign-offs.",
    iconName: "FlaskConical",
    image: "/images/lab-test.png",
    category: "Diagnostics",
    badge: "Diagnostics LIS",
    heroHighlights: [
      "Bi-directional integration with major hematology & biochemistry analyzers",
      "Automated critical value alerts to consulting doctors and patient mobile",
      "Barcode sample tracking from phlebotomy chair to report sign-off",
      "Customizable report templates with reference ranges by age and gender",
    ],
    keyFeatures: [
      {
        title: "Test Requisition & Barcoding",
        description: "Unique test tube barcodes linked to patient UHID and investigation package.",
        icon: "QrCode",
      },
      {
        title: "Bi-directional Analyzer Sync",
        description: "Direct push/pull with lab analyzers eliminating manual data entry mistakes.",
        icon: "Cpu",
      },
      {
        title: "Pathologist Sign-Off",
        description: "Highlight abnormal results with delta checks against patient history.",
        icon: "CheckCircle2",
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
        quote: "Our TAT for emergency CBC and Cardiac Biomarkers dropped by 65%. Automated WhatsApp report dispatch reduced inquiry calls by 80%.",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80",
        initials: "RK",
      },
    ],
    faqs: [
      {
        id: "lms-f1",
        question: "Which laboratory analyzers are compatible with Medsky LMS?",
        answer: "Medsky LMS supports ASTM, HL7, and RS-232 serial communication protocols compatible with major equipment manufacturers including Roche, Sysmex, Beckman Coulter, Abbott, Mindray, and Bio-Rad.",
      },
      {
        id: "lms-f2",
        question: "How does the barcode sample accessioning workflow operate?",
        answer: "At the phlebotomy desk, durable barcode labels are printed with the patient's UHID, accession number, and sample color-code (EDTA, Serum, Sodium Fluoride). The analyzer reads the barcode and pulls the order automatically.",
      },
      {
        id: "lms-f3",
        question: "Can pathologists sign off reports digitally from outside the lab?",
        answer: "Yes, Medsky LMS has a secure cloud sign-off portal with cryptographic digital signatures and delta checks that compare current values against historical tests.",
      },
    ],
  },
  {
    slug: "opd",
    name: "Clinic Management Software (CMS)",
    shortName: "CMS",
    tagline: "Outpatient registration, queue management, doctor consultations, and polyclinic billing.",
    description:
      "Purpose-built for outpatient clinics and polyclinics to manage rapid patient check-ins, automated token queues, consultations, and day-care billing.",
    iconName: "Activity",
    image: "/images/clinic.png",
    category: "Clinical",
    badge: "Polyclinic",
    heroHighlights: [
      "Zero-wait digital patient registration & check-in",
      "Specialty orthopedic joint mapping and digital prescriptions",
      "One-click ICD-10 medical coding and digital prescriptions",
      "Instant routing to physiotherapy, radiology, and billing desks",
    ],
    keyFeatures: [
      {
        title: "Patient Registration & EMR",
        description: "Capture demographic data, insurance ID, past medical history, and emergency contacts with instant UHID generation.",
        icon: "FileText",
      },
      {
        title: "Specialty Templates",
        description: "Examination forms, range-of-motion assessments, and pre-surgical checklists.",
        icon: "Stethoscope",
      },
      {
        title: "Token & Queue Management",
        description: "Multi-screen visual token boards with priority overrides for urgent patients.",
        icon: "ListOrdered",
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
        question: "Can multiple doctors use Medsky CMS in a shared polyclinic setting?",
        answer: "Yes. Medsky CMS supports individual doctor schedules, custom consultation fees, private clinical notes, and multi-doctor revenue splitting with separate receptionist consoles.",
      },
      {
        id: "cms-f2",
        question: "Does Medsky CMS work on iPads, tablets, and mobile phones?",
        answer: "Yes, Medsky CMS is completely responsive and cloud-based. Doctors can examine patients and write prescriptions effortlessly using tablets or laptops.",
      },
      {
        id: "cms-f3",
        question: "Can digital prescriptions be sent to patients via WhatsApp and SMS?",
        answer: "Yes. With a single click, patients receive their encrypted PDF prescription, lifestyle advice, and follow-up appointment date on their WhatsApp and SMS.",
      },
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy & Medication POS (PMS)",
    shortName: "PMS",
    tagline: "Complete pharmacy point-of-sale, batch expiry monitoring, and stock reordering.",
    description:
      "Automated pharmacy management featuring barcode scanning, generic substitution suggestions, near-expiry alerts, and integrated retail billing.",
    iconName: "Pill",
    image: "/images/pharmacy.png",
    category: "Operations",
    badge: "Pharmacy POS",
    heroHighlights: [
      "Direct receipt of doctor digital prescriptions with dosage validation",
      "FIFO / FEFO automated batch dispensing to minimize expiry losses",
      "Integrated drug database with sound-alike/look-alike (LASA) safety alerts",
      "Multi-store inventory management (Main store, OPD, IPD satellite stores)",
    ],
    keyFeatures: [
      {
        title: "Smart Prescription Dispensing",
        description: "Incoming e-prescriptions appear immediately on dispensing queue; scan barcodes to ensure zero errors.",
        icon: "ScanLine",
      },
      {
        title: "Batch & Expiry Management",
        description: "Automated FEFO picking with 30/60/90-day expiry notifications and vendor returns.",
        icon: "Clock",
      },
      {
        title: "POS & GST Invoicing",
        description: "Fast retail billing with multiple tender modes (Cash, Card, UPI, Insurance credit).",
        icon: "CreditCard",
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
        question: "How does FEFO (First-Expiry-First-Out) batch management protect against expired drugs?",
        answer: "Medsky PMS automatically suggests and prioritizes medicine batches that are closest to expiration date during dispensing, alerting staff 30, 60, and 90 days before expiry to initiate vendor credit returns.",
      },
      {
        id: "pms-f2",
        question: "Can the pharmacy dispense against OPD prescriptions and IPD ward indents?",
        answer: "Yes, both retail walk-in OPD prescriptions and Inpatient ward doctor indents are handled seamlessly, with direct posting to the patient's active inpatient account.",
      },
      {
        id: "pms-f3",
        question: "Is GST and multi-tier tax invoicing built into the POS?",
        answer: "Yes, complete HSN codes, multi-tax GST slabs (0%, 5%, 12%, 18%), and automated B2B/B2C GST return exports are built natively into the billing engine.",
      },
    ],
  },
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
        icon: "Bell",
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
        question: "Can patients book appointments via WhatsApp?",
        answer: "Yes, Medsky includes an AI-enabled WhatsApp booking bot where patients select doctor specialties, choose time slots, and receive instant confirmation tokens.",
      },
      {
        id: "app-f2",
        question: "How does the waiting room Smart TV token display work?",
        answer: "Connect any Smart TV or Android stick via HDMI to open the Medsky Queue display URL. It shows live token numbers called by consulting doctors with audible chime notifications.",
      },
      {
        id: "app-f3",
        question: "Can doctors adjust slot durations or block leave dates?",
        answer: "Yes, doctors have a dedicated schedule manager to customize consultation slots (e.g. 10m vs 30m), emergency buffers, and vacation blockouts.",
      },
    ],
  },
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
    keyFeatures: [
      {
        title: "Specialty SOAP Templates",
        description: "Tailored clinical examination forms for internal medicine, pediatrics, and surgery.",
        icon: "FileSpreadsheet",
      },
      {
        title: "Rapid e-Prescribing",
        description: "Search by generic name, choose pre-configured dosage frequency (1-0-1), and add instructions.",
        icon: "PenTool",
      },
      {
        title: "Clinical Decision Support",
        description: "Real-time warnings for duplicate medication orders and documented allergies.",
        icon: "AlertOctagon",
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
        question: "Does the EMR support ICD-10 and SNOMED-CT clinical coding?",
        answer: "Yes, Medsky Doctor EMR includes full ICD-10 diagnostic search and SNOMED-CT terminology for international compliance and insurance processing.",
      },
      {
        id: "emr-f2",
        question: "Can doctors customize their own prescription favorites and templates?",
        answer: "Yes, doctors can create specialty drug sets (e.g. Hypertension Starter Kit, Post-Op Antibiotics) to write complete prescriptions in a single click.",
      },
      {
        id: "emr-f3",
        question: "How does the clinical decision support system alert for drug allergies?",
        answer: "When a doctor selects a medication, Medsky automatically checks the patient's recorded allergies, active prescriptions, and kidney/liver impairment warnings, flashing an immediate alert.",
      },
    ],
  },
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
    keyFeatures: [
      {
        title: "Triage Acuity Scoring",
        description: "Fast triage assessment categorizing urgency from resuscitation to non-urgent minor injuries.",
        icon: "ShieldAlert",
      },
      {
        title: "Bedside Point-of-Care Orders",
        description: "Immediate stat orders for ABG, ECG, troponin, and blood cross-match.",
        icon: "Zap",
      },
      {
        title: "Trauma Team Activation",
        description: "One-touch alert broadcasting to trauma surgeons and on-call anesthesiologists.",
        icon: "Radio",
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
    keyFeatures: [
      {
        title: "PACS Modality Worklist",
        description: "Direct synchronization with MRI, CT, and EEG modalities.",
        icon: "Monitor",
      },
      {
        title: "Web DICOM Viewer",
        description: "3D reconstructions, angle measurements, and multi-planar slice viewing.",
        icon: "Eye",
      },
      {
        title: "Critical Alerts",
        description: "Urgent notifications broadcasted to on-call clinicians.",
        icon: "BellRing",
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
    keyFeatures: [
      {
        title: "Multi-Tariff Master",
        description: "Custom tariff rates for cash patients, corporate panels, and insurance TPAs.",
        icon: "Tags",
      },
      {
        title: "TPA & Insurance Pre-Auth",
        description: "Track claim requests, approval letters, copayment ratios, and settlement cycles.",
        icon: "Building2",
      },
      {
        title: "Doctor Revenue Sharing",
        description: "Automate doctor consultation, surgery, and procedure commissions.",
        icon: "PieChart",
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
    keyFeatures: [
      {
        title: "Central Store Hierarchy",
        description: "Multi-tier warehouse hierarchy with stock transfer requests and consumption tracking.",
        icon: "Layers",
      },
      {
        title: "Automated Reorders",
        description: "Trigger Purchase Orders when stock dips below safe buffer levels.",
        icon: "FilePlus",
      },
      {
        title: "Biomedical Equipment & AMC",
        description: "Maintain service history, calibration cycles, and breakdown tickets.",
        icon: "Wrench",
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
    keyFeatures: [
      {
        title: "Executive Hospital Dashboard",
        description: "Summary of patient footfall, bed occupancy rate, and day-to-day revenue.",
        icon: "LayoutDashboard",
      },
      {
        title: "Financial Analytics",
        description: "Aging analysis of insurance claims, cash-to-credit ratios, and ARPOB.",
        icon: "DollarSign",
      },
      {
        title: "NABH / JCI Quality KPIs",
        description: "Average Length of Stay, bed turnover rate, and surgical safety audits.",
        icon: "Award",
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
];
