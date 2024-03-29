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
      url: `${BASE_URL}/aboutus`,
      lastModified: new Date(),
      // changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/accountsettings`,
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
      url: `${BASE_URL}/AllMerch`,
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/Blog`,
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: `${BASE_URL}/caseStudies`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/caseStudyDetails`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/CuratedPacks`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/CustomPacks`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/CustomPortal`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/Delivery`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/FAQ`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/GetAQuote`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/GetAQuoteError`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/GetAQuoteSuccess`,
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
        url: `${BASE_URL}/MerchInBox`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/MyMerchInspo`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/MyMerchInspoDetails`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/MyMerchProcess`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/PaymentMethods`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/PrivacyPolicy`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/Production`,
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
        url: `${BASE_URL}/ShippingTracking`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/SubmitEnquiry`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/Sustainability`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/TermsConditions`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/Warehouse`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/WhatWeDo`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/WhoWeAre`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/WhyMerch`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/YourResources`,
        lastModified: new Date(),
        // changeFrequency: 'weekly',
        priority: 0.5,
      },
  ]
}