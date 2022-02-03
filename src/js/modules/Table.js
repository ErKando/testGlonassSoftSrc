import {showResult} from "../modules/showResult.js"

const tableRowTemplate = document.querySelector('#table-row-tmp');

export class Table {
   constructor(selector) {
      this.box = document.querySelector(selector);
      this.boxInner = this.box.querySelector('.table__inner')
      this.addBtn = this.box.querySelector('.table__btn--add');
      this.forms = this.box.querySelectorAll('form');
      this.btns = this.boxInner.querySelectorAll('button');
      this.x = [];
      this.y = [];

      this.listenForms();
      this.setIdBtn();
      
      if (this.addBtn) {
         this.addBtn.addEventListener('click', () => {
            const tableRowClone = tableRowTemplate.content.cloneNode(true);
            this.boxInner.appendChild(tableRowClone);
            this.listenForms();
            this.setIdBtn();
         })
      }

      this.boxInner.addEventListener('click', (e) => {
         if (e.target.classList.contains('js-remove')) {
            this.boxInner.removeChild(e.target.parentNode);
            this.x.splice(e.target.dataset.id, 1)
            this.y.splice(e.target.dataset.id, 1)
            showResult();
            this.setIdBtn();
         }
      })
   }

   listenForms() {
      this.forms = this.box.querySelectorAll('form');
      this.forms.forEach((item, index) => {
         item.addEventListener('input', () => {
            this.x[index] = item.querySelectorAll('input')[0].value
            this.y[index] = item.querySelectorAll('input')[1].value
         })
      });
   }

   setIdBtn() {
      this.boxInner.querySelectorAll('button').forEach((item, index) => {
         item.dataset.id = index;
      })
   }
}