import React from "react";
import { useParams } from "react-router-dom";
import Bandit0 from "../bandit/Bandit0";
import Bandit1 from "../bandit/Bandit1";
import Bandit2 from "../bandit/Bandit2";
import Bandit3 from "../bandit/Bandit3";
import Bandit4 from "../bandit/Bandit4";
import Bandit5 from "../bandit/Bandit5";
import Bandit6 from "../bandit/Bandit6";
import Bandit7 from "../bandit/Bandit7";
import Bandit8 from "../bandit/Bandit8";
import Bandit9 from "../bandit/Bandit9";
import Bandit10 from "../bandit/Bandit10";
import Bandit11 from "../bandit/Bandit11";
import Bandit12 from "../bandit/Bandit12";
import Bandit13 from "../bandit/Bandit13";
import Bandit14 from "../bandit/Bandit14";
import Bandit15 from "../bandit/Bandit15";
import Bandit16 from "../bandit/Bandit16";
import Bandit17 from "../bandit/Bandit17";
import Bandit18 from "../bandit/Bandit18";
import Bandit19 from "../bandit/Bandit19";
import Bandit20 from "../bandit/Bandit20";

// Créez un objet qui mappe les ID aux composants
const components = {
  bandit0: <Bandit0 title="Bandit Lvl 0" />,
  bandit1: <Bandit1 title="Bandit Lvl 1" />,
  bandit2: <Bandit2 title="Bandit Lvl 2" />,
  bandit3: <Bandit3 title="Bandit Lvl 3" />,
  bandit4: <Bandit4 title="Bandit Lvl 4" />,
  bandit5: <Bandit5 title="Bandit Lvl 5" />,
  bandit6: <Bandit6 title="Bandit Lvl 6" />,
  bandit7: <Bandit7 title="Bandit Lvl 7" />,
  bandit8: <Bandit8 title="Bandit Lvl 8" />,
  bandit9: <Bandit9 title="Bandit Lvl 9" />,
  bandit10: <Bandit10 title="Bandit Lvl 10" />,
  bandit11: <Bandit11 title="Bandit Lvl 11" />,
  bandit12: <Bandit12 title="Bandit Lvl 12" />,
  bandit13: <Bandit13 title="Bandit Lvl 13" />,
  bandit14: <Bandit14 title="Bandit Lvl 14" />,
  bandit15: <Bandit15 title="Bandit Lvl 15" />,
  bandit16: <Bandit16 title="Bandit Lvl 16" />,
  bandit17: <Bandit17 title="Bandit Lvl 17" />,
  bandit18: <Bandit18 title="Bandit Lvl 18" />,
  bandit19: <Bandit19 title="Bandit Lvl 19" />,
  bandit20: <Bandit20 title="Bandit Lvl 20" />,
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
