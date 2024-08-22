import { useState, useEffect } from "react";
import { fetchActors } from "../api/tmdb";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getActors = async () => {
      const results = await fetchActors();
      setActors(results);
    };
    getActors();
  }, []);

  return (
    <div>
      <h1>Popular Actors</h1>
      <div className="grid">
        {actors.map((actor) => (
          <div key={actor.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <h2>{actor.name}</h2>
            <p>
              {actor.known_for
                .map((show) => show.title || show.name)
                .join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
