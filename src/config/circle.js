import { shapes} from '@clientio/rappid';
export {createCircle}
function createCircle(position, size,label, bodyColor, labelcolor ){
    const circle= new shapes.standard.Circle({
        position: position,
        size: size,
        
        attrs: {
            body: {
                fill: bodyColor
            },
            label: {
                text: label,
                fill:labelcolor
                
            }
        }
    });

    return circle;
}