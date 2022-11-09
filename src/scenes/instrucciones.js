import Phaser from "phaser";
import Boton from "../clases/Boton.js";
import {getPhrase} from '../services/translations.js'

export class Instrucciones extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Instrucciones");
  }

  init(data) {
    this.sonido = data.sonido;
    this.sonidosgenerales = data.sonidosgenerales;
    this.musicamainmenu = data.musicamainmenu;
    this.temporizador = data.temporizador;
    this.idioma = data.idioma;
  }

  create() {
    //sonidos

    //botones
    this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral)
    this.sonidosgenerales[2].setVolume(1 / this.sonido.volumenGeneral)

    //escena
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_menu")
      .setScale(1);

    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "transparencia"
      )
      .setScale(1)
      .setAlpha(0.5);

    this.add
      .image(this.cameras.main.centerX,this.cameras.main.centerY,"instrucciones")
      .setScale(1.5);

    this.add.text(this.cameras.main.centerX - 200, 200, getPhrase("Instrucciones"), {
        fontFamily: "Papyrus",
        fontSize: "72px",
        color: "#000",
    })

    this.add.text(this.cameras.main.centerX - 390, this.cameras.main.centerY - 210, getPhrase("Para avanzar, cada jugador deberá hacer click en la ruleta"), {
        fontFamily: "MV Boli",
        fontSize: "22px",
        color: "#000",
        wordWrap: { width: 400 }
    })

    this.add.text(this.cameras.main.centerX - 390, this.cameras.main.centerY - 85, getPhrase("Las preguntas deben responderse en un límite de tiempo, el cual puede ajustarse en la configuración"), {
        fontFamily: "MV Boli",
        fontSize: "22px",
        color: "#000",
        wordWrap: { width: 400 }
    })

    this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY + 70, getPhrase("Cuando un jugador llegue al castillo, se contarán los puntos de cada uno, y ganará quien tenga la mayor cantidad de puntos"), {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
      wordWrap: { width: 400 }
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 220, getPhrase("Casilla Retroceso: el jugador deberá retroceder dos casillas"), {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
      wordWrap: { width: 480 }
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 130, getPhrase("Casilla Avance: el jugador avanzará la cantidad de casillas indicadas en la ruleta"), {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
      wordWrap: { width: 460 }
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 45, getPhrase("Casilla Monedas: le otorga monedas al jugador, le dará 150/300/450/600 monedas dependiendo de la zona"), {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
      wordWrap: { width: 480 }
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY + 55, getPhrase("Casilla Pierde turno: el jugador que caiga en esta casilla perderá dos turnos"), {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
      wordWrap: { width: 460 }
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY + 140, getPhrase("Casilla Trivia: el jugador deberá responder una pregunta, si lo hace de forma correcta ganará monedas"), {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
      wordWrap: { width: 450 }
    })



    //boton

    this.botonvolver = new Boton(this, 250, 1000, "boton")
    this.botonvolver.boton.setFlip(true, false)
    .setInteractive({
        useHandCursor: true,
    })
    .on("pointerdown", () => {
        this.sonidosgenerales[2].play();
        this.scene.start("MainMenu", { 
          sonido: this.sonido,  
          musicamainmenu: this.musicamainmenu,
          sonidosgenerales: this.sonidosgenerales,
          temporizador: this.temporizador,
          idioma: this.idioma,
        });
    })
    .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        this.botonvolver.boton.setScale(1.1);
        this.textovolver.setStyle({color: '#fff'});
    })
    .on("pointerout", () => {
        this.botonvolver.boton.setScale(1);
        this.textovolver.setStyle({color: '#000'});
    });
    
    this.textovolver = this.add.text(255, 998, getPhrase("Volver"), {
      fontFamily: "Garamond",
      fontSize: "60px",
      color: "#000",
    }).setOrigin(0.5);
  }
}
