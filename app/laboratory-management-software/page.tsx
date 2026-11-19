import type { Metadata } from "next";
import { MODULES_DATA } from "@/data/modules";
import { ModuleDetailView } from "@/components/modules/ModuleDetailView";
import { createMetadata } from "@/lib/metadata";

const SLUG = "laboratory-management-software";

export function generateMetadata(): Metadata {
  const module = MODULES_DATA.find((m) => m.slug === SLUG || m.slug === "laboratory");

  return createMetadata({
    title: module?.name || "Laboratory Management Software (LMS)",
    description:
      module?.description ||
      "Medsky Laboratory Information Management System (LIMS) is an integrated software solution designed to simplify laboratory operations.",
    path: "/laboratory-management-software",
  });
}

export default function LaboratoryManagementSoftwarePage() {
  return <ModuleDetailView slug={SLUG} />;
}
