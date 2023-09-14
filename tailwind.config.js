/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                gradient:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -44.17%, rgb(5, 5, 5) 80.09%)",
                gradiant:
                    "linear-gradient(to right, rgb(0 0 0) 20%, rgb(0 0 0 / 0%) 100%)",
                yGradiant:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgb(10, 10, 10, 40) 100.09%)",
            },
            colors: {
                colorMenu: "#ffffffb3",
            },
            minHeight: {
                homeSpaceFondo: "calc(75vh - 300px)",
                homeSpaceFondoPC: "calc(75vh - 260px)",
            },
            backgroundColor: {
                navbar: "#0f0f0f",
            },
            padding: {
                navH: "80px",
            },
            fontSize: {
                titulo: "calc(.9em + 3vw)",
            },
            screens: {
                movieId: { min: "380px", max: "640px" },
            },
        },
        plugins: [],
    },
};
