class Player {
    constructor(x, y, label, scene) {
        const player = scene.add.image(x, y, label)
        this.nombre = label 
    }

    
}

export default Player;