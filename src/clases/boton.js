class Boton {
    constructor(x, y, label, scene, click) {
        const boton = scene.add.image(x, y, label)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => click())
    }
}

export default Boton;