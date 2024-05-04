import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/HTML-disableButtons/1.png";
import photo2 from "../../../../../assets/rootme/Web-Client/HTML-disableButtons/2.png";
import photo3 from "../../../../../assets/rootme/Web-Client/HTML-disableButtons/3.png";
import photo4 from "../../../../../assets/rootme/Web-Client/HTML-disableButtons/4.png";
import photo5 from "../../../../../assets/rootme/Web-Client/HTML-disableButtons/5.png";
import photo6 from "../../../../../assets/rootme/Web-Client/HTML-disableButtons/6.png";
import photo7 from "../../../../../assets/rootme/Web-Client/HTML-disableButtons/7.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HtmlDisableButton = () => {
  return (
    <div className="htmlDisableButton blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTML Disable Buttons</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Client/HTML-boutons-desactives?lang=fr"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que le bouton et l'input sont
            désactivés :
            <img
              src={photo1}
              alt="Capture d'écran du challenge Html code source Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            Un clic droit pour inspecter, nous constatons qu'ils sont
            désactivés. <br />
            Donc soit on met la valeur false à "disabled" soit on le supprime
            dans la console web côté client pour pouvoir y accéder
            <img
              src={photo2}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
            <img
              src={photo3}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
            <img
              src={photo4}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
            <img
              src={photo5}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
            Bingo, on récupère le Flag.
            <img
              src={photo6}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
            <img
              src={photo7}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default HtmlDisableButton;
