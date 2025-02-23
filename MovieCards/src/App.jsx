import "./App.css";
import { useState } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    console.log("Movies List:", [...movies, newMovie]);
  };
  return (
    <>
      <h1>Movie Cards</h1>
      <AddMovie onAddMovie={handleAddMovie} />

      <h1>Your Movies</h1>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <div className="movie-header">
                <h2>{movie.title}</h2>
                <p id="rating"> {movie.rating}/5</p>
              </div>
              <p id="genre">{movie.genre}</p>
              <p id="description">{movie.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
