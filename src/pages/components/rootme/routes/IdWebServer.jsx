import React from "react";
import { useParams } from "react-router-dom";
import HtmlCodeSource from "../challenge/webServer/HtmlCodeSource";
import JwtIntroduction from "../challenge/webServer/JwtIntroduction";
import HttpCookies from "../challenge/webServer/HttpCookies";
import HtmlHeaders from "../challenge/webServer/HtmlHeaders";
import HtmlIpFiltrage from "../challenge/webServer/HtmlIpFiltrage";
import HtmlOpenRedirect from "../challenge/webServer/HtmlOpenRedirect";
import HtmlPost from "../challenge/webServer/HttpPost";
import HttpRedirectionInvalide from "../challenge/webServer/HttpRedirectionInvalide";
import HttpUserAgent from "../challenge/webServer/HttpUserAgent";
import HttpVerbTampering from "../challenge/webServer/HttpVerbTampering";

// Créez un objet qui mappe les ID aux composants
const components = {
  htmlCodeSource: <HtmlCodeSource title="HTML Code Source" />,
  jwIntroduction: <JwtIntroduction title="JWT Introduction" />,
  httpcookies: <HttpCookies title="HTTP Cookie" />,

  htmlHeaders: <HtmlHeaders title="HTML Headers" />,
  htmlIpFiltrage: <HtmlIpFiltrage title="HTTP Ip Filtrage" />,
  htmlOpenRedirect: <HtmlOpenRedirect title="HTTP Open Redirect" />,
  httpPost: <HtmlPost title="HTTP Post" />,
  httpRedirectionInvalide: (
    <HttpRedirectionInvalide title="HTTP Redirection Invalide" />
  ),
  httpUserAgent: <HttpUserAgent title="HTTP User Agent" />,
  httpVerbTampering: <HttpVerbTampering title="HTML Verb Tampering" />,
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
