import {table1, table2, table3, table3Results, tableRowTmpCalc, chart1, chart2, chart3} from "./createClasses.js"

export const showResult = () => {
   table3Results.innerHTML = '';
   
   let count = table1.x.length >= table2.x.length ? table2.x.length : table1.x.length;

   chart1.clearAll();
   chart2.clearAll();
   chart3.clearAll();

   chart1.setXandY(table1);
   chart2.setXandY(table2);
   chart3.setXandY(chart1, chart2);
   
   for (let i = 0; i < count; i++) {      
      let cloneTmp = tableRowTmpCalc.content.cloneNode(true);
      cloneTmp.querySelectorAll('input')[0].value = (+table1.x[i] + +table2.x[i]) / 2;
      cloneTmp.querySelectorAll('input')[1].value = (+table1.y[i] + +table2.y[i]) / 2;
      table3.querySelector('.table__result').appendChild(cloneTmp);

      chart1.creatDot(table1, i);
      chart2.creatDot(table2, i);
      chart3.creatDot(table1, table2, i);

      chart1.setPoints(table1, i);
      chart2.setPoints(table2, i);
      chart3.setPoints(table1, table2, i);

      chart1.drawRisks(table1, i);
      chart2.drawRisks(table2, i);
      chart3.drawRisks(table1, table2, i);


      if (i > 0) {
         chart1.endLine();
         chart2.endLine();
         chart3.endLine();
      }
      chart1.startLine();
      chart2.startLine();
      chart3.startLine();
   }
}