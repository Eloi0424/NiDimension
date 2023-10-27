const Express = require('express');
const Morgan = require('morgan');
const Cors = require('cors');
const Multer = require('multer');
const {join} = require("path");
const {readFileSync} = require("fs");
const path = require('path');
const fs = require('fs');


const App = Express();

App.use(Express.json())
Morgan.token('data',(request)=>{
    return JSON.stringify(request.body)
})
App.use(Morgan(':method :url :status :res[content-length] - :response-time ms :data'));
App.use(Cors());


// App.get('/', (req, res) => {
//     res.send('Hello World!');
// })
//
// App.get('/api/pictures', (req, res) => {
//   res.status(200).json(pictures);
// })
//
//
// App.get('/api/pictures/:id', (req, res) => {
//   const id = req.params.id;
//
//   const picture = pictures.find(picture => picture.id == id);
//
//   if (picture) {
//       res.status(200).json(picture);
//   } else {
//       res.status(404).json({message: 'Picture not found'});
//   }
// })


const Picture = require('./model/pictureModel');
const uploadPicture = require('./middleware/multerConfig')
App.post('/api/pictures/upload', uploadPicture.single('picture'), async (req, res) => {
	try {
		const newPicture = new Picture({
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
App.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})

