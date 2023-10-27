const mongoose = require('mongoose');
const config = require('../utils/config');

const url = config.MONGODB_URI;
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
