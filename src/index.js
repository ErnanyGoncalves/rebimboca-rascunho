import Phaser from "phaser";
import Rascunho from "./scenes/Rascunho";

const config = {
  type: Phaser.AUTO,
  width: 274,
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  height: 278,
  autoCenter: 1,
  // scaleMode: 3,
  backgroundColor: "0x000000",
  scene: [Rascunho]
};

const game = new Phaser.Game(config);

export { game };
