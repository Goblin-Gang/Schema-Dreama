const express = require('express');
const OverviewController = require('../controllers/OverviewController.js');


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('you gucci')
})

module.exports = router;