// maybe for stretch goals 

// Required import
const express = require('express');

// Import of all router
const router = express.Router();
const PSQLRouter = require('./PostgresSQLRouter.js');
const NSQLRouter = require('./NoSQLRouter.js')
const SMRouter = require('./SchemaModelRouter.js');

// Master API router
router.use('/PostgresSQL', PSQLRouter);
router.use('/NoSQL', NSQLRouter);
router.use('/SchemaModel', SMRouter);

module.exports = router;