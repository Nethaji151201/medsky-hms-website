import type { Metadata } from "next";
import { MODULES_DATA } from "@/data/modules";
import { ModuleDetailView } from "@/components/modules/ModuleDetailView";
import { createMetadata } from "@/lib/metadata";

const SLUG = "clinic-management-software";

export function generateMetadata(): Metadata {
  const module = MODULES_DATA.find((m) => m.slug === SLUG || m.slug === "opd");

  return createMetadata({
    title: module?.name || "Clinic Management Software (CMS)",
    description:
      module?.description ||
      "Medsky Clinic Management Software helps doctors and clinics manage everyday operations through one integrated platform.",
    path: "/clinic-management-software",
  });
}

export default function ClinicManagementSoftwarePage() {
  return <ModuleDetailView slug={SLUG} />;
}
