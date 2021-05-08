import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Filme from "../MovieList/Filme";

export default function MovieDetail() {
  const currentLocation = window.location.href.split("/");
  const movieID = currentLocation[currentLocation.length - 1];

  const [film, setFilm] = useState({});

  //slug -- cauti si afli ce e slug in routing

  useEffect(() => {
    setFilm(Filme[movieID - 1]);
    //console.log(Filme[movieID - 1]);
    // setFilm(Filme[2]);
  }, [movieID]); //array of dependencies

  let nM = parseInt(movieID) + 1; // /movieDetail/1+1=2 el va fi 11 pt ca se concateneaza
  let pM = movieID - 1;

  return (
    <React.Fragment>
      <div id="detaliuFilm">
        <Link to={`/MovieDetail/${nM}`}>
          <p>Next Movie</p>
        </Link>
        <Link to={`/MovieDetail/${pM}`}>
          <p>Previous Movie</p>
        </Link>
        <Link to={"/MovieList"}>
          <p>Back to Lists</p>
        </Link>
        <div className="Content" key={film.imdbID}>
          <main>
            <header className="TitluFilme">{film.Title}</header>
            <p className="InformatiiFilm">{`Run time: ${film.Runtime}`}</p>
            <p className="InformatiiFilm">{`Genre: ${film.Genre}`}</p>
            <span className="Sageata">
              <i class="fas fa-arrow-right"></i>
            </span>
            <div className="ImgContainer">
              {/* <img className="Imagini" src={film.Images[0]} alt="imagine" /> */}
              <div className="ImaginiGalben">
                <span className="InimaGoala">
                  <i class="fas fa-heart"></i>
                </span>
                <span className="Numar">{film.Metascore}</span>

                <span className="Chat">
                  <i class="fas fa-comment"></i>
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
