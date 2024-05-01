import React from "react";

import HeaderChallenge from "./components/HeaderChallenge";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";
import { LuAppWindow } from "react-icons/lu";
import { TbShieldSearch } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa6";
import { GiServerRack } from "react-icons/gi";

import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import ParticlesContainer2 from "./components/background Effect/Particles2";

const RootMePage = () => {
  return (
    <div className="rootmePresentation">
      <HeaderChallenge />
      <ParticlesContainer2 />

      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>Root-Me Challenges</h1>
          <p>
            Bienvenue dans l'univers des challenges Root-Me. Découvrez une
            variété de défis captivants pour tester et améliorer vos compétences
            en sécurité informatique.
          </p>
          {/* Liste des challenges */}
          <h2>Liste des Challenges</h2>

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel1-content"
              id="panel1-header"
              disabled
            >
              <Typography>
                <FaFontAwesomeFlag />
                CTF
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                <LuAppWindow /> Crypto Analyse
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Shift Cipher</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography>
                <TbShieldSearch /> Web Client
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                <li>HTML - Code Source</li>
                <li>HTML - Disable Buttons</li>
                <li>HTML - Headers</li>
                <li>HTML - Ip Filtrage</li>
                <li>HTML - Open Redirect</li>
                <li>HTML - Post</li>
                <li>HTML - Redirection Invalide</li>
                <li>HTML - User Agent</li>
                <li>HTML - Verb Tampering</li>
                <li>JS - Authentification</li>
                <li>JS - Authentification 2</li>
                <li>JS - Obfuscation</li>
                <li>JS - Obfuscation 2</li>
                <li>JS - Source</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography>
                <FaNetworkWired /> Networks
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                <li>
                  <Link to="/rootme/networks/dnsTransfert">Dns Transfert</Link>
                </li>
                <li>
                  <Link to="/rootme/networks/ethernetFrame">
                    Ethernet Frame
                  </Link>
                </li>
                <li>
                  <Link to="/rootme/networks/ftpAuthentification">
                    Ftp Autenticate
                  </Link>
                </li>
                <li>
                  <Link to="/rootme/networks/telnetAuthentification">
                    Telnet Autenticate
                  </Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography>
                <GiServerRack /> Web Serveur
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                <li>File Upload - Type MIME</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default RootMePage;
