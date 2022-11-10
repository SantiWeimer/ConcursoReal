import Phaser from "phaser";
import { EN_US, ES_AR } from "../enums/languajes";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase, getTranslations } from "../services/translations.js";
import Boton from "../clases/Boton.js";

export class Configuracion extends Phaser.Scene {
  #wasChangedLanguage = TODO;

  //banderin sonidos
  sonido;
  sonidoboolean;
  volumenX = 400;
  volumenX2 = 400;
  musicamainmenu;

  //sonidos
  sonidobotones1;
  sonidobotones3;
  //banderin temporizador
  temporizador;

  //idioma
  idioma;

  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Configuracion");
  }

  init(data) {
    this.temporizador = data.temporizador;
    this.sonido = data.sonido;
    this.musicamainmenu = data.musicamainmenu;
    this.sonidosgenerales = data.sonidosgenerales;
    this.idioma = data.idioma;
  }

  create() {
    //sonidos

    //fondo
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_menu")
      .setScale(1);

    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "transparencia"
      )
      .setScale(1)
      .setAlpha(0.5);

    //boton

    this.botonvolver = new Boton(this, 250, 1000, "boton");
    this.botonvolver.boton
      .setFlip(true, false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[2].play();
        this.scene.start("MainMenu", {
          temporizador: this.temporizador,
          sonido: this.sonido,
          sonidoboolean: this.sonidoboolean,
          musicamainmenu: this.musicamainmenu,
          sonidosgenerales: this.sonidosgenerales,
          idioma: this.idioma,
        });
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        this.botonvolver.boton.setScale(1.1);
        this.textovolver.setStyle({ color: "#fff" });
      })
      .on("pointerout", () => {
        this.botonvolver.boton.setScale(1);
        this.textovolver.setStyle({ color: "#000" });
      });
    this.textovolver = this.add
      .text(255, 998, getPhrase("Volver"), {
        fontFamily: "Garamond",
        fontSize: "60px",
        color: "#000",
      })
      .setOrigin(0.5);

    //banderines

    //banderin temporizador
    this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"banderintemporizador").setScale(1);

    this.textotemporizador = this.add.text(this.cameras.main.centerX, 225, getPhrase("Temporizador"), {
      fontFamily: "Papyrus",
      fontSize: "50px",
      color: "#000",
    }).setOrigin(0.5)

    this.textotemp = this.add.text(this.cameras.main.centerX, 310, getPhrase("Seleccione el tiempo para el temporizador"))
      .setStyle({
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "24px",
        fill: "#000",
        wordWrap: { width: 250 },
      }).setOrigin(0.5);

    //sin temporizador
    this.ceroSeg = this.add
      .image(this.cameras.main.centerX - 80, 410, "boton_cuadrado")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.temporizador = 0;
        console.log(this.temporizador);
        this.ceroSeg.disableInteractive();
        this.treintaSeg.setInteractive();
        this.quinceSeg.setInteractive();
        this.ceroSeg.setTexture('botones_cuadrado_gris');
        this.quinceSeg.setTexture('boton_cuadrado');
        this.treintaSeg.setTexture('boton_cuadrado');
        this.text0.setColor('#8A8A8A');
        this.texto15.setColor('#015B80');
        this.texto30.setColor('#015B80');
      })
      .on("pointerover", () => {
        this.text0.setColor('#fff');
        this.ceroBrillo.setVisible(true);
      })
      .on("pointerout", () => {
        this.ceroBrillo.setVisible(false);
        if(this.temporizador != 0){
          this.text0.setColor('#015B80');
        }
      });
    this.text0 = this.add
      .text(this.cameras.main.centerX - 90, 390, "0")
      .setStyle({
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "36px",
        fill: "#015B80",
      });
    this.sintiempo = this.add
      .text(this.cameras.main.centerX - 35, 395, getPhrase("Sin tiempo"))
      .setStyle({
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "28px",
        fill: "#000",
      });

    this.ceroBrillo = this.add.image(this.cameras.main.centerX - 80, 410, "boton_cuadrado_blanco").setVisible(false).setAlpha(0.5);

    //15 segundos
    this.quinceSeg = this.add
      .image(this.cameras.main.centerX - 80, 510, "botones_cuadrado_gris")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.temporizador = 15;
        console.log(this.temporizador);
        this.quinceSeg.disableInteractive();
        this.ceroSeg.setInteractive();
        this.treintaSeg.setInteractive();
        this.ceroSeg.setTexture('boton_cuadrado');
        this.quinceSeg.setTexture('botones_cuadrado_gris');
        this.treintaSeg.setTexture('boton_cuadrado');
        this.text0.setColor('#015B80');
        this.texto15.setColor('#8A8A8A');
        this.texto30.setColor('#015B80');
      })
      .on("pointerover", () => {
        this.quinceBrillo.setVisible(true)
        this.texto15.setColor('#fff')
      })
      .on("pointerout", () => {
        this.quinceBrillo.setVisible(false)
        if(this.temporizador != 15){
          this.texto15.setColor('#015B80');
        }
      });
    this.texto15 = this.add.text(this.cameras.main.centerX - 100, 490, "15").setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "36px",
      fill: "#8A8A8A",
    });
    
    this.quincesegundos = this.add
      .text(this.cameras.main.centerX - 35, 495, getPhrase("15 segundos"))
      .setStyle({
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "28px",
        fill: "#000",
      });

    this.quinceSeg.disableInteractive();
    this.quinceBrillo = this.add.image(this.cameras.main.centerX - 80, 510, "boton_cuadrado_blanco").setVisible(false).setAlpha(0.5);

    //30 segundos
    this.treintaSeg = this.add
      .image(this.cameras.main.centerX - 80, 610, "boton_cuadrado")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.temporizador = 30;
        console.log(this.temporizador);
        this.treintaSeg.disableInteractive();
        this.ceroSeg.setInteractive();
        this.quinceSeg.setInteractive();
        this.ceroSeg.setTexture('boton_cuadrado');
        this.quinceSeg.setTexture('boton_cuadrado');
        this.treintaSeg.setTexture('botones_cuadrado_gris');
        this.text0.setColor('#015B80');
        this.texto15.setColor('#015B80');
        this.texto30.setColor('#8A8A8A');
      })
      .on("pointerover", () => {
        this.texto30.setColor('#fff');
        this.trientaBrillo.setVisible(true);
      })
      .on("pointerout", () => {
        if(this.temporizador != 30){
          this.texto30.setColor('#015B80');
        }
        this.trientaBrillo.setVisible(false);
      });
    this.texto30 = this.add.text(this.cameras.main.centerX - 100, 590, "30").setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "36px",
      fill: "#015B80",
    });
    this.treintasegundos = this.add
      .text(this.cameras.main.centerX - 35, 595, getPhrase("30 segundos"))
      .setStyle({
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "28px",
        fill: "#000",
      });

    this.trientaBrillo = this.add.image(this.cameras.main.centerX - 80, 610, "boton_cuadrado_blanco").setVisible(false).setAlpha(0.5);


    if(this.temporizador === 0){
      this.ceroSeg.disableInteractive();
      this.treintaSeg.setInteractive();
      this.quinceSeg.setInteractive();
      this.ceroSeg.setTexture('botones_cuadrado_gris');
      this.quinceSeg.setTexture('boton_cuadrado');
      this.treintaSeg.setTexture('boton_cuadrado');
      this.text0.setColor('#8A8A8A');
      this.texto15.setColor('#015B80');
      this.texto30.setColor('#015B80');
    }else if(this.temporizador === 30){
      this.treintaSeg.disableInteractive();
      this.ceroSeg.setInteractive();
      this.quinceSeg.setInteractive();
      this.ceroSeg.setTexture('boton_cuadrado');
      this.quinceSeg.setTexture('boton_cuadrado');
      this.treintaSeg.setTexture('botones_cuadrado_gris');
      this.text0.setColor('#015B80');
      this.texto15.setColor('#015B80');
      this.texto30.setColor('#8A8A8A');
    }


    //banderin volumen

    this.add.image(this.cameras.main.centerX / 3,this.cameras.main.centerY,"banderinvolumen").setScale(1);

    this.textovolumen = this.add.text(this.cameras.main.centerX / 3, 225, getPhrase("Volumen"), {
      fontFamily: "Papyrus",
      fontSize: "50px",
      color: "#000",
    }).setOrigin(0.5)

    //sonido general del juego

    //barra sonidos
    this.add.image(330, 650, "sogaVolumen");

    this.volumensonidos = this.add.text(330, 540, getPhrase("Volumen sonidos")).setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "28px",
      fill: "#000",
    }).setOrigin(0.5);

    this.desmutesonidos = this.add.image(280, 595, "botones_cuadrado_gris").setScale(0.8)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales.forEach((element) => {
          element.setMute(false);
        });
        this.sonido.sonidosMute = false;
        this.desmutesonidos.disableInteractive();
        this.mutesonidos.setInteractive();
        this.desmutesonidos.setTexture('botones_cuadrado_gris');
        this.mutesonidos.setTexture('boton_cuadrado');
        this.tickvolumen.setColor('#8A8A8A')
        this.cruzvolumen.setColor('#EA2424')
      })
      .on("pointerover", () => {
        this.desmutesonidosblanco.setVisible(true)
        this.tickvolumen.setColor('#fff')
      })
      .on("pointerout", () => {
        this.desmutesonidosblanco.setVisible(false)
        if(this.sonido.sonidosMute === true){
          this.tickvolumen.setColor('#24EA27');
        }
      });

    this.mutesonidos = this.add.image(380, 595, "boton_cuadrado").setScale(0.8)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales.forEach((element) => {
          element.setMute(true);
        });
        this.sonido.sonidosMute = true;
        this.mutesonidos.disableInteractive();
        this.desmutesonidos.setInteractive();
        this.mutesonidos.setTexture('botones_cuadrado_gris')
        this.desmutesonidos.setTexture('boton_cuadrado')
        this.cruzvolumen.setColor('#8A8A8A')
        this.tickvolumen.setColor('#24EA27')
      })
      .on("pointerover", () => {
        this.mutesonidosblanco.setVisible(true)
        this.cruzvolumen.setColor('#fff')
      })
      .on("pointerout", () => {
        this.mutesonidosblanco.setVisible(false)
        if(this.sonido.sonidosMute === false){
          this.cruzvolumen.setColor('#EA2424');
        }
      });

    this.desmutesonidos.disableInteractive();
    this.desmutesonidosblanco = this.add.image(280, 595, "boton_cuadrado_blanco").setVisible(false).setAlpha(0.5).setScale(0.8);
    this.mutesonidosblanco = this.add.image(380, 595, "boton_cuadrado_blanco").setVisible(false).setAlpha(0.5).setScale(0.8);
  
    this.tickvolumen = this.add.text(265, 573, '✓').setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "36px",
      fill: "#8A8A8A",
    });
    this.cruzvolumen = this.add.text(367, 573, 'X').setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "36px",
      fill: "#EA2424",
    });

    if(this.sonido.sonidosMute === true){
      this.mutesonidos.disableInteractive();
      this.desmutesonidos.setInteractive();
      this.mutesonidos.setTexture('botones_cuadrado_gris')
      this.desmutesonidos.setTexture('boton_cuadrado')
      this.cruzvolumen.setColor('#8A8A8A')
      this.tickvolumen.setColor('#24EA27')
    }
    //dije
    this.imagenvolumen = this.add.image(this.volumenX, 680, "dijeVolumen");
    //borla izquierda sonidos
    this.add.image(200, 680, "borlaVolumen")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        if (this.sonido.volumenGeneral === 10) {
        } else {
          this.sonido.volumenGeneral = this.sonido.volumenGeneral + 1;
          this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral);
          this.sonidosgenerales[2].setVolume(1 / this.sonido.volumenGeneral);
          this.sonidosgenerales[0].play();
          console.log("sonido", this.sonido.volumenGeneral);
          this.tweens.add({
            targets: this.imagenvolumen,
            duration: 200,
            x: this.volumenX - 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX = this.volumenX - 16.6;
        }
      })
      .on("pointerover", () => {})
      .on("pointerout", () => {});

    //flecha derecha sonidos
    this.add.image(450, 680, "borlaVolumen")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        if (this.sonido.volumenGeneral === 1) {
        } else {
          this.sonido.volumenGeneral = this.sonido.volumenGeneral - 1;
          this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral);
          this.sonidosgenerales[2].setVolume(1 / this.sonido.volumenGeneral);
          this.sonidosgenerales[0].play();
          console.log("sonido", this.sonido.volumenGeneral);
          this.tweens.add({
            targets: this.imagenvolumen,
            duration: 200,
            x: this.volumenX + 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX = this.volumenX + 16.6;
        }
      })
      .on("pointerover", () => {})
      .on("pointerout", () => {});
    

    //musica del juego

    //botones
    this.desmutemusica = this.add.image(280, 345, "botones_cuadrado_gris").setScale(0.8)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonido.musicaMute = false;
        this.musicamainmenu.forEach(element => {
          element.setMute(false);
      });
        this.musicamainmenu[0].play();
        this.desmutemusica.disableInteractive();
        this.mutemusica.setInteractive();
        this.mutemusica.setTexture('boton_cuadrado');
        this.desmutemusica.setTexture('botones_cuadrado_gris');
        this.cruzmusica.setColor('#EA2424');
        this.tickmusica.setColor('#8A8A8A')
        
      })
      .on("pointerover", () => {
        this.desmutemusicablanco.setVisible(true)
        this.tickmusica.setColor('#fff')
      })
      .on("pointerout", () => {
        this.desmutemusicablanco.setVisible(false)
        if(this.sonido.musicaMute === true){
          this.tickmusica.setColor('#24EA27')
        }
      });

    this.mutemusica = this.add.image(380, 345, "boton_cuadrado").setScale(0.8)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonido.musicaMute = true;
        this.mutemusica.disableInteractive();
        this.musicamainmenu[0].stop();
        this.musicamainmenu.forEach(element => {
            element.setMute(true);
        });
        this.desmutemusica.setInteractive();
        this.desmutemusica.setTexture('boton_cuadrado');
        this.mutemusica.setTexture('botones_cuadrado_gris');
        this.tickmusica.setColor('#24EA27');
        this.cruzmusica.setColor('#8A8A8A');
      })
      .on("pointerover", () => {
        this.mutemusicablanco.setVisible(true)
        this.cruzmusica.setColor('#fff');
      })
      .on("pointerout", () => {
        this.mutemusicablanco.setVisible(false)
        if(this.sonido.musicaMute === false){
          this.cruzmusica.setColor('#EA2424');
        }
      });

    this.desmutemusica.disableInteractive();
    this.desmutemusicablanco = this.add.image(280, 345, "boton_cuadrado_blanco").setVisible(false).setAlpha(0.5).setScale(0.8);
    this.mutemusicablanco = this.add.image(380, 345, "boton_cuadrado_blanco").setVisible(false).setAlpha(0.5).setScale(0.8);

    this.tickmusica = this.add.text(265, 323, '✓').setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "36px",
      fill: "#8A8A8A",
    });
    this.cruzmusica = this.add.text(367, 323, 'X').setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "36px",
      fill: "#EA2424",
    });

     if(this.sonido.musicaMute === true){
      this.mutemusica.disableInteractive();
      this.desmutemusica.setInteractive();
      this.desmutemusica.setTexture('boton_cuadrado');
      this.mutemusica.setTexture('botones_cuadrado_gris');
      this.tickmusica.setColor('#24EA27');
      this.cruzmusica.setColor('#8A8A8A');
    } 
    //barra musica
    this.add.image(330, 400, "sogaVolumen").setScale(1);

    this.volumenmusica = this.add.text(330, 290, getPhrase("Volumen música")).setStyle({
      fontFamily: "Times",
      fontStyle: "italic",
      fontSize: "28px",
      fill: "#000",
    }).setOrigin(0.5);

    //dije musica
    this.imagenvolumen2 = this.add.image(this.volumenX2, 430, "dijeVolumen");

    //borla izquierda musica
    this.add.image(200, 430, "borlaVolumen").setScale(1)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        if (this.sonido.volumenMusica === 10) {
        } else {
          this.sonido.volumenMusica = this.sonido.volumenMusica + 1;
          this.musicamainmenu[0].pause();
          this.musicamainmenu[0].setVolume(0.4 / this.sonido.volumenMusica);
          this.musicamainmenu[0].resume();
          this.tweens.add({
            targets: this.imagenvolumen2,
            duration: 200,
            x: this.volumenX2 - 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX2 = this.volumenX2 - 16.6;
        }
      })
      .on("pointerover", () => {})
      .on("pointerout", () => {});
    
    //borla derecha musica
    this.add.image(450, 430, "borlaVolumen").setScale(1)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        if (this.sonido.volumenMusica === 1) {
        } else {
          this.sonido.volumenMusica = this.sonido.volumenMusica - 1;
          this.musicamainmenu[0].pause();
          this.musicamainmenu[0].setVolume(0.4 / this.sonido.volumenMusica);
          this.musicamainmenu[0].resume();
          this.tweens.add({
            targets: this.imagenvolumen2,
            duration: 200,
            x: this.volumenX2 + 16.6,
            ease: "Power3",
            repeat: 0,
            yoyo: false,
          });
          this.volumenX2 = this.volumenX2 + 16.6;
        }
      })
      .on("pointerover", () => {})
      .on("pointerout", () => {});



    //banderin idiomas

    this.banderinidioma = this.add.image(1600, this.cameras.main.centerY, "banderinidioma").setScale(1);

    this.textoidioma = this.add.text(1600, 225, getPhrase("Idioma"), {
      fontFamily: "Papyrus",
      fontSize: "50px",
      color: "#000",
    }).setOrigin(0.5)

    //bandera UK
    this.botonuk = this.add
      .image(1600, 360, "botonuk")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.idioma = 2;
        this.getTranslations(EN_US);
        this.botonuk.setTexture('botonukgris')
        this.botonespana.setTexture('botonespana')
        this.botonespana.setInteractive();
        this.botonuk.disableInteractive();
      })
     .on('pointerover', () => {
        this.ukbrillo.setVisible(true)
      })
      .on('pointerout', () => {
        this.ukbrillo.setVisible(false)
      }); 
    
    this.ingles = this.add
      .text(1600, 290, getPhrase("Inglés"))
      .setStyle({
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "28px",
        fill: "#000",
      }).setOrigin(0.5);

    //bandera España
    

    this.botonespana = this.add.image(1600, 530, "botonespanagris")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.idioma = 1;
        this.getTranslations(ES_AR);
        this.botonespana.setTexture('botonespanagris')
        this.botonespana.disableInteractive();
        this.botonuk.setTexture('botonuk')
        this.botonuk.setInteractive();

      })
      .on("pointerover", () => {
        this.espanabrillo.setVisible(true)
      })
      .on("pointerout", () => {
        this.espanabrillo.setVisible(false)
      });
    this.botonespana.disableInteractive();
    this.espanabrillo = this.add.image(1600, 530, "boton_rectangulo_blanco").setVisible(false).setAlpha(0.5)
    this.ukbrillo = this.add.image(1600, 360, "boton_rectangulo_blanco").setVisible(false).setAlpha(0.5)
    


    this.español = this.add
      .text(1600, 460, getPhrase("Español"))
      .setStyle({
        fontFamily: "Times",
        fontStyle: "italic",
        fontSize: "28px",
        fill: "#000",
      }).setOrigin(0.5);


    //solucion imagenes idioma
    if(this.idioma === 2){
      this.botonuk.setTexture('botonukgris')
      this.botonespana.setTexture('botonespana')
      this.botonespana.setInteractive();
      this.botonuk.disableInteractive();
    }
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.#wasChangedLanguage = READY;
      this.textotemp.setText(
        getPhrase("Seleccione el tiempo para el temporizador")
      );
      this.textovolver.setText(getPhrase("Volver"));
      this.sintiempo.setText(getPhrase("Sin tiempo"));
      this.quincesegundos.setText(getPhrase("15 segundos"));
      this.treintasegundos.setText(getPhrase("30 segundos"));
      this.volumenmusica.setText(getPhrase("Volumen música"));
      this.volumensonidos.setText(getPhrase("Volumen sonidos"));
      this.ingles.setText(getPhrase("Inglés"));
      this.español.setText(getPhrase("Español"));
      this.textotemporizador.setText(getPhrase("Temporizador"));
      this.textovolumen.setText(getPhrase("Volumen"));
      this.textoidioma.setText(getPhrase("Idioma"));
    }
  }

  updateWasChangedLanguage = () => {
    this.#wasChangedLanguage = FETCHED;
  };

  async getTranslations(language) {
    this.language = language;
    this.#wasChangedLanguage = FETCHING;

    await getTranslations(language, this.updateWasChangedLanguage);
  }
}
