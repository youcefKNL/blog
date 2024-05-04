import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-Headers/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-Headers/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-Headers/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-Headers/4.webp";
import photo5 from "../../../../../assets/rootme/Web-Serveur/HTTP-Headers/5.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HtmlHeaders = () => {
  return (
    <div className="htmlHeaders blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTML Headers</h1>
          <div className="solution">
            Vous trouverez dans l'énoncé et le challenge à cette adresse :{" "}
            <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Serveur/HTTP-Headers"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Nous trouvons dans l'énoncé cette indication :
            <img
              src={photo1}
              alt="Capture d'écran du challenge JWT Intro Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            En inspectant les en-têtes avec Burp Suite, nous constatons que le
            serveur renvoie en réponse dans ses en-têtes "Header-Root-Me: none"
            :
            <img
              src={photo2}
              alt="Capture d'écran du challengeJWT Intro Root ME"
            />
            Nous envoyons cette requête au Repeater afin de modifier notre
            en-tête et tester les réponses.
            <img
              src={photo3}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Nous ajoutons en en-tête de requête la propriété "Header-Root-Me:"
            avec une valeur quelconque pour tester.
            <img
              src={photo4}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo5}
              alt="Capture d'écran du challenge JWT Intro Root ME"
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

export default HtmlHeaders;
