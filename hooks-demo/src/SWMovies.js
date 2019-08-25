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

      <div className="crawl-container">
        <div className="crawl">
          <h2> {movie.title}</h2>
          <p>{movie.opening_crawl}</p>
        </div>
      </div>
    </div>
  );
}
