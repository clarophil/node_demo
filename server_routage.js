// Import express
let express = require('express');

// Initialize the app
let app = express();

// Import body parser
app.use(express.urlencoded({ extended: true }));

// Setup server port
var port = process.env.PORT || 8000;

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes au sous-sol');
});

app.get('/etage/:etagenum?/chambre/:chambrenum', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    if (req.params.etagenum > 0) 
        res.send('Vous êtes à l\'étage ' + req.params.etagenum + ' dans la chambre n°' + req.params.chambrenum);
    else 
        res.send('Vous êtes dans la chambre n°' + req.params.chambrenum);
});

// Manage bad route
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running on port " + port);
});