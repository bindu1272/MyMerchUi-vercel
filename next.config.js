/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    NEXT_APP_IMAGES_SRC_URL : "https://dev-assets.mymerch.com.au/src/images"
      // Will be available on both server and client
    },
    images: {
      domains: ['dev-assets.mymerch.com.au',"mymerch-strapi-staging.s3.ap-southeast-2.amazonaws.com","assets.mymerch.com.au","mymerch-strapi-live.s3.ap-southeast-2.amazonaws.com"],
    },
    env:{
      NEXT_PUBLIC_STRAPI_API_URL : process.env.NEXT_PUBLIC_STRAPI_API_URL,
      // REACT_APP_IMAGES_SRC_URL:process.env.REACT_APP_IMAGES_SRC_URL,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_APP_GA_ID : process.env.NEXT_APP_GA_ID,
      GATSBY_API_URL : process.env.GATSBY_API_URL,
      NEXT_APP_IMAGES_SRC_URL: process.env.NEXT_APP_IMAGES_SRC_URL,
      NEXT_JS_SITE_URL:process.env.NEXT_JS_SITE_URL
    },
    reactStrictMode: false,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
