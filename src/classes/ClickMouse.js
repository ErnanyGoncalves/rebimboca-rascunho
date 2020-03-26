import { GameObjects } from "phaser";

export default class ClickMouse extends GameObjects.Graphics {

    constructor(scene) {
        super(scene);
        scene.children.add(this);
        this.setDepth(1);
        this.setColor(scene.color);
    }

    setColor(color){
        if(color !== "0xcccccc")
            this.scene.color = color;
        this.fillStyle(color);
    }
}

