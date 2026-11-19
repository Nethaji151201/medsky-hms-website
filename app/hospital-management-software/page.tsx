import type { Metadata } from "next";
import { MODULES_DATA } from "@/data/modules";
import { ModuleDetailView } from "@/components/modules/ModuleDetailView";
import { createMetadata } from "@/lib/metadata";

const SLUG = "hospital-management-software";

export function generateMetadata(): Metadata {
  const module = MODULES_DATA.find((m) => m.slug === SLUG || m.slug === "ipd");

  return createMetadata({
    title: module?.name || "Hospital Management Software (HMS)",
    description:
      module?.description ||
      "Manage your hospital's clinical, administrative, and operational workflows with Medsky Hospital Management Software.",
    path: "/hospital-management-software",
  });
}

export default function HospitalManagementSoftwarePage() {
  return <ModuleDetailView slug={SLUG} />;
}
