import React from "react";
import { useParams } from "react-router-dom";
import DnsExfiltration from "../challenge/forensic/DnsExfiltration";
import DeletedFile from "../challenge/forensic/DeletedFile";

// Créez un objet qui mappe les ID aux composants
const components = {
  exfiltrationDns: <DnsExfiltration title="DNS Exfiltration" />,
  deletedFile: <DeletedFile title="Deleted File" />,
};

function IdForensic() {
  const { id } = useParams();

  // Utilisez l'ID pour récupérer le composant correspondant dans l'objet
  const selectedComponent = components[id];

  // Vérifiez si le composant sélectionné existe, sinon affichez un message d'erreur
  if (selectedComponent) {
    return selectedComponent;
  } else {
    return <div>Page non trouvée</div>;
  }
}

export default IdForensic;
