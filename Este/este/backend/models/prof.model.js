const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profSchema = new Schema({
  matricule:{
    type: String,
    required: true
   },
   nom:{
    type: String,
    required: true
  },
   prenom: {
    type: String,
    required: true
  },
   cin: {
    type: String,
    required: true
  }, 
  adresse:{
    type: String,
    required: true
  },
  tel:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  salaire:{
     type: Number,
    required: true
  },
  matiere:{
    type: String,
    required: false
  },
  
});

var Prof = mongoose.model('Prof', profSchema );
module.exports = Prof;