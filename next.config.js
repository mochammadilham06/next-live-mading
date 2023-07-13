/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/auth/login",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
