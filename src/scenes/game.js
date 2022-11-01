import Phaser from "phaser";
import Pregunta from "../clases/Pregunta.js";
import preguntasArray from "./preguntas.js";


var dado = 0;







export class Game extends Phaser.Scene {

  //dado 
  

  //sonidos
  respuestaincorrecta;
  respuestacorrecta;
  sonidocasillamonedas;
  monedaayuda;

  //camara
  camara;

  //ruleta y hud
  ruleta;
  contadorRuleta = true;
  bloqueoruleta;
  bloqueruletaboolean = 0;


  monedabotonayuda = false;

  //casillas

  casillas = [];

  //casilla preguntas
  turnPregunta = 0;
  contadorPregunta = false;
  respPregunta = [];
  

  //temporizador casilla preguntas
  temporizador;

  //cambio texto cartel de funciones
  cartelfunc = 0;

  //jugadores

  CantidadJugadores;

  //turnos
  players;
  playerActivo;
  turno = 0;
  contadorturno = false;
  primerturno = 0;
  triangulo;
  textoTurnoJugador;

  //
  //monedas jugadores
  textmonedasjugador1;
  textmonedasjugador2;
  textmonedasjugador3;
  textmonedasjugador4;

  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Game");
  }

  init(data) {
    this.players = data.players;
    this.CantidadJugadores = data.CantidadJugadores;
    this.temporizador = data.temporizador;
  }

  create() {
    //sonidos
    console.log(this.temporizador);
    
    //popup
    this.respuestaincorrecta = this.sound.add("respuestaincorrecta");
    this.respuestaincorrecta.setVolume(0.55).setRate(1.5);
    this.respuestacorrecta = this.sound.add("respuestacorrecta");
    this.respuestacorrecta.setVolume(0.7).setRate(0.9);
    this.sonidocasillamonedas = this.sound.add("sonidocasillamonedas");
    this.sonidocasillamonedas.setVolume(1);
    this.monedaayuda = this.sound.add("monedaayuda");
    this.monedaayuda.setVolume(1.5);

    //tablero
    var tablerogame;

    tablerogame = this.add.image(4740.5, 1403.5, "tablero").setScale(1).setDepth(1);

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
    const casilla1Layer = map.createLayer("casilla_pantano_comun",casilla1,0,0).setDepth(1);
    const casilla2Layer = map.createLayer("casilla_pantano_pierde_turno",casilla2,0,0).setDepth(1);
    const casilla3Layer = map.createLayer("casilla_pantano_volver",casilla3,0,0).setDepth(1);
    const casilla4Layer = map.createLayer("casilla_pantano_pregunta_X",casilla4,0,0).setDepth(1);
    const casilla5Layer = map.createLayer("casilla_pantano_pregunta_Y",casilla5,0,0).setDepth(1);
    const casilla6Layer = map.createLayer("casilla_pantano_avanzar",casilla6,0,0).setDepth(1);
    const casilla7Layer = map.createLayer("casilla_pantano_moneda_X",casilla7,0,0).setDepth(1);
    const casilla8Layer = map.createLayer("casilla_pantano_moneda_Y",casilla8,0,0).setDepth(1);
    const casilla9Layer = map.createLayer("casilla_pantano_esquina",casilla9,0,0).setDepth(1);
    const troncosLayer = map.createLayer("troncos_pantano", troncos, 0, 0).setDepth(1);

    //bosque
    const casilla10Layer = map.createLayer("casilla_bosque_comun",casilla10,0,0).setDepth(1);
    const casilla11Layer = map.createLayer("casilla_bosque_pierde_turno",casilla11,0,0).setDepth(1);
    const casilla12Layer = map.createLayer("casilla_bosque_volver",casilla12,0,0).setDepth(1);
    const casilla13Layer = map.createLayer("casilla_bosque_pregunta_X",casilla13,0,0).setDepth(1);
    const casilla14Layer = map.createLayer("casilla_bosque_pregunta_Y",casilla14,0,0).setDepth(1);
    const casilla15Layer = map.createLayer("casilla_bosque_avanzar",casilla15,0,0).setDepth(1);
    const casilla16Layer = map.createLayer("casilla_bosque_moneda_X",casilla16,0,0).setDepth(1);
    const casilla17Layer = map.createLayer("casilla_bosque_moneda_Y",casilla17,0,0).setDepth(1);
    const casilla18Layer = map.createLayer("casilla_bosque_esquina",casilla18,0,0).setDepth(1);

    //aldea
    const casilla19Layer = map.createLayer("casilla_aldea_comun",casilla19,0,0).setDepth(2);
    const casilla20Layer = map.createLayer("casilla_aldea_pierde_turno",casilla20,0,0).setDepth(2);
    const casilla21Layer = map.createLayer("casilla_aldea_volver",casilla21,0,0).setDepth(2);
    const casilla22Layer = map.createLayer("casilla_aldea_pregunta_X",casilla22,0,0).setDepth(2);
    const casilla23Layer = map.createLayer("casilla_aldea_pregunta_Y",casilla23,0,0).setDepth(2);
    const casilla24Layer = map.createLayer("casilla_aldea_avanzar",casilla24,0,0).setDepth(2);
    const casilla25Layer = map.createLayer("casilla_aldea_moneda_X",casilla25,0,0).setDepth(2);
    const casilla26Layer = map.createLayer("casilla_aldea_moneda_Y",casilla26,0,0).setDepth(2);
    const casilla27Layer = map.createLayer("casilla_aldea_esquina",casilla27,0,0).setDepth(2);

    //castillo
    const casilla28Layer = map.createLayer("casilla_castillo_comun",casilla28,0,0).setDepth(2);
    const casilla29Layer = map.createLayer("casilla_castillo_pierde_turno",casilla29,0,0).setDepth(2);
    const casilla30Layer = map.createLayer("casilla_castillo_volver",casilla30,0,0).setDepth(2);
    const casilla31Layer = map.createLayer("casilla_castillo_pregunta_X",casilla31,0,0).setDepth(2);
    const casilla32Layer = map.createLayer("casilla_castillo_pregunta_Y",casilla32,0,0).setDepth(2);
    const casilla33Layer = map.createLayer("casilla_castillo_avanzar",casilla33,0,0).setDepth(2);
    const casilla34Layer = map.createLayer("casilla_castillo_moneda_X",casilla34,0,0).setDepth(2);
    const casilla35Layer = map.createLayer("casilla_castillo_moneda_Y",casilla35,0,0).setDepth(2);
    const casilla36Layer = map.createLayer("casilla_castillo_esquina",casilla36,0,0).setDepth(2);

    //pantano
    casilla1Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla2Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla3Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    casilla4Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla5Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla6Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla7Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla8Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla9Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //bosque
    casilla10Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla11Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla12Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    casilla13Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla14Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla15Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla16Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla17Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla18Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //aldea
    casilla19Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla20Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla21Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    casilla22Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla23Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla24Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla25Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla26Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla27Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //castillo
    casilla28Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla29Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla30Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    casilla31Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla32Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla33Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla34Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla35Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    casilla36Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //ordenamiento de casillas

    this.casillas = this.casillas.sort((a, b) => {
      if (a.x == b.x) {
        let c_a = this.casillas.find((c) => c.x == a.x - 1);
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
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "hud").setScrollFactor(0).setDepth(3);
    
    this.TextoMonedas();
   
    this.IconoTurno();

    //camara
    this.camara = this.cameras.main;

    //push y mezcla de respuestas de la primer pregunta
    this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["1"]);
    this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["2"]);
    this.respPregunta.push(preguntasArray[ this.turnPregunta].opciones["3"]);
    this.respPregunta.push(preguntasArray[ this.turnPregunta].opciones["4"]);

    this.respPregunta.sort(() => Math.random() - 0.5)


    this.pregunta();


    ////

    //ruleta

    var resplandor;

    this.ruleta = this.add
      .image(1200, 100, "ruletaimagen")
      .setScrollFactor(0)
      .setScale(1.2)
      .setDepth(4)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sound.play("ruleta-sonido");
        this.girar(this.ruleta);
        this.ruleta.disableInteractive();
        this.contadorRuleta = false;
        this.bloqueoruleta = this.add
          .image(1280, 25, "bloqueoruleta")
          .setScale(0.03)
          .setScrollFactor(0)
          .setDepth(4);
        this.bloqueruletaboolean = 1;
        setTimeout(() => {
          this.primerturno = this.primerturno + 1;
          this.moverDerecha(this.playerActivo);

        }, 3000);
      })
      .on("pointerover", () => {
        resplandor = this.add
          .image(1200, 100, "ruleta_resplandor")
          .setScale(0.85)
          .setScrollFactor(0)
          .setDepth(4);
      })
      .on("pointerout", () => {
        resplandor.destroy();
      });

    this.add.image(1200, 20, "agujaruleta").setScale(1).setScrollFactor(0).setDepth(4);
    
  }

  //update

  update() {
    ////
    //monedas jugadores
    this.ActualizarMonedas();
    //bloqueador de ruleta para no apretar muchas veces a la vez
    if (this.contadorRuleta === true) {
      this.ruleta.setInteractive();
    if (this.bloqueruletaboolean === 1) {
        this.bloqueoruleta.destroy();
        this.bloqueruletaboolean = 0;
    }
    }

    //turnos jugadores
    this.playerActivo = this.players[this.turno].imagen;
    //camara
    this.camara.startFollow(this.playerActivo);
    //cambio texto jugador
    ////
    //turnos

    //cambio a turnos normales
    while (this.contadorturno === true) {
      this.turno++;
      this.contadorturno = false;
      //reinicio de variable
      if (this.turno === 2 && this.CantidadJugadores === 2) {
        this.turno = 0;
      }

      if (this.turno === 3 && this.CantidadJugadores === 3) {
        this.turno = 0;
      }

      if (this.turno === 4 && this.CantidadJugadores === 4) {
        this.turno = 0;
      }

      //funcion perder turno
      if (this.players[this.turno].perderTurno === true) {
        if (this.players[this.turno].contadorPerderTurno === 2) {
          this.players[this.turno].perderTurno = false;
          this.players[this.turno].contadorPerderTurno = 0;
        } else {
          this.contadorturno = true;
          this.players[this.turno].contadorPerderTurno++;
          if (this.players[this.turno].contadorPerderTurno === 2) {
            this.players[this.turno].perderTurno = false;
            this.players[this.turno].contadorPerderTurno = 0;
          }
        }
      }
    }

    //desbug perder turno
    if (this.players[this.turno].perderTurno === true) {
      if (
        this.CantidadJugadores === 2 &&
        this.players[0].perderTurno === true &&
        this.players[1].perderTurno === true
      ) {
        if (this.players[0].contadorPerderTurno > this.players[1].contadorPerderTurno) {
          this.players[0].perderTurno = false;
          this.players[0].contadorPerderTurno = 0;
          this.players[1].contadorPerderTurno++;
        } else if (
          this.players[0].contadorPerderTurno < this.players[1].contadorPerderTurno
        ) {
          this.players[1].perderTurno = false;
          this.players[1].contadorPerderTurno = 0;
          this.players[0].contadorPerderTurno++;
        } else {
          this.players[1].perderTurno = false;
          this.players[0].perderTurno = false;
          this.players[1].contadorPerderTurno = 0;
          this.players[0].contadorPerderTurno = 0;
        }
      }
    }

    ////

    //turnos para que las preguntas vayan cambiando

    while (this.contadorPregunta === true) {
      this.turnPregunta++;
      this.contadorPregunta = false;

      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["1"]);
      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["2"]);
      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["3"]);
      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["4"]);

      this.respPregunta.sort(() => Math.random() - 0.5)

      console.log(this.respPregunta)
    }

  }


  girar(ruleta) {
    dado = 0;
    this.tweens.add({
      targets: ruleta,
      duration: 2700,
      rotation: Phaser.Math.Between(360, 720),
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: function () {
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

    let count = 0;
    for (
      let i = this.players[this.turno].casilla > 0 ? this.players[this.turno].casilla : 0;
      i <= this.players[this.turno].casilla + dado;
      i++
    ) {
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * count,
        duration: 400 * (count + 1),
        x: this.casillas[i].pixelX + 100 / 2,
        y: this.casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          if (i == this.players[this.turno].casilla + dado) {
            this.players[this.turno].casilla += dado;
            this.players[this.turno].acumulador += dado;

            if (this.players[this.turno].acumulador > 100) {
              this.players[this.turno].acumulador = 100;
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
      let i = this.players[this.turno].casilla > 0 ? this.players[this.turno].casilla : 0;
      i <= this.players[this.turno].casilla + dado;
      i++
    ) {
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * count,
        duration: 400 * (count + 1),
        x: this.casillas[i].pixelX + 100 / 2,
        y: this.casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          if (i == this.players[this.turno].casilla + dado) {
            this.players[this.turno].casilla += dado;
            this.players[this.turno].acumulador += dado;

            if (this.players[this.turno].acumulador > 100) {
              this.players[this.turno].acumulador = 100;
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
    for (let i = this.players[this.turno].casilla; i > this.players[this.turno].casilla - 3; i--) {
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * count,
        duration: 400 * (count + 1),
        x: this.casillas[i].pixelX + 100 / 2,
        y: this.casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          if (endTweenCounter == 2) {
            this.players[this.turno].casilla = this.players[this.turno].casilla - 2;
            this.players[this.turno].acumulador -= 2;

            if (this.players[this.turno].acumulador > 100) {
              this.players[this.turno].acumulador = 100;
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
    this.players[this.turno].perderTurno = true;
  }

  //funcion de pregunta

  pregunta(){
    var resp1boolean = false;
    var resp2boolean = false;
    var resp3boolean = false;
    var resp4boolean = false;
    var botonayudaboolean = false;

    var trans = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"transparencia").setAlpha(0.5).setScrollFactor(0).setDepth(6);
    var popup = this.add.image(this.cameras.main.centerX, 625, "popup").setScale(1.1).setScrollFactor(0).setDepth(7);
    var mago = this.add.image(1400, 600, "magopregunta").setScale(1).setScrollFactor(0).setDepth(7);
    //monedas boton ayuda
    var iconomonedaayuda = this.add.image(1000, 920, "iconomoneda").setScale(0.8).setScrollFactor(0).setDepth(7);
    var textmonedasayuda = this.add.text(1025, 900, "50", {
        fontFamily: "Times",
        fontSize: "36px",
        color: "#2B2B2B",
    }).setScrollFactor(0).setDepth(7);

    ////
    //respuesta 1
    var botonRespuesta1 = this.add.image(this.cameras.main.centerX, 560, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      removes();
      if(this.respPregunta[0].esCorrecta === true){

        botonRespuesta1.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          this.respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 50;
          }
          this.sonidocasillamonedas.play();
        }, 2000);

      }else{

        botonRespuesta1.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);
      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      destroys()
      
      this.finalPopUp();

    })
    .on("pointerover", () => {

      botonRespuesta1.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta1.setTexture('boton_respuesta')
    });
    ////
    //respuesta 2
    var botonRespuesta2 = this.add.image(this.cameras.main.centerX, 640, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      removes();
      if(this.respPregunta[1].esCorrecta  === true){

        botonRespuesta2.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          this.respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 50;
          }
          this.sonidocasillamonedas.play();
        }, 2000);

      }else{
        botonRespuesta2.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);

      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      destroys()
      
      this.finalPopUp();
    })
    .on("pointerover", () => {

      botonRespuesta2.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta2.setTexture('boton_respuesta')
    });
    
    ////
    //respuesta 3
    var botonRespuesta3 = this.add.image(this.cameras.main.centerX, 720, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      removes();
      if(this.respPregunta[2].esCorrecta  === true){

        botonRespuesta3.setTexture('popup_respuesta_correcta')
        setTimeout(() => {
          this.respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 50;
          }
          this.sonidocasillamonedas.play();
        }, 2000);

        
      }else{
        botonRespuesta3.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);
        
      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      destroys()
      
      this.finalPopUp();
    })
    .on("pointerover", () => {

      botonRespuesta3.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta3.setTexture('boton_respuesta')
    });
    
    ////
    //respuesta 4
    var botonRespuesta4 = this.add.image(this.cameras.main.centerX, 800, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {

      removes();
      if(this.respPregunta[3].esCorrecta  === true){

        botonRespuesta4.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          this.respuestacorrecta.play();
          mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 50;
          }
          this.sonidocasillamonedas.play();
          
        }, 2000);
      }else{
        botonRespuesta4.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.respuestaincorrecta.play();
          mago.setTexture('magotriste')
        }, 200);
        
      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      destroys()
      
      this.finalPopUp();

    })
    .on("pointerover", () => {

      botonRespuesta4.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      botonRespuesta4.setTexture('boton_respuesta')
    });

    //boton de ayuda
    var botonayudaimg = this.add.image(1140, 920, "boton_ayuda").setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
      this.monedaayuda.play();

      this.monedabotonayuda = true;
      botonayudaboolean = true;

      botonayuda.setStyle({ fill: "#63562E"});
      botonayudaimg.setTexture('boton_ayuda3');
      botonayudaimg.removeInteractive();

      if(this.respPregunta[0].esCorrecta  === true){
        botonRespuesta2.destroy();
        resp2boolean = true;
        resp2.destroy();
        botonRespuesta4.destroy();
        resp4boolean = true;
        resp4.destroy();
      }

      if(this.respPregunta[1].esCorrecta  === true){
        botonRespuesta1.destroy();
        resp1boolean = true;
        resp1.destroy();
        botonRespuesta4.destroy();
        resp4boolean = true;
        resp4.destroy();
      }

      if(this.respPregunta[2].esCorrecta  === true){
        botonRespuesta2.destroy();
        resp2boolean = true;
        resp2.destroy();
        botonRespuesta1.destroy();
        resp1boolean = true;
        resp1.destroy();
      }

      if(this.respPregunta[3].esCorrecta  === true){
        botonRespuesta2.destroy();
        resp2boolean = true;
        resp2.destroy();
        botonRespuesta3.destroy();
        resp3boolean = true;
        resp3.destroy();
      }
    })
    .on("pointerover", () => {
      //botonayuda.setStyle({ fill: "#fff" });
      botonayudaimg.setTexture('boton_ayuda2');
    })
    .on("pointerout", () => {
      botonayuda.setStyle({ fill: "#3B3B3B" });
      botonayudaimg.setTexture('boton_ayuda')
    });
    var botonayuda = this.add.text(1095, 900, "Ayuda").setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#3B3B3B",
      fontFamily: "Times",
    })
    


    //pregunta
    var textopreg = this.add.text(740,350, preguntasArray[this.turnPregunta].pregunta)
    .setScrollFactor(0).setDepth(7)
    .setStyle({
      maxLines: 20,
      fontFamily: "Times",
      fontSize: "36px",
      fill: "#FFFFF",
      fixedWidth: 2000,
    });

    //textos respuestas
    var resp1 = this.add.text(this.cameras.main.centerX - 200, 540, this.respPregunta[0].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    
    var resp2 = this.add.text(this.cameras.main.centerX - 200, 620, this.respPregunta[1].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    var resp3 = this.add.text(this.cameras.main.centerX - 200, 700, this.respPregunta[2].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    var resp4 = this.add.text(this.cameras.main.centerX - 200, 780, this.respPregunta[3].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })

  
  //temporizador

  if(this.temporizador === 0){

  }else{

    var timedEvent = this.time.addEvent({ 
      delay: 1000, 
      callback: onSecond, 
      callbackScope: this, 
      repeat: this.temporizador
    });

    var TempTime = this.temporizador;
    var tempTimeText = this.add.text(this.cameras.main.centerX - 160, this.cameras.main.centerY + 360, this.temporizador, {
    fontFamily: "Times",
    fontSize: "36px",
    color: "#2B2B2B",
    }).setScrollFactor(0).setDepth(7);
    var cronometro = this.add.image(770, 915, 'cronometro').setScrollFactor(0).setDepth(7).setScale(0.4)
  }

  function onSecond() {
   
    if(TempTime === 0){
      tempTimeText.setText('0');
      mago.setTexture('magotriste')
      removes();
      destroys();
      this.finalPopUp();
      
    }else{
      TempTime = TempTime - 1;
      tempTimeText.setText(TempTime);
    }   
  }



  function removes(){

    if(resp1boolean === false){
      botonRespuesta1.removeInteractive();
    }

    if(resp2boolean === false){
      botonRespuesta2.removeInteractive();
    }

    if(resp3boolean === false){
      botonRespuesta3.removeInteractive();
    }

    if(resp4boolean === false){
      botonRespuesta4.removeInteractive();
    }

    if(botonayudaboolean === false){
      botonayudaimg.removeInteractive();
    }
  }
  
  var destroyboolean = this.temporizador;
  function destroys(){
    setTimeout(() => {
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
      mago.destroy();
    
      if(destroyboolean > 0){
        tempTimeText.destroy();
        timedEvent.destroy();
        cronometro.destroy();
      }
    }, 2000);
  }


  //fin pregunta
  }

  finalPopUp(){
    setTimeout(() => {
      //vaciar y reiniciar array
      this.contadorPregunta = true;
      this.respPregunta.pop();
      this.respPregunta.pop();
      this.respPregunta.pop();
      this.respPregunta.pop();

    }, 2000);
    setTimeout(() => {
      //cambiador de turnos
      this.contadorturno = true;
      this.contadorRuleta = true;
    }, 3000);
    setTimeout(() => {
      //reinicio animacion icono de jugador
      this.triangulo.destroy();
      this.textoTurnoJugador.destroy();
      this.IconoTurno();
    }, 3300);
  }



  

  //funcion monedas

  monedas() {
    this.players[this.turno].monedas = this.players[this.turno].monedas + 500;
  }

  corroborarCasillas() {
    if (
      this.players[this.turno].acumulador === 3 ||
      this.players[this.turno].acumulador === 12 ||
      this.players[this.turno].acumulador === 22 ||
      this.players[this.turno].acumulador === 27 ||
      this.players[this.turno].acumulador === 39 ||
      this.players[this.turno].acumulador === 45 ||
      this.players[this.turno].acumulador === 55 ||
      this.players[this.turno].acumulador === 62 ||
      this.players[this.turno].acumulador === 72 ||
      this.players[this.turno].acumulador === 80 ||
      this.players[this.turno].acumulador === 88 ||
      this.players[this.turno].acumulador === 93
    ) {
      //funcion preguntas (casillas: 4, 12, 20, 25, 36, 40)
      this.cartelfunc = 1;
      this.cartelFunciones();

      setTimeout(() => {
        this.pregunta();
      }, 2000);
    } else if (
      this.players[this.turno].acumulador === 5 ||
      this.players[this.turno].acumulador === 25 ||
      this.players[this.turno].acumulador === 36 ||
      this.players[this.turno].acumulador === 50 ||
      this.players[this.turno].acumulador === 59 ||
      this.players[this.turno].acumulador === 66 ||
      this.players[this.turno].acumulador === 76 ||
      this.players[this.turno].acumulador === 87
    ) {
      //funcion avanzar (casillas: 5, 24, 34)
      this.avanzar(this.playerActivo);
    } else if (
      this.players[this.turno].acumulador === 6 ||
      this.players[this.turno].acumulador === 19 ||
      this.players[this.turno].acumulador === 33 ||
      this.players[this.turno].acumulador === 48 ||
      this.players[this.turno].acumulador === 58 ||
      this.players[this.turno].acumulador === 70 ||
      this.players[this.turno].acumulador === 78 ||
      this.players[this.turno].acumulador === 96
    ) {
      //funcion monedas  (casillas: 6, 18, 31, 42)

      //ogro.anims.play('ogrofeliz', true);
      this.cartelfunc = 2;
      this.cartelFunciones();
      this.monedas();
      this.sonidocasillamonedas.play();
  
      setTimeout(() => {
        this.contadorturno = true;
        this.contadorRuleta = true;
      }, 2000);
      setTimeout(() => {
        this.triangulo.destroy();
        this.textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 2300);
    } else if (
      this.players[this.turno].acumulador === 8 ||
      this.players[this.turno].acumulador === 17 ||
      this.players[this.turno].acumulador === 29 ||
      this.players[this.turno].acumulador === 43 ||
      this.players[this.turno].acumulador === 56 ||
      this.players[this.turno].acumulador === 65 ||
      this.players[this.turno].acumulador === 82 ||
      this.players[this.turno].acumulador === 99
    ) {
      //funcion retroceder  (casillas: 8, 17, 27, 39)
      this.retroceder(this.playerActivo);
    } else if (
      this.players[this.turno].acumulador === 10 ||
      this.players[this.turno].acumulador === 42 ||
      this.players[this.turno].acumulador === 64 ||
      this.players[this.turno].acumulador === 97
    ) {
      //funcion perder turno  (casillas: 10, 38)
      this.cartelfunc = 3;
      this.cartelFunciones();
      this.funcPerderTurno();
      setTimeout(() => {
        this.contadorturno = true;
        this.contadorRuleta = true;
      }, 2000);
      setTimeout(() => {
        this.triangulo.destroy();
        this.textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 2300);
    } else if (this.players[this.turno].acumulador === 100) {
      setTimeout(() => {
        this.scene.start("Resultado", {
          CantidadJugadores: this.CantidadJugadores,
          players: this.players,
        });
      }, 500);
    } else {
      setTimeout(() => {
        this.contadorturno = true;
        this.contadorRuleta = true;
      }, 500);
      setTimeout(() => {
        this.triangulo.destroy();
        this.textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 800);
    }
  }

  //funcion para actualizar monedas

  ActualizarMonedas() {
    if (this.CantidadJugadores >= 2) {
      this.textmonedasjugador1.setText("Jugador 1:        " + this.players[0].monedas);
      this.textmonedasjugador2.setText("Jugador 2:        " + this.players[1].monedas);
    } 
    if (this.CantidadJugadores >= 3) {
      this.textmonedasjugador3.setText("Jugador 3:        " + this.players[2].monedas);
    }
    if (this.CantidadJugadores === 4) {
      this.textmonedasjugador4.setText("Jugador 4:        " + this.players[3].monedas);
    }
  }


  cartelFunciones(){

    var cartel = this.add.image(this.cameras.main.centerX + 10, 145, 'cartelfunciones').setScale(0.35).setScrollFactor(0).setDepth(1)
    var cad1 = this.add.image(this.cameras.main.centerX - 100, 67, 'cadenaseleccion').setScale(0.35).setScrollFactor(0).setDepth(1)
    var cad2 = this.add.image(this.cameras.main.centerX + 120, 67, 'cadenaseleccion').setScale(0.35).setScrollFactor(0).setDepth(1)
    var texto = this.add.text(this.cameras.main.centerX - 118, 125, ' ').setScrollFactor(0).setDepth(1)
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '26px', 
            fill: '#FFFFFF',
            align: 'center',
          });

    if(this.cartelfunc === 1){
      texto.setText('¡Respondé la pregunta!')
    }else if(this.cartelfunc === 2){

      texto.setText('   ¡Ganaste monedas!')
    }else if(this.cartelfunc === 3){
      texto.setText('  ¡Perdiste dos turnos!')
    }
    
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

    this.triangulo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY - 190, 'triangulo').setScale(0.2).setScrollFactor(0).setDepth(5);
    this.textoTurnoJugador = this.add.text(this.cameras.main.centerX -69,this.cameras.main.centerY - 260, this.players[this.turno].jugador,
      {
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "36px",
        color: "#ffffff",
      }
    );
    this.textoTurnoJugador.setShadow(3, 3, "#000", 0).setScrollFactor(0).setDepth(5);
    this.tweens.add({
      targets: this.triangulo,
      duration: 1000,
      y:  this.cameras.main.centerY - 160,
      ease: "Power3",
      yoyo: false,
      repeat: 2,
    });
    this.tweens.add({
      targets: this.textoTurnoJugador,
      duration: 1000,
      y:  this.cameras.main.centerY - 230,
      ease: "Power3",
      yoyo: false,
      repeat: 2,
    });
  }

  InformacionPlayers() {
    if (this.CantidadJugadores >= 2) {
      //player2
      this.players[1].x = 880;
      this.players[1].y = 1830;
      this.players[1].monedas = 0;
      this.players[1].jugador = "Jugador 2";
      this.players[1].imagen = this.add
        .image(this.players[1].x, this.players[1].y, this.players[1].nombre)
        .setScale(0.5).setDepth(1);

      //player 1
      this.players[0].x = 930;
      this.players[0].y = 1830;
      this.players[0].monedas = 0;
      this.players[0].jugador = "Jugador 1";
      this.players[0].imagen = this.add
        .image(this.players[0].x, this.players[0].y, this.players[0].nombre)
        .setScale(0.5).setDepth(1);
    }
    if (this.CantidadJugadores >= 3) {
      //player 3
      this.players[2].x = 830;
      this.players[2].y = 1830;
      this.players[2].monedas = 0;
      this.players[2].jugador = "Jugador 3";
      this.players[2].imagen = this.add
        .image(this.players[2].x, this.players[2].y, this.players[2].nombre)
        .setScale(0.5).setDepth(1);
    }
    if (this.CantidadJugadores === 4) {
      //player 4
      this.players[3].x = 780;
      this.players[3].y = 1830;
      this.players[3].monedas = 0;
      this.players[3].jugador = "Jugador 4";
      this.players[3].imagen = this.add
        .image(this.players[3].x, this.players[3].y, this.players[3].nombre)
        .setScale(0.5).setDepth(1);
    }
  }

  TextoMonedas() {

    if(this.CantidadJugadores >= 2){
      //player 1
      this.add.image(730, 37, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador1 = this.add
        .text(550, 20, "Jugador 1:        " + this.players[0].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0).setDepth(4);

      //player 2
      this.add.image(730, 77, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador2 = this.add
        .text(550, 60, "Jugador 2:        " + this.players[1].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0).setDepth(4);   
    }
    if(this.CantidadJugadores >= 3){
       //player 3
      this.add.image(730, 117, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador3 = this.add
        .text(550, 100, "Jugador 3:        " + this.players[2].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0).setDepth(4);
    }
    if(this.CantidadJugadores === 4){
       //player 4
      this.add.image(730, 157, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador4 = this.add
        .text(550, 140, "Jugador 4:        " + this.players[3].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        })
        .setScrollFactor(0).setDepth(4);
    }


   
  }
}
