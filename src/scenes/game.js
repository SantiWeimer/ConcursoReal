import Phaser from 'phaser'
import Boton from "../clases/boton.js";
import { CasillaAvanzar, CasillaMonedas, CasillaRetroceder, CasillaPregunta } from "../clases/casilla.js";


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



export class Game extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Game");
    }

    init (data) {
      //playerOgro = data.playerOgro; 
      //playerBardo = data.playerBardo;
      //playerHechicero = data.playerHechicero;
      //playerPrincesa = data.playerPrincesa;
      CantidadJugadores = data.CantidadJugadores;
    }

   
    create() {
 
      //sonidos
      
  

       //tablero

       var tablerogame
       tablerogame = this.add.image(5760, this.cameras.main.centerY, 'tablero').setScale(1);


     
      //hud
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'hud').setScale(1).setScrollFactor(0)
      
    
    
  }
}