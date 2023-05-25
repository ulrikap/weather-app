/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
