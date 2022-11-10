import Phaser from 'phaser'
import Boton from "../clases/Boton.js";
import {getPhrase} from '../services/translations.js'
//variables importadas


export class Resultado extends Phaser.Scene {

  players;
  CantidadJugadores;

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
      this.idioma = data.idioma;
    }
  
    create() {

      //musica
      this.musicamainmenu[0].stop();
      this.musicamainmenu[1].setVolume(0.5 / this.sonido.volumenMusica)
      this.musicamainmenu[1].play();
      
      
      //el booleano cambia la musica si la de victoria no terminó
      this.booleanmusica = true;
      this.musicamainmenu[1].once('complete', () => {
        this.musicamainmenu[0].play();
        this.booleanmusica = false});
      //sonidos
  
      //botones
      //botones
      this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral)
      this.sonidosgenerales[2].setVolume(1 / this.sonido.volumenGeneral)
      
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu').setScale(1);
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1).setAlpha(0.5);
      this.result = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'resultado').setScale(1);

      if(this.idioma === 2){
        this.result.setTexture('resultadoingles')
      }
      this.add.image(1650, 700, 'rey').setScale(1);
        
      //puntajes
      
      if (this.CantidadJugadores >= 2){
  
        this.add.text(this.cameras.main.centerX - 200, 520, getPhrase('Jugador 1'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);
  
        this.add.text(this.cameras.main.centerX, 520, this.players[0].monedas, 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);
        this.add.image(this.cameras.main.centerX - 70, 520, 'iconomoneda')

        this.add.text(this.cameras.main.centerX - 200, 580, getPhrase('Jugador 2'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 580, this.players[1].monedas, 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);

        this.add.image(this.cameras.main.centerX - 70, 580, 'iconomoneda')
      }

      if (this.CantidadJugadores >= 3){

        this.add.text(this.cameras.main.centerX - 200, 640, getPhrase('Jugador 3'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 640, this.players[2].monedas, 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);

        this.add.image(this.cameras.main.centerX - 70, 640, 'iconomoneda')
      }
      
      if (this.CantidadJugadores === 4){
  
        this.add.text(this.cameras.main.centerX - 200, 700, getPhrase('Jugador 4'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 700, this.players[3].monedas, 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', color: '#FFFFFF' }).setOrigin(0.5);
        
        this.add.image(this.cameras.main.centerX - 70, 700, 'iconomoneda')
      }
  

      //ganador

      if (this.CantidadJugadores === 2){
  
        //2 jugadores

        if (this.players[0].monedas > this.players[1].monedas){
        //gano jugador 1
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 1!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
      
        } else if (this.players[1].monedas > this.players[0].monedas){
        //gano jugador 2
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 2!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        }else{
        //empate
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('¡Hubo empate!'), 
          { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        }
          
      } else if (this.CantidadJugadores === 3){
  
        //3 jugadores
  
        if (this.players[0].monedas > this.players[1].monedas && this.players[0].monedas > this.players[2].monedas){
  
        //gano jugador 1
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 1!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        } else if (this.players[1].monedas > this.players[0].monedas && this.players[1].monedas > this.players[2].monedas){
  
        //gano jugador 2
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 2!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        } else if (this.players[2].monedas > this.players[0].monedas && this.players[2].monedas > this.players[1].monedas){
  
        //gano jugador 3
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 3!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        } else{
  
        //empate
  
        this.add.text(this.cameras.main.centerX, 800, getPhrase('¡Hubo empate!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
        }
          
      } else if (this.CantidadJugadores === 4){
  
        //4 jugadores

        if (this.players[0].monedas > this.players[1].monedas && this.players[0].monedas > this.players[2].monedas && this.players[0].monedas > this.players[3].monedas){
  
        //gano jugador 1
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 1!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        } else if (this.players[1].monedas > this.players[0].monedas && this.players[1].monedas > this.players[2].monedas && this.players[1].monedas > this.players[3].monedas){
  
        //gano jugador 2
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 2!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        } else if (this.players[2].monedas > this.players[0].monedas && this.players[2].monedas > this.players[1].monedas && this.players[2].monedas > this.players[3].monedas){
  
        //gano jugador 3
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 3!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        } else if (this.players[3].monedas > this.players[0].monedas && this.players[3].monedas > this.players[1].monedas && this.players[3].monedas > this.players[2].monedas){
  
        //gano jugador 4
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('!Ganó el Jugador 4!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
        } else{
  
        //empate
  
        this.add.text(this.cameras.main.centerX - 70, 850, getPhrase('¡Hubo empate!'), 
        { fontFamily: 'Times', fontStyle: 'italic', fontSize: '64px', color: '#FFFFFF' }).setOrigin(0.5);
  
        }
        
      }
  
      
      
      


      
      //boton

      this.botonvolver = new Boton(this, 250, 1000, "boton");
      this.botonvolver.boton
      .setFlip(true, false)
      .setInteractive({
      useHandCursor: true
      })
      .on('pointerdown', () => {
      this.sonidosgenerales[2].play()

      //parar musica de victoria y cambiar a la de menu
      if(this.booleanmusica === true){
        this.musicamainmenu[1].stop();
        this.musicamainmenu[0].play();
      }
      this.scene.start("MainMenu", {
        temporizador: this.temporizador,
        sonido: this.sonido,  
        musicamainmenu: this.musicamainmenu,
        sonidosgenerales: this.sonidosgenerales,
        idioma: this.idioma
      });
  
      this.CantidadJugadores = this.CantidadJugadores - this.CantidadJugadores;
  
      })
      .on('pointerover', () => {
      this.botonvolver.boton.setScale(1.1)
      this.textovolver.setStyle({ color: "#fff" });
      this.sonidosgenerales[0].play()
      })
      .on('pointerout', () => {
      this.botonvolver.boton.setScale(1)
      this.textovolver.setStyle({ color: "#000" });
    });

    this.textovolver = this.add
      .text(255, 998, getPhrase("Volver"), {
        fontFamily: "Garamond",
        fontSize: "60px",
        color: "#000",
      })
      .setOrigin(0.5);
  
    }
  }