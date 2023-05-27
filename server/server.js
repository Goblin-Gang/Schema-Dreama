//------------------REQUIRES------------------

//require in express
const express = require('express');
//require in mongoose
const mongoose = require('mongoose');
//declare app with express invocation
const app = express();
//declare path;
const path = require('path');
//declare port
const cors = require('cors')
//require cors
const formController = require('./controllers/formController')
//require in the controllers
const PORT = 3000;
//listen-connect to server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  

//--------------STANDARD MIDDLEWARE (JSON, FORM PARSER, CORS)----------------//

app.use(express.static(path.resolve(__dirname, './client')))

app.use(express.json())

//invoke use on app passing in express.JSON

app.use(express.urlencoded())

//invoke form parser

app.use(cors())
//invoke cors 


// app.use('/', (req, res) => {
//     res.status(200).json('not working yet')
// })


//------------------SERVER REQUESTS------------------

//connect to mongoDB
const MONGO_URI = 'mongodb+srv://steve:6zJJuPADTTD1IjjE@cluster0.a0kwcdx.mongodb.net/';
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .then((err)=> console.log(err))
//GET for static HTML

//POST for create document
app.post('/', formController.createDocument, (req, res) => {
    return res.status(200).send(res.locals.id)
})

//DELETE for delete document
app.delete('/', formController.deleteDocument, (req, res) => {
    return res.status(200).send('ahhh my legs')
})


//PATCH for update document

app.patch('/', formController.updateDocument, (req, res) => {
    return res.status(200).json(res.locals.updatedDoc)
})



//GET for selecting past document

// app.get('/:id', (req, res) => {
//     return res.status(200)
// })





//GET to return all past documents
app.get('/getalldocuments', formController.getAllDocuments, (req, res) => {
    return res.status(200).json(res.locals.allDocuments)
});



//------------------ERROR HANDLERS------------------

//catch-all 

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
