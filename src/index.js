import Phaser from "phaser";
import Scene1 from "./Scene1.js";
import Scene2 from "./Scene2.js";

const config = {
  width: 256,
  height: 272,
  backgroundColor: "0x000000",
  scene:[Scene1,Scene2],
  pixelArt:true,
  physics:{
    default: "arcade",
    arcade:{
      debug:false
    }
  }

};

const game = new Phaser.Game(config);


export {config,game};
