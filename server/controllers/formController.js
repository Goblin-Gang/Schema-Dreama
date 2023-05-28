const mongoose = require('mongoose');
const Form = require("../model/documentModel.js");



const formController = {};
//PATCH request to update the schema form
formController.updateDocument = async (req, res, next) => {
  const { id, form } = req.body;
  try {
    console.log('req', id, form);
    const filter = { _id: id };
    const target = { schemaSchema: form };

    const result = await Form.findOneAndUpdate(filter, target, {
      returnDocument: 'after',
      returnNewDocument: true,
    });
    console.log('after updateDocument', result);
    res.locals.updatedDoc = result;
    next();
  } catch (error) {
    next({
      log: 'error in the updateDocument middleware controller',
      err: error,
    });
  }
};

//POST request to create the schema form
formController.createDocument = async (req, res, next) => {
  // const {  id, form } = req.body;
  const{  title, schemaSchema } = req.body

  //const newDoc = new Form({title: name})
  // const schemaSchema = "ddd";  
  
    try {
      console.log('in the try')
        const document = await Form.create({title, schemaSchema});
        console.log('in the callback')
        res.locals.id = document;
    
    next();
  } catch (error) {
    next({
      log: 'error in the createDocument middleware controller',
      err: error,
    });
  }
};

//DElETE request to delete the schema form
formController.deleteDocument = async (req, res, next) => {
  // get id from body
  const { id } = req.body;

  console.log('delete ID', id);

  const myQuery = { _id: id };
  console.log('delete query', myQuery);

  try {
    // query db and deleteOne document
    await Form.deleteOne(myQuery);

    next();
  } catch (error) {
    next({
      log: 'error in the deleteDocument middleware controller',
      err: error,
    });
  }
};

//GET request returning all documents

formController.getAllDocuments = async (req, res, next) => {
  // Deconstruct data from request body
  // Process obtained data
  try {
    // Interact with DB
    const documents = await Form.find({});
    res.locals.allDocuments = documents;
    // Invoke next middleware
    return next();
  } catch (error) {
    next({
      log: 'error in the formController.getAllDocuments controller',
      err: error,
    });
  }
};

////GET request returning single document based on id

formController.getOneDocument = async (req, res, next) => {
  const { id } = req.params;

  try {

    const result = await Form.findOne({ _id: id })
    res.locals.retrievedDocument = result
    next()
  } catch (error) {
    return next({
      log: 'error in the getOneDocument middleware controller',
      err: error,
    });
  }
};

// {"_id":{"$oid":"6472390fdbeb9b56b2f98835"},
// "schemaSchema": "sample schema",
// "title": "Goblin Schema"}

module.exports = formController;
