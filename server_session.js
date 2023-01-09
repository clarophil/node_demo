var http = require('http');
var https = require('https');
// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8000;

let session = require('express-session');
app.use(session({
	secret: 'my secret',
	resave: false,
	saveUninitialized: true
	})
);

// Login
app.get('/login/:user', (req, res) => {
	req.session.user = req.params.user ;
	console.log(req.session);
	res.redirect('/');
});

// Logout endpoint
app.get('/logout', function (req, res) {
	req.session.destroy();
	res.send("Logout success! ");
});


// Send message for default URL
app.get('/', (req, res) => {
	if(req.session.user) {
		res.send('Hello ' + req.session.user + ' <a href="/logout">Logout</a>' );
	}
	else res.send('Hello anonymous ! <a href="/login/toto">Login toto</a> '); 
} )
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});