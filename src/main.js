import Phaser from 'phaser'

import { Preloads } from "./scenes/preloads.js";
import { MainMenu } from "./scenes/mainmenu.js";
import { Configuracion } from "./scenes/configuracion.js";
import { Instrucciones } from "./scenes/instrucciones.js";
import { Creditos } from "./scenes/creditos.js";
import { SeleccionDePersonaje } from "./scenes/SeleccionDePersonaje.js";
import { Game } from "./scenes/game.js";
import { Resultado } from "./scenes/resultado.js";
import { PreloadsMenu } from "./scenes/preloadsmenu.js";


var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1920,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [PreloadsMenu, Preloads, Game, Resultado],
  //scene: [PreloadsMenu, MainMenu, Configuracion, Instrucciones, Creditos, SeleccionDePersonaje, Preloads, Game, Resultado],
};

//var game = new Phaser.Game(config);

export default new Phaser.Game(config)
