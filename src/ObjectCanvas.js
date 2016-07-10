
/**
 * @define ObjectCanvas
 */
export default class ObjectCanvas {
  /* Vetor para armazenar todos os Objetos ObjectCanvas.Canvas da aplica��o
   * � utilizado com a finalidade de fornecer um mecanismo de procura
   * onde � possivel obter todas as formas da aplica��o
   */
  static canvasList = [];
  static imagesDirectory = 'images';

  static querySelector(query) {
    var selectors = query.match(/[.#]\w+/g);

    var canvasID = selectors[0].substr(1,selectors[0].length);
    var canvas = null;

    for(var i=0;i<this.canvasList.length;i++){
      if(this.canvasList[i].id == canvasID){
        canvas = this.canvasList[i];
      }
    }

    if (!canvas) {
      return null;
    }

    if (selectors.length <= 1 ){
      return canvas;
    }

    if (selectors[1].charAt(0) == "#") {
      return canvas.getShapeById(selectors[1].substr(1,selectors[1].length));
    } else {
      return canvas.getShapeByClassName(selectors[1].substr(1,selectors[1].length));
    }
  }

  /** @auto-generated */
  static Ellipse = require('./shape/Ellipse.js').default;
  /** @auto-generated */
  static Rectangle = require('./shape/Rectangle.js').default;
  /** @auto-generated */
  static Canvas = require('./Canvas.js').default;
  /** @auto-generated */
  static Gradient = require('./Gradient').default;
}
