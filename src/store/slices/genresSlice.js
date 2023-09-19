import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define un thunk para obtener los géneros
export const fetchGenres = createAsyncThunk(
    "genres/fetchGenres",
    async (ismovie) => {
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_URL}`,
        };

        const url = `https://api.themoviedb.org/3/genre/${ismovie}/list?language=es-ES&locale=US`;
        const response = await axios.get(url, { headers });
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
