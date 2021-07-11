import { handleSubmit } from "./js/formHandler";
import { checkForName } from "./js/nameChecker";

alert('I EXIST');

document.getElementById('form').addEventListener('submit', event => {
    handleSubmit(event);
});


// export {
//     handleSubmit,
//     checkForName
// }
