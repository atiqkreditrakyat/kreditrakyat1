/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-poppins)', 'sans-serif'],
            },
            colors: {
                primary: '#0D9488',
                primarydark: '#0F766E',
                lime: '#A3E635',
                limeDark: '#84CC16',
                surface: '#FAF9F6',
                surfaceDark: '#F5F1E8',
                dark: '#0f172a',
            }
        }
    },
    plugins: [],
};
