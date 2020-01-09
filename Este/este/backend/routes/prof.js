const router = require('express').Router();
let Prof = require('../models/prof.model');

router.route('/').get((req, res)=>{
	Prof.find()
	.then(profs => res.json(profs))
	.catch(err => res.status(400).json('Error :'+err));
});

router.route('/add').post((req, res) =>{
	const matricule = req.body.matricule;
	const nom = req.body.nom;
	const prenom = req.body.prenom;
	const cin = req.body.cin;
	const adresse = req.body.adresse;
	const tel = req.body.tel;
	const email = req.body.email;
	const salaire = req.body.salaire;
	const matiere = req.body.matiere;
	
	const newProf = new Prof({
		matricule,
		nom ,
	 	prenom ,
	 	cin ,
	 	adresse ,
	 	tel ,
	 	email ,
	 	salaire ,
	 	matiere 
	});
	newProf.save()
	.then(() => res.json('added'))
	.catch(err => res.status(400).json('Error: '+err));
});


router.route('/:id').get((req, res) => {
	Prof.findById(req.params.id)
	.then(profs =>res.json(profs))
	.catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;