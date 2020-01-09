const router = require('express').Router();
let Groupe = require('../models/groupe.model');

router.route('/').get((req, res)=>{
	Matiere.find()
	.then(groupes => res.json(groupes))
	.catch(err => res.status(400).json('Error :'+err));
});

router.route('/add').post((req, res) =>{
	const  label = req.body.label;
	
	const newGroupe = new Groupe({
		 label
	});
	newGroupe.save()
	.then(() => req.json('added'))
	.catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;