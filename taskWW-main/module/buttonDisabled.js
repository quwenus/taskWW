import { goToQuiz, inputName } from "../js/index.js";

export function buttonDisabled() { 
    if (inputName.value.trim() !== '') {
        goToQuiz.disabled = false
    }
    else {
        goToQuiz.disabled = true
    }
}
