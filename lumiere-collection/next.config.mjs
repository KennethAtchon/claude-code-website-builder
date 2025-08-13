/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "unsplash.it"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;