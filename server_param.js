// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8000;

// Send message for default URL
app.get('/', (req, res) => {
    res.send('<h1>Hello World !</h1><br><a href="/index?name=toto" >Query request</a></h1><br><a href="/index/name/toto" >Query request</a>');
});

// using query
app.get('/index', (req, res) => 
{
    console.log( req.query.name);
    res.send('Hello ' + req.query.name );
});

// using params
app.get('/index/name/:name', (req, res) => 
{
    console.log( req.params.name);
    res.send('Hello ' + req.params.name);
});

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});