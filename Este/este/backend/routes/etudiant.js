const router = require('express').Router();
let Etudiant = require('../models/etudiant.model');

router.route('/').get((req, res)=>{
	Etudiant.find()
	.then(etudiants => res.json(etudiants))
	.catch(err => res.status(400).json('Error :'+err));
});

//create a new Etudiant
router.route('/add').post((req, res) =>{
	const matricule = req.body.matricule;
	const nom = req.body.nom;
	const prenom = req.body.prenom;
	const cin = req.body.cin;
	const filliere = req.body.filliere;
	const dateNaissance = req.body.dateNaissance;
	const lieu = req.body.lieu;
	const adresse = req.body.adresse;
	const groupe = req.body.groupe;
	const email = req.body.email;

	const newEtudiant = new Etudiant({
		matricule,
		nom , 
		prenom ,
		cin ,
		filliere ,
		dateNaissance ,
		lieu ,
		adresse ,
		groupe ,
		email
	});
	newEtudiant.save()
	.then(() => res.json('added'))
	.catch(err => res.status(400).json('Error: '+err));
});




router.route('/addAbsence/:id').post((req, res) => {
	const seance=req.body.seance;
  	const dateAb=Date(req.body.dateAb);
  	const Module=req.body.Module;
	Etudiant.findById(req.params.id)
	.then(etudiant => {
		etudiant.absence = {seance,dateAb,Module};
		etudiant.save().then(() => res.json('Absence added'))
		.catch(err => res.status(400).json('Error: ' +err));
	})
});

router.route('/:id').get((req, res) => {
	Etudiant.findById(req.params.id)
	.then(etudiant =>res.json(etudiant))
	.catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
	Etudiant.findByIdAndDelete(req.params.id)
	.then(() => res.json('Etudiant deleted'))
	.catch(err => res.status(400).json('Error: ' +err));
});

router.route('/update/:id').post((req, res) => {
	Etudiant.findById(req.params.id)
	.then(etudiant =>{
		etudiant.matricule = req.body.matricule;
		etudiant.nom = req.body.nom;
		etudiant.prenom = req.body.prenom;
		etudiant.cin = req.body.cin;
		etudiant.filliere = req.body.filliere;
		etudiant.dateNaissance =req.body.dateNaissance;
		etudiant.lieu = req.body.lieu;
		etudiant.adresse = req.body.adresse;
		etudiant.groupe = req.body.groupe;
		etudiant.mail = req.body.mail;

		etudiant.save()
			.then(() => res.json('Etudiant updated'))
			.catch(err => res.status(400).json('Error: ' +err));
	})
	.catch(err => res.status(400).json('Error: ' +err));
});


module.exports = router;