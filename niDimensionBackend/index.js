const Express = require('express');
const Morgan = require('morgan');
const Cors = require('cors');
const Multer = require('multer');
const {join} = require("path");
const {readFileSync} = require("fs");
const path = require('path');
const fs = require('fs');
const config = require('./utils/config');

const App = Express();


App.use('/public/', Express.static('./public/'))
App.use(Express.json())
Morgan.token('data',(request)=>{
    return JSON.stringify(request.body)
})
App.use(Morgan(':method :url :status :res[content-length] - :response-time ms :data'));
App.use(Cors());
App.use(Express.static('dist'))




const pictureRouter = require('./controllers/picture')
App.use('/api/pictures', pictureRouter);





App.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
})

