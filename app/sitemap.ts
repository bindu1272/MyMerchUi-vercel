import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = `${process.env.NEXT_JS_SITE_URL}`;
  return [
    {
      url: BASE_URL+"/",
      lastModified: new Date(),
      // changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      // changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/account-settings`,
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/admin`,
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/all-merch`,
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: `${BASE_URL}/case-studies`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/case-study-details`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/curated-packs`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/custom-acks`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/custom-portal`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/delivery`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/faq`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/get-a-quote`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/get-a-quote-error`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/get-a-quote-success`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/home`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/merch-in-box`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/my-merch-inspo`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/my-merch-inspo-details`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/my-merch-process`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/payment-methods`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/privacy-policy`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/production`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/reset-password`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/shipping-tracking`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/submit-enquiry`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/sustainability`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/terms-conditions`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/warehouse`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/what-we-do`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/who-we-are`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/why-merch`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/your-resources`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
  ]
}