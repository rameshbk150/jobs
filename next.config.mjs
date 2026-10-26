/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
