import { shapes} from '@clientio/rappid';

export {createPolygon}

function createPolygon(rsize1, rsize2, po1, po2){
    var poly = new shapes.standard.Polygon();
    poly.resize(rsize1, rsize2);

    poly.position(po1, po2);
    poly.attr('body/fill', 'grey');


    poly.attr('root/title', 'joint.shapes.standard.Polygon');

    poly.attr('body/refPoints', '0,10 10,0 20,10 10,20');
    return poly;
}

