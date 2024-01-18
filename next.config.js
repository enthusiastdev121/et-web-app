const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    forceSwcTransforms: true,
    // ssr and displayName are configured by default
  },
  compiler: {
    styledComponents: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    domains: ["etdownload.s3.amazonaws.com", "d1a3azwbayblep.cloudfront.net", "dev2ru4m9wyc9.cloudfront.net", "master--et-dev.netlify.app"],
  },
  trailingSlash: false,

  async rewrites() {
    return [
      {
        source: "/join/talentc",
        destination: "/join/talentb",
      },
      {
        source: "/join/talentd",
        destination: "/join/talentb",
      },
      {
        source: "/join/talente",
        destination: "/join/talentb",
      },
      {
        source: "/join/talentf",
        destination: "/join/talentb",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/settings",
        destination: "/settings/account-information",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/reviews/all",
        permanent: true,
      },
      {
        source: "/auditions",
        destination: "/auditions/all-jobs",
        permanent: true,
      },
      {
        source: "/articles",
        destination: "https://articles.exploretalent.com/",
        permanent: false,
        basePath: false,
      },
      // {
      //   source: "/robots.txt",
      //   destination: "/robots.txt",
      //   permanent: true,
      // },
      // {
      //   source: "/sitemap.xml",
      //   destination: "/sitemap.xml",
      //   permanent: true,
      // },
    ];
  },

  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
});
