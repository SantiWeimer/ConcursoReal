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

   
    
  

    }

  
  }
