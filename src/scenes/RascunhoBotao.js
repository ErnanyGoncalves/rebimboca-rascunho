import ClickImage from "../classes/ClickImage";

export default class RascunhoBotao extends ClickImage {
    constructor(scene, x, y, asset, cor) {
        super(scene, x, y, asset);
        this.cor = cor;
        this.setInteractive();
        this.setDepth(2);

        this.on("pointerdown", () => {
            if (asset === "X") {
                scene.mouse.clear();
            }
            scene.mouse.setColor(this.cor);
        });
    }

}