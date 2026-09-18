export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tag: string;
  bulletPoints: string[];
}

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: "unified-management",
    title: "Unified Hospital Management",
    subtitle: "One Platform. Every Hospital Workflow.",
    description:
      "Manage clinical, administrative, diagnostic, and operational workflows from a single integrated cloud infrastructure.",
    icon: "Layers",
    tag: "Core Platform",
    bulletPoints: [
      "Eliminates disconnected data silos between departments",
      "Single patient ID (UHID) across all clinical and financial touchpoints",
      "Centralized hospital branch management for health networks",
    ],
  },
  {
    id: "faster-patient-flow",
    title: "Faster Patient Management",
    subtitle: "Drastically reduce wait times & manual friction",
    description:
      "From kiosk check-in and automated token queues to rapid electronic prescribing and fast-track discharge summaries.",
    icon: "Zap",
    tag: "Patient Flow",
    bulletPoints: [
      "Automated OPD token generation and waiting room TV calling",
      "Standardized clinical specialty templates for faster consultations",
      "Fast multi-department discharge clearance checklist",
    ],
  },
  {
    id: "connected-departments",
    title: "Connected Hospital Departments",
    subtitle: "Real-time communication across every care team",
    description:
      "Connect OPD, IPD, Pharmacy, Laboratory, Radiology, OT, and Billing with zero manual handoffs or paper transfers.",
    icon: "Network",
    tag: "Interoperability",
    bulletPoints: [
      "Doctor orders immediately broadcast to Pharmacy and Lab consoles",
      "Diagnostic results attach straight to patient EMR timeline",
      "Itemized service charges accumulate continuously on IPD billing ledger",
    ],
  },
  {
    id: "real-time-insights",
    title: "Real-Time Operational Insights",
    subtitle: "Make confident data-driven administrative decisions",
    description:
      "Gain total visibility into bed occupancy, doctor caseloads, pharmacy inventory turnover, and cash collections.",
    icon: "BarChart3",
    tag: "Analytics",
    bulletPoints: [
      "Live executive dashboards for hospital leadership",
      "Detailed revenue cycle and insurance TPA aging analysis",
      "Automated clinical quality and ALOS tracking metrics",
    ],
  },
  {
    id: "secure-architecture",
    title: "Enterprise Healthcare Data Security",
    subtitle: "Built with strict privacy, access control & audit trails",
    description:
      "Ensure patient health records and billing records are fortified with multi-factor authentication, granular RBAC, and encryption.",
    icon: "ShieldCheck",
    tag: "Security",
    bulletPoints: [
      "Granular role-based access control for doctors, nurses, and staff",
      "Complete immutable audit logs for all clinical and billing actions",
      "Encrypted data in transit and at rest with automated backup schedules",
    ],
  },
  {
    id: "scalable-infrastructure",
    title: "Cloud Scalability & High Availability",
    subtitle: "Grows seamlessly from single clinics to multi-specialty chains",
    description:
      "Engineered on cloud infrastructure with 99.9% uptime SLA, elastic auto-scaling, and multi-location support.",
    icon: "Cloud",
    tag: "Scalability",
    bulletPoints: [
      "Zero on-premise server maintenance overhead",
      "Support for multi-branch hospital chains with centralized masters",
      "Automatic software updates and new regulatory compliance rollouts",
    ],
  },
];

export const WORKFLOW_STAGES = [
  { step: "1", label: "Registration", desc: "Fast UHID creation & digital token" },
  { step: "2", label: "Appointment", desc: "Omnichannel booking & queue sync" },
  { step: "3", label: "Consultation", desc: "Clinical EMR & digital orders" },
  { step: "4", label: "Investigation", desc: "LIS & RIS barcode diagnostics" },
  { step: "5", label: "Pharmacy", desc: "Barcode dispensing & stock sync" },
  { step: "6", label: "Billing", desc: "Split insurance & cashless claims" },
  { step: "7", label: "Discharge", desc: "Inter-department clearance" },
  { step: "8", label: "Reports", desc: "Executive MIS & clinical audits" },
];

export const ROLES_DATA = [
  {
    role: "Doctors & Specialists",
    icon: "Stethoscope",
    description: "Access longitudinal patient histories, speed through clinical notes with specialty templates, and order diagnostics in seconds.",
    perk: "Specialty SOAP notes & 1-click e-prescriptions",
  },
  {
    role: "Nurses & Ward Staff",
    icon: "HeartHandshake",
    description: "Manage eMAR medication administration, monitor bed occupancy, record vitals, and execute shift handovers with zero paperwork.",
    perk: "Automated eMAR & patient vitals graphing",
  },
  {
    role: "Hospital Administrators",
    icon: "Briefcase",
    description: "Oversee hospital-wide throughput, track departmental revenue, allocate resources, and maintain statutory regulatory compliance.",
    perk: "Live executive dashboards & staff audit trails",
  },
  {
    role: "Reception & Queue Desk",
    icon: "Users",
    description: "Accelerate patient check-in, issue color-coded tokens, manage doctor schedules, and minimize waiting room congestion.",
    perk: "Rapid UHID search & multi-screen token caller",
  },
  {
    role: "Pharmacists",
    icon: "Pill",
    description: "Receive doctor prescriptions instantly, dispense with FEFO barcode verification, monitor near-expiry batches, and manage suppliers.",
    perk: "Automated FEFO dispensing & stockout alerts",
  },
  {
    role: "Laboratory Technicians",
    icon: "FlaskConical",
    description: "Track samples with barcode labels, interface bi-directionally with analyzers, and generate doctor-signed pathology reports.",
    perk: "Direct analyzer sync & critical value alerts",
  },
  {
    role: "Billing & Accounts",
    icon: "Receipt",
    description: "Eliminate billing leakage, process TPA cashless insurance pre-authorizations, calculate doctor payouts, and close shifts cleanly.",
    perk: "Multi-tariff masters & cashless TPA tracking",
  },
  {
    role: "Executive Management",
    icon: "Award",
    description: "Evaluate hospital profitability, average revenue per occupied bed (ARPOB), clinical quality KPIs, and multi-branch performance.",
    perk: "Consolidated financial & clinical MIS",
  },
];
