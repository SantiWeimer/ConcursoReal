import Phaser from 'phaser'
var sonidogeneral = 10;
var volumenmusica = 1;


export class Configuracion extends Phaser.Scene {


  temporizador

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
        this.scene.start("MainMenu", { temporizador: this.temporizador })
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

      //banderin temporizador
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'banderintemporizador').setScale(1);

      this.add.text(this.cameras.main.centerX - 100, 280, 'Seleccione el tiempo \npara el temporizador')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '24px', 
            fill: '#000',
          });

      
      //sin temporizador
      var ceroSeg = this.add.image(this.cameras.main.centerX - 80, 410, 'botontemp0')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        this.temporizador = 0
        console.log(this.temporizador)
        ceroSeg.disableInteractive();
        treintaSeg.setInteractive();
        quinceSeg.setInteractive();
      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });
      var text0 = this.add.text(this.cameras.main.centerX - 90, 393, '0')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '36px', 
            fill: '#800101',
          });
      this.add.text(this.cameras.main.centerX - 45, 395, 'Sin tiempo')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '28px', 
            fill: '#000',
          });

      //15 segundos
      var quinceSeg = this.add.image(this.cameras.main.centerX - 80, 510, 'botontemp15')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        this.temporizador = 15;
        console.log(this.temporizador)
        quinceSeg.disableInteractive();
        ceroSeg.setInteractive();
        treintaSeg.setInteractive();
        
      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });
      this.add.text(this.cameras.main.centerX - 100, 493, '15')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '36px', 
            fill: '#015B80',
          });
      this.add.text(this.cameras.main.centerX - 45, 495, '15 segundos')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '28px', 
            fill: '#000',
          });


      //30 segundos
      var treintaSeg = this.add.image(this.cameras.main.centerX - 80, 610, 'botontemp30')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        this.temporizador = 30
        console.log(this.temporizador)
        treintaSeg.disableInteractive();
        ceroSeg.setInteractive();
        quinceSeg.setInteractive();
      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });
      this.add.text(this.cameras.main.centerX - 100, 593, '30')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '36px', 
            fill: '#610180',
          });
      this.add.text(this.cameras.main.centerX - 45, 595, '30 segundos')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '28px', 
            fill: '#000',
          });


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