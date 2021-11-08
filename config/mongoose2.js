const moongoose = require('mongoose');

moongoose.connect('mongodb://localhost/share_db');  // Mongoose connected with DB

const db2 = moongoose.connection;    // to see connected or not

db2.on('error',console.error.bind(console,'error connecting to DB')); // if error in connection

db2.once('open',function(){
    console.log('successfully connected to DB');    // if up and runnning 
}); 

module.exports = db2;