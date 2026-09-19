import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Medsky HMS - Hospital, Clinic, Lab & Pharmacy Software",
    short_name: "Medsky HMS",
    description:
      "All-in-one Hospital Management Software, Clinic Management (CMS), Diagnostic Lab (LMS/LIS), and Pharmacy POS (PMS) Software.",
    start_url: "/",
    display: "standalone",
    background_color: "#060b14",
    theme_color: "#17a2b8",
    icons: [
      {
        src: "/medsky_logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
