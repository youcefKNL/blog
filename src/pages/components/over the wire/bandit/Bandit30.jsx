import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit30.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit30 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 30 to 31</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit28">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit31">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit31.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, il suffisait de cloner le dépôt Git grâce à la
            commande <strong>"git clone"</strong> suivie de l'adresse HTTP du
            dépôt. N'oubliez pas de spécifier le port après "localhost". <br />
            Vous pouvez le faire sur le serveur bandit dans le dossier{" "}
            <strong>/tmp</strong> où nous pouvons écrire.
            <br />
            Ici, le mot de passe a été dissimulé. Voici des commandes Git que
            nous allons utiliser : <br />
            <ul>
              <li>
                <strong>git tag</strong> : Les tags sont des références faciles
                à mémoriser vers des points spécifiques dans l'historique des
                commits, souvent utilisés pour marquer des versions spécifiques
                de votre code ( =étiquette ).
              </li>
              <li>
                <strong>git show</strong> : Utilisée pour afficher des
                informations sur un objet Git spécifique, tel qu'un commit, un
                tag, ou même un arbre de fichiers.
              </li>
            </ul>
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            En affichant les tags présents du dépots avec <strong>tag</strong> ,
            on tombe sur une étiquette "secret". <br />
            On affiche les informations du tag avec <strong>show</strong> .
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit30;
