/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                gradient:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -44.17%, rgb(10, 10, 10) 80.09%)",
                btn: "linear-gradient(1.5708rad, rgb(117, 62, 239) 25%, rgb(185, 8, 246) 100%)",
                gradiant:
                    "linear-gradient(to right, rgb(0 0 0) 20%, rgb(0 0 0 / 0%) 100%)",
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
            padding: {
                navH: "80px",
            },
            fontSize: {
                titulo: "calc(.6em + 2vw)",
            },
        },
        plugins: [],
    },
};
