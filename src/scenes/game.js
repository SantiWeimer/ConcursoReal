let dado = 0;
var resmulti = 0;
var acumpixeles = 0;
var duracion = 0;
//
var tiro1 = 1;
var monedabotonayuda = 0;
var acumcartelbosque = 0;
//
var monedasjug1 = 0;
var textmonedasjugador1;
//
var cartelpantano;
var cartelbosque;

var retroceso;
var avance;

var segcomienzo = 15;

//sonidos
var respuestaincorrecta;
var respuestacorrecta;
var sonidocasillamonedas;
var monedaayuda;

//jugadores

var playerOgro
var playerBardo
var playerHechicero
var playerPrincesa

export class Game extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Game");
    }

    init (data) {
      playerOgro = data.playerOgro; 
      playerBardo = data.playerBardo;
      playerHechicero = data.playerHechicero;
      playerPrincesa = data.playerPrincesa;
    }

   
    create() {
      console.log(playerOgro)
      
      
      //sonidos

      //popup
      respuestaincorrecta = this.sound.add('respuestaincorrecta');
      respuestaincorrecta.setVolume(0.55).setRate(1.5);
      respuestacorrecta = this.sound.add('respuestacorrecta');
      respuestacorrecta.setVolume(0.7).setRate(0.9);
      sonidocasillamonedas = this.sound.add('sonidocasillamonedas');
      sonidocasillamonedas.setVolume(1);
      monedaayuda = this.sound.add('monedaayuda');
      monedaayuda.setVolume(1.5);
      
  

       //tablero

       var tablerogame
       tablerogame = this.add.image(5760, this.cameras.main.centerY, 'tablero').setScale(1);

      //tilemap

      

      const map = this.make.tilemap({ key: "tilemap" });

      const tablero = map.addTilesetImage("tablero_completo, tablero");
      const casilla1 = map.addTilesetImage("casillacomun1", "casilla1");
      const casilla2 = map.addTilesetImage("casillacomun2", "casilla2");
      const casilla3 = map.addTilesetImage("casillacomun3", "casilla3");
      const casillaavanzar = map.addTilesetImage("casilla_avanzar", "casillaavanzar");
      const casillamonedas = map.addTilesetImage("casilla_monedas", "casillamonedas");
      const casillaretroceder = map.addTilesetImage("casilla_retroceder", "casillaretroceder");
      const casillapregunta = map.addTilesetImage("casilla_pregunta", "casillapregunta");
      const casillapierde = map.addTilesetImage("casilla_pierde_turno", "casillapierde");


      const tableroLayer = map.createLayer("tablero_completo", tablero, 0, 0);
      const casilla1Layer = map.createLayer("casillacomun1", casilla1, 0, 0).setAlpha(0.9);
      const casilla2Layer = map.createLayer("casillacomun2", casilla2, 0, 0).setAlpha(0.9);
      const casilla3Layer = map.createLayer("casillacomun3", casilla3, 0, 0).setAlpha(0.9);
      const casillaAvanzarLayer = map.createLayer("casilla_avanzar", casillaavanzar, 0, 0).setAlpha(0.9);;
      const casillaMonedasLayer = map.createLayer("casilla_monedas", casillamonedas, 0, 0).setAlpha(0.9);;
      const casillaRetrocederLayer = map.createLayer("casilla_retroceder", casillaretroceder, 0, 0).setAlpha(0.9);;
      const casillaPreguntaLayer = map.createLayer("casilla_pregunta", casillapregunta, 0, 0).setAlpha(0.9);;
      const casillaPierdeLayer = map.createLayer("casilla_pierde_turno", casillapierde, 0, 0).setAlpha(0.9);;
      

      
      //personajes
      //var ogro = this.add.image(200, 500, 'ogro').setScale(1);

      if (playerOgro === 1) {

        var ogro = this.add.sprite(200, 500, 'ogro');
      }

      if (playerHechicero === 1) {

        var hechicero = this.add.sprite(200, 500, 'hechicero');
      }

      if (playerPrincesa === 1) {

        var princesa = this.add.sprite(200, 500, 'princesa');
      }

      if (playerBardo === 1) {

        var bardo = this.add.sprite(200, 500, 'bardo');
      }
      
      var ogro = this.add.sprite(200, 500, 'ogro');

      ogro.anims.create({
        key: 'ogronormal',
        frames: this.anims.generateFrameNumbers('ogro', { start: 0, end: 0 }),
        frameRate: 0,
        repeat: -1,
        
      });

      ogro.anims.create({
      key: 'ogrotriste',
      frames: this.anims.generateFrameNumbers('ogro', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: 0,
     
      });

      ogro.anims.create({
        key: 'ogrofeliz',
        frames: this.anims.generateFrameNumbers('ogro', { start: 2, end: 2 }),
        frameRate: 2,
        repeat: 0,
       
        });
      
      

      

     
      //hud
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'hud').setScale(1).setScrollFactor(0)
      this.add.image(755, 50, 'iconomoneda').setScale(0.8).setScrollFactor(0)
      textmonedasjugador1 = this.add.text(550, 30, 'Jugador 1:        ' + monedasjug1, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '36px', fill: '#FFFFFF' }).setScrollFactor(0);


      //camara
      
      this.cameras.main.setBounds(0, 0, 1920, 1080);
    
      
      //ruleta variables

      var resplandor;
      var trans1tiro;
      var texto1tiro;
      var flechanegra;
      var cartelzonas;

      //comienzo juego
      trans1tiro = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1)
        .setAlpha(0.5);
      flechanegra = this.add.image(1070, 280, 'flechanegra').setScale(0.7)
      texto1tiro = this.add.text(280, 330, 'Apreta la ruleta para empezar', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '56px', fill: '#FFFFFF' });
      

      //ruleta
      var ruleta = this.add.image(1200, 100, 'ruletaimagen').setScrollFactor(0)
        .setScale(1.2)
        .setInteractive({
          useHandCursor: true
         })
        .on('pointerdown', () => {
          this.sound.play('ruleta-sonido')
          this.girar(ruleta);
         

          trans1tiro.destroy()
          texto1tiro.destroy()
          flechanegra.destroy()
          setTimeout(() => {


            this.moverDerecha(ogro);
    
    
          }, 3000)
          

        }) 
        .on('pointerover', () => {
          resplandor = this.add.image(1200, 100, 'ruleta_resplandor').setScale(0.85).setScrollFactor(0);
          
        })
        .on('pointerout', () => {
          resplandor.destroy();
        });
        



        this.add.image(1200, 20, 'agujaruleta').setScale(1).setScrollFactor(0);

    
  

    }



    //funcion girar ruleta

    girar(ruleta){
      console.log(this)
      dado = 0;
      
      this.tweens.add({
        
        targets: ruleta,
        duration: 2700,
        rotation: Phaser.Math.Between(360, 720),
        ease: 'Power3',  
        repeat: 0,     
        yoyo: false,
        onComplete: function () {
          var grados = Phaser.Math.RadToDeg(ruleta.rotation)
          if (grados > -45 && grados < 45){
            //1
            dado = '125';
          
          }
          if (grados > 45 && grados < 90){
            //6
            dado = '750';
            
          }
          if (grados > 90 && grados < 135){
            //5
            dado = '625';
            
          }
          if (grados < -135 && grados > -180 || grados > 135 && grados < 180){
            //4
            dado = '500';
            
          }
          if (grados < -45 && grados > -90){
            //2
            dado = '250';
            
          }
          if (grados < -90 && grados > -135){
            //3
            dado = '375';
            
          }
         

          //duracion movimiento de personaje
          if (dado === '125'){
            duracion = 200
          }
          if (dado === '250'){
            duracion = 300
          }
          if (dado === '375'){
            duracion = 400
          }
          if (dado === '500'){
            duracion = 500
          }
          if (dado === '625'){
            duracion = 600
          }
          if (dado === '625'){
            duracion = 700
          }
        },
        


      })
     }

     //movimiento personaje
     


     moverDerecha(ogro){
    if (tiro1 <= 1){
      this.cartelpantano(cartelpantano);
      this.tweens.add({
        targets: ogro,
        duration: 500 + duracion,
        x: resmulti = ((parseFloat('187'))) + (parseFloat(dado)),
        ease: 'Power3',  
        repeat: 0,     
        yoyo: false
      })
      tiro1 = tiro1 + 1
      
     
    }
    else if (tiro1 > 1){

      this.tweens.add({
        targets: ogro,
        duration: 500 + duracion,
        x: resmulti = (( parseFloat(dado) ) + (parseFloat(acumpixeles))),
        ease: 'Power3',  
        repeat: 0,     
        yoyo: false
      })
    }
  
      acumpixeles = (parseFloat(resmulti));
      

      
      //funcion preguntas (casillas: 4, 12, 20, 25, 36, 40)
      if (acumpixeles === 687 || acumpixeles === 1687 || acumpixeles === 2687 || acumpixeles === 3312 || acumpixeles === 4687 || acumpixeles === 5187){

        this.pregunta()
       
      }

      
      //funcion avanzar (casillas: 5, 24, 34)
      if (acumpixeles === 812 || acumpixeles === 3187 || acumpixeles === 4437 ){

        this.avanzar(ogro)
       
      }


      
      //funcion monedas  (casillas: 6, 18, 31, 42)
      if (acumpixeles === 937 || acumpixeles === 2437 || acumpixeles === 4062 || acumpixeles === 5437){

        
        ogro.anims.play('ogrofeliz', true);
        this.monedas()

        setTimeout(() => {
          sonidocasillamonedas.play()
        }, 1000)
        
      //si es distinto a estas casillas reproduce la animacion(para que las animaciones no choquen y se cree un bug)
      }else if (acumpixeles !== 1437 || acumpixeles !== 4937 ){
        ogro.anims.play('ogronormal', true);
      }


      //funcion retroceder  (casillas: 8, 17, 27, 39)
      if (acumpixeles === 1187 || acumpixeles === 2312 || acumpixeles === 3562 || acumpixeles === 5062){

        this.retroceder(ogro)
        
      }

      //funcion perder turno  (casillas: 10, 38)

      if (acumpixeles === 1437 || acumpixeles === 4937 ){

      
        ogro.anims.play('ogrotriste', true);
        
      }




      //funcion cambio de camara

      if (acumpixeles > 1812){
        setTimeout(() => {
          this.cameras.main.setBounds(1920, 0, 1920, 1080);
        }, 500);
        
      }

      if (acumpixeles > 3687){
        setTimeout(() => {
          this.cameras.main.setBounds(3840, 0, 1920, 1080); 
        }, 500);
        
      }

      //funcion cartel bosque
      if (acumpixeles > 2810 && acumcartelbosque === 0){

        acumcartelbosque += 1;
        this.cartelbosque(cartelbosque);
      }


      //funcion final de partida
      if (acumpixeles > 5687){
        setTimeout(() => {
        this.scene.start("Resultado");
        }, 1000);

        acumpixeles = 187
        monedasjug1 = 0;
        
      }


    };
    
  


    //funcion de avanzar

    avanzar(ogro){
      
      setTimeout(() => {

        this.tweens.add({
          targets: ogro,
          duration: 500 + duracion,
          x: acumpixeles = (( parseFloat(acumpixeles) ) + (parseFloat(dado))),
          ease: 'Power3',  
          repeat: 0,     
          yoyo: false
        })

        //funcion preguntas (casillas: 4, 12, 20, 25, 36, 40)
      if (acumpixeles === 687 || acumpixeles === 1687 || acumpixeles === 2687 || acumpixeles === 3312 || acumpixeles === 4687 || acumpixeles === 5187){
        this.pregunta() 
      }
      
      //funcion monedas  (casillas: 6, 18, 31, 42)
      if (acumpixeles === 937 || acumpixeles === 2437 || acumpixeles === 4062 || acumpixeles === 5437){

        ogro.anims.play('ogrofeliz', true);
        this.monedas()

        setTimeout(() => {
          sonidocasillamonedas.play()
        }, 1000)
        
      //si es distinto a estas casillas reproduce la animacion(para que las animaciones no choquen y se cree un bug)
      }else if (acumpixeles !== 1437 || acumpixeles !== 4937 ){
        ogro.anims.play('ogronormal', true);
      }

      //funcion retroceder  (casillas: 8, 17, 27, 39)
      if (acumpixeles === 1187 || acumpixeles === 2312 || acumpixeles === 3562 || acumpixeles === 5062){
        this.retroceder(ogro) 
      }

      //funcion perder turno  (casillas: 10, 38)
      if (acumpixeles === 1437 || acumpixeles === 4937 ){
        ogro.anims.play('ogrotriste', true);  
      }
      
      
      }, 1000)
   
    };



    //funcion retroceder

    retroceder(ogro){

      setTimeout(() => {

        this.tweens.add({
          targets: ogro,
          duration: 500 + 200,
          x: acumpixeles = (( parseFloat(acumpixeles) ) - (parseFloat('250'))),
          ease: 'Power3',  
          repeat: 0,     
          yoyo: false
        })

        if (acumpixeles === 687 || acumpixeles === 1687 || acumpixeles === 2687 || acumpixeles === 3312 || acumpixeles === 4687 || acumpixeles === 5187){
          this.pregunta()
        }
  
        //funcion avanzar (casillas: 5, 24, 34)
        if (acumpixeles === 812 || acumpixeles === 3187 || acumpixeles === 4437 ){
  
          this.avanzar(ogro)
         
        }
        
        //funcion monedas  (casillas: 6, 18, 31, 42)
        if (acumpixeles === 937 || acumpixeles === 2437 || acumpixeles === 4062 || acumpixeles === 5437){
   
          ogro.anims.play('ogrofeliz', true);
          this.monedas()
  
          setTimeout(() => {
            sonidocasillamonedas.play()
          }, 1000) 
        }else if (acumpixeles !== 1437 || acumpixeles !== 4937 ){
          ogro.anims.play('ogronormal', true);
        }

        //funcion perder turno  (casillas: 10, 38)
        if (acumpixeles === 1437 || acumpixeles === 4937 ){
          ogro.anims.play('ogrotriste', true);  
        }
      }, 1000)

    }

    //funcion perder turno

    perderturno(){

    }

    //funcion monedas

    monedas(){

      setTimeout(() => {

        monedasjug1 = ( parseFloat(monedasjug1) ) + (parseFloat('500'));
        
        textmonedasjugador1.setText('Jugador 1:        ' + monedasjug1)
      

      }, 1000)

    }


    //funcion de pregunta

    pregunta(){

        //pop up pregunta
        var popup;
        var trans;
        var cuadropregunta;
        var botonrespuesta1;
        var botonrespuesta2;
        var botonrespuesta3;
        var botonrespuesta4;
        var magotriste;
        var magofestejando;
        var botonayuda;
        var textpreg;


        //comienzo timeout popup
        setTimeout(() => {
  
        trans = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1)
        .setAlpha(0.5).setScrollFactor(0);

        popup = this.add.image(this.cameras.main.centerX, 625, 'popup').setScale(1.1).setScrollFactor(0);
        cuadropregunta = this.add.image(this.cameras.main.centerX, 430, 'popup-pregunta').setScale(1).setScrollFactor(0).setAlpha(0);
        var magopregunta = this.add.image(1400, 600, 'magopregunta').setScale(1).setScrollFactor(0);

        //monedas boton ayuda
        var iconomonedaayuda = this.add.image(930, 920, 'iconomoneda').setScale(0.8).setScrollFactor(0)
        var textmonedasayuda = this.add.text(955, 900, '50', 
        { fontFamily: 'Times', fontSize: '36px', fill: '#2B2B2B' }).setScrollFactor(0);
        //botones de respuestas

        //boton respuesta 1

        botonrespuesta1 = this.add.text(this.cameras.main.centerX, 560, '500 aC a 500 dC').setScrollFactor(0)
        .setOrigin(0.5)
        .setPadding(80, 10)
        .setStyle({ 
            backgroundColor: '#C2A26A', 
            fontSize: '36px', 
            fill: '#2B2B2B', 
            fontFamily: 'Times',
        })
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
     
          botonrespuesta1.setStyle({ fill: '#000', backgroundColor: '#C63B3B' })
          magopregunta.destroy()
 
        setTimeout(() => {
 
          respuestaincorrecta.play()
          magotriste = this.add.image(1400, 600, 'magotriste').setScale(1).setScrollFactor(0);
  
        }, 200)
 
      setTimeout(() => {
 
          magotriste.destroy();
          popup.destroy();
          trans.destroy();
          cuadropregunta.destroy();
          botonayuda.destroy();
          textpreg.destroy();
 
          botonrespuesta1.destroy();
          botonrespuesta2.destroy();
          botonrespuesta3.destroy();
          botonrespuesta4.destroy();
          botonayuda.destroy();
          textmonedasayuda.destroy();
          iconomonedaayuda.destroy();
  
      }, 2000)

      botonrespuesta1.removeInteractive();
        })
        .on('pointerover', () => botonrespuesta1.setStyle({ fill: '#000', backgroundColor: '#C89B4B' }))
        .on('pointerout', () => botonrespuesta1.setStyle({ fill: '#2B2B2B', backgroundColor: '#C2A26A' }));


       //boton respuesta 2
       botonrespuesta2 = this.add.text(this.cameras.main.centerX, 640, '1 dC a 1500 dC').setScrollFactor(0)
       .setOrigin(0.5)
       .setPadding(80, 10)
       .setStyle({ 
           backgroundColor: '#C2A26A', 
           fontSize: '36px', 
           fill: '#2B2B2B', 
           fontFamily: 'Times',
       })
       .setInteractive({ useHandCursor: true })
       .on('pointerdown', () => {
    
        botonrespuesta2.setStyle({ fill: '#000', backgroundColor: '#C63B3B' })
         magopregunta.destroy()

       setTimeout(() => {

        respuestaincorrecta.play()
        magotriste = this.add.image(1400, 600, 'magotriste').setScale(1).setScrollFactor(0);
 
       }, 200)

     setTimeout(() => {

         magotriste.destroy();
         popup.destroy();
         trans.destroy();
         cuadropregunta.destroy();
         botonayuda.destroy();
         textpreg.destroy();

         botonrespuesta1.destroy();
         botonrespuesta2.destroy();
         botonrespuesta3.destroy();
         botonrespuesta4.destroy();
         botonayuda.destroy();
         textmonedasayuda.destroy();
         iconomonedaayuda.destroy();
 
     }, 2000)

     botonrespuesta2.removeInteractive();
       })
       .on('pointerover', () => botonrespuesta2.setStyle({ fill: '#000', backgroundColor: '#C89B4B' }))
       .on('pointerout', () => botonrespuesta2.setStyle({ fill: '#2B2B2B', backgroundColor: '#C2A26A' }));


      //boton respuesta 3

       botonrespuesta3 = this.add.text(this.cameras.main.centerX, 720, '500 dC a 1500 dC').setScrollFactor(0)
            .setOrigin(0.5)
            .setPadding(80, 10)
            .setStyle({ 
                backgroundColor: '#C2A26A', 
                fontSize: '36px', 
                fill: '#2B2B2B', 
                fontFamily: 'Times',
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
              
         
              botonrespuesta3.setStyle({ fill: '#000', backgroundColor: '#42CB37' })
              magopregunta.destroy()

            setTimeout(() => {

              respuestacorrecta.play()
              magofestejando = this.add.image(1400, 600, 'magofestejando').setScale(1).setScrollFactor(0);
      
            }, 200)

            //suma de puntos respuesta correcta
            setTimeout(() => {

              if (monedabotonayuda === 0){
                monedasjug1 = ( parseFloat(monedasjug1) ) + (parseFloat('100'));
              } else {
                monedasjug1 = ( parseFloat(monedasjug1) ) + (parseFloat('50'));
              }
              
              
              textmonedasjugador1.setText('Jugador 1:        ' + monedasjug1)
            

              sonidocasillamonedas.play();
            }, 2000)

          setTimeout(() => {

              magofestejando.destroy();
              popup.destroy();
              trans.destroy();
              cuadropregunta.destroy();
              botonayuda.destroy();
              textpreg.destroy();

              botonrespuesta1.destroy();
              botonrespuesta2.destroy();
              botonrespuesta3.destroy();
              botonrespuesta4.destroy();
              botonayuda.destroy();
              textmonedasayuda.destroy();
              iconomonedaayuda.destroy();
      
          }, 2000);

          botonrespuesta3.removeInteractive();
          
            })
            .on('pointerover', () => botonrespuesta3.setStyle({ fill: '#000', backgroundColor: '#C89B4B' }))
            .on('pointerout', () => botonrespuesta3.setStyle({ fill: '#2B2B2B', backgroundColor: '#C2A26A' }));



      //boton respuesta 4

      botonrespuesta4 = this.add.text(this.cameras.main.centerX, 800, '1000 dC a 2000 dC').setScrollFactor(0)
      .setOrigin(0.5)
      .setPadding(80, 10)
      .setStyle({ 
          backgroundColor: '#C2A26A', 
          fontSize: '36px', 
          fill: '#2B2B2B', 
          fontFamily: 'Times',
          })
          .setInteractive({ useHandCursor: true })
          .on('pointerdown', () => {
         
            botonrespuesta4.setStyle({ fill: '#000', backgroundColor: '#C63B3B' })
            magopregunta.destroy()

          setTimeout(() => {

            respuestaincorrecta.play()
            magotriste = this.add.image(1400, 600, 'magotriste').setScale(1).setScrollFactor(0);
      
          }, 200)

          setTimeout(() => {

              magotriste.destroy();
              popup.destroy();
              trans.destroy();
              cuadropregunta.destroy();
              botonayuda.destroy();
              textpreg.destroy();

              botonrespuesta1.destroy();
              botonrespuesta2.destroy();
              botonrespuesta3.destroy();
              botonrespuesta4.destroy();
              botonayuda.destroy();
              textmonedasayuda.destroy();
              iconomonedaayuda.destroy();
      
          }, 2000)
          botonrespuesta4.removeInteractive();
          })
          .on('pointerover', () => botonrespuesta4.setStyle({ fill: '#000', backgroundColor: '#C89B4B' }))
          .on('pointerout', () => botonrespuesta4.setStyle({ fill: '#2B2B2B', backgroundColor: '#C2A26A' }));



      //boton de ayuda

      botonayuda = this.add.text(1100, 920, 'Ayuda').setScrollFactor(0)
      .setOrigin(0.5)
      .setPadding(40, 10)
      .setStyle({ 
          backgroundColor: '#C89B4B', 
          fontSize: '36px', 
          fill: '#E5B86B', 
          fontFamily: 'Times',

      })
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {

        monedaayuda.play()

              monedabotonayuda = monedabotonayuda + 1;
         
              botonayuda.setStyle({ fill: '#A88D5D', backgroundColor: '#C2A26A' })
              botonrespuesta2.destroy()
              botonrespuesta4.destroy()
              botonayuda.removeInteractive();
            })
      .on('pointerover', () => botonayuda.setStyle({ fill: '#000' }))
      .on('pointerout', () => botonayuda.setStyle({ fill: '#E5B86B' }));

      //pregunta
        textpreg = this.add.text(750, 350, '¿Qué franja temporal cubre\naproximadamente la Edad\nMedia?').setScrollFactor(0)
      .setStyle({
        maxLines: 20,
        fontFamily: 'Times',
        fontSize: '36px',
        fill: '#FFFFF',
        fixedWidth: 2000,
      });
  
  
      //fin timeout popup
        }, 1000);
      
    }
    

    
    //cartel zona 1
    cartelpantano(cartelpantano){ 

      var soncartelbosque = this.sound.add('sonido-cartelbosque')
        soncartelbosque.setVolume(0.4);
        soncartelbosque.play();
        setTimeout(() => {
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.1).setScrollFactor(0);
        }, 100);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.3).setScrollFactor(0);
        }, 200);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.5).setScrollFactor(0);
        }, 300);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.7).setScrollFactor(0);
        }, 400);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(1).setScrollFactor(0);
        }, 500);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.7).setScrollFactor(0);
        }, 1500);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.5).setScrollFactor(0);
        }, 1600);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.3).setScrollFactor(0);
        }, 1700);
  
        setTimeout(() => {
          cartelpantano.destroy()
          cartelpantano = this.add.image(this.cameras.main.centerX, 300, 'cartelpantano').setScale(0.5).setAlpha(0.1).setScrollFactor(0);
        }, 1800);
  
        setTimeout(() => {
          cartelpantano.destroy()
           }, 1900);
      
    }

    cartelbosque(cartelbosque){

      
        var soncartelbosque = this.sound.add('sonido-cartelbosque')
        soncartelbosque.setVolume(0.4);
        soncartelbosque.play();
        setTimeout(() => {
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.1).setScrollFactor(0);
        }, 100);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.3).setScrollFactor(0);
        }, 200);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.5).setScrollFactor(0);
        }, 300);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.7).setScrollFactor(0);
        }, 400);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(1).setScrollFactor(0);
        }, 500);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.7).setScrollFactor(0);
        }, 1500);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.5).setScrollFactor(0);
        }, 1600);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.3).setScrollFactor(0);
        }, 1700);
  
        setTimeout(() => {
          cartelbosque.destroy()
          cartelbosque = this.add.image(this.cameras.main.centerX, 300, 'cartelbosque').setScale(0.5).setAlpha(0.1).setScrollFactor(0);
        }, 1800);
  
        setTimeout(() => {
          cartelbosque.destroy()
           }, 1900);


      
    }


    
    
    
    
  }

  export default {monedasjug1};