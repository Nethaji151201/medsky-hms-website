import type { Metadata } from "next";
import { MODULES_DATA } from "@/data/modules";
import { ModuleDetailView } from "@/components/modules/ModuleDetailView";
import { createMetadata } from "@/lib/metadata";

const SLUG = "pharmacy-management-software";

export function generateMetadata(): Metadata {
  const module = MODULES_DATA.find((m) => m.slug === SLUG || m.slug === "pharmacy");

  return createMetadata({
    title: module?.name || "Pharmacy Management Software (PMS)",
    description:
      module?.description ||
      "Medsky Pharmacy Management Software (PIMS) is an integrated solution designed to streamline pharmacy operations, inventory, and accounts.",
    path: "/pharmacy-management-software",
  });
}

export default function PharmacyManagementSoftwarePage() {
  return <ModuleDetailView slug={SLUG} />;
}
