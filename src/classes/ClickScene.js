import { Scene } from "phaser";
import WebpackLoader from "phaser-webpack-loader";
export default class ClickScene extends Scene {


  startLoader() {
    this.load.scenePlugin("WebpackLoader", WebpackLoader, "loader", "loader");
  }


  // addBackground(assetName) {
  //   this.background = this.add.image(0, 0, assetName).setDepth(0).setOrigin(0, 0);
  // }
}
