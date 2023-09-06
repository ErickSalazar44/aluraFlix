import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import genresSlice from "./slices/genresSlice";

const store = configureStore({
    reducer: {
        homeMovies: homeSlice,
        genresMovies: genresSlice,
    },
});

export default store;
