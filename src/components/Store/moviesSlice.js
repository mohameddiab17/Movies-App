import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getMovies = createAsyncThunk("movies/getMovies", async () => {
  let { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=0434fb4a06802cae450462b0691c6dfc&language=en"
  );
  return data.results;
});

let initialState = {
  moviesData: [],
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.moviesData = action.payload;
        state.isLoading = false;
      });
  },
});

export let moviesReducer = moviesSlice.reducer;
