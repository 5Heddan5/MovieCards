import { useState } from "react";

const useMovieForm = (onAddMovie) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: 3, // Default rating
    genre: "",
    description: "",
  });

  const handleChange = (event) => {
    setMovie({
      ...movie,
      [event.target.name]: event.target.value,
    });
  };

  const handleRatingChange = (newRating) => {
    setMovie({ ...movie, rating: newRating });
  };

  const handleAddMovie = () => {
    if (!movie.title.trim() || !movie.description.trim()) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Adding Movie:", movie);
    onAddMovie(movie); // Call the parent method to add the movie
    setMovie({ title: "", rating: 3, genre: "", description: "" }); // Reset form after adding
  };

  const handleClear = () => {
    setMovie({ title: "", rating: 3, genre: "", description: "" });
  };

  return {
    movie,
    handleChange,
    handleRatingChange,
    handleAddMovie,
    handleClear,
  };
};

export default useMovieForm;
