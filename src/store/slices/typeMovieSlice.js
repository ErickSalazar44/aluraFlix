import { createSlice } from "@reduxjs/toolkit";

export const typeMovieSlice = createSlice({
    name: "type",
    initialState: "movie",
    reducers: {
        setType: (state, action) => action.payload,
    },
});

export const { setType } = typeMovieSlice.actions;

export default typeMovieSlice.reducer;
