import React from "react";
import { FaCat } from "react-icons/fa";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit12.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit12 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 12 to 13</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit13.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devons trouver le "flag" dans un fichier
            hexadécimal compressé à plusieurs reprises. C'est une sorte de
            poupée russe : <br /> nous devons déterminer son type avec la
            commande <strong>"file"</strong> ,<br /> le renommer avec la bonne
            extension <strong> "mv" data(.gz/ .tar/ .bz )</strong>, <br /> puis
            le décompresser à nouveau{" "}
            <strong>("gunzip"/ "bzip2 -d"/ "tar -xvf")</strong>. <br /> Nous
            répéterons ce processus jusqu'à ce que nous trouvions un fichier
            ASCII contenant le mot de passe.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit12;
