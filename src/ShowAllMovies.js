import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShowAllMovies.css";
import { Link } from "react-router-dom";

const posterURL = "https://image.tmdb.org/t/p/original/";

export const ShowAllMovies = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(
        "https://api.themoviedb.org/3" + props.url
      );
      // console.log(request);
      setMovies(request.data.results);

      return request;
    }
    fetchMovies();
  }, [props.url]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      style={{
        flexWrap: "wrap",
        padding: "25px",
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "50px",
      }}
    >
      {movies?.map((movie) => {
        return (
          <Link to={`/detail/` + movie.id}>
            <div
              key={movie.id}
              className="mov_poster"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              }}
            >
              <div
                style={{
                  paddingTop: "150px",
                  paddingBottom: "15px",
                  textAlign: "center",
                }}
              >
                <h2>{movie.title} </h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

/*
<img
            key={movie.id}
            className="mov_poster"
            src={`${posterURL}${
              props.makeItLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>

          */
