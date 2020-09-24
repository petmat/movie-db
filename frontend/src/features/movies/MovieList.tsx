import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  Fab,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  createStyles,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { selectMovies, fetchMovies, createMovie } from "./movieSlice";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    fab: {
      position: "fixed",
      bottom: spacing(2),
      right: spacing(2),
    },
  })
);

const MovieList = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const [createIsOpen, setCreateIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState("");

  const handleNameChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const handleYearChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setYear(parseInt(e.target.value));
  };

  const handleGenreChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setGenre(e.target.value);
  };

  const handleClickOpenCreate = () => {
    setCreateIsOpen(true);
  };

  const handleCloseCreate = () => {
    setCreateIsOpen(false);
  };

  const handleCreate = () => {
    if (year) {
      dispatch(createMovie({ name, year, genre }));
    }
  };

  const classes = useStyles();

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
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpenCreate}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={createIsOpen}
        onClose={handleCloseCreate}
        disablePortal={false}
      >
        <DialogTitle>Create Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a movie, give it a name, year and genre
          </DialogContentText>
          <TextField
            autoFocus
            label="Name"
            fullWidth
            onChange={handleNameChange}
          />
          <TextField label="Year" fullWidth onChange={handleYearChange} />
          <TextField label="Genre" fullWidth onChange={handleGenreChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreate}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MovieList;
