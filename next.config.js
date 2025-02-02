/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src/styles'],
        prependData: `@import "theme/index.scss";`
    },
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
        unoptimized: true
    },
    // Disable page optimization during build to prevent prerender errors
    experimental: {
        workerThreads: false,
        cpus: 1
    },
    // PostCSS configuration
    postcss: {
        plugins: {
            'postcss-preset-env': {
                features: { 'custom-properties': false }
            }
        }
    }
}

module.exports = nextConfig 