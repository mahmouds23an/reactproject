import { useState, useEffect } from "react";
import { fetchMovies } from "../api/tmdb";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const results = await fetchMovies();
      setMovies(results);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
