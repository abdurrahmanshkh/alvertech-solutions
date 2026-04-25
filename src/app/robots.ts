export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
    ],
    sitemap: 'https://www.alvertechsolutions.com/sitemap.xml',
  };
}
