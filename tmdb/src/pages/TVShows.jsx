import { useState, useEffect } from "react";
import { fetchTVShows } from "../api/tmdb";

const TVShows = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const getTVShows = async () => {
      const results = await fetchTVShows();
      setTVShows(results);
    };
    getTVShows();
  }, []);

  return (
    <div>
      <h1>Popular TV Shows</h1>
      <div className="grid">
        {tvShows.map((tvShow) => (
          <div key={tvShow.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt={tvShow.name}
            />
            <h2>{tvShow.name}</h2>
            <p>{tvShow.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
