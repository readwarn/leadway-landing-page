/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            aspectRatio: {
                rect: "5/6",
            },

            fontFamily: {
                plafair: "Playfair Display",
            },

            rotate: {
                270: "270deg",
                20: "20deg",
                10: "10deg",
                5: "5deg",
            },

            borderWidth: {
                1.5: "1.5px",
                7: "7px",
                5: "5px",
            },

            screens: {
                avg: "500px",
                large: "1100px",
            },

            colors: {
                accent: "#F6B736",
                "soft-black": "#2E3444",
                "soft-grey": "#E6E7E8",
                "light-grey": " #F5F5F5;",
                "border-grey": "#656565",
                "dark-grey": "#F3F3F3",
            },
            transitionProperty: {
                line: "transform, background-color, color, opacity, height",
            },

            zIndex: {
                5: "5",
            },
        },
    },
    plugins: [],
};