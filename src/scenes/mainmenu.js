import Phaser from "phaser";
import Pregunta from "../clases/Pregunta.js"
import Boton from "../clases/Boton.js";
import {getPhrase} from '../services/translations.js'

export class MainMenu extends Phaser.Scene {
  //temporizador
  temporizador;
  temporizadorboolean = false;

  //volumen sonidos y musica
  sonido;
  sonidoboolean = true;
  musicamainmenu;
  sonidosgenerales;
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  init(data) {
    this.temporizador = data.temporizador;
    this.sonido = data.sonido;
    this.musicamainmenu = data.musicamainmenu;
    this.sonidosgenerales = data.sonidosgenerales;
    this.idioma = data.idioma;
  }

  create() {

    //musica y sonido

    //sirve para desbugear, es para la primera vez que se entra al juego
    if (this.sonidoboolean === true) {
      this.musicamainmenu[0].play()
      this.sonidoboolean = false;
      this.idioma = 1;
    }else {

    }
    
    //sonidos generales

    //botones
    
    //calibrar el volumen
    this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral)
    this.sonidosgenerales[1].setVolume(1 / this.sonido.volumenGeneral)
    this.musicamainmenu[0].setVolume(0.4 / this.sonido.volumenMusica)

    // Fondo del menú principal
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_menu")
      .setScale(1);


    this.add.image(1600, 810, "postemenu").setScale(1);
    //this.add.image(1100, 600, 'rey').setScale(0.4);
    this.add.image(1400, 250, "titulojuego").setScale(0.9);

    this.botonjugar = this.add
      .image(1600, 550, "botonmenu")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[1].play();
        this.scene.start("SeleccionDePersonaje", {
          temporizador: this.temporizador,
          sonido: this.sonido,
          sonidosgenerales: this.sonidosgenerales,
          musicamainmenu: this.musicamainmenu,
          idioma: this.idioma,
        });
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        this.botonjugar.setScale(1.1);
        this.textojugar.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        this.botonjugar.setScale(1);
        this.textojugar.setStyle({color: '#000'});
      });
    

    this.botoninstrucciones = this.add
      .image(1600, 680, "botonmenu")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[1].play();
        this.scene.start("Instrucciones", 
        { sonido: this.sonido, 
          sonidosgenerales: this.sonidosgenerales, 
          musicamainmenu: this.musicamainmenu,
          temporizador: this.temporizador,
          idioma: this.idioma});
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        this.botoninstrucciones.setScale(1.1);
        this.textoinstrucciones.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        this.botoninstrucciones.setScale(1);
        this.textoinstrucciones.setStyle({color: '#000'});
      });

    this.botonconfiguracion = this.add
      .image(1600, 780, "botonmenu").setFlip(true,false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[1].play();
        this.scene.start("Configuracion", 
        {sonido: this.sonido, 
          sonidoboolean: this.sonidoboolean, 
          musicamainmenu: this.musicamainmenu,
          sonidosgenerales: this.sonidosgenerales,
          temporizador: this.temporizador,
          idioma: this.idioma
          });
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        this.botonconfiguracion.setScale(1.1);
        this.textoconfiguracion.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        this.botonconfiguracion.setScale(1);
        this.textoconfiguracion.setStyle({color: '#000'});
      });

    this.botoncreditos = this.add
      .image(1600, 900, "botonmenu").setFlip(true,false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[1].play();
        this.scene.start("Creditos", 
        { sonido: this.sonido, 
          sonidosgenerales: this.sonidosgenerales, 
          musicamainmenu: this.musicamainmenu,
          temporizador: this.temporizador,
          idioma: this.idioma
          });
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        this.botoncreditos.setScale(1.1);
        this.textocreditos.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        this.botoncreditos.setScale(1);
        this.textocreditos.setStyle({color: '#000'});
      });


    
    this.textojugar = this.add.text(1580, 545, getPhrase("Jugar"), {
        fontFamily: "Garamond",
        fontSize: "64px",
        color: "#000",
        

    })
    
    this.textoinstrucciones = this.add.text(1585, 680, getPhrase("Instrucciones"), {
      fontFamily: "Garamond",
      fontSize: "40px",
      color: "#000",
    })
    this.textoconfiguracion = this.add.text(1600, 780, getPhrase("Configuración"), {
      fontFamily: "Garamond",
      fontSize: "40px",
      color: "#000",
    })
    this.textocreditos = this.add.text(1595, 895, getPhrase("Créditos"), {
      fontFamily: "Garamond",
      fontSize: "40px",
      color: "#000",
    })
    
    //centrado de textos para varios idiomas
    this.textojugar.setOrigin(0.5)
    this.textoinstrucciones.setOrigin(0.5)
    this.textoconfiguracion.setOrigin(0.5)
    this.textocreditos.setOrigin(0.5)


    //temporizador

    if (this.temporizador === 0 || this.temporizador === 30) {
      this.temporizadorboolean = true;
    }

    //sirve para setear en 15 cuando se ingresa por primera vez
    if (this.temporizadorboolean === false) {
      this.temporizador = 15;
    } else {

    }

   
    /* this.pregunta = new Pregunta(this)

    this.pregunta.trans.setVisible(false)
    this.pregunta.popup.setVisible(false)
    this.pregunta.iconomonedaayuda.setVisible(false) */

  }
}
