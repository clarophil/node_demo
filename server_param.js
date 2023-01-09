// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8000;

// using query
app.get('/index', (req, res) => 
{
    console.log( req.query.name);
    res.send('Bonjour ' + req.query.name );
});

// using params
app.get('/index/name/:name', (req, res) => 
{
    console.log( req.params.name);
    res.send('Bonjour ' + req.params.name);
});

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});