import ClickImage from "../classes/ClickImage";

export default class RascunhoBotao extends ClickImage {
    constructor(scene, x, y, asset, cor, mouse) {
        super(scene, x, y, asset, mouse);
        this.cor = cor;
        this.setInteractive();
        this.setDepth(2);

        this.on("pointerdown", () => {
            if(asset === "X"){
                mouse.clear();
            }
            mouse.setColor(cor);
        });
    }

}