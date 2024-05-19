import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Forensic/deleted File/1.png";
import photo2 from "../../../../../assets/rootme/Forensic/deleted File/2.png";
import photo3 from "../../../../../assets/rootme/Forensic/deleted File/3.png";
import photo4 from "../../../../../assets/rootme/Forensic/deleted File/4.png";
import photo5 from "../../../../../assets/rootme/Forensic/deleted File/5.png";
import photo6 from "../../../../../assets/rootme/Forensic/deleted File/6.png";
import photo7 from "../../../../../assets/rootme/Forensic/deleted File/7.png";
import photo8 from "../../../../../assets/rootme/Forensic/deleted File/8.png";
import photo9 from "../../../../../assets/rootme/Forensic/deleted File/9.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";
import Footer from "../../../Footer";
import dataLinksForensic from "../../routes/data/dataLinksForensic.json";

const DeletedFile = () => {
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
              <li>Niveau : {link.level}</li>
              <li>{link.point} Points</li>
              <li>Date : {link.date}</li>
            </ul>
            Au début du challenge, il est indiqué qu'il s'agit d'un fichier
            supprimé. <br />
            Dans un premier temps, nous décompressons et montons la clé USB :
            <img
              src={photo1}
              alt="Capture d'écran du challenge Shift cipher Root ME"
            />
            Grâce à l'outil <strong>testDisk</strong>, nous pouvons analyser et
            trouver si des données ont été supprimées.
            <img src={photo2} alt="Capture d'écran Shift cipher Root ME" />
            <img src={photo3} alt="Capture d'écran Shift cipher Root ME" />
            <img src={photo4} alt="Capture d'écran Shift cipher Root ME" />
            <img src={photo5} alt="Capture d'écran Shift cipher Root ME" />
            <img src={photo6} alt="Capture d'écran Shift cipher Root ME" />
            Après avoir récupéré le fichier supprimé, nous constatons qu'il
            s'agit d'une image. Rien de visuel pour le flag, nous nous penchons
            alors sur les métadonnées générées lors de la prise de vue grâce à{" "}
            <strong>exiftool</strong>.
            <img src={photo7} alt="Capture d'écran Shift cipher Root ME" />
            <img src={photo8} alt="Capture d'écran Shift cipher Root ME" />
            Bingo, nous récupérons le résultat.
            <img
              src={photo9}
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

export default DeletedFile;
