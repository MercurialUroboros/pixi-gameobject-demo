import { GameObject } from 'pixi-gameobject'
import { Graphics, Text } from 'pixi.js'

export default GameObject.extend(Graphics, {
  name: 'Circle',
  reactives () {
    return {
      x: 300,
      y: 300
    }
  },
  watch: {
    x (val: number): void {
      this.instance!.x = val
    }
  },
  created () {
    const interval = setInterval(() => {
      this.x += 20
      if (this.x === 600) {
        clearInterval(interval)
      }
    }, 300)
  },
  draw (c) {
    c.position.set(this.x, this.y)
    c.beginFill(0xff0000)
    c.drawCircle(0, 0, 50)
    c.endFill()

    const text = new Text('I react to my data', { fill: 'white' })
    text.anchor.set(0.5)
    text.scale.set(0.5)
    c.addChild(text)
  }
}
)
