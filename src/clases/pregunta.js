
class Pregunta {
    constructor(scene) {
        
        var trans = scene.add.image(scene.cameras.main.centerX, scene.cameras.main.centerY,"transparencia").setAlpha(0.5).setScrollFactor(0);
        var popup = scene.add.image(scene.cameras.main.centerX, 625, "popup").setScale(1.1).setScrollFactor(0);
        //monedas boton ayuda
        var iconomonedaayuda = scene.add.image(930, 920, "iconomoneda").setScale(0.8).setScrollFactor(0);
        var textmonedasayuda = scene.add.text(955, 900, "50", {
        fontFamily: "Times",
        fontSize: "36px",
        color: "#2B2B2B",
        }).setScrollFactor(0);

        //respuesta 1
        var botonRespuesta1 = scene.add.image(scene.cameras.main.centerX, 560, "boton_respuesta").setScale(1.1).setScrollFactor(0)
        //respuesta 2
        var botonRespuesta2 = scene.add.image(scene.cameras.main.centerX, 640, "boton_respuesta").setScale(1.1).setScrollFactor(0)
    
        //respuesta 3
        var botonRespuesta3 = scene.add.image(scene.cameras.main.centerX, 720, "boton_respuesta").setScale(1.1).setScrollFactor(0)
    
        //respuesta 4
        var botonRespuesta4 = scene.add.image(scene.cameras.main.centerX, 800, "boton_respuesta").setScale(1.1).setScrollFactor(0)

        

    }
 
}

export default Pregunta;