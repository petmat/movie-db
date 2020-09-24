import axios from "axios";

export interface Movie {
  name: string;
  year: number;
  genre: string;
}

export const getMovies = async () =>
  axios.get("/api/movies").then(({ data: { movies } }) => movies);

export const addMovie = async (movie: Movie) =>
  axios.post("/api/movies", movie).then(({ data: { movie } }) => movie);
