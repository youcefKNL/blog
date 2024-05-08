import React from "react";
import { FaCat } from "react-icons/fa";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit16.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit16 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 16 to 17</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit17.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions envoyer le flag trouvé précédemment au
            localhost qui écoute sur le port sur une plage de 31000 à 32000 à
            l'aide du cryptage SSL. <br /> On utilise dans notre cas la commande{" "}
            <strong>"nmap"{"  "}</strong>pour énumérer les ports ouverts.
            <strong>"openssl"</strong>, qui permet d'implémenter le protocole
            SSL/TLS et d'utiliser diverses outils de cryptage.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            On crée un dossier temporaire grâce à la commande{" "}
            <strong>"mktemp -d"</strong> <br />
            On crée un fichier dans lesquel nous collons la clé RSA privée. On
            envoie ce fichier avec la commande ssh sur le bon port. <br />
            Changer le chmod si besoin. On récupère le flag
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit16;
