import { handleSubmit } from "./js/formHandler.js";
// import { checkForName } from "./js/nameChecker.js";

alert('I EXIST');

document.getElementById('form').addEventListener('submit', event => {
    handleSubmit(event);
});


// export {
//     handleSubmit,
//     checkForName
// }
