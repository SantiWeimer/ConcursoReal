import Phaser from 'phaser'

export class PreloadsMenu extends Phaser.Scene {
    constructor() {
      
      super("PreloadsMenu");
    }
  
    preload() {

      
      //preload
      this.load.image("preload", "assets/images/pantalla_carga.jpg");
      this.load.spritesheet('monedacarga', 'assets/images/spritesheet_moneda_carga.png', { frameWidth: 410, frameHeight: 393 });

      //logo

      this.load.image("logo", "assets/images/logo.png");

      //menu principal
      this.load.image("fondo_menu", "assets/images/fondo_menu.jpg");
      this.load.image("transparencia", "assets/images/transparencia.png");
      this.load.image("titulojuego", "assets/images/papiro_grande.png");

      //botones
      this.load.image("botonjugar", "assets/images/boton_jugar_menu.png");
      this.load.image("botoninstrucciones", "assets/images/boton_instrucciones.png");
      this.load.image("botonconfiguracion", "assets/images/boton_configuracion.png");
      this.load.image("botoncreditos", "assets/images/boton_creditos.png");
      this.load.image("postemenu", "assets/images/poste_menu.jpg");
      this.load.image("botonmenu", "assets/images/boton_menuprincipal.png");


      //configuracion
      this.load.image("banderinidioma", "assets/images/banderin_idioma.png");

      this.load.image("banderintemporizador", "assets/images/banderin_temporizador.png");
      this.load.image("botontemp0", "assets/images/temporizador_boton0.png");
      this.load.image("botontemp15", "assets/images/temporizador_boton15.png");
      this.load.image("botontemp30", "assets/images/temporizador_boton30.png");

      this.load.image("banderinvolumen", "assets/images/banderin_volumen.png");
      this.load.image("barrasonido", "assets/images/barrasonido.png");
      this.load.image("barrasonido1", "assets/images/barrasonido1.png");
      this.load.image("flechasonidoizq", "assets/images/flechasonidoizq.png");
      this.load.image("flechasonidoder", "assets/images/flechasonidoder.png");

      

      //creditos
      this.load.image("cartel_aldi", "assets/images/cartel_aldi.png");
      this.load.image("cartel_santi", "assets/images/cartel_santi.png");
      this.load.image("cartel_luci", "assets/images/cartel_luci.png");

      //instrucciones
      this.load.image("instrucciones", "assets/images/papiro_instrucciones.png");




      //botones

      this.load.image("volver", "assets/images/boton_volver.png");
      this.load.image("jugar", "assets/images/boton_jugar.png");
      this.load.image("jugargris", "assets/images/boton_jugar_gris.png");



      //seleccion de personajes

      this.load.image("fondoseleccion", "assets/images/pantalla_seleccion.jpg");

      this.load.image("popupseleccion", "assets/images/cartel_seleccion.png");
      this.load.image("cadenaseleccion", "assets/images/cadena.png");
      this.load.image("botonseleccion1", "assets/images/boton_seleccion1.jpg");
      this.load.image("botonseleccion2", "assets/images/boton_seleccion2.jpg");
      

      this.load.image("recuadrojugador1", "assets/images/recuadro-jugador-1.png");
      this.load.image("recuadrojugador2", "assets/images/recuadro-jugador-4.png");
      this.load.image("recuadrojugador3", "assets/images/recuadro-jugador-3.png");
      this.load.image("recuadrojugador4", "assets/images/recuadro-jugador-2.png");

      //personajes
      this.load.image("ogro", "assets/images/ogro_seleccion.png");
      this.load.spritesheet('ogro-spritesheet', 'assets/images/ogro_seleccion_spritesheet.png', { frameWidth: 300, frameHeight: 500 });
      this.load.image("ogrobyn", "assets/images/ogro_seleccion_byn.png");
      
      this.load.image("princesa", "assets/images/princesa_seleccion.png");
      this.load.spritesheet('princesa-spritesheet', 'assets/images/princesa_seleccion_spritesheet.png', { frameWidth: 350, frameHeight: 550 });
      this.load.image("princesabyn", "assets/images/princesa_seleccion_byn.png");

      this.load.image("hechicero", "assets/images/hechicero_seleccion.png");
      this.load.spritesheet('hechicero-spritesheet', 'assets/images/hechicero_seleccion_spritesheet.png', { frameWidth: 423, frameHeight: 524 });
      this.load.image("hechicerobyn", "assets/images/hechicero_seleccion_byn.png");

      this.load.image("bardo", "assets/images/bardo_seleccion.png");
      this.load.spritesheet('bardo-spritesheet', 'assets/images/bardo_seleccion_spritesheet.png', { frameWidth: 220, frameHeight: 500 });
      this.load.image("bardobyn", "assets/images/bardo_seleccion_byn.png");

      this.load.image("rey", "assets/images/rey.png");

      //musica
      this.load.audio("musicamainmenu", "assets/sounds/music/mainmenu.mp3");

      //SFX

      this.load.audio("sonidobotones1", "assets/sounds/SFX/sonidobotones1.wav");
      this.load.audio("sonidobotones2", "assets/sounds/SFX/sonidobotones2.mp3");
      this.load.audio("sonidobotones3", "assets/sounds/SFX/sonidobotones3.mp3");
      this.load.audio("caraspersonajes", "assets/sounds/SFX/caraspersonajes.wav");
 
    }
  
    create() {

      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1)

      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo').setScale(1);

      setTimeout(() => {


        this.scene.start("MainMenu");




      }, 2000)
       
    }

    
    
  }