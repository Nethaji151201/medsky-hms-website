import { MetadataRoute } from "next";
import { MODULES_DATA } from "@/data/modules";
import { BLOG_POSTS } from "@/data/blogs";
import { LOCATIONS_DATA } from "@/data/locations";
import { SITE_CONFIG } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: "daily", priority: 0.95 },
    { url: `${baseUrl}/features`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/modules`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/resources/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const locationRoutes: MetadataRoute.Sitemap = [];

  for (const state of LOCATIONS_DATA) {
    locationRoutes.push({
      url: `${baseUrl}/locations/${state.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const city of state.cities) {
      locationRoutes.push({
        url: `${baseUrl}/locations/${state.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  const moduleRoutes: MetadataRoute.Sitemap = MODULES_DATA.map((module) => ({
    url: `${baseUrl}/modules/${module.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...locationRoutes, ...moduleRoutes, ...blogRoutes];
}
