import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Building2, ChevronRight, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { LOCATIONS_DATA } from "@/data/locations";
import { createMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/ui/SectionHeader";
import { ScrollReveal } from "@/ui/ScrollReveal";
import { LocationAppointmentWidget } from "@/components/locations/LocationAppointmentWidget";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export const metadata: Metadata = createMetadata({
  title: "Hospital Management Software by State & City across India",
  description:
    "Explore Medsky HMS hospital software, clinic management systems (CMS), diagnostic laboratory software (LMS/LIS), and pharmacy POS deployments across Indian states, cities, and healthcare hubs.",
  path: "/locations",
  keywords: [
    "Hospital Software in Tamil Nadu",
    "Hospital Software in Chennai",
    "Hospital Software in Salem",
    "Hospital Software in Coimbatore",
    "Hospital Software in Bengaluru",
    "Hospital Software in Mumbai",
    "Hospital Software in Hyderabad",
    "Best HMS Software by City",
    "Clinic Management System by Area",
  ],
});

export default function LocationsDirectoryPage() {
  return (
    <>
      {/* 1. Directory Hero */}
      <section className="relative min-h-[60vh] bg-[#0b1328] text-white overflow-hidden flex items-center pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Medsky HMS Nationwide Network"
            fill
            priority
            className="object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1328] via-[#0b1328]/85 to-[#0b1328]/60 z-10" />
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Nationwide Distribution Network
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            India&apos;s Leading Hospital Software,{" "}
            <span className="text-primary">Distributed Locally</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From multi-specialty healthcare networks in state capitals to neighborhood polyclinics and diagnostic labs in local zones, Medsky HMS powers healthcare across India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white text-xs font-medium border border-white/10">
              ✓ State & City Specific Implementations
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white text-xs font-medium border border-white/10">
              ✓ Local On-Site Technical Assistance
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white text-xs font-medium border border-white/10">
              ✓ 100% ABDM & NABH Compliant
            </span>
          </div>
        </div>
      </section>

      {/* 2. States & Cities Grid */}
      <section className="py-20 bg-white dark:bg-[#060b14]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            badge="Healthcare Regions"
            title="Browse Medsky Deployments by"
            titleHighlight="State & City"
            description="Select your state or healthcare zone to discover localized hospital software features, local case studies, and on-site implementation schedules."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {LOCATIONS_DATA.map((state, idx) => (
              <ScrollReveal
                key={state.slug}
                direction="bottom"
                delay={idx * 100}
                className="h-full"
              >
                <div className="h-full bg-slate-50 dark:bg-[#0f172a] rounded-[28px] p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-primary dark:text-cyan-400 flex items-center justify-center font-black text-base group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {state.name}
                          </h2>
                          <span className="text-xs text-accent-foreground dark:text-cyan-400 font-semibold">
                            {state.hospitalCount || "100+"} Healthcare Centers
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {state.description}
                    </p>

                    {/* Cities List */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Key City Hubs in {state.name}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {state.cities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/locations/${state.slug}/${city.slug}`}
                            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-primary hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200/80 dark:border-slate-700 transition-all flex items-center gap-1 shadow-2xs"
                          >
                            <span>{city.name}</span>
                            <ChevronRight className="w-3 h-3 opacity-60" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* State Link CTA */}
                  <div className="pt-6 mt-4 border-t border-slate-200/60 dark:border-slate-800">
                    <Link
                      href={`/locations/${state.slug}`}
                      className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all group"
                    >
                      <span>Explore All {state.name} Network</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <PricingSection />

      {/* 4. Testimonials */}
      <TestimonialsSection />

      {/* 5. Appointment Booking Widget */}
      <LocationAppointmentWidget
        locationName="Your Medical Facility"
        defaultCity="Chennai"
        defaultState="Tamil Nadu"
      />
    </>
  );
}
