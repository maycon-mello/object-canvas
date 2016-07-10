// ObjectCanvas.Text = function(args){
//     args.type = "Text";
//     this.init(args);
//     this.text = args.text || "Texto";
//     this.fontSize = args.fontSize || "18px";
//     this.fontVariant = args.fontVariant || "normal";
//     this.fontWeight = args.fotnWeight || "normal";
//     this.fontStyle = args.fontStyle || "normal";
//     this.fontFamily = args.fontFamily ||"Helvetica";
// };
// ObjectCanvas.Text.extend(ObjectCanvas.Shape);
// ObjectCanvas.Text.prototype.paint = function(context){
//
//         context.save();
//
//         context.globalAlpha = this.opacity;
//
//
//         context.font = this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+this.fontSize+" "+this.fontFamily;
//
//         this.width = context.measureText(this.text).width;
//         this.transforms(context);
//
//
//         this.readStrokeStyle(context);
//         context.strokeText(this.text,-.5*this.width,0);
//
//         this.shadow(context);
//         this.readFillStyle(context);
//         context.fillText(this.text,-.5*this.width,0);
//
//         context.restore();
// }
