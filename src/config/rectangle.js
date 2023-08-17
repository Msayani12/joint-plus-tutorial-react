
import { shapes} from '@clientio/rappid';
export {createRectangle}

function createRectangle(position, size, label){
    const rect = new shapes.standard.Rectangle({
        position: position,
        size: size,
        attrs: {
            label: {
                fontSize:10,
               text: label
           }
         }
    });
    return rect;

}