import { useEffect } from "react";

import "./App.css";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=91a32a88&";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Downfall");
  }, []);

  return (
    <div className="app">
      <h1>Movies Counter</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>
    </div>
  );
};

export default App;
