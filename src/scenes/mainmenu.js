import Phaser from "phaser";

export class MainMenu extends Phaser.Scene {
  temporizador;
  temporizadorboolean = false;
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  init(data) {
    this.temporizador = data.temporizador;
  }

  create() {
    //musica

    var volumenmusica = 1;
    var sonidomusica = 0;

    var musicamainmenu = this.sound.add("musicamainmenu", {
      volume: 0.4,
      loop: true,
    });

    if (sonidomusica === 0) {
      musicamainmenu.play();
      sonidomusica = 1;
    }

    //sonidos

    //botones
    var sonidobotones1;
    var sonidobotones2;

    sonidobotones1 = this.sound.add("sonidobotones1");
    sonidobotones1.setVolume(0.3);
    sonidobotones2 = this.sound.add("sonidobotones2");
    sonidobotones2.setVolume(1);

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
      .image(1600, 550, "botonjugar")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        sonidobotones2.play();
        this.scene.start("SeleccionDePersonaje", {
          temporizador: this.temporizador,
        });
      })
      .on("pointerover", () => {
        sonidobotones1.play();
        botonjugar.setScale(1.1);
      })
      .on("pointerout", () => {
        botonjugar.setScale(1);
      });

    botoninstrucciones = this.add
      .image(1600, 680, "botoninstrucciones")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        sonidobotones2.play();
        this.scene.start("Instrucciones");
      })
      .on("pointerover", () => {
        sonidobotones1.play();
        botoninstrucciones.setScale(1.1);
      })
      .on("pointerout", () => {
        botoninstrucciones.setScale(1);
      });

    botonconfiguracion = this.add
      .image(1600, 780, "botonconfiguracion")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        sonidobotones2.play();
        this.scene.start("Configuracion"), { volumenmusica: volumenmusica };
      })
      .on("pointerover", () => {
        sonidobotones1.play();
        botonconfiguracion.setScale(1.1);
      })
      .on("pointerout", () => {
        botonconfiguracion.setScale(1);
      });

    botoncreditos = this.add
      .image(1600, 900, "botoncreditos")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        sonidobotones2.play();
        this.scene.start("Creditos");
      })
      .on("pointerover", () => {
        sonidobotones1.play();
        botoncreditos.setScale(1.1);
      })
      .on("pointerout", () => {
        botoncreditos.setScale(1);
      });


    //temporizador

    if (this.temporizador > 0) {
      this.temporizadorboolean = true;
    }

    //sirve para setear en 0 cuando se ingresa por primera vez
    if (this.temporizadorboolean === false) {
      this.temporizador = 0;
      console.log(this.temporizador);
    } else {
      console.log(this.temporizador);
    }
  }
}
