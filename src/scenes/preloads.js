export class Preloads extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Preloads");
    }
    
  
    preload() {
  
      //ruleta
      this.load.image("ruletaimagen", "public/assets/images/ruleta.png");
      this.load.image("ruleta_resplandor", "public/assets/images/ruleta_resplandor.png");
      this.load.image("agujaruleta", "public/assets/images/agujaruleta.png");
      this.load.image("flechanegra", "public/assets/images/flechanegra.png");
  
      //tablero y casillas
      this.load.tilemapTiledJSON("tilemap", "public/assets/tilemaps/tilemap.json");
      this.load.image("tablero", "public/assets/images/tablero.png");
      this.load.image("casilla1", "public/assets/images/casillacomun1.png");
      this.load.image("casilla2", "public/assets/images/casillacomun2.png");
      this.load.image("casilla3", "public/assets/images/casillacomun3.png");
      this.load.image("casillaavanzar", "public/assets/images/casilla_avanzar.jpg");
      this.load.image("casillamonedas", "public/assets/images/casilla_monedas.jpg");
      this.load.image("casillaretroceder", "public/assets/images/casilla_retroceder.jpg");
      this.load.image("casillapregunta", "public/assets/images/casilla_pregunta.jpg");
      this.load.image("casillapierde", "public/assets/images/casilla_pierde_turno.jpg");
  
     
      //personajes jugables
      this.load.spritesheet('ogro', 'public/assets/images/ogro_spritesheet.png', { frameWidth: 125, frameHeight: 250 });
      this.load.image("princesa", "public/assets/images/princesa.png");
      this.load.image("hechicero", "public/assets/images/hechicero.png");
      this.load.image("bardo", "public/assets/images/bardo.png");
  
      //personajes no jugables
      this.load.image("magopregunta", "public/assets/images/mago_pregunta.png");
      this.load.image("magotriste", "public/assets/images/mago_triste.png");
      this.load.image("magofestejando", "public/assets/images/mago_festejando.png");
      this.load.image("rey", "public/assets/images/rey.png");
  
      //HUD
      this.load.image("hud", "public/assets/images/marco_gameplay.png");
      this.load.image("cartelpantano", "public/assets/images/cartel_pantano.png");
      this.load.image("cartelbosque", "public/assets/images/cartel_bosque.png");
      this.load.image("cartelaldea", "public/assets/images/cartel_aldea.png");
      this.load.image("cartelcastillo", "public/assets/images/cartel_castillo.png");
      this.load.image("iconomoneda", "public/assets/images/icono_moneda.png");
  
      //preguntas
      this.load.image("popup", "public/assets/images/popup-pregunta.png");
      this.load.image("popup-pregunta", "public/assets/images/popup-pregunta1.png");
      this.load.image("popup-respuesta", "public/assets/images/popup-respuesta.png");
      
      //final
      this.load.image("resultado", "public/assets/images/fin_del_juego.png");
      
  
      //sonidos
      
      //ruleta
      this.load.audio("ruleta-sonido","public/assets/sounds/SFX/ruletafinal.mp3");
      
      //popup pregunta
      this.load.audio("monedaayuda","public/assets/sounds/SFX/monedaayuda.wav");
      this.load.audio("respuestaincorrecta","public/assets/sounds/SFX/respuestaincorrecta.mp3");
      this.load.audio("respuestacorrecta","public/assets/sounds/SFX/respuestacorrecta.wav");
      //carteles
      this.load.audio("sonido-cartelbosque","public/assets/sounds/SFX/cartel-bosque.wav");
      //casillas
      this.load.audio("sonidocasillamonedas","public/assets/sounds/SFX/casillamonedas.mp3");
  
    }
  
    create() {
  
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'preload').setScale(1);
  
    
  
      var monedacarga = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'monedacarga');
      
  
      monedacarga.anims.create({
        key: 'monedacarga',
        frames: this.anims.generateFrameNumbers('monedacarga', { start: 0, end: 4 }),
        frameRate: 2.5,
        repeat: -1,
        
      });
  
      monedacarga.anims.play('monedacarga', true);
  
  
        setTimeout(() => {
  
  
          this.scene.start("Game");
  
  
  
  
        }, 4000)
    }
  }