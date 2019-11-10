var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we are connect");
});

var kittySchema = new mongoose.Schema({
    name: String
  });   

  var Kitten = mongoose.model('Kitten', kittySchema);


  var silence = new Kitten({ name: 'Silence' });
console.log(silence.name);