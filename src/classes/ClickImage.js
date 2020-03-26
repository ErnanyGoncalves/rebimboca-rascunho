import { GameObjects } from "phaser";

export default class ClickImage extends GameObjects.Image {
  constructor(scene, x, y, asset) {
    super(scene, x, y, asset);
    scene.children.add(this);
    this.setOrigin(0, 0);
  }
}