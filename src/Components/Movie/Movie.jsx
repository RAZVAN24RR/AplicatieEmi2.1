import React from "react";
import "../MovieList/MovieList.css";

const MovieAlt = ({ film }) => {
  const styleMain = {
    background: "url(film.Images[0])",
  };
  return (
    <div className="Content" key={film.imdbID}>
      {/* film.imdbID = */}
      <main style={styleMain}>
        <header className="TitluFilme">{film.Title}</header>
        <p className="InformatiiFilm">{`Run time: ${film.Runtime}`}</p>
        <p className="InformatiiFilm">{`Genre: ${film.Genre}`}</p>
        <span className="Sageata">
          <i class="fas fa-arrow-right"></i>
        </span>
        <div className="ImgContainer">
          <img className="Imagini" src={film.Images[0]} alt="imagine" />
          <div className="ImaginiGalben">
            <span className="InimaGoala">
              <i class="fas fa-heart"></i>
            </span>
            <span className="Numar">{film.Metascore}</span>
            {/* <span className="Arrow">
                        <i class="fas fa-arrow-alt-circle-right"></i>
                      </span> */}
            <span className="Chat">
              <i class="fas fa-comment"></i>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieAlt;
