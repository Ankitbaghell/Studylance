const mongoose = require('mongoose');

// Creating contactSchema

const contactSchema = new mongoose.Schema({
      fname : {
          type: String,                     // Schema for first name 
          required:true
      },
      lname : {
          type: String                    // Schema for last name   
      },

      email : {
          type: String,                 // Schema for email
          required : true                     
      },

      phone:{
          type: String                     // schema for phone
      },
      message:{
          type: String,                   // schema for message
          required : true                     
      },


});

const ContactUs = mongoose.model('ContactUs', contactSchema);   // Contact will be the name of our contactList in DB

module.exports = ContactUs;    // to make our schema available outside

