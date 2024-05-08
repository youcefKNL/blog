import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./pages/components/HeaderNavigation";
import Home from "./pages/Home";
import Challenge from "./pages/Challenge";
import RootMePage from "./pages/RootMePage";
import Exif from "./pages/components/rootme/challenge/stéganographie/Exif";
import IdNetwork from "./pages/components/rootme/routes/IdNetwork";
import IdCryptoAnalysis from "./pages/components/rootme/routes/IdCryptoAnalysis";
import IdWebClient from "./pages/components/rootme/routes/IdWebClient";
import IdWebServer from "./pages/components/rootme/routes/IdWebServer";
import OverTheWirePages from "./pages/OverTheWirePages";
import IdBandit from "./pages/components/over the wire/routes/IdBandit";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Header />

      <Routes key={location.pathname} location={location} initial={false}>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/rootme" element={<RootMePage />} />
        <Route path="/overthewire" element={<OverTheWirePages />} />
        <Route path="/overthewire/bandit/:id" element={<IdBandit />} />

        <Route path="/rootme/exif" element={<Exif />} />
        <Route path="/rootme/networks/:id" element={<IdNetwork />} />
        <Route
          path="/rootme/crypto-analysis/:id"
          element={<IdCryptoAnalysis />}
        />
        <Route path="/rootme/web-client/:id" element={<IdWebClient />} />
        <Route path="/rootme/web-server/:id" element={<IdWebServer />} />
      </Routes>
    </div>
  );
};

export default App;
