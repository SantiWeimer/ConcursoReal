import Phaser from 'phaser'

var players;
var CantidadJugadores;
export class Preloads extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Preloads");
    }
    
  
    init (data) {
    
      players = data.players; 
      CantidadJugadores = data.CantidadJugadores;
      
    }

    
    preload() {
  
     //ruleta
    this.load.image("ruletaimagen", "assets/images/ruleta.png");
    this.load.image("ruleta_resplandor", "assets/images/ruleta_resplandor.png");
    this.load.image("agujaruleta", "assets/images/agujaruleta.png");
    this.load.image("flechanegra", "assets/images/flechanegra.png");

    //tablero y casillas
    this.load.tilemapTiledJSON("tilemap", "assets/tilemaps/tilemap2.json");
    this.load.image("tablero", "assets/images/tablero.png");
    //pantano
    this.load.image("casilla_pantano_comun", "assets/images/casilla_pantano_comun.jpg");
    this.load.image("casilla_pantano_pierde_turno", "assets/images/casilla_pantano_pierde_turno.jpg");
    this.load.image("casilla_pantano_volver", "assets/images/casilla_pantano_volver.jpg");
    this.load.image("casilla_pantano_pregunta_X", "assets/images/casilla_pantano_pregunta_X.jpg");
    this.load.image("casilla_pantano_pregunta_Y", "assets/images/casilla_pantano_pregunta_Y.jpg");
    this.load.image("casilla_pantano_avanzar", "assets/images/casilla_pantano_avanzar.jpg");
    this.load.image("casilla_pantano_moneda_X", "assets/images/casilla_pantano_moneda_X.jpg");
    this.load.image("casilla_pantano_moneda_Y", "assets/images/casilla_pantano_moneda_Y.jpg");
    this.load.image("casilla_pantano_esquina", "assets/images/casilla_pantano_esquina.jpg");
    this.load.image("troncos_pantano", "assets/images/troncos_pantano.png");
    //bosque
    this.load.image("casilla_bosque_comun", "assets/images/casilla_bosque_comun.jpg");
    this.load.image("casilla_bosque_pierde_turno", "assets/images/casilla_bosque_pierde_turno.jpg");
    this.load.image("casilla_bosque_volver", "assets/images/casilla_bosque_volver.jpg");
    this.load.image("casilla_bosque_pregunta_X", "assets/images/casilla_bosque_pregunta_X.jpg");
    this.load.image("casilla_bosque_pregunta_Y", "assets/images/casilla_bosque_pregunta_Y.jpg");
    this.load.image("casilla_bosque_avanzar", "assets/images/casilla_bosque_avanzar.jpg");
    this.load.image("casilla_bosque_moneda_X", "assets/images/casilla_bosque_moneda_X.jpg");
    this.load.image("casilla_bosque_moneda_Y", "assets/images/casilla_bosque_moneda_Y.jpg");
    this.load.image("casilla_bosque_esquina", "assets/images/casilla_bosque_esquina.jpg");
    //aldea
    this.load.image("casilla_aldea_comun", "assets/images/casilla_aldea_comun.jpg");
    this.load.image("casilla_aldea_pierde_turno", "assets/images/casilla_aldea_pierde_turno.jpg");
    this.load.image("casilla_aldea_volver", "assets/images/casilla_aldea_volver.jpg");
    this.load.image("casilla_aldea_pregunta_X", "assets/images/casilla_aldea_pregunta_X.jpg");
    this.load.image("casilla_aldea_pregunta_Y", "assets/images/casilla_aldea_pregunta_Y.jpg");
    this.load.image("casilla_aldea_avanzar", "assets/images/casilla_aldea_avanzar.jpg");
    this.load.image("casilla_aldea_moneda_X", "assets/images/casilla_aldea_moneda_X.jpg");
    this.load.image("casilla_aldea_moneda_Y", "assets/images/casilla_aldea_moneda_Y.jpg");
    this.load.image("casilla_aldea_esquina", "assets/images/casilla_aldea_esquina.jpg");
    //aldea
    this.load.image("casilla_castillo_comun", "assets/images/casilla_castillo_comun.jpg");
    this.load.image("casilla_castillo_pierde_turno", "assets/images/casilla_castillo_pierde_turno.jpg");
    this.load.image("casilla_castillo_volver", "assets/images/casilla_castillo_volver.jpg");
    this.load.image("casilla_castillo_pregunta_X", "assets/images/casilla_castillo_pregunta_X.jpg");
    this.load.image("casilla_castillo_pregunta_Y", "assets/images/casilla_castillo_pregunta_Y.jpg");
    this.load.image("casilla_castillo_avanzar", "assets/images/casilla_castillo_avanzar.jpg");
    this.load.image("casilla_castillo_moneda_X", "assets/images/casilla_castillo_moneda_X.jpg");
    this.load.image("casilla_castillo_moneda_Y", "assets/images/casilla_castillo_moneda_Y.jpg");
    this.load.image("casilla_castillo_esquina", "assets/images/casilla_castillo_esquina.jpg");

   
    //personajes jugables
    this.load.spritesheet('ogrojuego', 'assets/images/ogro_spritesheet.png', { frameWidth: 125, frameHeight: 250 });
    this.load.image("princesajuego", "assets/images/princesa.png");
    this.load.image("hechicerojuego", "assets/images/hechicero.png");
    this.load.image("bardojuego", "assets/images/bardo.png");

    //personajes no jugables
    this.load.image("magopregunta", "assets/images/mago_pregunta.png");
    this.load.image("magotriste", "assets/images/mago_triste.png");
    this.load.image("magofestejando", "assets/images/mago_festejando.png");
    

    //HUD
    this.load.image("hud", "assets/images/marco_gameplay.png");
    this.load.image("hudmadera", "assets/images/hud_madera.png");
    this.load.image("cartelfunciones", "assets/images/cartel_aviso_funciones.png");
    this.load.image("cartelpantano", "assets/images/cartel_pantano.png");
    this.load.image("cartelbosque", "assets/images/cartel_bosque.png");
    this.load.image("cartelaldea", "assets/images/cartel_aldea.png");
    this.load.image("cartelcastillo", "assets/images/cartel_castillo.png");
    this.load.image("iconomoneda", "assets/images/icono_moneda.png");
    this.load.image("bloqueoruleta", "assets/images/bloqueo-ruleta.png");

    //preguntas
    this.load.image("popup", "assets/images/popup-pregunta.png");
    this.load.image("boton_respuesta", "assets/images/boton_respuesta.jpg");
    this.load.image("boton_respuesta2", "assets/images/boton_respuesta2.jpg");
    this.load.image("popup_respuesta_correcta", "assets/images/boton_respuesta_correcta.jpg");
    this.load.image("popup_respuesta_incorrecta", "assets/images/boton_respuesta_incorrecta.jpg");
    this.load.image("boton_ayuda", "assets/images/boton_ayuda.jpg");
    this.load.image("boton_ayuda2", "assets/images/boton_ayuda2.jpg");
    this.load.image("boton_ayuda3", "assets/images/boton_ayuda3.jpg");
    
    //final
    this.load.image("resultado", "assets/images/fin_del_juego.png");
    

    //sonidos
    
    //ruleta
    this.load.audio("ruleta-sonido","assets/sounds/SFX/ruletafinal.mp3");
    
    //popup pregunta
    this.load.audio("monedaayuda","assets/sounds/SFX/monedaayuda.wav");
    this.load.audio("respuestaincorrecta","assets/sounds/SFX/respuestaincorrecta.mp3");
    this.load.audio("respuestacorrecta","assets/sounds/SFX/respuestacorrecta.wav");
    //carteles
    this.load.audio("sonido-cartelbosque","assets/sounds/SFX/cartel-bosque.wav");
    //casillas
    this.load.audio("sonidocasillamonedas","assets/sounds/SFX/casillamonedas.mp3");
  
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


        this.scene.start(
          "Game",
          { players: players,
            CantidadJugadores: CantidadJugadores,   
          })

      }, 4000)
    }
  }