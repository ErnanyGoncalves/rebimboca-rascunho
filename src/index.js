import Phaser from "phaser";
import Rascunho from "./scenes/Rascunho";


// Draw on texture
// https://phaser.io/examples/v3/view/game-objects/render-texture/draw-on-texture

// Draw
// https://phaser.io/examples/v3/view/game-objects/shapes/draw

// Desenhando o caminho constante
// https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/render%20texture/paint%20interpolated%20shadow.js

const config = {
  type: Phaser.AUTO,
  width: 274,
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  height: 278,
  autoCenter: 1,
  scaleMode: 3,
  backgroundColor: "0x000000",
  scene: [Rascunho]
};

const game = new Phaser.Game(config);