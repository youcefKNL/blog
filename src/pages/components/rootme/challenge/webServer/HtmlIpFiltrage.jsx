import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/4.webp";
import photo5 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/5.webp";
import photo6 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/6.webp";
import photo7 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/7.webp";
import photo8 from "../../../../../assets/rootme/Web-Serveur/HTTP-IPfiltrage/8.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HtmlIpFiltrage = () => {
  return (
    <div className="htmlHeaders blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTTP - Contournement de filtrage IP</h1>
          <div className="solution">
            Vous trouverez dans l'énoncé et le challenge à cette adresse :{" "}
            <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Serveur/HTTP-Contournement-de-filtrage-IP"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Nous trouvons dans l'énoncé cette indication :
            <img
              src={photo1}
              alt="Capture d'écran du challenge html ip filtrage Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            En inspectant le document joint, nous trouvons les plages d'adresses
            IP autorisées à se connecter :
            <img
              src={photo2}
              alt="Capture d'écran du challenge html ip filtrage Root ME"
            />
            Nous constatons lors du premier test que notre IP ne nous permet pas
            de nous connecter :
            <img
              src={photo3}
              alt="Capture d'écran du challengehtml ip filtrage Root ME"
            />
            Avec Burp Suite, nous récupérons la bonne requête POST que nous
            envoyons au Repeater pour tester nos modifications dans les en-têtes
            de notre requête POST :
            <img src={photo4} alt="Capture d'écran html ip filtrage Root ME" />
            <img
              src={photo6}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Une fois dans le Repeater, nous ajoutons dans notre en-tête de
            requête la propriété "X-Forwarded-For:" pour indiquer l'adresse IP
            d'origine qui est dans les plages d'IP autorisées :
            <img
              src={photo7}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo8}
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

export default HtmlIpFiltrage;
