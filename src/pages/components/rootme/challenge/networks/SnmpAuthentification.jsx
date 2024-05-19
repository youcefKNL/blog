import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/network/snmp authentication/1.png";
import photo2 from "../../../../../assets/rootme/network/snmp authentication/2.png";
import photo3 from "../../../../../assets/rootme/network/snmp authentication/3.png";
import photo4 from "../../../../../assets/rootme/network/snmp authentication/4.png";
import photo5 from "../../../../../assets/rootme/network/snmp authentication/5.png";
import photo6 from "../../../../../assets/rootme/network/snmp authentication/6.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";
import Footer from "../../../Footer";
import dataLinksNetworks from "../../routes/data/dataLinksNetworks.json";

const SnmpAuthentification = () => {
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
            <br />
            <strong>Niveau :</strong> {link.level}
            <br />
            <strong>{link.point} Points</strong>
            <br />
            <strong>Date :</strong> {link.date}
            <br />
            <br />
            Au début du challenge, il est indiqué qu'il s'agit du protocole
            réseau <strong>SNMP</strong>.<br />
            <strong>SNMP, ou Simple Network Management Protocol</strong>, est un
            protocole standard de gestion des réseaux. Il est utilisé pour
            collecter et organiser des informations sur les appareils gérés sur
            des réseaux IP et pour modifier ces informations afin de modifier le
            comportement de l'appareil. Voici quelques points clés sur SNMP :
            <img
              src={photo1}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
              style={{ maxWidth: "450px", important: "true" }}
            />
            <br />
            Nous récupérons le fichier ".pcap" qui a capturé les paquets réseau
            du protocole SNMP.
            <br />
            Le protocole SNMP v1 & v2 sont en clair tandis que la v3 utilise des
            systèmes d'algorithme de hachage.
            <br />
            Ici, nous avons un indice dans l'énoncé et nous pouvons déterminer
            selon la longueur du hash le protocole.
            <br />- <strong>MD5</strong> produit un hachage de 128 bits.
            <br />- <strong>SHA-1</strong> produit un hachage de 160 bits.
            <br />- <strong>SHA-256</strong> produit un hachage de 256 bits.
            <br />- <strong>SHA-512</strong> produit un hachage de 512 bits.
            <img
              src={photo2}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            <img
              src={photo3}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            <img
              src={photo4}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            En SNMPv3, trois éléments clés garantissent la sécurité des messages
            :
            <br />
            <strong>msgAuthoritativeEngineID</strong> :
            <br />
            <strong>Quoi</strong> : Identifiant unique de l'engine SNMP.
            <br />
            <strong>Pourquoi</strong> : Assure l'authenticité de la source.
            <br />
            <strong>msgAuthenticationParameters</strong> :
            <br />
            <strong>Quoi</strong> : Contient le hash d'authentification.
            <br />
            <strong>Pourquoi</strong> : Vérifie l'intégrité et l'authenticité du
            message.
            <br />
            <strong>Message entier</strong> :
            <br />
            <strong>Quoi</strong> : Comprend toutes les données SNMP.
            <br />
            <strong>Pourquoi</strong> : Permet de reconstituer le hachage et
            d'assurer la sécurité des données.
            <br />
            Ces éléments sont cruciaux pour analyser et sécuriser les
            communications SNMP.
            <br />
            Ici, on a trouvé un script sur GitHub qui fait le travail mais qui
            est long. Nous l'avons donc amélioré pour les performances ainsi que
            simplifié son utilisation. Voici le lien :
            <br />
            <Link
              to={"https://github.com/youcefKNL/Password_Cracker_SNMPv3"}
              target="_blank"
            >
              https://github.com/youcefKNL/Password_Cracker_SNMPv3
            </Link>
            <img
              src={photo5}
              alt={`Capture d'écran du challenge ${link.title} Root ME`}
            />
            Bingo, nous récupérons le flag.
            <img
              src={photo6}
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

export default SnmpAuthentification;
