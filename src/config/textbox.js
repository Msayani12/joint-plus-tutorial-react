import { shapes} from '@clientio/rappid';
export {createTextBox} 
function createTextBox(rsize1, rsize2, pos1,pos2 ,label, bodycolor){
    var textBlock = new shapes.standard.TextBlock();
    textBlock.resize(rsize1, rsize2);
    textBlock.position(pos1, pos2);
    textBlock.attr('root/title', 'joint.shapes.standard.TextBlock');
    textBlock.attr('body/fill', bodycolor);
    textBlock.attr('label/text', label);
    textBlock.attr('label/style/color', 'black');
    return textBlock;
}