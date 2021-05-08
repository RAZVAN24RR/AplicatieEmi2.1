import React from "react";
import "./styleHome.css";
import Optimus from "./OptimusCover.jpg";
import { Link, useHistory } from "react-router-dom";

import { Button } from "primereact/button";

export default function Home() {
  let history = useHistory();

  const MovieListHandller = () => {
    history.push("MovieList");
  };

  return (
    <div className="HomeContainer">
      <header className="HomeTitlu">
        Buna , <span className="Galben"> User ! </span>
      </header>
      <img className="Optimus" src={Optimus} alt="thubnail" />
      <br />

      <Button
        onClick={MovieListHandller}
        label="Go To Movie"
        id="BtnMovie"
        className="p-button-secondary"
      />

      <Link to="/">
        <Button label="Log Out" id="BtnOut" className="p-button-secondary" />
      </Link>
    </div>
  );
}
