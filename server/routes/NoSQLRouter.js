const express = require('express');
const NSQLController = require('../controllers/NSQLController.js');


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('you gucci')
})



module.exports = router;