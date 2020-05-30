import { GameObject } from 'pixi-gameobject'
import { Texture, Container, AnimatedSprite } from 'pixi.js'

export default (textures: Texture[]): Container => GameObject.extend(Container, {
  name: 'FlappyBird',
  draw (c) {
    const bird = new AnimatedSprite(textures)
    bird.anchor.set(0.5)
    bird.loop = true
    bird.animationSpeed = 0.1;
    bird.play();
    bird.scale.set(3);
    c.addChild(bird)
  }
}
)
