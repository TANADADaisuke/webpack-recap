import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';

import './styles/styles.css';

export {
    handleSubmit,
    checkForName
}

alert('I EXIST');

document.getElementById('form').addEventListener('submit', event => {
    Client.handleSubmit(event);
});
