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




const pictureRouter = require('./controllers/picture')
App.use('/api/pictures', pictureRouter);





App.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})

