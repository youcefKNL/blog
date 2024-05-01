// App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";
import Header from "./pages/components/HeaderNavigation";

import Challenge from "./pages/Challenge";
import RootMePage from "./pages/RootMePage";
import Exif from "./pages/components/rootme/challenge/stéganographie/Exif";

import IdNetwork from "./pages/components/rootme/routes/IdNetwork";
import IdCryptoAnalysis from "./pages/components/rootme/routes/IdCryptoAnalysis";
import IdWebClient from "./pages/components/rootme/routes/IdWebClient";
import IdWebServer from "./pages/components/rootme/routes/IdWebServer";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/rootme" element={<RootMePage />} />
        <Route path="/rootme/exif" element={<Exif />} />
        <Route path="/rootme/networks/:id" element={<IdNetwork />} />
        <Route
          path="/rootme/crypto-analysis/:id"
          element={<IdCryptoAnalysis />}
        />
        <Route path="/rootme/web-client/:id" element={<IdWebClient />} />
        <Route path="/rootme/web-server/:id" element={<IdWebServer />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
