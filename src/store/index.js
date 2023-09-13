import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import typeMovieSlice from "./slices/typeMovieSlice";

const store = configureStore({
    reducer: {
        genresMovies: genresSlice,
        type: typeMovieSlice,
    },
});

export default store;
