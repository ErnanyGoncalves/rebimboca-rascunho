import { GameObjects } from "phaser";

export default class ClickMouse extends GameObjects.Graphics {

    constructor(scene, color) {
        super(scene);
        scene.children.add(this);
        this.setDepth(1);
        this.setColor(color);
    }

    setColor(color){
        this.fillStyle(color);
    }

}

