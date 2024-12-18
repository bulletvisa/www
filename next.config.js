/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "x1xgawylf0a6wvzl.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
