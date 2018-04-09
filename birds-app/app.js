// standard, importing an object
const express = require('express'); // what type of thing did we import? => a function
// console.log('this is express: ', express);
// app is defined here, call the express
const app = express();
// console.log('this is app: ', app);
const port = process.env.PORT || 3000;
// require is importing

let birds = require('./db/birds.js')
// const birdsRouter = require('./routes/birds.js')

// const router = express.Router();

// this is my welcome and decription message to user

app.get('/', (req, res) => {
  console.log(req)
  res.send('<h1> Hi user! Here is my birds app. </h1>')
});

// app.get('/birds', (req, res) => {
//   res.json({"name": "joe"})
// })

// with the http://localhost:3000/birds it lists the birds json

app.get('/birds', (req, res) => {
  res.send(birds);
});

// this is to access my birds type

app.get('/birds/type', (req, res) => {
  res.send(birds[0].type);
});

// access bird type


app.get('/birds/type/:type', (req, res) => {
  let birdType = req.params.type;
  for(let i=0; i<birds.length; i++) {
    if(birds[i].type == birdType) {
      res.send(birds[i]);
    }
  }

});


// access to bird id


app.get('/birds/:id', (req, res) => {
  res.json(birds[req.params.id]);
});



// module.exports = router;


app.listen(port);
