class Casilla {
    constructor(x, y, label, scene) {
        const casilla = scene.add.image(x, y, label)
            
    }

    
}

class CasillaAvanzar extends Casilla {

    constructor(x, y, label, scene){
        super(x, y, label, scene)
    }

    Avanzar(){

    }
}

class CasillaRetroceder extends Casilla {

    constructor(x, y, label, scene){
        super(x, y, label, scene)
    }

    Retroceder(){

    }
}

class CasillaMonedas extends Casilla {

    constructor(x, y, label, scene){
        super(x, y, label, scene)
    }

    Monedas(){

    }
}

class CasillaPregunta extends Casilla {

    constructor(x, y, label, scene){
        super(x, y, label, scene)
    }


    AbrirPopUp(){

    }
}

export { CasillaAvanzar, CasillaMonedas, CasillaRetroceder, CasillaPregunta };