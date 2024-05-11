import React from "react";
import Terminal from "react-bash";
import MyBashTerminal from "./components/Terminal/MyBashTerminal";
import ParticleContainer from "./components/background Effect/ParticlesHeader";

const About = ({ aboutHistory }) => {
  /////////////////////COMMANDE BASH/////////////////////////////////////////
  const echo = {
    exec: ({ structure, cwd, history }, args) => {
      const message = args._.join(" ");
      return {
        structure,
        cwd,
        history: history.concat({ value: message }),
      };
    },
  };

  const sudo = {
    exec: ({ structure, history, cwd }) => {
      return {
        structure,
        cwd,
        history: history.concat({ value: "Nice try... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)" }),
      };
    },
  };

  // const open = {
  //   exec: ({ structure, state, history }, command) => {
  //     const parsedCommand = command.split(" ");
  //     const fileName = parsedCommand[1];

  //     if (fileName === "resume.pdf") {
  //       window.open(
  //         "https://github.com/kylegrantlucas/resume/raw/master/output/kyle_modern.pdf"
  //       );
  //     }

  //     return { structure, state, history };
  //   },
  // };

  // const custom = {
  //   exec: ({ structure, cwd, history }, args) => {
  //     const result = "";
  //     return {
  //       structure,
  //       cwd,
  //       history: history.concat({ value: result }),
  //     };
  //   },
  // };

  const extensions = { echo, sudo };

  //////////////////////////////////STRUCURE DES DOSSIER/////////////////////////////////////
  const structure = {
    home: {
      youcef: {
        "linkedin.txt": { content: "https://www.linkedin.com/in/youcef-knl/" },
        "github.txt": { content: "https://github.com/youcefKNL" },
        directory: {
          subfile: { content: "Subfile content" },
        },
      },
    },
  };

  //////////////////////////////MESSAGE DE DEBUT /////////////////////////////////////////////
  const history = [
    {
      value: (
        <div>
          <p>Bienvenue dans mon terminal. :)</p>
          <br />
          <p>
            Je suis Khenichil Youcef, un codeur passionné par la cybersécurité.
          </p>
          <br />
          <p>
            {" "}
            N'hésitez pas à consulter mon portfolio et à me contacter sur{" "}
            LinkedIn .
          </p>
          <br />
          <p>CTF time... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)</p>
          <p>
            A vous de trouver le ou les flags {"=>"} FLAG
            {"{**************} "}
          </p>
          <br />
          {/* <ul>
            <li>
              <code>ls</code> - list all files & directories
            </li>
            <li>
              <code>ls work/previous</code> - list files about my previous work
            </li>
            <li>
              <code>ls projects</code> - list files about my projects
            </li>
            <li>
              <code>open resume.pdf</code> - Open my resume
            </li>
            <li>
              <code>cat work/current/fender.md</code> - View information about
              my current work
            </li>
            <li>
              <code>cat projects/go/plex-latmetric.md</code> - View information
              about my plex-lametric project
            </li>
          </ul> */}
        </div>
      ),
    },
  ];
  // const aboutHistory = [
  //   {
  //     value: (
  //       <div>
  //         <p>Informations spécifiques à la page "About".</p>
  //         {/* Ajoutez d'autres messages spécifiques à la page "About" si nécessaire */}
  //       </div>
  //     ),
  //   },
  // ];
  return (
    <div className="about">
      <ParticleContainer />
      <Terminal
        prefix="root@youcef"
        extensions={extensions}
        structure={structure}
        history={history}
        theme={Terminal.Themes.DARK}
      />
    </div>
  );
};

export default About;
