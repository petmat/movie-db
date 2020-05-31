import axios from "axios";

export const getMovies = async () =>
  axios.get("/api/movies").then(({ data: { movies } }) => movies);
