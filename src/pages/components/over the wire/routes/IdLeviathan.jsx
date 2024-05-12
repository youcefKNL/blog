import React from "react";
import { useParams } from "react-router-dom";
import Leviathan0 from "../leviathan/Leviathan0";
import Leviathan1 from "../leviathan/Leviathan1";
import Leviathan2 from "../leviathan/Leviathan2";
import Leviathan3 from "../leviathan/Leviathan3";
import Leviathan4 from "../leviathan/Leviathan4";
import Leviathan5 from "../leviathan/Leviathan5";
import Leviathan6 from "../leviathan/Leviathan6";

// Créez un objet qui mappe les ID aux composants
const components = {
  leviathan0: <Leviathan0 title="Leviathan Lvl 0" />,
  leviathan1: <Leviathan1 title="Leviathan Lvl 1" />,
  leviathan2: <Leviathan2 title="Leviathan Lvl 2" />,
  leviathan3: <Leviathan3 title="Leviathan Lvl 3" />,
  leviathan4: <Leviathan4 title="Leviathan Lvl 4" />,
  leviathan5: <Leviathan5 title="Leviathan Lvl 5" />,
  leviathan6: <Leviathan6 title="Leviathan Lvl 6" />,
};

function IdBandit() {
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

export default IdBandit;
