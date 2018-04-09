const express = require('express');
const router = express.Router();

// did I define app here? no, router
router.get('/birds', (req, res) => {
  res.send('<h1> Hi user! Here is my birds app. </h1>')
})

module.exports = router;


