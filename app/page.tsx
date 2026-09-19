import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ExpertsMarqueeSection } from "@/components/home/ExpertsMarqueeSection";
import { AppointmentBookingWidget } from "@/components/forms/AppointmentBookingWidget";
import { ValueProps } from "@/components/home/ValueProps";
import { ModulesGrid } from "@/components/home/ModulesGrid";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { RoleSection } from "@/components/home/RoleSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { AnalyticsSection } from "@/components/home/AnalyticsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Us Section */}
      <AboutSection />

      {/* 3. 6 Core Products Catalog (HMS, LMS, CMS, Pharmacy, Appointments, EMR/EHR) */}
      <ModulesGrid />

      {/* 4. Feature Deep Dives (OPD, IPD, Pharmacy, LIS, Billing) */}
      {/* <FeatureShowcase /> */}

      {/* 5. Role-Based Feature Experience */}
      {/* <RoleSection /> */}

      {/* 6. Flexible Pricing Plans (INR ₹) */}
      <PricingSection />

      {/* 7. Specialist Testimonials (2-Row 60fps Marquee with Edge Shading) */}
      <TestimonialsSection />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Appointment Booking Widget (Positioned Directly Above Footer) */}
      <AppointmentBookingWidget />
    </>
  );
}
