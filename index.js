// setting up express
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// register body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 	Accept");
    //next();

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "OPTIONS") 
        res.send(200);
    else 
        next();
});

// setting up mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/diarium');
// require all models
var Journal = require('./api/models/journal')
var Entry = require('./api/models/entry');

// register routes
var journalRoutes = require('./api/routes/journalRoutes');
var entryRoutes = require('./api/routes/entryRoutes');
journalRoutes(app);
entryRoutes(app);

// request error handling
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// start server
app.listen(port);
console.log('Server runnning on port 3000...');
