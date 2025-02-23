import './App.css'
import { useState } from 'react'
import AddMovie from './components/AddMovie'

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    console.log("Movies List:", [...movies, newMovie]);
  }
  return (
    <>
      <h1>Movie Cards</h1>
      <AddMovie onAddMovie={handleAddMovie} />

      {/* ✅ Movie List Section */}
      <div className="movie-list">
        <h2>Your Movies</h2>
        {movies.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <h3>{movie.title}</h3>
              <p>⭐ Rating: {movie.rating}</p>
              <p>🎭 Genre: {movie.genre}</p>
              <p>📖 {movie.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App
