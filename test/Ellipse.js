import { assert } from 'chai';
import Ellipse from '../src/shape/Ellipse';

describe('Ellipse', function() {

  it('constructor', () => {
    let x = 10;
    let y = 10;
    let ellipse = new Ellipse({x, y});

    assert.equal(ellipse.type, 'Ellipse');
    assert.equal(ellipse.x, 10);
    assert.equal(ellipse.y, 10);
  });

});
