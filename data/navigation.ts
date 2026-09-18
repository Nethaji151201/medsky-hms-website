export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Modules",
    href: "/modules",
    children: [
      {
        label: "OPD Management",
        href: "/modules/opd",
        description: "Queue, doctor consultation & prescription management",
        icon: "UserCheck",
      },
      {
        label: "IPD & Wards",
        href: "/modules/ipd",
        description: "Admissions, bed allocations, nursing & discharge summary",
        icon: "Bed",
      },
      {
        label: "Emergency & Trauma",
        href: "/modules/emergency",
        description: "Fast-track triage, critical care & emergency vitals",
        icon: "Ambulance",
      },
      {
        label: "Pharmacy & POS",
        href: "/modules/pharmacy",
        description: "Drug dispensing, batch expiry tracking & automated reordering",
        icon: "Pill",
      },
      {
        label: "Laboratory (LIS)",
        href: "/modules/laboratory",
        description: "Diagnostic orders, sample barcode scan & pathology reports",
        icon: "FlaskConical",
      },
      {
        label: "Radiology & Imaging",
        href: "/modules/radiology",
        description: "PACS/DICOM workflow, scan reports & radiologist notes",
        icon: "Scan",
      },
      {
        label: "Billing & Insurance",
        href: "/modules/billing",
        description: "Split billing, TPA claims, invoices & payment gateways",
        icon: "Receipt",
      },
      {
        label: "Appointments & Queue",
        href: "/modules/appointments",
        description: "Multi-channel booking, token display & SMS reminders",
        icon: "Calendar",
      },
      {
        label: "Doctor EMR",
        href: "/modules/doctor",
        description: "Clinical notes, ICD-10 coding, vitals & e-prescriptions",
        icon: "Stethoscope",
      },
      {
        label: "Nursing Care",
        href: "/modules/nursing",
        description: "Medication administration (eMAR), vitals & shift handovers",
        icon: "Activity",
      },
      {
        label: "Inventory & Assets",
        href: "/modules/inventory",
        description: "Medical supplies, purchase orders & asset maintenance",
        icon: "Package",
      },
      {
        label: "Reports & Analytics",
        href: "/modules/reports",
        description: "Executive dashboards, financial MIS & clinical audits",
        icon: "BarChart3",
      },
    ],
  },
  { label: "Features", href: "/features" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_DEPARTMENTS = [
  { label: "OPD Management", href: "/modules/opd" },
  { label: "IPD & Inpatient Wards", href: "/modules/ipd" },
  { label: "Emergency & Trauma", href: "/modules/emergency" },
  { label: "Pharmacy & Inventory", href: "/modules/pharmacy" },
  { label: "Laboratory & Diagnostics", href: "/modules/laboratory" },
  { label: "Radiology & Imaging", href: "/modules/radiology" },
  { label: "Billing & Insurance", href: "/modules/billing" },
];

export const FOOTER_USEFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Modules", href: "/modules" },
  { label: "Platform Features", href: "/features" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Security & Compliance", href: "/security" },
  { label: "Request a Demo", href: "/demo" },
  { label: "Resources & Blog", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];
