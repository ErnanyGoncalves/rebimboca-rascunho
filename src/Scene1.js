import ship1SS from "./assets/sprites/ship.png";
import ship2SS from "./assets/sprites/ship2.png";
import ship3SS from "./assets/sprites/ship3.png";
import boomSS from "./assets/sprites/explosion.png";
import upSS from "./assets/sprites/power-up.png";
import playerSS from "./assets/sprites/player.png";
import beamSS from "./assets/sprites/beam.png";

import fontPNG from "./assets/bitmapFonts/font.png";
import fontXML from "./assets/bitmapFonts/font.xml";

import WebpackLoader from "phaser-webpack-loader";
import AssetManifest from "./AssetManifest";

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.scenePlugin("WebpackLoader", WebpackLoader, "loader", "loader");

    this.load.spritesheet("ship", ship1SS, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.spritesheet("ship2", ship2SS, {
      frameWidth: 32,
      frameHeight: 16
    });

    this.load.spritesheet("ship3", ship3SS, {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("explosion", boomSS, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.spritesheet("power-up", upSS, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.spritesheet("player", playerSS, {
      frameWidth: 16,
      frameHeight: 24
    });
    this.load.spritesheet("beam", beamSS, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.bitmapFont("pixelFont", fontPNG, fontXML);
  }

  create() {
    this.loader.start(AssetManifest);

    this.loader.load().then(() => {
      this.add.text(20, 20, "Loading game...");
      setTimeout(() => {
        this.scene.start("playGame");
      }, 1500);

      this.anims.create({
        key: "ship1_anim",
        frames: this.anims.generateFrameNumbers("ship"),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "ship2_anim",
        frames: this.anims.generateFrameNumbers("ship2"),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "ship3_anim",
        frames: this.anims.generateFrameNumbers("ship3"),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "explode",
        frames: this.anims.generateFrameNumbers("explosion"),
        frameRate: 20,
        repeat: 0,
        hideOnComplete: true
      });

      this.anims.create({
        key: "red",
        frames: this.anims.generateFrameNumbers("power-up", {
          start: 0,
          end: 1
        }),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "gray",
        frames: this.anims.generateFrameNumbers("power-up", {
          start: 2,
          end: 3
        }),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "thrust",
        frames: this.anims.generateFrameNumbers("player"),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "beam_anim",
        frames: this.anims.generateFrameNumbers("beam"),
        frameRate: 20,
        repeat: -1
      });
    });
  }
}
