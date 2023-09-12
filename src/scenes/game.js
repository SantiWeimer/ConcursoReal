import Phaser from "phaser";
import Pregunta from "../clases/Pregunta.js";
import preguntasArray from "./preguntas.js";
import Boton from '../clases/Boton.js'
import { getPhrase } from "../services/translations.js";



export class Game extends Phaser.Scene {
  //ruleta y hud
  contadorRuleta = true;
  bloqueruletaboolean = 0;

  //casillas
  casillas = [];

  //casilla preguntas
  turnPregunta = 0;
  contadorPregunta = false;
  respPregunta = [];
  
  //boton ayuda popup
  monedabotonayuda = false;

  //cambio texto cartel de funciones
  cartelfunc = 0;

  //turnos
  players;
  playerActivo;
  turno = 0;
  contadorturno = false;
  primerturno = 0;

  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Game");
  }

  init(data) {
    this.players = data.players;
    this.CantidadJugadores = data.CantidadJugadores;
    this.temporizador = data.temporizador;
    this.sonido = data.sonido;
    this.sonidosgenerales = data.sonidosgenerales;
    this.musicamainmenu = data.musicamainmenu;
    this.idioma = data.idioma;
  }

  create() {

  
    //sonidos
    this.sonidosgenerales[10].setVolume(1 / this.sonido.volumenGeneral);
    this.sonidosgenerales[11].setVolume(0.7 / this.sonido.volumenGeneral);
    this.sonidosgenerales[12].setVolume(0.55 / this.sonido.volumenGeneral);
    this.sonidosgenerales[13].setVolume(1.5 / this.sonido.volumenGeneral);
    this.sonidosgenerales[14].setVolume(0.8 / this.sonido.volumenGeneral);
    

    //tablero

    this.tablerogame = this.add.image(4740.5 - 450, 1403.5, "tablero").setScale(1).setDepth(1);

    //tilemap

    this.map = this.make.tilemap({ key: "tilemap" });

    this.casilla1 = this.map.addTilesetImage("casilla_pantano_comun","casilla_pantano_comun");
    this.casilla2 = this.map.addTilesetImage("casilla_pantano_pierde_turno","casilla_pantano_pierde_turno");
    this.casilla3 = this.map.addTilesetImage("casilla_pantano_volver","casilla_pantano_volver");
    this.casilla4 = this.map.addTilesetImage("casilla_pantano_pregunta_X","casilla_pantano_pregunta_X");
    this.casilla5 = this.map.addTilesetImage("casilla_pantano_pregunta_Y","casilla_pantano_pregunta_Y");
    this.casilla6 = this.map.addTilesetImage("casilla_pantano_avanzar","casilla_pantano_avanzar");
    this.casilla7 = this.map.addTilesetImage("casilla_pantano_moneda_X","casilla_pantano_moneda_X");
    this.casilla8 = this.map.addTilesetImage("casilla_pantano_moneda_Y","casilla_pantano_moneda_Y");
    this.casilla9 = this.map.addTilesetImage("casilla_pantano_esquina","casilla_pantano_esquina");
    this.troncos = this.map.addTilesetImage("troncos_pantano", "troncos_pantano");

    this.casilla10 = this.map.addTilesetImage("casilla_bosque_comun","casilla_bosque_comun");
    this.casilla11 = this.map.addTilesetImage("casilla_bosque_pierde_turno","casilla_bosque_pierde_turno");
    this.casilla12 = this.map.addTilesetImage("casilla_bosque_volver","casilla_bosque_volver");
    this.casilla13 = this.map.addTilesetImage("casilla_bosque_pregunta_X","casilla_bosque_pregunta_X");
    this.casilla14 = this.map.addTilesetImage("casilla_bosque_pregunta_Y","casilla_bosque_pregunta_Y");
    this.casilla15 = this.map.addTilesetImage("casilla_bosque_avanzar","casilla_bosque_avanzar");
    this.casilla16 = this.map.addTilesetImage("casilla_bosque_moneda_X","casilla_bosque_moneda_X");
    this.casilla17 = this.map.addTilesetImage("casilla_bosque_moneda_Y","casilla_bosque_moneda_Y");
    this.casilla18 = this.map.addTilesetImage("casilla_bosque_esquina","casilla_bosque_esquina");

    this.casilla19 = this.map.addTilesetImage("casilla_aldea_comun","casilla_aldea_comun");
    this.casilla20 = this.map.addTilesetImage("casilla_aldea_pierde_turno","casilla_aldea_pierde_turno");
    this.casilla21 = this.map.addTilesetImage("casilla_aldea_volver","casilla_aldea_volver");
    this.casilla22 = this.map.addTilesetImage("casilla_aldea_pregunta_X","casilla_aldea_pregunta_X");
    this.casilla23 = this.map.addTilesetImage("casilla_aldea_pregunta_Y","casilla_aldea_pregunta_Y");
    this.casilla24 = this.map.addTilesetImage("casilla_aldea_avanzar","casilla_aldea_avanzar");
    this.casilla25 = this.map.addTilesetImage("casilla_aldea_moneda_X","casilla_aldea_moneda_X");
    this.casilla26 = this.map.addTilesetImage("casilla_aldea_moneda_Y","casilla_aldea_moneda_Y");
    this.casilla27 = this.map.addTilesetImage("casilla_aldea_esquina","casilla_aldea_esquina");

    this.casilla28 = this.map.addTilesetImage("casilla_castillo_comun","casilla_castillo_comun");
    this.casilla29 = this.map.addTilesetImage("casilla_castillo_pierde_turno","casilla_castillo_pierde_turno");
    this.casilla30 = this.map.addTilesetImage("casilla_castillo_volver","casilla_castillo_volver");
    this.casilla31 = this.map.addTilesetImage("casilla_castillo_pregunta_X","casilla_castillo_pregunta_X");
    this.casilla32 = this.map.addTilesetImage("casilla_castillo_pregunta_Y","casilla_castillo_pregunta_Y");
    this.casilla33 = this.map.addTilesetImage("casilla_castillo_avanzar","casilla_castillo_avanzar");
    this.casilla34 = this.map.addTilesetImage("casilla_castillo_moneda_X","casilla_castillo_moneda_X");
    this.casilla35 = this.map.addTilesetImage("casilla_castillo_moneda_Y","casilla_castillo_moneda_Y");
    this.casilla36 = this.map.addTilesetImage("casilla_castillo_esquina","casilla_castillo_esquina");

    this.casilla37 = this.map.addTilesetImage("casilla_pantano_pierde_turno_esquina","casilla_pantano_pierde_turno_esquina");
    this.casilla38 = this.map.addTilesetImage("casilla_bosque_moneda_esquina","casilla_bosque_moneda_esquina");
    this.casilla39 = this.map.addTilesetImage("casilla_bosque_avanzar_esquina","casilla_bosque_avanzar_esquina");
    this.casilla40 = this.map.addTilesetImage("casilla_aldea_moneda_esquina","casilla_aldea_moneda_esquina");
    this.casilla41 = this.map.addTilesetImage("casilla_aldea_pierde_turno_esquina","casilla_aldea_pierde_turno_esquina");
    this.casilla42 = this.map.addTilesetImage("casilla_castillo_esquina_pierde_turno","casilla_castillo_esquina_pierde_turno");
    this.casilla43 = this.map.addTilesetImage("casilla_castillo_esquina_volver","casilla_castillo_esquina_volver");
    
    //layers

    //pantano
    this.casilla1Layer = this.map.createLayer("casilla_pantano_comun",this.casilla1,0,0).setDepth(1);
    this.casilla2Layer = this.map.createLayer("casilla_pantano_pierde_turno",this.casilla2,0,0).setDepth(1);
    this.casilla3Layer = this.map.createLayer("casilla_pantano_volver",this.casilla3,0,0).setDepth(1);
    this.casilla4Layer = this.map.createLayer("casilla_pantano_pregunta_X",this.casilla4,0,0).setDepth(1);
    this.casilla5Layer = this.map.createLayer("casilla_pantano_pregunta_Y",this.casilla5,0,0).setDepth(1);
    this.casilla6Layer = this.map.createLayer("casilla_pantano_avanzar",this.casilla6,0,0).setDepth(1);
    this.casilla7Layer = this.map.createLayer("casilla_pantano_moneda_X",this.casilla7,0,0).setDepth(1);
    this.casilla8Layer = this.map.createLayer("casilla_pantano_moneda_Y",this.casilla8,0,0).setDepth(1);
    this.casilla9Layer = this.map.createLayer("casilla_pantano_esquina",this.casilla9,0,0).setDepth(1);
    this.troncosLayer = this.map.createLayer("troncos_pantano", this.troncos, 0, 0).setDepth(1);
    this.casilla37Layer = this.map.createLayer("casilla_pantano_pierde_turno_esquina",this.casilla37,0,0).setDepth(1);

    //bosque
    this.casilla10Layer = this.map.createLayer("casilla_bosque_comun",this.casilla10,0,0).setDepth(1);
    this.casilla11Layer = this.map.createLayer("casilla_bosque_pierde_turno",this.casilla11,0,0).setDepth(1);
    this.casilla12Layer = this.map.createLayer("casilla_bosque_volver",this.casilla12,0,0).setDepth(1);
    this.casilla13Layer = this.map.createLayer("casilla_bosque_pregunta_X",this.casilla13,0,0).setDepth(1);
    this.casilla14Layer = this.map.createLayer("casilla_bosque_pregunta_Y",this.casilla14,0,0).setDepth(1);
    this.casilla15Layer = this.map.createLayer("casilla_bosque_avanzar",this.casilla15,0,0).setDepth(1);
    this.casilla16Layer = this.map.createLayer("casilla_bosque_moneda_X",this.casilla16,0,0).setDepth(1);
    this.casilla17Layer = this.map.createLayer("casilla_bosque_moneda_Y",this.casilla17,0,0).setDepth(1);
    this.casilla18Layer = this.map.createLayer("casilla_bosque_esquina",this.casilla18,0,0).setDepth(1);
    this.casilla38Layer = this.map.createLayer("casilla_bosque_moneda_esquina",this.casilla38,0,0).setDepth(1);
    this.casilla39Layer = this.map.createLayer("casilla_bosque_avanzar_esquina",this.casilla39,0,0).setDepth(1);

    //aldea
    this.casilla19Layer = this.map.createLayer("casilla_aldea_comun",this.casilla19,0,0).setDepth(1);
    this.casilla20Layer = this.map.createLayer("casilla_aldea_pierde_turno",this.casilla20,0,0).setDepth(1);
    this.casilla21Layer = this.map.createLayer("casilla_aldea_volver", this.casilla21,0,0).setDepth(1);
    this.casilla22Layer = this.map.createLayer("casilla_aldea_pregunta_X", this.casilla22,0,0).setDepth(1);
    this.casilla23Layer = this.map.createLayer("casilla_aldea_pregunta_Y", this.casilla23,0,0).setDepth(1);
    this.casilla24Layer = this.map.createLayer("casilla_aldea_avanzar", this.casilla24,0,0).setDepth(1);
    this.casilla25Layer = this.map.createLayer("casilla_aldea_moneda_X", this.casilla25,0,0).setDepth(1);
    this.casilla26Layer = this.map.createLayer("casilla_aldea_moneda_Y", this.casilla26,0,0).setDepth(1);
    this.casilla27Layer = this.map.createLayer("casilla_aldea_esquina", this.casilla27,0,0).setDepth(1);
    this.casilla40Layer = this.map.createLayer("casilla_aldea_moneda_esquina", this.casilla40,0,0).setDepth(1);
    this.casilla41Layer = this.map.createLayer("casilla_aldea_pierde_turno_esquina", this.casilla41,0,0).setDepth(1);

    //castillo
    this.casilla28Layer = this.map.createLayer("casilla_castillo_comun", this.casilla28,0,0).setDepth(1);
    this.casilla29Layer = this.map.createLayer("casilla_castillo_pierde_turno", this.casilla29,0,0).setDepth(1);
    this.casilla30Layer = this.map.createLayer("casilla_castillo_volver",this.casilla30,0,0).setDepth(1);
    this.casilla31Layer = this.map.createLayer("casilla_castillo_pregunta_X",this.casilla31,0,0).setDepth(1);
    this.casilla32Layer = this.map.createLayer("casilla_castillo_pregunta_Y",this.casilla32,0,0).setDepth(1);
    this.casilla33Layer = this.map.createLayer("casilla_castillo_avanzar",this.casilla33,0,0).setDepth(1);
    this.casilla34Layer = this.map.createLayer("casilla_castillo_moneda_X",this.casilla34,0,0).setDepth(1);
    this.casilla35Layer = this.map.createLayer("casilla_castillo_moneda_Y",this.casilla35,0,0).setDepth(1);
    this.casilla36Layer = this.map.createLayer("casilla_castillo_esquina",this.casilla36,0,0).setDepth(1);
    this.casilla42Layer = this.map.createLayer("casilla_castillo_esquina_pierde_turno",this.casilla42,0,0).setDepth(1);
    this.casilla43Layer = this.map.createLayer("casilla_castillo_esquina_volver",this.casilla43,0,0).setDepth(1);

    //pantano
    this.casilla1Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla2Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla3Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    this.casilla4Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla5Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla6Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla7Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla8Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla9Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla37Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //bosque
    this.casilla10Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla11Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla12Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    this.casilla13Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla14Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla15Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla16Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla17Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla18Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla38Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla39Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //aldea
    this.casilla19Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla20Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla21Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    this.casilla22Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla23Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla24Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla25Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla26Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla27Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla40Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla41Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //castillo
    this.casilla28Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla29Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla30Layer.forEachTile((tile) => {
      if (tile.index != -1 && tile.x > 1) this.casillas.push(tile);
    });
    this.casilla31Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla32Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla33Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla34Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla35Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla36Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla42Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });
    this.casilla43Layer.forEachTile((tile) => {
      if (tile.index != -1) this.casillas.push(tile);
    });

    //ordenamiento de casillas

    this.casillas = this.casillas.sort((a, b) => {
      if (a.x == b.x) {
        this.c_a = this.casillas.find((c) => c.x == a.x - 1);
        if (this.c_a.y > a.y) {
          return b.y - a.y;
        } else if (this.c_a.y < a.y) {
          return a.y - b.y;
        } else {
          if (this.c_a.y > b.y) {
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
    //farola tablero
    this.farola = this.add.image(7100, 1600, 'farola').setDepth(2);

    //hud
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "hud").setScrollFactor(0).setDepth(3);
    //texto de jugadores
    this.TextoMonedas();
    //indicador de jugador
    this.IconoTurno();

    //camara
    this.camara = this.cameras.main;

    //push y mezcla de respuestas de la primer pregunta
    this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["1"]);
    this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["2"]);
    this.respPregunta.push(preguntasArray[ this.turnPregunta].opciones["3"]);
    this.respPregunta.push(preguntasArray[ this.turnPregunta].opciones["4"]);

    this.respPregunta.sort(() => Math.random() - 0.5)

    

    //booleano para temporizador
    this.destroyboolean = this.temporizador;

    ////

    //ruleta

    this.ruleta = this.add
      .image(1200, 100, "ruletaimagen")
      .setScrollFactor(0)
      .setScale(1.2)
      .setDepth(4)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[10].play();
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
        this.resplandor = this.add
          .image(1200, 100, "ruleta_resplandor")
          .setScale(0.85)
          .setScrollFactor(0)
          .setDepth(4);
      })
      .on("pointerout", () => {
        this.resplandor.destroy();
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
      if(this.turno === this.players.length){
        this.turno = 0;
      }
      
      //funcion perder turno
      this.PerderTurno();
      
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
      if(this.turnPregunta === 22){
        this.turnPregunta = 0;
      }
      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["1"]);
      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["2"]);
      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["3"]);
      this.respPregunta.push(preguntasArray[this.turnPregunta].opciones["4"]);

      this.respPregunta.sort(() => Math.random() - 0.5)
    }

  }


  girar(ruleta) {
    this.dado = 0;

    this.tweens.add({
      targets: ruleta,
      duration: 2700,
      rotation: Phaser.Math.Between(360, 720),
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.grados = Phaser.Math.RadToDeg(ruleta.rotation);
        if (this.grados > -45 && this.grados <= 45) {
          this.dado = 1;
        }
        if (this.grados > 45 && this.grados <= 90) {
          this.dado = 6;
        }
        if (this.grados > 90 && this.grados <= 135) {
          this.dado = 5;
        }
        if (
          (this.grados <= -135 && this.grados > -180) ||
          (this.grados >= 135 && this.grados < 180)
        ) {
          this.dado = 4;
        }
        if (this.grados <= -45 && this.grados > -90) {
          this.dado = 2;
        }
        if (this.grados <= -90 && this.grados > -135) {
          this.dado = 3;
        }
      },
      
    });

  }

  //movimiento personaje

  moverDerecha(playerActivo) {
    this.count = 0;

    //desbug final
    this.players[this.turno].acumulador += this.dado;
    if(this.players[this.turno].acumulador >= 100){
        setTimeout(() => {
          //limpia el array de casillas
        this.casillas.length = 0;
          this.scene.start("Resultado", {
            CantidadJugadores: this.CantidadJugadores,
            players: this.players,
            temporizador: this.temporizador,
            sonido: this.sonido,  
            musicamainmenu: this.musicamainmenu,
            sonidosgenerales: this.sonidosgenerales,
            idioma: this.idioma,
          });
        }, 3500);
    }
    for (
      let i = this.players[this.turno].casilla > 0 ? this.players[this.turno].casilla : 0; i <= this.players[this.turno].casilla + this.dado;
      i++
    ) {
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * this.count,
        duration: 400 * (this.count + 1),
        x: this.casillas[i].pixelX + 100 / 2,
        y: this.casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {

          if (i == this.players[this.turno].casilla + this.dado) {
            this.players[this.turno].casilla += this.dado;

            if (this.players[this.turno].acumulador > 100) {
              this.players[this.turno].acumulador = 100;
            }

            this.corroborarCasillas();
          }
        },
      });


      this.count++;

    }
    
  }

  //funcion de avanzar

  avanzar(playerActivo) {
    this.count = 0;
     //desbug final
    this.players[this.turno].acumulador += this.dado;
    if(this.players[this.turno].acumulador >= 100){
        setTimeout(() => {
          //limpia el array de casillas
        this.casillas.length = 0;
          this.scene.start("Resultado", {
            CantidadJugadores: this.CantidadJugadores,
            players: this.players,
            temporizador: this.temporizador,
            sonido: this.sonido,  
            musicamainmenu: this.musicamainmenu,
            sonidosgenerales: this.sonidosgenerales,
            idioma: this.idioma,
          });
        }, 3500);
    }
    for (
      let i = this.players[this.turno].casilla > 0 ? this.players[this.turno].casilla : 0; i <= this.players[this.turno].casilla + this.dado;
      i++
    ) {
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * this.count,
        duration: 400 * (this.count + 1),
        x: this.casillas[i].pixelX + 100 / 2,
        y: this.casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          if (i == this.players[this.turno].casilla + this.dado) {
            this.players[this.turno].casilla += this.dado;

            if (this.players[this.turno].acumulador > 100) {
              this.players[this.turno].acumulador = 100;
            }

            this.corroborarCasillas();
          }
        },
      });

      this.count++;
    }
  }

  //funcion retroceder

  retroceder(playerActivo) {
    this.count = 0;
    this.endTweenCounter = 0;
    for (let i = this.players[this.turno].casilla; i > this.players[this.turno].casilla - 3; i--) {
      this.tweens.add({
        targets: playerActivo,
        delay: 400 * this.count,
        duration: 400 * (this.count + 1),
        x: this.casillas[i].pixelX + 100 / 2,
        y: this.casillas[i].pixelY - 100 / 2,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          if (this.endTweenCounter == 2) {
            this.players[this.turno].casilla = this.players[this.turno].casilla - 2;
            this.players[this.turno].acumulador -= 2;

            if (this.players[this.turno].acumulador > 100) {
              this.players[this.turno].acumulador = 100;
            }

            this.corroborarCasillas();
          }
          this.endTweenCounter++;
        },
      });
      this.count++;
    }
  };

  //funcion perder turno
  PerderTurno(){
    
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
  };


  //funcion de pregunta

  pregunta(){
    this.resp1boolean = false;
    this.resp2boolean = false;
    this.resp3boolean = false;
    this.resp4boolean = false;
    this.botonayudaboolean = false;

    this.trans = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,"transparencia").setAlpha(0.5).setScrollFactor(0).setDepth(6);
    this.popup = this.add.image(this.cameras.main.centerX, 625, "popup").setScale(1.1).setScrollFactor(0).setDepth(7);
    this.mago = this.add.image(1400, 600, "magopregunta").setScale(1).setScrollFactor(0).setDepth(7);
    //monedas boton ayuda
    this.iconomonedaayuda = this.add.image(990, 920, "iconomoneda").setScale(0.8).setScrollFactor(0).setDepth(7);
    this.textmonedasayuda = this.add.text(1010, 900, "100", {
        fontFamily: "Times",
        fontSize: "36px",
        color: "#2B2B2B",
    }).setScrollFactor(0).setDepth(7);

    ////
    //respuesta 1
    this.botonRespuesta1 = this.add.image(this.cameras.main.centerX, 560, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
      //pausa temporizador
      if(this.temporizador > 0){
        this.timedEvent.paused = true;
      }
      //elimina las interacciones
      this.removesPopUp();
      if(this.respPregunta[0].esCorrecta === true){

        this.botonRespuesta1.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          this.sonidosgenerales[11].play();
          this.mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 200;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          }
          this.sonidosgenerales[14].play();
        }, 2000);

      }else{

        this.botonRespuesta1.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.sonidosgenerales[12].play();
          this.mago.setTexture('magotriste')
        }, 200);
      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      this.destroysPopUp()
      
      this.finalPopUp();

    })
    .on("pointerover", () => {

      this.botonRespuesta1.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      this.botonRespuesta1.setTexture('boton_respuesta')
    });
    ////
    //respuesta 2
    this.botonRespuesta2 = this.add.image(this.cameras.main.centerX, 640, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
      //pausa temporizador

      if(this.temporizador > 0){
        this.timedEvent.paused = true;
      }
      
      //elimina las interacciones
      this.removesPopUp();
      if(this.respPregunta[1].esCorrecta  === true){

        this.botonRespuesta2.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          this.sonidosgenerales[11].play();
          this.mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 200;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          }
          this.sonidosgenerales[14].play();
        }, 2000);

      }else{
        this.botonRespuesta2.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.sonidosgenerales[12].play();
          this.mago.setTexture('magotriste')
        }, 200);

      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      this.destroysPopUp()
      
      this.finalPopUp();
    })
    .on("pointerover", () => {

      this.botonRespuesta2.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      this.botonRespuesta2.setTexture('boton_respuesta')
    });
    
    ////
    //respuesta 3
    this.botonRespuesta3 = this.add.image(this.cameras.main.centerX, 720, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
      //pausa temporizador
      if(this.temporizador > 0){
        this.timedEvent.paused = true;
      }
      //elimina las interacciones
      this.removesPopUp();
      if(this.respPregunta[2].esCorrecta  === true){

        this.botonRespuesta3.setTexture('popup_respuesta_correcta')
        setTimeout(() => {
          this.sonidosgenerales[11].play();
          this.mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 200;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          }
          this.sonidosgenerales[14].play();
        }, 2000);

        
      }else{
        this.botonRespuesta3.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.sonidosgenerales[12].play();
          this.mago.setTexture('magotriste')
        }, 200);
        
      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      this.destroysPopUp()
      
      this.finalPopUp();
    })
    .on("pointerover", () => {

      this.botonRespuesta3.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      this.botonRespuesta3.setTexture('boton_respuesta')
    });
    
    ////
    //respuesta 4
    this.botonRespuesta4 = this.add.image(this.cameras.main.centerX, 800, "boton_respuesta").setScale(1.1).setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
      //pausa temporizador
      if(this.temporizador > 0){
        this.timedEvent.paused = true;
      }
      //elimina las interacciones
      this.removesPopUp();
      if(this.respPregunta[3].esCorrecta  === true){

        this.botonRespuesta4.setTexture('popup_respuesta_correcta')

        setTimeout(() => {
          this.sonidosgenerales[11].play();
          this.mago.setTexture('magofestejando')
        }, 200);

        //suma de puntos respuesta correcta
        setTimeout(() => {
          if (this.monedabotonayuda === false) {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 200;
          } else {
            this.players[this.turno].monedas = this.players[this.turno].monedas + 100;
          }
          this.sonidosgenerales[14].play();
          
        }, 2000);
      }else{
        this.botonRespuesta4.setTexture('popup_respuesta_incorrecta')

        setTimeout(() => {
          this.sonidosgenerales[12].play();
          this.mago.setTexture('magotriste')
        }, 200);
        
      }

      //fin de juego de pregunta

      
      //desaparecer objetos
      this.destroysPopUp()
      
      this.finalPopUp();

    })
    .on("pointerover", () => {

      this.botonRespuesta4.setTexture('boton_respuesta2')
    })
    .on("pointerout", () => {
      this.botonRespuesta4.setTexture('boton_respuesta')
    });

    //boton de ayuda
    this.botonayudaimg = this.add.image(1140, 920, "boton_ayuda").setScrollFactor(0).setDepth(7)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
      this.sonidosgenerales[13].play();

      this.monedabotonayuda = true;
      this.botonayudaboolean = true;

      this.botonayuda.setStyle({ fill: "#63562E"});
      this.botonayudaimg.setTexture('boton_ayuda3');
      this.botonayudaimg.removeInteractive();

      if(this.respPregunta[0].esCorrecta  === true){
        this.botonRespuesta2.destroy();
        this.resp2boolean = true;
        this.resp2.destroy();
        this.botonRespuesta4.destroy();
        this.resp4boolean = true;
        this.resp4.destroy();
      }

      if(this.respPregunta[1].esCorrecta  === true){
        this.botonRespuesta1.destroy();
        this.resp1boolean = true;
        this.resp1.destroy();
        this.botonRespuesta4.destroy();
        this.resp4boolean = true;
        this.resp4.destroy();
      }

      if(this.respPregunta[2].esCorrecta  === true){
        this.botonRespuesta2.destroy();
        this.resp2boolean = true;
        this.resp2.destroy();
        this.botonRespuesta1.destroy();
        this.resp1boolean = true;
        this.resp1.destroy();
      }

      if(this.respPregunta[3].esCorrecta  === true){
        this.botonRespuesta2.destroy();
        this.resp2boolean = true;
        this.resp2.destroy();
        this.botonRespuesta3.destroy();
        this.resp3boolean = true;
        this.resp3.destroy();
      }
    })
    .on("pointerover", () => {
      this.botonayudaimg.setTexture('boton_ayuda2');
    })
    .on("pointerout", () => {
      this.botonayuda.setStyle({ fill: "#3B3B3B" });
      this.botonayudaimg.setTexture('boton_ayuda')
    });
    this.botonayuda = this.add.text(1140, 920, getPhrase("Ayuda")).setScrollFactor(0).setDepth(7).setOrigin(0.5)
    .setStyle({
      fontSize: "32px",
      fill: "#3B3B3B",
      fontFamily: "Times",
    })
    


    //pregunta
    this.textopreg = this.add.text(740,350, preguntasArray[this.turnPregunta].pregunta)
    .setScrollFactor(0).setDepth(7)
    .setStyle({
      maxLines: 20,
      fontFamily: "Times",
      fontSize: "36px",
      fill: "#FFFFF",
      fixedWidth: 2000,
      wordWrap: { width: 480 }
    });
  
    //textos respuestas
    this.resp1 = this.add.text(this.cameras.main.centerX - 200, 540, this.respPregunta[0].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    
    this.resp2 = this.add.text(this.cameras.main.centerX - 200, 620, this.respPregunta[1].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    this.resp3 = this.add.text(this.cameras.main.centerX - 200, 700, this.respPregunta[2].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })
    this.resp4 = this.add.text(this.cameras.main.centerX - 200, 780, this.respPregunta[3].texto).setScrollFactor(0).setDepth(7)
    .setStyle({
      fontSize: "32px",
      fill: "#2B2B2B",
      fontFamily: "Times",
    })

  
  //temporizador

  if(this.temporizador === 0){

  }else{

    this.timedEvent = this.time.addEvent({ 
      delay: 1000, 
      callback: this.onSecond, 
      callbackScope: this, 
      repeat: this.temporizador
    });

    this.TempTime = this.temporizador;
    this.tempTimeText = this.add.text(this.cameras.main.centerX - 160, this.cameras.main.centerY + 360, this.temporizador, {
    fontFamily: "Times",
    fontSize: "36px",
    color: "#2B2B2B",
    }).setScrollFactor(0).setDepth(7);
    this.cronometro = this.add.image(770, 915, 'cronometro').setScrollFactor(0).setDepth(7).setScale(0.4)
  }

  this.destroyboolean = this.temporizador;
  
  //fin pregunta

  }


  onSecond() {
   
    if(this.TempTime === 0){
      this.tempTimeText.setText('0');
      this.mago.setTexture('magotriste')
      this.sonidosgenerales[12].play();
      this.removesPopUp();
      this.destroysPopUp()
      this.finalPopUp();
      
    }else{
      this.TempTime = this.TempTime - 1;
      this.tempTimeText.setText(this.TempTime);
    }   
  }

  destroysPopUp(){
    
    setTimeout(() => {
      this.trans.destroy();
      this.popup.destroy();
      this.iconomonedaayuda.destroy();
      this.textmonedasayuda.destroy();
      this.botonRespuesta1.destroy();
      this.botonRespuesta2.destroy();
      this.botonRespuesta3.destroy();
      this.botonRespuesta4.destroy();
      this.botonayudaimg.destroy();
      this.botonayuda.destroy();
      this.textopreg.destroy();
      this.resp1.destroy();
      this.resp2.destroy();
      this.resp3.destroy();
      this.resp4.destroy();
      this.mago.destroy();

      if(this.destroyboolean > 0){
        this.tempTimeText.destroy();
        this.timedEvent.destroy();
        this.cronometro.destroy();
      }
    }, 2000);
  }

  removesPopUp(){

    if(this.resp1boolean === false){
      this.botonRespuesta1.removeInteractive();
    }

    if(this.resp2boolean === false){
      this.botonRespuesta2.removeInteractive();
    }

    if(this.resp3boolean === false){
      this.botonRespuesta3.removeInteractive();
    }

    if(this.resp4boolean === false){
      this.botonRespuesta4.removeInteractive();
    }

    if(this.botonayudaboolean === false){
      this.botonayudaimg.removeInteractive();
    }
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
    if(this.players[this.turno].acumulador <= 25){
      this.players[this.turno].monedas = this.players[this.turno].monedas + 150;
    }else if(this.players[this.turno].acumulador > 25 && this.players[this.turno].acumulador <= 50){
      this.players[this.turno].monedas = this.players[this.turno].monedas + 300;
    }else if(this.players[this.turno].acumulador > 50 && this.players[this.turno].acumulador <= 75){
      this.players[this.turno].monedas = this.players[this.turno].monedas + 450;
    }else if(this.players[this.turno].acumulador > 75 && this.players[this.turno].acumulador <= 100){
      this.players[this.turno].monedas = this.players[this.turno].monedas + 600;
    }
    
  }

  corroborarCasillas() {
    if (
      this.players[this.turno].acumulador === 3 ||
      this.players[this.turno].acumulador === 7 ||
      this.players[this.turno].acumulador === 12 ||
      this.players[this.turno].acumulador === 16 ||
      this.players[this.turno].acumulador === 22 ||
      this.players[this.turno].acumulador === 27 ||
      this.players[this.turno].acumulador === 31 ||
      this.players[this.turno].acumulador === 39 ||
      this.players[this.turno].acumulador === 43 ||
      this.players[this.turno].acumulador === 48 ||
      this.players[this.turno].acumulador === 51 ||
      this.players[this.turno].acumulador === 55 ||
      this.players[this.turno].acumulador === 60 ||
      this.players[this.turno].acumulador === 65 ||
      this.players[this.turno].acumulador === 68 ||
      this.players[this.turno].acumulador === 73 ||
      this.players[this.turno].acumulador === 77 ||
      this.players[this.turno].acumulador === 83 ||
      this.players[this.turno].acumulador === 88 ||
      this.players[this.turno].acumulador === 93 ||
      this.players[this.turno].acumulador === 96
    ) {
      //funcion preguntas
      this.cartelfunc = 1;
      this.cartelFunciones();

      setTimeout(() => {
        this.pregunta();
      }, 2000);
    } else if (
      this.players[this.turno].acumulador === 1 ||
      this.players[this.turno].acumulador === 5 ||
      this.players[this.turno].acumulador === 10 ||
      this.players[this.turno].acumulador === 20 ||
      this.players[this.turno].acumulador === 25 ||
      this.players[this.turno].acumulador === 34 ||
      this.players[this.turno].acumulador === 41 ||
      this.players[this.turno].acumulador === 49 ||
      this.players[this.turno].acumulador === 59 ||
      this.players[this.turno].acumulador === 66 ||
      this.players[this.turno].acumulador === 70 ||
      this.players[this.turno].acumulador === 76 ||
      this.players[this.turno].acumulador === 87 ||
      this.players[this.turno].acumulador === 95
    ) {
      //funcion avanzar
      this.avanzar(this.playerActivo);
    } else if (
      this.players[this.turno].acumulador === 6 ||
      this.players[this.turno].acumulador === 11 ||
      this.players[this.turno].acumulador === 19 ||
      this.players[this.turno].acumulador === 24 ||
      this.players[this.turno].acumulador === 28 ||
      this.players[this.turno].acumulador === 32 ||
      this.players[this.turno].acumulador === 35 ||
      this.players[this.turno].acumulador === 40 ||
      this.players[this.turno].acumulador === 44 ||
      this.players[this.turno].acumulador === 52 ||
      this.players[this.turno].acumulador === 56 ||
      this.players[this.turno].acumulador === 58 ||
      this.players[this.turno].acumulador === 64 ||
      this.players[this.turno].acumulador === 74 ||
      this.players[this.turno].acumulador === 80 ||
      this.players[this.turno].acumulador === 85 ||
      this.players[this.turno].acumulador === 97 
    ) {
      //funcion monedas
      this.cartelfunc = 2;
      this.cartelFunciones();
      this.monedas();
      this.sonidosgenerales[14].play();
  
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
      this.players[this.turno].acumulador === 13 ||
      this.players[this.turno].acumulador === 17 ||
      this.players[this.turno].acumulador === 29 ||
      this.players[this.turno].acumulador === 33 ||
      this.players[this.turno].acumulador === 37 ||
      this.players[this.turno].acumulador === 45 ||
      this.players[this.turno].acumulador === 47 ||
      this.players[this.turno].acumulador === 54 ||
      this.players[this.turno].acumulador === 62 ||
      this.players[this.turno].acumulador === 71 ||
      this.players[this.turno].acumulador === 75 ||
      this.players[this.turno].acumulador === 79 ||
      this.players[this.turno].acumulador === 82 ||
      this.players[this.turno].acumulador === 90 ||
      this.players[this.turno].acumulador === 94 ||
      this.players[this.turno].acumulador === 98
    ) {
      //funcion retroceder
      this.retroceder(this.playerActivo);
    } else if (
      this.players[this.turno].acumulador === 2 ||
      this.players[this.turno].acumulador === 9 ||
      this.players[this.turno].acumulador === 14 ||
      this.players[this.turno].acumulador === 23 ||
      this.players[this.turno].acumulador === 30 ||
      this.players[this.turno].acumulador === 36 ||
      this.players[this.turno].acumulador === 42 ||
      this.players[this.turno].acumulador === 50 ||
      this.players[this.turno].acumulador === 57 ||
      this.players[this.turno].acumulador === 63 ||
      this.players[this.turno].acumulador === 67 ||
      this.players[this.turno].acumulador === 72 ||
      this.players[this.turno].acumulador === 78 ||
      this.players[this.turno].acumulador === 81 ||
      this.players[this.turno].acumulador === 86 ||
      this.players[this.turno].acumulador === 91 ||
      this.players[this.turno].acumulador === 99
    ) {

      //funcion perder turno
      this.cartelfunc = 3;
      this.cartelFunciones();
      this.players[this.turno].perderTurno = true;

      setTimeout(() => {
        this.contadorturno = true;
        this.contadorRuleta = true;
      }, 2000);
      setTimeout(() => {
        this.triangulo.destroy();
        this.textoTurnoJugador.destroy();
        this.IconoTurno();
      }, 2300);
    } else if (this.players[this.turno].acumulador === 100 || this.players[this.turno].casilla >= 100) {
      setTimeout(() => {
        //limpia el array de casillas
        this.casillas.length = 0;
        this.scene.start("Resultado", {
          CantidadJugadores: this.CantidadJugadores,
          players: this.players,
          temporizador: this.temporizador,
          sonido: this.sonido,  
          musicamainmenu: this.musicamainmenu,
          sonidosgenerales: this.sonidosgenerales,
          idioma: this.idioma,
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
      this.textmonedasjugador1.setText(this.players[0].monedas);
      this.textmonedasjugador2.setText(this.players[1].monedas);
    } 
    if (this.CantidadJugadores >= 3) {
      this.textmonedasjugador3.setText(this.players[2].monedas);
    }
    if (this.CantidadJugadores === 4) {
      this.textmonedasjugador4.setText(this.players[3].monedas);
    }
  }


  cartelFunciones(){

    this.cartel = this.add.image(this.cameras.main.centerX, 145, 'cartelfunciones').setScale(0.35).setScrollFactor(0).setDepth(1)
    this.cad1 = this.add.image(this.cameras.main.centerX - 110, 67, 'cadenaseleccion').setScale(0.35).setScrollFactor(0).setDepth(1)
    this.cad2 = this.add.image(this.cameras.main.centerX + 110, 67, 'cadenaseleccion').setScale(0.35).setScrollFactor(0).setDepth(1)
    this.texto = this.add.text(this.cameras.main.centerX, 145, '').setScrollFactor(0).setDepth(1).setOrigin(0.5)
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '26px', 
            fill: '#FFFFFF',
            align: 'center',
          });

    if(this.cartelfunc === 1){
      this.texto.setText(getPhrase('¡Responde la pregunta!'))
    }else if(this.cartelfunc === 2){

      this.texto.setText(getPhrase('¡Ganaste monedas!'))
    }else if(this.cartelfunc === 3){
      this.texto.setText(getPhrase('¡Perdiste dos turnos!'))
    }
    
    this.tweens.add({
      targets: this.cartel,
      duration: 1500,
      y: this.cameras.main.centerY - 280,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: this.cartel,
          duration: 700,
          y: 145,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
          onComplete: () => {
            this.cartel.destroy();
            this.cad1.destroy();
            this.cad2.destroy();
            this.texto.destroy();
          }
        });
      },
    });
    this.tweens.add({
      targets: this.cad1,
      duration: 1500,
      y:  this.cameras.main.centerY - 360,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: this.cad1,
          duration: 700,
          y: 67,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
        });
      },
    });
    this.tweens.add({
      targets: this.cad2,
      duration: 1500,
      y:  this.cameras.main.centerY - 360,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: this.cad2,
          duration: 700,
          y: 67,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
        });
      },
    });
    this.tweens.add({
      targets: this.texto,
      duration: 1500,
      y:  this.cameras.main.centerY - 280,
      ease: "Power3",
      repeat: 0,
      yoyo: false,
      onComplete: () => {
        this.tweens.add({
          targets: this.texto,
          duration: 700,
          y: 145,
          ease: "Power3",
          repeat: 0,
          yoyo: false,
        });
      },
    });
  
  }



  IconoTurno(){

    this.triangulo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY - 190, 'triangulo').setScale(0.2).setScrollFactor(0).setDepth(5).setOrigin(0.5);
    this.textoTurnoJugador = this.add.text(this.cameras.main.centerX + 3,this.cameras.main.centerY - 240, this.players[this.turno].jugador,
      {
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "36px",
        color: "#ffffff",
      }
    ).setOrigin(0.5);
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
      y:  this.cameras.main.centerY - 210,
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
      this.players[1].jugador = getPhrase("Jugador 2");
      this.players[1].imagen = this.add
        .image(this.players[1].x, this.players[1].y, this.players[1].nombre)
        .setScale(0.5).setDepth(1);

      //player 1
      this.players[0].x = 930;
      this.players[0].y = 1830;
      this.players[0].monedas = 0;
      this.players[0].jugador = getPhrase("Jugador 1");
      this.players[0].imagen = this.add
        .image(this.players[0].x, this.players[0].y, this.players[0].nombre)
        .setScale(0.5).setDepth(1);
    }
    if (this.CantidadJugadores >= 3) {
      //player 3
      this.players[2].x = 830;
      this.players[2].y = 1830;
      this.players[2].monedas = 0;
      this.players[2].jugador = getPhrase("Jugador 3");
      this.players[2].imagen = this.add
        .image(this.players[2].x, this.players[2].y, this.players[2].nombre)
        .setScale(0.5).setDepth(1);
    }
    if (this.CantidadJugadores === 4) {
      //player 4
      this.players[3].x = 780;
      this.players[3].y = 1830;
      this.players[3].monedas = 0;
      this.players[3].jugador = getPhrase("Jugador 4");
      this.players[3].imagen = this.add
        .image(this.players[3].x, this.players[3].y, this.players[3].nombre)
        .setScale(0.5).setDepth(1);
    }
  }

  TextoMonedas() {

    if(this.CantidadJugadores >= 2){
      //player 1
      this.add.image(730, 37, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasj1 = this.add.text(550, 20, getPhrase("Jugador 1:"), {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador1 = this.add.text(760, 20, this.players[0].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);

      //player 2
      this.add.image(730, 77, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasj2 = this.add.text(550, 60, getPhrase("Jugador 2:"), {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador2 = this.add.text(760, 60, this.players[1].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);   
    }
    if(this.CantidadJugadores >= 3){
       //player 3
      this.add.image(730, 117, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasj3 = this.add.text(550, 100, getPhrase("Jugador 3:"), {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador3 = this.add.text(760, 100, this.players[2].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);
    }
    if(this.CantidadJugadores === 4){
       //player 4
      this.add.image(730, 157, "iconomoneda").setScale(0.7).setScrollFactor(0).setDepth(4);
      this.textmonedasj4 = this.add.text(550, 140, getPhrase("Jugador 4:"), {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);
      this.textmonedasjugador4 = this.add.text(760, 140, this.players[3].monedas, {
          fontFamily: "Times",
          fontStyle: "italic",
          fontSize: "32px",
          color: "#FFFFFF",
        }).setScrollFactor(0).setDepth(4);
    }


   
  }
}
