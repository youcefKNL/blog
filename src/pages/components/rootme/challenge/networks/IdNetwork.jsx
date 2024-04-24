import { Navigate, useParams } from "react-router-dom";

function IdNetwork() {
  const { id } = useParams(); // Récupère l'ID de l'URL

  // Redirection en fonction de l'ID
  if (id === "1") {
    return <Navigate to="/rootme/networks/ethernetFrame" />;
  }

  // Simulation de données statiques pour les détails du réseau Ethernet
  const networks = {
    1: {
      id: "ethernetFrame",
      name: "Réseau Ethernet 1",
      description: "Description du réseau 1",
    },
    2: {
      id: "2",
      name: "Réseau Ethernet 2",
      description: "Description du réseau 2",
    },
    3: {
      id: "3",
      name: "Réseau Ethernet 3",
      description: "Description du réseau 3",
    },
  };

  const networkDetails = networks[id];

  if (!networkDetails) {
    return <div>Le réseau Ethernet avec l'ID {id} n'existe pas.</div>;
  }

  return (
    <div>
      <h2>Détails du réseau Ethernet</h2>
      <p>ID du réseau : {networkDetails.id}</p>
      <p>Nom du réseau : {networkDetails.name}</p>
      <p>Description du réseau : {networkDetails.description}</p>
    </div>
  );
}

export default IdNetwork;
