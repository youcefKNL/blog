import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// import EffectTsParticles1 from "../../../assets/tsparticles/tsparticles1.json";
// // import EffectTsParticles1 from "../../../assets/tsparticles/twinkle.json";
import EffectTsParticles1 from "../../../assets/tsparticles/growing.json";

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
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={EffectTsParticles1}
      className={"tsparticles"}
    />
  ) : null;
};

export default App;
