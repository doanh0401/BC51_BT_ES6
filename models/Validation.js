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
        checkId = (value, errorId, mess, listPerson) => {
            let existId = false;
            for( const element of listPerson) {
                if(value === element.id) {
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
}