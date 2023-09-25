
import { shapes} from '@clientio/rappid';
export {createRectangle}

function createRectangle(position, size, label, fill){
    const rect = new shapes.standard.Rectangle({
        position: position,
        size: size,
        attrs: {
            body:{
                fill: fill
            },
            label: {
                fontSize:10,
               text: label,
               
               
           }
         }
    });
    return rect;

}