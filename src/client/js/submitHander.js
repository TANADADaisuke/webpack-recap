import { handleSubmit } from './formHandler.js'

document.getElementById('form').addEventListener('submit', event => {
    handleSubmit(event);
});
