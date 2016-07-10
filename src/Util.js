
/**
 *
 *
 */
export const isMouseOverRect = (x, y, w, h, mX, mY) => {
  return (mX >= x && mX <= (x+w)) &&
         (mY >= y && mY <= (y+h));
};

/**
 *
 *
 */
export const isMouseOverShape = (shape, mX, mY) => {
  let mP = shape.parent.getMousePosition(mX,mY)
  return isMouseOverRect(shape.x,shape.y,shape.width,shape.height,mP.x,mP.y);
};


// cloneObject : function(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }
//
//     var temp = obj.constructor(); // give temp the original obj's constructor
//     for (var key in obj) {
//         temp[key] = cloneObject(obj[key]);
//     }
//
//     return temp;
// },

// Observable : function(){
//     this.observers = [];
//     this.notify = function(args){
//         for(var i = 0;i<this.observers.length;i++){
//             this.observers[i].update(args);
//         }
//     },
//     this.push = function(observer){
//         this.observers.push(observer);
//     }
// },
// colorToRgba : function(color,opacity){
//     var rgba = "rgba(";
//     if(color.substring(0, 1) == "#"){
//         rgba+= parseInt(color.substr(1,2),16)+","
//         rgba+= parseInt(color.substr(3,2),16)+","
//         rgba+= parseInt(color.substr(5,2),16)+","
//     }else{
//
//     }
//
//     rgba+=opacity+")";
//
//     return rgba;
// },
// getImageFromUrl : function(url,callback){
//     var image = new Image();
//     image.src = url;
//     //image.src = ObjectCanvas.imagesDirectory+"\\"+ url;
//     //console.log(image.src);
//     image.onload = function(){
//         callback(image);
//     }
// }
