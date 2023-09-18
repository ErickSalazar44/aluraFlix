import { createSlice } from "@reduxjs/toolkit";

export const homeMovieSlice = createSlice({
    name: "HomeMovie",
    initialState: [],
    reducers: {
        setHomeValue: (state, action) => action.payload,
    },
});

export const { setHomeValue } = homeMovieSlice.actions;
export default homeMovieSlice.reducer;
