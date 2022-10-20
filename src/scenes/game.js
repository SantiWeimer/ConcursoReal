import Phaser from "phaser";
import Boton from "../clases/boton.js";
import {
  CasillaAvanzar,
  CasillaMonedas,
  CasillaRetroceder,
  CasillaPregunta,
} from "../clases/casilla.js";
import Ruleta from "../clases/Ruleta.js";

import preguntas from "./preguntas.js";

console.log(preguntas["1"].pregunta);
console.log(preguntas["1"].opciones);

console.log(preguntas["1"].opciones["2"].texto);
console.log(preguntas["1"].opciones["2"].esCorrecta);

var dado = 0;
var duracion = 0;
//
var tiro1 = 1;
var monedabotonayuda = 0;
var acumcartelbosque = 0;
//
//monedas
var textmonedasjugador1;
var textmonedasjugador2;
var textmonedasjugador3;
var textmonedasjugador4;

//
var cartelpantano;
var cartelbosque;
var segcomienzo = 15;

//sonidos
var respuestaincorrecta;
var respuestacorrecta;
var sonidocasillamonedas;
var monedaayuda;

//jugadores

var CantidadJugadores;

//turnos

var players;
var playerActivo;
var turno = 0;
var contadorturno = 0;
var primerturno = 0;
var textoTurnoJugador;

//camara

var camara;

//casillas
var casillas = [];

//ruleta y hud
var ruleta;
var contadorRuleta = 0;
var bloqueoruleta;
var bloqueruletaboolean = 0;

//sonidos
var respuestaincorrecta;
var respuestacorrecta;
var sonidocasillamonedas;
var monedaayuda;

export class Game extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Game");
  }

  init(data) {
    players = data.players;
    CantidadJugadores = data.CantidadJugadores;
  }

  create() {
    //sonidos

    //popup
    respuestaincorrecta = this.sound.add("respuestaincorrecta");
    respuestaincorrecta.setVolume(0.55).setRate(1.5);
    respuestacorrecta = this.sound.add("respuestacorrecta");
    respuestacorrecta.setVolume(0.7).setRate(0.9);
    sonidocasillamonedas = this.sound.add("sonidocasillamonedas");
    sonidocasillamonedas.setVolume(1);
    monedaayuda = this.sound.add("monedaayuda");
    monedaayuda.setVolume(1.5);

    //tablero
    var tablerogame;

    tablerogame = this.add.image(4740.5, 1403.5, "tablero").setScale(1);

    //tilemap

    const map = this.make.tilemap({ key: "tilemap" });

    const casilla1 = map.addTilesetImage(
      "casilla_pantano_comun",
      "casilla_pantano_comun"
    );
    const casilla2 = map.addTilesetImage(
      "casilla_pantano_pierde_turno",
      "casilla_pantano_pierde_turno"
    );
    const casilla3 = map.addTilesetImage(
      "casilla_pantano_volver",
      "casilla_pantano_volver"
    );
    const casilla4 = map.addTilesetImage(
      "casilla_pantano_pregunta_X",
      "casilla_pantano_pregunta_X"
    );
    const casilla5 = map.addTilesetImage(
      "casilla_pantano_pregunta_Y",
      "casilla_pantano_pregunta_Y"
    );
    const casilla6 = map.addTilesetImage(
      "casilla_pantano_avanzar",
      "casilla_pantano_avanzar"
    );
    const casilla7 = map.addTilesetImage(
      "casilla_pantano_moneda_X",
      "casilla_pantano_moneda_X"
    );
    const casilla8 = map.addTilesetImage(
      "casilla_pantano_moneda_Y",
      "casilla_pantano_moneda_Y"
    );
    const casilla9 = map.addTilesetImage(
      "casilla_pantano_esquina",
      "casilla_pantano_esquina"
    );
    const troncos = map.addTilesetImage("troncos_pantano", "troncos_pantano");

    const casilla10 = map.addTilesetImage(
      "casilla_bosque_comun",
      "casilla_bosque_comun"
    );
    const casilla11 = map.addTilesetImage(
      "casilla_bosque_pierde_turno",
      "casilla_bosque_pierde_turno"
    );
    const casilla12 = map.addTilesetImage(
      "casilla_bosque_volver",
      "casilla_bosque_volver"
    );
    const casilla13 = map.addTilesetImage(
      "casilla_bosque_pregunta_X",
      "casilla_bosque_pregunta_X"
    );
    const casilla14 = map.addTilesetImage(
      "casilla_bosque_pregunta_Y",
      "casilla_bosque_pregunta_Y"
    );
    const casilla15 = map.addTilesetImage(
      "casilla_bosque_avanzar",
      "casilla_bosque_avanzar"
    );
    const casilla16 = map.addTilesetImage(
      "casilla_bosque_moneda_X",
      "casilla_bosque_moneda_X"
    );
    const casilla17 = map.addTilesetImage(
      "casilla_bosque_moneda_Y",
      "casilla_bosque_moneda_Y"
    );
    const casilla18 = map.addTilesetImage(
      "casilla_bosque_esquina",
      "casilla_bosque_esquina"
    );

    const casilla19 = map.addTilesetImage(
      "casilla_aldea_comun",
      "casilla_aldea_comun"
    );
    const casilla20 = map.addTilesetImage(
      "casilla_aldea_pierde_turno",
      "casilla_aldea_pierde_turno"
    );
    const casilla21 = map.addTilesetImage(
      "casilla_aldea_volver",
      "casilla_aldea_volver"
    );
    const casilla22 = map.addTilesetImage(
      "casilla_aldea_pregunta_X",
      "casilla_aldea_pregunta_X"
    );
    const casilla23 = map.addTilesetImage(
      "casilla_aldea_pregunta_Y",
      "casilla_aldea_pregunta_Y"
    );
    const casilla24 = map.addTilesetImage(
      "casilla_aldea_avanzar",
      "casilla_aldea_avanzar"
    );
    const casilla25 = map.addTilesetImage(
      "casilla_aldea_moneda_X",
      "casilla_aldea_moneda_X"
    );
    const casilla26 = map.addTilesetImage(
      "casilla_aldea_moneda_Y",
      "casilla_aldea_moneda_Y"
    );
    const casilla27 = map.addTilesetImage(
      "casilla_aldea_esquina",
      "casilla_aldea_esquina"
    );

    const casilla28 = map.addTilesetImage(
      "casilla_castillo_comun",
      "casilla_castillo_comun"
    );
    const casilla29 = map.addTilesetImage(
      "casilla_castillo_pierde_turno",
      "casilla_castillo_pierde_turno"
    );
    const casilla30 = map.addTilesetImage(
      "casilla_castillo_volver",
      "casilla_castillo_volver"
    );
    const casilla31 = map.addTilesetImage(
      "casilla_castillo_pregunta_X",
      "casilla_castillo_pregunta_X"
    );
    const casilla32 = map.addTilesetImage(
      "casilla_castillo_pregunta_Y",
      "casilla_castillo_pregunta_Y"
    );
    const casilla33 = map.addTilesetImage(
      "casilla_castillo_avanzar",
      "casilla_castillo_avanzar"
    );
    const casilla34 = map.addTilesetImage(
      "casilla_castillo_moneda_X",
      "casilla_castillo_moneda_X"
    );
    const casilla35 = map.addTilesetImage(
      "casilla_castillo_moneda_Y",
      "casilla_castillo_moneda_Y"
    );
    const casilla36 = map.addTilesetImage(
      "casilla_castillo_esquina",
      "casilla_castillo_esquina"
    );

    //layers

    //pantano
    const casilla1Layer = map.createLayer(
      "casilla_pantano_comun",
      casilla1,
      0,
      0
    );
    const casilla2Layer = map.createLayer(
      "casilla_pantano_pierde_turno",
      casilla2,
      0,
      0
    );
    const casilla3Layer = map.createLayer(
      "casilla_pantano_volver",
      casilla3,
      0,
      0
    );
    const casilla4Layer = map.createLayer(
      "casilla_pantano_pregunta_X",
      casilla4,
      0,
      0
    );
    const casilla5Layer = map.createLayer(
      "casilla_pantano_pregunta_Y",
      casilla5,
      0,
      0
    );
    const casilla6Layer = map.createLayer(
      "casilla_pantano_avanzar",
      casilla6,
      0,
      0
    );
    const casilla7Layer = map.createLayer(
      "casilla_pantano_moneda_X",
      casilla7,
      0,
      0
    );
    const casilla8Layer = map.createLayer(
      "casilla_pantano_moneda_Y",
      casilla8,
      0,
      0
    );
    const casilla9Layer = map.createLayer(
      "casilla_pantano_esquina",
      casilla9,
      0,
      0
    );
    const troncosLayer = map.createLayer("troncos_pantano", troncos, 0, 0);

    //bosque
    const casilla10Layer = map.createLayer(
      "casilla_bosque_comun",
      casilla10,
      0,
      0
    );
    const casilla11Layer = map.createLayer(
      "casilla_bosque_pierde_turno",
      casilla11,
      0,
      0
    );
    const casilla12Layer = map.createLayer(
      "casilla_bosque_volver",
      casilla12,
      0,
      0
    );
    const casilla13Layer = map.createLayer(
      "casilla_bosque_pregunta_X",
      casilla13,
      0,
      0
    );
    const casilla14Layer = map.createLayer(
      "casilla_bosque_pregunta_Y",
      casilla14,
      0,
      0
    );
    const casilla15Layer = map.createLayer(
      "casilla_bosque_avanzar",
      casilla15,
      0,
      0
    );
    const casilla16Layer = map.createLayer(
      "casilla_bosque_moneda_X",
      casilla16,
      0,
      0
    );
    const casilla17Layer = map.createLayer(
      "casilla_bosque_moneda_Y",
      casilla17,
      0,
      0
    );
    const casilla18Layer = map.createLayer(
      "casilla_bosque_esquina",
      casilla18,
      0,
      0
    );

    //bosque
    const casilla19Layer = map.createLayer(
      "casilla_aldea_comun",
      casilla19,
      0,
      0
    );
    const casilla20Layer = map.createLayer(
      "casilla_aldea_pierde_turno",
      casilla20,
      0,
      0
    );
    const casilla21Layer = map.createLayer(
      "casilla_aldea_volver",
      casilla21,
      0,
      0
    );
    const casilla22Layer = map.createLayer(
      "casilla_aldea_pregunta_X",
      casilla22,
      0,
      0
    );
    const casilla23Layer = map.createLayer(
      "casilla_aldea_pregunta_Y",
      casilla23,
      0,
      0
    );
    const casilla24Layer = map.createLayer(
      "casilla_aldea_avanzar",
      casilla24,
      0,
      0
    );
    const casilla25Layer = map.createLayer(
      "casilla_aldea_moneda_X",
      casilla25,
      0,
      0
    );
    const casilla26Layer = map.createLayer(
      "casilla_aldea_moneda_Y",
      casilla26,
      0,
      0
    );
    const casilla27Layer = map.createLayer(
      "casilla_aldea_esquina",
      casilla27,
      0,
      0
    );

    //castillo
    const casilla28Layer = map.createLayer(
      "casilla_castillo_comun",
      casilla28,
      0,
      0
    );
    const casilla29Layer = map.createLayer(
      "casilla_castillo_pierde_turno",
      casilla29,
      0,
      0
    );
    const casilla30Layer = map.createLayer(
      "casilla_castillo_volver",
      casilla30,
      0,
      0
    );
    const casilla31Layer = map.createLayer(
      "casilla_castillo_pregunta_X",
      casilla31,
      0,
      0
    );
    const casilla32Layer = map.createLayer(
      "casilla_castillo_pregunta_Y",
      casilla32,
      0,
      0
    );
    const casilla33Layer = map.createLayer(
      "casilla_castillo_avanzar",
      casilla33,
      0,
      0
    );
    const casilla34Layer = map.createLayer(
      "casilla_castillo_moneda_X",
      casilla34,
      0,
      0
    );
    const casilla35Layer = map.createLayer(
      "casilla_castillo_moneda_Y",
      casilla35,
      0,
      0
    );
    const casilla36Layer = map.createLayer(
      "casilla_castillo_esquina",
      casilla36,
      0,
      0
    );

    //pantano
    casilla1Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla2Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla3Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) casillas.push(tile);
    });
    casilla4Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla5Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla6Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla7Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla8Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla9Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });

    //bosque
    casilla10Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla11Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla12Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) casillas.push(tile);
    });
    casilla13Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla14Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla15Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla16Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla17Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla18Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });

    //aldea
    casilla19Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla20Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla21Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) casillas.push(tile);
    });
    casilla22Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla23Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla24Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla25Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla26Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla27Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });

    //castillo
    casilla28Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla29Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla30Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) casillas.push(tile);
    });
    casilla31Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla32Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla33Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla34Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla35Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });
    casilla36Layer.forEachTile((tile) => {
      if (tile.index != -1) casillas.push(tile);
    });

    //ordenamiento de casillas

    casillas = casillas.sort((a, b) => {
      if (a.x == b.x) {
        let c_a = casillas.find((c) => c.x == a.x - 1);
        if (c_a.y > a.y) {
          return b.y - a.y;
        } else if (c_a.y < a.y) {
          return a.y - b.y;
        } else {
          if (c_a.y > b.y) {
            return b.y - a.y;
          } else {
            return a.y - b.y;
          }
        }
      } else {
        return a.x - b.x;
      }
    });

    ////
    //aplicacion de sprite e informacion a cada jugador
    this.InformacionPlayers();

    //hud
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "hud")
      .setScale(1)
      .setScrollFactor(0);
    this.TextoMonedas();

    //camara
    camara = this.cameras.main;

    ////

    //ruleta

    var resplandor;

    ruleta = this.add
      .image(1200, 100, "ruletaimagen")
      .setScrollFactor(0)
      .setScale(1.2)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sound.play("ruleta-sonido");
        this.girar(ruleta);
        ruleta.disableInteractive();
        contadorRuleta = 1;
        bloqueoruleta = this.add
          .image(1280, 25, "bloqueoruleta")
          .setScale(0.03)
          .setScrollFactor(0);
        bloqueruletaboolean = 1;
        setTimeout(() => {
          primerturno = primerturno + 1;
          this.moverDerecha(playerActivo);
        }, 2750);
      })
      .on("pointerover", () => {
        resplandor = this.add
          .image(1200, 100, "ruleta_resplandor")
          .setScale(0.85)
          .setScrollFactor(0);
      })
      .on("pointerout", () => {
        resplandor.destroy();
      });

    this.add.image(1200, 20, "agujaruleta").setScale(1).setScrollFactor(0);
  }

  //update

  update() {
    /* if(contadorturno === 0){
  
        turno++
  
        if(turno + 1 === CantidadJugadores){
          turno = 0
        }
      } */

    ////
    //monedas jugadores
    this.ActualizarMonedas();
    ////
    //bloqueador de ruleta para no apretar muchas veces a la vez
    if (contadorRuleta === 0) {
      ruleta.setInteractive();
      if (bloqueruletaboolean === 1) {
        bloqueoruleta.destroy();
        bloqueruletaboolean = 0;
      }
    }

    ////
    //turnos jugadores

    playerActivo = players[turno].imagen;
    //camara.setScroll(players[turno].x, players[turno].y)
    camara.startFollow(playerActivo);

    if (primerturno === 0) {
      //solucion errores primer turno
      contadorturno = contadorturno + 1;
      //console.log(players[turno])
    } else {
      //cambio a turnos normales

      for (turno = turno; contadorturno === 0; turno++) {
        contadorturno = contadorturno + 1;
        //console.log(players[turno])

        if (turno === 1 && CantidadJugadores === 2) {
          turno = -1;
        }

        if (turno === 2 && CantidadJugadores === 3) {
          turno = -1;
        }

        if (turno === 3 && CantidadJugadores === 4) {
          turno = -1;
        }
      }
    }

    ////
  }

  girar(ruleta) {
    dado = 0;
    console.log("girar ", ruleta);
    this.tweens.add({
      targets: ruleta,
      duration: 2700,
      rotation: Phaser.Math.Between(360, 720),
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: function () {
        console.log("termino movimiento ruleta");
        var grados = Phaser.Math.RadToDeg(ruleta.rotation);
        /* if (grados > -45 && grados <= 45) {
            dado = 1;
          }
          if (grados > 45 && grados <= 90) {
            dado = 6;
          }
          if (grados > 90 && grados <= 135) {
            dado = 5;
          }
          if (
            (grados <= -135 && grados > -180) ||
            (grados >= 135 && grados < 180)
          ) {
            dado = 4;
          }
          if (grados <= -45 && grados > -90) {
            dado = 2;
          }
          if (grados <= -90 && grados > -135) {
            dado = 3;
          }  */

        dado = 5;

        //duracion cambio de turno
        if (dado === 1) {
          duracion = 1000;
        }
        if (dado === 2) {
          duracion = 1400;
        }
        if (dado === 3) {
          duracion = 1800;
        }
        if (dado === 4) {
          duracion = 2200;
        }
        if (dado === 5) {
          duracion = 2600;
        }
        if (dado === 6) {
          duracion = 3000;
        }
      },
    });
  }

  //movimiento personaje

  moverDerecha(playerActivo) {
    console.log("mover derecha ", playerActivo);
    let count = 0;
    for (
      let i = players[turno].casilla > 0 ? players[turno].casilla : 0;
      i <= players[turno].casilla + dado;
      i++
    ) {
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * count,
        duration: 400 * (count + 1),
        x: casillas[i].pixelX + 100 / 2,
        y: casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          if (i == players[turno].casilla + dado) {
            players[turno].casilla += dado;
            players[turno].acumulador += dado;

            if (players[turno].acumulador > 100) {
              players[turno].acumulador = 100;
            }

            this.corroborarCasillas();
          }
        },
      });

      count++;
    }
  }

  //funcion de avanzar

  avanzar(playerActivo) {
    
      let count = 0;
      for (
        let i = players[turno].casilla > 0 ? players[turno].casilla : 0;
        i <= players[turno].casilla + dado;
        i++
      ) {
        this.tweens.add({
          targets: playerActivo,
          delay: 400 * count,
          duration: 400 * (count + 1),
          x: casillas[i].pixelX + 100 / 2,
          y: casillas[i].pixelY - 100 / 2,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
          onComplete: () => {
            if (i == players[turno].casilla + dado) {
              players[turno].casilla += dado;
              players[turno].acumulador += dado;

              if (players[turno].acumulador > 100) {
                players[turno].acumulador = 100;
              }

              this.corroborarCasillas();
            }
          },
        });

        count++;
      }
  }

  //funcion retroceder

  retroceder(playerActivo) {
    let count = 0;
    let endTweenCounter = 0;
    for (let i = players[turno].casilla; i > players[turno].casilla - 3; i--) {
      console.log(i);
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * count,
        duration: 400 * (count + 1),
        x: casillas[i].pixelX + 100 / 2,
        y: casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          if (endTweenCounter == 2) {
            players[turno].casilla = players[turno].casilla - 2;
            players[turno].acumulador += dado;

            if (players[turno].acumulador > 100) {
              players[turno].acumulador = 100;
            }

            this.corroborarCasillas();
          }
          endTweenCounter++;
        },
      });
      count++;
    }
  }

  //funcion perder turno

  perderturno() {}

  //funcion de pregunta

  pregunta() {
    //pop up pregunta
    var popup;
    var trans;
    var cuadropregunta;
    var botonrespuesta1;
    var botonrespuesta2;
    var botonrespuesta3;
    var botonrespuesta4;
    var magotriste;
    var magofestejando;
    var botonayuda;
    var textpreg;

    //comienzo timeout popup
    setTimeout(() => {
      trans = this.add
        .image(
          this.cameras.main.centerX,
          this.cameras.main.centerY,
          "transparencia"
        )
        .setScale(1)
        .setAlpha(0.5)
        .setScrollFactor(0);

      popup = this.add
        .image(this.cameras.main.centerX, 625, "popup")
        .setScale(1.1)
        .setScrollFactor(0);
      cuadropregunta = this.add
        .image(this.cameras.main.centerX, 430, "popup-pregunta")
        .setScale(1)
        .setScrollFactor(0)
        .setAlpha(0);
      var magopregunta = this.add
        .image(1400, 600, "magopregunta")
        .setScale(1)
        .setScrollFactor(0);

      //monedas boton ayuda
      var iconomonedaayuda = this.add
        .image(930, 920, "iconomoneda")
        .setScale(0.8)
        .setScrollFactor(0);
      var textmonedasayuda = this.add
        .text(955, 900, "50", {
          fontFamily: "Times",
          fontSize: "36px",
          color: "#2B2B2B",
        })
        .setScrollFactor(0);
      //botones de respuestas

      //boton respuesta 1

      botonrespuesta1 = this.add
        .text(this.cameras.main.centerX, 560, "500 aC a 500 dC")
        .setScrollFactor(0)
        .setOrigin(0.5)
        .setPadding(80, 10)
        .setStyle({
          backgroundColor: "#C2A26A",
          fontSize: "36px",
          fill: "#2B2B2B",
          fontFamily: "Times",
        })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
          botonrespuesta1.setStyle({
            fill: "#000",
            backgroundColor: "#C63B3B",
          });
          magopregunta.destroy();

          setTimeout(() => {
            respuestaincorrecta.play();
            magotriste = this.add
              .image(1400, 600, "magotriste")
              .setScale(1)
              .setScrollFactor(0);
          }, 200);

          setTimeout(() => {
            magotriste.destroy();
            popup.destroy();
            trans.destroy();
            cuadropregunta.destroy();
            botonayuda.destroy();
            textpreg.destroy();

            botonrespuesta1.destroy();
            botonrespuesta2.destroy();
            botonrespuesta3.destroy();
            botonrespuesta4.destroy();
            botonayuda.destroy();
            textmonedasayuda.destroy();
            iconomonedaayuda.destroy();
          }, 2000);

          setTimeout(() => {
            contadorturno = 0;
            contadorRuleta = 0;
          }, 2500);

          botonrespuesta1.removeInteractive();
        })
        .on("pointerover", () =>
          botonrespuesta1.setStyle({ fill: "#000", backgroundColor: "#C89B4B" })
        )
        .on("pointerout", () =>
          botonrespuesta1.setStyle({
            fill: "#2B2B2B",
            backgroundColor: "#C2A26A",
          })
        );

      //boton respuesta 2
      botonrespuesta2 = this.add
        .text(this.cameras.main.centerX, 640, "1 dC a 1500 dC")
        .setScrollFactor(0)
        .setOrigin(0.5)
        .setPadding(80, 10)
        .setStyle({
          backgroundColor: "#C2A26A",
          fontSize: "36px",
          fill: "#2B2B2B",
          fontFamily: "Times",
        })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
          botonrespuesta2.setStyle({
            fill: "#000",
            backgroundColor: "#C63B3B",
          });
          magopregunta.destroy();

          setTimeout(() => {
            respuestaincorrecta.play();
            magotriste = this.add
              .image(1400, 600, "magotriste")
              .setScale(1)
              .setScrollFactor(0);
          }, 200);

          setTimeout(() => {
            magotriste.destroy();
            popup.destroy();
            trans.destroy();
            cuadropregunta.destroy();
            botonayuda.destroy();
            textpreg.destroy();

            botonrespuesta1.destroy();
            botonrespuesta2.destroy();
            botonrespuesta3.destroy();
            botonrespuesta4.destroy();
            botonayuda.destroy();
            textmonedasayuda.destroy();
            iconomonedaayuda.destroy();
          }, 2000);

          botonrespuesta2.removeInteractive();

          setTimeout(() => {
            contadorturno = 0;
            contadorRuleta = 0;
          }, 2500);
        })
        .on("pointerover", () =>
          botonrespuesta2.setStyle({ fill: "#000", backgroundColor: "#C89B4B" })
        )
        .on("pointerout", () =>
          botonrespuesta2.setStyle({
            fill: "#2B2B2B",
            backgroundColor: "#C2A26A",
          })
        );

      //boton respuesta 3

      botonrespuesta3 = this.add
        .text(this.cameras.main.centerX, 720, "500 dC a 1500 dC")
        .setScrollFactor(0)
        .setOrigin(0.5)
        .setPadding(80, 10)
        .setStyle({
          backgroundColor: "#C2A26A",
          fontSize: "36px",
          fill: "#2B2B2B",
          fontFamily: "Times",
        })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
          botonrespuesta3.setStyle({
            fill: "#000",
            backgroundColor: "#42CB37",
          });
          magopregunta.destroy();

          setTimeout(() => {
            respuestacorrecta.play();
            magofestejando = this.add
              .image(1400, 600, "magofestejando")
              .setScale(1)
              .setScrollFactor(0);
          }, 200);

          //suma de puntos respuesta correcta
          setTimeout(() => {
            if (monedabotonayuda === 0) {
              players[turno].monedas = players[turno].monedas + 100;
            } else {
              players[turno].monedas = players[turno].monedas + 50;
            }
            sonidocasillamonedas.play();
          }, 2000);

          setTimeout(() => {
            magofestejando.destroy();
            popup.destroy();
            trans.destroy();
            cuadropregunta.destroy();
            botonayuda.destroy();
            textpreg.destroy();

            botonrespuesta1.destroy();
            botonrespuesta2.destroy();
            botonrespuesta3.destroy();
            botonrespuesta4.destroy();
            botonayuda.destroy();
            textmonedasayuda.destroy();
            iconomonedaayuda.destroy();
          }, 2000);

          botonrespuesta3.removeInteractive();

          setTimeout(() => {
            contadorturno = 0;
            contadorRuleta = 0;
          }, 2500);
        })
        .on("pointerover", () =>
          botonrespuesta3.setStyle({ fill: "#000", backgroundColor: "#C89B4B" })
        )
        .on("pointerout", () =>
          botonrespuesta3.setStyle({
            fill: "#2B2B2B",
            backgroundColor: "#C2A26A",
          })
        );

      //boton respuesta 4

      botonrespuesta4 = this.add
        .text(this.cameras.main.centerX, 800, "1000 dC a 2000 dC")
        .setScrollFactor(0)
        .setOrigin(0.5)
        .setPadding(80, 10)
        .setStyle({
          backgroundColor: "#C2A26A",
          fontSize: "36px",
          fill: "#2B2B2B",
          fontFamily: "Times",
        })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
          botonrespuesta4.setStyle({
            fill: "#000",
            backgroundColor: "#C63B3B",
          });
          magopregunta.destroy();

          setTimeout(() => {
            respuestaincorrecta.play();
            magotriste = this.add
              .image(1400, 600, "magotriste")
              .setScale(1)
              .setScrollFactor(0);
          }, 200);

          setTimeout(() => {
            magotriste.destroy();
            popup.destroy();
            trans.destroy();
            cuadropregunta.destroy();
            botonayuda.destroy();
            textpreg.destroy();

            botonrespuesta1.destroy();
            botonrespuesta2.destroy();
            botonrespuesta3.destroy();
            botonrespuesta4.destroy();
            botonayuda.destroy();
            textmonedasayuda.destroy();
            iconomonedaayuda.destroy();
          }, 2000);
          botonrespuesta4.removeInteractive();

          setTimeout(() => {
            contadorturno = 0;
            contadorRuleta = 0;
          }, 2500);
        })
        .on("pointerover", () =>
          botonrespuesta4.setStyle({ fill: "#000", backgroundColor: "#C89B4B" })
        )
        .on("pointerout", () =>
          botonrespuesta4.setStyle({
            fill: "#2B2B2B",
            backgroundColor: "#C2A26A",
          })
        );

      //boton de ayuda

      botonayuda = this.add
        .text(1100, 920, "Ayuda")
        .setScrollFactor(0)
        .setOrigin(0.5)
        .setPadding(40, 10)
        .setStyle({
          backgroundColor: "#C89B4B",
          fontSize: "36px",
          fill: "#E5B86B",
          fontFamily: "Times",
        })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
          monedaayuda.play();

          monedabotonayuda = monedabotonayuda + 1;

          botonayuda.setStyle({ fill: "#A88D5D", backgroundColor: "#C2A26A" });
          botonrespuesta2.destroy();
          botonrespuesta4.destroy();
          botonayuda.removeInteractive();
        })
        .on("pointerover", () => botonayuda.setStyle({ fill: "#000" }))
        .on("pointerout", () => botonayuda.setStyle({ fill: "#E5B86B" }));

      //pregunta
      textpreg = this.add
        .text(
          750,
          350,
          "¿Qué franja temporal cubre\naproximadamente la Edad\nMedia?"
        )
        .setScrollFactor(0)
        .setStyle({
          maxLines: 20,
          fontFamily: "Times",
          fontSize: "36px",
          fill: "#FFFFF",
          fixedWidth: 2000,
        });

      //fin timeout popup
    }, 1000);
  }

  //funcion monedas

  monedas() {
    players[turno].monedas = players[turno].monedas + 500;
  }

  corroborarCasillas() {
    if (
      players[turno].acumulador === 3 ||
      players[turno].acumulador === 12 ||
      players[turno].acumulador === 22 ||
      players[turno].acumulador === 27 ||
      players[turno].acumulador === 39 ||
      players[turno].acumulador === 45 ||
      players[turno].acumulador === 55 ||
      players[turno].acumulador === 62 ||
      players[turno].acumulador === 72 ||
      players[turno].acumulador === 80 ||
      players[turno].acumulador === 88 ||
      players[turno].acumulador === 93
    ) {
      //funcion preguntas (casillas: 4, 12, 20, 25, 36, 40)

    this.pregunta();
      
    } else if (
      players[turno].acumulador === 5 ||
      players[turno].acumulador === 25 ||
      players[turno].acumulador === 36 ||
      players[turno].acumulador === 50 ||
      players[turno].acumulador === 59 ||
      players[turno].acumulador === 66 ||
      players[turno].acumulador === 76 ||
      players[turno].acumulador === 87
    ) {
      //funcion avanzar (casillas: 5, 24, 34)
      this.avanzar(playerActivo);
    } else if (
      players[turno].acumulador === 6 ||
      players[turno].acumulador === 19 ||
      players[turno].acumulador === 33 ||
      players[turno].acumulador === 48 ||
      players[turno].acumulador === 58 ||
      players[turno].acumulador === 70 ||
      players[turno].acumulador === 78 ||
      players[turno].acumulador === 96
    ) {
      //funcion monedas  (casillas: 6, 18, 31, 42)

      //ogro.anims.play('ogrofeliz', true);

      setTimeout(() => {
        this.monedas();
        sonidocasillamonedas.play();
      }, duracion - 400);
      setTimeout(() => {
        contadorturno = 0;
        contadorRuleta = 0;
      }, duracion);
      setTimeout(() => {
        textoTurnoJugador = this.add.text(
          this.cameras.main.centerX - 200,
          this.cameras.main.centerY - 350,
          "Turno " + players[turno].jugador,
          {
            fontFamily: "Times",
            fontStyle: "italic",
            fontSize: "64px",
            color: "#000000",
          }
        );
        textoTurnoJugador.setScrollFactor(0);
      }, duracion + 500);
      setTimeout(() => {
        textoTurnoJugador.destroy();
      }, duracion + 2500);
    } else if (
      players[turno].acumulador === 8 ||
      players[turno].acumulador === 17 ||
      players[turno].acumulador === 29 ||
      players[turno].acumulador === 43 ||
      players[turno].acumulador === 56 ||
      players[turno].acumulador === 65 ||
      players[turno].acumulador === 82 ||
      players[turno].acumulador === 99
    ) {
      //funcion retroceder  (casillas: 8, 17, 27, 39)

      this.retroceder(playerActivo);
    } else if (
      players[turno].acumulador === 10 ||
      players[turno].acumulador === 42 ||
      players[turno].acumulador === 64 ||
      players[turno].acumulador === 97
    ) {
      //funcion perder turno  (casillas: 10, 38)

      contadorturno = 0;
      contadorRuleta = 0;
      textoTurnoJugador = this.add.text(
          this.cameras.main.centerX - 200,
          this.cameras.main.centerY - 350,
          "Turno " + players[turno].jugador,
          {
            fontFamily: "Times",
            fontStyle: "italic",
            fontSize: "64px",
            color: "#000000",
          }
        );
        textoTurnoJugador.setScrollFactor(0);

      setTimeout(() => {
        textoTurnoJugador.destroy();
      }, 2500);
    } else if (players[turno].acumulador === 100) {
      setTimeout(() => {
        this.scene.start("Resultado", {
          CantidadJugadores: CantidadJugadores,
          players: players,
        });
      }, 1000);
    } else {
      setTimeout(() => {
        contadorturno = 0;
        contadorRuleta = 0;
      }, duracion);

      setTimeout(() => {
        textoTurnoJugador = this.add.text(
          this.cameras.main.centerX - 200,
          this.cameras.main.centerY - 350,
          "Turno " + players[turno].jugador,
          {
            fontFamily: "Times",
            fontStyle: "italic",
            fontSize: "64px",
            color: "#000000",
          }
        );
        textoTurnoJugador.setScrollFactor(0);
      }, duracion + 500);

      setTimeout(() => {
        textoTurnoJugador.destroy();
      }, duracion + 2500);
    }
  }

  //funcion para actualizar monedas

  ActualizarMonedas() {
    if (CantidadJugadores === 2) {
      textmonedasjugador1.setText("Jugador 1:        " + players[0].monedas);
      textmonedasjugador2.setText("Jugador 2:        " + players[1].monedas);
    } else if (CantidadJugadores === 3) {
      textmonedasjugador1.setText("Jugador 1:        " + players[0].monedas);
      textmonedasjugador2.setText("Jugador 2:        " + players[1].monedas);
      textmonedasjugador3.setText("Jugador 3:        " + players[2].monedas);
    } else if (CantidadJugadores === 4) {
      textmonedasjugador1.setText("Jugador 1:        " + players[0].monedas);
      textmonedasjugador2.setText("Jugador 2:        " + players[1].monedas);
      textmonedasjugador3.setText("Jugador 3:        " + players[2].monedas);
      textmonedasjugador4.setText("Jugador 4:        " + players[3].monedas);
    }
  }

  InformacionPlayers() {
    if (CantidadJugadores === 2) {
      //player2
      players[1].x = 880;
      players[1].y = 1830;
      players[1].monedas = 0;
      players[1].jugador = "Jugador 2";
      players[1].imagen = this.add
        .image(players[1].x, players[1].y, players[1].nombre)
        .setScale(0.5);

      //player 1
      players[0].x = 930;
      players[0].y = 1830;
      players[0].monedas = 0;
      players[0].jugador = "Jugador 1";
      players[0].imagen = this.add
        .image(players[0].x, players[0].y, players[0].nombre)
        .setScale(0.5);
    } else if (CantidadJugadores === 3) {
      players[2].x = 830;
      players[2].y = 1830;
      players[2].monedas = 0;
      players[2].jugador = "Jugador 3";
      players[2].imagen = this.add
        .image(players[2].x, players[2].y, players[2].nombre)
        .setScale(0.5);

      players[1].x = 880;
      players[1].y = 1830;
      players[1].monedas = 0;
      players[1].jugador = "Jugador 2";
      players[1].imagen = this.add
        .image(players[1].x, players[1].y, players[1].nombre)
        .setScale(0.5);

      players[0].x = 930;
      players[0].y = 1830;
      players[0].monedas = 0;
      players[0].jugador = "Jugador 1";
      players[0].imagen = this.add
        .image(players[0].x, players[0].y, players[0].nombre)
        .setScale(0.5);
    } else if (CantidadJugadores === 4) {
      players[3].x = 780;
      players[3].y = 1830;
      players[3].monedas = 0;
      players[3].jugador = "Jugador 4";
      players[3].imagen = this.add
        .image(players[3].x, players[3].y, players[3].nombre)
        .setScale(0.5);

      players[2].x = 830;
      players[2].y = 1830;
      players[2].monedas = 0;
      players[2].jugador = "Jugador 3";
      players[2].imagen = this.add
        .image(players[2].x, players[2].y, players[2].nombre)
        .setScale(0.5);

      players[1].x = 880;
      players[1].y = 1830;
      players[1].monedas = 0;
      players[1].jugador = "Jugador 2";
      players[1].imagen = this.add
        .image(players[1].x, players[1].y, players[1].nombre)
        .setScale(0.5);

      players[0].x = 930;
      players[0].y = 1830;
      players[0].monedas = 0;
      players[0].jugador = "Jugador 1";
      players[0].imagen = this.add
        .image(players[0].x, players[0].y, players[0].nombre)
        .setScale(0.5);
    }
  }

  TextoMonedas() {
    if (CantidadJugadores === 2) {
      this.add.image(730, 37, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador1 = this.add
        .text(550, 20, "Jugador 1:        " + players[1].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);

      this.add.image(730, 77, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador2 = this.add
        .text(550, 60, "Jugador 2:        " + players[0].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);
    } else if (CantidadJugadores === 3) {
      this.add.image(730, 37, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador1 = this.add
        .text(550, 20, "Jugador 1:        " + players[2].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);

      this.add.image(730, 77, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador2 = this.add
        .text(550, 60, "Jugador 2:        " + players[1].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);

      this.add.image(730, 117, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador3 = this.add
        .text(550, 100, "Jugador 3:        " + players[0].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);
    } else if (CantidadJugadores === 4) {
      this.add.image(730, 37, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador1 = this.add
        .text(550, 20, "Jugador 1:        " + players[3].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);

      this.add.image(730, 77, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador2 = this.add
        .text(550, 60, "Jugador 2:        " + players[2].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);

      this.add.image(730, 117, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador3 = this.add
        .text(550, 100, "Jugador 3:        " + players[1].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);

      this.add.image(730, 157, "iconomoneda").setScale(0.7).setScrollFactor(0);
      textmonedasjugador4 = this.add
        .text(550, 140, "Jugador 4:        " + players[0].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0);
    }
  }
}
