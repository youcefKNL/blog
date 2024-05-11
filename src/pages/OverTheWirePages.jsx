import React, { useEffect } from "react";

import HeaderChallenge from "./components/HeaderChallenge";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { SiPowershell } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import ParticlesContainer2 from "./components/background Effect/Particles2";
// import dataLinksNetworks from "./components/rootme/routes/data/dataLinksNetworks.json";
// import dataLinksCryptoAnalysis from "./components/rootme/routes/data/dataLinksCryptoAnalysis.json";
// import dataLinksWebClient from "./components/rootme/routes/data/dataLinksWebClient.json";
import dataLinksLeviathan from "./components/over the wire/routes/data/dataLinksLeviathan.json";
import dataLinksBandit from "./components/over the wire/routes/data/dataLinksBandits.json";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    // behavior: "smooth",
  });
};

//loading

const OverTheWirePages = ({ isVisible }) => {
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
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>Over The Wire</h1>
          <p>
            Bienvenue dans l'univers des challenges Over The wire. Mettons en
            pratique les concepts de sécurité sous forme de WarGame on Shell.
          </p>
          <br />
          <span className="links">
            {" "}
            <Link to={`https://overthewire.org/wargames/`}>
              https://overthewire.org/wargames/
            </Link>
          </span>

          {/* Liste des challenges */}
          <h2>Liste des Challenges :</h2>
          {/* ****************************BANDIT********************************* */}
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>
                <SiPowershell />
                Bandit
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {dataLinksBandit.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/bandit/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          {/* ****************************NATAS********************************* */}
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel2-content"
              id="panel2-header"
              disabled
            >
              <Typography>
                <SiPowershell />
                Natas
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <ul>
                {dataLinksNatas.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/natas/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>
          {/* ****************************LEVIATHAN********************************* */}
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography>
                <SiPowershell />
                Léviathan
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                {dataLinksLeviathan.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/leviathan/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          {/* ****************************KRYPTON********************************* */}
          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel4-content"
              id="panel4-header"
              disabled
            >
              <Typography>
                <SiPowershell />
                Krypton
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksKrypton.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/krypton/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>
          {/* ****************************NARNIA********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel5-content"
              id="panel5-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Narnia
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>

          {/* ****************************BEHEMOT********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel6-content"
              id="panel6-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Behemot
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>
          {/* ****************************UTUMNO********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel7-content"
              id="panel7-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Utumno
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>

          {/* ****************************MAZE********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel8-content"
              id="panel8-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Maze
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>

          {/* ***************************VORTEX********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel9-content"
              id="panel9-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Vortex
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>

          {/* ****************************MANPAGE********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel10-content"
              id="panel10-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Manpage
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>

          {/* ****************************DRIFTER********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel11-content"
              id="panel11-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Drifter
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>

          {/* ****************************FORMULA ONE********************************* */}

          <Accordion>
            <AccordionSummary
              expandIcon={<PiArrowFatLineDownFill />}
              aria-controls="panel12-content"
              id="panel12-header"
              disabled
            >
              <Typography>
                <SiPowershell /> Formula One
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {/* <ul>
                {dataLinksNarnia.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/overthewire/narnia/${link.id}`}
                      onClick={scrollUp}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </AccordionDetails>
          </Accordion>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default OverTheWirePages;
