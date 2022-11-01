import Phaser from "phaser";
import Boton from "../clases/boton.js";
export class Instrucciones extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Instrucciones");
  }

  create() {
    //sonidos

    //botones
    var sonidobotones1;
    var sonidobotones3;

    sonidobotones1 = this.sound.add("sonidobotones1");
    sonidobotones1.setVolume(0.3);
    sonidobotones3 = this.sound.add("sonidobotones3");
    sonidobotones3.setVolume(1);

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

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 230, "Retroceso: al caer en esta casilla,\n el jugador deberá retroceder dos\n lugares", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 135, "Avance: al caer en esta casilla,\n el jugador avanzará la cantidad de\n casillas indicadas en la ruleta", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY - 40, "Monedas gratis: al caer en esta\n casilla, el jugador obtendrá una\n cantidad determinada de monedas", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY + 50, "Pierde turno: como indica su nombre,\n el jugador que caiga en esta casilla\n perderá un turno al dado", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })

    this.add.text(this.cameras.main.centerX + 125, this.cameras.main.centerY + 135, "Trivia: el jugador que caiga en esta\n casilla deberá responder una pregunta,\n si lo hace de forma correcta ganará\n monedas", {
      fontFamily: "MV Boli",
      fontSize: "22px",
      color: "#000",
    })
    //boton

    var botonvolver;

    botonvolver = this.add
      .image(250, 1000, "volver")
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        sonidobotones3.play();
        this.scene.start("MainMenu");
      })
      .on("pointerover", () => {
        sonidobotones1.play();
        botonvolver.setScale(1.1);
        textojugar.setScale(1.1);
      })
      .on("pointerout", () => {
        botonvolver.setScale(1);
        textojugar.setScale(1);
      });
    var textojugar = this.add.text(200, 950, "Volver", {
      fontFamily: "Papyrus",
      fontSize: "64px",
      color: "#000",
    })
  }
}
