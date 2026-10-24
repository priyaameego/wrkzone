import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/ads", "/api/"],
        disallow: [
          "/admin",
          "/dashboard",
          "/login",
          "/register",
          "/*.json$",
          "/*?*sort=",
          "/_next/",
          "/api/admin/",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: "https://wrkzone.com/sitemap.xml",
  };
}
