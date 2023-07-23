//------------------REQUIRES------------------

//require in express
const express = require('express');
//require in mongoose
const mongoose = require('mongoose');
//declare app with express invocations
const app = express();
//declare path;
const path = require('path');
//declare port
const cors = require('cors')
//require cors
const formController = require('./controllers/formController')
//require in the controllers 
const userController = require('./controllers/userController')
//require in the userControllers
const PORT = 3000;
//listen-connect to server

require('dotenv').config();


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  

//--------------STANDARD MIDDLEWARE (JSON, FORM PARSER, CORS)----------------//

//invoke cors 

app.use(cors())

app.use(express.static(path.resolve(__dirname, './client')))

//invoke use on app passing in express.JSON

app.use(express.json())


//invoke form parser

app.use(express.urlencoded())


 


// app.use('/', (req, res) => {
//     res.status(200).json('not working yet')
// })


//------------------SERVER REQUESTS------------------

//connect to mongoDB

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .then((err)=> console.log(err))


//POST for create document
app.post('/', formController.createDocument, (req, res) => {
    return res.status(200).json(res.locals.newDocument)
})

//DELETE for delete document
app.delete('/', formController.deleteDocument, (req, res) => {
    return res.status(200).json(res.locals.result)
})


//PATCH for update document

app.patch('/', formController.updateDocument, (req, res) => {
    return res.status(200).json(res.locals.updatedDoc)
})


//GET to return all past documents
app.get('/getalldocuments', formController.getAllDocuments, (req, res) => {
    return res.status(200).json(res.locals.allDocuments)
});

//GET for selecting past document

app.get('/:id', formController.getOneDocument, (req, res) => {
    return res.status(200).json(res.locals.retrievedDocument)
})

//POST for logging in

app.post('/login', userController.verifyLogin, (req, res) => {
    return res.status(200).json(res.locals)
})

//POST for signing up

app.post('/signup', userController.signUp, (req, res) => {


    return res.status(200).json(`${res.locals.user.username}'s profile has been successfully created`)

})

//------------------ERROR HANDLERS------------------


//global
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Error caught in global handler',
        status: 500,
        message: {err: 'An error occurred'}
    }
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})




module.exports = app;
