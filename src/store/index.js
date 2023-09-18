import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import typeMovieSlice from "./slices/typeMovieSlice";
import homeMovieSlice from "./slices/homeMovieSlice";

const store = configureStore({
    reducer: {
        genresMovies: genresSlice, // trae los generos para evitar doble cargas
        type: typeMovieSlice, // trae el type Movie o tv
        homeMovieSlice, // trae las peliculas almacenadas
    },
});

export default store;
