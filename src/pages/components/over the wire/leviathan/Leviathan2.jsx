import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/leviathan/leviathan2.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Leviathan2 = () => {
  return (
    <div className="leviathan blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Léviathan : Level 2 to 3</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/leviathan/leviathan1">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/leviathan/leviathan3">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/leviathan/"
                target="_blank"
              >
                Over The Wire Wargame - Léviathan - <FaCat />
              </Link>
            </span>
            <br />
            Pour les challenges Léviathan, il n'y a pas de consignes pour chaque
            niveau. <br />
            Donc, c'est à nous d'essayer de comprendre où pourrait être le FLAG.{" "}
            <br />
            Ici, on a un fichier <strong>SUID</strong> qui s'exécute en tant que
            leviathan3 par leviathan2. <br />
            En lançant l'exécutable, il attend un nom de fichier en retour.{" "}
            <br />
            Pour analyser cet exécutable, on peut utiliser la commande{" "}
            <strong>ltrace</strong> qui permet de déboguer en traçant les appels
            aux fonctions. Elle intercepte et affiche les appels aux fonctions.{" "}
            <br />
            Ici, la fonction prend le nom du fichier et fait appel à une
            librairie acces() qui vérifie si le nom existe bien à l'emplacement
            indiqué. <br />
            Si <strong>oui (réponse 0)</strong>, elle continue son programme en
            lançant le <strong>/bin/cat</strong> en tant que leviathan3 sur le
            contenu du fichier. <br />
            Si <strong>non (réponse -1)</strong>, elle arrête son programme.
            <br />
            En test, nous avons mis un séparateur de commande dans le nom d'un
            fichier pour observer son comportement. <br />
            Le SUID <strong>~/printfile</strong> a exécuté la commande "flag"
            qui a été refusée car nous n'avons pas les droits en tant que
            leviathan3 sur les fichiers leviathan2. <strong>Puis</strong>, il a
            exécuté la commande <strong>bash / sh / ls / whoami</strong> que
            j'ai mise en test. <br />
            Avec bash ou sh, la permission d'accès à flag a été refusée et m'a
            donné le shell de leviathan3. <br />
            Ensuite, on récupère à l'endroit habituel.
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

export default Leviathan2;
