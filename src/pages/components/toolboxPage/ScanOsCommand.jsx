import React from "react";

const ScanOsCommand = () => {
  return (
    <div className="linuxCommands">
      <h2> Enumération sous Linux</h2>
      <h3>Enumération des privilèges</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Inspection manuelle :</b> Plongez dans les paramètres système ou
          utilisez des outils en ligne de commande.
        </li>
        <li>
          <b>Commandes Linux :</b> Utilisez des commandes comme <code>id</code>{" "}
          et <code>sudo -l</code>.
        </li>
        <li>
          <b>Outils tiers :</b> Des outils comme BeRoot peuvent être utilisés
          pour l'analyse post-exploitation.
        </li>
      </ul>
      <h3>Enumération des utilisateurs et des groupes</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Commandes Linux :</b> Utilisez des commandes comme{" "}
          <code>cat /etc/passwd</code> et <code>cat /etc/group</code>.
        </li>
        <li>
          <b>Outils tiers :</b> Des outils comme Enum4linux peuvent extraire des
          informations des machines Windows.
        </li>
      </ul>
      <h3>Enumération des informations système</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Commandes Linux :</b> Utilisez des commandes comme{" "}
          <code>uname -a</code>, <code>lscpu</code>, <code>lsb_release -a</code>{" "}
          et <code>df</code>.
        </li>
        <li>
          <b>Outils tiers :</b> Des outils comme Hardinfo fournissent un rapport
          complet sur le système.
        </li>
      </ul>
      <h3>Enumération du réseau et des pilotes</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Commandes Linux :</b> Utilisez des commandes comme{" "}
          <code>ifconfig</code> et <code>netstat</code>.
        </li>
        <li>
          <b>Outils Linux :</b> Des outils comme Wireshark peuvent capturer et
          analyser le trafic réseau.
        </li>
      </ul>
      <h3>Enumération des antivirus et des logiciels vulnérables</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Commandes Linux :</b> Utilisez des outils comme Chkrootkit pour
          vérifier les rootkits.
        </li>
        <li>
          <b>Outils tiers :</b> Des outils comme OpenVAS analysent les
          vulnérabilités des logiciels.
        </li>
      </ul>
      <br />
      <h3> Enumération sous Windows</h3>
      <h2>Enumération des privilèges</h2>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Commandes intégrées à Windows :</b> Utilisez des commandes comme{" "}
          <code>whoami /priv</code> et <code>net user &lt;username&gt;</code>.
        </li>
        <li>
          <b>Outils tiers :</b> Des outils comme Windows-Exploit-Suggester
          comparent le niveau de correctifs de Windows avec les vulnérabilités.
        </li>
      </ul>
      <h3>Enumération des utilisateurs et des groupes</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Informations Windows :</b> Utilisez des commandes comme{" "}
          <code>net user</code> et <code>net localgroup</code>.
        </li>
        <li>
          <b>Outils tiers :</b> Des outils comme Hydra peuvent être utilisés
          pour énumérer les utilisateurs valides sur un système.
        </li>
      </ul>
      <h3>Enumération des informations système</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Chroniques Windows :</b> Utilisez des commandes comme{" "}
          <code>systeminfo</code> et <code>wmic</code>.
        </li>
        <li>
          <b>Outils Windows :</b> Des outils comme CPU-Z et Speccy fournissent
          des profils système détaillés.
        </li>
      </ul>
      <h3>Enumération du réseau et des pilotes</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Chroniques réseau :</b> Utilisez des commandes comme{" "}
          <code>ipconfig</code> et <code>netstat</code>.
        </li>
        <li>
          <b>Outils Windows :</b> Le Gestionnaire de périphériques affiche tous
          les pilotes matériels installés.
        </li>
      </ul>
      <h3>Enumération des antivirus et des logiciels vulnérables</h3>
      <ul>
        <h4>Techniques et Outils :</h4>
        <li>
          <b>Vérification du roster des gardes :</b> Utilisez des outils comme
          le Centre de sécurité Windows.
        </li>
        <li>
          <b>Repérage des murs faibles :</b> Des outils comme Secunia PSI
          identifient et corrigent les applications logicielles vulnérables.
        </li>
      </ul>
      <h3>Outils Communs :</h3>
      Linux : Enum4linux, Hydra, Chkrootkit, OpenVAS Windows :
      Windows-Exploit-Suggester, Hydra, CPU-Z, Speccy
    </div>
  );
};

export default ScanOsCommand;
