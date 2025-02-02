/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src/styles'],
        prependData: `@import "theme/index.scss";`
    },
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'], // Add any image domains you're using
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