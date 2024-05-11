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

  const contact = {
    exec: ({ structure, state, history }, command) => {
      const parsedCommand = history[1].value.split(" ");
      const fileName = parsedCommand[1];

      if (fileName === "youcef") {
        return (
          window.open("https://www.linkedin.com/in/youcef-knl/"),
          structure,
          state,
          history
        );
      }
    },
  };

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

  const extensions = { echo, sudo, contact };

  //////////////////////////////////STRUCURE DES DOSSIER/////////////////////////////////////
  const structure = {
    home: {
      youcef: {
        "flag.txt": {
          content:
            "Ceci est un leurre :). Vous trouverez un indice dans le fichier caché dans ce dossier. (bonus commmande -> ls -a) (͠≖ ͜ʖ͠≖)",
        },
        ".hidden": {
          content:
            "Le flag se trouve dans le dossier khenichil_5/khenichil_youcef/flag.txt, et contient des informations importantes pour prendre contact avec l'admin. (͡• ͜ʖ ͡•)",
        },
        private: {
          khenichil_0: {
            "flag.txt": {
              content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
              },
            },
          },
          khenichil_1: {
            "flag.txt": {
              content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
              },
            },
          },
          khenichil_2: {
            "flag.txt": {
              content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
              },
            },
          },
          khenichil_3: {
            "flag.txt": {
              content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
              },
            },
          },
          khenichil_4: {
            "flag.txt": {
              content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
              },
            },
          },
          khenichil_5: {
            "flag.txt": {
              content: "Vous y êtes presque.(͡• ͜ʖ ͡•)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: `Bravo! Maintenant que vous savez écrire mon nom et prénom :). Voici le Flag FLAG{contact_moi_sur_Linkedin_*_Le_lien_à_la_page_d_acceuil}  (͡• ͜ʖ ͡•) `,
              },
            },
          },
          khenichil_6: {
            "flag.txt": {
              content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
              },
            },
          },
          khenichil_7: {
            "flag.txt": {
              content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
            },
            khenichil_youcef: {
              "flag.txt": {
                content: "Vous êtes sur la mauvaise route.(⊙.⊙(◉̃_᷅◉)⊙.⊙)",
              },
            },
          },
          "indice.txt": {
            content:
              "Le mieux est de prendre le temps et de récupérer la destination finale du flag en lisant bien le contenu de flag.txt dans le dossier ../youcef (si ce n'est pas déjà fait (͡• ͜ʖ ͡•)",
          },
        },
      },
      "readme.md": {
        content: `Continuez l'exploration, le prochain indice dans le dossier "youcef" ≧◉◡◉≦`,
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
            LinkedIn :
          </p>
          <p>Commande pour me contacter: `contact youcef`</p>
          <br />
          <p>CTF time... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)</p>

          <p>Commande disponible : toutes les commandes de base unix.</p>

          <p>
            A vous de trouver le ou les flags {"=>"} FLAG
            {"{**************} "}
          </p>
          <br />
        </div>
      ),
    },
  ];

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
