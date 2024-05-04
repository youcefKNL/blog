import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/4.webp";
import photo5 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/5.webp";
import photo6 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/6.webp";
import photo7 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/7.webp";
import photo8 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/8.webp";
import photo9 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/9.webp";
import photo10 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/10.webp";
import photo11 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/11.webp";
import photo12 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/12.webp";
import photo13 from "../../../../../assets/rootme/Web-Serveur/HTTP-OpenRedirect/13.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HtmlOpenRedirect = () => {
  return (
    <div className="htmlOpenRedirect blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTTP - Open redirect</h1>
          <div className="solution">
            Vous trouverez dans l'énoncé et le challenge à cette adresse :{" "}
            <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Serveur/HTTP-Open-redirect"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Nous trouvons dans l'énoncé ces 3 boutons qui mènent à 3 liens
            différents :
            <img
              src={photo1}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            En inspectant les balises HTML des liens, celles-ci vérifient
            l'origine du lien en clair et le comparent aux données hashées après
            le "h" :
            <img
              src={photo2}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            <img
              src={photo3}
              alt="Capture d'écran du challengehtml open redirect Root ME"
            />
            <img src={photo4} alt="Capture d'écran open redirect Root ME" />
            On copie/colle le code dans Google pour avoir un indice sur le type
            de hash.
            <img
              src={photo5}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            <img
              src={photo6}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            Une fois identifié comme étant du md5, nous partons sur le premier
            générateur de hash md5 trouvé pour créer le nôtre.
            <img
              src={photo7}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            On crée un site fictif "www.noob.fr".
            <img
              src={photo8}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            On remplace ensuite le hash généré après le "h" ainsi que l'adresse
            web avec laquelle il sera comparé.
            <img
              src={photo9}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            <img
              src={photo10}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
            <img
              src={photo11}
              alt="Capture d'écran du challenge open redirect Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo13}
              alt="Capture d'écran du challenge open redirect Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            Cette manipulation d'adresse peut également être faite sur Burp
            Suite en modifiant l'URL.
            <img
              src={photo12}
              alt="Capture d'écran du challenge open redirect Root ME"
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default HtmlOpenRedirect;
