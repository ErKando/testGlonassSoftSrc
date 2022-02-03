import { Chart } from "./Chart.js";

export class ChartResult extends Chart {
   constructor(selector) {
      super(selector)
   }

   setXandY(chart1, chart2) {
      this.maxX = (chart1.maxX + chart2.maxX) / 2;
      this.minX = (chart1.minX + chart2.minX) / 2;
      this.maxAbsX = Math.abs(this.maxX) > Math.abs(this.minX) ? Math.abs(this.maxX) : Math.abs(this.minX);

      this.maxY = (chart1.maxY + chart2.maxY) / 2;
      this.minY = (chart1.minY + chart2.minY) / 2;
      this.maxAbsY = Math.abs(this.maxY) > Math.abs(this.minY) ? Math.abs(this.maxY) : Math.abs(this.minY);
   }

   creatDot(table1, table2, i) {
      this.dot = document.createElement('div');
      this.dot.classList.add('chart__dot')
      this.dot.style.right = `${(100 - ((((+table1.x[i] + +table2.x[i]) / 2) / (this.maxAbsX * 1.1)) * 100)) / 2}%`;
      this.dot.style.top = `${(100 - ((((+table1.y[i] + +table2.y[i]) / 2) / (this.maxAbsY * 1.1)) * 100)) / 2}%`;
      this.dotTooltip = document.createElement('div');
      this.dotTooltip.classList.add('chart__dot-tooltip');
      this.dotTooltip.innerHTML = `X: ${(+table1.x[i] + +table2.x[i]) / 2} <br> Y: ${(+table1.y[i] + +table2.y[i]) / 2}`;
      this.dot.appendChild(this.dotTooltip);
      this.dotsField.appendChild(this.dot)
   }

   setPoints(table1, table2, i) {
      this.pointX = 253 - 253 * (((100 - ((((+table1.x[i] + +table2.x[i]) / 2) / (this.maxAbsX * 1.1)) * 100)) / 2) / 100);
      this.pointY = 253 * (((100 - ((((+table1.y[i] + +table2.y[i]) / 2) / (this.maxAbsY * 1.1)) * 100)) / 2) / 100);
   }

   drawRisks(table1, table2, i) {
      this.canvasRiskContext.beginPath();
      this.canvasRiskContext.moveTo(123, this.pointY);
      this.canvasRiskContext.lineTo(130, this.pointY);
      this.canvasRiskContext.closePath();
      this.canvasRiskContext.stroke();

      this.canvasRiskContext.beginPath();
      this.canvasRiskContext.moveTo(this.pointX, 123);
      this.canvasRiskContext.lineTo(this.pointX, 130);
      this.canvasRiskContext.closePath();
      this.canvasRiskContext.stroke();

      this.riskLabelY = document.createElement('div');
      this.riskLabelY.classList.add('risks__labelY');
      this.riskLabelY.style.right = '50%';
      this.riskLabelY.style.top = this.dot.style.top;
      this.riskLabelY.textContent = `${(+table1.y[i] + +table2.y[i]) / 2}`;
      this.riskFeild.appendChild(this.riskLabelY);

      this.riskLabelX = document.createElement('div');
      this.riskLabelX.classList.add('risks__labelX');
      this.riskLabelX.style.right = this.dot.style.right;
      this.riskLabelX.style.top = '50%';
      this.riskLabelX.textContent = `${(+table1.x[i] + +table2.x[i]) / 2}`;
      this.riskFeild.appendChild(this.riskLabelX);
   }
}