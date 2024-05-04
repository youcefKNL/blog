import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/1.png";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/2.png";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/3.png";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/4.png";
import photo5 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/5.png";
import photo6 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/6.png";
import photo7 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/7.png";
import photo8 from "../../../../../assets/rootme/Web-Serveur/HTTP-UserAgent/8.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HttpUserAgent = () => {
  return (
    <div className="httpUserAgent blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTTP - User Agent</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Server/HTTP-User-agent"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            Nous avons cet indice au début du challenge
            <img
              src={photo1}
              alt="Capture d'écran du challenge HTTP user agent root me"
              style={{ maxWidth: "450px", important: "true" }}
            />
            On tombe sur cet indice laissé par l'administrateur.
            <img
              src={photo2}
              alt="Capture d'écran du challenge HTTP user agent root me"
              style={{ maxWidth: "450px", important: "true" }}
            />
            On ouvre cette requête sur Burpsuite et nous constatons que
            l'en-tête des Headers envoyé, la valeur "admin" n'est pas envoyée et
            le serveur s'attend à recevoir cette valeur.
            <br />
            On envoie cette requête sur Repeater pour trafiquer notre en-tête.
            <img
              src={photo3}
              alt="Capture d'écran du challenge HTML HTTP user agent root me"
            />
            <img src={photo4} alt="Capture d'écran HTTP user agent root me" />
            <img
              src={photo5}
              alt="Capture d'écran HTTP user agent root me"
            />{" "}
            <img src={photo6} alt="Capture d'écran HTTP user agent root me" />
            <img
              src={photo7}
              alt="Capture d'écran HTTP user agent root me"
            />{" "}
            Bingo, nous avons notre Flag !
            <img
              src={photo8}
              alt="Capture d'écran HTTP user agent root me"
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

export default HttpUserAgent;
