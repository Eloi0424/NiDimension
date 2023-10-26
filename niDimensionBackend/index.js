const Express = require('express');
const Morgan = require('morgan');
const Cors = require('cors');



const App = Express();

App.use(Express.json())
Morgan.token('data',(request)=>{
    return JSON.stringify(request.body)
})
App.use(Morgan(':method :url :status :res[content-length] - :response-time ms :data'));

App.use(Cors());


const pictures = [
    {
        url: "src/assets/pictures/red.png",
        name: "red",
        description: "a red picture",
        likes: 0,
        id: 0
    },
    {
        url: "src/assets/pictures/green.png",
        name: "green",
        description: "a green picture",
        likes: 0,
        id: 1
    },
    {
        url: "src/assets/pictures/blue.png",
        name: "blue",
        description: "a blue picture",
        likes: 0,
        id: 2
    },
    {
        url: "src/assets/pictures/red.png",
        name: "red",
        description: "a red picture",
        likes: 0,
        id: 3
    },
    {
        url: "src/assets/pictures/green.png",
        name: "green",
        description: "a green picture",
        likes: 0,
        id: 4
    },
    {
        url: "src/assets/pictures/blue.png",
        name: "blue",
        description: "a blue picture",
        likes: 0,
        id: 5,
    },
    {
        url: "src/assets/pictures/red.png",
        name: "red",
        description: "a red picture",
        likes: 0,
        id: 6,

    },
    {
        url: "src/assets/pictures/green.png",
        name: "green",
        description: "a green picture",
        likes: 0,
        id: 7
    },
    {
        url: "src/assets/pictures/blue.png",
        name: "blue",
        description: "a blue picture",
        likes: 0,
        id: 8
    }
]

App.get('/', (req, res) => {
    res.send('Hello World!');
})

App.get('/api/pictures', (req, res) => {
  res.status(200).json(pictures);
})

App.get('/api/pictures/:id', (req, res) => {
  const id = req.params.id;

  const picture = pictures.find(picture => picture.id == id);

  if (picture) {
      res.status(200).json(picture);
  } else {
      res.status(404).json({message: 'Picture not found'});
  }
})



App.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})

