export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://sladvocates.in/sitemap.xml

# Disallow sensitive areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /dashboard/

# Allow important pages
Allow: /
Allow: /practice-areas
Allow: /team
Allow: /blog
Allow: /contact
Allow: /consultation
Allow: /resources

# Crawl delay
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // 24 hours
    },
  });
}
