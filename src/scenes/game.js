import Boton from "../clases/boton.js";

let dado = 0;
var resmulti = 0;
var acumpixeles = 0;
var duracion = 0;
//
var tiro1 = 1;
var monedabotonayuda = 0;
var acumcartelbosque = 0;
//
//monedas
var monedasjug1 = 0;
var monedasjug2 = 0;
var monedasjug3 = 0;
var monedasjug4 = 0;
var textmonedasjugador1;
var textmonedasjugador2;
var textmonedasjugador3;
var textmonedasjugador4;

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

var CantidadJugadores

var playerOgro;
var playerBardo;
var playerHechicero;
var playerPrincesa;

var player1;
var player2;
var player3;
var player4;

//turnos

var turno = 1;
var turnoDosJugadores;


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
      CantidadJugadores = data.CantidadJugadores;
    }

   
    create() {
 
      //sonidos
      
  

       //tablero

       var tablerogame
       tablerogame = this.add.image(5760, this.cameras.main.centerY, 'tablero').setScale(1);

      //tilemap

      

      // const map = this.make.tilemap({ key: "tilemap" });

      // const tablero = map.addTilesetImage("tablero_completo, tablero");
      // const casilla1 = map.addTilesetImage("casillacomun1", "casilla1");
      // const casilla2 = map.addTilesetImage("casillacomun2", "casilla2");
      // const casilla3 = map.addTilesetImage("casillacomun3", "casilla3");
      // const casillaavanzar = map.addTilesetImage("casilla_avanzar", "casillaavanzar");
      // const casillamonedas = map.addTilesetImage("casilla_monedas", "casillamonedas");
      // const casillaretroceder = map.addTilesetImage("casilla_retroceder", "casillaretroceder");
      // const casillapregunta = map.addTilesetImage("casilla_pregunta", "casillapregunta");
      // const casillapierde = map.addTilesetImage("casilla_pierde_turno", "casillapierde");


      // const tableroLayer = map.createLayer("tablero_completo", tablero, 0, 0);
      // const casilla1Layer = map.createLayer("casillacomun1", casilla1, 0, 0).setAlpha(0.9);
      // const casilla2Layer = map.createLayer("casillacomun2", casilla2, 0, 0).setAlpha(0.9);
      // const casilla3Layer = map.createLayer("casillacomun3", casilla3, 0, 0).setAlpha(0.9);
      // const casillaAvanzarLayer = map.createLayer("casilla_avanzar", casillaavanzar, 0, 0).setAlpha(0.9);;
      // const casillaMonedasLayer = map.createLayer("casilla_monedas", casillamonedas, 0, 0).setAlpha(0.9);;
      // const casillaRetrocederLayer = map.createLayer("casilla_retroceder", casillaretroceder, 0, 0).setAlpha(0.9);;
      // const casillaPreguntaLayer = map.createLayer("casilla_pregunta", casillapregunta, 0, 0).setAlpha(0.9);;
      // const casillaPierdeLayer = map.createLayer("casilla_pierde_turno", casillapierde, 0, 0).setAlpha(0.9);;
      

      const botonjugar = new Boton(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY / 3,
        "jugar", this, () => {
      
          this.scene.start("Resultado",
                 { monedasjug1: monedasjug1,
                   monedasjug2: monedasjug2,
                   monedasjug3: monedasjug3,
                   monedasjug4: monedasjug4,
                   CantidadJugadores: CantidadJugadores,
                  });

        }
      );
      // this.add.image(1600, 900, 'jugar')
      // .setInteractive({
      //   useHandCursor: true
      //  })
      // .on('pointerdown', () => {

        
      //   this.scene.start(
      //       "Resultado",
      //       { monedasjug1: monedasjug1,
      //         monedasjug2: monedasjug2,
      //         monedasjug3: monedasjug3,
      //         monedasjug4: monedasjug4,
      //         CantidadJugadores: CantidadJugadores,
      //         })
  
      //   //acumuladores
      //   acumpixeles = 187
              
  
  
        
      // })



      //personajes
      

      // //player 4

      //  if (playerOgro === 4) {

      //   player4 = new Player(50, 500, 'ogro', this) 

      // } else if (playerHechicero === 4) {

      //   player4 = new Player(50, 500, 'hechicero', this)
        
      // } else if (playerPrincesa === 4) {

      //   player4 = new Player(50, 500, 'princesa', this)

      // } else if (playerBardo === 4) {

      //   player4 = new Player(50, 500, 'bardo', this)

      // }



      // //player 3

      // if (playerOgro === 3) {

      //   player3 = new Player(100, 500, 'ogro', this) 
        
      // } else if (playerHechicero === 3) {

      //   player3 = new Player(100, 500, 'hechicero', this)

      // } else if (playerPrincesa === 3) {

      //   player3 = new Player(100, 500, 'princesa', this)

      // } else if (playerBardo === 3) {

      //   player3 = new Player(100, 500, 'bardo', this)

      // }


      // //player 2

      // if (playerOgro === 2) {

      //   player2 = new Player(150, 500, 'ogro', this) 

      // } else if (playerHechicero === 2) {

      //   player2 = new Player(150, 500, 'hechicero', this)
       
      // } else if (playerPrincesa === 2) {

      //   player2 = new Player(150, 500, 'princesa', this)

      // } else if (playerBardo === 2) {

      //   player2 = new Player(150, 500, 'bardo', this)

      // }


      // //player 1

      // if (playerOgro === 1) {

      //   player1 = new Player(200, 500, 'ogro', this) 
        
      // } else if (playerHechicero === 1) {

      //   player1 = new Player(200, 500, 'hechicero', this)  

      // } else if (playerPrincesa === 1) {

      //   player1 = new Player(200, 500, 'princesa', this)
        
      // } else if (playerBardo === 1) {

      //   player1 = new Player(200, 500, 'bardo', this)
        
      // }

      


      


      
      
      player1 = this.add.sprite(200, 500, 'ogro');

      

     
      //hud
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'hud').setScale(1).setScrollFactor(0)
      
      //puntaje de jugadores 

      if (CantidadJugadores === 2){

        this.add.image(730, 37, 'iconomoneda').setScale(0.7).setScrollFactor(0)
        textmonedasjugador1 = this.add.text(550, 20, 'Jugador 1:        ' + monedasjug1, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

        this.add.image(730, 77, 'iconomoneda').setScale(0.7).setScrollFactor(0)
        textmonedasjugador2 = this.add.text(550, 60, 'Jugador 2:        ' + monedasjug2, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

      }else if (CantidadJugadores === 3){

        this.add.image(730, 37, 'iconomoneda').setScale(0.7).setScrollFactor(0)
        textmonedasjugador1 = this.add.text(550, 20, 'Jugador 1:        ' + monedasjug1, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

        this.add.image(730, 77, 'iconomoneda').setScale(0.7).setScrollFactor(0)
        textmonedasjugador2 = this.add.text(550, 60, 'Jugador 2:        ' + monedasjug2, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

       this.add.image(730, 117, 'iconomoneda').setScale(0.7).setScrollFactor(0)
        textmonedasjugador3 = this.add.text(550, 100, 'Jugador 3:        ' + monedasjug3, 
       { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

      }else if (CantidadJugadores === 4){


        this.add.image(730, 37, 'iconomoneda').setScale(0.7).setScrollFactor(0)
        textmonedasjugador1 = this.add.text(550, 20, 'Jugador 1:        ' + monedasjug1, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

        this.add.image(730, 77, 'iconomoneda').setScale(0.7).setScrollFactor(0)
        textmonedasjugador2 = this.add.text(550, 60, 'Jugador 2:        ' + monedasjug2, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

       this.add.image(730, 117, 'iconomoneda').setScale(0.7).setScrollFactor(0)
       textmonedasjugador3 = this.add.text(550, 100, 'Jugador 3:        ' + monedasjug3, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px'}).setScrollFactor(0);

       this.add.image(730, 157, 'iconomoneda').setScale(0.7).setScrollFactor(0)
       textmonedasjugador4 = this.add.text(550, 140, 'Jugador 4:        ' + monedasjug4, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '32px', }).setScrollFactor(0);
      }
      


      //camara
      
      this.cameras.main.setBounds(0, 0, 1920, 1080);
    
      
    
    
    
  }
}