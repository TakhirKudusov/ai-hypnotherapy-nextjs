/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://158.160.68.141/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
