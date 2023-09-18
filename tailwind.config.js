/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                gradient:
                    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4990371148459384) 35%, rgba(0,0,0,0) 70%)",
                gradiant:
                    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);",
                yGradiant:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgb(10, 10, 10, 40) 100.09%)",
                yGradiantModal:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 10%, rgb(10, 10, 10, 100) 100.09%)",
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
