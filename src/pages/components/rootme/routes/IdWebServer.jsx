import React from "react";
import { useParams } from "react-router-dom";
import HtmlCodeSource from "../challenge/webServer/HtmlCodeSource";

// Créez un objet qui mappe les ID aux composants
const components = {
  htmlCodeSource: <HtmlCodeSource title="HTML Code Source" />,

  // htmlHeaders: <HtmlHeaders title="HTML Headers" />,
  // htmlIpFiltrage: <HtmlIpFiltrage title="HTML Ip Filtrage" />,
  // htmlOpenRedirect: <HtmlOpenRedirect title="HTML Open Redirect" />,
  // htmlPost: <HtmlPost title="HTML Post" />,
  // htmlRedirectionInvalide: (
  //   <HtmlRedirectionInvalide title="HTML Redirection Invalide" />
  // ),
  // htmlUserAgent: <HtmlUserAgent title="HTML User Agent" />,
  // htmlVerbTampering: <HtmlVerbTampering title="HTML Verb Tampering" />,
};

function IdWebServer() {
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

export default IdWebServer;
