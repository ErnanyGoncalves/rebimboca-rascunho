import ClickScene from "../classes/ClickScene";
import AssetManifest from "./AssetManifest";
import RascunhoBotao from "./RascunhoBotao";
import RascunhoPapel from "./RascunhoPapel";
import ClickMouse from "../classes/ClickMouse";

export default class Menu extends ClickScene {
    constructor() {
        super("rascunho");
    }

    preload() {
        this.startLoader();
    }

    create() {
        this.loader.start(AssetManifest);
        this.loader.load().then(() => {
            this.mouse = new ClickMouse(this, "0x000000");

            this.rascunho = new RascunhoPapel(this, this.mouse);


            this.x = new RascunhoBotao(this, 130, 35, "X", "0x000000", this.mouse);
            this.fechar = new RascunhoBotao(this, 225, 0, "botao_fechar", "0x000000", this.mouse);

            this.lapis = new RascunhoBotao(this, 40, 33, "lapis", "0x000000", this.mouse);
            this.borracha = new RascunhoBotao(this, 80, 35, "borracha", "0xcccccc", this.mouse);

            this.cor_branco = new RascunhoBotao(this, 170, 30, "retangulo_branco", "0xffffff", this.mouse);
            this.cor_preto = new RascunhoBotao(this, 190, 30, "retangulo_preto", "0x000000", this.mouse);
            this.cor_amarelo = new RascunhoBotao(this, 210, 30, "retangulo_amarelo", "0xffff00", this.mouse);
            this.cor_verde = new RascunhoBotao(this, 170, 50, "retangulo_verde", "0x00ff00", this.mouse);
            this.cor_vermelho = new RascunhoBotao(this, 190, 50, "retangulo_vermelho", "0xff0000", this.mouse);
            this.cor_azul = new RascunhoBotao(this, 210, 50, "retangulo_azul", "0x0000ff", this.mouse);
        });
    }

}