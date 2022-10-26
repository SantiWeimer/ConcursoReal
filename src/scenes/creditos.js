import Phaser from 'phaser'

export class Creditos extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Creditos");
    }

  
    create() {

      //sonidos

      //botones
      var sonidobotones1;
      var sonidobotones3;

      sonidobotones1 = this.sound.add('sonidobotones1');
      sonidobotones1.setVolume(0.3);
      sonidobotones3 = this.sound.add('sonidobotones3');
      sonidobotones3.setVolume(1);


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
      var botonvolver;

      botonvolver = this.add.image(250, 1000, 'volver')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        sonidobotones3.play()
        this.scene.start("MainMenu");
        
      })
      .on('pointerover', () => {
        sonidobotones1.play()
        botonvolver.setScale(1.1)
      })
      .on('pointerout', () => {
        botonvolver.setScale(1)
      });


      


    }
  }