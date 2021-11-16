// ---------------------- EXPRESS.js ----------------------

const express = require('express');
const port = 7000;

const path = require('path');

const db2 = require('./config/mongoose2');   // include mongoose.js file

const Share = require('./models/shareSchema');  // includig SCHEMA file 

const app = express();   //To fire the Express.js

// PARSER : parsing data form data
  
app.use(express.urlencoded());

// MIDDLE WARE 

app.use(function(req,res,next){
     console.log("middleware 2 called !");
     next();
});

// ACCESSING STATIC FILE via middleware

app.use(express.static('assets'));

app.set('view engine','ejs');             // We are telling Express That we are using EJS

app.set('views',path.join(__dirname,'views'));  // we are telling to put our view in views folder



app.get('/',function(req,res){ 
return res.render('donate');             // rendering donate page
})

app.post('/create-donate',function(req,res){
    Share.create({
        branchName : req.body.branchName,
        subjectName : req.body.subjectName,
        fileType : req.body.fileType,
        URL : req.body.URL,
        author : req.body.author
    } , function(err, newShare){
        if(err){  console.log("error in creating Share records"); return; }
       console.log("created **** ", newShare);

      return res.redirect('/'); 
      
    });
});


app.listen(port,function(err){
    if (err){ console.log("error",err);}
    console.log("express server is successfully running on port : ",port);
});