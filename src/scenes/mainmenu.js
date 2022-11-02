import Phaser from "phaser";

export class MainMenu extends Phaser.Scene {
  //temporizador
  temporizador;
  temporizadorboolean = false;

  //volumen sonidos y musica
  sonido;
  sonidoboolean = true;
  musicamainmenu;
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  init(data) {
    this.temporizador = data.temporizador;
    this.sonido = data.sonido;
    this.musicamainmenu = data.musicamainmenu;
    this.sonidosgenerales = data.sonidosgenerales;
  }

  create() {

    console.log(this.sonidosgenerales);
    //musica y sonido

    //sirve para desbugear, es para la primera vez que se entra al juego
    if (this.sonidoboolean === true) {
      this.musicamainmenu = this.sound.add("musicamainmenu", {
        volume: 0.4,
        loop: true,
      });
      this.musicamainmenu.play();
      this.sonidoboolean = false;
    }else {

    }

    //sonidos generales

    //botones
    
    this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral)
    this.sonidosgenerales[1].setVolume(1 / this.sonido.volumenGeneral)

    // Fondo del menú principal
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_menu")
      .setScale(1);

    var botonjugar;
    var botoninstrucciones;
    var botonconfiguracion;
    var botoncreditos;

    this.add.image(1600, 810, "postemenu").setScale(1);
    //this.add.image(1100, 600, 'rey').setScale(0.4);
    this.add.image(1400, 250, "titulojuego").setScale(0.9);

    botonjugar = this.add
      .image(1600, 550, "botonmenu")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[1].play();
        this.scene.start("SeleccionDePersonaje", {
          temporizador: this.temporizador,
          sonido: this.sonido,
          sonidosgenerales: this.sonidosgenerales
        });
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        botonjugar.setScale(1.1);
        textojugar.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        botonjugar.setScale(1);
        textojugar.setStyle({color: '#000'});
      });
    

    botoninstrucciones = this.add
      .image(1600, 680, "botonmenu")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[1].play();
        this.scene.start("Instrucciones", 
        { sonido: this.sonido, 
          sonidosgenerales: this.sonidosgenerales, 
          musicamainmenu: this.musicamainmenu});
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        botoninstrucciones.setScale(1.1);
        textoinstrucciones.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        botoninstrucciones.setScale(1);
        textoinstrucciones.setStyle({color: '#000'});
      });

    botonconfiguracion = this.add
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
          sonidosgenerales: this.sonidosgenerales});
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        botonconfiguracion.setScale(1.1);
        textoconfiguracion.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        botonconfiguracion.setScale(1);
        textoconfiguracion.setStyle({color: '#000'});
      });

    botoncreditos = this.add
      .image(1600, 900, "botonmenu").setFlip(true,false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[1].play();
        this.scene.start("Creditos", 
        { sonido: this.sonido, 
          sonidosgenerales: this.sonidosgenerales, 
          musicamainmenu: this.musicamainmenu});
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        botoncreditos.setScale(1.1);
        textocreditos.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        botoncreditos.setScale(1);
        textocreditos.setStyle({color: '#000'});
      });


    
    var textojugar = this.add.text(1520, 510, "Jugar", {
        fontFamily: "Garamond",
        fontSize: "64px",
        color: "#000",
    })
    var textoinstrucciones = this.add.text(1490, 655, "Instrucciones", {
      fontFamily: "Garamond",
      fontSize: "40px",
      color: "#000",
    })
    var textoconfiguracion = this.add.text(1490, 755, "Configuración", {
      fontFamily: "Garamond",
      fontSize: "40px",
      color: "#000",
    })
    var textocreditos = this.add.text(1530, 878, "Créditos", {
      fontFamily: "Garamond",
      fontSize: "40px",
      color: "#000",
    })


    //temporizador

    if (this.temporizador === 0 || this.temporizador === 30) {
      this.temporizadorboolean = true;
    }

    //sirve para setear en 15 cuando se ingresa por primera vez
    if (this.temporizadorboolean === false) {
      this.temporizador = 15;
    } else {

    }

   
  }
}
