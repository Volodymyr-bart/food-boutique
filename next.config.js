/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ftp.goit.study", "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

module.exports = nextConfig;
