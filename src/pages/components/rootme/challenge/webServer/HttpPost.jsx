import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-Post/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-Post/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-Post/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-Post/4.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HttpPost = () => {
  return (
    <div className="httpPost blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTTP - Post</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Server/HTTP-POST"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />À chaque submit, au clic du bouton, une requête POST est
            envoyée. <br />
            Sur Burp Suite, nous pouvons vérifier que dans le Header, la
            génération du chiffre est trafiquée pour qu'il ne puisse dépasser le
            score !
            <img
              src={photo1}
              alt="Capture d'écran du challenge HTTP POST Root ME"
            />
            On envoie la requête POST au Repeater afin de tester des
            modifications dans le Header.
            <img
              src={photo2}
              alt="Capture d'écran du challenge HTTP POST Root ME"
            />
            On modifie soit le score envoyé, soit la formule de génération, et
            on envoie !
            <img
              src={photo3}
              alt="Capture d'écran du challenge HTML HTTP POST Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo4}
              alt="Capture d'écran HTTP POST Root ME"
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

export default HttpPost;
