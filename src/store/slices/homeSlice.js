import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    loading: false,
    error: false,
};

const homeSlice = createSlice({
    name: "homeMovies",
    initialState,
    reducers: {
        // almacenar los datos de la pelicula
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setMovies, setLoading, setError } = homeSlice.actions;

export default homeSlice.reducer;
