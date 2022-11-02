import Phaser from "phaser";
export class Instrucciones extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Instrucciones");
  }

  init(data) {
    this.sonido = data.sonido;
    this.sonidosgenerales = data.sonidosgenerales;
    this.musicamainmenu = data.musicamainmenu;
  }

  create() {
    //sonidos

    //botones
    this.sonidosgenerales[0].setVolume(0.3 / this.sonido.volumenGeneral)
    this.sonidosgenerales[2].setVolume(1 / this.sonido.volumenGeneral)

    //escena
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

    this.add
      .image(this.cameras.main.centerX,this.cameras.main.centerY,"instrucciones")
      .setScale(1.5);

    this.add.text(this.cameras.main.centerX - 200, 200, "Instrucciones", {
        fontFamily: "Papyrus",
        fontSize: "72px",
        color: "#000",
    })

    this.add.text(this.cameras.main.centerX - 390, this.cameras.main.centerY - 210, "Para avanzar, cada jugador\n deberá hacer click en la ruleta", {
        fontFamily: "MV Boli",
        fontSize: "22px",
        color: "#000",
    })

    this.add.text(this.cameras.main.centerX - 390, this.cameras.main.centerY - 100, "Las preguntas deben responderse\n en un límite de tiempo, el\n cual puede ajustarse en la\n configuración", {
        fontFamily: "MV Boli",
        fontSize: "22px",
        color: "#000",
    })

    this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY + 50, "Cuando todos los jugadores\n lleguen al castillo, se contarán\n los puntos de cada uno, y\n ganará quien tenga la mayor\n cantidad de puntos", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 220, "Casilla Retroceso: el jugador deberá\n retroceder dos casillas", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 135, "Casilla Avance: el jugador avanzará la\n cantidad de casillas indicadas\n en la ruleta", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 30, "Casilla Monedas: el jugador obtendrá una\n cantidad determinada de monedas", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY + 45, "Casilla Pierde turno: el jugador que caiga\n en esta casilla perderá dos turnos\n en el juego", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY + 140, "Casilla Trivia: el jugador deberá responder\n una pregunta, si lo hace de forma\n correcta ganará monedas", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })



    //boton

    var botonvolver = this.add
      .image(250, 1000, "boton").setFlip(true, false)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.sonidosgenerales[2].play();
        this.scene.start("MainMenu", { 
          sonido: this.sonido,  
          musicamainmenu: this.musicamainmenu,
          sonidosgenerales: this.sonidosgenerales
        });
      })
      .on("pointerover", () => {
        this.sonidosgenerales[0].play();
        botonvolver.setScale(1.1);
        textovolver.setStyle({color: '#fff'});
      })
      .on("pointerout", () => {
        botonvolver.setScale(1);
        textovolver.setStyle({color: '#000'});
      });
      var textovolver = this.add.text(175, 968, "Volver", {
        fontFamily: "Garamond",
        fontSize: "60px",
        color: "#000",
        });
  }
}
