import {showResult} from "./modules/showResult.js"
import {table3} from "./modules/createClasses.js"


table3.addEventListener('click', function(e) {
   if (e.target.classList.contains('table__btn--calc')) {
      showResult();
   }
})