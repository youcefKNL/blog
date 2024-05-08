import React from "react";
import { FaCat } from "react-icons/fa";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit15.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit15 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 15 to 16</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit16.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions envoyer le flag trouvé précédemment au
            localhost qui écoute sur le port 30001 à l'aide du cryptage SSL.{" "}
            <br /> On utilise dans notre cas la commande{" "}
            <strong>"openssl"</strong>, qui permet d'implémenter le protocole
            SSL/TLS et d'utiliser diverses outils de cryptage.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            <strong>"s_client -connect"</strong> : cette commande OpenSSL
            indique à OpenSSL de fonctionner en tant que client SSL et de se
            connecter à un serveur distant sur un port spécifié. <br /> Cette
            chaîne est envoyée au serveur et peut être interprétée comme une
            tentative de soumission d'un mot de passe. <br /> L'option -quiet
            (ou -ign_eof) est utilisée pour exécuter la commande en mode
            silencieux, sans afficher d'informations supplémentaires.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit15;
