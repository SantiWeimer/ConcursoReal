import Phaser from 'phaser'
var sonidogeneral = 10;
var volumenmusica = 1;


export class Configuracion extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Configuracion");
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
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu').setScale(1);

      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia')
      .setScale(1)
      .setAlpha(0.5);

      //boton
      var botonvolver;

      botonvolver = this.add.image(250, 1000, 'volver')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        sonidobotones3.play()
        this.scene.start("MainMenu"),
        { volumenmusica: volumenmusica };
      })
      .on('pointerover', () => {
        sonidobotones1.play()
        botonvolver.setScale(1.1)
      })
      .on('pointerout', () => {
        botonvolver.setScale(1)
      });
  
      


      //banderines

      this.add.image(1600, this.cameras.main.centerY, 'banderinidioma').setScale(1);
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'banderintemporizador').setScale(1);


      //banderin volumen

      this.add.image(this.cameras.main.centerX/3, this.cameras.main.centerY, 'banderinvolumen').setScale(1);

      this.add.image(330, 300, 'barrasonido').setScale(0.4);


      //botones subir y bajar volumen

      this.add.image(200, 300, 'flechasonidoizq').setScale(0.3)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        if (sonidogeneral === 0){

        }else {
          sonidogeneral = sonidogeneral - 1
          console.log(sonidogeneral)
        }
      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });


      this.add.image(450, 300, 'flechasonidoder').setScale(0.3)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        if (sonidogeneral === 10){

        }else {
          sonidogeneral = sonidogeneral + 1
          console.log(sonidogeneral)
        } 
      })
      .on('pointerover', () => {
       
      })
      .on('pointerout', () => {
        
      });
     


     var scope; 
     var botonsonido10 = this.add.image(415, 300, 'barrasonido1').setScale(0.4)
     .setInteractive({ draggable: true, useHandCursor: true })
     .on('dragstart', function(pointer, dragX, dragY){
         // ...
     }, scope)
     .on('drag', function(pointer, dragX, dragY){
      botonsonido10.setPosition(dragX, dragY);
     }, scope)
     .on('dragend', function(pointer, dragX, dragY, dropped){
         // ...
     }, scope);

      

    }

  }