import background from "./assets/background.png";
import ship1SS from "./assets/spritesheets/ship.png";
import ship2SS from "./assets/spritesheets/ship2.png";
import ship3SS from "./assets/spritesheets/ship3.png";
import boomSS from "./assets/spritesheets/explosion.png";


export default class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background",background);
        this.load.spritesheet("ship",ship1SS,{
            frameWidth:16,
            frameHeight:16
        });

        this.load.spritesheet("ship2",ship2SS,{
            frameWidth:32,
            frameHeight:16
        });

        this.load.spritesheet("ship3",ship3SS,{
            frameWidth:32,
            frameHeight:32
        });
        
        
        this.load.spritesheet("explosion",boomSS,{
            frameWidth:16,
            frameHeight:16
        });
    }

    create(){

        this.add.text(20,20,"Loading game...");
        setTimeout(()=>{
            this.scene.start("playGame");
        },1500)
        
    }
}