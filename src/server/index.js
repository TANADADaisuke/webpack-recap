// Setup empty JS object to act as endpoint for all routes
let projectData = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
const port = 3001;
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
}


// GET Route
const sendData = (req, res) => {
    res.send(projectData);
    console.log('/all: success', projectData);
}

app.get('/test', sendData);

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});
