export class PreloadsMenu extends Phaser.Scene {
    constructor() {
      
      super("PreloadsMenu");
    }
  
    preload() {

      //preload
      this.load.image("preload", "public/assets/images/pantalla_carga.jpg");
      this.load.spritesheet('monedacarga', 'public/assets/images/spritesheet_moneda_carga.png', { frameWidth: 410, frameHeight: 393 });

      //logo

      this.load.image("logo", "public/assets/images/logo.png");

      //menu principal
      this.load.image("fondo_menu", "public/assets/images/fondo_menu.jpg");
      this.load.image("transparencia", "public/assets/images/transparencia.png");
      this.load.image("titulojuego", "public/assets/images/papiro_grande.png");

      //botones
      this.load.image("botonjugar", "public/assets/images/boton_jugar_menu.png");
      this.load.image("botoninstrucciones", "public/assets/images/boton_instrucciones.png");
      this.load.image("botonconfiguracion", "public/assets/images/boton_configuracion.png");
      this.load.image("botoncreditos", "public/assets/images/boton_creditos.png");
      this.load.image("postemenu", "public/assets/images/poste_menu.jpg");

      //configuracion
      this.load.image("banderinidioma", "public/assets/images/banderin_idioma.png");
      this.load.image("banderintemporizador", "public/assets/images/banderin_temporizador.png");
      this.load.image("banderinvolumen", "public/assets/images/banderin_volumen.png");
      

      //creditos
      this.load.image("cartel_aldi", "public/assets/images/cartel_aldi.png");
      this.load.image("cartel_santi", "public/assets/images/cartel_santi.png");
      this.load.image("cartel_luci", "public/assets/images/cartel_luci.png");

      //instrucciones
      this.load.image("instrucciones", "public/assets/images/papiro_instrucciones.png");




      //botones

      this.load.image("volver", "public/assets/images/boton_volver.png");
      this.load.image("jugar", "public/assets/images/boton_jugar.png");
      this.load.image("jugargris", "public/assets/images/boton_jugar_gris.png");

       //personajes
    this.load.image("ogro_seleccion", "public/assets/images/ogro_seleccion.png");
    this.load.image("princesa_seleccion", "public/assets/images/princesa_seleccion.png");
    this.load.image("hechicero_seleccion", "public/assets/images/hechicero_seleccion.png");
    this.load.image("bardo_seleccion", "public/assets/images/bardo_seleccion.png");
    this.load.image("caraogro", "public/assets/images/caraogro.jpg");
    this.load.image("caraprincesa", "public/assets/images/caraprincesa.jpg");
    this.load.image("carabardo", "public/assets/images/carabardo.jpg");
    this.load.image("carahechicero", "public/assets/images/carahechicero.jpg");
    this.load.image("caraogrobyn", "public/assets/images/caraogrobyn.jpg");
    this.load.image("caraprincesabyn", "public/assets/images/caraprincesabyn.jpg");
    this.load.image("carabardobyn", "public/assets/images/carabardobyn.jpg");
    this.load.image("carahechicerobyn", "public/assets/images/carahechicerobyn.jpg");
      
    //musica
    //this.load.audio("musicamainmenu", "public/assets/sounds/music/mainmenu.mp3");

    //SFX

    //this.load.audio("sonidobotones1", "public/assets/sounds/SFX/sonidobotones1.wav");
    //this.load.audio("sonidobotones2", "public/assets/sounds/SFX/sonidobotones2.mp3");
    //this.load.audio("sonidobotones3", "public/assets/sounds/SFX/sonidobotones3.mp3");
    //this.load.audio("caraspersonajes", "public/assets/sounds/SFX/caraspersonajes.wav");
    }
  
    create() {



      setTimeout(() => {


        this.scene.start("Preloads");




      }, 2000)
       
    }

    
    
  }