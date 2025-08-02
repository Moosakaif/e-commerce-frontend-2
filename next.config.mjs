/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // IMPORTANT for static export
  },
};

export default nextConfig;
