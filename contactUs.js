// ---------------------- EXPRESS.js ----------------------

const express = require('express');
const port = 9000;

const path = require('path');

const db = require('./config/mongoose');   // include mongoose.js file

const ContactUs = require('./models/contactSchema');  // includig SCHEMA file 

const app = express();   //To fire the Express.js

// PARSER : parsing data form data
  
app.use(express.urlencoded());

// MIDDLE WARE 

app.use(function(req,res,next){
     console.log("middleware 1 called !");
     next();
});

// ACCESSING STATIC FILE via middleware

app.use(express.static('assets'));

app.set('view engine','ejs');             // We are telling Express That we are using EJS

app.set('views',path.join(__dirname,'views'));  // we are telling to put our view in views folder



app.get('/',function(req,res){ 
return res.render('contactUs');             // rendering contactUS page
})

app.post('/create-record',function(req,res){
    ContactUs.create({
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
    } , function(err, newRecord){
        if(err){  console.log("error in creating records"); return; }
       console.log("created **** ", newRecord);

      return res.redirect('/'); 
      
    });
});


app.listen(port,function(err){
    if (err){ console.log("error",err);}
    console.log("express server is successfully running on port : ",port);
});