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

            this.rascunho = this.add.image(0, 0, "rascunho").setOrigin(0, 0);


            this.color = "0x000000";
            this.mouse = this.add.graphics().setDepth(1).fillStyle(this.color);

            this.interactiveZone = this.add.zone(20, 20, 230, 235).setOrigin(0, 0).setDepth(1).setInteractive();

            this.fechar = this.add.image(225, 0, "botao_fechar").setOrigin(0, 0).setDepth(2).setInteractive();
            this.lapis = this.add.image(40, 33, "lapis").setOrigin(0, 0).setDepth(2).setInteractive();
            this.borracha = this.add.image(80, 35, "borracha").setOrigin(0, 0).setDepth(2).setInteractive();
            this.x = this.add.image(130, 35, "X").setOrigin(0, 0).setDepth(2).setInteractive();
            this.cor_branco = this.add.image(170, 30, "retangulo_branco").setOrigin(0, 0).setDepth(2).setInteractive();
            this.cor_preto = this.add.image(190, 30, "retangulo_preto").setOrigin(0, 0).setDepth(2).setInteractive();
            this.cor_amarelo = this.add.image(210, 30, "retangulo_amarelo").setOrigin(0, 0).setDepth(2).setInteractive();
            this.cor_verde = this.add.image(170, 50, "retangulo_verde").setOrigin(0, 0).setDepth(2).setInteractive();
            this.cor_vermelho = this.add.image(190, 50, "retangulo_vermelho").setOrigin(0, 0).setDepth(2).setInteractive();
            this.cor_azul = this.add.image(210, 50, "retangulo_azul").setOrigin(0, 0).setDepth(2).setInteractive();


            //Mover mouse
            this.interactiveZone.on("pointermove", (pointer) => {
                if (pointer.isDown) {
                    const points = pointer.getInterpolatedPosition(30);
                    points.forEach(p => {
                        this.mouse.fillPoint(p.x, p.y, 7);
                    });
                }
            });

            // Botão fechar (no momento só limpa o desenho)
            this.fechar.on("pointerdown", () => {
                this.mouse.clear();
                this.color = "0x000000";
                this.mouse.fillStyle(this.color);
            });

            //Lapis
            this.lapis.on("pointerdown", () => {
                this.color = "0x000000";
                this.mouse.fillStyle(this.color);
            });

            // Borracha        
            this.borracha.on("pointerdown", () => {
                this.color = "0xcccccc";
                this.mouse.fillStyle(this.color);
            });

            // Botão X (limpa o desenho)   
            this.x.on("pointerdown", () => {
                this.mouse.clear();
                this.color = "0x000000";
                this.mouse.fillStyle(this.color);
            });


            //Branco       
            this.cor_branco.on("pointerdown", () => {
                this.color = "0xffffff";
                this.mouse.fillStyle(this.color);
            });


            //Preto      
            this.cor_preto.on("pointerdown", () => {
                this.color = "0x000000";
                this.mouse.fillStyle(this.color);
            });

            //Amarelo
            this.cor_amarelo.on("pointerdown", () => {
                this.color = "0xffff00";
                this.mouse.fillStyle(this.color);
            });

            //Verde
            this.cor_verde.on("pointerdown", () => {
                this.color = "0x00ff00";
                this.mouse.fillStyle(this.color);
            });

            // Vermelho
            this.cor_vermelho.on("pointerdown", () => {
                this.color = "0xff0000";
                this.mouse.fillStyle(this.color);
            });

            //Azul
            this.cor_azul.on("pointerdown", () => {
                this.color = "0x0000ff";
                this.mouse.fillStyle(this.color);
            });
        });
    }

}