import { shapes} from '@clientio/rappid';
export {createLink, directLink}

function createLink(source, target, vertices){
    var link = new shapes.standard.Link();
    link.appendLabel({
        attrs: {
        }
    });
    link.prop('source', source);
    link.prop('target', target);
    link.prop('vertices', vertices);
    link.attr('root/title', 'joint.shapes.standard.Link');
    link.attr('line/stroke', 'black');
    return link;

}

function directLink(source, target, label){
    var link = new shapes.standard.Link();
    link.appendLabel({
        attrs: {
            text: {
                text: label
            }
        }
    });
    link.source(source);
    link.target(target);
    return link;
}