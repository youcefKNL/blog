import React from "react";
import { useParams } from "react-router-dom";
import HtmlDisableButtons from "../challenge/webClient/HtmlDisableButton";
import JsAuthentication from "../challenge/webClient/JsAuthentication";
import JsAuthentication2 from "../challenge/webClient/JsAuthentication2";
import JsObfuscation from "../challenge/webClient/JsObfuscation";
import JsObfuscation2 from "../challenge/webClient/JsObfuscation2";
import JsSource from "../challenge/webClient/JsSource";

// Créez un objet qui mappe les ID aux composants
const components = {
  htmlDisableButtons: <HtmlDisableButtons title="HTML Disable Buttons" />,
  jsAuthentification: <JsAuthentication title="JS Authentification" />,
  jsAuthentification2: <JsAuthentication2 title="JS Authentification 2" />,
  jsObfuscation: <JsObfuscation title="JS Obfuscation" />,
  jsObfuscation2: <JsObfuscation2 title="JS Obfuscation 2" />,
  jsSource: <JsSource title="JS Source" />,
};

function IdWebClient() {
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

export default IdWebClient;
