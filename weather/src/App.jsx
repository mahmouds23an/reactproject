import { useState } from "react";
import "./App.css";

const api = {
  key: "9b6f72961857081121f332e0bd796bb4",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchFunc = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <>
      <div className="bg-indigo-950 text-white p-10 h-[100vh]">
        <header className="">
          {/* Header */}
          <h1 className="text-3xl font-bold capitalize">
            open weather map API
          </h1>
          <div className="p-3 m-3 mx-auto text-center">
            <h2 className="text-2xl font-bold">
              Seeing the weather of any city in the world
            </h2>
            <p className="text-2xl font-bold mb-10">
              with <span className="text-blue-400">Open weather map</span>
            </p>

            {/* Search box */}
            <input
              type="text"
              placeholder="Search Here..."
              className="w-[600px] p-2 rounded border text-white bg-blue-950 "
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-950 border p-2 ml-2 rounded mb-24"
              onClick={searchFunc}
            >
              Search
            </button>

            <div className="bg-blue-950 p-10 w-[230px] mx-auto text-center">
              <div className="text-start flex flex-col">
                <div className="flex flex-row mb-5">
                  {/* Location */}
                  {weather.name && (
                    <p className="text-2xl font-bold">{weather.name}</p>
                  )}

                  {/* Temperature F/C */}
                  {weather.main && weather.main.temp && (
                    <p className="text-2xl ml-2">
                      {Math.round(weather.main.temp)} °C
                    </p>
                  )}
                </div>

                {/* wind speed */}
                {weather.wind && weather.wind.speed && (
                  <p className="mb-3">
                    Wind Speed: {Math.round(weather.wind.speed)} km/h
                  </p>
                )}

                {/* Date */}
                {weather.dt && (
                  <p className="mb-3">
                    Date: {new Date(weather.dt * 1000).toLocaleDateString()}
                  </p>
                )}

                {/* Condition */}
                {weather.weather &&
                  weather.weather[0] &&
                  weather.weather[0].main && (
                    <p>Overcast: {weather.weather[0].main}</p>
                  )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
