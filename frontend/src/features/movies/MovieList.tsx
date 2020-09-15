import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./MovieList.module.css";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { selectMovies, fetchMovies } from "./movieSlice";

const MovieList = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Movie list">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Genre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.name}>
                <TableCell>{movie.name}</TableCell>
                <TableCell>{movie.year}</TableCell>
                <TableCell>{movie.genre}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MovieList;
