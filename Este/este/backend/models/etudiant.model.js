const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var absenceSchema = new Schema({
  seance:{
    type: String,
    required: true
  },
  dateAb:{
    type: Date,
    required: false
  },
  Module:{
    type: String,
    required: true
  }

});

var etudiantSchema = new Schema({
   matricule:{
    type: Number,
    required: true
   },
   nom: {
    type: String,
    required: true
  },
   prenom: {
    type: String,
    required: true
  },
   cin: {
    type: Number,
    required: true
  },
   filliere: {
    type: String,
    required: true
  },
  dateNaissance:{
    type: Date,
    required: true
  },
   lieu:{
    type: String,
    required: true
  },
   adresse:{
    type: String,
    required: true
  },
   groupe:{
    type: String,
    required: true
  },
  email:{
     type: String,
    required: true
  },
  absence:[absenceSchema],
});

var Etudiant = mongoose.model('Etudiant', etudiantSchema );
module.exports = Etudiant;