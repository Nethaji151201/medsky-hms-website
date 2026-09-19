export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  priceYearlyINR: number;
  equivalentMonthlyINR?: number;
  billingPeriodNote: string;
  isPopular?: boolean;
  ctaButtonType: "navy" | "teal";
  ctaLabel: string;
  ctaHref: string;
  features: PricingFeature[];
}

export type PricingCategoryKey = "hms" | "cms" | "lms" | "pms";

export interface PricingCategory {
  id: PricingCategoryKey;
  label: string;
  shortTitle: string;
  description: string;
  tiers: PricingTier[];
}

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "hms",
    label: "HMS Pricing",
    shortTitle: "Hospital Management Software",
    description: "End-to-end hospital operations from OPD/IPD, OT, Ward Nursing, Pharmacy, Billing, to TPA Insurance.",
    tiers: [
      {
        id: "hms-starter",
        name: "HMS Starter",
        tagline: "Essential operations for nursing homes and 25-bed multi-specialty hospitals.",
        priceYearlyINR: 28788,
        equivalentMonthlyINR: 2399,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose HMS Starter →",
        ctaHref: "/demo?product=hms&plan=starter",
        features: [
          { text: "Up to 25 IPD Bed Management", included: true },
          { text: "OPD Queue & Token Display System", included: true },
          { text: "Doctor EMR & Digital Prescriptions", included: true },
          { text: "Discharge Summary & Medical History", included: true },
          { text: "Basic Pharmacy & In-house Billing", included: true },
          { text: "SMS & WhatsApp Patient Reminders", included: true },
          { text: "LIS Bi-Directional Analyzer Sync", included: false },
          { text: "TPA Cashless Pre-Auth & Claims", included: false },
          { text: "Multi-Branch Centralized Database", included: false },
        ],
      },
      {
        id: "hms-advanced",
        name: "HMS Advanced",
        badge: "Most Popular",
        tagline: "Comprehensive hospital automation for 25–100 bed surgical and general hospitals.",
        priceYearlyINR: 77988,
        equivalentMonthlyINR: 6499,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Choose HMS Advanced →",
        ctaHref: "/demo?product=hms&plan=advanced",
        features: [
          { text: "Up to 100 IPD Bed Census & Ward Nursing", included: true },
          { text: "Nursing Station eMAR & Vitals Flowsheet", included: true },
          { text: "OT Scheduling & Pacs Integration", included: true },
          { text: "Emergency & STAT Orders Workflow", included: true },
          { text: "LIS Bi-Directional Analyzer Interfacing", included: true },
          { text: "TPA Cashless Insurance Claims Engine", included: true },
          { text: "Doctor Commission & Revenue Split Matrix", included: true },
          { text: "Custom Hospital Letterhead & Invoicing", included: true },
          { text: "Multi-Branch Centralized Database", included: false },
        ],
      },
      {
        id: "hms-enterprise",
        name: "HMS Gold Enterprise",
        badge: "Enterprise",
        tagline: "Uncapped multi-specialty networks, hospital chains, and tertiary care institutions.",
        priceYearlyINR: 179988,
        equivalentMonthlyINR: 14999,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose HMS Gold →",
        ctaHref: "/demo?product=hms&plan=gold",
        features: [
          { text: "Unlimited Beds & Multi-Branch Network", included: true },
          { text: "Centralized Patient Health Record (EHR)", included: true },
          { text: "Radiology DICOM / PACS Worklist Sync", included: true },
          { text: "Biomedical Asset & Maintenance (AMC)", included: true },
          { text: "Advanced NABH Compliance & Audit Logs", included: true },
          { text: "Custom FHIR / HL7 API Enterprise Sync", included: true },
          { text: "Dedicated Cloud Instance & 99.99% SLA", included: true },
          { text: "24/7 Dedicated Priority Support Team", included: true },
        ],
      },
    ],
  },
  {
    id: "cms",
    label: "CMS Pricing",
    shortTitle: "Clinic Management Software",
    description: "Streamlined single and polyclinic workflow, appointment booking, patient queue, and digital clinical notes.",
    tiers: [
      {
        id: "cms-solo",
        name: "Solo Clinic",
        tagline: "Designed for independent practitioners, single consultants, and dental/pediatric OPDs.",
        priceYearlyINR: 17988,
        equivalentMonthlyINR: 1499,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Get Solo Clinic →",
        ctaHref: "/demo?product=cms&plan=solo",
        features: [
          { text: "1 Doctor Login & Assistant Account", included: true },
          { text: "Online Appointment Booking Calendar", included: true },
          { text: "Digital Prescription & RX Templates", included: true },
          { text: "Patient SMS / WhatsApp Notifications", included: true },
          { text: "Basic Consultation Invoicing & UPI", included: true },
          { text: "Multi-Doctor Roster & Scheduling", included: false },
          { text: "Pharmacy Drug Inventory & Dispensing", included: false },
        ],
      },
      {
        id: "cms-polyclinic",
        name: "Polyclinic Pro",
        badge: "Popular",
        tagline: "Multi-doctor OPD clinics, specialty daycare centers, and diagnostic OPD complexes.",
        priceYearlyINR: 35988,
        equivalentMonthlyINR: 2999,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Get Polyclinic Pro →",
        ctaHref: "/demo?product=cms&plan=polyclinic",
        features: [
          { text: "Up to 8 Doctors & Multi-Room OPD", included: true },
          { text: "Reception Queue Token Display Board", included: true },
          { text: "Specialty Clinical Notes (SOAP)", included: true },
          { text: "Doctor Revenue Share & Fee Settlement", included: true },
          { text: "Minor Procedure & Treatment Billing", included: true },
          { text: "In-Clinic Pharmacy Dispensing POS", included: true },
          { text: "Diagnostic Referral Slip Integration", included: true },
        ],
      },
      {
        id: "cms-network",
        name: "Clinic Chain",
        tagline: "Franchise clinics, dental chains, and multi-location wellness facilities.",
        priceYearlyINR: 71988,
        equivalentMonthlyINR: 5999,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Get Clinic Chain →",
        ctaHref: "/demo?product=cms&plan=network",
        features: [
          { text: "Unlimited Doctors Across Multi-Locations", included: true },
          { text: "Unified Patient Medical Record Across Branches", included: true },
          { text: "Centralized Billing & Consolidated Reports", included: true },
          { text: "Brand Custom SMS Sender ID & White Label", included: true },
          { text: "Teleconsultation & Video OPD Portal", included: true },
          { text: "Dedicated Cloud Server & Backup Vault", included: true },
          { text: "Priority Support & Regular Data Sync", included: true },
        ],
      },
    ],
  },
  {
    id: "lms",
    label: "LMS Pricing",
    shortTitle: "Laboratory Management Software (LIS)",
    description: "Automated laboratory workflow from sample collection, barcode scanning, bi-directional analyzer interfacing to QR verified reports.",
    tiers: [
      {
        id: "lms-basic",
        name: "Lab Basic",
        tagline: "Ideal for small diagnostic centers and collection centers with manual test entry.",
        priceYearlyINR: 21588,
        equivalentMonthlyINR: 1799,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose Lab Basic →",
        ctaHref: "/demo?product=lms&plan=basic",
        features: [
          { text: "Up to 500 Test Reports / Month", included: true },
          { text: "Custom Letterhead & Digital Signatures", included: true },
          { text: "Patient QR Code Report Verification", included: true },
          { text: "Automated WhatsApp & Email Delivery", included: true },
          { text: "Basic Financial & Daily Collection Report", included: true },
          { text: "Bi-Directional Machine Interfacing: No", included: false },
          { text: "B2B Franchise & Referral Portals: No", included: false },
        ],
      },
      {
        id: "lms-smart",
        name: "Smart Lab Pro",
        badge: "Recommended",
        tagline: "Full bidirectional interfacing for high-throughput hematology, biochemistry, and immunoassay labs.",
        priceYearlyINR: 47988,
        equivalentMonthlyINR: 3999,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Choose Smart Lab →",
        ctaHref: "/demo?product=lms&plan=smart",
        features: [
          { text: "Unlimited Test Reports & Patients", included: true },
          { text: "Bi-Directional Analyzer Interfacing (RS232/TCP)", included: true },
          { text: "Barcode Sample Tube Generation & Tracking", included: true },
          { text: "Critical Value Alert Triggers (SMS/Call)", included: true },
          { text: "Doctor & Clinic Referral Commission Engine", included: true },
          { text: "Internal Quality Control (IQC) Levey-Jennings", included: true },
          { text: "Multi-Location Phlebotomy Route Manager", included: true },
        ],
      },
      {
        id: "lms-chain",
        name: "Diagnostic Chain",
        tagline: "Central hub & spoke model with multiple collection centers and regional processing labs.",
        priceYearlyINR: 95988,
        equivalentMonthlyINR: 7999,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose LMS Chain →",
        ctaHref: "/demo?product=lms&plan=chain",
        features: [
          { text: "Central Processing Lab + Hub-and-Spoke Spoke Centers", included: true },
          { text: "B2B Client & Franchise Booking Portal", included: true },
          { text: "Full NABL Compliance & Delta Check Triggers", included: true },
          { text: "Consolidated Billing & Batch Invoicing", included: true },
          { text: "Custom API Interfacing with Third-Party HMS", included: true },
          { text: "Dedicated Server with Enterprise Security", included: true },
          { text: "24/7 Priority Hotline & On-site Onboarding", included: true },
        ],
      },
    ],
  },
  {
    id: "pms",
    label: "PMS Pricing",
    shortTitle: "Pharmacy Management Software",
    description: "High-speed retail POS, hospital pharmacy, FEFO batch expiry control, and automated GST billing.",
    tiers: [
      {
        id: "pms-retail",
        name: "Retail Pharmacy",
        tagline: "Single retail medical store with high-speed POS billing and medicine barcode lookup.",
        priceYearlyINR: 15588,
        equivalentMonthlyINR: 1299,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose Retail PMS →",
        ctaHref: "/demo?product=pms&plan=retail",
        features: [
          { text: "1 POS Billing Counter & Unlimited SKUs", included: true },
          { text: "300,000+ Pre-loaded Medicine Master Catalog", included: true },
          { text: "FEFO (First-Expiry-First-Out) Auto Dispense", included: true },
          { text: "Near-Expiry & Low-Stock Alerts", included: true },
          { text: "GST GSTR-1 & GSTR-3B Sales Invoicing", included: true },
          { text: "Hospital IPD Indent & Ward Returns: No", included: false },
          { text: "Central Warehouse Stock Transfer: No", included: false },
        ],
      },
      {
        id: "pms-hospital",
        name: "Hospital Pharmacy",
        badge: "Most Popular",
        tagline: "Integrated hospital pharmacy handling IPD ward indents, OT kits, and retail counters.",
        priceYearlyINR: 35988,
        equivalentMonthlyINR: 2999,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Choose Hospital PMS →",
        ctaHref: "/demo?product=pms&plan=hospital",
        features: [
          { text: "Multi-Counter POS & Inpatient Indent Sync", included: true },
          { text: "Automated Ward Nursing Medication Dispense", included: true },
          { text: "Schedule H & H1 Drug Sales Register", included: true },
          { text: "Supplier Purchase Order & GRN with Barcodes", included: true },
          { text: "Unused Ward Medication Return Credit Notes", included: true },
          { text: "Doctor E-Prescription Instant Load & Fill", included: true },
          { text: "Direct Split Billing (Cash / TPA / Hospital Credit)", included: true },
        ],
      },
      {
        id: "pms-chain",
        name: "Pharmacy Chain",
        tagline: "Multi-outlet pharmacy chains, distribution hubs, and central warehouse management.",
        priceYearlyINR: 79988,
        equivalentMonthlyINR: 6665,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose PMS Chain →",
        ctaHref: "/demo?product=pms&plan=chain",
        features: [
          { text: "Central Warehouse (C&F) + Unlimited Outlets", included: true },
          { text: "Inter-Store Stock Transfer & Reorder Rules", included: true },
          { text: "Centralized Supplier Rate Contracts & Discounts", included: true },
          { text: "Real-time Multi-Branch Sales & Margin Analytics", included: true },
          { text: "Customer Loyalty Points & WhatsApp Bills", included: true },
          { text: "Cloud Hosted with Redundant Database Mirroring", included: true },
          { text: "Dedicated Account Specialist & Priority SLAs", included: true },
        ],
      },
    ],
  },
];

// Fallback legacy tier array for compatibility
export const PRICING_TIERS = PRICING_CATEGORIES[0].tiers;
