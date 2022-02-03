export class Chart {
   constructor(selector) {
      this.box = document.querySelector(selector);
      this.canvasLine = this.box.querySelectorAll('canvas')[0];
      this.canvasLineContext = this.canvasLine.getContext('2d');
      this.canvasLineContext.strokeStyle = "#1E2C3D";
      this.canvasRisk = this.box.querySelectorAll('canvas')[1];
      this.canvasRiskContext = this.canvasRisk.getContext('2d');
      this.canvasRiskContext.strokeStyle = "#C5C5C5";
      this.dotsField = this.box.querySelector('.chart__dots-field');
      this.riskFeild = this.box.querySelector('.risks');
      this.maxX;
      this.minX;
      this.maxAbsX;
      this.maxY;
      this.minY;
      this.maxAbsY;
      this.dot;
      this.dotTooltip;
      this.pointX;
      this.pointY;
      this.riskLabelX;
      this.riskLabelY;
   }

   clearAll() {
      this.riskFeild.innerHTML = '';
      this.dotsField.innerHTML = '';
      this.canvasLineContext.clearRect(0, 0, this.canvasLine.width, this.canvasLine.height);
      this.canvasRiskContext.clearRect(0, 0, this.canvasRisk.width, this.canvasRisk.height);
   }

   creatDot(table, i) {
      this.dot = document.createElement('div');
      this.dot.classList.add('chart__dot');
      this.dot.style.right = `${(100 - ((+table.x[i] / (this.maxAbsX * 1.1)) * 100)) / 2}%`;
      this.dot.style.top = `${(100 - ((+table.y[i] / (this.maxAbsY * 1.1)) * 100)) / 2}%`;
      this.dotTooltip = document.createElement('div');
      this.dotTooltip.classList.add('chart__dot-tooltip');
      this.dotTooltip.innerHTML = `X: ${table.x[i]} <br> Y: ${table.y[i]}`;
      this.dot.appendChild(this.dotTooltip);
      this.dotsField.appendChild(this.dot);
   }

   setPoints(table, i) {
      this.pointX = 253 - 253 * (((100 - ((((+table.x[i])) / (this.maxAbsX * 1.1)) * 100)) / 2) / 100);
      this.pointY = 253 * (((100 - ((((+table.y[i])) / (this.maxAbsY * 1.1)) * 100)) / 2) / 100);
   }

   drawRisks(table, i) {
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
      this.riskLabelY.textContent = `${table.y[i]}`;
      this.riskFeild.appendChild(this.riskLabelY);

      this.riskLabelX = document.createElement('div');
      this.riskLabelX.classList.add('risks__labelX');
      this.riskLabelX.style.right = this.dot.style.right;
      this.riskLabelX.style.top = '50%';
      this.riskLabelX.textContent = `${table.x[i]}`;
      this.riskFeild.appendChild(this.riskLabelX);
   }
   
   startLine() {
      this.canvasLineContext.beginPath();
      this.canvasLineContext.moveTo(this.pointX, this.pointY);
   }

   endLine() {
      this.canvasLineContext.lineTo(this.pointX, this.pointY);
      this.canvasLineContext.closePath();
      this.canvasLineContext.stroke();
   }

   setXandY(table) {
      this.maxX = table.x.map(parseFloat).sort((a,b)=>b-a)[0];
      this.minX = table.x.map(parseFloat).sort((a,b)=>a-b)[0];
      this.maxAbsX = Math.abs(this.maxX) > Math.abs(this.minX) ? Math.abs(this.maxX) : Math.abs(this.minX);

      this.maxY = table.y.map(parseFloat).sort((a,b)=>b-a)[0];
      this.minY = table.y.map(parseFloat).sort((a,b)=>a-b)[0];
      this.maxAbsY = Math.abs(this.maxY) > Math.abs(this.minY) ? Math.abs(this.maxY) : Math.abs(this.minY);
   }
}