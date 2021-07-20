import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';

export {
    handleSubmit,
    checkForName
}

alert('I EXIST');

document.getElementById('form').addEventListener('submit', event => {
    Client.handleSubmit(event);
});
