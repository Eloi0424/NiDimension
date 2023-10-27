const pictureRouter = require('express').Router();
const pictureModel = require('../models/pictureMongoModel');



// pictureRouter.get('/api/pictures', (req, res) => {
// 		res.status(200).json(pictures);
// }



const uploadPicture = require('../utils/middleware/multerConfig')
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