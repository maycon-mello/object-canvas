import Shape from './Shape';

export default class Rectangle extends Shape {
    type = 'Rectangle';

    constructor(args) {
      super(args);
    }

    draw(context) {
      let { width, height } = this;
      context.beginPath();
      context.rect(width * -0.5, height * -0.5, width, height);
      context.closePath();
    }
}
