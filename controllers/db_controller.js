const ContactUs = require('../models/contactSchema');  // includig SCHEMA file 
const Share = require('../models/shareSchema');  // includig SCHEMA file 
var express = require('express');


module.exports.createContact = function(req,res){
    ContactUs.create({
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
    } , function(err, newRecord){
        if(err){  console.log("error in creating records"); return; }
       console.log("created **** ", newRecord);

      return res.redirect('back'); 
      
    });
};


module.exports.createDonate = function(req,res){
    Share.create({
        branchName : req.body.branchName,
        subjectName : req.body.subjectName,
        fileType : req.body.fileType,
        URL : req.body.URL,
        author : req.body.author
    } , function(err, newShare){
        if(err){  console.log("error in creating Share records"); return; }
       console.log("created **** ", newShare);

      return res.redirect('back'); 
      
    });
}