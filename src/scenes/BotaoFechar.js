import ClickImage from "../classes/ClickImage";

export default class BotaoFechar extends ClickImage {
    constructor(scene) {
        super(scene, 225, 3, "botao_fechar");
        this.setInteractive();
        this.on("pointerdown", () => {
            console.log("Muda de cena!");
            // scene.scene.start("");
        });
    }
}