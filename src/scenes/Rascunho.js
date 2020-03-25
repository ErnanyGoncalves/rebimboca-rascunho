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

            this.add.image(0, 0, "rascunho").setOrigin(0, 0);

            this.fechar = this.add.image(225, 0, "botao_fechar").setOrigin(0).setInteractive();
            this.fechar.on("pointerdown",()=>{
                console.log("Fechei");
            });

            this.lapis = this.add.image(40, 40, "lapis").setInteractive();
            this.lapis.on("pointerdown",()=>{
                console.log("Lapis");
            });

            this.borracha = this.add.image(80, 40, "borracha").setInteractive();
            this.borracha.on("pointerdown",()=>{
                console.log("Borracha");
            });

            this.x = this.add.image(120, 40, "X").setInteractive();
            this.x.on("pointerdown",()=>{
                console.log("X");
            });

            this.cor_branco = this.add.image(160, 30, "retangulo_branco").setInteractive();
            this.cor_branco.on("pointerdown",()=>{
                console.log("Branco");
            });

            this.cor_preto = this.add.image(180, 30, "retangulo_preto").setInteractive();
            this.cor_preto.on("pointerdown",()=>{
                console.log("Preto");
            });

            this.cor_amarelo = this.add.image(200, 30, "retangulo_amarelo").setInteractive();
            this.cor_amarelo.on("pointerdown",()=>{
                console.log("Amarelo");
            });

            this.cor_verde = this.add.image(160, 50, "retangulo_verde").setInteractive();
            this.cor_verde.on("pointerdown",()=>{
                console.log("Verde");
            });

            this.cor_vermelho = this.add.image(180, 50, "retangulo_vermelho").setInteractive();
            this.cor_vermelho.on("pointerdown",()=>{
                console.log("Vermelho");
            });
            
            this.cor_azul = this.add.image(200, 50, "retangulo_azul").setInteractive();
            this.cor_azul.on("pointerdown",()=>{
                console.log("Azul");
            });
            
            
            

        });
    }
}