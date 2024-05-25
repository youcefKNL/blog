import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/AST Deobfuscation/1.png";
import photo2 from "../../../../../assets/rootme/Web-Client/AST Deobfuscation/2.png";
import photo3 from "../../../../../assets/rootme/Web-Client/AST Deobfuscation/3.png";
import photo4 from "../../../../../assets/rootme/Web-Client/AST Deobfuscation/4.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";
import Footer from "../../../Footer";
import dataLinksNetworks from "../../routes/data/dataLinksWebClient.json";

const Deobfuscation = () => {
  const { id } = useParams(); // Assuming you're using react-router-dom v6

  // Find the specific link data based on the id from the URL
  const link = dataLinksNetworks.find((link) => link.id === id);

  if (!link) {
    return <div>Challenge not found</div>;
  }

  return (
    <div className={`${link.id} blogPage`}>
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>{link.title}</h1>

          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse :
            <br />
            <span>
              <Link to={link.url} target="_blank">
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <ul className="solutionHeader">
              <li>
                <strong>Niveau :</strong> {link.level}
              </li>
              <li>
                <strong>{link.point} Points</strong>
              </li>
              <li>
                <strong>Date :</strong> {link.date}
              </li>
            </ul>
            Au début du challenge, il est indiqué qu'il s'agit d'une generation
            de sensor. <br />
            La page web nous ouvre un json. Pour ma part j'ai un plugin qui
            permet de me mettre bien en forme et des couleur afin de mieux lire
            lee json.( JSONvue). <br />
            <strong>Étape 1 : Analyse du JSON</strong>
            <br />
            Le JSON fourni contenait un AST représentant du code JavaScript. Cet
            AST est une structure détaillée qui décrit la syntaxe du code source
            de manière hiérarchique. Voici un aperçu du JSON analysé :
            <ul>
              <li>
                Le code contient trois parties principales : une expression de
                fonction anonyme, une déclaration de fonction <code>l33t</code>,
                et une fonction principale <code>gen_sensor</code>.
              </li>
            </ul>
            <strong>Étape 2 : Compréhension du Code</strong>
            <ul>
              <li>
                <strong>Fonction Anonyme :</strong>
                <ul>
                  <li>
                    Initialise un tableau <code>d</code> avec des valeurs
                    spécifiques.
                  </li>
                  <li>
                    Transforme chaque élément en caractère ASCII après un
                    décalage binaire.
                  </li>
                  <li>Affiche le résultat.</li>
                </ul>
              </li>

              <li>
                <strong>
                  Fonction <code>l33t</code> :
                </strong>
                <ul>
                  <li>Affiche un message simple "vive le reverse d'AST".</li>
                </ul>
              </li>

              <li>
                <strong>
                  Fonction <code>gen_sensor</code> :
                </strong>
                <ul>
                  <li>
                    Crée un capteur en suivant plusieurs étapes de manipulation
                    et transformation de données.
                  </li>
                </ul>
              </li>
            </ul>
            <img
              src={photo1}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            <strong>Étape 3 : Déchiffrement du Code</strong>
            <br />
            On a écris ce code afin de déchiffrer :
            <img
              src={photo2}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Après exécution, le code affiche le FLAG. Cela montre que le
            processus de génération du capteur est effectivement réversible et
            que le système de HessKamai peut être déchiffré.
            <img
              src={photo3}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Bingo, nous récupérons le flag.
            <img
              src={photo4}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
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

export default Deobfuscation;
