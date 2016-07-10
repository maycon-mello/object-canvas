import Util from '../../Util';

export default (shape, context) => {
  if (shape.shadowOffsetX && shape.shadowOffsetY) {
    context.shadowColor = Util.colorToRgba(shape.shadowColor, shape.shadowOpacity);
    context.shadowBlur = shape.shadowBlur;
    context.shadowOffsetX = shape.shadowOffsetX;
    context.shadowOffsetY = shape.shadowOffsetY;
  }
}
