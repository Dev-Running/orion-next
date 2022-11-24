/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "blog.sesisenai.org.br",
      "github.com",
      "cdn.freebiesupply.com",
      "www.returngis.net",
      "localhost",
      "img.freepik.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
