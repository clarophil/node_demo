// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
var port = 8000;

// Send message for default URL
app.get('/', (req, res) => {
    res.send('<h1>Hello World !</h1>');
});

//setting static files
app.use(express.static('public'));

// Send message for default URL
app.get('/style', (req, res) => {
    res.sendFile('views/test.html', { root: __dirname })
});

// Send message for default URL
app.get('/request', (req, res) => {
    res.send(req)
});

// Manage bad route
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});