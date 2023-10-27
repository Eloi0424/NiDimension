const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
	.then(result => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})

const PictureSchema = new mongoose.Schema({
	name: String,
	url: String,
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;
