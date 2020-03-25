import WebpackLoader from "phaser-webpack-loader";
import AssetManifest from "../AssetManifest";

export default class Menu extends Phaser.Scene {
    constructor() {
        super("rascunho");
    }

    preload() {
        this.load.scenePlugin("WebpackLoader", WebpackLoader, "loader", "loader");
    }

    create() {
        this.loader.start(AssetManifest);
        this.loader.load().then(() => {


            this.mode = "draw";
            this.color = "0x000000";
            this.mouse = this.add.graphics().setDepth(1).fillStyle(this.color);


            this.rascunho = this.add.image(0, 0, "rascunho").setOrigin(0, 0).setInteractive();
        
            this.rascunho.on("pointermove", ({ x, y, isDown }) => {
                if (isDown) {
                    console.log("Andando");
                    this.mouse.fillRect(x,y,2,2);
                }
            });


            this.fechar = this.add.image(225, 0, "botao_fechar").setOrigin(0).setInteractive();
            this.fechar.on("pointerdown", () => {
                console.log("Fechei");
                this.rascunho.clear();
            });

            this.lapis = this.add.image(40, 40, "lapis").setInteractive();
            this.lapis.on("pointerdown", () => {
                console.log("Lapis");
                this.mode = "draw";
            });

            this.borracha = this.add.image(80, 40, "borracha").setInteractive();
            this.borracha.on("pointerdown", () => {
                console.log("Borracha");
                this.mode = "erase";
            });

            this.x = this.add.image(120, 40, "X").setInteractive();
            this.x.on("pointerdown", () => {
                console.log("X");
                this.rascunho.clear();
            });


            //Branco
            this.cor_branco = this.add.image(160, 30, "retangulo_branco").setInteractive();
            this.cor_branco.on("pointerdown", () => {
                this.color = "0xffffff";
                this.mouse.fillStyle(this.color);
            });


            //Preto
            this.cor_preto = this.add.image(180, 30, "retangulo_preto").setInteractive();
            this.cor_preto.on("pointerdown", () => {
                this.color = "0x000000";
                this.mouse.fillStyle(this.color);
            });

            //Amarelo
            this.cor_amarelo = this.add.image(200, 30, "retangulo_amarelo").setInteractive();
            this.cor_amarelo.on("pointerdown", () => {
                this.color = "0xffff00";
                this.mouse.fillStyle(this.color);
            });

            //Verde
            this.cor_verde = this.add.image(160, 50, "retangulo_verde").setInteractive();
            this.cor_verde.on("pointerdown", () => {
                this.color = "0x00ff00";
                this.mouse.fillStyle(this.color);
            });

            // Vermelho
            this.cor_vermelho = this.add.image(180, 50, "retangulo_vermelho").setInteractive();
            this.cor_vermelho.on("pointerdown", () => {
                this.color = "0xff0000";
                this.mouse.fillStyle(this.color);
            });

            //Azul
            this.cor_azul = this.add.image(200, 50, "retangulo_azul").setInteractive();
            this.cor_azul.on("pointerdown", () => {
                this.color = "0x0000ff";
                this.mouse.fillStyle(this.color);
            });

        });
    }

}