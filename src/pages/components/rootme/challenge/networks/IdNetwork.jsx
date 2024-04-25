import React from "react";
import { useParams } from "react-router-dom";
import EthernetFrame from "./EthernetFrame";
import FtpAuthentification from "./FtpAuthentification";
import TelnetAuthentification from "./TelnetAuthentification";

function RootMeNetworkPage() {
  const { id } = useParams();

  // Utilisez l'ID pour déterminer quelle page afficher
  // Par exemple, si l'ID est "ethernetFrame", affichez la page EthernetFrame
  if (id === "ethernetFrame") {
    return <EthernetFrame />;
  }
  if (id === "ftpAuthentification") {
    return <FtpAuthentification />;
  }
  if (id === "telnetAuthentification") {
    return <TelnetAuthentification />;
  }
  // Ajoutez d'autres conditions pour d'autres pages si nécessaire

  return <div>Page non trouvée</div>;
}

export default RootMeNetworkPage;
