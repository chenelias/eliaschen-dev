/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif'],
            },
            screens: {
                // 490
                xs: '530px',
                pxfourseven: '470',
            },
        },
    },
    plugins: [],
}
