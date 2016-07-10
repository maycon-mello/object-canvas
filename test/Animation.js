import { assert } from 'chai';
import dom from './utils/dom';

import main from '../src/main';
import Animation from '../src/Animation';
import Rectangle from '../src/shape/Rectangle';

describe('Animation', () => {

  it('constructor', () => {

  });

  it('Element animation', function (testDone) {
    this.timeout(2000);

    const rect = new Rectangle({
       x : 20,
       y : 20,
       width : 100,
       height : 100,
       fillStyle : "yellow",
       strokeStyle :"black",
       lineWidth : 3
    });

    var animation = rect.animate({
      props: { opacity : 0 },
      options: {
        duration : 1000,
      }
    });

    assert.equal(rect.opacity, 0);

    animation.done(function() {
      assert.equal(rect.opacity, 1);
      testDone();
    });

  })

});
