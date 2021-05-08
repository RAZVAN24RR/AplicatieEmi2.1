import React from "react";
import "./FooterStyle.css";
import LogoImg from "./Logo.png";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer">
        <div id="LogoFooter">
          <img id="ImgFooter" src={LogoImg} alt="imagine" />
          <br />

          <header id="HeaderFooter">
            Upcoming <span id="GalbenFooter">Movies</span>
          </header>
        </div>

        <ul className="Lista">
          <li className="ListaElement">Cookies </li>
          <li className="ListaElement">Termenii de utilizare</li>
          <li className="ListaElement">Vezi alte filme</li>
          <li className="ListaElement">Blog</li>
        </ul>
        <ul className="Lista">
          <li className="ListaElement">Aboneaza-te</li>
          <li className="ListaElement">Videos</li>
          <li className="ListaElement">Social More</li>
          <li className="ListaElement">Pricing More</li>
        </ul>
      </div>
      <div className="Social">
        <ul className="ListaSocial">
          <li>
            <i class="fab fa-facebook"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
      <p id="Autor">
        <i class="far fa-copyright"></i> Copyright of <i>Upcoming Movies </i>
      </p>
    </React.Fragment>
  );
};

export default Footer;
