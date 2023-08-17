
import {V} from '@clientio/rappid';
export {createLines}


function createLines(x1,y1,x2,y2){
    var line = V('line', {
        x1: x1,
        y1:y1,
        x2:x2,
        y2:y2,
        stroke : 'black'
    });
    return line;
}