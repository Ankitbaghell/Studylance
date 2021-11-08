
// ---------------------- EXPRESS.js ----------------------

const express = require('express');
const port = process.env.PORT || 9000;

const path = require('path');
const mongoose = require('mongoose');

const DB ='mongodb+srv://Ankitbaghel:ankitbhai@cluster0.ldwe5.mongodb.net/StudylanceDB?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=> {
      console.log("connection sucessful");
}).catch((err) => console.log("no connection taken",err));

// const db = require('./config/mongoose');   // include mongoose.js file
// const db2 = require('./config/mongoose2');   // include mongoose2.js file

const ContactUs = require('./models/contactSchema');  // includig SCHEMA file 
const Share = require('./models/shareSchema');  // includig SCHEMA file 

 
const app = express();   //To fire the Express.js

// PARSER : parsing data form data
  
app.use(express.urlencoded());

app.use('/', require('./routes'));  // use express router


// ACCESSING STATIC FILE via middleware

app.use(express.static('assets'));

app.set('view engine','ejs');             // We are telling Express That we are using EJS

app.set('views',path.join(__dirname,'views'));  // we are telling to put our view in views folder


app.listen(port,function(err){
        if(err){console.log(`Error in running the server : ${err}`);}
       console.log(`Server is running on port : ${port}`); 
 });

