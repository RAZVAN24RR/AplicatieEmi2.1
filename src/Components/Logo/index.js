import React from "react";
import "./style.css";
import LogoImg from "./Logo.png";

const Logo = () => {
  return (
    <div className="Logo">
      <img id="LOGO" src={LogoImg} alt="Logo" />
      <header id="HeaderLogo">
        <span id="Alb"> Upcoming </span> <span id="Galben">Movies</span>
      </header>
      <div className="Butoane">
        <span id="SecretText">Secret User </span>
        <span id="SecretUser">
          <i class="fas fa-user-secret"></i>
        </span>
        <span id="meniu">
          <i class="fas fa-align-justify"></i>
        </span>
      </div>
    </div>
  );
};
export default Logo;
