import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit5.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit5 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 5 to 6</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit4">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit6">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit6.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce challenge, au début, nous devons trouver le "flag" dans le
            seul fichier qui peut être lu :
            <ul>
              <li>par un humain</li>
              <li>taille de 1033 bytes (=1033 octets)</li>
              <li>pas un .exe</li>
            </ul>
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            Dans cette commande, nous cherchons un fichier de type "files"(-type
            f) avec une taille spécifique (-size 1033c), non executable avec
            "!"(! -executable), il réitére sur chaque fichier trouvé (-exec file{" "}
            {} +) et filtre les résultats pour n'afficher que le fichier lisible
            par l'homme(grep "ASCII text)
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit5;
