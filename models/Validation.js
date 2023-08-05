import {showError} from "./notification.js"
import {hiddenError} from "./notification.js"

export class Validation {
        checkEmpty = (value, errorId, mess) => {
            if (value === "") {
                showError(errorId, mess);
                return false;
            }
            hiddenError(errorId);
            return true;
        };
        checkEmptyOption = (idCheck, errorId, mess) => {
            let dataCheck = document.getElementById(idCheck);
            if (dataCheck.selectedIndex !== 0) {
                hiddenError(errorId);
                return true;
            }
            showError(errorId, mess);
            return false;
        };
       CheckNumber = (value, errorId, mess) => {
            let pattern = /^[0-9]+$/;
            if (pattern.test(value)) {
                hiddenError(errorId);
                return true;
            }
            showError(errorId, mess);
            return false;
        };
        checkId = (value, errorId, mess, array) => {
            let existId = false;
            for( const person of array) {
                console.log(person.id,value);
                if(value === person.id) {
                    existId = true;
                    break;
                }
            }
            if(existId) {
                showError(errorId, mess);
                return false;
            }
            hiddenError(errorId);
            return true;
        }
        kiemTraDoDaiKiTu = (value, errorId, mess, min, max) => {
            if (min <= value.trim().length && value.trim().length <= max) {
              hiddenError(errorId);
              return true;
            }
            showError(errorId,mess);
            return false;
        };
        checkPattern = (value, errorId, mess, letter) => {
            if (value.match(letter)) {
                hiddenError(errorId);
                return true;
            }
            showError(errorId,mess);
            return false;
          };
        kiemTraGiaTri = (value, errorId, mess, min, max) => {
            let temp = parseFloat(value);
            if (min <= temp && temp <= max) {

              hiddenError(errorId)
        
              return true;
            }
            
            showError(errorId,mess)
        
            return false;
          };
}