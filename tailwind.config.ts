/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
                hunaiza: ["var(--font-hunaiza)"],
                carnivalee: ["var(--font-carnivalee)"],
                buffalo: ["var(--font-buffalo)"],
                annabel: ["var(--font-annabel)"],
            },
            animation: {
                "spin-slow": "spin 6s linear infinite",
            },
        },
    },
    plugins: [],
};
