export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle?: string;
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
        id: "hms-essential",
        name: "HMS Essential",
        subtitle: "Essential Hospital Operations",
        tagline: "Designed for hospitals and nursing homes managing up to 15 beds.",
        priceYearlyINR: 96000,
        equivalentMonthlyINR: 8000,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose HMS Essential →",
        ctaHref: "/demo?product=hms&plan=essential",
        features: [
          { text: "Up to 15 IPD Bed Management", included: true },
          { text: "Appointment Management", included: true },
          { text: "OPD Management", included: true },
          { text: "EMR & EHR", included: true },
          { text: "Discharge Summary", included: true },
          { text: "Billing & Payments", included: true },
          { text: "Essential Pharmacy Management", included: true },
          { text: "Essential Lab Billing & Reporting", included: true },
          { text: "Accounts, Reports & Dashboards", included: true },
        ],
      },
      {
        id: "hms-standard",
        name: "HMS Standard",
        subtitle: "Complete Hospital Automation",
        badge: "Most Popular",
        tagline: "Ideal for 15–50 bed general and multi-specialty hospitals.",
        priceYearlyINR: 125000,
        equivalentMonthlyINR: 10417,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Choose HMS Standard →",
        ctaHref: "/demo?product=hms&plan=standard",
        features: [
          { text: "Up to 50 IPD Bed Management", included: true },
          { text: "Appointment Management", included: true },
          { text: "OPD Management", included: true },
          { text: "EMR & EHR", included: true },
          { text: "Discharge Summary", included: true },
          { text: "Advanced Pharmacy Management", included: true },
          { text: "Advanced Lab Billing & Reporting", included: true },
          { text: "Nursing Management", included: true },
          { text: "Accounts & Reports", included: true },
          { text: "Insurance & TPA Management", included: true },
          { text: "SMS / WhatsApp Notification Support*", included: true },
        ],
      },
      {
        id: "hms-advanced",
        name: "HMS Enterprise",
        subtitle: "Enterprise Hospital Management",
        badge: "",
        tagline: "Built for multi-specialty hospitals, hospital groups, and growing healthcare networks.",
        priceYearlyINR: 175000,
        equivalentMonthlyINR: 14583,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose HMS Enterprise →",
        ctaHref: "/demo?product=hms&plan=gold",
        features: [
          { text: "Above 50 IPD Bed Management", included: true },
          { text: "Multi-Location / Branch Management", included: true },
          { text: "Operation Theatre Management", included: true },
          { text: "Day Care Management", included: true },
          { text: "Emergency Management", included: true },
          { text: "Nursing Management", included: true },
          { text: "Advanced Pharmacy & Inventory", included: true },
          { text: "Finance & Accounting Integration", included: true },
          { text: "Comprehensive Analytics & Dashboards", included: true },
          { text: "Insurance & TPA Management", included: true },
          { text: "API & Third-Party Integrations*", included: true },
          { text: "SMS / WhatsApp Notification Support*", included: true },
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
        name: "CMS Essential",
        subtitle: "Essential Clinic Management",
        tagline: "Designed for independent practitioners, single-doctor clinics, dental Clinics and pediatric OPDs.",
        priceYearlyINR: 30000,
        equivalentMonthlyINR: 2500,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Get CMS Essential →",
        ctaHref: "/demo?product=cms&plan=solo",
        features: [
          { text: "Patient Registration", included: true },
          { text: "Online Appointments", included: true },
          { text: "OPD Management", included: true },
          { text: "Doctor Schedule", included: true },
          { text: "Basic EMR & EHR", included: true },
          { text: "Billing & Accounts", included: true },
        ],
      },
      {
        id: "cms-polyclinic",
        name: "CMS Standard",
        subtitle: "Complete Clinic Management",
        badge: "Popular",
        tagline: "Ideal for multi-doctor OPDs, multi-specialty clinics, daycare centers, and diagnostic consultation centers.",
        priceYearlyINR: 50000,
        equivalentMonthlyINR: 4167,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Get CMS Standard →",
        ctaHref: "/demo?product=cms&plan=polyclinic",
        features: [
          { text: "Everything in Essential", included: true },
          { text: "Multi-Doctor Management", included: true },
          { text: "Queue Management", included: true },
          { text: "Pharmacy Integration", included: true },
          { text: "Follow-Up Management", included: true },
          { text: "Expense Management", included: true },
          { text: "SMS & WhatsApp Notifications", included: true },
        ],
      },
      {
        id: "cms-network",
        name: "CMS Enterprise",
        subtitle: "Enterprise Clinic Management",
        badge: "Enterprise",
        tagline: "Built for clinic groups, dental chains, and multi-location healthcare networks.",
        priceYearlyINR: 90000,
        equivalentMonthlyINR: 7500,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Get CMS Enterprise →",
        ctaHref: "/demo?product=cms&plan=network",
        features: [
          { text: "Everything in Standard", included: true },
          { text: "Multi-Branch Clinics", included: true },
          { text: "Lab & Diagnostic Integration", included: true },
          { text: "Bi Directional Lab Machine Integrations*", included: true },
          { text: "SMS & WhatsApp Reporting", included: true },
        ],
      },
    ],
  },
  {
    id: "lms",
    label: "LMS Pricing",
    shortTitle: "Laboratory Management Software (LIS)",
    description: "Streamline the complete laboratory workflow—from patient registration and test ordering to sample collection, analyzer integration, result validation, billing, and digital report delivery.",
    tiers: [
      {
        id: "lms-basic",
        name: "LMS Essential",
        subtitle: "Essential Laboratory Management",
        tagline: "Ideal for small diagnostic centers, pathology labs, and collection centers with manual or semi-automated workflows.",
        priceYearlyINR: 20000,
        equivalentMonthlyINR: 1667,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose LMS Essential →",
        ctaHref: "/demo?product=lms&plan=basic",
        features: [
          { text: "Patient Registration", included: true },
          { text: "Test Management", included: true },
          { text: "Sample Collection", included: true },
          { text: "Billing & Accounts", included: true },
          { text: "Result Entry", included: true },
          { text: "Report Generation", included: true },
        ],
      },
      {
        id: "lms-smart",
        name: "LMS Standard",
        subtitle: "Complete Laboratory Automation",
        badge: "Recommended",
        tagline: "Designed for high-volume pathology, hematology, biochemistry, and immunoassay laboratories.",
        priceYearlyINR: 30000,
        equivalentMonthlyINR: 2500,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Choose LMS Standard →",
        ctaHref: "/demo?product=lms&plan=smart",
        features: [
          { text: "Everything in Essential", included: true },
          { text: "Barcode Management", included: true },
          { text: "Outsource Management", included: true },
          { text: "Doctor Approval Portal", included: true },
          { text: "Advanced Reports", included: true },
          { text: "Multi-User Management", included: true },
        ],
      },
      {
        id: "lms-chain",
        name: "LMS Enterprise",
        subtitle: "Enterprise Laboratory Management",
        badge: "Enterprise",
        tagline: "Built for central laboratories, multi-branch diagnostic networks.",
        priceYearlyINR: 75000,
        equivalentMonthlyINR: 6250,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose LMS Enterprise →",
        ctaHref: "/demo?product=lms&plan=chain",
        features: [
          { text: "Everything in Standard", included: true },
          { text: "Multi-Branch Laboratory Management", included: true },
          { text: "Bi-Directional Analyzer Integration", included: true },
          { text: "Advanced LIS Workflows", included: true },
          { text: "API Integration", included: true },
        ],
      },
    ],
  },
  {
    id: "pms",
    label: "PMS Pricing",
    shortTitle: "Pharmacy Management Software",
    description: "Manage pharmacy sales, inventory, purchasing, stock, and billing from one platform.",
    tiers: [
      {
        id: "pms-retail",
        name: "PMS Essential",
        subtitle: "Essential Pharmacy Management",
        tagline: "Single retail medical store with high-speed POS billing and medicine barcode lookup.",
        priceYearlyINR: 15588,
        equivalentMonthlyINR: 1299,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose PMS Essential →",
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
        name: "PMS Standard",
        subtitle: "Complete Pharmacy Automation",
        badge: "Most Popular",
        tagline: "Integrated hospital pharmacy handling IPD ward indents, OT kits, and retail counters.",
        priceYearlyINR: 35988,
        equivalentMonthlyINR: 2999,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: true,
        ctaButtonType: "teal",
        ctaLabel: "Choose PMS Standard →",
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
        name: "PMS Enterprise",
        subtitle: "Enterprise Pharmacy Management",
        badge: "Enterprise",
        tagline: "Multi-outlet pharmacy chains, distribution hubs, and central warehouse management.",
        priceYearlyINR: 79988,
        equivalentMonthlyINR: 6665,
        billingPeriodNote: "Yearly Package (Billed Annually)",
        isPopular: false,
        ctaButtonType: "navy",
        ctaLabel: "Choose PMS Enterprise →",
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
