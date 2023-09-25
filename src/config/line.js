
import {V} from '@clientio/rappid';
export {createLines, horizontalLines}


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

function horizontalLines(x1,y1,x2,y2){
    var line = V('line', {
        x1: x1,
        y1:y1,
        x2:x2,
        y2:y2,
        stroke : 'White'
    });
    return line;
}