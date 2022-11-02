import Phaser from 'phaser'
import Sonido from "../clases/Sonido.js";


export class Configuracion extends Phaser.Scene {

  //banderin sonidos
  sonido;
  sonidoboolean;
  volumenX = 400;
  volumenX2 = 400;
  musicamainmenu;

  //sonidos
  sonidobotones1;
  sonidobotones3;
  //banderin temporizador
  temporizador

    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Configuracion");
    }

    init(data) {
      this.temporizador = data.temporizador;
      this.sonido = data.sonido;
      this.musicamainmenu = data.musicamainmenu;
      this.sonidosgenerales = data.sonidosgenerales;
    }
  
    create() {

      console.log('sonido', this.sonido.volumenGeneral)
      //sonidos

      

      

      //fondo
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu').setScale(1);

      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia')
      .setScale(1)
      .setAlpha(0.5);

      //boton
      var botonvolver = this.add
      .image(250, 1000, "boton").setFlip(true, false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[2].play();
        this.scene.start("MainMenu", 
        {temporizador: this.temporizador, 
          sonido: this.sonido, 
          sonidoboolean: this.sonidoboolean, 
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

  
      

      //sonido general del juego
      
      this.add.image(330, 650, 'barrasonido').setScale(0.4);
      
      this.add.text(240, 500, 'Volumen sonidos')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '28px', 
            fill: '#000',
          });
      

      var desmutesonidos = this.add.image(280, 580, 'botontemp30')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        this.sonidosgenerales.forEach(element => {
          
          element.setMute(false);
        });

      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });

      var mutesonidos = this.add.image(380, 580, 'botontemp30')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        this.sonidosgenerales.forEach(element => {
          
          element.setMute(true);
        });

      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });

      
      var imagenvolumen = this.add.image(this.volumenX, 650, 'botontemp30')

      

      this.add.image(200, 650, 'flechasonidoizq').setScale(0.3)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        if (this.sonido.volumenGeneral === 10){

        }else {
          this.sonido.volumenGeneral = this.sonido.volumenGeneral + 1
          this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral);
          this.sonidosgenerales[0].play();
          console.log('sonido', this.sonido.volumenGeneral)
          this.tweens.add({
            targets: imagenvolumen,
            duration: 300,
            x:  this.volumenX - 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX = this.volumenX - 16.6
        }
      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });


      this.add.image(450, 650, 'flechasonidoder').setScale(0.3)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        if (this.sonido.volumenGeneral === 1){

        }else {
          this.sonido.volumenGeneral = this.sonido.volumenGeneral - 1
          this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral);
          this.sonidosgenerales[0].play();
          console.log('sonido', this.sonido.volumenGeneral)
          this.tweens.add({
            targets: imagenvolumen,
            duration: 300,
            x:  this.volumenX + 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX = this.volumenX + 16.6
        } 
      })
      .on('pointerover', () => {
       
      })
      .on('pointerout', () => {
        
      });

      
      //musica del juego

      var desmutemusica = this.add.image(280, 350, 'botontemp30')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        this.musicamainmenu.play()

      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });

      var mutemusica = this.add.image(380, 350, 'botontemp30')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        this.musicamainmenu.stop()

      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });

      this.add.image(330, 420, 'barrasonido').setScale(0.4);

      this.add.text(240, 280, 'Volumen musica')
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '28px', 
            fill: '#000',
          });

      var imagenvolumen2 = this.add.image(this.volumenX2, 420, 'botontemp30')

      

      this.add.image(200, 420, 'flechasonidoizq').setScale(0.3)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        if (this.sonido.volumenMusica === 10){

        }else {
          this.sonido.volumenMusica = this.sonido.volumenMusica + 1
          this.musicamainmenu.pause();
          this.musicamainmenu.setVolume(0.4 / this.sonido.volumenMusica);
          this.musicamainmenu.resume();
          this.tweens.add({
            targets: imagenvolumen2,
            duration: 300,
            x:  this.volumenX2 - 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX2 = this.volumenX2 - 16.6
        }
      })
      .on('pointerover', () => {
        
      })
      .on('pointerout', () => {
        
      });


      this.add.image(450, 420, 'flechasonidoder').setScale(0.3)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        if (this.sonido.volumenMusica === 1){

        }else {
          this.sonido.volumenMusica = this.sonido.volumenMusica - 1
          this.musicamainmenu.pause();
          this.musicamainmenu.setVolume(0.4 / this.sonido.volumenMusica);
          this.musicamainmenu.resume();
          this.tweens.add({
            targets: imagenvolumen2,
            duration: 300,
            x:  this.volumenX2 + 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX2 = this.volumenX2 + 16.6
        } 
      })
      .on('pointerover', () => {
       
      })
      .on('pointerout', () => {
        
      });

    }

    update(){
      this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral);
      this.sonidosgenerales[2].setVolume(1 / this.sonido.volumenGeneral);
    }

  }