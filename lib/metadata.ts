import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Medsky HMS",
  shortName: "Medsky",
  tagline: "Best Hospital Software, Clinic (CMS), Lab (LMS) & Pharmacy (PMS) Software",
  description:
    "Medsky HMS is India's leading all-in-one cloud Hospital Software, Clinic Management Software (CMS), Diagnostic Lab Information Software (LMS/LIS), and Pharmacy Management Software (PMS). ABDM & NABH compliant with OPD, IPD, EMR/EHR, analyzer interfacing, and online appointment booking.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://medskyhms.com",
  ogImage: "/images/medsky-og.jpg",
  supportPhone: "+91-91 59 59 53 53",
  inquiryPhone: "+91-741 888 44 18",
  contactEmail: "support@medskyhms.com",
  salesEmail: "sales@medskyhms.com",
  address: {
    street: "Old No 29, New No 16, 2nd Floor, Rangarajapuram Main Road, Director's Colony",
    city: "Kodambakkam, Chennai",
    state: "Tamil Nadu",
    postalCode: "600024",
    country: "India",
  },
  workingHours: "Mon - Fri 09:00 - 19:00, Sat 09:00 - 18:00, Emergency Support 24/7",
};

export const CORE_SEO_KEYWORDS = [
  // 1. Hospital Software & HMS
  "Hospital Software",
  "Hospital Management System",
  "Hospital Management Software",
  "HMS Software",
  "Best Hospital Software in India",
  "Cloud Hospital Software",
  "Hospital ERP Software",
  "Hospital Information System (HIS)",
  "OPD IPD Management Software",
  "Hospital Billing Software",
  "NABH Compliant Hospital Software",
  "ABDM M1 M2 M3 Compliant Software",

  // 2. Clinic Software & CMS
  "Clinic Software",
  "Clinic Management System",
  "Clinic Management Software",
  "CMS Software",
  "Doctor Practice Management Software",
  "Polyclinic Software",
  "Doctor Prescription Software",
  "OPD Clinic Management Software",
  "Dental Clinic Software",
  "Online Doctor Appointment Software",

  // 3. Lab Software & LMS / LIS
  "Lab Software",
  "Diagnostic Lab Software",
  "Laboratory Information System",
  "Laboratory Management Software",
  "LIS Software",
  "LMS Software",
  "Pathology Lab Software",
  "Bi-Directional Analyzer Interfacing Software",
  "Lab Barcode Sample Tracking Software",
  "NABL Compliant Lab Software",

  // 4. Pharmacy Software & PMS
  "Pharmacy Software",
  "Pharmacy Management System",
  "Pharmacy Management Software",
  "PMS Software",
  "Medical Store Billing Software",
  "Chemist Shop Software",
  "FEFO Batch Expiry Pharmacy Software",
  "Hospital Pharmacy POS Software",
  "Retail Medical Billing Software",

  // 5. Clinical & Records
  "Electronic Medical Records (EMR)",
  "Electronic Health Records (EHR)",
  "TPA Cashless Insurance Claim Software",
  "Digital Prescription Maker",
  "Medsky HMS",
  "Medsky Healthcare Software",
];

export function createMetadata({
  title,
  description,
  path = "",
  image,
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
} = {}): Metadata {
  const pageTitle = title
    ? `${title} | Medsky HMS - Hospital, Clinic, Lab & Pharmacy Software`
    : `${SITE_CONFIG.name} | Best Hospital Software, Clinic (CMS), Lab (LMS) & Pharmacy (PMS) Software`;
  const pageDescription = description || SITE_CONFIG.description;
  const pageUrl = `${SITE_CONFIG.url}${path}`;
  const pageImage = image || `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`;
  const mergedKeywords = Array.from(new Set([...CORE_SEO_KEYWORDS, ...keywords]));

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: pageTitle,
    description: pageDescription,
    icons: {
      icon: [
        { url: "/medsky_logo.png", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/medsky_logo.png",
      shortcut: "/medsky_logo.png",
    },
    keywords: mergedKeywords,
    authors: [{ name: "Medsky Healthcare Technologies", url: SITE_CONFIG.url }],
    creator: "Medsky Healthcare Technologies",
    publisher: "Medsky Healthcare Technologies",
    applicationName: "Medsky HMS",
    category: "Medical Software",
    classification: "Healthcare IT, Hospital Management, Clinic CMS, Lab LMS, Pharmacy PMS",
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Hospital, Clinic, Lab and Pharmacy Software`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: "@medskyhms",
      site: "@medskyhms",
    },
    alternates: {
      canonical: pageUrl,
    },
    other: {
      "rating": "General",
      "coverage": "Worldwide",
      "distribution": "Global",
      "target": "all",
      "format-detection": "telephone=no",
    },
  };
}
