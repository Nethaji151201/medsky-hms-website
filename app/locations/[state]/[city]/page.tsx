import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA, getCityData, unslugify } from "@/data/locations";
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
  const params: { state: string; city: string }[] = [];

  for (const state of LOCATIONS_DATA) {
    for (const city of state.cities) {
      params.push({
        state: state.slug,
        city: city.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const decodedState = decodeURIComponent(stateSlug);
  const decodedCity = decodeURIComponent(citySlug);
  const result = getCityData(decodedState, decodedCity);

  const cityName = result ? result.city.name : unslugify(decodedCity);
  const stateName = result ? result.state.name : unslugify(decodedState);

  const title = `Best Hospital Management Software in ${cityName}, ${stateName} | Medsky HMS`;
  const description = `Top-rated Hospital Software (HMS), Clinic Management System (CMS), Diagnostic Lab Software (LIS), and Pharmacy POS in ${cityName}, ${stateName}. 100% ABDM M1/M2/M3 & NABH compliant with local on-site implementation and 24/7 technical support.`;

  return createMetadata({
    title,
    description,
    path: `/locations/${decodedState}/${decodedCity}`,
    keywords: [
      `Hospital Software in ${cityName}`,
      `Hospital Management System in ${cityName}`,
      `Clinic Software in ${cityName}`,
      `Diagnostic Lab Software in ${cityName}`,
      `Pharmacy Billing Software in ${cityName}`,
      `Doctor Prescription Software in ${cityName}`,
      `Best HMS Software in ${cityName}`,
      `Hospital ERP in ${cityName} ${stateName}`,
    ],
  });
}

export default async function CityLocationPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state: stateSlug, city: citySlug } = await params;
  const decodedState = decodeURIComponent(stateSlug);
  const decodedCity = decodeURIComponent(citySlug);
  const result =
    getCityData(decodedState, decodedCity) || {
      state: {
        name: unslugify(decodedState),
        slug: decodedState,
        capital: "Regional Hub",
        cities: [],
      },
      city: {
        name: unslugify(decodedCity),
        slug: decodedCity,
        stateName: unslugify(decodedState),
        stateSlug: decodedState,
        tagline: `Best Hospital & Clinic Management Software in ${unslugify(decodedCity)}`,
        description: `Medsky HMS is the preferred hospital management software for healthcare facilities, doctors, diagnostic labs, and medical stores in ${unslugify(decodedCity)}, ${unslugify(decodedState)}.`,
        hospitalCount: "45+",
        doctorCount: "300+",
        keyStats: [
          { label: "City Deployments", value: "45+" },
          { label: "Active Doctors", value: "300+" },
          { label: "ABDM Ready", value: "100%" },
          { label: "Support", value: "Local Desk" },
        ],
      },
    };

  const { state, city } = result;
  const headline = `Best Hospital Management Software in ${city.name}`;

  return (
    <>
      {/* 1. SEO Structured Data */}
      <LocationJsonLd
        locationType="city"
        locationName={`${city.name}, ${state.name}`}
        stateName={state.name}
        cityName={city.name}
        urlPath={`/locations/${state.slug}/${city.slug}`}
        description={
          city.description ||
          `Leading hospital management and clinic management software in ${city.name}, ${state.name}.`
        }
      />

      {/* 2. Hero Section */}
      <LocationHero
        locationType="city"
        title={headline}
        subtitle={city.tagline || `Premier Healthcare IT Platform in ${city.name}`}
        locationName={city.name}
        parentLocationName={state.name}
        stateName={state.name}
        cityName={city.name}
        description={
          city.description ||
          `Medsky HMS is the preferred hospital management software for healthcare facilities, doctors, diagnostic labs, and medical stores in ${city.name}, ${state.name}.`
        }
        hospitalCount={city.hospitalCount}
        doctorCount={city.doctorCount}
        keyStats={city.keyStats}
      />

      {/* 3. About Section */}
      <LocationAbout
        locationName={city.name}
        locationType="city"
        fullLocationString={`${city.name}, ${state.name}`}
      />

      {/* 4. Area / Locality Explorer & Sibling Cities */}
      <LocationHierarchyNav currentType="city" state={state} city={city} />

      {/* 5. Core 6 Products Catalog */}
      <LocationModulesGrid locationName={city.name} />

      {/* 6. Why Choose Medsky in this City */}
      <LocationWhyChooseUs locationName={city.name} />

      {/* 7. Flexible Pricing Plans (INR ₹) */}
      <PricingSection />

      {/* 8. Specialist Testimonials */}
      <TestimonialsSection />

      {/* 9. Localized FAQs */}
      <LocationFaqSection
        locationName={city.name}
        locationType="city"
        parentName={state.name}
      />

      {/* 10. Localized Appointment Booking Widget */}
      <LocationAppointmentWidget
        locationName={city.name}
        defaultState={state.name}
        defaultCity={city.name}
      />
    </>
  );
}
