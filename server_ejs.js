// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Set route
app.get('/', (request, response) => {
    // response.send("Hello world");
    response.render('home.ejs', {name: "Paul"});
});

// using url
app.get('/index', (request, response) => {
    // response.send('Bonjour ' + request.query.name);
    response.render('home.ejs', {name: request.query.name});
});

// using param
app.get('/index/:name', (request, response) => {
    // response.send('Bonjour ' + request.params.name);
    response.render('home.ejs', {name: request.params.name});
});

// Use template
app.get('/compter/:nombre?', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});

});

//setting middleware
app.use(express.static('public')); 

// Manage bad route
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running on port " + port);
});