import React from "react";
import { useParams } from "react-router-dom";
import HtmlDisableButtons from "../challenge/webClient/HtmlDisableButton";
import JsAuthentication from "../challenge/webClient/JsAuthentication";
import JsAuthentication2 from "../challenge/webClient/JsAuthentication2";
import JsObfuscation from "../challenge/webClient/JsObfuscation";
import JsObfuscation2 from "../challenge/webClient/JsObfuscation2";
import JsSource from "../challenge/webClient/JsSource";
import JsNativeCode from "../challenge/webClient/JsNativeCode";
import JsWebpack from "../challenge/webClient/JsWebpack";
import JsObfuscation3 from "../challenge/webClient/JsObfuscation3";
import XssStocké1 from "../challenge/webClient/XssStocké1";

// Créez un objet qui mappe les ID aux composants
const components = {
  htmlDisableButtons: <HtmlDisableButtons title="HTML Disable Buttons" />,
  jsAuthentification: <JsAuthentication title="JS Authentification" />,
  jsAuthentification2: <JsAuthentication2 title="JS Authentification 2" />,
  jsObfuscation: <JsObfuscation title="JS Obfuscation" />,
  jsObfuscation2: <JsObfuscation2 title="JS Obfuscation 2" />,
  jsSource: <JsSource title="JS Source" />,
  jsNativeCode: <JsNativeCode title="JS Native Code" />,
  jsWebpack: <JsWebpack title="JS WebPack" />,
  jsObfuscation3: <JsObfuscation3 title="JS Obfuscation 3" />,
  xssStockée1: <XssStocké1 title="XSS - Stockée 1" />,
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
