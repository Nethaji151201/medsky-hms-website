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
      "End-to-end multi-department inpatient governance, real-time bed census, OT management, nursing eMAR charts, and discharge clearance.",
    iconName: "Bed",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    badge: "Enterprise",
  },
  {
    id: "lms",
    name: "LMS",
    slug: "laboratory",
    tagline: "Laboratory Management Software",
    description:
      "Diagnostic test workflows, sample barcode scanning, bi-directional analyzer interfacing, pathologist sign-off, and automated reports.",
    iconName: "FlaskConical",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80",
    badge: "Diagnostics",
  },
  {
    id: "cms",
    name: "CMS",
    slug: "opd",
    tagline: "Clinic Management Software",
    description:
      "Streamlined outpatient registration, intelligent token queues, quick doctor consultations, digital prescriptions, and daycare clinic billing.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    badge: "Polyclinic",
  },
  {
    id: "pharmacy",
    name: "PMS",
    slug: "pharmacy",
    tagline: "Pharmacy Management Software",
    description:
      "Retail and inpatient point-of-sale dispensing, FEFO batch expiry monitoring, supplier purchase orders, and zero-error prescription synchronization.",
    iconName: "Pill",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    badge: "Pharmacy POS",
  },
  {
    id: "appointments",
    name: "Appointments",
    slug: "appointments",
    tagline: "Appointments & Smart Queue",
    description:
      "Omnichannel doctor booking via WhatsApp, web, and kiosk with real-time doctor rosters, automated SMS reminders, and waiting room TV screens.",
    iconName: "Calendar",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
    badge: "Patient Experience",
  },
  {
    id: "emr-ehr",
    name: "EMR / EHR",
    slug: "doctor",
    tagline: "Electronic Medical & Health Records",
    description:
      "Specialty-specific SOAP templates, rapid e-prescribing, longitudinal patient health timelines, and real-time drug allergy decision support.",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
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
  },
  {
    slug: "laboratory",
    name: "Laboratory Management Software (LMS)",
    shortName: "LMS",
    tagline: "Diagnostic test workflows, sample barcoding, analyzer interfacing, and verified reports.",
    description:
      "End-to-end diagnostic and pathology laboratory Software with bi-directional analyzer interfacing, sample tracking, and automated digital sign-offs.",
    iconName: "FlaskConical",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80",
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
  },
  {
    slug: "opd",
    name: "Clinic Management Software (CMS)",
    shortName: "CMS",
    tagline: "Outpatient registration, queue management, doctor consultations, and polyclinic billing.",
    description:
      "Purpose-built for outpatient clinics and polyclinics to manage rapid patient check-ins, automated token queues, consultations, and day-care billing.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
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
  },
  {
    slug: "pharmacy",
    name: "Pharmacy & Medication POS",
    shortName: "Pharmacy",
    tagline: "Complete pharmacy point-of-sale, batch expiry monitoring, and stock reordering.",
    description:
      "Automated pharmacy management featuring barcode scanning, generic substitution suggestions, near-expiry alerts, and integrated retail billing.",
    iconName: "Pill",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    category: "Operations",
    badge: "Retail & Inpatient",
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
  },
  {
    slug: "appointments",
    name: "Appointments & Queue Management",
    shortName: "Appointments",
    tagline: "Omnichannel appointment booking, doctor roster scheduling, and smart queue displays.",
    description:
      "Omnichannel appointment scheduling via web, mobile, and WhatsApp with real-time doctor rosters, automated reminders, and live TV queue screens.",
    iconName: "Calendar",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
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
  },
  {
    slug: "doctor",
    name: "Doctor Clinical EMR & EHR Suite",
    shortName: "EMR / EHR",
    tagline: "Specialty clinical SOAP notes, longitudinal records, e-prescriptions, and decision support.",
    description:
      "Specialty-specific SOAP templates, rapid e-prescribing, longitudinal patient health timelines, and real-time drug allergy decision support.",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
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
  },
  {
    slug: "radiology",
    name: "Radiology & PACS Imaging",
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
    badge: "Rehabilitation",
    heroHighlights: [
      "Physical therapy milestone tracking and exercise compliance logs",
      "Multi-disciplinary care plan collaboration between nurses and therapists",
      "Pain score assessments and longitudinal mobility index charting",
      "Consolidated discharge recovery guidelines for home wellness",
    ],
    keyFeatures: [
      {
        title: "Rehab Care Plan",
        description: "Structured physio schedules, mobility goals, and functional independence measures.",
        icon: "HeartPulse",
      },
      {
        title: "Vitals & Pain Charting",
        description: "Graphical tracking of vitals, pain scale responses, and therapy progress.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Nurse & Therapist Handover",
        description: "Digital handover sheet eliminating communication gaps during rehabilitation.",
        icon: "Users",
      },
    ],
    workflowSteps: [
      { stepNumber: "01", title: "Care Plan Setup", detail: "Therapist defines recovery milestones and exercise regimen." },
      { stepNumber: "02", title: "Daily Session Log", detail: "Log therapy duration, range of motion, and patient endurance." },
      { stepNumber: "03", title: "Outcome Evaluation", detail: "Generate progress chart for consulting orthopedic doctor." },
    ],
    metrics: [
      { value: "100%", label: "Therapy Compliance" },
      { value: "45 Min", label: "Saved per Shift on Notes" },
      { value: "Zero Gap", label: "Multi-Disciplinary Care" },
    ],
    relatedModules: ["opd", "ipd", "doctor", "billing"],
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
  },
];
