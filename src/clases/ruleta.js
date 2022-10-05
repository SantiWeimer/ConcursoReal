class Ruleta {
    constructor(x, y, label, scene, click, clickarriba, clickafuera) {
        const ruleta = scene.add.image(x, y, label)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', click())
        .on('pointerover', () => clickarriba()) 
        .on('pointerout', () => clickafuera())     
    }


    click(){
        
    }
    
    
}

export default Ruleta;