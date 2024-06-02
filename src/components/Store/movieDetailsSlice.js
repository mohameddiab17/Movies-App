import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

export let getMovieDetails = createAsyncThunk(
  "movieDetails/getMovieDetails",
  async (id) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0434fb4a06802cae450462b0691c6dfc`
    );
    return data;
  }
);

const initialState = {
  movieDetails: {},
};
const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
    });
  },
});

export const movieDetailsReducer = movieDetailsSlice.reducer;
