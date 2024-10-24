import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListSongs from "./components/ListSongs";
import Home from "./Home";
import Lyrics from "./components/SongsLyrics";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id" element={<ListSongs />} />
          <Route path="/song/:song_id" element={<Lyrics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
