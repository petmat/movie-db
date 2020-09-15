import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import MovieList from "./features/movies/MovieList";

function App() {
  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movie DB</Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" p={2}>
        <MovieList></MovieList>
      </Box>
    </div>
  );
}

export default App;
