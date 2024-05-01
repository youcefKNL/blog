import React from "react";
import { useParams } from "react-router-dom";
import ShiftCipher from "../challenge/cryptoAnalyse/ShiftCipher";

// Créez un objet qui mappe les ID aux composants
const components = {
  shiftCipher: <ShiftCipher title="SHIFT Cipher" />,
};

function IdCryptoAnalysis() {
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

export default IdCryptoAnalysis;
