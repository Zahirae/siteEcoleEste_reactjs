const router = require('express').Router();
let Matiere = require('../models/matiere.model');

router.route('/').get((req, res)=>{
	Matiere.find()
	.then(matieres => res.json(matieres))
	.catch(err => res.status(400).json('Error :'+err));
});

router.route('/add').post((req, res) =>{
	const  label = req.body.label;
	
	const newMatiere = new Matiere({
		 label
	});
	newMatiere.save()
	.then(() => req.json('added'))
	.catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;