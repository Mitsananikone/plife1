/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname); // This will allow you to use '@' as an alias to the root of your project
    return config;
  },
}

module.exports = nextConfig;
