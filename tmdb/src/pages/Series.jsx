import { useState, useEffect } from "react";
import { fetchSeries } from "../api/tmdb";

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getSeries = async () => {
      const results = await fetchSeries();
      setSeries(results);
    };
    getSeries();
  }, []);

  return (
    <div>
      <h1>Top-Rated Series</h1>
      <div className="grid">
        {series.map((serie) => (
          <div key={serie.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={serie.name}
            />
            <h2>{serie.name}</h2>
            <p>{serie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
