import React from 'react';
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import ParticlesConfig from "../config/particles-config";

const ParticleBackground = () => {
  const particlesInit = useCallback (async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);


  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  },[]);
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
          color: {
              value: "black",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push",
              },
              onHover: {
                  enable: true,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          }
        },
        collisions: {
          absorb: {
            speed: 2
          },
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            }
          },
          enable: false,
          maxSpeed: 50,
          mode: 'bounce',
          overlap: {
            enable: true,
            retries: 0
          }
        },
          color: {
              value: "#2E4272",
          },
          links: {
              color: "#2E4272",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "dimond",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  }}
/>
);
};




export default ParticleBackground;