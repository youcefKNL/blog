import React from "react";
import { useParams } from "react-router-dom";
import EthernetFrame from "./EthernetFrame";

function RootMeNetworkPage() {
  const { id } = useParams();

  // Utilisez l'ID pour déterminer quelle page afficher
  // Par exemple, si l'ID est "ethernetFrame", affichez la page EthernetFrame
  if (id === "ethernetFrame") {
    return <EthernetFrame />;
  }
  // Ajoutez d'autres conditions pour d'autres pages si nécessaire

  return <div>Page non trouvée</div>;
}

export default RootMeNetworkPage;
