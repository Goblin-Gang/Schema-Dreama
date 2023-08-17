const express = require('express');
const formController = require('../controllers/formController.js');


const router = express.Router();

//POST for create document
router.post('/', formController.createDocument, (req, res) => {
  return res.status(200).json(res.locals.newDocument)
})

//DELETE for delete document
router.delete('/', formController.deleteDocument, (req, res) => {
  return res.status(200).json(res.locals.result)
})

//PATCH for update document
router.patch('/', formController.updateDocument, (req, res) => {
  return res.status(200).json(res.locals.updatedDoc)
})

//GET to return all past documents
router.get('/getalldocuments', formController.getAllDocuments, (req, res) => {
  return res.status(200).json(res.locals.allDocuments)
});

//GET for selecting past document

router.get('/:id', formController.getOneDocument, (req, res) => {
  return res.status(200).json(res.locals.retrievedDocument)
})

module.exports = router;