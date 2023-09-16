import { createSlice } from "@reduxjs/toolkit";

export const typeMovieSlice = createSlice({
    name: "type",
    initialState: "movie", // valor por defecto
    reducers: {
        setType: (state, action) => action.payload, // actualziar el valor en el caso de que el usuario quiera ver series 'tv'
    },
});

export const { setType } = typeMovieSlice.actions;

export default typeMovieSlice.reducer;
