import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SWMovies.css";

export default function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      console.log(response.data);
      setMovie(response.data);
    }
    getData();
  }, [number]);
  const numerals = ["I", "II", "III", "IV", "V", "VI", "VII"];
  return (
    <div className="SWMovies">
      <h1>Pick a Star Wars Film</h1>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">IV</option>
        <option value="2">V</option>
        <option value="3">VI</option>
        <option value="4">I</option>
        <option value="5">II</option>
        <option value="6">III</option>
        <option value="7">VII</option>
      </select>

      <div className="crawl">
        <div className="crawl__content">
          <h2 className="crawl__movie-number">
            Episode {numerals[movie.episode_id - 1]}
          </h2>
          <h2 className="crawl__movie-title"> {movie.title}</h2>
          <p className="crawl__text">{movie.opening_crawl}</p>
        </div>
      </div>
    </div>
  );
}
