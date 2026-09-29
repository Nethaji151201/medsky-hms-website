import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA, getStateData, unslugify } from "@/data/locations";
import { createMetadata } from "@/lib/metadata";
import { LocationHero } from "@/components/locations/LocationHero";
import { LocationAbout } from "@/components/locations/LocationAbout";
import { LocationHierarchyNav } from "@/components/locations/LocationHierarchyNav";
import { LocationModulesGrid } from "@/components/locations/LocationModulesGrid";
import { LocationWhyChooseUs } from "@/components/locations/LocationWhyChooseUs";
import { LocationFaqSection } from "@/components/locations/LocationFaqSection";
import { LocationJsonLd } from "@/components/locations/LocationJsonLd";
import { LocationAppointmentWidget } from "@/components/locations/LocationAppointmentWidget";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export const dynamicParams = true;

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const decodedStateSlug = decodeURIComponent(stateSlug);
  const stateData = getStateData(decodedStateSlug);
  const stateName = stateData ? stateData.name : unslugify(decodedStateSlug);

  const title = `Best Hospital Management Software in ${stateName} | Medsky HMS`;
  const description = `Looking for the best Hospital Software, Clinic Management (CMS), Lab Information System (LIS), and Pharmacy Software in ${stateName}? Medsky HMS offers 100% ABDM & NABH compliant healthcare software with local on-site support across ${stateName}.`;

  return createMetadata({
    title,
    description,
    path: `/locations/${decodedStateSlug}`,
    keywords: [
      `Hospital Software in ${stateName}`,
      `Hospital Management System ${stateName}`,
      `Clinic Software ${stateName}`,
      `Diagnostic Lab Software ${stateName}`,
      `Pharmacy POS Software ${stateName}`,
      `Best HMS Software in ${stateName}`,
      `ABDM Hospital Software ${stateName}`,
      `Doctor EMR Software ${stateName}`,
    ],
  });
}

export default async function StateLocationPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const decodedStateSlug = decodeURIComponent(stateSlug);
  const stateData =
    getStateData(decodedStateSlug) || {
      name: unslugify(decodedStateSlug),
      slug: decodedStateSlug,
      capital: "Regional Hub",
      tagline: `Enterprise Healthcare IT across ${unslugify(decodedStateSlug)}`,
      description: `Empowering hospitals, polyclinics, diagnostic pathology laboratories, and pharmacies in ${unslugify(decodedStateSlug)} with ABDM & NABH-compliant Medsky HMS.`,
      hospitalCount: "75+",
      doctorCount: "500+",
      keyStats: [
        { label: "Regional Deployments", value: "75+" },
        { label: "Active Doctors", value: "500+" },
        { label: "ABDM Ready", value: "100%" },
        { label: "Support", value: "24/7 Hotline" },
      ],
      cities: [],
    };

  const headline = `Best Hospital Management Software in ${stateData.name}`;

  return (
    <>
      {/* 1. SEO Structured Data */}
      <LocationJsonLd
        locationType="state"
        locationName={stateData.name}
        stateName={stateData.name}
        urlPath={`/locations/${stateData.slug}`}
        description={stateData.description || `Leading cloud hospital management software across ${stateData.name}.`}
      />

      {/* 2. Hero Section */}
      <LocationHero
        locationType="state"
        title={headline}
        subtitle={stateData.tagline || `Enterprise Healthcare IT across ${stateData.name}`}
        locationName={stateData.name}
        stateName={stateData.name}
        description={
          stateData.description ||
          `Empowering hospitals, polyclinics, diagnostic labs, and medical stores across ${stateData.name} with all-in-one cloud automation.`
        }
        hospitalCount={stateData.hospitalCount}
        doctorCount={stateData.doctorCount}
        keyStats={stateData.keyStats}
      />

      {/* 3. About Section (Home Page Aesthetic) */}
      <LocationAbout
        locationName={stateData.name}
        locationType="state"
        fullLocationString={stateData.name}
      />

      {/* 4. Cities Explorer in this State */}
      <LocationHierarchyNav currentType="state" state={stateData} />

      {/* 5. Core 6 Products Catalog */}
      <LocationModulesGrid locationName={stateData.name} />

      {/* 6. Why Choose Medsky in this State */}
      <LocationWhyChooseUs locationName={stateData.name} />

      {/* 7. Flexible Pricing Plans (INR ₹) */}
      <PricingSection />

      {/* 8. Specialist Testimonials (60fps Marquee) */}
      <TestimonialsSection />

      {/* 9. Localized FAQs */}
      <LocationFaqSection locationName={stateData.name} locationType="state" />

      {/* 10. Localized Appointment Booking Widget */}
      <LocationAppointmentWidget
        locationName={stateData.name}
        defaultState={stateData.name}
        defaultCity={stateData.capital || "Chennai"}
      />
    </>
  );
}
