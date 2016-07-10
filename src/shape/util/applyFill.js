export default (shape, context) => {
  switch (shape.fillType) {
    case 'solid': {
      context.fillStyle = shape.fillStyle;
      break;
    }

    case 'gradient': {
      var grd;
      var gradient = shape.gradient;

      switch (gradient.type) {
        case "linear":{
          grd = context.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
          break;
        }
        case "radial":{
          break;
        }
      }

      for (var i = 0; i < gradient.colorStops.length; i++) {
        grd.addColorStop(gradient.colorStops[i].position, gradient.colorStops[i].color);
      }

      context.fillStyle = grd;

      break;
    }

    case 'transparent': {
      break;
    }
  }

  context.fill();
}
