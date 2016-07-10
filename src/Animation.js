import Easing from './Easing';
import Manager from './AnimationManager';

export default class Animation {

  static AnimationManager = Manager;

  static EVENT_DONE = 'done';
  static EVENT_PROGRESS = 'progress';
  static EVENT_START = 'start';

  doneListeners = [];

  constructor(graphicElement, props, options) {
    var startValues = {};
    var diffValues = {};

    for (var prop in props) {
      startValues[prop] = graphicElement[prop] || 0;
      diffValues[prop] = (props[prop] - (graphicElement[prop] || 0));
    }

    this.graphicElement = graphicElement;
    this.duration = options.duration;
    this.easing = options.easing;
    this.startValues = startValues;
    this.diffValues = diffValues;
    this.startTime = new Date().getTime();

    Manager.addAnimation(this);
  }

  animate(now) {
    // Calculate position in time for the animation
    let timeDiff = now - this.startTime;
    let position = timeDiff / this.duration;

    // Stop the animation if the duration has passed
    if (position > 1) {
      Manager.deleteAnimation(this);
      this.fireEvent(Animation.EVENT_DONE, { time: now });
      return;
    }

    if (this.easing) {
      position = Easing[this.easing](timeDiff, 0, 1, this.duration);
    }

    // Set new values for all properties
    for (let prop in this.diffValues) {
      if (!isNaN(this.diffValues[prop])) {
        this.graphicElement[prop] = this.startValues[prop] + this.diffValues[prop] * position;
      }
    }

    this.graphicElement.update();
  }

  fireEvent(eventName, props) {
    switch(eventName) {
      case Animation.EVENT_DONE: {
        this.doneListeners.forEach(listener => {
          listener.apply(this, props);
        })
        break;
      }
      case Animation.EVENT_PROGRESS: {
        this.progress(props);
        break;
      }
      case Animation.EVENT_START: {
        this.start(props);
        break;
      }
    }
  }

  /**
   * A function to be called when the animation on an element completes
   */
  done(listener) {
    this.doneListeners.push(listener);
  }

  /**
   * A function to be called after each step of the animation,
   * only once per animated element regardless of the number of animated properties
   */
  progress() {}

  /**
   * A function to call when the animation on an element begins
   */
  start() {}
}
