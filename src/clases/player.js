class Player {

    constructor(nombre, x, y, imagen, monedas, jugador) {
       
        this.nombre = nombre;
        this.imagen = imagen;
        this.x = x;
        this.y = y;
        this.monedas = monedas
        this.casilla = -1
        this.acumulador = 0;
        this.jugador = jugador;

    }

}



export default Player;