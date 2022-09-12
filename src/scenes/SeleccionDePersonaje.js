var xpos = 400;
var numjugador = 1;
var numjugador2 = 1;
var xposjugadores = 280;



//personajes


var playerOgro
var playerBardo
var playerHechicero
var playerPrincesa



export class SeleccionDePersonaje extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SeleccionDePersonaje");
    }

    init (data) {
      playerOgro = data.playerOgro; 
      playerBardo = data.playerBardo;
      playerHechicero = data.playerHechicero;
      playerPrincesa = data.playerPrincesa;
    }
  
    create() {

      //sonidos

      //botones
      var sonidobotones1;
      var sonidobotones2;
      var sonidobotones3;
      var caraspersonajes;

      sonidobotones1 = this.sound.add('sonidobotones1');
      sonidobotones1.setVolume(0.3);
      sonidobotones2 = this.sound.add('sonidobotones2');
      sonidobotones2
      sonidobotones3 = this.sound.add('sonidobotones3');
      caraspersonajes = this.sound.add('caraspersonajes');
      caraspersonajes.setVolume(0.1);

      numjugador = 1;
      numjugador2 = 1;
      xposjugadores = 280;
      xpos = 400;
      var sumabotonjugar = 0;

       //fondo
       this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu')
       .setScale(1);
     
 
       this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia')
       .setScale(1)
       .setAlpha(0.5);
     
       

      //botones

      var botonjugar;
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


      var botonjugargris = this.add.image(1600, 1000, 'jugargris')
       .setScale(1);
      
      if (sumabotonjugar === 0){
        botonjugargris.destroy();

        var botonjugar = this.add.image(1600, 1000, 'jugar')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        sonidobotones2.play()
        this.scene.start("Preloads")
      })
      .on('pointerover', () => {
        sonidobotones1.play()
        botonjugar.setScale(1.2)
      })
      .on('pointerout', () => {
        botonjugar.setScale(1)
      });
      }
      
     

      //textos

      var selplayer1;
      var textplayer1;

      selplayer1 = this.add.text(550, 30, 'Selección jugador ' + numjugador, { fontFamily: 'Times', fontStyle: 'italic', fontSize: '100px', fill: '#FFFFFF' });
      textplayer1 = this.add.text(xposjugadores, 210, 'Jugador ' + numjugador2)
      .setPadding(30, 5)
      .setStyle({
        fontFamily: 'Times', 
        fontStyle: 'italic', 
        fontSize: '58px', 
        fill: '#FFFFFF',
        backgroundColor: '#2A2A2A',
      });


      //seleccion de personajes

      var selogro;
      var selprincesa;
      var selbardo;
      var selhechicero;
      var caraogro;
      var caraprincesa;
      var carabardo;
      var carahechicero;
      var caraogrobyn;
      var caraprincesabyn;
      var carabardobyn;
      var carahechicerobyn;

      

      //ogro
      

     caraogro = this.add.image(550, 920, 'caraogro')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        
        this.add.image(xpos, this.cameras.main.centerY, 'ogro_seleccion').setScale(1)
        xpos += 350;
        xposjugadores += 350;
        sumabotonjugar += 1;
        

        if (numjugador === 1){

          console.log('jugador 1')
          playerOgro = 1;
          console.log(playerOgro)
        }
        else if (numjugador === 2){
          console.log('jugador 2')
          playerOgro = 2;
          console.log(playerOgro)
        }
        else if (numjugador === 3){
          console.log('jugador 3')
          playerOgro = 3;
          console.log(playerOgro)
        }
        else if (numjugador === 4){
          console.log('jugador 4')
          playerOgro = 4;
          console.log(playerOgro)
        }

        if (numjugador <= 3 ){
          numjugador += 1;
          numjugador2 += 1;

          this.add.text(xposjugadores, 210, 'Jugador ' + numjugador2)
          .setPadding(30, 5)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FFFFFF',
            backgroundColor: '#2A2A2A',
          });
        
          selplayer1.setText('Selección jugador ' + numjugador)
            caraogrobyn = this.add.image(550, 920, 'caraogrobyn').setScale(1.2)
        }

        if (numjugador => 4){

          caraogrobyn = this.add.image(550, 920, 'caraogrobyn').setScale(1.2)

        }

       //desactivar click
        caraogro.removeInteractive();
      })
      .on('pointerover', () => {
    
        caraspersonajes.play()
        selogro = this.add.image(xpos, this.cameras.main.centerY, 'ogro_seleccion').setScale(1);
        caraogro.setScale(1.2);
      })
      .on('pointerout', () => {
        caraogro.setScale(1)
        selogro.destroy();
      });


      //princesa

      caraprincesa = this.add.image(800, 920, 'caraprincesa')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        this.add.image(xpos, this.cameras.main.centerY, 'princesa_seleccion').setScale(1)
        xpos += 350;
        xposjugadores += 350;
        sumabotonjugar += 1;
        

        if (numjugador === 1){
          console.log('jugador 1')
          playerPrincesa = 1;
          console.log(playerPrincesa)
        }
        else if (numjugador === 2){
          console.log('jugador 2')
          playerPrincesa = 2;
          console.log(playerPrincesa)
        }
        else if (numjugador === 3){
          console.log('jugador 3')
          playerPrincesa = 3;
          console.log(playerPrincesa)
        }
        else if (numjugador === 4){
          console.log('jugador 4')
          playerPrincesa = 4;
          console.log(playerPrincesa)
        }

        if (numjugador <= 3 ){
          numjugador += 1;
          numjugador2 += 1;

          this.add.text(xposjugadores, 210, 'Jugador ' + numjugador2)
          .setPadding(30, 5)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FFFFFF',
            backgroundColor: '#2A2A2A',
          }); 
          selplayer1.setText('Selección jugador ' + numjugador);
          caraprincesabyn = this.add.image(800, 920, 'caraprincesabyn').setScale(1.2)
        }

        if (numjugador => 4){

          caraprincesabyn = this.add.image(800, 920, 'caraprincesabyn').setScale(1.2)

        }
        
        //desactivar click
        caraprincesa.removeInteractive();
      })
      .on('pointerover', () => {
        caraspersonajes.play()
        selprincesa = this.add.image(xpos, this.cameras.main.centerY, 'princesa_seleccion').setScale(1)
        caraprincesa.setScale(1.2)
      })
      .on('pointerout', () => {
        caraprincesa.setScale(1)
        selprincesa.destroy();  
      });
       
      
      //bardo

      carabardo = this.add.image(1050, 920, 'carabardo')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        this.add.image(xpos, this.cameras.main.centerY, 'bardo_seleccion').setScale(1)
        xpos += 350;
        xposjugadores += 350;
        sumabotonjugar += 1;
        

        if (numjugador === 1){
          console.log('jugador 1')
          playerBardo = 1;
          console.log(playerBardo)
        }
        else if (numjugador === 2){
          console.log('jugador 2')
          playerBardo = 2;
          console.log(playerBardo)
        }
        else if (numjugador === 3){
          console.log('jugador 3')
          playerBardo = 3;
          console.log(playerBardo)
        }
        else if (numjugador === 4){
          console.log('jugador 4')
          playerBardo = 4;
          console.log(playerBardo)
        }

        if (numjugador <= 3 ){
          numjugador += 1;
          numjugador2 += 1;

          this.add.text(xposjugadores, 210, 'Jugador ' + numjugador2)
          .setPadding(30, 5)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FFFFFF',
            backgroundColor: '#2A2A2A',
          });
          selplayer1.setText('Selección jugador ' + numjugador);
          carabardobyn = this.add.image(1050, 920, 'carabardobyn').setScale(1.2)

          if (numjugador => 4 ){

            carabardobyn = this.add.image(1050, 920, 'carabardobyn').setScale(1.2)
  
          }
        }

        //desactivar click
        carabardo.removeInteractive();
      })
      .on('pointerover', () => {
        caraspersonajes.play()
        selbardo = this.add.image(xpos, this.cameras.main.centerY, 'bardo_seleccion').setScale(1)
        carabardo.setScale(1.2)
      })
      .on('pointerout', () => {
        carabardo.setScale(1)
        selbardo.destroy();
      });
      

      //hechicero

      carahechicero = this.add.image(1300, 920, 'carahechicero')
      .setInteractive({
        useHandCursor: true
       })
      .on('pointerdown', () => {
        this.add.image(xpos, this.cameras.main.centerY, 'hechicero_seleccion').setScale(1)
        xpos += 350;
        xposjugadores += 350;
        sumabotonjugar =+ 1;
        console.log(sumabotonjugar)

        if (numjugador === 1){
          console.log('jugador 1')
          playerHechicero = 1;
          console.log(playerHechicero)
        }
        else if (numjugador === 2){
          console.log('jugador 2')
          playerHechicero = 2;
          console.log(playerHechicero)
        }
        else if (numjugador === 3){
          console.log('jugador 3')
          playerHechicero = 3;
          console.log(playerHechicero)
        }
        else if (numjugador === 4){
          console.log('jugador 4')
          playerHechicero = 4;
          console.log(playerHechicero)
        }

        if (numjugador <= 3 ){
          numjugador += 1;
          numjugador2 += 1;

          this.add.text(xposjugadores, 210, 'Jugador ' + numjugador2)
          .setPadding(40, 10)
          .setStyle({
            fontFamily: 'Times', 
            fontStyle: 'italic', 
            fontSize: '58px', 
            fill: '#FFFFFF',
            backgroundColor: '#2A2A2A',
          });   
          selplayer1.setText('Selección jugador ' + numjugador)       
          carahechicerobyn = this.add.image(1300, 920, 'carahechicerobyn').setScale(1.2)

          if (numjugador => 4){

            carahechicerobyn = this.add.image(1300, 920, 'carahechicerobyn').setScale(1.2)
  
          }
        }
       
        //desactivar click
        carahechicero.removeInteractive();
      })
      .on('pointerover', () => {
        caraspersonajes.play()
        selhechicero = this.add.image(xpos, this.cameras.main.centerY, 'hechicero_seleccion').setScale(1)
        carahechicero.setScale(1.2)
      })
      .on('pointerout', () => {
        carahechicero.setScale(1)
        selhechicero.destroy();
      });



    
  

    }

  
  }
