/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                gradient:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -44.17%, rgb(10, 10, 10) 80.09%)",
            },
            colors: {
                colorMenu: "#ffffffb3",
            },
            minHeight: {
                homeSpaceFondo: "calc(85vh - 300px)",
            },
            backgroundColor: {
                navbar: "#0f0f0f",
            },
        },
        plugins: [],
    },
};
