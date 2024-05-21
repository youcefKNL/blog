import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/1.png";
import photo2 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/2.png";
import photo3 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/3.png";
import photo4 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/4.png";
import photo5 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/5.png";
import photo6 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/6.png";
import photo7 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/7.png";
import photo8 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/8.png";
import photo9 from "../../../../../assets/rootme/Web-Serveur/Sql injection - Read File/9.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";
import Footer from "../../../Footer";
import dataLinksNetworks from "../../routes/data/dataLinksWebServer.json";

const SqlInjectionReadFile = () => {
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
            Au début du challenge, il est indiqué qu'il s'agit d'une{" "}
            <strong>injection SQL</strong>.<br />
            En se baladant sur le site, nous tombons sur des inputs dont les
            filtres ou les requêtes ont été bien protégés. <br />
            Dans l'onglet "Members", nous avons un user admin cliquable qui nous
            montre l'id, le username et l'email. <br />
            Le plus important est que l'<strong>URI</strong> comporte un
            paramètre dynamique "<strong>?action=members&id=1</strong>". Cela va
            nous servir pour sqlmap. <br />
            Avec la commande sqlmap, nous scannons le site avec l'URI dynamique
            et pour contourner la protection du site sur les demandes de
            requêtes, n'oublions pas d'utiliser le paramètre{" "}
            <strong>-random-agent</strong>. Voir plus ci-dessous: <br />
            <strong>
              sqlmap -u
              "http://challenge01.root-me.org/web-serveur/ch31/?action=members&id=1"
              -random-agent -tamper=space2comment -dbs <br />
            </strong>
            <img
              src={photo1}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Il nous a trouvé 3 bases de données MySQL MariaDb. <br />
            Avec la commande ci-dessous, nous lui demandons de montrer les
            tables que comporte cette base de données : <br />
            <strong>
              sqlmap -u
              "http://challenge01.root-me.org/web-serveur/ch31/?action=members&id=1"
              -random-agent -tamper=space2comment -D c_webserveur_31 --tables{" "}
              <br />
            </strong>
            <img
              src={photo2}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Nous lui demandons d'afficher les données comprises dans "member" :{" "}
            <br />
            <strong>
              sqlmap -u
              "http://challenge01.root-me.org/web-serveur/ch31/?action=members&id=1"
              -random-agent -tamper=space2comment -D c_webserveur_31 -T member
              --dump <br />
            </strong>
            <img
              src={photo3}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Nous récupérons bel et bien le mot de passe de l'admin, sauf que le
            flag est chiffré. Pour avoir une idée de la manière dont il a été
            chiffré, jetons un œil sur le code source. Vu que c'est une
            injection SQL, nous mettons dans l'URI <strong>index.php</strong> et
            là, pas de page 404. <br />
            Toujours pas de code source, demandons à Sqlmap de nous le récupérer
            avec : <br />
            <strong>
              sqlmap -u
              "http://challenge01.root-me.org/web-serveur/ch31/?action=members&id=1"
              -random-agent -tamper=space2comment --file-read
              /chalenge/web-serveur/ch31/index.php <br />
            </strong>
            <img
              src={photo4}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Il enregistre le code source dans le fichier indiqué.
            <img
              src={photo5}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            En analysant le code source, le chiffrement est fait en 3 étapes.
            Donc, on doit le décoder en Base64 dans un premier temps, puis le
            déchiffrer en Xor avec une clé fixe donnée dans le code et enfin le
            comparer avec un hachage SHA1.
            <img
              src={photo6}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />{" "}
            Un code écrit en PHP que je teste dans un bac à sable PHP en ligne.
            <img
              src={photo7}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />{" "}
            Une fois le code déchiffré en base64 et Xor, nous le comparons avec
            un hachage sur un outil en ligne.
            <img
              src={photo8}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Bingo, nous récupérons le flag.
            <img
              src={photo9}
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

export default SqlInjectionReadFile;
