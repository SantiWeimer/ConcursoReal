import Phaser from "phaser";
import Pregunta from "../clases/Pregunta.js";
import preguntasArray from "./preguntas.js";

var dado = 0;

var monedabotonayuda = false;

//
//monedas
var textmonedasjugador1;
var textmonedasjugador2;
var textmonedasjugador3;
var textmonedasjugador4;

//
var cartelfunc = 0;
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
var contadorturno = false;
var primerturno = 0;
var triangulo;
var textoTurnoJugador;

//camara

var camara;

//casillas
var casillas = [];
//casilla preguntas
var turnPregunta = 0;
var contadorPregunta = false;
var respPregunta = [];

    respPregunta.push(preguntasArray[turnPregunta].opciones["1"]);
    respPregunta.push(preguntasArray[turnPregunta].opciones["2"]);
    respPregunta.push(preguntasArray[turnPregunta].opciones["3"]);
    respPregunta.push(preguntasArray[turnPregunta].opciones["4"]);

    respPregunta.sort(() => Math.random() - 0.5)
    

//ruleta y hud
var ruleta;
var contadorRuleta = true;
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

    const casilla1 = map.addTilesetImage("casilla_pantano_comun","casilla_pantano_comun");
    const casilla2 = map.addTilesetImage("casilla_pantano_pierde_turno","casilla_pantano_pierde_turno");
    const casilla3 = map.addTilesetImage("casilla_pantano_volver","casilla_pantano_volver");
    const casilla4 = map.addTilesetImage("casilla_pantano_pregunta_X","casilla_pantano_pregunta_X");
    const casilla5 = map.addTilesetImage("casilla_pantano_pregunta_Y","casilla_pantano_pregunta_Y");
    const casilla6 = map.addTilesetImage("casilla_pantano_avanzar","casilla_pantano_avanzar");
    const casilla7 = map.addTilesetImage("casilla_pantano_moneda_X","casilla_pantano_moneda_X");
    const casilla8 = map.addTilesetImage("casilla_pantano_moneda_Y","casilla_pantano_moneda_Y");
    const casilla9 = map.addTilesetImage("casilla_pantano_esquina","casilla_pantano_esquina");
    const troncos = map.addTilesetImage("troncos_pantano", "troncos_pantano");

    const casilla10 = map.addTilesetImage("casilla_bosque_comun","casilla_bosque_comun");
    const casilla11 = map.addTilesetImage("casilla_bosque_pierde_turno","casilla_bosque_pierde_turno");
    const casilla12 = map.addTilesetImage("casilla_bosque_volver","casilla_bosque_volver");
    const casilla13 = map.addTilesetImage("casilla_bosque_pregunta_X","casilla_bosque_pregunta_X");
    const casilla14 = map.addTilesetImage("casilla_bosque_pregunta_Y","casilla_bosque_pregunta_Y");
    const casilla15 = map.addTilesetImage("casilla_bosque_avanzar","casilla_bosque_avanzar");
    const casilla16 = map.addTilesetImage("casilla_bosque_moneda_X","casilla_bosque_moneda_X");
    const casilla17 = map.addTilesetImage("casilla_bosque_moneda_Y","casilla_bosque_moneda_Y");
    const casilla18 = map.addTilesetImage("casilla_bosque_esquina","casilla_bosque_esquina"
    );

    const casilla19 = map.addTilesetImage("casilla_aldea_comun","casilla_aldea_comun");
    const casilla20 = map.addTilesetImage("casilla_aldea_pierde_turno","casilla_aldea_pierde_turno");
    const casilla21 = map.addTilesetImage("casilla_aldea_volver","casilla_aldea_volver");
    const casilla22 = map.addTilesetImage("casilla_aldea_pregunta_X","casilla_aldea_pregunta_X");
    const casilla23 = map.addTilesetImage("casilla_aldea_pregunta_Y","casilla_aldea_pregunta_Y");
    const casilla24 = map.addTilesetImage("casilla_aldea_avanzar","casilla_aldea_avanzar");
    const casilla25 = map.addTilesetImage("casilla_aldea_moneda_X","casilla_aldea_moneda_X");
    const casilla26 = map.addTilesetImage("casilla_aldea_moneda_Y","casilla_aldea_moneda_Y");
    const casilla27 = map.addTilesetImage("casilla_aldea_esquina","casilla_aldea_esquina");

    const casilla28 = map.addTilesetImage("casilla_castillo_comun","casilla_castillo_comun");
    const casilla29 = map.addTilesetImage("casilla_castillo_pierde_turno","casilla_castillo_pierde_turno");
    const casilla30 = map.addTilesetImage("casilla_castillo_volver","casilla_castillo_volver");
    const casilla31 = map.addTilesetImage("casilla_castillo_pregunta_X","casilla_castillo_pregunta_X");
    const casilla32 = map.addTilesetImage("casilla_castillo_pregunta_Y","casilla_castillo_pregunta_Y");
    const casilla33 = map.addTilesetImage("casilla_castillo_avanzar","casilla_castillo_avanzar");
    const casilla34 = map.addTilesetImage("casilla_castillo_moneda_X","casilla_castillo_moneda_X");
    const casilla35 = map.addTilesetImage("casilla_castillo_moneda_Y","casilla_castillo_moneda_Y");
    const casilla36 = map.addTilesetImage("casilla_castillo_esquina","casilla_castillo_esquina");

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
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "hud").setScrollFactor(0);
    this.add.image(this.cameras.main.centerX + 10, 108, 'hudmadera').setScale(1.05).setScrollFactor(0)
    this.TextoMonedas();
   
    this.IconoTurno();

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
        contadorRuleta = false;
        bloqueoruleta = this.add
          .image(1280, 25, "bloqueoruleta")
          .setScale(0.03)
          .setScrollFactor(0);
        bloqueruletaboolean = 1;
        setTimeout(() => {
          primerturno = primerturno + 1;
          this.moverDerecha(playerActivo);

        }, 3000);
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
    ////
    //monedas jugadores
    this.ActualizarMonedas();
    //bloqueador de ruleta para no apretar muchas veces a la vez
    if (contadorRuleta === true) {
      ruleta.setInteractive();
      if (bloqueruletaboolean === 1) {
        bloqueoruleta.destroy();
        bloqueruletaboolean = 0;
      }
    }

    //turnos jugadores
    playerActivo = players[turno].imagen;
    //camara
    camara.startFollow(playerActivo);
    //cambio texto jugador
    ////
    //turnos

    //cambio a turnos normales
    while (contadorturno === true) {
      turno++;
      contadorturno = false;
      console.log('turno ', turno)
      //reinicio de variable
      if (turno === 2 && CantidadJugadores === 2) {
        turno = 0;
      }

      if (turno === 3 && CantidadJugadores === 3) {
        turno = 0;
      }

      if (turno === 4 && CantidadJugadores === 4) {
        turno = 0;
      }

      //funcion perder turno
      if (players[turno].perderTurno === true) {
        if (players[turno].contadorPerderTurno === 2) {
          players[turno].perderTurno = false;
          players[turno].contadorPerderTurno = 0;
        } else {
          contadorturno = true;
          players[turno].contadorPerderTurno++;
          if (players[turno].contadorPerderTurno === 2) {
            players[turno].perderTurno = false;
            players[turno].contadorPerderTurno = 0;
          }
        }
      }
    }

    //desbug perder turno
    if (players[turno].perderTurno === true) {
      if (
        CantidadJugadores === 2 &&
        players[0].perderTurno === true &&
        players[1].perderTurno === true
      ) {
        if (players[0].contadorPerderTurno > players[1].contadorPerderTurno) {
          players[0].perderTurno = false;
          players[0].contadorPerderTurno = 0;
          players[1].contadorPerderTurno++;
        } else if (
          players[0].contadorPerderTurno < players[1].contadorPerderTurno
        ) {
          players[1].perderTurno = false;
          players[1].contadorPerderTurno = 0;
          players[0].contadorPerderTurno++;
        } else {
          players[1].perderTurno = false;
          players[0].perderTurno = false;
          players[1].contadorPerderTurno = 0;
          players[0].contadorPerderTurno = 0;
        }
      }
    }

    ////

    //turnos para que las preguntas vayan cambiando

    while (contadorPregunta === true) {
      turnPregunta++;
      contadorPregunta = false;

      respPregunta.push(preguntasArray[turnPregunta].opciones["1"]);
      respPregunta.push(preguntasArray[turnPregunta].opciones["2"]);
      respPregunta.push(preguntasArray[turnPregunta].opciones["3"]);
      respPregunta.push(preguntasArray[turnPregunta].opciones["4"]);

      respPregunta.sort(() => Math.random() - 0.5)
    }

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
        dado = 3;
        
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
            players[turno].acumulador -= 2;

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

  funcPerderTurno() {
    players[turno].perderTurno = true;
  }

  //funcion de pregunta

  pregunta(){

    var trans = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"transparencia").setAlpha(0.5).setScrollFactor(0);
    var popup = this.add.image(this.cameras.main.centerX, 625, "popup").setScale(1.1).setScrollFactor(0);
    var mago = this.add.image(1400, 600, "magopregunta").setScale(1).setScrollFactor(0);
    //monedas boton ayuda
    var iconomonedaayuda = this.add.image(930, 920, "iconomoneda").setScale(0.8).setScrollFactor(0);
    var textmonedasayuda = this.add.text(955, 900, "50", {
        fontFamily: "Times",
        fontSize: "36px",
        color: "#2B2B2B",
    }).setScrollFactor(0);

    ////
    //respuesta 1
    var botonRespuesta1 = this.add.image(this.cameras.main.centerX, 560, "boton_respuesta").setScale(1.1).setScrollFactor(0)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      botonRespuesta1.removeInteractive();
      botonRespuesta2.removeInteractive();
      botonRespuesta3.removeInteractive();
      botonRespuesta4.removeInteractive();
      if(respPregunta[0].esCorrecta === true){

        botonRespuesta1.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (monedabotonayuda === false) {
            players[turno].monedas = players[turno].monedas + 100;
          } else {
            players[turno].monedas = players[turno].monedas + 50;
          }
          sonidocasillamonedas.play();
          mago.destroy();
        }, 2000);

      }else{

        botonRespuesta1.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);
        setTimeout(() => {
          mago.destroy();
        }, 2000);
      }

      //fin de juego de pregunta

      setTimeout(() => {
        //vaciar y reiniciar array
        contadorPregunta = true;
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();

        //desaparecer objetos
        trans.destroy();
        popup.destroy();
        iconomonedaayuda.destroy();
        textmonedasayuda.destroy();
        botonRespuesta1.destroy();
        botonRespuesta2.destroy();
        botonRespuesta3.destroy();
        botonRespuesta4.destroy();
        botonayudaimg.destroy();
        botonayuda.destroy();
        textopreg.destroy();
        resp1.destroy();
        resp2.destroy();
        resp3.destroy();
        resp4.destroy();

      }, 2000);
      setTimeout(() => {
        //cambiador de turnos
        contadorturno = true;
        contadorRuleta = true;
      }, 3000);
      setTimeout(() => {
        //reinicio animacion icono de jugador
        triangulo.destroy();
        textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 3300);

    })
    .on("pointerover", () => {

      botonRespuesta1.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta1.setTexture('boton_respuesta')
    });
    ////
    //respuesta 2
    var botonRespuesta2 = this.add.image(this.cameras.main.centerX, 640, "boton_respuesta").setScale(1.1).setScrollFactor(0)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      botonRespuesta1.removeInteractive();
      botonRespuesta2.removeInteractive();
      botonRespuesta3.removeInteractive();
      botonRespuesta4.removeInteractive();
      if(respPregunta[1].esCorrecta  === true){

        botonRespuesta2.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (monedabotonayuda === false) {
            players[turno].monedas = players[turno].monedas + 100;
          } else {
            players[turno].monedas = players[turno].monedas + 50;
          }
          sonidocasillamonedas.play();
          mago.destroy();
        }, 2000);

      }else{
        botonRespuesta2.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);

        setTimeout(() => {
          mago.destroy();
        }, 2000);
      }

      //fin de juego de pregunta

      setTimeout(() => {
        //vaciar y reiniciar array
        contadorPregunta = true;
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();

        //desaparecer objetos
        trans.destroy();
        popup.destroy();
        iconomonedaayuda.destroy();
        textmonedasayuda.destroy();
        botonRespuesta1.destroy();
        botonRespuesta2.destroy();
        botonRespuesta3.destroy();
        botonRespuesta4.destroy();
        botonayudaimg.destroy();
        botonayuda.destroy();
        textopreg.destroy();
        resp1.destroy();
        resp2.destroy();
        resp3.destroy();
        resp4.destroy();

      }, 2000);
      setTimeout(() => {
        //cambiador de turnos
        contadorturno = true;
        contadorRuleta = true;
      }, 3000);
      setTimeout(() => {
        //reinicio animacion icono de jugador
        triangulo.destroy();
        textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 3300);
    })
    .on("pointerover", () => {

      botonRespuesta2.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta2.setTexture('boton_respuesta')
    });
    
    ////
    //respuesta 3
    var botonRespuesta3 = this.add.image(this.cameras.main.centerX, 720, "boton_respuesta").setScale(1.1).setScrollFactor(0)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      botonRespuesta1.removeInteractive();
      botonRespuesta2.removeInteractive();
      botonRespuesta3.removeInteractive();
      botonRespuesta4.removeInteractive();
      if(respPregunta[2].esCorrecta  === true){

        botonRespuesta3.setTexture('popup_respuesta_correcta')
        setTimeout(() => {
          respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (monedabotonayuda === false) {
            players[turno].monedas = players[turno].monedas + 100;
          } else {
            players[turno].monedas = players[turno].monedas + 50;
          }
          sonidocasillamonedas.play();
          mago.destroy();
        }, 2000);

        
      }else{
        botonRespuesta3.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);
        setTimeout(() => {
          mago.destroy();
        }, 2000);
      }

      //fin de juego de pregunta

      setTimeout(() => {
        //vaciar y reiniciar array
        contadorPregunta = true;
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();

        //desaparecer objetos
        trans.destroy();
        popup.destroy();
        iconomonedaayuda.destroy();
        textmonedasayuda.destroy();
        botonRespuesta1.destroy();
        botonRespuesta2.destroy();
        botonRespuesta3.destroy();
        botonRespuesta4.destroy();
        botonayudaimg.destroy();
        botonayuda.destroy();
        textopreg.destroy();
        resp1.destroy();
        resp2.destroy();
        resp3.destroy();
        resp4.destroy();

      }, 2000);
      setTimeout(() => {
        //cambiador de turnos
        contadorturno = true;
        contadorRuleta = true;
      }, 3000);
      setTimeout(() => {
        //reinicio animacion icono de jugador
        triangulo.destroy();
        textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 3300);
    })
    .on("pointerover", () => {

      botonRespuesta3.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta3.setTexture('boton_respuesta')
    });
    
    ////
    //respuesta 4
    var botonRespuesta4 = this.add.image(this.cameras.main.centerX, 800, "boton_respuesta").setScale(1.1).setScrollFactor(0)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      botonRespuesta1.removeInteractive();
      botonRespuesta2.removeInteractive();
      botonRespuesta3.removeInteractive();
      botonRespuesta4.removeInteractive();
      if(respPregunta[3].esCorrecta  === true){

        botonRespuesta4.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (monedabotonayuda === false) {
            players[turno].monedas = players[turno].monedas + 100;
          } else {
            players[turno].monedas = players[turno].monedas + 50;
          }
          sonidocasillamonedas.play();
          mago.destroy();
        }, 2000);
      }else{
        botonRespuesta4.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);
        setTimeout(() => {
          mago.destroy();
        }, 2000);
        
      }

      //fin de juego de pregunta

      setTimeout(() => {
        //vaciar y reiniciar array
        contadorPregunta = true;
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();
        respPregunta.pop();

        //desaparecer objetos
        trans.destroy();
        popup.destroy();
        iconomonedaayuda.destroy();
        textmonedasayuda.destroy();
        botonRespuesta1.destroy();
        botonRespuesta2.destroy();
        botonRespuesta3.destroy();
        botonRespuesta4.destroy();
        botonayudaimg.destroy();
        botonayuda.destroy();
        textopreg.destroy();
        resp1.destroy();
        resp2.destroy();
        resp3.destroy();
        resp4.destroy();

      }, 2000);
      setTimeout(() => {
        //cambiador de turnos
        contadorturno = true;
        contadorRuleta = true;
      }, 3000);
      setTimeout(() => {
        //reinicio animacion icono de jugador
        triangulo.destroy();
        textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 3300);

    })
    .on("pointerover", () => {

      botonRespuesta4.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta4.setTexture('boton_respuesta')
    });

    //boton de ayuda

    var botonayudaimg = this.add.image(1100, 920, "boton_ayuda").setScrollFactor(0)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
      monedaayuda.play();

      monedabotonayuda = true;

      botonayuda.setStyle({ fill: "#63562E"});
      botonayudaimg.setTexture('boton_ayuda3');
      botonRespuesta2.destroy();
      botonRespuesta4.destroy();
      botonayudaimg.removeInteractive();
    })
    .on("pointerover", () => {
      //botonayuda.setStyle({ fill: "#fff" });
      botonayudaimg.setTexture('boton_ayuda2');
    })
    .on("pointerout", () => {
      botonayuda.setStyle({ fill: "#3B3B3B" });
      botonayudaimg.setTexture('boton_ayuda')
    });
    var botonayuda = this.add.text(1055, 900, "Ayuda").setScrollFactor(0)
    .setStyle({
      fontSize: "32px",
      fill: "#3B3B3B",
      fontFamily: "Times",
    })
    


    //pregunta
    var textopreg = this.add.text(750,350, preguntasArray[turnPregunta].pregunta)
    .setScrollFactor(0)
    .setStyle({
      maxLines: 20,
      fontFamily: "Times",
      fontSize: "36px",
      fill: "#FFFFF",
      fixedWidth: 2000,
    });

    //textos respuestas
    var resp1 = this.add.text(this.cameras.main.centerX - 200, 540, respPregunta[0].texto).setScrollFactor(0)
    .setStyle({
      fontSize: "36px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    
    var resp2 = this.add.text(this.cameras.main.centerX - 200, 620, respPregunta[1].texto).setScrollFactor(0)
    .setStyle({
      fontSize: "36px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    var resp3 = this.add.text(this.cameras.main.centerX - 200, 700, respPregunta[2].texto).setScrollFactor(0)
    .setStyle({
      fontSize: "36px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    var resp4 = this.add.text(this.cameras.main.centerX - 200, 780, respPregunta[3].texto).setScrollFactor(0)
    .setStyle({
      fontSize: "36px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })

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
      cartelfunc = 1;
      this.cartelFunciones();

      setTimeout(() => {
        this.pregunta();
      }, 2000);
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
      cartelfunc = 2;
      this.cartelFunciones();
      this.monedas();
      sonidocasillamonedas.play();
  
      setTimeout(() => {
        contadorturno = true;
        contadorRuleta = true;
      }, 2000);
      setTimeout(() => {
        triangulo.destroy();
        textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 2300);
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
      cartelfunc = 3;
      this.cartelFunciones();
      this.funcPerderTurno();
      setTimeout(() => {
        contadorturno = true;
        contadorRuleta = true;
      }, 2000);
      setTimeout(() => {
        triangulo.destroy();
        textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 2300);
    } else if (players[turno].acumulador === 100) {
      setTimeout(() => {
        this.scene.start("Resultado", {
          CantidadJugadores: CantidadJugadores,
          players: players,
        });
      }, 500);
    } else {
      setTimeout(() => {
        contadorturno = true;
        contadorRuleta = true;
      }, 500);
      setTimeout(() => {
        triangulo.destroy();
        textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 800);
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


  cartelFunciones(){

    var cartel = this.add.image(this.cameras.main.centerX + 10, 145, 'cartelfunciones').setScale(0.35).setScrollFactor(0)
    var cad1 = this.add.image(this.cameras.main.centerX - 100, 67, 'cadenaseleccion').setScale(0.35).setScrollFactor(0)
    var cad2 = this.add.image(this.cameras.main.centerX + 120, 67, 'cadenaseleccion').setScale(0.35).setScrollFactor(0)
    var texto = this.add.text(this.cameras.main.centerX - 118, 125, '¡Respondé la pregunta!').setScrollFactor(0)
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '26px', 
            fill: '#FFFFFF',
            align: 'center',
          });

    if(cartelfunc === 1){
      texto.setText('¡Respondé la pregunta!')
    }else if(cartelfunc === 2){

      texto.setText('   ¡Ganaste monedas!')
    }else if(cartelfunc === 3){
      texto.setText('  ¡Perdiste dos turnos!')
    }
          
    var madera = this.add.image(this.cameras.main.centerX + 10, 108, 'hudmadera').setScale(1.05).setScrollFactor(0)
    
    
    this.tweens.add({
      targets: cartel,
      duration: 1500,
      y: this.cameras.main.centerY - 280,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: cartel,
          duration: 700,
          y: 145,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
          onComplete: () => {
            cartel.destroy();
            cad1.destroy();
            cad2.destroy();
            madera.destroy();
            texto.destroy();
          }
        });
      },
    });
    this.tweens.add({
      targets: cad1,
      duration: 1500,
      y:  this.cameras.main.centerY - 360,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: cad1,
          duration: 700,
          y: 67,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
        });
      },
    });
    this.tweens.add({
      targets: cad2,
      duration: 1500,
      y:  this.cameras.main.centerY - 360,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: cad2,
          duration: 700,
          y: 67,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
        });
      },
    });
    this.tweens.add({
      targets: texto,
      duration: 1500,
      y:  this.cameras.main.centerY - 295,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: texto,
          duration: 700,
          y: 125,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
        });
      },
    });
  
  }


  IconoTurno(){

    console.log(players[turno])
    console.log('icono turno ', players[turno].jugador)
    triangulo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY - 190, 'triangulo').setScale(0.2).setScrollFactor(0);
    textoTurnoJugador = this.add.text(this.cameras.main.centerX -65,this.cameras.main.centerY - 260, players[turno].jugador,
      {
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "36px",
        color: "#ffffff",
      }
    );
    textoTurnoJugador.setShadow(3, 3, "#000", 0).setScrollFactor(0);
    this.tweens.add({
      targets: triangulo,
      duration: 1000,
      y:  this.cameras.main.centerY - 160,
      ease: "Power3",
      yoyo: false,
      repeat: 3,
    });
    this.tweens.add({
      targets: textoTurnoJugador,
      duration: 1000,
      y:  this.cameras.main.centerY - 230,
      ease: "Power3",
      yoyo: false,
      repeat: 3,
    });
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
