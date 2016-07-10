import ObjectCanvas from './ObjectCanvas';

/**
 * @define ObjectCanvas.Canvas
 */

/* O objeto Canvas tem como objetivo gerenciar todas as formas que ser�o desenhadas
 * em um HTMLCanvas.
 * Seu construtor pode receber um objeto HTMLCanvasElement ou o id (String) de
 * um elemento Canvas. Ex.: new ObjectCanvas.Canvas('#myCanvas');
 */
export default class Canvas {

  constructor(canvasElement, id) {
    ObjectCanvas.canvasList.push(this);
    //Vetor com as formas do canvas, tais como Retangulos, Elipses, Poligonos, Texto etc...
    this.shapeList = new Array();

    if ((typeof canvasElement) == "string") {
      canvasElement = canvasElement.substr(1, canvasElement.length);
      this.id = id || canvasElement;
      canvasElement = document.getElementById(canvasElement);
    } else {
      this.id = id || canvasElement.getAttribute("id");
    }

    this.setCanvasElement(canvasElement);
    //Armazenda todos os observers do objeto ObjectCanvas.Canvas
    this.observers = [];
    //Armazenda a posi��o do HTMLCanvas relativa ao documento
    //� preciso para saber a posi��o das formas desenhadas no canvas relativas ao Elemento Canvas
    this.x = 7;
    this.y = 7;

  }

  setCanvasElement(canvasElement) {
    //Verifica se o parametro canvasElement � um id HTML ou um objeto HTMLCanvasElement

    this.canvasElement = canvasElement;
    //Vari�vel para armazenar o contexto 2d para desenhar no canvas
    this.context = canvasElement.getContext('2d');
    //Dimens�es do canvas
    this.width = 600;
    this.height = 600;
  }

  //Adiciona um forma ao Canvas
  addShape(shape, redraw) {
    //Registra o Canvas como observer da shape
    shape.observers.push(this);
    //define o Canvas como objeto pai da shape
    shape.parent = this;
    shape.canvas = this;
    //Adiciona a shape ao vetor de shapes
    this.shapeList.push(shape);
    //Informa que uma shape foi atualizada/adicionada, isso faz com que o Canvas redesenhe o canvas
    if(redraw != false) {
      this.notify();
    }
  }

  appendChild(shape, redraw) {
    this.addShape(shape,redraw);
  }

  //Deleta uma forma
  deleteShape(shape) {
    for(var i = 0;i<this.shapeList.length;i++){
      if(this.shapeList[i] == shape){
        if(this.shapeList.length > 1){
          for(var j = i;j<this.shapeList.length-1;j++){
            this.shapeList[j] = this.shapeList[j+1];
          }
          this.shapeList.pop();
        }else{
          this.shapeList.pop();
        }
      }
    }

    this.paint();
  }

  //Desenha as formas armazendas no vetor de formas no HTMLCanvasElement
  paint() {
    //Limpa o Canvas HTML
    this.context.clearRect(0,0,this.width,this.height);
    //Percore o vetor de formas, invocando o m�todo paint de cada um
    //Fazendo com que as formas sejam desenhadas no HTML Canvas
    for(var i = 0;i<this.shapeList.length;i++){
      this.shapeList[i].paint(this.context);
    }
  }

  //Reseta o canvas, voltando ao estado original
  clear() {
    this.shapeList.length = 0;
    this.notifyObservers("canvas cleared");
  }

  //Fun��o utilizada internamente pelo framework para
  //notificar os observers de que algo foi modificado
  notifyObservers(subject) {
    for(var i = 0;i<this.observers.length;i++){
      this.observers[i].notify(subject);
    }
  }

  //O Objeto Canvas � registrado como observer de cada shape do canvas,
  //este m�todo � invocado pelas shapes para informar que o seu estado foi alterado,
  //ou seja, alguma propriedade foi alterada, fazendo com que o Objeto Canvas redesenhe o HTMLCanvas
  notify(property) {
    if(property == 'layerIdx'){
      //Re-ordena o vetor de shapes baseado no idx
      var tmp = 0;
      for(var j=0;j<this.shapeList.length-1;j++){
        if(this.shapeList[j].layerIdx > this.shapeList[j+1].layerIdx){
          if(this.selectedShapeIndex == j){
              this.selectedShapeIndex++;
          }
          tmp = this.shapeList[j];
          this.shapeList[j] = this.shapeList[j+1];
          this.shapeList[j+1] = tmp;
        }
      }
    }
    this.paint();
    //Notifica os observers do objeto Canvas
    this.notifyObservers('shapeChanged');
  }

  //Este m�todo recebe um MouseEvent, o qual possui a posi��o do mouse no documento.
  //O m�todo retorna a posi��o do mouse no canvas
  getMousePosition(x, y) {
    var rect = this.canvasElement.getBoundingClientRect();
    var canvasElementStartX = rect.left;
    var canvasElementStartY = rect.top;

    return {
      x: x-canvasElementStartX,
      y: y-canvasElementStartY
    };
  }

  getShapeById(id) {
    for(var i = 0;i<this.shapeList.length;i++){
      if(this.shapeList[i].id == id){
        return this.shapeList[i];
      }
    }
    return null;
  }

  getShapeByClassName(className) {
    var shapes = [];
    for(var i = 0;i<this.shapeList.length;i++){
      if(this.shapeList[i].className == className){
        shapes.push(this.shapeList[i])
      }
    }
    return shapes;
  }
}
