// setting up express
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// register body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
