export default (shape, context) => {
  // Translates to shape initial position
  context.translate(shape.x + .5 * shape.width, shape.y + .5 * shape.height);

  if (shape.rotation != 0) {
    context.rotate(shape.rotation * Math.PI / 180);
  }
}
