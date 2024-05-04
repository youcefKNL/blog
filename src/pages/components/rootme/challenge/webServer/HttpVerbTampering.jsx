import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-VerbTampering/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-VerbTampering/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-VerbTampering/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-VerbTampering/4.webp";
import photo5 from "../../../../../assets/rootme/Web-Serveur/HTTP-VerbTampering/5.webp";
import photo6 from "../../../../../assets/rootme/Web-Serveur/HTTP-VerbTampering/6.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HttpVerbTampering = () => {
  return (
    <div className="httpVerbTampering blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTTP - Verb tampering</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Server/HTTP-verb-tampering"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            On tombe sur ceci au début, nous testons et vérifions sur Burpsuite
            ce qui se passe
            <img
              src={photo1}
              alt="Capture d'écran du challenge HTTP verb tampering root me"
              style={{ maxWidth: "200px", important: "true" }}
            />
            D'après les indices de l'énoncé, le mauvais verbe est utilisé pour
            la méthode "GET" dans le HEADERS. <br /> On envoie cette requête sur
            le repeater afin de trafiquer cela et faire des tests. <br />{" "}
            Plusieurs méthodes sont acceptées.
            <img
              src={photo2}
              alt="Capture d'écran du challenge HTTP verb tampering root me"
            />
            <img
              src={photo3}
              alt="Capture d'écran du challenge HTML HTTP verb tampering root me"
            />
            <img
              src={photo4}
              alt="Capture d'écran HTTP verb tampering root me"
            />
            <img
              src={photo5}
              alt="Capture d'écran HTTP verb tampering root me"
            />{" "}
            Bingo, nous avons notre Flag !
            <img
              src={photo6}
              alt="Capture d'écran HTTP verb tampering root me"
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

export default HttpVerbTampering;
