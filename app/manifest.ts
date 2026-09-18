import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Medsky HMS - Hospital, Clinic, Lab & Pharmacy Software",
    short_name: "Medsky HMS",
    description:
      "All-in-one Hospital Management System, Clinic Management (CMS), Diagnostic Lab (LMS/LIS), and Pharmacy POS (PMS) Software.",
    start_url: "/",
    display: "standalone",
    background_color: "#060b14",
    theme_color: "#17a2b8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
