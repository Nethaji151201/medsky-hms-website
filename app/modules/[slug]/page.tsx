import type { Metadata } from "next";
import { MODULES_DATA } from "@/data/modules";
import { ModuleDetailView } from "@/components/modules/ModuleDetailView";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return MODULES_DATA.map((module) => ({
    slug: module.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const module = MODULES_DATA.find((m) => m.slug === slug);

  if (!module) {
    return createMetadata({
      title: "Module Not Found",
      description: "The requested Medsky HMS module could not be found.",
    });
  }

  return createMetadata({
    title: `${module.name} | Hospital Software`,
    description: module.description,
    path: `/modules/${module.slug}`,
  });
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ModuleDetailView slug={slug} />;
}
