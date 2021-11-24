var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

  const  DB = 'mongodb://localhost:27017/evaxProject' ;
  //Configure Mongoose
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
mongoose.set('debug', true);
//create a cors middleware
//set headers to allow cross origin request.
//mta3 l get wel post
app.use(cors())

var citoyenController = require('./controllers/citoyenController');
app.use('/Citoyen', citoyenController);

var server = app.listen(5000, function() {
  console.log('Express server listening on port ' + 5000);
});