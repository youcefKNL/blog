import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import EffectTsParticles from "../../../assets/tsparticles/tsparticles2.json";

const App = (props) => {
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
      id="tsparticlestwo"
      particlesLoaded={particlesLoaded}
      options={EffectTsParticles}
      className={"tsparticlestwo"}
    />
  ) : null;
};

export default App;
