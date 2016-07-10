// ObjectCanvas.Polygon = function(args){
//     args.type = "Ellipse";
//     this.init(args);
//     this.points = args.points || [];
//     var width = 0,height = 0;
//     for(var i=0;i<this.points.length-1;i+=2){
//         if(this.points[i] > width){
//             width = this.points[i];
//         }
//         if(Math.abs(this.points[i+1]) > height){
//             height = Math.abs(this.points[i+1]);
//         }
//     }
//     this.width = width;
//     this.height = height;
// };
// ObjectCanvas.Polygon.extend(ObjectCanvas.Shape);
// ObjectCanvas.Polygon.prototype.draw = function(context){
//
//
//             context.translate(-(.5*this.width), -(.5*this.height));
//             context.beginPath();
//             for(var i=0,length=this.points.length;i<length-1;i+=2){
//                 context.lineTo(this.points[i],this.points[i+1]);
//             }
//             context.closePath();
//
// }
//
