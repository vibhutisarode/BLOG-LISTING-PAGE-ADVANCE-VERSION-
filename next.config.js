/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true // Required for static export
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Uncomment for GitHub Pages deployment with repository name
  // basePath: '/BLOG-LISTING-PAGE-ADVANCE-VERSION-',
  // assetPrefix: '/BLOG-LISTING-PAGE-ADVANCE-VERSION-/'
}

module.exports = nextConfig
