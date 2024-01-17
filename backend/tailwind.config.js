/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        colors: {
            primary: "#FD3D57",
        },
    },
    plugins: [],
};
