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

// Send static files
app.get('/style', (req, res) => {
    res.sendFile('views/test.html', { root: __dirname });
});

// Send dynamic response
app.get('/dynamic', (req, res) => {
    let date_ob = new Date();// current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    res.send('<h1>Hello World ! ' + hours + ':' + minutes + ':' + seconds +' </h1>');
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