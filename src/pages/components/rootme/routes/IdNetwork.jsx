import React from "react";
import { useParams } from "react-router-dom";
import EthernetFrame from "../challenge/networks/EthernetFrame";
import FtpAuthentification from "../challenge/networks/FtpAuthentification";
import TelnetAuthentification from "../challenge/networks/TelnetAuthentification";
import DnsTransfert from "../challenge/networks/DnsTransfert";
import LdapNullBind from "../challenge/networks/LdapNullBind";
import SnmpAuthentification from "../challenge/networks/SnmpAuthentification";

// Créez un objet qui mappe les ID aux composants
const components = {
  ethernetFrame: <EthernetFrame title="Ethernet Frame" />,
  ftpAuthentification: <FtpAuthentification title="FTP Autenticate" />,
  telnetAuthentification: <TelnetAuthentification title="TELNET Autenticate" />,
  dnsTransfert: <DnsTransfert title="DNS Transfert" />,
  ldapNullBind: <LdapNullBind title="LDAP Null Find" />,
  snmpAuthentification: <SnmpAuthentification title="SNMP Authentification" />,
};

function IdNetworks() {
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

export default IdNetworks;
