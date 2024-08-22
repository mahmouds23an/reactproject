import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import Actors from "./pages/Actors";
import TVShows from "./pages/TVShows";
import Series from "./pages/Series";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  );
};

export default App;
