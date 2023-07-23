const mongoose = require('mongoose');
const Form = require('../model/documentModel.js');

//middleware to handle changes to frontend schema form

const formController = {};

//PATCH request to update the schema form

formController.updateDocument = async (req, res, next) => {

	//take form id and form input from request body

	const { id, form } = req.body;

	try {
		//declare filter variable for findOneAndUpdate

		const filter = { _id: id };

		//declare target variable for findOneAndUpdate

		const target = { schemaSchema: form };

		//query DB

		const result = await Form.findOneAndUpdate(filter, target, {
			returnDocument: 'after',
			returnNewDocument: true,
		});

		//assign result to updatedDoc key on res.locals

		res.locals.updatedDoc = result;
		next();

		//error catch

	} catch (error) {
		next({
			log: 'error in the updateDocument middleware controller',
			err: error,
		});
	}
};

//POST request to create the schema form

formController.createDocument = async (req, res, next) => {

	//deconstruct title and schema for the form input from the req.body

	const { title, schemaSchema } = req.body;

  
  try {

    //query DB to create new document with req.body's title and schema

    const document = await Form.create({ title, schemaSchema });
    
    //assign returned value to newDocument property on res.locals

		res.locals.newDocument = document;

    next();
    
    //error catch

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

	const { _id } = req.body;

  //declare myQuery and assign it the value of an object with _id

	const myQuery = { _id: _id };

  try {
    
		// query db and deleteOne document

    const result = await Form.deleteOne(myQuery);
    
    //assign result property to res.locals
		res.locals.result = result;

    next();
    
    //catch error

	} catch (error) {
		next({
			log: 'error in the deleteDocument middleware controller',
			err: error,
		});
	}
};

//GET request returning all documents

formController.getAllDocuments = async (req, res, next) => {
	
	try {
		// query DB for all documents

    const documents = await Form.find({});
    
    //assign all documents to the allDocuments property on res.locals

    res.locals.allDocuments = documents;
    
    return next();
    
    //error catch
	} catch (error) {
		next({
			log: 'error in the formController.getAllDocuments controller',
			err: error,
		});
	}
};

////GET request returning single document based on id

formController.getOneDocument = async (req, res, next) => {

  //deconstruct id from req.params

	const { id } = req.params;

  try {
    
    //query DB with findOne, with id passed in as argument

    const result = await Form.findOne({ _id: id });
    
    //assign result to retrievedDocument property

    res.locals.retrievedDocument = result;
    
    next();
    
    //error catch

	} catch (error) {
		return next({
			log: 'error in the getOneDocument middleware controller',
			err: error,
		});
	}
};


module.exports = formController;
