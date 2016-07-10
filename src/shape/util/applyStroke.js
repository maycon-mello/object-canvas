export default (shape, context) => {
  if (!shape.lineWidth) {
    return;
  }

  context.strokeStyle = shape.strokeStyle;
  context.lineJoin = shape.lineJoin;
  context.lineCap = shape.lineCap;
  context.lineWidth = shape.lineWidth;

  context.stroke();
}
