import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Movie, getMovies, addMovie } from "./movieApi";

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
    createMovieSuccess: (state: MovieState, action: PayloadAction<Movie>) => {
      state.movies = [...state.movies, action.payload];
    },
    createMovieError: (state: MovieState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  getMoviesSuccess,
  getMoviesError,
  createMovieSuccess,
  createMovieError,
} = movieSlice.actions;

export const fetchMovies = (): AppThunk => async (dispatch) => {
  try {
    const movies = await getMovies();
    dispatch(getMoviesSuccess(movies));
  } catch (err) {
    dispatch(getMoviesError(err.toString()));
  }
};

export const createMovie = (movie: Movie): AppThunk => async (dispatch) => {
  try {
    await addMovie(movie);
    dispatch(createMovieSuccess(movie));
  } catch (err) {
    dispatch(createMovieError(err.toString()));
  }
};

export const selectMovies = (state: RootState) => state.movies.movies;

export default movieSlice.reducer;
