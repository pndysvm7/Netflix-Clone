import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "./axios";
import { compose } from "async";
import "./Display.css";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

const posterURL = "https://image.tmdb.org/t/p/original/";

export const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

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

  function MovieDetail(movie_id) {
    console.log("ha bhai click to ho gaya");
    return <Link to={`/detail/` + movie_id}></Link>;
  }

  return (
    <div className="row">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginLeft: "30px" }}>
          <h2>{props.title} </h2>
        </div>
        <Link style={{ marginRight: "30px" }} to={`/showall/` + props.title}>
          {" "}
          Show All>>{" "}
        </Link>
      </div>

      <div className="row_posters" style={{ display: "flex" }}>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${props.makeItLarge && "row_posterLarge"}`}
              src={`${posterURL}${
                props.makeItLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => history.push(`/detail/` + movie.id)}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

/*
 <img key={movie.id} className = {`row_poster ${props.makeItLarge && "row_posterLarge"}`} src={ `${posterURL}${props.makeItLarge?  movie.poster_path : movie.backdrop_path}`} alt={movie.name}    ></img>  

*/
