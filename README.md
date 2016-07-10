ObjectCanvas is a JavaScript library intended to make development with HTML5 Canvas easier. Instead of working with pixels, you work with objects. It’s very straightforward and easy to get started with.
## Example:
```javascript
  const canvas = new ObjectCanvas.Canvas("#myCanvas");

  let rect = new ObjectCanvas.Rectangle({
     x: 20,
     y: 20,
     width: 100,
     height: 100,
     fillStyle: "yellow",
     strokeStyle:"black",
     lineWidth: 3,
  });

  canvas.append(rect);

  // On mouse enter the opacity will be decreased to 0
  rect.addEventListener('mouseenter', evt => {
    this.animate({
      opacity: 0
    },{
      duration: 1000, // in ms
      easing: 'ease-out-elastic'
    });
  });
```
