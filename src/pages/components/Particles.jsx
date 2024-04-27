import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// import Test from "./test.json";
// import Test2 from "./test2.json";

import EffectTsParticles1 from "./tsparticles1.json";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return init ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={EffectTsParticles1}
      className="tsparticles"
    />
  ) : null;
};

export default App;
