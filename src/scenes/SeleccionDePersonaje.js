import Phaser from 'phaser'
import Player from '../clases/Player';



export class SeleccionDePersonaje extends Phaser.Scene {

  //acumuladores o contadores
  ContadorInteraccion = 0;
  numjugador = 1;

  //boton
  botonjugar;
  sonidobotones1;
  sonidobotones2;
  sonidobotones3;

  //seleccion de jugadores
  players;
  CantidadJugadores;
  selplayer1;

  //animaciones;
  ogroAnimacion;
  princesaAnimacion;
  bardoAnimacion;
  hechiceroAnimacion;

  //desbuguea la animacion
  ogronum = 0;
  princesanum = 0;
  bardonum = 0;
  hechiceronum = 0;

  //bloquea los jugadores no seleccionados
  ogroboolean = 0;
  princesaboolean = 0;
  bardoboolean = 0;
  hechiceroboolean = 0;

  //temporizador
  temporizador

    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SeleccionDePersonaje");
    }

    init(data) {
      this.temporizador = data.temporizador;
    }
  
    
    create() {

      //
      //
      //sonidos

      var caraspersonajes;

      this.sonidobotones1 = this.sound.add('sonidobotones1');
      this.sonidobotones1.setVolume(0.3);
      this.sonidobotones2 = this.sound.add('sonidobotones2');
      this.sonidobotones2
      this.sonidobotones3 = this.sound.add('sonidobotones3');
      caraspersonajes = this.sound.add('caraspersonajes');
      caraspersonajes.setVolume(0.1);

      //
      //
      //


       //fondo
       this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoseleccion')
     
       

      //botones

      var botonvolver;

      
      botonvolver = this.add.image(250, 1000, 'volver')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        if (this.ContadorInteraccion === 1){
          this.sonidobotones3.play()
          this.scene.start("MainMenu");

          //funcion reseteadora
          this.reseteosVariables();
           
        }

        })
        .on('pointerover', () => {
          if (this.ContadorInteraccion === 1){
            this.sonidobotones1.play()
          botonvolver.setScale(1.1)
          
          }
        
        })
        .on('pointerout', () => {
          botonvolver.setScale(1)
        });
      

      var botonjugargris = this.add.image(1650, 1000, 'jugargris').setScale(1)



      //jugadores

      
    
      var recuadrojugador1;
      var recuadrojugador2;
      var recuadrojugador3;
      var recuadrojugador4;
      var textoOgro;
      var textoPrincesa;
      var textoBardo;
      var textoHechicero;


      this.players = []

      var ogro = new Player('ogro');
      var princesa = new Player('princesa');
      var bardo = new Player('bardo');
      var hechicero = new Player('hechicero');
      

      //ogro

      this.ogroAnimacion = this.add.sprite(250, this.cameras.main.centerY + 83, 'ogro-spritesheet').setScale(1)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
        if (this.ContadorInteraccion === 1){

          this.ogroAnimacion.play('ogroSeleccionado')
          this.ogroAnimacion.removeInteractive();
          this.ogroboolean = 1;
          //desabilitar jugadores
          this.BloqueoYDesbloqueo();
          this.players.push(ogro);
          console.log(this.players);

          this.add.image(250, this.cameras.main.centerY + 83, 'recuadrojugador2').setScale(0.93)
          this.add.text(135, 293, 'Jugador ' + this.numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#42FF1C',
          });
          
          this.numjugador = this.numjugador + 1;

          if(this.numjugador > 4){
          }else{
            //texto de seleccion de jugador segun la cantidad de jugadores
            if(this.numjugador <= this.CantidadJugadores){
              this.selplayer1.setText('Selección jugador ' + this.numjugador)
            }
          } 
        }   
      })
      .on('pointerover', () => {

        if (this.ContadorInteraccion === 1){

          recuadrojugador2 = this.add.image(250, this.cameras.main.centerY + 83, 'recuadrojugador2').setScale(0.93);
          this.animacionSeleccionOgro();

           textoOgro = this.add.text(135, 293, 'Jugador ' + this.numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#42FF1C',
          });

        } 
        
     
      })
      .on('pointerout', () => {
        
        if (this.ContadorInteraccion === 1){

          // destruccion colores de recuadros por cada jugador
          recuadrojugador2.destroy();
          textoOgro.destroy();
          //animacion
          this.animacionSeleccionOgro2();
         

        }
      });

      //princesa

      this.princesaAnimacion = this.add.sprite(750, this.cameras.main.centerY + 100, 'princesa-spritesheet').setScale(1)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
       if (this.ContadorInteraccion === 1){

        this.princesaAnimacion.play('princesaSeleccionado')
        this.princesaAnimacion.removeInteractive();
        this.princesaboolean = 1;
        //desabilitar jugadores
        this.BloqueoYDesbloqueo();
        this.players.push(princesa);
        console.log(this.players);

        this.add.image(750, this.cameras.main.centerY + 100, 'recuadrojugador1').setScale(0.93);
        this.add.text(635, 310, 'Jugador ' + this.numjugador)
        .setStyle({
          fontFamily: 'Times', 
          fontStyle: 'italic', 
          fontSize: '58px', 
          fill: '#1CFFFF',
        });
        
        this.numjugador = this.numjugador + 1;
        if(this.numjugador > 4){
        }else{
          //texto de seleccion de jugador segun la cantidad de jugadores
          if(this.numjugador <= this.CantidadJugadores){
            this.selplayer1.setText('Selección jugador ' + this.numjugador)
          }
        }
        }
        
      })
      .on('pointerover', () => {
        
        if (this.ContadorInteraccion === 1){
          recuadrojugador1 = this.add.image(750, this.cameras.main.centerY + 100, 'recuadrojugador1').setScale(0.93)
          this.animacionSeleccionPrincesa();
          textoPrincesa = this.add.text(635, 310, 'Jugador ' + this.numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#1CFFFF',
          });
        } 
      })
      .on('pointerout', () => {
        
        if (this.ContadorInteraccion === 1){
          textoPrincesa.destroy();
          recuadrojugador1.destroy();
          //animacion
          this.animacionSeleccionPrincesa2();
        }  
      });


      //bardo

      this.bardoAnimacion = this.add.sprite(1680, this.cameras.main.centerY + 93, 'bardo-spritesheet').setScale(1)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

          //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
          if (this.ContadorInteraccion === 1){
            this.bardoAnimacion.play('bardoSeleccionado')
            this.bardoAnimacion.removeInteractive();
            this.bardoboolean = 1;
            //desabilitar jugadores
            this.BloqueoYDesbloqueo();
            this.players.push(bardo);
            console.log(this.players);
  
            this.add.image(1680, this.cameras.main.centerY + 93, 'recuadrojugador3').setScale(0.93);
            textoBardo = this.add.text(1565, 303, 'Jugador ' + this.numjugador)
            .setStyle({
              fontFamily: 'Times', 
              fontStyle: 'italic', 
              fontSize: '58px', 
              fill: '#FFC81C',
            });
  
            this.numjugador = this.numjugador + 1;
  
            if(this.numjugador > 4){
            }else{
              //texto de seleccion de jugador segun la cantidad de jugadores
              if(this.numjugador <= this.CantidadJugadores){
                this.selplayer1.setText('Selección jugador ' + this.numjugador)
              }
            }
          }
          
        
      })
      .on('pointerover', () => {
        
        if (this.ContadorInteraccion === 1){
          recuadrojugador3 = this.add.image(1680, this.cameras.main.centerY + 93, 'recuadrojugador3').setScale(0.93);
          this.animacionSeleccionBardo();
          textoBardo = this.add.text(1565, 303, 'Jugador ' + this.numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FFC81C',
          });
        }
      })
      .on('pointerout', () => {
        if (this.ContadorInteraccion === 1){
          recuadrojugador3.destroy();
          textoBardo.destroy();
          //animacion
          this.animacionSeleccionBardo2();
        }
      });

      //hechicero

      this.hechiceroAnimacion = this.add.sprite(1260, 575, 'hechicero-spritesheet').setScale(1.138)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

         //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
       if (this.ContadorInteraccion === 1){

        this.hechiceroAnimacion.play('hechiceroSeleccionado')
        this.hechiceroAnimacion.removeInteractive();
        this.hechiceroboolean = 1;
        //desabilitar jugadores
        this.BloqueoYDesbloqueo();
        this.players.push(hechicero);

        console.log(this.players);

        this.add.image(1240, 625, 'recuadrojugador4').setScale(0.93);
        this.add.text(1150, 295, 'Jugador ' + this.numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FF17F4',
          });


          this.numjugador = this.numjugador + 1;
        if(this.numjugador > 4){
        }else{
          //texto de seleccion de jugador segun la cantidad de jugadores
          if(this.numjugador <= this.CantidadJugadores){
            this.selplayer1.setText('Selección jugador ' + this.numjugador)
          }
        }
      }
        
      })
      .on('pointerover', () => {
        
        if (this.ContadorInteraccion === 1){
         
          recuadrojugador4 = this.add.image(1240, 625, 'recuadrojugador4').setScale(0.93);
          this.animacionSeleccionHechicero();
          textoHechicero = this.add.text(1150, 295, 'Jugador ' + this.numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FF17F4',
          });
        } 
        
      })
      .on('pointerout', () => {
        
        if (this.ContadorInteraccion === 1){

          textoHechicero.destroy();
          recuadrojugador4.destroy();
          //animacion
          this.animacionSeleccionHechicero2();
          //vuelve a aparecer la imagen
          
        } 
      });

      ////

      ////animaciones de personajes


      //ogro
      this.ogroAnimacion.anims.create({
      key: 'ogroSeleccionado',
      frames: this.anims.generateFrameNumbers('ogro-spritesheet', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: 0,
     
      });  

      //princesa
      this.princesaAnimacion.anims.create({
      key: 'princesaSeleccionado',
      frames: this.anims.generateFrameNumbers('princesa-spritesheet', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: 0,
     
      });  

      //bardo
      this.bardoAnimacion.anims.create({
      key: 'bardoSeleccionado',
      frames: this.anims.generateFrameNumbers('bardo-spritesheet', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: 0,
     
      });  

      //hechicero
      this.hechiceroAnimacion.anims.create({
      key: 'hechiceroSeleccionado',
      frames: this.anims.generateFrameNumbers('hechicero-spritesheet', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: 0,
     
      });  
 
      
      ////


      

      //pop up seleccion de personajes

      var trans = this.add.image(this.cameras.main.centerX, 665, 'transparencia').setScale(1)
      .setAlpha(0.5);

      var cadena1 = this.add.image(this.cameras.main.centerX - 220, - 500, 'cadenaseleccion')
      var cadena2 = this.add.image(this.cameras.main.centerX + 220, - 500, 'cadenaseleccion')

      this.tweens.add({
        targets: cadena1,
        duration: 1000,
        y: 230,
        ease: "Power3",
        repeat: 0,
        yoyo: false,
        onComplete: () => {
          this.tweens.add({
            targets: cadena2,
            duration: 1000,
            y: 230,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
        },
      });


      setTimeout(() => {
        
        var popupseleccion = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY + 30, 'popupseleccion')

      //2 jugadores
      var popupseleccion2 = this.add.image(this.cameras.main.centerX, 530, 'botonseleccion1').setScale(0.9).setAlpha(0.8)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        //desbloquea todos los botones
        this.ContadorInteraccion = this.ContadorInteraccion + 1;
        

        //sirve para saber cuando desbloquear el boton de jugar
        this.CantidadJugadores = 2;
        
        this.selplayer1 = this.add.text(620, 30, 'Selección jugador ' + this.numjugador,
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '80px', color: '#000000' });

        trans.destroy();
        popupseleccion.destroy();
        popupseleccion2.destroy();
        popupseleccion3.destroy();
        popupseleccion4.destroy();
        textJugadores.destroy();
        textDosJug.destroy();
        textTresJug.destroy();
        textCuatroJug.destroy();
        cadena1.destroy();
        cadena2.destroy();
      })
      .on('pointerover', () => {
        
        popupseleccion2.setTexture('botonseleccion2')
        textDosJug.setStyle({ fill: '#999999'})
      })
      .on('pointerout', () => {
        
        popupseleccion2.setTexture('botonseleccion1')
        textDosJug.setStyle({ fill: '#ffffff'})
      });


      //3 jugadores
      var popupseleccion3 = this.add.image(this.cameras.main.centerX, 630, 'botonseleccion1').setScale(0.9).setAlpha(0.8)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
       
        this.ContadorInteraccion = this.ContadorInteraccion + 1;

        //sirve para saber cuando desbloquear el boton de jugar
        this.CantidadJugadores = 3;
        
        this.selplayer1 = this.add.text(620, 30, 'Selección jugador ' + this.numjugador,
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '80px', color: '#000000' });

        trans.destroy();
        popupseleccion.destroy();
        popupseleccion2.destroy();
        popupseleccion3.destroy();
        popupseleccion4.destroy();
        textJugadores.destroy();
        textDosJug.destroy();
        textTresJug.destroy();
        textCuatroJug.destroy();
        cadena1.destroy();
        cadena2.destroy();
      })
      .on('pointerover', () => {
        
        popupseleccion3.setTexture('botonseleccion2')
        textTresJug.setStyle({ fill: '#999999'})
      })
      .on('pointerout', () => {
        
        popupseleccion3.setTexture('botonseleccion1')
        textTresJug.setStyle({ fill: '#ffffff'})
      });


      //4 jugadores
      var popupseleccion4 = this.add.image(this.cameras.main.centerX, 730, 'botonseleccion1').setScale(0.9).setAlpha(0.8)
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        this.ContadorInteraccion = this.ContadorInteraccion + 1;

        //sirve para saber cuando desbloquear el boton de jugar
        this.CantidadJugadores = 4;
        
        this.selplayer1 = this.add.text(620, 30, 'Selección jugador ' + this.numjugador,
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '80px', color: '#000000' });

        trans.destroy();
        popupseleccion.destroy();
        popupseleccion2.destroy();
        popupseleccion3.destroy();
        popupseleccion4.destroy();
        textJugadores.destroy();
        textDosJug.destroy();
        textTresJug.destroy();
        textCuatroJug.destroy();
        cadena1.destroy();
        cadena2.destroy();
      })
      .on('pointerover', () => {
        
        popupseleccion4.setTexture('botonseleccion2')
        textCuatroJug.setStyle({ fill: '#999999'})
      })
      .on('pointerout', () => {
        
        popupseleccion4.setTexture('botonseleccion1')
        textCuatroJug.setStyle({ fill: '#ffffff'})
      });

    var textJugadores = this.add.text(790, 360, 'Elegir un número\n de jugadores')
    .setStyle({
            fontFamily: 'Ink Free', 
            fontStyle: 'italic', 
            fontSize: '50px', 
            fill: '#ffffff',
          }).setAlpha(0.8);


    var textDosJug = this.add.text(837, 500, '2 jugadores').setAlpha(0.8)
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '48px', 
            fill: '#FFFFFF',
          });

    var textTresJug = this.add.text(837, 600, '3 jugadores').setAlpha(0.8)
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '48px', 
            fill: '#FFFFFF',
          });
          
    var textCuatroJug = this.add.text(837, 700, '4 jugadores').setAlpha(0.8)
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '48px', 
            fill: '#FFFFFF',
          });

      }, 2000);
      
    ////fin del create////

    }



    ////inicio de funciones////
 

    reseteosVariables(){
      this.CantidadJugadores = (this.CantidadJugadores - this.CantidadJugadores);
      this.numjugador = 1;
      this.ogroboolean = 0;
      this.princesaboolean = 0;
      this.bardoboolean = 0;
      this.hechiceroboolean = 0;
      this.ogronum = 0;
      this.princesanum = 0;
      this.bardonum = 0;
      this.hechiceronum = 0;
      this.ContadorInteraccion = (this.ContadorInteraccion - this.ContadorInteraccion);
      //
    }


    BloqueoYDesbloqueo(){

      if(this.numjugador === this.CantidadJugadores){
        if (this.ogroboolean === 0){
          this.add.image(250, this.cameras.main.centerY + 83, 'ogrobyn');
          this.ogroAnimacion.removeInteractive();
        };
        if (this.princesaboolean === 0){
          this.add.image(750, this.cameras.main.centerY + 100, 'princesabyn');
          this.princesaAnimacion.removeInteractive();
        };
        if (this.bardoboolean === 0){
          this.add.image(1680, this.cameras.main.centerY + 93, 'bardobyn');
          this.bardoAnimacion.removeInteractive();
        };
        if (this.hechiceroboolean === 0){
          this.add.image(1222, 610, 'hechicerobyn');
          this.hechiceroAnimacion.removeInteractive();
        };

        this.botonjugar = this.add.image(1650, 1000, 'jugar')
        .setInteractive({
        useHandCursor: true
        })
        .on('pointerdown', () => {

        if (this.ContadorInteraccion === 1){
          
          this.sonidobotones2.play()
          this.scene.start("Preloads", 
          {players: this.players,
          CantidadJugadores: this.CantidadJugadores,
          temporizador: this.temporizador
          })
          this.botonjugar.destroy(); 
          //reseteos de variables
          this.ContadorInteraccion = (this.ContadorInteraccion - this.ContadorInteraccion);
          this.ogronum = 0;
          this.princesanum = 0;
          this.bardonum = 0;
          this.hechiceronum = 0;
          this.numjugador = 1;
        }
        })
        .on('pointerover', () => {
          if (this.ContadorInteraccion === 1){
            this.sonidobotones1.play()
            this.botonjugar.setScale(1.2)
          
          }
        
        })
        .on('pointerout', () => {
          this.botonjugar.setScale(1)
        });

      }
    }





   
   ////

   //animaciones

   ////



   //ogro
  
   animacionSeleccionOgro(){
    if(this.ogronum === 0){

      setTimeout(() => {
        this.ogroAnimacion.setScale(1.01)
      }, 50);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1.02)
      }, 100);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1.03)
      }, 150);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1.04)
      }, 200);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1.05)
      }, 250);

      setTimeout(() => {
        this.ogronum = 1;
      }, 300);
    }
   }
   /////////
   animacionSeleccionOgro2(){

    if(this.ogronum === 1){

      setTimeout(() => {
        this.ogroAnimacion.setScale(1.04)
      }, 50);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1.03)
      }, 100);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1.02)
      }, 150);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1.01)
      }, 200);
  
      setTimeout(() => {
        this.ogroAnimacion.setScale(1)
      }, 250);

      setTimeout(() => {
        this.ogronum = 0;
      }, 300);
      
    } 
   }
   /////////
   //princesa
   animacionSeleccionPrincesa(){

    if(this.princesanum === 0){

      setTimeout(() => {
        this.princesaAnimacion.setScale(1.01)
      }, 50);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1.02)
      }, 100);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1.03)
      }, 150);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1.04)
      }, 200);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1.05)
      }, 250);

      setTimeout(() => {
        this.princesanum = 1;
      }, 300);
    } 
   }

   /////////
   animacionSeleccionPrincesa2(){

    if(this.princesanum === 1){

      setTimeout(() => {
        this.princesaAnimacion.setScale(1.04)
      }, 50);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1.03)
      }, 100);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1.02)
      }, 150);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1.01)
      }, 200);
  
      setTimeout(() => {
        this.princesaAnimacion.setScale(1)
      }, 250);

      setTimeout(() => {
        this.princesanum = 0;
      }, 300);
    } 
   }
   /////////
   //bardo

   animacionSeleccionBardo(){

    if(this.bardonum === 0){

      setTimeout(() => {
        this.bardoAnimacion.setScale(1.01)
    }, 50);

    setTimeout(() => {
      this.bardoAnimacion.setScale(1.02)
    }, 100);

    setTimeout(() => {
      this.bardoAnimacion.setScale(1.03)
    }, 150);

    setTimeout(() => {
      this.bardoAnimacion.setScale(1.04)
    }, 200);

    setTimeout(() => {
      this.bardoAnimacion.setScale(1.05)
    }, 250);

    setTimeout(() => {
      this.bardonum = 1;
    }, 300);
    }
    

   }

   /////////
   animacionSeleccionBardo2(){

    if(this.bardonum === 1){

      setTimeout(() => {
        this.bardoAnimacion.setScale(1.04)
      }, 50);
  
      setTimeout(() => {
        this.bardoAnimacion.setScale(1.03)
      }, 100);
  
      setTimeout(() => {
        this.bardoAnimacion.setScale(1.02)
      }, 150);
  
      setTimeout(() => {
        this.bardoAnimacion.setScale(1.01)
      }, 200);
  
      setTimeout(() => {
        this.bardoAnimacion.setScale(1)
      }, 250);

      setTimeout(() => {
        this.bardonum = 0;
      }, 300);
    }
    }
    /////////
    //hechicero

    animacionSeleccionHechicero(){

      if(this.hechiceronum === 0){

        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.148)
        }, 50);
    
        setTimeout(() => {
          
          this.hechiceroAnimacion.setScale(1.158)
        }, 100);
    
        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.168)
        }, 150);
    
        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.178)
        }, 200);
    
        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.188)
        }, 250);

        setTimeout(() => {
          this.hechiceronum = 1;
        }, 300);
      }
      
     }
     /////////
     animacionSeleccionHechicero2(){

      if(this.hechiceronum === 1){

        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.178)
        }, 50);
    
        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.168)
        }, 100);
    
        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.158)
        }, 150);
    
        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.148)
        }, 200);
    
        setTimeout(() => {
          this.hechiceroAnimacion.setScale(1.138)
        }, 250);

        setTimeout(() => {
          this.hechiceronum = 0;
        }, 300);
      }
  
      
    }
    /////////
  

  
  }
