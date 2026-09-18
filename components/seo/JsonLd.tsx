import React from "react";
import { SITE_CONFIG } from "@/lib/metadata";

export function JsonLd() {
  const baseUrl = SITE_CONFIG.url;

  // 1. Organization & MedicalBusiness Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "Medsky HMS - Healthcare Software Technologies",
    alternateName: ["Medsky HMS", "Medsky Hospital Software", "Medsky CMS", "Medsky LMS", "Medsky PMS"],
    url: baseUrl,
    logo: `${baseUrl}/images/medsky-logo.png`,
    image: `${baseUrl}/images/medsky-og.jpg`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.supportPhone,
    email: SITE_CONFIG.contactEmail,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: "Kodambakkam, Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0524,
      longitude: 80.2209,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.supportPhone,
        contactType: "customer service",
        areaServed: ["IN", "AE", "SA", "OM", "QA", "KW", "BH", "US", "GB"],
        availableLanguage: ["English", "Hindi", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.inquiryPhone,
        contactType: "sales",
        areaServed: ["IN", "AE", "SA", "OM", "QA", "KW", "BH", "US", "GB"],
        availableLanguage: ["English", "Hindi", "Tamil"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/medskyhms",
      "https://twitter.com/medskyhms",
      "https://www.facebook.com/medskyhms",
      "https://www.youtube.com/@medskyhms",
    ],
  };

  // 2. WebSite Schema with Sitelinks Search Box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Medsky HMS Healthcare Software",
    description: "Cloud-Based Hospital Software, Clinic Management, Diagnostic Lab, and Pharmacy System",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/modules?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  // 3. Multi-Product SoftwareApplication Schemas
  const softwareApplications = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Medsky HMS - Hospital Management System Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web Browser, iOS, Android, Windows",
      description:
        "Comprehensive Hospital Software for OPD/IPD bed census, OT scheduling, Ward Nursing, Doctor EMR, Emergency triage, TPA insurance claims, and NABH/ABDM compliance.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "28788",
        highPrice: "179988",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "520",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "IPD Bed Management & Census",
        "OPD Queue & Token Display",
        "Doctor EMR & Digital Prescriptions",
        "Discharge Summary & Medical History",
        "LIS Bi-Directional Analyzer Interfacing",
        "TPA Cashless Pre-Auth & Claims Engine",
        "NABH & ABDM M1/M2/M3 Compliance",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Medsky CMS - Clinic Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web Browser, iOS, Android",
      description:
        "Specialized Clinic Software for single consultants, polyclinics, and specialty daycare centers. Includes online appointments, digital prescription generator, patient queue management, and WhatsApp reminders.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "17988",
        highPrice: "71988",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "410",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Doctor Consultation Calendar",
        "Digital Rx Prescription Generator",
        "WhatsApp & SMS Patient Alerts",
        "Reception Token Queue Board",
        "Specialty SOAP Clinical Notes",
        "Doctor Revenue Split Matrix",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Medsky LMS / LIS - Diagnostic Lab Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web Browser, Windows, Linux",
      description:
        "Advanced Laboratory Information System (LIS/LMS) for pathology and diagnostic centers. Features bi-directional analyzer interfacing (RS232/TCP), barcode sample tube tracking, delta checks, and instant WhatsApp QR report delivery.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "21588",
        highPrice: "95988",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.95",
        reviewCount: "380",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Bi-Directional Analyzer Interfacing",
        "Barcode Sample Tracking & Phlebotomy",
        "Patient QR Verified Lab Reports",
        "Automated WhatsApp & Email Delivery",
        "NABL Compliance & Delta Checks",
        "Doctor Referral Commission Engine",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Medsky PMS - Pharmacy Management System Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web Browser, Windows, POS Terminals",
      description:
        "High-speed Retail & Hospital Pharmacy Management Software with 300,000+ medicine master catalog, FEFO batch expiry alerts, GST GSTR-1 billing, ward indents, and supplier purchase orders.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "15588",
        highPrice: "79988",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "295",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "High-Speed Retail POS Billing Counter",
        "300,000+ Pre-loaded Medicine Database",
        "FEFO (First-Expiry-First-Out) Auto Dispense",
        "Hospital IPD Ward Indents & Returns",
        "Schedule H & H1 Drug Sales Register",
        "Automated GST Invoicing & Reorder Rules",
      ],
    },
  ];

  // 4. FAQPage Schema for Google Rich SERP Accordions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best Hospital Software (HMS) in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medsky HMS is recognized as one of the best cloud-based Hospital Software solutions in India. It offers comprehensive end-to-end automation for OPD, IPD, Emergency, Ward Nursing, OT Scheduling, Laboratory (LIS), Pharmacy (PMS), TPA Cashless Billing, and ABDM/NABH compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What features are included in Medsky Clinic Management Software (CMS)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medsky CMS includes doctor appointment scheduling, reception queue token management, digital prescription writing with pre-saved templates, patient medical history (EMR), WhatsApp/SMS reminders, in-clinic billing, and multi-doctor revenue share calculations.",
        },
      },
      {
        "@type": "Question",
        name: "Does Medsky Lab Software (LMS / LIS) support bi-directional analyzer interfacing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Medsky LMS / LIS provides seamless bi-directional interfacing with hematology, biochemistry, and immunoassay machines via RS232 and TCP/IP protocols, enabling direct test order transmission and automatic result capture with barcode tube scanning.",
        },
      },
      {
        "@type": "Question",
        name: "How does Medsky Pharmacy Software (PMS) prevent expiry losses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medsky PMS uses automated FEFO (First-Expiry-First-Out) inventory algorithms that recommend near-expiry batches first during dispensing. It also provides proactive expiry notifications 30/60/90 days in advance and handles supplier credit returns seamlessly.",
        },
      },
      {
        "@type": "Question",
        name: "Is Medsky HMS compliant with ABDM (Ayushman Bharat Digital Mission) and NABH?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Medsky HMS is fully compliant with ABDM Milestone 1, 2, and 3 (ABHA creation, health record linking, and HIP/HIU gateway integration) and provides NABH-compliant audit logs, clinical documentation standards, and data security encryption.",
        },
      },
      {
        "@type": "Question",
        name: "Can Medsky software be accessed on mobile phones and tablets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Medsky HMS, CMS, LMS, and PMS are built with responsive cloud-first technology accessible on any web browser, iPad, Android tablet, or smartphone without installing heavy on-premise servers.",
        },
      },
    ],
  };

  return (
    <>
      {/* Organization Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* WebSite SearchAction Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Software Applications */}
      {softwareApplications.map((app, index) => (
        <script
          key={`software-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
        />
      ))}
      {/* Rich FAQ Page Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
