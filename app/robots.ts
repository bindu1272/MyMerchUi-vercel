import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = `${process.env.NEXT_JS_SITE_URL}`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}