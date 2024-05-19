import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Forensic/exfiltration Dns/1.png";
import photo2 from "../../../../../assets/rootme/Forensic/exfiltration Dns/2.png";
import photo3 from "../../../../../assets/rootme/Forensic/exfiltration Dns/3.png";
import photo4 from "../../../../../assets/rootme/Forensic/exfiltration Dns/4.png";
import photo5 from "../../../../../assets/rootme/Forensic/exfiltration Dns/5.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";
import Footer from "../../../Footer";
import dataLinksForensic from "../../routes/data/dataLinksForensic.json";

const DnsExfiltration = () => {
  const { id } = useParams(); // Assuming you're using react-router-dom v6

  // Find the specific link data based on the id from the URL
  const link = dataLinksForensic.find((link) => link.id === id);

  if (!link) {
    return <div>Challenge not found</div>;
  }

  return (
    <div className="exfiltrationDns blogPage">
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
              <li> Level: {link.level}</li>
              <li>{link.point} Points</li>
              <li>Date:{link.date}</li>
            </ul>
            Au début du challenge, il est indiqué qu'il s'agit d'exfiltration de
            données via le DNS. Pour cela, on ouvre le fichier .pcap (utilisé
            pour enregistrer les paquets de réseau capturés) :
            <img
              src={photo1}
              alt="Capture d'écran du challenge Shift cipher Root ME"
            />
            <img src={photo2} alt="Capture d'écran Shift cipher Root ME" />
            <img src={photo3} alt="Capture d'écran Shift cipher Root ME" />
            On essaie de déchiffrer les données depuis l'hexadécimal et on
            s'aperçoit qu'un fichier <strong>flag.png</strong> a été créé avec{" "}
            <strong>GIMP</strong>. Pour transformer toutes les données et
            extraire uniquement celles concernant le PNG afin de le
            reconstituer, on trouve des scripts sur GitHub qui font très bien
            cela :<br />
            <Link
              to={"https://github.com/Cyber-Experts/DNSCat-PNG-Extractor"}
              target="_blank"
            >
              Code de Florian Namette
            </Link>
            <img src={photo4} alt="Capture d'écran Shift cipher Root ME" />
            Bingo, on récupère le résultat.
            <img
              src={photo5}
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

export default DnsExfiltration;
