import { isMouseOverShape } from './Util';

/**
 * @define ObjectCanvas.Events
 */
export default class Events {
  /* O vetor eventHandlers
   *
   *
   */
  static eventHandlers = {};

  // Objeto de controle para eventos do tipo mouseover
  static mouseOver = {
    shape : null,
    alreadyCalled : false
  };

  //Adiciona um Handler de evento para uma determinada Shape
  static addEventListener(shape, evtType, callback) {
    if(!Events.eventHandlers[evtType]){
        Events.createEventHandler(evtType);
    }

    Events.eventHandlers[evtType].push({
      shape,
      callback
    });
  }

  //M�todo utilizado para inicializar os Handlers de eventos conforme a demanda
  static createEventHandler(type) {
    var _this = this;
    let handlers = Events.eventHandlers;

    handlers[type] = [];

    if (type == 'click' || type == 'mousedown' || type == 'mouseup') {
      document.addEventListener(type, function(evt) {
        handlers[type].forEach(listener => {
          let { shape } = listener;
          if (shape.isInBoundingRect(evt.pageX, evt.pageY)) {
            listener.callback.call(shape, evt);
          }
        })
      });
    } else if(type == 'mousemove' || type == 'mouseenter' || type == 'mouseout'){
      document.addEventListener("mousemove",function(evt){
          let listeners = null;
          var shape = null;
          let overShape = Events.mouseOver.shape;

          if(overShape &&
            !overShape.isInBoundingRect(evt.pageX,evt.pageY)) {
              Events.mouseOver.shape = null;
              Events.mouseOver.alreadyCalled = false;
              handlers.mouseout
              .filter(listener => listener.shape === overShape)
              .forEach(listener => listener.callback.call(listener.shape, evt));
          }

          listeners = _this.eventHandlers.mousemove;
          for(let i=0;i<listeners.length;i++){
              shape = listeners[i].shape;
              if(isMouseOverShape(shape,evt.pageX,evt.pageY)){
                  if(_this.mouseOver.shape != shape){
                      _this.mouseOver.shape = shape;
                      _this.mouseOver.alreadyCalled = false
                  }
                  listeners[i].callback.call(shape,evt);
              }
          }

          listeners = _this.eventHandlers.mouseenter;
          for(let i=0;i<listeners.length;i++){
              shape = listeners[i].shape;
              if(isMouseOverShape(shape,evt.pageX,evt.pageY) && _this.mouseOver.shape != shape && !_this.mouseOver.alreadyCalled){
                  _this.mouseOver.shape = shape;
                  _this.mouseOver.alreadyCalled = true;
                  listeners[i].callback.call(shape,evt);
              }
          }


      })
    }

  }
}
