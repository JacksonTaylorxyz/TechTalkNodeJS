const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log('Request at / ...');
    res.send('Hello, World!');
});

app.listen(8080, function() {
    console.log('Listening...');
});
