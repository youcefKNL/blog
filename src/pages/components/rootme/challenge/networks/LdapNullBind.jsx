import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/network/Ldap nullBind/1.png";
import photo2 from "../../../../../assets/rootme/network/Ldap nullBind/2.png";
import photo3 from "../../../../../assets/rootme/network/Ldap nullBind/3.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";
import Footer from "../../../Footer";
import dataLinksNetworks from "../../routes/data/dataLinksNetworks.json";

const LdapNullBind = () => {
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
            Vous trouverez l'énoncé et le challenge à cette adresse :<br />
            <span>
              <Link to={link.url} target="_blank">
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            <ul>
              <li>Niveau : {link.level}</li>
              <li>{link.point} Points</li>
              <li>Date : {link.date}</li>
            </ul>
            Au début du challenge, il est indiqué qu'il s'agit du protocole
            réseaux <strong>LDAP</strong> <br />
            <strong>LDAP, ou Lightweight Directory Access Protocol</strong> ,
            est un protocole réseau utilisé pour accéder et gérer des services
            d'annuaire distribués. Ces services d'annuaire sont souvent utilisés
            pour stocker des informations sur les utilisateurs, les groupes, les
            ordinateurs, les imprimantes et d'autres objets dans un réseau. Les
            informations sont organisées dans une structure hiérarchique qui
            peut être naviguée et interrogée à l'aide de requêtes LDAP.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Shift cipher Root ME"
            />
            Utilisez la commande suivante pour interroger l'annuaire LDAP :
            <br />
            <strong>
              "ldapsearch -x -b "ou=anonymous,dc=challenge01,dc=root-me,dc=org"
              -H ldap://challenge01.root-me.org:54013"
            </strong>{" "}
            <br />
            Explications : <br /> <code>-x</code> : Utilise l'authentification
            simple. <br />
            <code>-b "ou=anonymous,dc=challenge01,dc=root-me,dc=org"</code> :
            Spécifie la base de recherche. Cela indique à la commande où
            commencer la recherche dans l'arborescence de l'annuaire LDAP.
            <br />
            <code>-H ldap://challenge01.root-me.org:54013</code> : Spécifie
            l'URL du serveur LDAP avec le protocole LDAP et le port. Cela
            indique à la commande où se trouve le serveur LDAP et sur quel port
            elle doit se connecter.
            <img src={photo2} alt="Capture d'écran Shift cipher Root ME" />
            Bingo, nous récupérons le flag.
            <img
              src={photo3}
              alt="Capture d'écran Shift cipher Root ME"
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

export default LdapNullBind;
