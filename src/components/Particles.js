import React, { useContext } from "react";
import { loadFull } from "tsparticles";
import { ThemeContext } from "./Header";

export const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};
// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   return context;
// };
export const star = {"fullScreen": {
    "enable": true,
    "zIndex": 1
},

particles: {
    color: { value: "#7F5283"},
    line_linked: {
      color: "#2c2c2c",
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1
    },
    move: {
      size: true,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: true,
      speed: 0.3,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 160 },
    opacity: {
      anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
      random: true,
      value: 1
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
      random: true,
      value: 3
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  retina_detect: true
};
