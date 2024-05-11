import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit26.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit26 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 26 to 27</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit25">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit27">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit27.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions accéder à bandit26 grâce aux niveaux
            précédents. Si vous n'avez pas encore résolu l'exercice, vous pouvez
            refaire la manipulation du niveau précédent, bandit25. <br /> Nous
            avons trouvé un fichier avec le bit "SUID", ce qui signifie qu'il
            sera exécuté avec les permissions du propriétaire, qui est bandit27.{" "}
            <br /> En testant ce fichier, nous avons remarqué qu'il attend des
            commandes en paramètre, comme "id". <br /> Nous avons testé avec les
            commandes "whoami" avec et sans le SUID pour voir la différence des
            réponses. <br />
            Nous en avons conclu qu'il exécute effectivement les commandes en
            tant que bandit27. <br /> Ainsi, nous pouvons récupérer le flag à
            l'endroit habituel.
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

export default Bandit26;
