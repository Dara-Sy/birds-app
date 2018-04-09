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

app.get('/', (req, res) => {
  console.log(req)
  res.send('<h1> Hi user! Here is my birds app. </h1>')
});

// app.get('/birds', (req, res) => {
//   res.json({"name": "joe"})
// })


// module.exports = router;


app.listen(port);
// console.log(`express-quotes app running on port ${port}...`);
