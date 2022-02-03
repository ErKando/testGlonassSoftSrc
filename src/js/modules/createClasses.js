import {Table} from "./Table.js";
import {Chart} from "./Chart.js"
import {ChartResult} from "./ChartResult.js"

const table1 = new Table('.table--1');
const table2 = new Table('.table--2');

const chart1 = new Chart('.chart1');
const chart2 = new Chart('.chart2');
const chart3 = new ChartResult('.chart3');

const table3 = document.querySelector('.table--3');
const table3Results = table3.querySelector('.table__result');
const tableRowTmpCalc = document.querySelector('#table-row-tmp--calc');

export {table1, table2, table3, table3Results, tableRowTmpCalc, chart1, chart2, chart3}