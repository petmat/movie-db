import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Movie {
  name: string;
  year: number;
  genre: string;
}

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [
    {
      name: "Fight Club",
      year: 1999,
      genre: "Drama",
    },
    {
      name: "Terminator",
      year: 1984,
      genre: "Action",
    },
    {
      name: "Titanic",
      year: 1997,
      genre: "Drama",
    },
  ],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const selectMovies = (state: RootState) => state.movies.movies;

export default movieSlice.reducer;
