import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/Js-Webpack/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Client/Js-Webpack/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Client/Js-Webpack/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Client/Js-Webpack/4.webp";
import photo5 from "../../../../../assets/rootme/Web-Client/Js-Webpack/5.webp";
import photo6 from "../../../../../assets/rootme/Web-Client/Js-Webpack/6.webp";
import photo7 from "../../../../../assets/rootme/Web-Client/Js-Webpack/7.webp";
import photo8 from "../../../../../assets/rootme/Web-Client/Js-Webpack/8.webp";
import photo9 from "../../../../../assets/rootme/Web-Client/Js-Webpack/9.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsWebpack = () => {
  return (
    <div className="jswebpack blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>Javascript Webpack</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Webpack"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous avons comme indice le Webpack.
            <br />
            Qu'est-ce que Webpack ? <br />
            Webpack est un "build tool" JavaScript populaire qui permet aux
            développeurs d'optimiser tous les fichiers en "bundle" pour le
            déploiement d'un site.
            <img
              src={photo1}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpack Root ME"
            />
            Sur le site, il n'y a rien d'intéressant visuellement. Allons dans
            les fichiers sources pour analyser cela.
            <img
              src={photo2}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />
            Après avoir analysé le code, rien d'intéressant à trouver, mise à
            part qu'un fichier de code est volontairement caché et qu'une route
            du site a été désactivée en étant mise en commentaire.
            <img
              src={photo3}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />
            Dans le fichier volontairement caché qui porte ce nom, on trouve un
            end-point du site.
            <img
              src={photo4}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />
            En effet, grâce à cette CVE, il est possible de manipuler des
            requêtes HTTP pour accéder à des fichiers en dehors de la racine du
            projet!
            <img
              src={photo5}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />{" "}
            <img
              src={photo6}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />{" "}
            <img
              src={photo7}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />{" "}
            On télécharge le bundle pour analyse. <br />
            En analysant l'un des bundles, nous trouvons le flag grâce à la
            fonction recherche dans VSCode.
            <img
              src={photo8}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />{" "}
            Bingo, nous avons notre Flag !
            <img
              src={photo9}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />{" "}
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default JsWebpack;
