const mongoose = require('mongoose');

// Creating shareSchema

const shareSchema = new mongoose.Schema({
    branchName : {
          type: String,                     // Schema for branch name 
          required:true
      },
      subjectName : {
          type: String,
          required:true                    // Schema for subject name   
      },

      fileType : {
          type: String                     // Schema for file type                     
      },

      URL:{
          type: String,
          required:true                     // schema for URL
      },
      author:{
          type: String                 // schema for author                   
      },


});

const Share = mongoose.model('Share', shareSchema);   // Share will be the name of our contactList in DB

module.exports = Share;    // to make our schema available outside

