import instance from "../axios";
import { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesData() {
      const response = await instance.get(fetchUrl);
      setMovies(response.data.results);
      return response; //to break promise we are returning
    }
    fetchMoviesData();
  }, [fetchUrl]);

  const baseUrl = "https://www.themoviedb.org/t/p/w1280/";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (x) =>
            ((isLargeRow && x.backdrop_path) ||
              (!isLargeRow && x.poster_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={x.id}
                src={`${baseUrl}${
                  isLargeRow ? x.poster_path : x.backdrop_path
                }`}
                alt={x.name}
              ></img>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
