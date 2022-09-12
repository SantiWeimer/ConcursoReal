export class Resultado extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Resultado");
    }
  
    create() {

    //sonidos

    //botones
    var sonidobotones1;
    var sonidobotones3;

    sonidobotones1 = this.sound.add('sonidobotones1');
    sonidobotones1.setVolume(0.3);
    sonidobotones3 = this.sound.add('sonidobotones3');
    sonidobotones3.setVolume(1);
    
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondo_menu').setScale(1);
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'transparencia').setScale(1).setAlpha(0.5);
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'resultado').setScale(1);
    this.add.image(1650, 700, 'rey').setScale(1);
      
      
    this.add.text(720, 500, 'Jugador 1  $ 0000', //monedasjug1, 
    { fontFamily: 'Times', fontStyle: 'italic', fontSize: '48px', fill: '#FFFFFF' });

    console.log(monedasjug1)
      
    //boton
    var botonvolver;

    botonvolver = this.add.image(250, 1000, 'volver')
    .setInteractive({
    useHandCursor: true
    })
    .on('pointerdown', () => {
    sonidobotones3.play()
    this.scene.start("MainMenu");
    })
    .on('pointerover', () => {
    botonvolver.setScale(1.1)
    sonidobotones1.play()
    })
    .on('pointerout', () => {
    botonvolver.setScale(1)
  });

    }
  }