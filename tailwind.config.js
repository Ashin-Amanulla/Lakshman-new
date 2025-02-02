/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-body)', ...fontFamily.sans],
                heading: ['var(--font-body)', ...fontFamily.sans],
            },
            colors: {
                primary: '#1a365d',    // Deep blue
                secondary: '#2563eb',  // Bright blue
                background: {
                    DEFAULT: '#F5F5F0', // cream
                    light: '#ffffff',
                    dark: '#e8e8e0',
                },
                text: {
                    DEFAULT: '#1f2937', // Dark gray for main text
                    light: '#6b7280',   // Lighter gray for secondary text
                }
            },
            fontSize: {
                'display': ['3.5rem', { lineHeight: '1.2' }],
                'h1': ['2.5rem', { lineHeight: '1.3' }],
                'h2': ['2rem', { lineHeight: '1.35' }],
                'h3': ['1.5rem', { lineHeight: '1.4' }],
                'h4': ['1.25rem', { lineHeight: '1.4' }],
                'body': ['1rem', { lineHeight: '1.5' }],
                'small': ['0.875rem', { lineHeight: '1.5' }],
            },
            spacing: {
                'section': '6rem',
                'container': '2rem',
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0',
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
            },
            lineHeight: {
                'tighter': '1.1',
                'tight': '1.25',
                'snug': '1.375',
                'normal': '1.5',
                'relaxed': '1.625',
                'loose': '2',
            },
        },
    },
    plugins: [],
} 