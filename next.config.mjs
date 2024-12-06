/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "photos.smugmug.com",
        port: '',
        search: '',
      },{
        protocol: 'https',
        hostname: "ringofire.com",
        port: '',
        search: '',
      },{
        protocol: 'https',
        hostname: "download.logo.wine",
        port: '',
        search: '',
      },{
        protocol: 'https',
        hostname: "www.serta.com",
        port: '',
        pathname: "/cdn/**"
      },{
        protocol: 'https',
        hostname: "images.ctfassets.net",
        port: '',
      },{
        protocol: 'https',
        hostname: "stagecoachinnmotel.hotels-oregon.com",
        port: '',
      },{
        protocol: 'https',
        hostname: "lh3.ggpht.com",
        port: '',
      },{
        protocol: 'https',
        hostname: "dynamic-media-cdn.tripadvisor.com",
        port: '',
      },{
        protocol: 'https',
        hostname: "images.trvl-media.com",
        port: '',
      },{
        protocol: 'https',
        hostname: "cdn.worldota.net",
        port: '',
      },{
        protocol: 'https',
        hostname: "d2hyz2bfif3cr8.cloudfront.net",
        port: '',
      },{
        protocol: 'https',
        hostname: "www.momondo.com",
        port: '',
      },{
        protocol: 'https',
        hostname: "images.bestwestern.com",
        port: '',
      },{
        protocol: 'https',
        hostname: "drive.google.com",
        port: '',
      },
    ],
  }
};

export default nextConfig;