import React, { useEffect, useRef } from 'react';
import LCC from 'lightning-container';
import { dia, ui, shapes} from '@clientio/rappid';
import './App.scss';
import {V} from '@clientio/rappid';
import {createLines} from "../src/config/line";
import {createRectangle} from "../src/config/rectangle";
import {createLink, directLink} from "../src/config/link";
// import {createCircle} from "../src/config/circle";
import {createPolygon} from "../src/config/polygon";
import {createTextBox} from "../src/config/textbox";

LCC.addMessageHandler(function(message) {
  var msg = {
    greeting: "Hello World@@!"
  };
  LCC.sendMessage(msg);
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'+message.value);
});
function App() {
   
  const canvas: any = useRef(null);

  useEffect(() => {
    const graph = new dia.Graph({}, { cellNamespace: shapes });

    const paper = new dia.Paper({
        model: graph,
        background: {
        color: '#F8F9FA',
        },
        height:1800,
        width:2000,
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
    var c = V('circle', { r: 2, fill: 'black' });
    V(paper.svg).append(c);

    canvas.current.appendChild(scroller.el);
    scroller.render().center(); 
    // const cir1 = createCircle({x:250, y:300}, { width: 150, height: 50 } );
    // const cir2 = createCircle({x:1350, y:300}, { width: 150, height: 50 } );
    var titleTextBox = createTextBox(2000,50,0,0, 'Sales Order Processing for Sales Kits ', 'grey');
    var textblock = createTextBox(450,50,0,50, 'Customer Service Representative', 'orange');
    var textblock1 = createTextBox(1050,50,450,50, 'Shipping Specialist','orange');
    var textblock2 = createTextBox(500,50,1500,50, 'Billing Clerk', 'orange');

    // job role Customer Service Representative start
    const rect1 = createRectangle({ x: 200, y: 150 }, { width: 150, height: 50 }, 'Sales Order for Sales Kit Initiated' ,'pink');
    const rect2 = createRectangle({ x: 200, y: 250 }, { width: 150, height: 50 }, '6.2.2.02 Create Sales Orders ','lightgrey');
     // job role Customer Service Representative end

    // job role Shipping Specialist start
    const rect3 = createRectangle({ x: 480, y: 500 }, { width: 150, height: 50 }, 'Issue Goods Initiated', 'pink');
    const rect4 = createRectangle({ x: 660, y: 500 }, { width: 150, height: 50 }, 'Issue Goods Initiated', 'pink');
    const rect5 = createRectangle({ x: 900, y: 500 }, { width: 150, height: 50 }, 'Issue Goods Initiated', 'pink');
    const rect6 = createRectangle({ x: 1100, y: 500 }, { width: 150, height: 50 }, 'Issue Goods Initiated', 'pink');
    const rect7 = createRectangle({ x: 1290, y: 500 }, { width: 200, height: 50 }, 'Post Goods Issue Process Initiated', 'pink');
  
    const rect8 = createRectangle({ x: 465, y: 600 }, { width: 180, height: 50 }, 'Issue Goods (non-warehouselocations)', 'lightgrey');
    const rect9 = createRectangle({ x: 480, y: 780 }, { width: 150, height: 50 }, 'Issue Goods Complete', 'pink');
    const rect10 = createRectangle({ x: 660, y: 780 }, { width: 150, height: 50 }, 'Issue Goods Complete', 'pink');
    const rect11 = createRectangle({ x: 900, y: 600 }, { width: 150, height: 50 }, 'Issue Goods (Subcontracting)','lightgrey');
    const rect12 = createRectangle({ x: 900, y: 780 }, { width: 150, height: 50 }, 'Issue Goods Complete', 'pink');
    const rect13 = createRectangle({ x: 1090, y: 600 }, { width: 170, height: 50 }, 'Issue Goods (warehouse locations)', 'lightgrey');
    const rect14 = createRectangle({ x: 1100, y: 780 }, { width: 150, height: 50 }, 'Issue Goods Complete', 'pink');
    const rect15 = createRectangle({ x: 1320, y: 600 }, { width: 150, height: 50 }, 'Post Goods Issue', 'lightgrey');
    const rect16 = createRectangle({ x: 1295, y: 780 }, { width: 200, height: 50 }, 'Post Goods Issue Process Completed', 'pink');
    //job role Shipping Specialist end


    //job role Billing Clerk start
    
    const rect17 = createRectangle({ x: 1550, y: 1380 }, { width: 200, height: 50 }, 'Billing Process Initiated', 'pink');
    const rect18 = createRectangle({ x: 1550, y: 1600 }, { width: 200, height: 50 }, 'Billing and Invoicing', 'lightgrey');
    const rect19 = createRectangle({ x: 1780, y: 1600 }, { width: 200, height: 50 }, 'Billing Process Completed', 'pink');
    const rect20 = createRectangle({ x: 1550, y: 1700 }, { width: 200, height: 50 }, 'Itemized or Collective Billing', 'lightgrey');
    //job role Billing Clerk end
    // const rect21 = createRectangle({ x: 320, y: 250 }, { width: 25, height: 500 }, '');
    // const rect22 = createRectangle({ x: 1430, y: 250 }, { width: 25, height: 500 }, '');
    const poly = createPolygon(50,50,1000,1200);
    const poly2 = createPolygon(60,60,950,240);
    
   
    // var line = createLines(1,50,1000,50);
    var line1 = createLines(0,100,2000,100);
    var line2 = createLines(450,100,450,1800);
    var line3 = createLines(1500,100,1500,1800);
    // var line6 = createLines(315,345,338,305);
    // var line7 = createLines(338,345,315,305);
    // var line8 = createLines(1415,345,1438,305);
    // var line9 = createLines(1438,345,1415,305);
    
  
    V(paper.viewport).append([line1, line2, line3]);
    var link1 = directLink(rect1, rect2,'');
    var link2 = createLink(rect2, poly2 );
    var link3 = createLink(poly2, rect3);
    var link4 = createLink(poly2, rect4);
    var link5 = createLink(poly2, rect5,);
    var link6 = createLink(poly2, rect6 );
    var link7 = createLink(poly2, rect7);
    var link8 = directLink(rect3, rect8, '');
    var link9 = directLink(rect8, rect9, '');
    var link10 = directLink(rect5, rect11, '');
    var link11 = directLink(rect11, rect12, '');
    var link12 = directLink(rect6, rect13, '');
    var link13 = directLink(rect13, rect14, '');
    var link14 = directLink(rect7, rect15, '');
    var link15 = directLink(rect15, rect16, '');
    var link16 = createLink(rect9, poly,  [{ x: 550, y: 1220 }]);
    var link17 = createLink(rect10, poly,);
    var link18 = createLink(rect12, poly, '');
    var link19 = createLink(rect14, poly);
    var link20 = createLink(rect16, poly, [{ x: 1390, y: 1220 }]);
    var link21 = createLink(poly, rect17, [{ x: 1020, y: 1400 }]);
    var link22 = createLink(rect17, rect18, '');
    var link23 = createLink(rect18, rect19, '');
    var link24 = createLink(rect20, rect18, '');

    graph.addCell([ rect1, rect2, rect3, rect4,rect5, rect6, rect7,rect8,rect9, rect10, rect11, rect12,rect13, rect14,rect15, rect16,rect17, rect18, rect19, rect20,poly, poly2, link1, link2, link3,link4, link5,link6,link7,link8,link9,link10 ,link11,link12, link13, link14,link15, link16,link17, link18, link19, link20,link21, link22,link23,link24,  textblock, textblock1, textblock2, titleTextBox]);
    paper.unfreeze();
    
    paper.setInteractivity(false);
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
