import Phaser from 'phaser'
import FirebasePlugin from 'phaser3-rex-plugins/plugins/firebase-plugin.js';

import { MainMenu } from "./scenes/mainmenu.js";
import { Configuracion } from "./scenes/configuracion.js";
import { Instrucciones } from "./scenes/instrucciones.js";
import { Creditos } from "./scenes/creditos.js";
import { SeleccionDePersonaje } from "./scenes/seleccionDePersonaje.js";
import { Game } from "./scenes/game.js";
import { Resultado } from "./scenes/resultado.js";
import { PreloadsMenu } from "./scenes/preloadsmenu.js";


export var config = {
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

  plugins: {
    global: [{
        key: 'rexFirebase',
        plugin: FirebasePlugin,
        start: true
    }]
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [PreloadsMenu, MainMenu, Configuracion, Instrucciones, Creditos, SeleccionDePersonaje, Game, Resultado],
  
  
};

export default new Phaser.Game(config)
