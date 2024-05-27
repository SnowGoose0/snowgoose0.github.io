import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            transform: {
                'skew-odd': 'skew(60deg, -30deg) scaleY(.66667)',
                'skew-even': 'skew(0deg, -30deg) scaleY(1.33333)',
            },
            fontFamily: {
                mono: ['var(--font-jetbrains-mono)', 'monospace'],
                thin: ['JetBrains Mono Thin', 'monospace'],
                bold: ['JetBrains Mono Bold', 'monospace'],
                italic: ['JetBrains Mono Italic', 'monospace'],
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
            },
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.skew-odd': {
                    transform: 'skew(60deg, -30deg) scaleY(.66667)',
                },
                '.skew-even': {
                    transform: 'skew(0deg, -30deg) scaleY(1.33333)',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};

export default config;
