import React, { useEffect } from "react";

import HeaderChallenge from "./components/HeaderChallenge";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";
import { LuAppWindow } from "react-icons/lu";
import { TbShieldSearch } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa6";
import { GiServerRack } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import ParticlesContainer2 from "./components/background Effect/Particles2";
import dataLinksNetworks from "./components/rootme/routes/data/dataLinksNetworks.json";
import dataLinksCryptoAnalysis from "./components/rootme/routes/data/dataLinksCryptoAnalysis.json";
import dataLinksWebClient from "./components/rootme/routes/data/dataLinksWebClient.json";
import dataLinksWebServer from "./components/rootme/routes/data/dataLinksWebServer.json";
import dataLinksForensic from "./components/rootme/routes/data/dataLinksForensic.json";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    // behavior: "smooth",
  });
};

//loading

const RootMePage = ({ isVisible }) => {
  //Fonction scroll Top Windows au Link
  const { id } = useParams();
  useEffect(() => {
    scrollUp();
  }, [id]);

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
          {/* ****************************CTF********************************* */}
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
          {/* ****************************CRYPTO********************************* */}
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
                {dataLinksCryptoAnalysis.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/rootme/crypto-analysis/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          {/* ****************************WEB CLIENT********************************* */}
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
                {dataLinksWebClient.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/rootme/web-client/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          {/* ****************************NETWORK********************************* */}
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
                {dataLinksNetworks.map((link) => (
                  <li key={link.id}>
                    <Link to={`/rootme/networks/${link.id}`} onClick={scrollUp}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          {/* ****************************WEB SERVEUR********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography>
                <GiServerRack /> Web Serveur
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                {dataLinksWebServer.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/rootme/web-server/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          {/* ****************************FORENSIC********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <Typography>
                <FaSearch />
                Forensic
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                {dataLinksForensic.map((link) => (
                  <li key={link.id}>
                    <Link to={`/rootme/forensic/${link.id}`} onClick={scrollUp}>
                      {link.title}
                    </Link>
                  </li>
                ))}
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
