import ClickImage from "../classes/ClickImage";

export default class RascunhoPapel extends ClickImage {
    constructor(scene) {
        super(scene, 0, 0, "rascunho");
        this.setInteractive();

        this.on("pointermove", pointer => {
            if (pointer.isDown) {
                const points = pointer.getInterpolatedPosition(30);
                points.forEach(p => {
                    if (p.x > 23 && p.y > 23 && p.x < 250 && p.y < 255)
                        scene.mouse.fillPoint(p.x, p.y, 3);
                });
            }
        });
    }

}