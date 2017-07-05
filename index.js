// setting up express
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// setting up mongoose
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/diarium');

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('Server runnning on port 3000...');
