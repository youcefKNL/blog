import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import Bubble from "../../assets/tsparticles/";

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      className="particlesContainer"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={Bubble}
    />
  );
};

export default ParticlesContainer;
