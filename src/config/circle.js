import { shapes} from '@clientio/rappid';
export {createCircle}
function createCircle(position, size, bodyColor, labelcolor ){
    const circle= new shapes.standard.Circle({
        position: position,
        size: size,
        
        attrs: {
            body: {
                fill: 'lightgrey'
            },
            label: {
                fill:labelcolor
                
            }
        }
    });

    return circle;
}