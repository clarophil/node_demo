// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
var port = 8000;

// Send message for default URL
app.get('/', (req, res) => {
    res.send('Hello World !');
});

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});