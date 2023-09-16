import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import typeMovieSlice from "./slices/typeMovieSlice";

const store = configureStore({
    reducer: {
        genresMovies: genresSlice, // trae los generos para evitar doble cargas
        type: typeMovieSlice, // trae el type Movie o tv
    },
});

export default store;
