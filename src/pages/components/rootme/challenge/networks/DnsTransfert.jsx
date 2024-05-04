import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo3 from "../../../../../assets/rootme/network/DNS-zoneTransfert/Capture d'écran 2024-04-25 205443.png";
import photo1 from "../../../../../assets/rootme/network/DNS-zoneTransfert/Capture d'écran 2024-04-25 205513.png";
import photo2 from "../../../../../assets/rootme/network/DNS-zoneTransfert/carbon.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const EthernetFrame = () => {
  return (
    <div className="dnsTransfert blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>DNS Transfert</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Network/DNS-zone-transfert"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous avons comme indices DNS Transfert ainsi
            que l'hôte, le port et le protocole :
            <img
              src={photo1}
              alt="Capture d'écran du challenge DNS Transfert Root ME"
            />
            Notre logique :
            <ul>
              <li>
                1- Identification du challenge : <br />
                Informations sur un challenge DNS concernant une zone de
                transfert.
              </li>
              <li>
                2- Utilisation de la commande <strong>dig</strong> : <br />
                Connaissant l'objectif de récupérer la zone DNS complète, on va
                utiliser la commande <strong>dig</strong> avec l'option{" "}
                <strong>"AXFR"</strong> pour interroger le serveur DNS et
                obtenir tous les enregistrements DNS associés au domaine donné.
              </li>
              <li>
                3- Analyse des résultats : <br />
                On analysera les résultats.
              </li>
            </ul>
            <img src={photo2} alt="Capture d'écran DNS Transfert Root ME" />
            Explication de la commande :
            <ul>
              <li>
                <strong>dig :</strong> permet d'effectuer une zone de transfert
                complète.
              </li>
              <li>
                <strong>@challenge01.root-me.org :</strong> Spécifie le serveur
                DNS à interroger.
              </li>
              <li>
                <strong>-p 54011 :</strong> Spécifie le port sur lequel le
                serveur DNS écoute.
              </li>
              <li>
                <strong>AXFR :</strong> Indique que vous souhaitez effectuer une
                zone de transfert complète.
              </li>
              <li>
                <strong>ch11.challenge01.root-me.org :</strong> Le domaine pour
                lequel vous souhaitez effectuer la zone de transfert.
              </li>
            </ul>
            Le DNS (Domain Name System) est comme un annuaire téléphonique pour
            Internet. Il transforme les noms de domaine, comme
            "www.example.com", en adresses IP, comme "192.168.1.1".
            <br />
            La commande{" "}
            <strong>
              dig @challenge01.root-me.org -p 54011 AXFR
              ch11.challenge01.root-me.org
            </strong>{" "}
            permet d'obtenir toutes les informations d'un domaine directement
            depuis un serveur DNS.
            <br />
            Une erreur de configuration du serveur DNS fait apparaître la secret
            key en clair. <br />
            Nous entrons la clé secrète pour voir s'il correspond au Flag
            attendu.
            <img
              src={photo3}
              alt="Capture d'écran DNS Transfert Root ME"
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

export default EthernetFrame;
