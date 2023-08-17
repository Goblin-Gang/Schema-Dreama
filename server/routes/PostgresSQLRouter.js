const express = require('express');
const PSQLController = require('../controllers/PSQLController.js');


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('you gucci')
})

module.exports = router;