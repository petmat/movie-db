import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./MovieList.module.css";
import { selectMovies, fetchMovies } from "./movieSlice";

const MovieList = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <div className={styles.table}>
        <div className={`${styles.tableCell} ${styles.tableHeaderCell}`}>
          Name
        </div>
        <div className={`${styles.tableCell} ${styles.tableHeaderCell}`}>
          Year
        </div>
        <div className={`${styles.tableCell} ${styles.tableHeaderCell}`}>
          Genre
        </div>
        {movies.map((movie) => (
          <>
            <div className={styles.tableCell}>{movie.name}</div>
            <div className={styles.tableCell}>{movie.year}</div>
            <div className={styles.tableCell}>{movie.genre}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default MovieList;
