import axios from "axios";

export const getMovies = async () =>
  axios
    .get("http://localhost:5000/api/movies")
    .then(({ data: { movies } }) => movies);
