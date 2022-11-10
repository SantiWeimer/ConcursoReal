import Phaser from 'phaser'
import Sonido from "../clases/Sonido";

export class PreloadsMenu extends Phaser.Scene {

  sonido;
  sonidosgenerales = [];
  musicamainmenu = [];
   
    constructor() {
      
      super("PreloadsMenu");
    }
  
    preload() {
      //logo
      this.load.image("logo", "assets/images/logo.png");
      //transparencia
      this.load.image("transparencia", "assets/images/transparencia.png");


      //menu principal
      this.load.image("fondo_menu", "assets/images/fondo_menu.jpg");
      this.load.image("titulojuego", "assets/images/papiro_grande.png");

      //botones
      this.load.image("botonjugar", "assets/images/boton_jugar_menu.png");
      this.load.image("botoninstrucciones", "assets/images/boton_instrucciones.png");
      this.load.image("botonconfiguracion", "assets/images/boton_configuracion.png");
      this.load.image("botoncreditos", "assets/images/boton_creditos.png");
      this.load.image("postemenu", "assets/images/poste_menu.jpg");
      this.load.image("botonmenu", "assets/images/boton_menuprincipal.png");


      //configuracion
    
      //banderin temporizador
      this.load.image("banderintemporizador", "assets/images/banderin_temporizador.png");

      //banderin volumen
      this.load.image("banderinvolumen", "assets/images/banderin_volumen.png");
      this.load.image("sogaVolumen", "assets/images/soga_volumen.png");
      this.load.image("borlaVolumen", "assets/images/borla_volumen.png");
      this.load.image("dijeVolumen", "assets/images/dije_volumen.png");

      //banderin idiomas
      this.load.image("banderinidioma", "assets/images/banderin_idioma.png");
      this.load.image("botonespana", "assets/images/boton_espana.png");
      this.load.image("botonespanagris", "assets/images/boton_espana_gris.png");
      this.load.image("botonuk", "assets/images/boton_uk.png");
      this.load.image("botonukgris", "assets/images/boton_uk_gris.png");
      this.load.image("boton_rectangulo_blanco", "assets/images/botones_rectangulo_blanco.png");
      
      //botones
      this.load.image("boton_cuadrado", "assets/images/botones_cuadrado.png");
      this.load.image("botones_cuadrado_gris", "assets/images/botones_cuadrado_gris.png");
      this.load.image("boton_cuadrado_blanco", "assets/images/botones_cuadrado_blanco.png");

      //creditos
      this.load.image("cartel_aldi", "assets/images/cartel_aldi.png");
      this.load.image("cartel_santi", "assets/images/cartel_santi.png");
      this.load.image("cartel_luci", "assets/images/cartel_luci.png");
      this.load.image("cartel_musica", "assets/images/cartel_musica.png");
      this.load.image("boton_musica", "assets/images/boton_musica.png");
      this.load.image("boton_musica_blanco", "assets/images/boton_musica_blanco.png");

      //instrucciones
      this.load.image("instrucciones", "assets/images/papiro_instrucciones.png");




      //botones

      
      this.load.image("boton", "assets/images/boton_jugar.png");
      this.load.image("jugargris", "assets/images/boton_jugar_gris.png");

      this.load.on('progress', (e) => {

          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1)
          this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo').setScale(1);  
          this.add.text(this.cameras.main.centerX,this.cameras.main.centerY + 300,"Cargando", {
            fontFamily: "Garamond",
            fontSize: "40px",
            color: "#000",
          }).setOrigin(0.5);
      })

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


      //gameplay 

      //ruleta
      this.load.image("ruletaimagen", "assets/images/ruleta.png");
      this.load.image("ruleta_resplandor", "assets/images/ruleta_resplandor.png");
      this.load.image("agujaruleta", "assets/images/agujaruleta.png");
      this.load.image("flechanegra", "assets/images/flechanegra.png");

      //tablero y casillas
      this.load.tilemapTiledJSON("tilemap", "assets/tilemaps/tilemap2.json");
      this.load.image("tablero", "assets/images/tablero.png");
      this.load.image("farola", "assets/images/farola.png");
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
      this.load.image("casilla_pantano_pierde_turno_esquina", "assets/images/casilla_pantano_pierde_turno_esquina.jpg");
      this.load.image("troncos_pantano", "assets/images/troncos_pantano.png");
      //bosque
      this.load.image("casilla_bosque_comun", "assets/images/casilla_bosque_comun.jpg");
      this.load.image("casilla_bosque_pierde_turno", "assets/images/casilla_bosque_pierde_turno.jpg");
      this.load.image("casilla_bosque_volver", "assets/images/casilla_bosque_volver.jpg");
      this.load.image("casilla_bosque_pregunta_X", "assets/images/casilla_bosque_pregunta_X.jpg");
      this.load.image("casilla_bosque_pregunta_Y", "assets/images/casilla_bosque_pregunta_Y.jpg");
      this.load.image("casilla_bosque_avanzar", "assets/images/casilla_bosque_avanzar.jpg");
      this.load.image("casilla_bosque_avanzar_esquina", "assets/images/casilla_bosque_avanzar_esquina.jpg");
      this.load.image("casilla_bosque_moneda_X", "assets/images/casilla_bosque_moneda_X.jpg");
      this.load.image("casilla_bosque_moneda_Y", "assets/images/casilla_bosque_moneda_Y.jpg");
      this.load.image("casilla_bosque_moneda_esquina", "assets/images/casilla_bosque_moneda_esquina.jpg");
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
      this.load.image("casilla_aldea_moneda_esquina", "assets/images/casilla_aldea_moneda_esquina.jpg");
      this.load.image("casilla_aldea_pierde_turno_esquina", "assets/images/casilla_aldea_pierde_turno_esquina.jpg");

      //castillo
      this.load.image("casilla_castillo_comun", "assets/images/casilla_castillo_comun.jpg");
      this.load.image("casilla_castillo_pierde_turno", "assets/images/casilla_castillo_pierde_turno.jpg");
      this.load.image("casilla_castillo_volver", "assets/images/casilla_castillo_volver.jpg");
      this.load.image("casilla_castillo_pregunta_X", "assets/images/casilla_castillo_pregunta_X.jpg");
      this.load.image("casilla_castillo_pregunta_Y", "assets/images/casilla_castillo_pregunta_Y.jpg");
      this.load.image("casilla_castillo_avanzar", "assets/images/casilla_castillo_avanzar.jpg");
      this.load.image("casilla_castillo_moneda_X", "assets/images/casilla_castillo_moneda_X.jpg");
      this.load.image("casilla_castillo_moneda_Y", "assets/images/casilla_castillo_moneda_Y.jpg");
      this.load.image("casilla_castillo_esquina", "assets/images/casilla_castillo_esquina.jpg");
      this.load.image("casilla_castillo_esquina_pierde_turno", "assets/images/casilla_castillo_esquina_pierde_turno.jpg");
      this.load.image("casilla_castillo_esquina_volver", "assets/images/casilla_castillo_esquina_volver.jpg");
    
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
      this.load.image("triangulo", "assets/images/triangulo_turno.png");

      //preguntas
      this.load.image("popup", "assets/images/popup-pregunta.png");
      this.load.image("boton_respuesta", "assets/images/boton_respuesta.jpg");
      this.load.image("boton_respuesta2", "assets/images/boton_respuesta2.jpg");
      this.load.image("popup_respuesta_correcta", "assets/images/boton_respuesta_correcta.jpg");
      this.load.image("popup_respuesta_incorrecta", "assets/images/boton_respuesta_incorrecta.jpg");
      this.load.image("boton_ayuda", "assets/images/boton_ayuda.jpg");
      this.load.image("boton_ayuda2", "assets/images/boton_ayuda2.jpg");
      this.load.image("boton_ayuda3", "assets/images/boton_ayuda3.jpg");
      this.load.image("cronometro", "assets/images/simbolo_cronometro.png");

    
      //final
      this.load.image("resultado", "assets/images/fin_del_juego.png");
      this.load.image("resultadoingles", "assets/images/game_over.png");


      //musica

      this.load.audio("musica_main_menu", "assets/sounds/music/mainmenu.mp3");
      this.load.audio("musica_victoria", "assets/sounds/music/Victory.mp3");

      //SFX

      //sonidos generales juego

      this.load.audio("sonidobotones1", "assets/sounds/SFX/sonidobotones1.wav");
      this.load.audio("sonidobotones2", "assets/sounds/SFX/sonidobotones2.mp3");
      this.load.audio("sonidobotones3", "assets/sounds/SFX/sonidobotones3.mp3");
      this.load.audio("selpersonajes", "assets/sounds/SFX/caraspersonajes.wav");

      //seleccion personaje
      this.load.audio("cadenas","assets/sounds/SFX/cadenas.wav");
      this.load.audio("golpe_madera_sel","assets/sounds/SFX/golpe_madera_seleccion.wav");
      this.load.audio("ogro_seleccion","assets/sounds/SFX/ogro_fuerza.wav");
      this.load.audio("princesa_seleccion","assets/sounds/SFX/princesa_seleccion.wav");
      this.load.audio("hechicero_seleccion","assets/sounds/SFX/hechicero_sel.wav");
      this.load.audio("bardo_seleccion","assets/sounds/SFX/bardo_sel.wav");
      //sonidos gameplay
    
      //ruleta
      this.load.audio("ruleta_sonido","assets/sounds/SFX/ruletafinal.mp3");
    
      //popup pregunta
      this.load.audio("moneda_ayuda","assets/sounds/SFX/monedaayuda.wav");
      this.load.audio("respuesta_incorrecta","assets/sounds/SFX/respuestaincorrecta.mp3");
      this.load.audio("respuesta_correcta","assets/sounds/SFX/respuestacorrecta.wav");
   
      //casillas
      this.load.audio("sonido_casilla_monedas","assets/sounds/SFX/casillamonedas.mp3");

 
      this.load.on('complete', () => {
        setTimeout(() => {
          this.scene.start("MainMenu", {sonido: this.sonido, sonidosgenerales: this.sonidosgenerales, musicamainmenu: this.musicamainmenu});
        }, 1000)
      })
 



    }
  
    create() {

      this.sonido = new Sonido();


      //botones
      this.sonidoBotones1 = this.sound.add("sonidobotones1",{
      volume: 0.3 / this.sonido.volumenGeneral,
      });
      this.sonidoBotones2 = this.sound.add("sonidobotones2",{
      volume: 1 / this.sonido.volumenGeneral,
      });
      this.sonidoBotones3 = this.sound.add("sonidobotones3",{
        volume: 1 / this.sonido.volumenGeneral,
      });
      this.selPersonajes = this.sound.add('selpersonajes',{
        volume: 0.1 / this.sonido.volumenGeneral,
      });
      //seleccion de personaje
      this.cadenas = this.sound.add('cadenas',{
        volume: 0.3 / this.sonido.volumenGeneral,
      });
      this.golpeMaderaSel = this.sound.add('golpe_madera_sel',{
        volume: 0.8 / this.sonido.volumenGeneral,
      });
      //personajes
      this.ogroSeleccion = this.sound.add('ogro_seleccion',{
        volume: 0.3 / this.sonido.volumenGeneral,
      });
      this.princesaSeleccion = this.sound.add('princesa_seleccion',{
        volume: 0.5 / this.sonido.volumenGeneral,
      });
      this.hechiceroSeleccion = this.sound.add('hechicero_seleccion',{
        volume: 0.5 / this.sonido.volumenGeneral,
      });
      this.bardoSeleccion = this.sound.add('bardo_seleccion',{
        volume: 0.5 / this.sonido.volumenGeneral,
      });
      //gameplay
      this.sonidoRuleta = this.sound.add('ruleta_sonido',{
        volume: 1 / this.sonido.volumenGeneral,
      });
      this.sonidoRespCorrecta = this.sound.add('respuesta_correcta',{
        volume: 0.7 / this.sonido.volumenGeneral,
        rate: 0.9
      });
      this.sonidoRespIncorrecta = this.sound.add('respuesta_incorrecta',{
        volume: 0.55 / this.sonido.volumenGeneral,
        rate: 1.5,
      });
      this.monedaAyuda = this.sound.add('moneda_ayuda',{
        volume: 1.5 / this.sonido.volumenGeneral,
      });
      this.casillaMonedas = this.sound.add('sonido_casilla_monedas',{
        volume: 0.8 / this.sonido.volumenGeneral,
      });

     

      this.sonidosgenerales.push(this.sonidoBotones1);
      this.sonidosgenerales.push(this.sonidoBotones2);
      this.sonidosgenerales.push(this.sonidoBotones3);
      this.sonidosgenerales.push(this.selPersonajes);
      this.sonidosgenerales.push(this.cadenas);
      this.sonidosgenerales.push(this.golpeMaderaSel);
      this.sonidosgenerales.push(this.ogroSeleccion);
      this.sonidosgenerales.push(this.princesaSeleccion);
      this.sonidosgenerales.push(this.hechiceroSeleccion);
      this.sonidosgenerales.push(this.bardoSeleccion);
      this.sonidosgenerales.push(this.sonidoRuleta);
      this.sonidosgenerales.push(this.sonidoRespCorrecta);
      this.sonidosgenerales.push(this.sonidoRespIncorrecta);
      this.sonidosgenerales.push(this.monedaAyuda);
      this.sonidosgenerales.push(this.casillaMonedas);

      this.mainMenu = this.sound.add("musica_main_menu", {
        volume: 0.4,
        loop: true,
      })

      this.musicaVictoria = this.sound.add("musica_victoria",{
        volume: 0.5 / this.sonido.volumenMusica,
      });
     
      this.musicamainmenu.push(this.mainMenu);
      this.musicamainmenu.push(this.musicaVictoria);
    }

    
    
  }