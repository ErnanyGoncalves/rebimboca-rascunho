import ClickImage from "../classes/ClickImage";

export default class BotaoFechar extends ClickImage {
    constructor(scene) {
        super(scene, 225, 0, "botao_fechar");
        this.setInteractive();
        this.on("pointerdown", () => {
            console.log("Muda de cena!");
            // scene.mouse.clear();                            Caso precise
            // scene.scene.start("");
        });
    }
}