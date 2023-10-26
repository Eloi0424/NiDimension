const Express = require('express');


const App = Express();



App.get('/', (req, res) => {
    res.send('Hello World!');
})


App.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})

