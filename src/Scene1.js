import background from "./assets/background.png";
import ship1 from "./assets/ship.png";
import ship2 from "./assets/ship2.png";
import ship3 from "./assets/ship3.png";

export default class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background",background);
        this.load.image("ship",ship1);
        this.load.image("ship2",ship2);
        this.load.image("ship3",ship3);
    }

    create(){

        this.add.text(20,20,"Loading game...");
        setTimeout(()=>{
            this.scene.start("playGame");
        },1500)
        
    }
}