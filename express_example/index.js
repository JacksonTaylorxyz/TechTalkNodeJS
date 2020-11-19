const express = require('express');

// Create an instance of an express app
const app = express();

// Handle requests made to localhost:8080/, and run this function
app.get('/', function(req, res) {
    console.log('Request at / ...');
    res.send('Hello, World!');
});

// Begin listening.
app.listen(8080, function() {
    console.log('Listening...');
});
