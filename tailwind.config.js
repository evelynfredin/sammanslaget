const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lota Grotesque", ...fontFamily.sans],
            },
            colors: {
                rdorange: "#e07c3e",
                rdgreen: "#009392",
                rdyellow: "#f6cd2d",
            },
            backgroundImage: (theme) => ({
                hero: "url('/Tree_background.png')",
                about: "url('/Bench_background.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
