// import Shape from './Shape';
// import Util from '../Util';
//
// /**
//  *
//  * @define ObjectCanvas.Image
//  */
// export default class Image extends Shape {
//
//   static type = 'Image';
//
//   constructor(args) {
//     super(args);
//
//     if (this.imageUrl) {
//       var _this = this;
//       Util.getImageFromUrl(this.imageUrl, (img) => {
//           this.image = img;
//           this.notifyObservers("imageUrl");
//       });
//     }
//   }
// }
//
// ObjectCanvas.Image = function(args){
//     args.type = "Image";
//     this.init(args);
//     if(this.imageUrl){
//         var _this = this;
//         ObjectCanvas.Util.getImageFromUrl(this.imageUrl,function(img){
//             _this.image = img;
//              _this.notifyObservers("imageUrl");
//         })
//     }
// };
// ObjectCanvas.Image.extend(ObjectCanvas.Shape);
// ObjectCanvas.Image.prototype.paint = function(context){
//
//         context.save();
//
//         context.globalAlpha = this.opacity;
//
//         context.fillStyle = this.fillStyle;
//         context.font = this.fontSize+" "+this.fontStyle;
//
//
//         //if(!this.image)
//             //this.width = context.measureText("Imagem n�o dispon�vel").width;
//         context.translate(this.x+.5*this.width, this.y+.5*this.height);
//
//         if(this.rotation != 0)
//             context.rotate(this.rotation * Math.PI / 180);
//
//         if(this.image){
//             context.drawImage(this.image,-.5*this.width,-.5*this.height,this.width,this.height);
//         }else{
//             context.fillText("Imagem n�o dispon�vel",-.5*this.width,0);
//         }
//
//         context.restore();
//
//  }
