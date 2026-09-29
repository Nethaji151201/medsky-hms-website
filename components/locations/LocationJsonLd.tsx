import React from "react";
import { SITE_CONFIG } from "@/lib/metadata";

interface LocationJsonLdProps {
  locationType: "state" | "city";
  locationName: string;
  stateName: string;
  cityName?: string;
  urlPath: string;
  description: string;
}

export function LocationJsonLd({
  locationType,
  locationName,
  stateName,
  cityName,
  urlPath,
  description,
}: LocationJsonLdProps) {
  const baseUrl = SITE_CONFIG.url;
  const canonicalUrl = `${baseUrl}${urlPath}`;

  // 1. Breadcrumbs Schema
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: `${baseUrl}/locations`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: stateName,
      item: `${baseUrl}/locations/${urlPath.split("/")[2]}`,
    },
  ];

  if (cityName) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 4,
      name: cityName,
      item: `${baseUrl}/locations/${urlPath.split("/")[2]}/${urlPath.split("/")[3]}`,
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  // 2. Local/Medical Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${canonicalUrl}#localbusiness`,
    name: `Medsky HMS - Hospital & Clinic Management Software in ${locationName}`,
    alternateName: [
      `Medsky HMS ${locationName}`,
      `Hospital Software ${locationName}`,
      `Clinic Management System ${locationName}`,
      `Diagnostic Lab Software ${locationName}`,
    ],
    url: canonicalUrl,
    logo: `${baseUrl}/images/medsky-logo.png`,
    image: `${baseUrl}/images/medsky-og.jpg`,
    description: description,
    telephone: SITE_CONFIG.supportPhone,
    email: SITE_CONFIG.contactEmail,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: cityName || locationName,
      addressRegion: stateName,
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: locationName,
      },
    ],
    availableService: [
      {
        "@type": "MedicalSpecialty",
        name: "Hospital Management Information System (HMIS)",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Clinic Management Software (CMS)",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Laboratory Information System (LIS)",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Pharmacy Management Software (PMS)",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Doctor EMR & Digital Prescriptions",
      },
    ],
  };

  // 3. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the best Hospital & Clinic Management Software in ${locationName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Medsky HMS is one of the top-rated hospital and clinic software solutions in ${locationName}. It offers end-to-end automation for OPD, IPD, Laboratory LIS, Pharmacy POS, Doctor EMR, and ABDM Ayushman Bharat compliance.`,
        },
      },
      {
        "@type": "Question",
        name: `Is Medsky HMS compliant with ABDM (Ayushman Bharat) in ${locationName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Medsky HMS provides full ABDM Milestone 1, 2, and 3 certification, enabling instant ABHA number creation, health record linking, and gateway transactions for medical facilities in ${locationName}.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Medsky provide local on-site training and support in ${locationName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Medsky has dedicated implementation specialists and round-the-clock technical support for hospitals and clinics in ${locationName}, reachable at +91-91 59 59 53 53.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
