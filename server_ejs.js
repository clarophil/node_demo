// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// render home page
app.get('/', function (req, res) {
    res.render('home.ejs');
})

// Use template
app.get('/compter/:nombre?', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});

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