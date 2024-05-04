import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/1.png";
import photo2 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/2.png";
import photo3 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/3.png";
import photo4 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/4.png";
import photo5 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/5.png";
import photo6 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/6.png";
import photo7 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/7.png";
import photo8 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/8.png";
import photo9 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/9.png";
import photo10 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/10.png";
import photo11 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/11.png";
import photo12 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/12.png";
import photo13 from "../../../../../assets/rootme/Web-Serveur/JWT-Introduction/13.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsIntroduction = () => {
  return (
    <div className="shiftCipher blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>JWT Introduction</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Serveur/JWT-Introduction"
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
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            En inspectant la console dans l'onglet "Application" pour voir les
            cookies, nous apercevons qu'il n'y a rien de stocké.
            <img
              src={photo2}
              alt="Capture d'écran du challengeJWT Intro Root ME"
            />
            En cliquant sur le lien "Login as guest", un jeton de session est
            déposé sur notre navigateur.
            <img
              src={photo3}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Les JWT sont toujours encodés en base64. Ils ont une structure en 3
            parties séparées par un "." :
            <ul>
              <li>
                - Header : Il contient des métadonnées sur le type de token et
                l'algorithme de signature utilisé.
              </li>
              <li>
                - Payload : Il contient les données de l'utilisateur ou toute
                autre information utile.
              </li>
              <li>
                - Signature : Elle est utilisée pour vérifier l'intégrité du JWT
                et garantir qu'il n'a pas été altéré.
              </li>
            </ul>
            <img
              src={photo4}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Maintenant, modifions celui-ci en modifiant l'en-tête pour retirer
            l'algorithme.
            <img
              src={photo5}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            On édite la valeur du cookie qui a pour clé "jwt" sur le navigateur.
            <img
              src={photo6}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            On remplace ensuite la valeur "guest" par "admin" dans le Payload.
            <img
              src={photo7}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            On l'ajoute au cookie séparé par un ".".
            <img
              src={photo8}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            On rafraîchit la page. <br />
            Il semble que la vérification côté serveur de la signature n'ait pas
            été activée.
            <br /> Bingo, nous avons notre Flag !
            <img
              src={photo9}
              alt="Capture d'écran du challenge JWT Intro Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            Nous pouvons aussi modifier le cookie en passant par Burp Suite (2e
            méthode).
            <img
              src={photo10}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />{" "}
            <img
              src={photo11}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />{" "}
            <img
              src={photo12}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />{" "}
            Bingo, nous avons notre Flag !
            <img
              src={photo13}
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

export default JsIntroduction;
