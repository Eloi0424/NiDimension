const pictureRouter = require('express').Router();
const pictureModel = require('../models/pictureMongoModel');



pictureRouter.get('/', (req, res) => {
	pictureModel.find({}).then((result) => {
		res.json({
			data:result
		})
	})
})


pictureRouter.get('/:id', (req, res) => {
	// const id = Number(req.params.id);
	pictureModel.findById(req.params.id).then((picture) => {
		res.json(picture)
	})
})



const uploadPicture = require('../utils/middleware/multerConfig')
const {response} = require("express");
pictureRouter.post('/upload', uploadPicture.single('picture'),async (req, res) => {
	try {
		const newPicture = new pictureModel({
			name: req.body.name,
			url : req.file.path
		});
		await newPicture.save()
		res.send('Image uploaded successfully.');
	} catch (error) {
		res.status(500).send(error.message);
	}
	// console.log(req)
	// res.send('Image uploaded successfully.');
})
module.exports = pictureRouter;