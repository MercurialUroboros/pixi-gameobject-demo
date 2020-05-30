import { GameObject } from 'pixi-gameobject'
import { Sprite, Texture, Container } from 'pixi.js'

export default (textureName: string): Container => GameObject.extend(Container, {
  name: 'Bunny',
  draw (c) {
    const g = new Sprite(Texture.from(textureName))
    g.anchor.set(0.5)
    c.addChild(g)
  }
}
)
