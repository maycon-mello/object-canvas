/**
 * @define ObjectCanvas.Gradient
 */
export default class Gradient {

  constructor({ colorStops, type, x0, y0, x1, y1 }) {
    this.colorStops = colorStops || [];
    this.type = type || 'linear';
    this.x0 = x0 || 0;
    this.y0 = y0 || 0;
    this.x1 = x1 || 50;
    this.y1 = y1 || 50;
  }
}
