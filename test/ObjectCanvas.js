import { assert } from 'chai';
import ObjectCanvas from '../src/ObjectCanvas';

describe('ObjectCanvas', function() {

  it('create Rectangle', () => {

    var rect = new ObjectCanvas.Rectangle({
       x : 20,
       y : 20,
       width : 100,
       height : 100,
       fillStyle : "yellow",
       strokeStyle :"black",
       lineWidth : 3
    });

    rect.addEventListener("mouseenter", function(evt){
      this.animate({
        props: { opacity : 0, x: 50, y: 100},
        options: {
          duration : 1000,
          easing : 'ease-out-elastic'
        }
      });
    })


    console.log();
  });

});
