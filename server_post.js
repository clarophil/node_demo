// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
let port = 8000;

// Initialiaze list of names
let listname = ["Paul", "Pierre"];

// Import body parser
let bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Form
app.get( '/',(request, response) => {
    response.render("monformulaire.ejs",{listname:listname} );
} );

// Send message for default URL
app.post('/add', (request, response) => {
    console.log(request.body);
    listname.push(request.body.new_name);
    response.redirect('/');
} );

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});