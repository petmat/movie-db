import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { getMovies } from "./movieApi";

interface Movie {
  name: string;
  year: number;
  genre: string;
}

interface MovieState {
  movies: Movie[];
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  error: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesSuccess: (state: MovieState, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    getMoviesError: (state: MovieState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { getMoviesSuccess, getMoviesError } = movieSlice.actions;

export const fetchMovies = (): AppThunk => async (dispatch) => {
  try {
    const movies = await getMovies();
    dispatch(getMoviesSuccess(movies));
  } catch (err) {
    dispatch(getMoviesError(err.toString()));
  }
};

export const selectMovies = (state: RootState) => state.movies.movies;

export default movieSlice.reducer;
