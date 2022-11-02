import Phaser from 'phaser'
//variables importadas

var players;
var CantidadJugadores;
export class Resultado extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Resultado");
    }

    init(data) {
      this.players = data.players;
      this.CantidadJugadores = data.CantidadJugadores;
      this.temporizador = data.temporizador;
      this.sonido = data.sonido;
      this.sonidosgenerales = data.sonidosgenerales;
      this.musicamainmenu = data.musicamainmenu;
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
      
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu').setScale(1);
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1).setAlpha(0.5);
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'resultado').setScale(1);
      this.add.image(1650, 700, 'rey').setScale(1);
        
      //puntajes
      
      if (CantidadJugadores === 2){
  
        this.add.text(720, 500, 'Jugador 1  $ ' + players[0].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' });
  
        this.add.text(720, 550, 'Jugador 2  $ ' + players[1].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' });
  
      //ganador
      if (players[0].monedas > players[1].monedas){
        //gano jugador 1
        this.add.text(600, 800, 'Ganó el Jugador 1', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' });
      
      } else if (players[1].monedas > players[0].monedas){
        //gano jugador 2
        this.add.text(600, 800, 'Ganó el Jugador 2', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' });
  
      }else{
        //empate
        this.add.text(690, 800, '¡Hubo empate!', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' });
  
      }
  
      }else if (CantidadJugadores === 3){
  
        this.add.text(720, 500, 'Jugador 1  $ ' + players[0].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' });
  
        this.add.text(720, 550, 'Jugador 2  $ ' + players[2].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' });
  
        this.add.text(720, 600, 'Jugador 3  $ ' + players[3].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' });
  
      //ganador
  
      if (players[0].monedas > players[1].monedas && players[0].monedas > players[2].monedas){
  
        //gano jugador 1
  
        this.add.text(600, 800, 'Ganó el Jugador 1', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#color' });
  
      } else if (players[1].monedas > players[0].monedas && players[1].monedas > players[2].monedas){
  
        //gano jugador 2
  
        this.add.text(600, 800, 'Ganó el Jugador 2', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#color' });
  
      } else if (players[2].monedas > players[0].monedas && players[2].monedas > players[1].monedas){
  
        //gano jugador 3
  
        this.add.text(600, 800, 'Ganó el Jugador 3', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#color' });
  
      } else{
  
        //empate
  
        this.add.text(690, 800, '¡Hubo empate!', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#color' });
  
      }
  
      }else if (CantidadJugadores === 4){
  
  
        this.add.text(720, 500, 'Jugador 1  $ ' + players[0].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', fill: '#color' });
  
        this.add.text(720, 550, 'Jugador 2  $ ' + players[1].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', fill: '#color' });
  
        this.add.text(720, 600, 'Jugador 3  $ ' + players[2].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', fill: '#color' });
  
      this.add.text(720, 650, 'Jugador 4  $ ' + players[3].monedas, 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', fill: '#color' });
  
      //ganador
  
      if (players[0].monedas > players[1].monedas && players[0].monedas > players[2].monedas && players[0].monedas > players[3].monedas){
  
        //gano jugador 1
  
        this.add.text(600, 800, 'Ganó el Jugador 1', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#FFFFFF' });
  
      } else if (players[1].monedas > players[0].monedas && players[1].monedas > players[2].monedas && players[1].monedas > players[3].monedas){
  
        //gano jugador 2
  
        this.add.text(600, 800, 'Ganó el Jugador 2', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#FFFFFF' });
  
      } else if (players[2].monedas > players[0].monedas && players[2].monedas > players[1].monedas && players[2].monedas > players[3].monedas){
  
        //gano jugador 3
  
        this.add.text(600, 800, 'Ganó el Jugador 3', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#FFFFFF' });
  
      } else if (players[3].monedas > players[0].monedas && players[3].monedas > players[1].monedas && players[3].monedas > players[2].monedas){
  
        //gano jugador 4
  
        this.add.text(600, 800, 'Ganó el Jugador 4', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#FFFFFF' });
      } else{
  
        //empate
  
        this.add.text(690, 800, '¡Hubo empate!', 
      { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', fill: '#FFFFFF' });
  
      }
        
      }
  
  
  
      
        
      //boton
      var botonvolver;
  
      botonvolver = this.add.image(250, 1000, 'volver')
      .setInteractive({
      useHandCursor: true
      })
      .on('pointerdown', () => {
      sonidobotones3.play()
      this.scene.start("MainMenu", {
        temporizador: this.temporizador,
        sonido: this.sonido,  
        musicamainmenu: this.musicamainmenu,
        sonidosgenerales: this.sonidosgenerales
      });
  
      CantidadJugadores = CantidadJugadores - CantidadJugadores;
  
      })
      .on('pointerover', () => {
      botonvolver.setScale(1.1)
      sonidobotones1.play()
      })
      .on('pointerout', () => {
      botonvolver.setScale(1)
    });
  
      }
  }