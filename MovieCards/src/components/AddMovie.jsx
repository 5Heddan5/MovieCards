/* eslint-disable react/prop-types */
import RatingSlider from "./RatingSlide";
import useMovieForm from "./UseMovieForm";
const AddMovie = ({ onAddMovie }) => {
  const {
    movie,
    handleChange,
    handleRatingChange,
    handleAddMovie,
    handleClear,
  } = useMovieForm(onAddMovie);

  return (
    <>
      <div className="movie-container">
        <div className="title-input-container">
          <p>Title</p>
          <input
            className="title-input"
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
        </div>

        <div className="rating">
          <p>Rating</p>
          <RatingSlider value={movie.rating} onChange={handleRatingChange} />
        </div>

        <div className="genre">
          <p>Genre</p>
          <select name="genre" value={movie.genre} onChange={handleChange}>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

        <div className="description">
          <p>Description</p>
          <textarea
            name="description"
            value={movie.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="btn-container">
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleAddMovie}>Add</button>
        </div>
      </div>
    </>
  );
};
export default AddMovie;
