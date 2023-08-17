import React, { useEffect, useRef } from 'react';
import { dia, ui, shapes} from '@clientio/rappid';
import './App.scss';
import {V} from '@clientio/rappid';
import {createLines} from "../src/config/line";
import {createRectangle} from "../src/config/rectangle";
import {createLink, directLink} from "../src/config/link";
import {createCircle} from "../src/config/circle";
import {createPolygon} from "../src/config/polygon";
import {createTextBox} from "../src/config/textbox";

function App() {

  const canvas: any = useRef(null);

  useEffect(() => {
    const graph = new dia.Graph({}, { cellNamespace: shapes });

    const paper = new dia.Paper({
        model: graph,
        background: {
        color: '#F8F9FA',
        },
        height:1200,
        width:1000,
        frozen: true,
        async: true,
        sorting: dia.Paper.sorting.APPROX,
        cellViewNamespace: shapes
    });

    const scroller = new ui.PaperScroller({
        paper,
        autoResizePaper: false,
        cursor: 'grab'
    });
    var c = V('circle', { r: 8, fill: 'red' });
    V(paper.svg).append(c);

    canvas.current.appendChild(scroller.el);
    scroller.render().center(); 
    var polygon = createPolygon(30,30,690,970);
    var titleTextBox = createTextBox(1000,50,0,0, 'BD9 - Sell from stock ');
    var textblock = createTextBox(200,50,0,50, 'Initial Sales Representative');
    var textblock1 = createTextBox(200,50,200,50, 'Sales Manager');
    var textblock2 = createTextBox(200,50,400,50, 'Shipping Specialist');
    var textblock3 = createTextBox(200,50,600,50, 'Billing clerk');
    var textblock4 = createTextBox(200,50,800,50, 'Account Recivable Accountant');
    const cir1  = createCircle({ x: 70, y: 120 }, { width: 50, height: 50 }, 'Start','white', 'black');
    const cir2  = createCircle({ x: 880, y: 1070 }, { width: 50, height: 50 }, 'End','red', 'black');
    const rect1 = createRectangle({ x: 20, y: 200 }, { width: 150, height: 50 }, 'Credit Management BD6');
    const rect2 = createRectangle({ x: 20, y: 300 }, { width: 150, height: 50 }, 'BGD Sales Quotation ');
    const rect3 = createRectangle({ x: 20, y: 400 }, { width: 150, height: 50 }, 'Create Sales Order');
    const rect4 = createRectangle({ x: 225, y: 400 }, { width: 150, height: 50 }, 'Approval Work flow');
    const rect5 = createRectangle({ x: 25, y: 510 }, { width: 150, height: 50 }, 'Available to Promise Processing');
    const rect6 = createRectangle({ x: 430, y: 570 }, { width: 150, height: 50 }, 'Create Delivery');
    const rect7 = createRectangle({ x: 430, y: 670 }, { width: 150, height: 50 }, 'Execute Picking');
    const rect8 = createRectangle({ x: 430, y: 770 }, { width: 150, height: 50 }, 'Check Batches');
    const rect9 = createRectangle({ x: 430, y: 870 }, { width: 150, height: 50 }, 'Split Outbound Delivery');
    const rect10 = createRectangle({ x: 630, y: 870 }, { width: 150, height: 50 }, 'Create Billing Document');
    const rect11 = createRectangle({ x: 630, y: 1070 }, { width: 150, height: 50 }, 'Sales Order Fullfillment');
    const rect12 = createRectangle({ x: 830, y: 960 }, { width: 150, height: 50 }, 'Account Recivable');

    

    
    // var line = V('line', {

    //   x1: 1,

    //   y1: 50,

    //   x2: 1000,

    //   y2: 50,

    //   stroke: 'black'

    // });
    var line = createLines(1,50,1000,50);
    var line1 = V('line', {

      x1: 0,

      y1: 100,

      x2: 1000,

      y2: 100,

      stroke: 'black'

    });

    var line2 = V('line', {

      x1: 200,

      y1: 50,

      x2: 200,

      y2: 1500,

      stroke: 'black'

    });

    var line3 = V('line', {

      x1: 400,

      y1: 50,

      x2: 400,

      y2: 1500,

      stroke: 'black'

    });
    var line4 = V('line', {

      x1: 600,

      y1: 50,

      x2: 600,

      y2: 1500,

      stroke: 'black'

    });

    var line5 = V('line', {

      x1: 800,

      y1: 50,

      x2: 800,

      y2: 1500,

      stroke: 'black'

    });
  
    V(paper.viewport).append([line,line1, line2, line3, line4, line5]);
    var link1 = directLink(cir1, rect1, '');
    var link2 = directLink(rect1, rect2, '');
    var link3 = directLink(rect2, rect3, '');
    var link4 = directLink(rect3, rect4, '');
    var link5 = createLink(rect4, rect5, [{ x: 300, y: 535 }],'');
    var link6 = createLink(rect5, rect6, [{ x: 100, y: 600 }],'');
    var link7 = directLink(rect7, rect8, '');
    var link8 = directLink(rect8, rect9, '');
    var link9 = directLink(rect9, rect10, '');
    var link10 = directLink(rect6, rect7, '');
    var link12 = directLink(rect10, polygon, '');
    var link13 = directLink(polygon, rect11, 'Yes');
    var link14 = directLink(polygon, rect12, 'No');
    var link15 = directLink(rect11, cir2,'');
    var link16 = directLink(rect12, cir2,'');
    graph.addCell([rect1, rect2, rect3, rect4, rect5, rect6, rect7,rect8,rect9, rect10, rect11, rect12, link1,link2, link3,link4, link5,link6,link7,link8,link9, link10, link12, link13, link14, link15, link16, cir1,cir2, polygon, textblock, textblock1, textblock2, textblock3,textblock4, titleTextBox]);
    paper.unfreeze();

    return () => {
        scroller.remove();
        paper.remove();
    };
  }, []);

  return (
    <div className="canvas" ref={canvas}/>
  );

}

export default App;
