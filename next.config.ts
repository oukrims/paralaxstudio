import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
    unoptimized: false,
  },
  async redirects() {
    return [
      // Redirect /cases to /gallery for portfolio consolidation
      {
        source: "/:locale(fr|en)/cases",
        destination: "/:locale/gallery",
        permanent: true,
      },
      // Redirect /projects to /gallery for portfolio consolidation
      {
        source: "/:locale(fr|en)/projects",
        destination: "/:locale/gallery",
        permanent: true,
      },
      // Redirect project detail pages to gallery detail pages
      {
        source: "/:locale(fr|en)/projects/:slug",
        destination: "/:locale/gallery/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
