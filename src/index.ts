import * as PIXI from "pixi.js";
import rabbitImage from "./assets/rabbit.png";

import Bunny from './components/Bunny'
import FlappyBird from './components/FlappyBird'
import Circle from './components/Circle'


window.PIXI = PIXI

export class Main {
    private app!: PIXI.Application;

    constructor () {
        onload = (): void => {
            this.startLoadingAssets();
        };
    }

    private startLoadingAssets (): void {
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", rabbitImage);
        loader.add("spriteExample", "./spritesData.json"); // example of loading spriteSheet
        loader.on("complete", () => {
            this.onAssetsLoaded();
        });
        loader.load();
    }

    private onAssetsLoaded (): void {
        this.createRenderer();

        const stage = this.app.stage;

        const bunny = Bunny('rabbit')

        const flappyBird = FlappyBird([
            PIXI.Texture.from("birdUp.png"),
            PIXI.Texture.from("birdMiddle.png"),
            PIXI.Texture.from("birdDown.png"),
        ])

        bunny.position.set(100, 100)

        flappyBird.position.set(200, 200)

        stage.addChild(bunny, flappyBird, Circle);

        this.app.ticker.add(() => {
            bunny.rotation += 0.05;
        });
    }

    private createRenderer (): void {
        this.app = new PIXI.Application({
            backgroundColor: 0xd3d3d3,
            resizeTo: window,
        });
        document.body.appendChild(this.app.view);
    }
}

new Main();
