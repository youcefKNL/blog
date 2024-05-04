import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTML-codeSource/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTML-codeSource/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTML-codeSource/3.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HtmlCodeSource = () => {
  return (
    <div className="htmlCodeSource blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTML Code Source</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Server/HTML-Source-code"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que nous devons entrer un mot
            de passe :
            <img
              src={photo1}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
            En inspectant l'élément, nous constatons que du texte a été inséré
            en clair dans la page HTML :
            <img
              src={photo2}
              alt="Capture d'écran du challenge Html code source Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo3}
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

export default HtmlCodeSource;
