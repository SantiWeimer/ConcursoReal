import Phaser from 'phaser'
export class Resultado extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Resultado");
    }
  
    create() {

    
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ogro').setScale(1);
    }
  }