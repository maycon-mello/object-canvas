import Events from '../Events';
import Animation from '../Animation';
import Gradient from '../Gradient';

import applyFill from './util/applyFill';
import applyStroke from './util/applyStroke';
import applyShadow from './util/applyShadow';
import applyTransforms from './util/applyTransforms';
import applyDragAndDrop from './util/applyDragAndDrop';

/**
 * Defines an abstract shape.
 * @constructor
 * @abstract
 * @param {Object} args
 */
export default class Shape {

  backgroundImage = '';
  observers = [];
  parent = null;

  constructor(args) {
    this.id = args.id || '';
    this.className = args.className || '';
    this.layerIdx = args.layerIdx || 0;
    this.x = args.x;
    this.y = args.y;
    this.width = args.width || 0;
    this.height = args.height || 0;
    this.rotation = args.rotation || 0;
    this.opacity = args.opacity || 0;
    this.fillStyle = args.fillStyle || args.fill || "#333";
    this.visible = args.visible || true;
    this.type = args.type || null;
    this.imageUrl = args.imageUrl || '';
    this.fillType = args.fillType || 'solid';
    this.strokeStyle = args.strokeStyle || args.stroke || '#333';
    this.lineCap = args.lineCap || 'but';
    this.lineWidth = args.lineWidth || 0;
    this.lineJoin = args.lineJoin || 'bevel';
    this.shadowColor = args.shadowColor || '#FFFFFF';
    this.shadowBlur = args.shadowBlur || 0;
    this.shadowOffsetX = args.shadowOffsetX || 0;
    this.shadowOffsetY = args.shadowOffsetY || 0;
    this.shadowOpacity = args.shadowOpacity || 1;
    this.gradient = args.gradient || null;

    applyDragAndDrop(this);
  }

  setSize (width, height) {
    this.width = width;
    this.height = height;
    this.notifyObservers('size-change');
  }

  setPosition (x, y) {
    this.x = x;
    this.y = y;
    this.notifyObservers('position-change');
  }

  paint(context) {
    if (!this.visible) {
      return;
    }

    context.save();

    applyTransforms(this, context);
    context.globalAlpha = 1 - this.opacity;

    this.draw(context);

    applyStroke(this, context);
    applyShadow(this, context);
    applyFill(this, context);

    context.restore();

  }

  clone() {

    // return new ObjectCanvas[this.type]({
    //     x: this.x,
    //     y: this.y,
    //     width: this.width,
    //     height: this.height,
    //     id: this.id,
    //     className: this.className,
    //     layerIdx: this.layerIdx,
    //     rotation: this.rotation,
    //     fillStyle: this.fillStyle,
    //     imageUrl: this.imageUrl,
    //     text: this.text,
    //     visible: this.visible,
    //     fontSize: this.fontSize,
    //     fontStyle: this.fontStyle
    // });
    return this;
  }

  notifyObservers (property) {
    this.observers.forEach(observer => {
      observer.notify(property)
    });
  }

  subscribe(callback) {

  }

  // Is bounds
  verifyCordinate(x, y) {
    console.log("######## Deprecated ###########");
    return (x >= this.x && x <= (this.x + this.width)) &&
           (y >= this.y && y <= (this.y + this.height));
  }

  getCanvas() {
    return this.canvas;
  }

  isInBoundingRect(windowX, windowY) {
    let {x, y} = this.getCanvas().getMousePosition(windowX, windowY);

    return (x >= this.x && x <= (this.x + this.width)) &&
           (y >= this.y && y <= (this.y + this.height));
  }

  addEventListener(evtType, callback) {
    Events.addEventListener(this, evtType, callback);
  }

  setProperty(property, value, redraw) {
    if (typeof this[property] == "number") {
      value = parseFloat(value);
    }

    switch (property) {
      case 'imageUrl': {
        var _this = this;
        this.imageUrl = value;
        ObjectCanvas.Util.getImageFromUrl(this.imageUrl, function (img) {
          _this.image = img;
        })
        break;
      }
      case 'fillType': {
        this.gradient = value == "gradient" ? new Gradient() : null;
        this.fillType = value;
        break;
      }
      default:{
        this[property] = value;
      }

    }

    if (redraw !== false) {
      this.notifyObservers(property);
    }
  }

  animate ({props, options}) {
    return new Animation(this, props, options);
  }

  update() {
    if (this.parent) {
      this.parent.paint();
    }
  }

}












    // fadeIn: function (duration, easing) {
    //     this.setProperty('opacity', 0);
    //     ObjectCanvas.Animation.createAnimation(this, {
    //         opacity: 1
    //     }, {
    //         easing: easing,
    //         duration: duration
    //     });
    // },
    // fadeOut: function (duration, easing) {
    //     this.setProperty('opacity', 1);
    //     ObjectCanvas.Animation.createAnimation(this, {
    //         opacity: 0
    //     }, {
    //         easing: easing,
    //         duration: duration
    //     });
    // }
//};
