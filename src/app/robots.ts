import { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://Ritik26052000.github.io/sitemap.xml",
  };
}
