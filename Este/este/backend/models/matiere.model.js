const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matiereSchema = new Schema({
   label: {
    type: String,
    required: true
  
  }
 
});

var Matiere = mongoose.model('Matiere', matiereSchema );
module.exports = Matiere;