import Phaser from 'phaser'

export class Creditos extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Creditos");
    }

    init(data) {
      this.sonido = data.sonido;
      this.sonidosgenerales = data.sonidosgenerales;
      this.musicamainmenu = data.musicamainmenu;
    }
  
    create() {

      //sonidos

      //botones
      this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral)
      this.sonidosgenerales[2].setVolume(1 / this.sonido.volumenGeneral)


      //fondo
      var trans;
      
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu')
      .setScale(1);

     

      trans = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1)
      .setAlpha(0.5);
      

      //carteles
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'cartel_aldi').setScale(0.9);
      this.add.image(this.cameras.main.centerX/3, this.cameras.main.centerY, 'cartel_luci').setScale(0.9);
      this.add.image(1600, this.cameras.main.centerY, 'cartel_santi').setScale(0.9);

      //boton
      var botonvolver = this.add
      .image(250, 1000, "boton").setFlip(true, false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[2].play();
        this.scene.start("MainMenu",{
          sonido: this.sonido,  
          musicamainmenu: this.musicamainmenu,
          sonidosgenerales: this.sonidosgenerales
        });
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        botonvolver.setScale(1.1);
        textovolver.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        botonvolver.setScale(1);
        textovolver.setStyle({color: '#000'});
      });
      var textovolver = this.add.text(175, 968, "Volver", {
        fontFamily: "Garamond",
        fontSize: "60px",
        color: "#000",
        });


      


    }
  }