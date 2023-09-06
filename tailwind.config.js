/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                gradient:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -14.17%, rgb(18, 20, 20) 90.00%)",
            },
            colors: {
                colorMenu: "#ffffffb3",
            },
            minHeight: {
                homeSpaceFondo: "calc(80vh - 296px)",
            },
            backgroundColor: {
                navbar: "#0f0f0f",
            },
        },
    },
    plugins: [],
};
