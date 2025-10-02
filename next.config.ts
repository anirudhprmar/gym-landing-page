import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "163jz9wo57.ufs.sh", // Replace with your actual UploadThing app ID
        pathname: "/f/*", // This pattern accounts for UploadThing's file paths
      },
    ],
  },
};

export default nextConfig;
