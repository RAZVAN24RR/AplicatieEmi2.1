import React from "react";
import Filme from "./Filme";
import "./MovieList.css";
import MovieAlt from "../Movie/Movie";

import { InputText } from "primereact/inputtext";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Link } from "react-router-dom";

export default function MovieList() {
  const customIcons = (
    <React.Fragment>
      <button className="p-sidebar-icon p-link p-mr-1">
        <span className="pi pi-print" />
      </button>
      <button className="p-sidebar-icon p-link p-mr-1">
        <span className="pi pi-arrow-right" />
      </button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header className="Header">
        {" "}
        Welcome to <span className="Alb"> Upcoming </span>{" "}
        <span id="Galben">Movies</span>
      </header>
      <p className="TIP">
        To access the desired movie, press the
        <span className="Alb">arrow.</span>{" "}
      </p>
      <div id="Search">
        <span className="p-input-icon-right">
          <i className="pi pi-spin pi-spinner" />
          <InputText
            className="InputText"
            style={{ borderColor: "#d6ed17" }}
            // value={value4}
            // onChange={(e) => setValue4(e.target.value)}
          />
        </span>
      </div>

      <div className="Container">
        {Filme.map((film, index) => {
          //array.map(fucntion{retunrneaza -- asta inseamna ca nu ai efecte secundare}) <=> for(item in array){}
          //array.map( (args) => {} )
          //Filme este un ARRAY. fiecare film din Filme are
          //array.map in react are nevoie de un key. ca sa stie react la care parte din ui sa faca re-render... cand se schimba
          // const inimaGoala = document.querySelector(".InimaGoala");
          // inimaGoala.addEventListener("click", function () {
          //   inimaGoala.style.color = "#d6ed17";
          // });
          return (
            <React.Fragment>
              <div id="movieList" className="clasuMea" key={index}>
                <Link to={`/Components/Movie/MovieDetail/${index + 1}`}>
                  {/* aici pun un link la pagina de detaliu */}
                  <MovieAlt film={film} />
                  {/* asta e componentul care afiseaza elementele din lista */}
                </Link>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
