module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {
            flexbox: 'no-2009'
        },
        'postcss-preset-env': {
            stage: 3,
            features: {
                'custom-properties': false
            }
        },
        ...(process.env.NODE_ENV === 'production' ? {
            cssnano: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true,
                    },
                    normalizeWhitespace: false,
                }],
            },
        } : {}),
    },
} 