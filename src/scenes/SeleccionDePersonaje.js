import Phaser from 'phaser'
import Player from '../clases/Player';

//acumuladores o contadores
var ContadorInteraccion = 0;
var numjugador = 1;

//boton
var botonjugar;
var sonidobotones1;
var sonidobotones2;
var sonidobotones3;

//seleccion de jugadores
var players;
var CantidadJugadores;
var selplayer1;

//animaciones;
var ogroAnimacion;
var princesaAnimacion;
var bardoAnimacion;
var hechiceroAnimacion;

//desbuguea la animacion
var ogronum = 0;
var princesanum = 0;
var bardonum = 0;
var hechiceronum = 0;

//bloquea los jugadores no seleccionados
var ogroboolean = 0;
var princesaboolean = 0;
var bardoboolean = 0;
var hechiceroboolean = 0;




export class SeleccionDePersonaje extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SeleccionDePersonaje");
    }

    init (data) {
      
    }
  
    
    create() {

      //
      //
      //sonidos

      var caraspersonajes;

      sonidobotones1 = this.sound.add('sonidobotones1');
      sonidobotones1.setVolume(0.3);
      sonidobotones2 = this.sound.add('sonidobotones2');
      sonidobotones2
      sonidobotones3 = this.sound.add('sonidobotones3');
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

        if (ContadorInteraccion === 1){
          sonidobotones3.play()
          this.scene.start("MainMenu");

          //funcion reseteadora
          this.reseteosVariables();
           
        }

        })
        .on('pointerover', () => {
          if (ContadorInteraccion === 1){
          sonidobotones1.play()
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


      players = []

      var ogro = new Player('ogro');
      var princesa = new Player('princesa');
      var bardo = new Player('bardo');
      var hechicero = new Player('hechicero');
      

      //ogro

      ogroAnimacion = this.add.sprite(250, this.cameras.main.centerY + 83, 'ogro-spritesheet').setScale(1)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
        if (ContadorInteraccion === 1){

          ogroAnimacion.play('ogroSeleccionado')
          ogroAnimacion.removeInteractive();
          ogroboolean = 1;
          //desabilitar jugadores
          this.BloqueoYDesbloqueo();
          players.push(ogro);
          console.log(players);

          this.add.image(250, this.cameras.main.centerY + 83, 'recuadrojugador2').setScale(0.93)
          this.add.text(135, 293, 'Jugador ' + numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#42FF1C',
          });
          
          numjugador = numjugador + 1;

          if(numjugador > 4){
          }else{
            //texto de seleccion de jugador segun la cantidad de jugadores
            if(numjugador <= CantidadJugadores){
              selplayer1.setText('Selección jugador ' + numjugador)
            }
          } 
        }   
      })
      .on('pointerover', () => {

        if (ContadorInteraccion === 1){

          recuadrojugador2 = this.add.image(250, this.cameras.main.centerY + 83, 'recuadrojugador2').setScale(0.93);
          this.animacionSeleccionOgro();

           textoOgro = this.add.text(135, 293, 'Jugador ' + numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#42FF1C',
          });

        } 
        
     
      })
      .on('pointerout', () => {
        
        if (ContadorInteraccion === 1){

          // destruccion colores de recuadros por cada jugador
          recuadrojugador2.destroy();
          textoOgro.destroy();
          //animacion
          this.animacionSeleccionOgro2();
         

        }
      });

      //princesa

      princesaAnimacion = this.add.sprite(750, this.cameras.main.centerY + 100, 'princesa-spritesheet').setScale(1)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

        //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
       if (ContadorInteraccion === 1){

        princesaAnimacion.play('princesaSeleccionado')
        princesaAnimacion.removeInteractive();
        princesaboolean = 1;
        //desabilitar jugadores
        this.BloqueoYDesbloqueo();
        players.push(princesa);
        console.log(players);

        this.add.image(750, this.cameras.main.centerY + 100, 'recuadrojugador1').setScale(0.93);
        this.add.text(635, 310, 'Jugador ' + numjugador)
        .setStyle({
          fontFamily: 'Times', 
          fontStyle: 'italic', 
          fontSize: '58px', 
          fill: '#1CFFFF',
        });
        
        numjugador = numjugador + 1;
        if(numjugador > 4){
        }else{
          //texto de seleccion de jugador segun la cantidad de jugadores
          if(numjugador <= CantidadJugadores){
            selplayer1.setText('Selección jugador ' + numjugador)
          }
        }
        }
        
      })
      .on('pointerover', () => {
        
        if (ContadorInteraccion === 1){
          recuadrojugador1 = this.add.image(750, this.cameras.main.centerY + 100, 'recuadrojugador1').setScale(0.93)
          this.animacionSeleccionPrincesa();
          textoPrincesa = this.add.text(635, 310, 'Jugador ' + numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#1CFFFF',
          });
        } 
      })
      .on('pointerout', () => {
        
        if (ContadorInteraccion === 1){
          textoPrincesa.destroy();
          recuadrojugador1.destroy();
          //animacion
          this.animacionSeleccionPrincesa2();
        }  
      });


      //bardo

      bardoAnimacion = this.add.sprite(1680, this.cameras.main.centerY + 93, 'bardo-spritesheet').setScale(1)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

          //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
          if (ContadorInteraccion === 1){
            bardoAnimacion.play('bardoSeleccionado')
            bardoAnimacion.removeInteractive();
            bardoboolean = 1;
            //desabilitar jugadores
            this.BloqueoYDesbloqueo();
            players.push(bardo);
            console.log(players);
  
            this.add.image(1680, this.cameras.main.centerY + 93, 'recuadrojugador3').setScale(0.93);
            textoBardo = this.add.text(1565, 303, 'Jugador ' + numjugador)
            .setStyle({
              fontFamily: 'Times', 
              fontStyle: 'italic', 
              fontSize: '58px', 
              fill: '#FFC81C',
            });
  
            numjugador = numjugador + 1;
  
            if(numjugador > 4){
            }else{
              //texto de seleccion de jugador segun la cantidad de jugadores
              if(numjugador <= CantidadJugadores){
                selplayer1.setText('Selección jugador ' + numjugador)
              }
            }
          }
          
        
      })
      .on('pointerover', () => {
        
        if (ContadorInteraccion === 1){
          recuadrojugador3 = this.add.image(1680, this.cameras.main.centerY + 93, 'recuadrojugador3').setScale(0.93);
          this.animacionSeleccionBardo();
          textoBardo = this.add.text(1565, 303, 'Jugador ' + numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FFC81C',
          });
        }
      })
      .on('pointerout', () => {
        if (ContadorInteraccion === 1){
          recuadrojugador3.destroy();
          textoBardo.destroy();
          //animacion
          this.animacionSeleccionBardo2();
        }
      });

      //hechicero

        hechiceroAnimacion = this.add.sprite(1260, 575, 'hechicero-spritesheet').setScale(1.138)
       .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {

         //desbloqueo de click // bloqueo para no poder tocar mientras esta el pop up
       if (ContadorInteraccion === 1){

        hechiceroAnimacion.play('hechiceroSeleccionado')
        hechiceroAnimacion.removeInteractive();
        hechiceroboolean = 1;
        //desabilitar jugadores
        this.BloqueoYDesbloqueo();
        players.push(hechicero);

        console.log(players);

        this.add.image(1240, 625, 'recuadrojugador4').setScale(0.93);
        this.add.text(1150, 295, 'Jugador ' + numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FF17F4',
          });


        numjugador = numjugador + 1;
        if(numjugador > 4){
        }else{
          //texto de seleccion de jugador segun la cantidad de jugadores
          if(numjugador <= CantidadJugadores){
            selplayer1.setText('Selección jugador ' + numjugador)
          }
        }
      }
        
      })
      .on('pointerover', () => {
        
        if (ContadorInteraccion === 1){
         
          recuadrojugador4 = this.add.image(1240, 625, 'recuadrojugador4').setScale(0.93);
          this.animacionSeleccionHechicero();
          textoHechicero = this.add.text(1150, 295, 'Jugador ' + numjugador)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FF17F4',
          });
        } 
        
      })
      .on('pointerout', () => {
        
        if (ContadorInteraccion === 1){

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
      ogroAnimacion.anims.create({
      key: 'ogroSeleccionado',
      frames: this.anims.generateFrameNumbers('ogro-spritesheet', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: 0,
     
      });  

      //princesa
      princesaAnimacion.anims.create({
      key: 'princesaSeleccionado',
      frames: this.anims.generateFrameNumbers('princesa-spritesheet', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: 0,
     
      });  

      //bardo
      bardoAnimacion.anims.create({
      key: 'bardoSeleccionado',
      frames: this.anims.generateFrameNumbers('bardo-spritesheet', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: 0,
     
      });  

      //hechicero
      hechiceroAnimacion.anims.create({
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
      var popupseleccion2 = this.add.image(this.cameras.main.centerX, 530, 'botonseleccion1')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        //desbloquea todos los botones
        ContadorInteraccion = ContadorInteraccion + 1;
        

        //sirve para saber cuando desbloquear el boton de jugar
        CantidadJugadores = 2;
        
        selplayer1 = this.add.text(620, 30, 'Selección jugador ' + numjugador,
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
      var popupseleccion3 = this.add.image(this.cameras.main.centerX, 630, 'botonseleccion1')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
       
        ContadorInteraccion = ContadorInteraccion + 1;

        //sirve para saber cuando desbloquear el boton de jugar
        CantidadJugadores = 3;
        
        selplayer1 = this.add.text(620, 30, 'Selección jugador ' + numjugador,
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
      var popupseleccion4 = this.add.image(this.cameras.main.centerX, 730, 'botonseleccion1')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        ContadorInteraccion = ContadorInteraccion + 1;

        //sirve para saber cuando desbloquear el boton de jugar
        CantidadJugadores = 4;
        
        selplayer1 = this.add.text(620, 30, 'Selección jugador ' + numjugador,
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

    var textJugadores = this.add.text(800, 360, 'Elegir un número\n de jugadores')
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '50px', 
            fill: '#ffffff',
          });


    var textDosJug = this.add.text(837, 500, '2 jugadores')
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '48px', 
            fill: '#FFFFFF',
          });

    var textTresJug = this.add.text(837, 600, '3 jugadores')
    .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '48px', 
            fill: '#FFFFFF',
          });
          
    var textCuatroJug = this.add.text(837, 700, '4 jugadores')
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
      CantidadJugadores = (CantidadJugadores - CantidadJugadores);
      numjugador = 1;
      ogroboolean = 0;
      princesaboolean = 0;
      bardoboolean = 0;
      hechiceroboolean = 0;
      ogronum = 0;
      princesanum = 0;
      bardonum = 0;
      hechiceronum = 0;
      ContadorInteraccion = (ContadorInteraccion - ContadorInteraccion);
      //
    }


    BloqueoYDesbloqueo(){

      if(numjugador === CantidadJugadores){
        if (ogroboolean === 0){
          this.add.image(250, this.cameras.main.centerY + 83, 'ogrobyn');
          ogroAnimacion.removeInteractive();
        };
        if (princesaboolean === 0){
          this.add.image(750, this.cameras.main.centerY + 100, 'princesabyn');
          princesaAnimacion.removeInteractive();
        };
        if (bardoboolean === 0){
          this.add.image(1680, this.cameras.main.centerY + 93, 'bardobyn');
          bardoAnimacion.removeInteractive();
        };
        if (hechiceroboolean === 0){
          this.add.image(1222, 610, 'hechicerobyn');
          hechiceroAnimacion.removeInteractive();
        };

        botonjugar = this.add.image(1650, 1000, 'jugar')
        .setInteractive({
        useHandCursor: true
        })
        .on('pointerdown', () => {

        if (ContadorInteraccion === 1){
          
          sonidobotones2.play()
          this.scene.start("Preloads", 
          {players: players,
          CantidadJugadores: CantidadJugadores,
          })
          botonjugar.destroy(); 
          //reseteos de variables
          ContadorInteraccion = (ContadorInteraccion - ContadorInteraccion);
          ogronum = 0;
          princesanum = 0;
          bardonum = 0;
          hechiceronum = 0;
          numjugador = 1;
        }
        })
        .on('pointerover', () => {
          if (ContadorInteraccion === 1){
          sonidobotones1.play()
          botonjugar.setScale(1.2)
          
          }
        
        })
        .on('pointerout', () => {
          botonjugar.setScale(1)
        });

      }
    }





   
   ////

   //animaciones

   ////



   //ogro
  
   animacionSeleccionOgro(){
    if(ogronum === 0){

      setTimeout(() => {
        ogroAnimacion.setScale(1.01)
      }, 50);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1.02)
      }, 100);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1.03)
      }, 150);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1.04)
      }, 200);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1.05)
      }, 250);

      setTimeout(() => {
        ogronum = 1;
      }, 300);
    }
   }
   /////////
   animacionSeleccionOgro2(){

    if(ogronum === 1){

      setTimeout(() => {
        ogroAnimacion.setScale(1.04)
      }, 50);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1.03)
      }, 100);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1.02)
      }, 150);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1.01)
      }, 200);
  
      setTimeout(() => {
        ogroAnimacion.setScale(1)
      }, 250);

      setTimeout(() => {
        ogronum = 0;
      }, 300);
      
    } 
   }
   /////////
   //princesa
   animacionSeleccionPrincesa(){

    if(princesanum === 0){

      setTimeout(() => {
        princesaAnimacion.setScale(1.01)
      }, 50);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1.02)
      }, 100);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1.03)
      }, 150);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1.04)
      }, 200);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1.05)
      }, 250);

      setTimeout(() => {
        princesanum = 1;
      }, 300);
    } 
   }

   /////////
   animacionSeleccionPrincesa2(){

    if(princesanum === 1){

      setTimeout(() => {
        princesaAnimacion.setScale(1.04)
      }, 50);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1.03)
      }, 100);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1.02)
      }, 150);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1.01)
      }, 200);
  
      setTimeout(() => {
        princesaAnimacion.setScale(1)
      }, 250);

      setTimeout(() => {
        princesanum = 0;
      }, 300);
    } 
   }
   /////////
   //bardo

   animacionSeleccionBardo(){

    if(bardonum === 0){

      setTimeout(() => {
      bardoAnimacion.setScale(1.01)
    }, 50);

    setTimeout(() => {
      bardoAnimacion.setScale(1.02)
    }, 100);

    setTimeout(() => {
      bardoAnimacion.setScale(1.03)
    }, 150);

    setTimeout(() => {
      bardoAnimacion.setScale(1.04)
    }, 200);

    setTimeout(() => {
      bardoAnimacion.setScale(1.05)
    }, 250);

    setTimeout(() => {
      bardonum = 1;
    }, 300);
    }
    

   }

   /////////
   animacionSeleccionBardo2(){

    if(bardonum === 1){

      setTimeout(() => {
        bardoAnimacion.setScale(1.04)
      }, 50);
  
      setTimeout(() => {
        bardoAnimacion.setScale(1.03)
      }, 100);
  
      setTimeout(() => {
        bardoAnimacion.setScale(1.02)
      }, 150);
  
      setTimeout(() => {
        bardoAnimacion.setScale(1.01)
      }, 200);
  
      setTimeout(() => {
        bardoAnimacion.setScale(1)
      }, 250);

      setTimeout(() => {
        bardonum = 0;
      }, 300);
    }
    }
    /////////
    //hechicero

    animacionSeleccionHechicero(){

      if(hechiceronum === 0){

        setTimeout(() => {
          hechiceroAnimacion.setScale(1.148)
        }, 50);
    
        setTimeout(() => {
          
          hechiceroAnimacion.setScale(1.158)
        }, 100);
    
        setTimeout(() => {
          hechiceroAnimacion.setScale(1.168)
        }, 150);
    
        setTimeout(() => {
          hechiceroAnimacion.setScale(1.178)
        }, 200);
    
        setTimeout(() => {
          hechiceroAnimacion.setScale(1.188)
        }, 250);

        setTimeout(() => {
          hechiceronum = 1;
        }, 300);
      }
      
     }
     /////////
     animacionSeleccionHechicero2(){

      if(hechiceronum === 1){

        setTimeout(() => {
          hechiceroAnimacion.setScale(1.178)
        }, 50);
    
        setTimeout(() => {
          hechiceroAnimacion.setScale(1.168)
        }, 100);
    
        setTimeout(() => {
          hechiceroAnimacion.setScale(1.158)
        }, 150);
    
        setTimeout(() => {
          hechiceroAnimacion.setScale(1.148)
        }, 200);
    
        setTimeout(() => {
          hechiceroAnimacion.setScale(1.138)
        }, 250);

        setTimeout(() => {
          hechiceronum = 0;
        }, 300);
      }
  
      
    }
    /////////
  

  
  }
