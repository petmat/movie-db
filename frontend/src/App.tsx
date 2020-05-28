import React from "react";
import MovieList from "./features/movies/MovieList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>Movie DB</header>
      <main>
        <MovieList></MovieList>
      </main>
    </div>
  );
}

export default App;
