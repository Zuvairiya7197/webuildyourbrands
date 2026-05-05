import type { MetadataRoute } from "next";

const siteUrl = "https://www.webuildyourbrands.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/projects",
    "/web-store",
    "/contact"
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/web-store" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/web-store" ? 0.9 : 0.7
  }));
}
