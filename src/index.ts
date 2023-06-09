import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const clampy: Sprite = Sprite.from("./union.png");

console.log("UNION DE SANTA FE")

//clampy.anchor.set(0.5);

clampy.x = app.screen.width / 0;
clampy.y = app.screen.height / 0;

app.stage.addChild(clampy);
