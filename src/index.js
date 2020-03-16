import Phaser from "phaser";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";

const config = {
  width: 256,
  height: 272,
  backgroundColor: "0x000000",
  scene:[Scene1,Scene2],
  pixelArt:true

};

const game = new Phaser.Game(config);

