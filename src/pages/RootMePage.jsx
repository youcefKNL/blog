import React from "react";
import { FaHome } from "react-icons/fa";

import HeaderChallenge from "./components/HeaderChallenge";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";
import { LuAppWindow } from "react-icons/lu";
import { TbShieldSearch } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa6";

import Background from "./components/Background";
// import { Accordion, Placeholder } from "rsuite";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Fade from "@mui/material/Fade";

const RootMePage = () => {
  //accordéons options
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="rootmePresentation">
      <HeaderChallenge />
      <Background />
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

          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              CTF
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <LuAppWindow /> App - Script
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <TbShieldSearch /> Stéganographie
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <FaNetworkWired /> Networks
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                <li>
                  <a href="networks/dnsTransfert">Dns Transfert</a>
                </li>
                <li>
                  <a href="networks/ethernetFrame">Ethernet Frame</a>
                </li>
                <li>
                  <a href="networks/ftpAuthentification">Ftp Autenticate</a>
                </li>
                <li>
                  <a href="networks/telnetAuthentification">
                    Telnet Autenticate
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaHome />}
              aria-controls="panel3-content"
              id="panel3-header"
              disabled
            >
              test
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                <li>Inactif</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </LayoutArticleBlog>

        <Lexical />
      </div>
    </div>
  );
};

export default RootMePage;
