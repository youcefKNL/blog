import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit25.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit25 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 25 to 26</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit24">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit26">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit26.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions nous connecter à bandit26 grâce à la clé
            privée RSA dans le dossier. <br /> Cependant, la connexion se ferme
            à la fin. Pourquoi ? <br />
            Nous avons vérifié le type de shell utilisé par bandit26 avec la
            commande :<strong> "cat /etc/passwd" </strong>. <br />
            Nous avons remarqué qu'il n'utilise pas /bin/bash mais
            /bin/showtext. Nous avons donc vérifié à quoi correspond ce script
            avec :<strong> "cat /usr/bin/showtext" </strong>. <br />
            Le script ouvre un fichier .txt avec la commande{" "}
            <strong> "more" </strong> et à la fin il quitte. <br />
            <strong>"More"</strong> est un programme d'affichage de fichiers
            texte par pages dans les systèmes Unix. <br /> Pour pouvoir toujours
            garder le script actif, nous devons le stopper avant la fin du
            texte, sauf que le texte est petit. <br />
            La solution est de réduire la taille de la fenêtre pour passer en
            mode interactif. <br /> Vim est maintenant ouvert. Dans Vim, nous
            avons utilisé la commande <strong> ":shell" </strong>, mais avant
            cela, nous avons défini le shell comme{" "}
            <strong> "/bin/bash" </strong> pour contourner le shell de bandit26
            qui est <strong> "/bin/showtext" </strong>, avec la commande :{" "}
            <strong> ":set shell=/bin/bash" </strong>. <br />
            Une fois sous shell, nous avons capturé le FLAG à son emplacement
            habituel !
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

export default Bandit25;
