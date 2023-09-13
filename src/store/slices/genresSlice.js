import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define un thunk para obtener los géneros
export const fetchGenres = createAsyncThunk(
    "genres/fetchGenres",
    async (ismovie) => {
        const apiKey = "617b8b681bdb0227b53464f2d357d8e1";

        const response = await axios.get(
            `https://api.themoviedb.org/3/genre/${ismovie}/list?language=es-ES&api_key=${apiKey}`
        );
        return response.data.genres;
    }
);

// estado global de generos
const genresSlice = createSlice({
    name: "homeMovies",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            // Almacena los géneros en el estado cuando se completa la solicitud
            return action.payload;
        });
    },
});

export const { setGenres, getGenres } = genresSlice.actions;

// Define géneros desde el estado global
export const selectGenres = (state) => state.genres;

// Funcion para obtener los nombres de los generos por IDs
export default genresSlice.reducer;
