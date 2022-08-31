import { useState, useEffect } from "react";
import request from "../Requests";
import instance from "../axios";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    function fetchRandomMovie() {
      instance.get(request.fetchNetflixOriginals).then((resp) => {
        setMovie(
          resp.data.results[
            Math.floor(Math.random() * resp.data.results.length - 1)
          ]
        );
      });
    }
    fetchRandomMovie();
  }, []); // [] -> Called only once on component mount

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.themoviedb.org/t/p/w1280/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <div className="banner_title">{movie?.original_name}</div>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <div className="banner_description">{movie?.overview}</div>
      </div>
      <div className="fade--bottom"></div>
    </header>
  );
}

export default Banner;
