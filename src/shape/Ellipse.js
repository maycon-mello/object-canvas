import Shape from './Shape';

/**
 *
 * @define ObjectCanvas.Ellipse
 */
export default class Ellipse extends Shape {

  type = 'Ellipse';

  constructor(args) {
    super(args);
  }

  draw(context) {
    var x = -.5 * this.width,
        y = -.5 * this.height,
        w = this.width,
        h = this.height;

    var kappa = .5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w,           // x-end
        ye = y + h,           // y-end
        xm = x + w / 2,       // x-middle
        ym = y + h / 2;       // y-middle

    context.beginPath();
    context.moveTo(x, ym);
    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    context.closePath();
  }
}
// ObjectCanvas.Ellipse = function(args){
//   args.type = "Ellipse";
//   this.init(args);
// };
// ObjectCanvas.Ellipse.extend(ObjectCanvas.Shape);
// ObjectCanvas.Ellipse.prototype.draw = function(context){
//   var x = -.5*this.width,y = -.5*this.height,w = this.width,h = this.height;
//   var kappa = .5522848,
//       ox = (w / 2) * kappa, // control point offset horizontal
//       oy = (h / 2) * kappa, // control point offset vertical
//       xe = x + w,           // x-end
//       ye = y + h,           // y-end
//       xm = x + w / 2,       // x-middle
//       ym = y + h / 2;       // y-middle
//   context.beginPath();
//   context.moveTo(x, ym);
//   context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
//   context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
//   context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
//   context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
//   context.closePath();
// }
