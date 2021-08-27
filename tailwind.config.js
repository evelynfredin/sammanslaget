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
                hero: "url('/bg/Tree_background.jpg')",
                about: "url('/bg/Bench_background.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
