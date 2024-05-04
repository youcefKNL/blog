import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-RedirectionInvalide/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-RedirectionInvalide/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-RedirectionInvalide/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-RedirectionInvalide/4.webp";
import photo5 from "../../../../../assets/rootme/Web-Serveur/HTTP-RedirectionInvalide/5.webp";
import photo6 from "../../../../../assets/rootme/Web-Serveur/HTTP-RedirectionInvalide/6.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HttpRedirectionInvalide = () => {
  return (
    <div className="httpRedirectionInvalide blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTTP - Redirection Invalide</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Server/HTTP-Improper-redirect?lang=en"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            Nous avons cet indice au début du challenge
            <img
              src={photo1}
              alt="Capture d'écran du challenge HTTP redirection invalide Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            On tombe sur 2 inputs "Login" et "Password"
            <img
              src={photo2}
              alt="Capture d'écran du challenge HTTP redirection invalide Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            On ouvre cette requête sur Burpsuite et nous constatons qu'il poste
            à l'URI "login.php" <br />
            On envoie cette requête sur Repeater pour modifier l'URI par
            l'indice "index.php".
            <img
              src={photo3}
              alt="Capture d'écran du challenge HTML HTTP redirection invalide Root ME"
            />
            <img
              src={photo4}
              alt="Capture d'écran HTTP redirection invalide Root ME"
            />
            <img
              src={photo5}
              alt="Capture d'écran HTTP redirection invalide Root ME"
            />{" "}
            Bingo, nous avons notre Flag !
            <img
              src={photo6}
              alt="Capture d'écran HTTP redirection invalide ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
          </div>
        </LayoutArticleBlog>
        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default HttpRedirectionInvalide;
