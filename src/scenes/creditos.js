import Phaser from 'phaser'
import Boton from "../clases/Boton.js";
import {getPhrase} from '../services/translations.js'

export class Creditos extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Creditos");
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


      //fondo
      
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu')
      .setScale(1);

     

      this.trans = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1)
      .setAlpha(0.5);
      

      //carteles
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'cartel_aldi').setScale(0.9);
      this.add.image(this.cameras.main.centerX/3, this.cameras.main.centerY, 'cartel_luci').setScale(0.9);
      this.add.image(1600, this.cameras.main.centerY, 'cartel_santi').setScale(0.9);

      this.add.text(this.cameras.main.centerX, 240, getPhrase("SE BUSCA"), {
        fontFamily: "Times",
        fontSize: "72px",
        color: "#000",
      }).setOrigin(0.5);

      this.add.text(this.cameras.main.centerX/3, 240, getPhrase("SE BUSCA"), {
      fontFamily: "Times",
      fontSize: "72px",
      color: "#000",
      }).setOrigin(0.5);

      this.add.text(1600, 240, getPhrase("SE BUSCA"), {
        fontFamily: "Times",
        fontSize: "72px",
        color: "#000",
        }).setOrigin(0.5);

      //boton
      this.botonvolver = new Boton(this, 250, 1000, "boton")
      this.botonvolver.boton.setFlip(true, false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[2].play();
        this.scene.start("MainMenu",{
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


      //creditos musica

      this.add.image(1820, 80, 'boton_musica')
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerover", () => {
 
        this.botonMusicaBlanco.setVisible(true);
        this.textomusicacreditos.setVisible(true);
        this.textomusicacreditos2.setVisible(true);
        this.cartelMusica.setVisible(true);
      })
      .on("pointerout", () => {
        this.botonMusicaBlanco.setVisible(false);
        this.textomusicacreditos.setVisible(false);
        this.textomusicacreditos2.setVisible(false);
        this.cartelMusica.setVisible(false);
      });


      this.botonMusicaBlanco = this.add.image(1820, 80, 'boton_musica_blanco').setVisible(false).setAlpha(0.5);

      this.cartelMusica = this.add.image(1450, 100, 'cartel_musica').setVisible(false).setAlpha(0.6).setScale(0.8)

      this.textomusicacreditos = this.add.text(this.cameras.main.centerX + 240, 70, "Adventure - Alexander Nakarada", {
        fontFamily: "Garamond",
        fontSize: "36px",
        color: "#fff",
      }).setVisible(false);

      this.textomusicacreditos2 = this.add.text(this.cameras.main.centerX + 255, 105, "Victory! - Alexander Nakarada", {
        fontFamily: "Garamond",
        fontSize: "36px",
        color: "#fff",
      }).setVisible(false);
    }
  }