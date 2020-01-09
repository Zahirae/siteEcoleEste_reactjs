const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupeSchema = new Schema({
   label: {
    type: String,
    required: true
  }
  
 
});

var Groupe = mongoose.model('Groupe', groupeSchema );
module.exports = Groupe;