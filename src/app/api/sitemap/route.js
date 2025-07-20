export async function GET() {
  const baseUrl = "https://sladvocates.in";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: new Date().toISOString(),
      changeFreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date().toISOString(),
      changeFreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFreq: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/consultation`,
      lastModified: new Date().toISOString(),
      changeFreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date().toISOString(),
      changeFreq: "weekly",
      priority: 0.7,
    },
  ];

  // Practice area pages
  const practiceAreas = [
    "civil-litigation",
    "corporate-law",
    "family-law",
    "property-law",
    "criminal-law",
    "banking-finance",
  ];

  const practiceAreaPages = practiceAreas.map((area) => ({
    url: `${baseUrl}/practice-areas/${area}`,
    lastModified: new Date().toISOString(),
    changeFreq: "monthly",
    priority: 0.8,
  }));

  // Blog category pages
  const blogCategories = ["legal-updates", "case-studies", "news", "resources"];

  const blogCategoryPages = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/${category}`,
    lastModified: new Date().toISOString(),
    changeFreq: "weekly",
    priority: 0.7,
  }));

  // Combine all pages
  const allPages = [...staticPages, ...practiceAreaPages, ...blogCategoryPages];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // 1 hour
    },
  });
}
