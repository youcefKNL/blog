// App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";
import Header from "./pages/components/HeaderNavigation";

import Challenge from "./pages/Challenge";
import RootMePage from "./pages/RootMePage";
import Exif from "./pages/components/rootme/challenge/stéganographie/Exif";

import IdNetwork from "./pages/components/rootme/challenge/networks/IdNetwork";

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
      </Routes>
    </AnimatePresence>
  );
};

export default App;
